import {React,useState} from 'react'
import { LiaCaretSquareRightSolid } from "react-icons/lia";
import { MdOpenInNew } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { useStateContext } from '../contexts/ContextProvider';
import { LiaCaretSquareLeftSolid } from "react-icons/lia";
import { IoIosInformation } from "react-icons/io";
import { BsEraser } from "react-icons/bs";
import '../App.css'

const Query_Generator = () => {
    const { currentMode, setCurrentMode} = useStateContext();
    const [fullScreen,setFullScreen] = useState(true)
    const [fullScreenResult,setFullScreenResult] = useState(true)
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if(currentMode === 'Light'){
      inputStyle={
         border: '3px solid red'
      }
    }
    console.log('full screen',fullScreen)
    return (
      
      < div className={currentMode === 'Dark' ? 'dark' : ''} style={{marginLeft:'20px'}}>
    
    <div className='w-[100%] absolute dark:bg-[#1F2023] bg-white ' style={{marginLeft:'-20px',height:'925px',borderTop:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',}}>
    </div>
  
  <div style={{ height: currentMode === "Dark" ? '865px' : '865px' }}>
    
  <div  style={{height:'65px'}}>
  <div className='w-[98%] absolute dark:bg-[#2D2F34] bg-white' style={{height:'65px',borderTop:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderLeft:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada'}}>
 
  
  <div className='flex '><div> {fullScreenResult && <button
                  type="button"
                  
                  style={{marginLeft:'-10px',marginTop:'15px'}}
                 
                  onClick={() => setFullScreenResult(false)}
                  
                >{fullScreenResult && <LiaCaretSquareLeftSolid className='text-3xl dark:text-white text-black  dark:bg-[#2D2F34] bg-white' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',}} />}</button>}
  
   {!fullScreenResult && <button
                  type="button"
                  
                  style={{ marginLeft:'-10px',marginTop:'15px'}}
                 
                  onClick={() => setFullScreenResult(true)}
                  
                >{!fullScreenResult && <LiaCaretSquareRightSolid className='text-3xl dark:text-white text-black  dark:bg-[#2D2F34] bg-white' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',}} />}</button>}
 </div>
  {fullScreenResult &&  <div style={{}}>
  <div 
  className={
    fullScreenResult
      ? ' w-[2%] absolute dark:bg-[#000720] bg-[#f5f5f5]'
      : 'w-[0]  absolute dark:bg-[#130f40] bg-[#f5f5f5]'
  }  style={{height:'15px',marginLeft:'-15px',border:'none',borderCollapse:'separate',borderRadius:'0px'}}>
  
  
  
 
 </div>
  <div 
  className={
    fullScreenResult
      ? ' w-[5%] absolute dark:bg-[#000720] bg-[#f5f5f5]'
      : 'w-[0]  absolute '
  }  style={{height:'65px',border:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  
  
  
 
 <div>
  <div className='w-[90%] absolute   dark:bg-[#000720] bg-[#f5f5f5]' style={{marginTop:'10px',height:'35px',border:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  <p className='text-black text-xl mt-2 font-extrabold dark:text-white'style={{textAlign:'center'}}>Input</p></div>
  </div>
  
  </div>
  <div 
  className={
    fullScreenResult
      ? ' w-[2%] absolute dark:bg-[#000720] bg-[#f5f5f5]'
      : 'w-[0]  absolute dark:bg-[#130f40] bg-[#f5f5f5]'
  }  style={{height:'20px',marginLeft:'-15px',marginTop:"45px",border:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  
  
  
 
 </div>
    <div className={
                (fullScreen
                  ? ' w-[51.47%] absolute ml-[5%]'
                  : 'w-[94.2%]  absolute ml-[5%]')
             } style={{height:'65px',borderLeft:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderRight:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada'}}>
  <div className='absolute inline-flex rounded-full h-2 w-2 right-80 top-2' > 
    <div className='flex mt-2'>
      <div>
    <div className=' absolute ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #616161',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><BsEraser className='text-xl dark:text-white text-[#4B4B4B]'/></div>
    </div>
    </div>
  
  <div>
     <div>
  <div className='w-34 absolute ml-12 ' style={{marginTop:'-5px',height:'40px',border:'2px solid #1560BD',borderCollapse:'separate',borderRadius:'0px',backgroundColor:'#1560BD'}}>
  <p className='text-white text-xl whitespace-nowrap mt-1'>Show Schema</p>
  </div> 
  </div>
  <div className='w-32 absolute ml-48 ' style={{marginTop:'-5px',height:'40px',border:'2px solid #1560BD',borderCollapse:'separate',borderRadius:'0px',backgroundColor:'#1560BD'}}>
  <p className='text-white text-xl mt-1'>Genrate SQL</p>
  </div>
  </div>
  <div style={{marginLeft:'323px'}}>
  <div >
  <div >
  {fullScreen && <button
                  type="button"
                  
                  style={{ }}
                 
                  onClick={() => setFullScreen(false)}
                  
                >{fullScreen && <LiaCaretSquareRightSolid className='text-3xl dark:text-white text-black  dark:bg-[#2D2F34] bg-white' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',}} />}</button>}
  
   {!fullScreen && <button
                  type="button"
                  
                  style={{ }}
                 
                  onClick={() => setFullScreen(true)}
                  
                >{!fullScreen && <LiaCaretSquareLeftSolid className='text-3xl dark:text-white text-black  dark:bg-[#2D2F34] bg-white' style={{marginLeft:"-5px",marginTop:'0px',}} />}</button>}
  </div>
  </div></div>
  
    </div>
    </div>
  </div>
  
  </div>}
  
  {fullScreen && <div className={ 
   (fullScreenResult)
   ? ' w-[42%] absolute ml-[58%]'
   : 'w-[100%]  absolute ml-[0]' } style={{height:'65px',border:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  <div className='mt-4 ml-5 text-xl dark:text-white'>Result:</div>
  <div className='absolute inline-flex rounded-full h-2 w-2 right-36 top-2' > 
    <div className='flex mt-2'>
      <div>
    <div className=' absolute ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #616161',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><MdOpenInNew className='text-xl dark:text-white text-[#4B4B4B]'/></div>
    </div>
    </div>
     <div>
  
   
  
    <div className=' absolute ml-12' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #616161',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><RiHistoryLine className='text-xl dark:text-white text-[#4B4B4B]' /></div>
    </div>
    </div>
    <div>
  <div className=' absolute ml-24 ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #616161',borderCollapse:'separate',borderRadius:'0px',}}>
  <div style={{marginLeft:"-8px",marginTop:"-8px"}}><IoIosInformation className='text-5xl dark:text-white text-[#4B4B4B]' /></div>
  </div>
  </div> 
    </div>
    </div>
  </div>}
  {fullScreenResult && <div className='' style={{marginTop:'64px'}}>
  <div className={ 
   (fullScreenResult)
   ? ' w-[43.6%] absolute ml-[56.6%] dark:bg-[#1F2023] bg-white '
   : 'w-[100%]  absolute ml-[0]  dark:bg-[#1F2023] bg-white'} style={{height:'858px',borderCollapse:'separate',borderRadius:'0px',}}>
 </div>
 </div>}
 {!fullScreenResult && <div className='' style={{marginTop:'64px'}}>
  <div className={ 
   (fullScreenResult)
   ? ' w-[43.6%] absolute ml-[56.6%] dark:bg-[#1F2023] bg-white '
   : 'w-[100%]  absolute ml-[0]  dark:bg-[#1F2023] bg-white'} style={{height:'858px',marginLeft:'-16px',border:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderCollapse:'separate',borderRadius:'0px',}}>
 </div>
 </div>}
  </div>
  
  
  </div>
  </div>
  
  {fullScreenResult && <div style={{height:"400px",marginTop:'1px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute dark:bg-[#000720] bg-[#f5f5f5]'
                  : 'w-[98%]  absolute dark:bg-[#000720] bg-[#f5f5f5]'
              } style={{height:"400px",borderLeft:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderRight:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada'}}>
  <div style={{marginTop:"6px"}}>
    <span className=' ml-[2%] text-xl text-[#aa5500] div11 ' style={{fontFamily:'inherit',fontWeight:'400'}}>-- Online SQL Generator to Run SQL Natural Language.</span>
    </div>
    <div>
    <span className='mt-4 ml-[2%] text-xl text-[#aa5500] div11' style={{fontFamily:'inherit',fontWeight:'400'}}>-- Use the editor to create new Queries.</span>
  </div>
  <div ><textarea className='mt-4 ml-[2%] text-xl  absolute w-[94%] dark:bg-[#000720] bg-[#f5f5f5]' style={{height:'250px', }}></textarea></div>
  </div>
  </div>}
  {fullScreenResult && <div style={{height:'55px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute dark:bg-[#1F2023] bg:white dark:text-white text-black'
                  : 'w-[98%]  absolute dark:bg-[#1F2023] bg:white dark:text-white text-black'
              }  style={{height:"55px",border:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderTop:'none',borderBlockEnd:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  <p className='text-xl ml-2 mt-3'>Generated Query</p>
  </div>
  </div>}
  
  {fullScreenResult && <div style={{height:'400px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute dark:bg-[#1F2023] bg:white dark:text-white text-black'
                  : 'w-[98%]  absolute dark:bg-[#1F2023] bg:white dark:text-white text-black'
              } style={{height:"400px",border:currentMode === "Dark" ? '1px solid #616161' : '1px solid #dadada',borderCollapse:'separate',borderRadius:'0px'}}>
  
  </div>
  </div>}
  
  </div>
  
  
  
  
    
  
  </div>
    )
}

export default Query_Generator
