import { useContext, useState } from 'react'
import './src/Countrydata/CountryList.css'
import { Countrycontext } from './src/App'

const Searchbar = ()=>{

    const{setSearchTerm} = useContext(Countrycontext)

    const [inputValue, setInputValue] = useState("")

    const handleChange =(e)=> {

        const value = e.target.value

        setInputValue(value) 
        
        if (value === ""){
            setSearchTerm("")  // If input is cleared, reset searchTerm
        }
    }

    

    const handleclick = ()=>
        setSearchTerm(inputValue)  // update when we click on button


    const handleKeyPress = (e)=>{
        if (e.key === "Enter")
            e.preventDefault()
            handleclick()
    }
    

    return(
        <div className="header">
            <h1 style={{paddingTop:"15px",fontFamily: "Source Sans Pro,Arial,sans-serif"}}>COUNTRY-INFO HUB </h1>

            <div className="searchdiv">
            <input className='search-input'
             type="text"
              placeholder="Search for a Country...."
               value={inputValue}
                onChange={handleChange}
              onKeyDown = {handleKeyPress}/>

            <button className='btn' onClick={handleclick}>Search</button>
            </div>

        </div>

    )
}
export default Searchbar