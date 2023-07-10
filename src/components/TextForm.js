import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter text here");

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("success","Converted to Uppercase")
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("success","Converted to Lowercase")
    }

    const handleClearClick = () => {
        setText("")
        props.showAlert("success","Text Cleared")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" class="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                style={{backgroundColor : props.mode==='dark'?'grey':'white',
                        color:props.mode==='dark'?'white':'black'
                }}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-2'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{(text.split(" ").length)*0.008} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </> 
  )
}



