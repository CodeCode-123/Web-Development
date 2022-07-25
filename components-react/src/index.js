import React from "react";
import ReactDOM from "react-dom/client";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blog post" 
                    image={faker.image.image()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00PM" 
                    content="I like the subject" 
                    image={faker.image.image()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="I like the writing" 
                    image={faker.image.image()} 
                />
            </ApprovalCard>
        </div>
    );
};

root.render(<App />);