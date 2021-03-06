import React, { Component } from "react";
import "./Goals.css";
import ApiContext from "../ApiContext";
import Goals from "./Goals";
import GoalsWheel from "./GoalsWheel";
import GoalsApiService from "../../services/goals-service";

export default class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [{}],
      goal_name: "",
      goal_value: "",
      error: "",
      id: 0,
      loader: false,
      deleteloader:false
    };
  }

  static contextType = ApiContext;

  componentDidMount() {
    this._mounted = true;
    GoalsApiService.getGoals().then((res) => {
      if (this._mounted) {
        this.setState({ goals: [res] });
      }
    });
  }

  componentDidUpdate() {
    this._mounted = true;
    GoalsApiService.getGoals().then((res) => {
      if (this._mounted) {
        this.setState({ goals: [res], loader: false, deleteloader: false });
      }
    });
  }

  handleDeleteGoal = ({target}) => {
    this.setState({deleteloader: true})
    GoalsApiService.deleteGoals(target.id)
  };

  handleGoal = (e) => {
    e.preventDefault();
    let name = e.target.name;
    this.setState({ [`${name}`]: e.target.value });
  };
  handleSubmitGoals = (e) => {
    e.preventDefault();
    let number = null;
    let recentValue = null;
    let goal_name = this.state.goal_name;
    let goal_value = this.state.goal_value;
    this.setState({loader: true})
    if (this.context.entries[0] != null && this.context.entries[0].length > 0) {
      number = this.context.entries[0].length;
      recentValue = this.context.entries[0][number - 1];
    }
    let networth = 0;
    if (recentValue != null) {
      networth = recentValue.networth_total;
      networth = Number(networth.replace(/[^0-9.-]+/g, ""));
    }
    if (this.state.goals[0] != null && this.state.goals[0].length <= 2) {
      GoalsApiService.postGoals(goal_name, goal_value)
        .then((res) => {
          this.setState({ goal_name: "", goal_value: "" });
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    } else this.setState({ error: "Limit to 3 goals" });
  };

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    let goals = this.state.goals;

    return (
      <ApiContext.Provider
        value={{
          goals: this.state.goals,
          handleDeleteGoal: this.handleDeleteGoal,
          entries: this.context.entries,
        }}
      >
        <div id="GoalsForm">
          <br />
          <br />
          <h2 className="sectionTitle">Your Financial Goals:</h2>

          <div className="Goals">
            <div className="GoalsForm">
              <h3 className="goalsLabel">Save New Goals:</h3>
              <form
                className="Gaols-form"
                onSubmit={(e) => this.handleSubmitGoals(e)}
              >
                <div className="inputs">
                  <label htmlFor="GoalsForm__goal_title">Goal: </label>
                  <input
                    required
                    name="goal_name"
                    size="30"
                    value={this.state.goal_name}
                    onChange={(e) => this.handleGoal(e)}
                    id="GoalsForm__goal_title"
                  ></input>
                  <br /> <br />
                  <label className="inputs" htmlFor="GoalsForm__goal_title">
                    Goal Value: $
                  </label>
                  <input
                    required
                    name="goal_value"
                    type="number"
                    value={this.state.goal_value}
                    onChange={(e) => this.handleGoal(e)}
                    id="GoalsForm__goal_value"
                  ></input>
                </div>
                <br />

                <br />
                <button className="submitButton" type="submit">
                  {this.state.loader
                  ? (<div className="small-loader"></div>)
                  : 'Add Goal'}
                </button>
                <div>
                  {goals[0].length <= 2 ? null : <p>{this.state.error}</p>}
                </div>
              </form>
            </div>

            <Goals loader={this.state.deleteloader} />
            <GoalsWheel />
          </div>
        </div>
        <br />
        <br />
      </ApiContext.Provider>
    );
  }
}
