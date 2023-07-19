// Import React And use state
import React, { useState } from 'react'
// Export The function and using props
export default function Textform(props) {
    
    // Upper  Function For use Upper Case Button
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Upper Case !", "success");
    }
    // Lower Function TO use Lower CAse button
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lower Case !", "success");
    }
    // Clear Function TO use Clear button
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared !", "success");
    }
    // Copy Function TO use Copy button
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied !", "success")
    }
    const handleExtraSapces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Sapce removed !", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');
    return (<>
        <div className="container" style={{ color: props.mode === 'dark' ? '#a56f6f' : 'black' }} >
            <h3 className='mb-4'>{props.heading} </h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'black', color: props.mode === 'dark' ? 'black' : 'white' }}
                    id="myBox" rows="8"> </textarea>
                    
            </div >
            <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" style={{ color: props.mode === 'dark' ? 'black' : 'white', backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'black' }} onClick={handleUpClick}> Convert To Upper Case </button>
            <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" style={{ color: props.mode === 'dark' ? 'black' : 'white', backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'black'  }} onClick={handleLoClick}> Convert To Lower Case </button>
            <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" style={{ color: props.mode === 'dark' ? 'black' : 'white',backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'black' }} onClick={handleClearClick}> Click To Clear Text </button>
            <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" style={{ color: props.mode === 'dark' ? 'black' : 'white' ,backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'black' }} onClick={handleCopy}> Click To CopyText </button>
            <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" style={{ color: props.mode === 'dark' ? 'black' : 'white' , backgroundColor : props.mode ==='dark' ? '#b4b4e1' : 'black' }} onClick={handleExtraSapces}> Click To Remove Extra Sapce </button>

        </div >
        <div className="container my-3" style={{ color: props.mode === 'dark' ? '#a56f6f' : 'black' }} >
            <h1> Your Text Summary </h1>
            <p> {text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters </p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes To Read </p>
            <h2> Preview </h2>
            <p> {text.length > 0 ? text : "Enter Something In The Text Box Above To Preview It Here"} </p>
        </div>
    </>
    )
}