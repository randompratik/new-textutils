import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(prop) {
  const [text, setText] = useState("Enter the text here");
  const handleclickUpper = () => {
    //console.log("button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    prop.alert("Converted to Upper Case ","success");
  };
  const handleclickLower = () => {
    //console.log("button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    prop.alert("Converted to Lower Case ","success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleFindOnclick=()=>{
   let newText=text;
   let i=newText.indexOf("Hello");
      if(i===-1)
         setText("The word is not available");
        else 
           setText("The word is available at index "+ i); 
  }
  const handleClearOnclick=()=>{
       setText("");
       prop.alert("Text Cleared ","success");
  }

      let newMode;
      if(prop.mode==="light"){
          newMode="dark";
      }
      else 
      newMode="light";

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h3 className={`text-${newMode}`}>Enter the text to be analyzed</h3>

          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-dark mx-3"
          onClick={handleclickUpper}
        >
          Convert To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-3"
          onClick={handleclickLower}
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-3"
          onClick={handleFindOnclick}
        
        >
         Search for Hello
        </button>
        <button
          type="button"
          className="btn btn-dark mx-3"
          onClick={handleClearOnclick}
        
        >
         Clear
        </button>
           
      
      </div>
      <div className={`container my-3 text-${newMode}`}>
        <h1 >Your Text Summary</h1>
        <p>
          The sentence contains {text.split(" ").length} words and {text.length}{" "}
          character
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  boxheading: PropTypes.string,
};
