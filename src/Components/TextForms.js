import React,{useState} from 'react'

export default function TextForms(props) {


  let myStyle={
    fontStyle : 'italics',
    fontWeight :'bold',
    textDecorationLine: 'underline'
  }

    const handleUpClick=()=>{
      //console.log("UpperCaes is clicked");
      let newText=text.toUpperCase();
      setText(newText);
    }

    const handleLoClick=()=>{
      //console.log("LowerCase is clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleClearClick=()=>{
      let newText=('')
      setText(newText);
    }

    const handleReClick=()=>{
      let newText=text.split('').reverse().join('');
      setText(newText);
    }

    const handleCopy=()=>{
      console.log("I am copy");
      var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      alert("Text Copied");
    }
    
    

    const handleOnChange=(event)=>{
      //console.log("on Chnage");
      setText(event.target.value)
    }



    const [text,setText]= useState("");
    

    
  return (
    <>
    <div class="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <label for="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter your Text'></textarea>
        </div>
        <button className="btn-btn-primary mx-3" onClick={handleUpClick}> Convert To UpperCase</button>
        <button className="btn-btn-primary mx-3" onClick={handleLoClick}> Convert To LowerCase</button>
        <button className="btn-btn-primary mx-3" onClick={handleCopy}> Copy Text </button>
        <button className="btn-btn-primary mx-3" onClick={handleReClick}> Reverse the text</button>
        <button className="btn-btn-primary mx-3" onClick={handleClearClick}> Clear All</button>
    </div>

    
    <div class="container my-5">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{(0.08*(text.split(" ").length)) } Minutes Read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
