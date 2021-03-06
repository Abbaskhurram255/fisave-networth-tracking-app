import React, { Component } from "react";
import ApiContext from "../ApiContext";
import CalculationApiService from "../../services/calculations-service";
import "./Overtime.css";

export default class Overtime extends Component {
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    CalculationApiService.deleteCalculations(id).then(
      this.context.handleDeleteEntry()
    );
  };

  render() {
    let entries = this.context.entries[0];
    let options = { style: "currency", currency: "USD" };
    let numberFormat = new Intl.NumberFormat("en-US", options);
    if (entries != null && entries.length > 0) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].networth_total.includes("-")) {
          entries[i].color = "red";
        } else entries[i].color = "green";
      }
    }

    return (
      <div id="Overtime" className="Overtime">
        {this.context.entries.length > 0 ? (
          <h2 className="Overtime-title">Historical Networth Data:</h2>
        ) : null}

        {entries != null && entries.length > 0 ? (
          <div className="Overtime-list">
            {entries.map((entry) => {
              return (
                <p style={{ color: `${entry.color}` }} key={entry.id}>
                  {entry.date_created.slice(5, 7)}/
                  {entry.date_created.slice(0, 4)}: {entry.networth_total}{" "}
                  <button
                    id={entry.id}
                    className="deleteButton"
                    onClick={this.handleClickDelete}
                  >
                    Delete
                  </button>
                </p>
              );
            })}
          </div>
        ) : (
          <i>
            Add your personal finance information to track your networth over
            time
          </i>
        )}
        {entries != null && entries.length > 1 ? (
          <p>
            Over your two most recent entries, your net worth has changed by{" "}
            {numberFormat.format(
              entries[entries.length - 1].networth_total_value -
                entries[entries.length - 2].networth_total_value
            )}
          </p>
        ) : null}
        <br />
        <br />
      </div>
    );
  }
}
