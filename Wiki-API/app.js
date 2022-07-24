const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true});

articlesSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articlesSchema);

const article1 = new Article({
  title: "articleTitle1",
  content: "articleContent1"
})

app.route("/articles")

  .get((req, res) => {
    Article.find({}, function(err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });


app.route("/articles/:articleName")
  .get((req, res) => {
    const articleName = req.params.articleName;
    Article.findOne({title: articleName}, (err, foundArticle) => {
      if (!err) {
        if (foundArticle) {
          res.send(foundArticle);
        } else {
          res.send("No article found");
        }
      } else {
        res.send(err);
      }
    })
  })
  .put((req, res) => {
    Article.updateOne(
      {title: req.params.articleName},
      {title: req.body.title, content: req.body.content},
      (err, updateResult) => {
        if (!err) {
          res.send("Update Successfully");
        }
      })
    })
    .patch((req, res) => {
      Article.updateOne(
        {title: req.params.articleName},
        {$set: req.body},
        (err) => {
          if (!err) {
            res.send("Successfully updated article.")
          } else {
            res.send(err)
          }
        }
      )
    })
    .delete((req, res) => {
      Article.deleteOne(
        {title: req.params.articleName},
        (err) => {
          if (!err) {
            res.send("Delete Successfully");
          } else {
            res.send(err);
          }
        }
      )
    })


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
