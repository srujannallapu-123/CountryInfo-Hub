import { useContext, useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import '../Countrydata/CountryList.css'
import { Countrycontext } from "../App"
import { Link } from "react-router-dom"


const CountryList = () => {

   const [countries, setCountries] = useState([]) //here we fetching all countries so that's the reason for using array[] in usestate.

   const { searchTerm } = useContext(Countrycontext)
   

   useEffect(() => {

      fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags")
         .then((res) => res.json())
         .then((data) => setCountries(data))
         .catch(err => console.error(err))

   }, [])

   const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
   )



   return (
      <div>
         <div className="countrydiv">
            {filteredCountries.map((coninfo) => {
               return(
                  
               <Link style={{textDecoration:"none"}} to={`/countryinfo/${encodeURIComponent(coninfo.name.common)}`} ><CountryCard coninfo={coninfo} /> </Link>  

               ) 
            })}
         </div>
      </div>
   )
}
export default CountryList