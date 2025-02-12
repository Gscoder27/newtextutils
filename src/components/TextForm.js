import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('write here!!...');
    // text = "";
    
    const handleUpClick = (event) =>{
        event.preventDefault();
        // console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    };

    const handleClick = (event) =>{
        event.preventDefault();
        // console.log("Upper Case Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    };

    const handleRemoveSpaces = (event) => {
        event.preventDefault();
        let cleanedText = text.trim().replace(/\s+/g, " ");
        setText(cleanedText);
        props.showAlert("Extra spaces removed", "success");
    };

    const handleinverseclick = (event) => {
        event.preventDefault();
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text reversed", "success");
    };

    const handleCLearClick = (event) =>{
        event.preventDefault();
        // console.log("Upper Case Clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    };

    const handleRemoveSpecialCharacters = (event) => {
        event.preventDefault();
        const regex = /[^a-zA-Z0-9\s]/g; // Matches all special characters except letters, numbers, and spaces
        let newText = text.replace(regex, ""); // Removes special characters
        newText = newText.replace(/\s+/g, " ").trim(); // Removes extra spaces and trims the text
        setText(newText);
        props.showAlert("Special characters removed", "success");
    };

    const speak = (event) => {
        event.preventDefault();
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking the text", "success");
    };

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    };

    return(
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
        <form>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example TextArea</label>
        <textarea type="text" className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" aria-describedby="emailHelp" rows="8"></textarea>
        <div id="emailHelp" className="form-text">Write your text to modify it !!..</div>
    </div>
    <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Are you sure you want to modify/analyze! </label>
    </div>
    <div className="container my-3 " style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim().length } characters</p>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in text box to preview it"}</p>
    </div>
    <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
    <br />
    <br />
    <button type="submit" onClick={handleClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
    <br />
    <br />
    <button type="submit" onClick={handleRemoveSpaces} className="btn btn-primary mx-1">Remove extra spaces</button>
    <br />
    <br />
    <button type="submit" onClick={handleinverseclick} className="btn btn-primary mx-1">Reverse the text</button>
    <br />
    <br />
    <button type="submit" onClick={handleCLearClick} className="btn btn-primary mx-1">Clear text</button>
    <br />
    <br />
    <button type="submit" onClick={handleRemoveSpecialCharacters} className="btn btn-primary mx-1">Remove special characters</button>
    <br />
    <br />
    <button type="submit" onClick={speak} className="btn btn-primary mx-1">Text to speak</button>
    <br />
    <br />
    <br />
    <br />
    
        </form>
        </div>
    </>
    );
}