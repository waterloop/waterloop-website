import React from "react";
import "../../theme/global.scss";

type MyProps = {
  role: string;
  technicalQ: string;
  termList: [string, string, string, string, string];
};
type MyState = {
  fullName: string;
  email: string;
  program: string;
  term: string;
  applicationTerm: string;
  termType: string;
  whyJoin: string;
  technicalAns: string;
  termCheckedArray: [boolean, boolean, boolean, boolean, boolean];
  termTypeCheckedArray: [boolean, boolean, boolean];
};

const SubmitBtnStyle = {
  backgroundColor: "#FED138",
  fontSize: "large",
  fontFamily: "IBM Plex Sans",
};

const radioStyle = {
  marginLeft: "5%",
  marginRight: "5%",
};

class Form extends React.Component<MyProps, MyState> {
  //TODO test if it works after global styling
  constructor(props: MyProps) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      program: "",
      term: "",
      applicationTerm: "",
      termType: "",
      whyJoin: "",
      technicalAns: "",
      termCheckedArray: [false, false, false, false, false],
      termTypeCheckedArray: [false, false, false],
    };
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.name == "entry.1105765972") {
      // fullName
      this.setState({ fullName: event.currentTarget.value });
    } else if (event.currentTarget.name == "entry.204636100") {
      // email
      this.setState({ email: event.currentTarget.value });
    } else if (event.currentTarget.name == "entry.1369449321") {
      // program
      this.setState({ program: event.currentTarget.value });
    } else if (event.currentTarget.name == "entry.1488954434") {
      // term
      this.setState({ term: event.currentTarget.value });
    } else if (
      event.currentTarget.name == "applicationTerm" &&
      event.currentTarget.id == "0"
    ) {
      this.setState({ termCheckedArray: [true, false, false, false, false] });
      this.setState({ applicationTerm: this.props.termList[0] });
    } else if (
      event.currentTarget.name == "applicationTerm" &&
      event.currentTarget.id == "1"
    ) {
      this.setState({ termCheckedArray: [false, true, false, false, false] });
      this.setState({ applicationTerm: this.props.termList[1] });
    } else if (
      event.currentTarget.name == "applicationTerm" &&
      event.currentTarget.id == "2"
    ) {
      this.setState({ termCheckedArray: [false, false, true, false, false] });
      this.setState({ applicationTerm: this.props.termList[2] });
    } else if (
      event.currentTarget.name == "applicationTerm" &&
      event.currentTarget.id == "3"
    ) {
      this.setState({ termCheckedArray: [false, false, false, true, false] });
      this.setState({ applicationTerm: this.props.termList[3] });
    } else if (
      event.currentTarget.name == "applicationTerm" &&
      event.currentTarget.id == "4"
    ) {
      this.setState({ termCheckedArray: [false, false, false, false, true] });
      this.setState({ applicationTerm: this.props.termList[4] });
    } else if (
      event.currentTarget.name == "termType" &&
      event.currentTarget.id == "a"
    ) {
      this.setState({ termTypeCheckedArray: [true, false, false] });
      this.setState({ termType: "School Term" });
    } else if (
      event.currentTarget.name == "termType" &&
      event.currentTarget.id == "b"
    ) {
      this.setState({ termTypeCheckedArray: [false, true, false] });
      this.setState({ termType: "Work/Off Term in Waterloo" });
    } else if (
      event.currentTarget.name == "termType" &&
      event.currentTarget.id == "c"
    ) {
      this.setState({ termTypeCheckedArray: [false, false, true] });
      this.setState({ termType: "Not in Waterloo" });
    }
    return;
  }

  handleTextAreaChange(event: React.FormEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.name == "entry.288252419") {
      // whyJoin
      this.setState({ whyJoin: event.currentTarget.value });
    } else if (event.currentTarget.name == "entry.1372043873") {
      this.setState({ technicalAns: event.currentTarget.value });
    }
    return;
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="Block-RecruimentForm">
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmZSfD1Hs0D3MLBjAfdUkaCb3GJJxIvKUEVJCBf5hVxZTt4g/formResponse"
            target="_self"
            method="POST"
          >
            <h2 className="HeaderRecruimentForm">
              Applying for {this.props.role.toUpperCase()}
            </h2>
            <input
              className="ShortInput"
              style={{ display: "none" }}
              value={this.props.role}
              name="entry.1805132656"
              placeholder="Position"
              readOnly
            />

            <input
              className="ShortInput"
              type="text"
              name="entry.1105765972"
              placeholder="Full Name"
              onChange={this.handleChange.bind(this)}
              required
            />
            <input
              className="ShortInput"
              type="text"
              name="entry.204636100"
              placeholder="Email"
              onChange={this.handleChange.bind(this)}
              required
            />
            <input
              className="ShortInput"
              type="text"
              name="entry.1369449321"
              placeholder="Program"
              onChange={this.handleChange.bind(this)}
              required
            />
            <input
              className="ShortInput"
              type="text"
              name="entry.1488954434"
              placeholder="Your Current Term (ex. 2A)"
              onChange={this.handleChange.bind(this)}
              required
            />

            <hr />
            <label style={{ display: "block", margin: "1%" }}>
              <b>Term you're applying for:</b>
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termCheckedArray[0]}
                id="0"
                onChange={this.handleChange.bind(this)}
                name="applicationTerm"
                required
              />
              {this.props.termList[0]}
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termCheckedArray[1]}
                id="1"
                onChange={this.handleChange.bind(this)}
                name="applicationTerm"
                required
              />
              {this.props.termList[1]}
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termCheckedArray[2]}
                id="2"
                onChange={this.handleChange.bind(this)}
                name="applicationTerm"
                required
              />
              {this.props.termList[2]}
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termCheckedArray[3]}
                id="3"
                onChange={this.handleChange.bind(this)}
                name="applicationTerm"
                required
              />
              {this.props.termList[3]}
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termCheckedArray[4]}
                id="4"
                onChange={this.handleChange.bind(this)}
                name="applicationTerm"
                required
              />
              {this.props.termList[4]}
            </label>
            <input
              className="ShortInput"
              style={{ display: "none" }}
              name="entry.2092532677"
              value={this.state.applicationTerm}
              readOnly
            />

            <hr />
            <label style={{ display: "block", margin: "1%" }}>
              <b>Term type for the term you're applying for:</b>
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termTypeCheckedArray[0]}
                id="a"
                onChange={this.handleChange.bind(this)}
                name="termType"
                required
              />
              School Term
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termTypeCheckedArray[1]}
                id="b"
                onChange={this.handleChange.bind(this)}
                name="termType"
                required
              />
              Work/Off Term in Waterloo
            </label>
            <label style={radioStyle}>
              <input
                type="radio"
                checked={this.state.termTypeCheckedArray[2]}
                id="c"
                onChange={this.handleChange.bind(this)}
                name="termType"
                required
              />
              Not in Waterloo
            </label>
            <input
              className="ShortInput"
              style={{ display: "none" }}
              name="entry.1337056366"
              value={this.state.termType}
              readOnly
            />
            <hr />

            <textarea
              className="LongInput"
              placeholder="Why do you want to join the team?"
              onChange={this.handleTextAreaChange.bind(this)}
              name="entry.288252419"
              required
            />
            <label>
              <b>
                Please copy this question and include it in your response below:{" "}
                {this.props.technicalQ}
              </b>
            </label>
            <textarea
              className="LongInput"
              placeholder={this.props.technicalQ}
              onChange={this.handleTextAreaChange.bind(this)}
              name="entry.1372043873"
              required
            />
            <button type="submit" style={SubmitBtnStyle}>
              <b>Submit</b>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
