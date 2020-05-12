import React, { Component } from "react";

//CSS Styles
import "./IdeaCart.scss";

// Images
import ideaCartLogo from "../../assets/images/ideacart/idea-cart-logo.svg";

export default class IdeaCart extends Component {
  render() {
    return (
      <div className="idea-cart-page">
        <div className="top-spacer"> </div> ‍{" "}
        <div className="page-container">
          <div className="page-title"> {this.props.pageTitle} </div>{" "}
          <div className="idea-cart-container">
            {" "}
            {/* section 1 */}{" "}
            <div className="idea-cart-section-1">
              <div className="idea-cart-logo">
                <img src={ideaCartLogo} />{" "}
              </div>{" "}
              <div className="idea-cart-description">
                Let’ s stand out and make change! <br /> <br />
                We are open to new ideas and suggestions for process improvement
                of, <br /> <br />
                <ul>
                  <li> HR related </li> <li> Product related </li>{" "}
                  <li> General processes </li>{" "}
                  <li>
                    {" "}
                    We would like to know if you have any compaints as well.{" "}
                  </li>{" "}
                </ul>
                Do you have a great idea in your mind ? <br />
                One click away to shine in Epic{" "}
              </div>{" "}
            </div>
            {/* section 2 */}{" "}
            <div className="idea-cart-section-2">
              <form>
                Your Name <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="empName"
                />{" "}
                <br /> <br /> <br />
                Department <br />
                <select id="department" placeholder="Select Your Department">
                  <option value="department1"> Department 1 </option>{" "}
                  <option value="department2"> Department 2 </option>{" "}
                  <option value="department3"> Department 3 </option>{" "}
                  <option value="department4"> Department 4 </option>{" "}
                </select>{" "}
                <br /> <br /> <br />
                Team <br />{" "}
                <select id="team" placeholder="Select Your Team">
                  {" "}
                  <option value="team1"> Team 1 </option>{" "}
                  <option value="team2"> Team 2 </option>{" "}
                  <option value="team3"> Team 3 </option>{" "}
                  <option value="team4"> Team 4 </option>
                </select>{" "}
                <br /> <br /> <br /> <br />
                <input type="button" value="Submit" />{" "}
                {/* onclick="myFunction()" */}{" "}
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
