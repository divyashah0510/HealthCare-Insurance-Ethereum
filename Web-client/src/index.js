import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Patient from "./patient";
import Hadmin from "./hadmin";
import Labadmin from "./ladmin";
import Insurance from "./insurance";
import "./index.css";
//import HealthCare from './HealthCare'
const FullApp = () => (
  <Router>
    <div>
      <header className="App-header">
        <h1 className="App-title text-center">HealthCare Insurance</h1>
      </header>
      <Route exact path="/" component={App} />
      <Route path="/patient" component={Patient} />
      <Route path="/hadmin" component={Hadmin} />
      <Route path="/labadmin" component={Labadmin} />
      <Route path="/insurance" component={Insurance} />
    </div>
  </Router>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      login: false,
      selectedMode: "Select Mode..",
    };
  }

  handleModeChange = (e) => {
    this.setState({ selectedMode: e.target.value });
    this.setState({ user: "" }); // Reset user when mode changes
  };

  handleLogin = () => {
    const { selectedMode, password } = this.state;
    let userType = "";
    
    switch (selectedMode) {
      case "Patient":
        userType = password === "patient" ? "patient" : "";
        break;
      case "Hospital Admin":
        userType = password === "hadmin" ? "hadmin" : "";
        break;
      case "Lab Admin":
        userType = password === "labadmin" ? "labadmin" : "";
        break;
      case "Insurance Company":
        userType = password === "insurance" ? "insurance" : "";
        break;
      default:
        userType = "";
    }

    this.setState({ login: true, user: userType });
  };

  render() {
    const { login, user, selectedMode } = this.state;

    if (login && user) {
      switch (user) {
        case "patient":
          return <Redirect to="/patient" />;
        case "hadmin":
          return <Redirect to="/hadmin" />;
        case "labadmin":
          return <Redirect to="/labadmin" />;
        case "insurance":
          return <Redirect to="/insurance" />;
        default:
          break;
      }
    }

    return (
      <div className="container container-fluid login-conatiner">
        <div
          style={{
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <div className="login-form">
            <form method="post" onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-center">Log in</h2>

              <div className="form-group">
                <select
                  id="selection"
                  className="form-control"
                  value={selectedMode}
                  onChange={this.handleModeChange}
                >
                  <option value="Select Mode..">Select Mode..</option>
                  <option value="Patient">Patient</option>
                  <option value="Hospital Admin">Hospital Admin</option>
                  <option value="Lab Admin">Lab Admin</option>
                  <option value="Insurance Company">Insurance Company</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleLogin}
                >
                  Submit
                </button>
              </div>
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById("root"));
