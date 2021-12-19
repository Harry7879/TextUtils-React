
import React,{useState} from 'react'


export default function TextForm(props) {
    const Uppercase=()=>{
        // console.log('this is upper case')
        let newText=text.toUpperCase();
        settext(newText)
        props.showAlert('UpperCase has been Enable','successful')
    }
    const lowercase=()=>{
        // console.log('this is Lower case')
        let newText=text.toLocaleLowerCase();
        settext(newText);
        props.showAlert('LowerCase has been Enable','successful')
    }
    const  cleartextarea=()=>{
        // console.log('this is clear text')
        let newText=('');
        settext(newText)
        props.showAlert('Clean the Screen been Enable','successful')
    }
    const  removeExtraspaces=()=>{
        // console.log('this is remove the extea space')
        let newText=text.split(/[ ]+/)
        let ourtext=newText.join(" ")
        settext(ourtext)
        props.showAlert('Remove the Extra space from text','successful')
        
    }
    const changeme=(event)=>{
        console.log('this is upper case')
        settext(event.target.value)
    }
    const [text, settext] = useState('');
    return (
        <>
        <div className='Container'>

        <h1>{props.Heading}</h1>

        <div className="mb-3">
            <label htmlFor="myText" className="form-label" >Input TextArea</label>
            <textarea className="form-control" value={text} onChange={changeme} style={{backgroundColor:props.mode==='dark'?'#3a3d40':'white',color:props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={Uppercase}>ToChangeUpper</button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowercase}>Tolowercase</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={cleartextarea}>clear text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeExtraspaces}>Remove spaces</button>

        </div>
        <div className="container">
            <h1>summerry</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words{text.length} characters</p>
            <h1>preview</h1>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    )
}
