import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  setting: false,
  notification: false,
  userProfile: false,
  
};
const loginstate = localStorage.login || false 

export const ContextProvider = ({ children }) => {
  console.log(localStorage.getItem('openAI_Configuration'))
  const [activeMenu, setActiveMenu] = useState((localStorage.getItem('openAI_Configuration')) || true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentMode, setCurrentMode] = useState('Dark');
  const [mainPage, setMainPage] = useState(false)
  const [login1,setlogin1] = useState(loginstate)
  const [openAiSetting, setopenAiSettings] = useState(true);
  const [dbConfiguration, setDBConfiguration] = useState(false);
  const [dbSchema, setDBSchema] = useState(true);
  const [openAISuccess,setOpenAISuccess] = useState(false);
  const [schemaSuccess,setSchema] = useState(false);
  const [querySuccess,setQuery] = useState(false);
  const [configurationSettings, setConfigSettings] = useState(false);
  
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentMode, setCurrentMode,mainPage,setMainPage,configurationSettings, setConfigSettings,querySuccess,setQuery,openAiSetting,setopenAiSettings,dbConfiguration,setDBConfiguration,dbSchema,schemaSuccess,setSchema,setDBSchema,openAISuccess,setOpenAISuccess,activeMenu,setActiveMenu,handleClick,setIsClicked,isClicked,initialState,}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
