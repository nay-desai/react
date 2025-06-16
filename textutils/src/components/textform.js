import { useState} from "react"    


export default function Textform(props) {
   const [text, setText] = useState('');
     const [isBold, setIsBold] = useState(false)
    const handelOnclick = (action)=> {
        if(action === "upper") {
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to uppercase", "success");
        }
        else{
            setText(text.toLowerCase());
            props.showAlert("Text has been converted to lowercase", "success");
        }
    }

    const handelcopy = () => {
     var text = document.getElementById("MyBox");
     text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied", "success");
    }

    const handelextraspace = () =>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra spaces have been removed", "success");
    }

    const handelOnChange = (event) => {
      setText(event.target.value);
    }

    let buttoncolor;
    if(props.mode === 'dark'){
      if(props.mode === 'red'){
        buttoncolor = 'black';
      }

      else if(props.mode === 'purple'){
        buttoncolor = 'pink';
      }

      else{
        buttoncolor = 'grey';
      }
    }
   
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}> {props.Heading} </h1>
<div className="mb-3">
<textarea  className="form-control"  style={{backgroundColor:props.mode==='dark'?buttoncolor:'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange = {handelOnChange} id="MyBox" rows="7"></textarea>
</div>
<button className = "btn btn-primary mx-2" style={{backgroundColor:props.mode==='dark'?buttoncolor:'blue'}}  onClick={() => handelOnclick("upper")}>Convert to Uppercase</button>
<button className = "btn btn-primary mx-2" style={{backgroundColor:props.mode==='dark'?buttoncolor:'blue'}}  onClick={() => setIsBold(true)}>Convert the text in Bold</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode==='dark'?buttoncolor:'blue'}}  onClick={handelcopy}>Copy text</button>
<button className="btn btn-primary mx-2" style={{backgroundColor:props.mode==='dark'?buttoncolor:'blue'}}  onClick={handelextraspace}>Remove the space</button>

    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Enter your text</h1>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Summary of text</h1>
      <p>{text.split(" ").length}words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length}minutes to read</p>
      <h2>Preview: <span style={{fontWeight: isBold ? 'bold' : 'normal'}}>{text}</span></h2>
    </div>
    </>
  )
}
