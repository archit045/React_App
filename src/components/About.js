

 // const [myStyle, setMyStyle] = useState({
    //color: 'black',
   // backgroundColor: 'white'
  //})
  export default function About(props){ 
   let myStyle = {
     color: props.mode === 'dark'?'white':'#042743',
     backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
   }
   
   return (
    <>
     <div>
      <div className='container' style={{color: props.mode === 'dark'?'rgb(36 74 104)':'white'}}>
      <h1 className='my-3'style={{color: props.mode === 'dark'?'white':'black'}}> About Us </h1>
        <div className="accordion" id="accordionExample" style= {myStyle} >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" id="accordion-body"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Analyz Your Text </strong> 
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                My-app gives you a way to analyz your text quickly and efficiently. Be it word count , Character count or Time count and at last the text you write Preview at the last.... 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" id="accordion-body1" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong> Free To Use </strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
               My-app is a free character counter tool that provides instant character count , word count , Capitalize word , Small word, Copy text and Clear text Thus it is suitable for writing text with word Character limit....
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" id="accordion-body2" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Browser Compatible </strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This word counter software works on any web browser such as Chrome,Firefox , Internet Explorer, safari, Opera. It Suits to count character in facebook, Blog, books, exel doucument, pdf document, eesays, etc...  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   )
   }
