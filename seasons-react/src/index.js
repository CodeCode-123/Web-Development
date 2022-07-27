import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import './Spinner';
import Spinner from "./Spinner";
import './style/App.css';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }),
        ); 
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');

    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage } </div>
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else {
            return (
                <Spinner message="Please accept location request" />
            );
        }
    };

    
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}


root.render(<App />)