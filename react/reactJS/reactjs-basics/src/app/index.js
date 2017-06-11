import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      homeLink : "Home",
      homeMounted : true
    };
  }

  onChangeHomeMounted(){
    this.setState({
      homeMounted : !this.state.homeMounted
    });
  }

  onGreet(){
    alert("Hello");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLink : newName
    });
  }

  render() {

    let homeComponent = "";

    if(this.state.homeMounted){
      homeComponent = (
        <Home
          name={ "Max" }
          initialAge={ 18 }
          greet = { this.onGreet }
          changeLink = { this.onChangeLinkName.bind(this)}
          initialLinkName = { this.state.homeLink }
          >
        </Home>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={ this.state.homeLink }/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            { homeComponent }
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">unmount/mount home component</button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'))
