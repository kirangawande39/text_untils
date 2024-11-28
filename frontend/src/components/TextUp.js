import React, { useState } from 'react'

export default function TextUp(props) {
    const [text, setText] = useState("")
    const handleUpCase = () => {

        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Convert to Upper-case","success")
        
    }
    const handleLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Convert to Lower-case","success")
    }
    const handleClear = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("Text clear","success")
    }
    
    
    const handleCapitalize = () => {
        let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(capitalizedText);
        props.showAlert("Convert to Capitalize","success")
    }
    const handleCopyText = () => {
        console.log("I am copy...")
        
        let text=document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copy","success")
        
      }
      

    const handleonchange = (event) => {

        setText(event.target.value)
    }

    return (
        <>
            <div className="form-floating my-5" style={{color:props.mode=== 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-2"  style={{backgroundColor:props.mode=== 'dark'?'#2c3d55':'white',color:props.mode=== 'dark'?'white':'black',height:180}} value={text} id="TextBox" onChange={handleonchange} ></textarea>
                <button type="button" className="btn btn-primary " onClick={handleUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowrCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCapitalize}>Convert to capatilize</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleCopyText}>Copy</button>
            
            </div>
            <div className="container" style={{color:props.mode=== 'dark'?'white':'black'}} >
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length - 1}</b> and characters <b>{text.length}</b></p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the preview text here"}</p>
            </div>
           

        </>
    )
}