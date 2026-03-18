import Searchbar from "../Searchbar";
import CountryList from "./Countrydata/CountryList";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import CountryInfo from "./Countrydata/CountryInfo";


export const Countrycontext = createContext()

function App(){

 const [searchTerm, setSearchTerm] = useState("")

  return (
    <div >
      <Countrycontext.Provider value={{searchTerm, setSearchTerm}}>

       <Searchbar/>
      <Routes>
      <Route path="/" element={<CountryList/>}/>
       <Route path="/countrylist" element={<CountryList/>}/>
        <Route path="/countryinfo/:name" element={<CountryInfo/>}/>
       
      </Routes>
      
      

      </Countrycontext.Provider>
    </div>
  )
}

export default App