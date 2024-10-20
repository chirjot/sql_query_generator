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
    const { mainPage,setMainPage,initialState, activeMenu,setActiveMenu,handleClick,isClicked,currentMode,setCurrentMode,configurationSettings} = useStateContext();
    const [fullScreen,setFullScreen] = useState(true)
    const [fullScreenResult,setFullScreenResult] = useState(true)
    console.log('full screen',fullScreen)
    return (
      < div>
    
  
  
  <div style={{height:'865px'}}>
    
  <div  style={{height:'65px'}}>
  <div className='w-[98%] absolute ' style={{height:'65px',border:'1px solid #dadada',borderBlockEnd:"1px solid #F5F5F5",borderCollapse:'separate',borderRadius:'0px',backgroundColor:'white'}}>
 
  
  <div className='flex '><div> {fullScreenResult && <button
                  type="button"
                  
                  style={{ background: 'transparent',marginLeft:'-10px',marginTop:'15px'}}
                 
                  onClick={() => setFullScreenResult(false)}
                  
                >{fullScreenResult && <LiaCaretSquareLeftSolid className='text-3xl' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',backgroundColor:'white'}} />}</button>}
  
   {!fullScreenResult && <button
                  type="button"
                  
                  style={{ background: 'transparent',marginLeft:'-10px',marginTop:'15px'}}
                 
                  onClick={() => setFullScreenResult(true)}
                  
                >{!fullScreenResult && <LiaCaretSquareRightSolid className='text-3xl ' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',backgroundColor:'white'}} />}</button>}
 </div>
  {fullScreenResult &&  <div style={{}}>
  <div 
  className={
    fullScreenResult
      ? ' w-[5%] absolute '
      : 'w-[0]  absolute '
  }  style={{height:'65px',border:'none',borderCollapse:'separate',borderRadius:'0px',backgroundColor:'#F5F5F5'}}>
  
  
  
 
 <div>
  <div className='w-[90%] absolute   ' style={{marginTop:'10px',height:'35px',border:'none',borderCollapse:'separate',borderRadius:'0px',backgroundColor:'#F5F5F5'}}>
  <p className='text-black text-xl  'style={{textAlign:'center'}}>Input</p></div>
  </div>
  
  </div>
  <div className='w-[93%] absolute ml-[5%]' style={{height:'65px',border:'1px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px'}}>
  </div>
    <div className={
                fullScreenResult
                  ? ' w-[51.5%] absolute ml-[5%]'
                  : 'w-[0%]  absolute ml-[0]'
              } style={{height:'65px',border:'1px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px'}}>
  <div className='absolute inline-flex rounded-full h-2 w-2 right-80 top-2' > 
    <div className='flex mt-2'>
      <div>
    <div className=' absolute ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><BsEraser className='text-xl '/></div>
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
                  
                  style={{ background: 'transparent'}}
                 
                  onClick={() => setFullScreen(false)}
                  
                >{fullScreen && <LiaCaretSquareRightSolid className='text-3xl' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',backgroundColor:'white'}} />}</button>}
  
   {!fullScreen && <button
                  type="button"
                  
                  style={{ background: 'transparent'}}
                 
                  onClick={() => setFullScreen(true)}
                  
                >{!fullScreen && <LiaCaretSquareLeftSolid className='text-3xl' style={{marginLeft:"-5px",opacity:'1',marginTop:'0px',backgroundColor:'white'}} />}</button>}
  </div>
  </div></div>
  
    </div>
    </div>
  </div>
  
  </div>}
  
  {fullScreen && <div className={ 
   (fullScreenResult)
   ? ' w-[42%] absolute ml-[58%]'
   : 'w-[100%]  absolute ml-[0]'} style={{height:'65px',border:'1px solid #d3d3d3',borderLeft:'none',borderCollapse:'separate',borderRadius:'0px',}}>
  <div className='mt-4 ml-5 text-xl'>Result:</div>
  <div className='absolute inline-flex rounded-full h-2 w-2 right-36 top-2' > 
    <div className='flex mt-2'>
      <div>
    <div className=' absolute ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><MdOpenInNew className='text-xl '/></div>
    </div>
    </div>
     <div>
  
   
  
    <div className=' absolute ml-12' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px'}}>
    <div style={{marginLeft:"6px",marginTop:"6px"}}><RiHistoryLine className='text-xl ' style={{color:'black'}}/></div>
    </div>
    </div>
    <div>
  <div className=' absolute ml-24 ' style={{marginTop:'-3px',height:'37px',width:'37px',border:'2px solid #d3d3d3',borderCollapse:'separate',borderRadius:'0px',}}>
  <div style={{marginLeft:"-8px",marginTop:"-8px"}}><IoIosInformation className='text-5xl ' style={{color:'#4B4B4B'}}/></div>
  </div>
  </div> 
    </div>
    </div>
  </div>}
  </div>
  
  
  </div>
  </div>
  
  {fullScreenResult && <div style={{height:"400px",marginTop:'1px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute '
                  : 'w-[98%]  absolute '
              } style={{height:"400px",border:'1px solid #dadada',borderTop:'none',borderCollapse:'separate',borderRadius:'0px',backgroundColor:'#F5F5F5'}}>
  <div style={{marginTop:"6px"}}>
    <span className=' ml-[2%] text-xl text-[#aa5500] div11 ' style={{fontFamily:'inherit',fontWeight:'400'}}>-- Online SQL Generator to Run SQL Natural Language.</span>
    </div>
    <div>
    <span className='mt-4 ml-[2%] text-xl text-[#aa5500] div11' style={{fontFamily:'inherit',fontWeight:'400'}}>-- Use the editor to create new Queries.</span>
  </div>
  <div ><textarea className='mt-4 ml-[2%] text-xl  absolute w-[94%] div11' style={{height:'250px', backgroundColor:'#F5F5F5',}}></textarea></div>
  </div>
  </div>}
  {fullScreenResult && <div style={{height:'40px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute '
                  : 'w-[98%]  absolute '
              }  style={{height:"40px",border:'1px solid #dadada',borderCollapse:'separate',borderRadius:'0px',backgroundColor:"#FBFBFB"}}>
  <p className='text-xl ml-2 mt-1'>Generated Query</p>
  </div>
  </div>}
  
  {fullScreenResult && <div style={{height:'400px'}} >
  <div className={
                fullScreen
                  ? ' w-[56.15%] absolute '
                  : 'w-[98%]  absolute '
              } style={{height:"400px",border:'1px solid #dadada',borderCollapse:'separate',borderRadius:'0px',backgroundColor:"#FBFBFB"}}>
  
  </div>
  </div>}
  
  </div>
  
  
  
  
    
  
  </div>
    )
}

export default Query_Generator
