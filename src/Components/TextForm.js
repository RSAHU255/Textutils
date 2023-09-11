import React,{ useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter your text')

    const handleUPClick = (event)=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

  return (
    <>
    <div className='container'>
        <h1>{props.header}</h1>
        <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-4">
        <h2>Summary Analysis</h2>
        <p>{text.split(" ").length} Word(s) and {text.length} Chanractes</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
