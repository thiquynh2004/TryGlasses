import React, { Component } from "react";
import Glasses from "./glassesList";
import Header from "./header";
import Model from "./model";
import background from './img/background.jpg';
import data from "./data.json";
import glass1 from './img/v8.png'
import styles from "./tryGlass.module.css"


export default class TryGlasses extends Component {
  state = {
    selectedGlass: glass1, 
  };
  handleSelectedGlass = (glass) => {
    console.log(glass);
    this.setState({ selectedGlass: glass });
    // this.setState({ glass:glass });
  };
  render() {
    return (
      <div className = {styles.tryGlasses} style={{backgroundImage: `url(${background})`}}>
        <Header />
        <Model glass={this.state.selectedGlass}/>
        <Glasses glasses={data} onSelect={this.handleSelectedGlass} />
      </div>
    );
  }
}
