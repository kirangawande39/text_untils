import React,{useState} from 'react'

export default function DarkMode(props) {
    const [myStyle, setStyle] = useState({
        color:'white',
        backgroundColor:'black'      
    })
    
    const [enablemode, setenablemode] = useState("Enable dark mode")

    const handleDarkMode = ()=>{
        if (myStyle.color == 'white') {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setenablemode("Enable dark mode")
        }
        else {
            setStyle({
                color: 'white',
                backgroundColor:'black'
            })
            setenablemode("Enable Light mode")
            

        }
    }
  return (
  <>
    
   <div className="container">
    <button type="button" onClick={handleDarkMode} class="btn btn-primary">{enablemode}</button>
   </div>
  
  </>
  )
}
