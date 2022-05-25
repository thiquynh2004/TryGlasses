import React, { Component } from "react";
import styles from "./model.module.css";
import model from "./img/model.jpg";
// import glass1 from "./img/v1.png"

class Model extends Component {
  render() {
    const { glass } = this.props;
    console.log(glass)

    
    return (
      <div className={styles.model} >
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.left}>
              <img src={model} alt="model" />
              <div className={styles.header}>
                <img src={window.location.origin + glass.url} alt={glass.name} />
              </div>
              <div className={styles.detail}>
                <h1>{glass.name}</h1>
                <p>{glass.desc}</p>
              </div>
            </div>
            <div className={styles.right}>
              <img src={model} alt="model" />
              <div className={styles.header}>
                <img src={window.location.origin + glass.url} alt={glass.name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
