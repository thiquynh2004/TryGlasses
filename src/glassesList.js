/* eslint-disable array-callback-return */
import React, { Component } from "react";
import styles from "./glasses.module.css";

class Glasses extends Component {
  render() {
    const { glasses , onSelect} = this.props;

    return (
      <div className={styles.glasses}>
        <div className={styles.listGlass}>
          {glasses.map((glass) => (
            <div key={glass.id} onClick={() => onSelect(glass)}>
              <img src={window.location.origin + glass.url} alt="glass" />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Glasses;
