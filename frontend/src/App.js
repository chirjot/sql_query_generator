import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar} from './views';
import { useStateContext } from './contexts/ContextProvider';
import { QueryGenerator,OpenAiConfiguration,DatabaseConfig } from './components'

const App = () => {
  localStorage.setItem('OpenAI_Configuration',true)
  const {activeMenu, setActiveMenu } = useStateContext();
  console.log("chandu")
  
 

  return (
<div>
  <BrowserRouter>
  <div className='flex relative '>
     {/* {activeMenu ? (
      <div className='w-60 fixed bg-white'>
        <Sidebar />
      </div>
    ) : (<div className='w-16 fixed bg-white'>
      <Sidebar />
      </div>)}  */}
    
    
      <div
            className={
              activeMenu
                ? 'bg-white min-h-screen   md:ml-4 w-full '
                : 'bg-white min-h-screen  md:ml-4 w-full  '
            }
          >
            <div className="fixed md:static bg-white navbar w-full ">
              <Navbar />
            </div>
          
            <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<QueryGenerator />)}/>
                <Route path="/queryGenerator" element={(<QueryGenerator />)}/>
                <Route path="/openAIConfiguration" element={(<OpenAiConfiguration />)}/>
                <Route path="/databaseConfig" element={(<DatabaseConfig />)}/>
              
               
                </Routes>
  
      </div>
  </div>
  
 
  </BrowserRouter>
</div>  )
}

export default App
