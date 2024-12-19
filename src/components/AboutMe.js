// import React, { useState } from "react";

const AboutMe = (props) => {
  // const [mystyle, setMystyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  // const [Btntxt, setBtntxt] = useState("Enable Light Mode");

  // const toggleHandler = () => {
  //   if (mystyle.color === "white") {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtntxt("Enable Dark Mode");
  //   } else {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtntxt("Enable Light Mode");
  //   }
  // };

  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <div className="container my-3" style={mystyle}>
        <h1>About TextUtils</h1>
        <div className="accordion" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Convert Text to Uppercase
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>Feature:</strong> Transform your text into uppercase
                with a single click. Useful for titles, headings, or emphasis.
                Example: "hello world" → "HELLO WORLD".
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Remove Extra Spaces
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>Feature:</strong> Automatically remove extra spaces from
                your text for better formatting. Example: <br />
                Input: "Hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World"
                <br />
                Output: "Hello World"
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Copy Text to Clipboard
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>Feature:</strong> Copy your formatted text to the
                clipboard with a single click, saving time while working on
                documents or projects.
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary my-2" onClick={toggleHandler}>
          {Btntxt}
        </button> */}
      </div>
    </>
  );
};

export default AboutMe;
