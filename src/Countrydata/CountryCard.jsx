import '../Countrydata/CountryList.css'

const CountryCard = ({coninfo})=>{
    return(
        
         <div className="countryInfo">
               
              <img className='flag' src={coninfo.flags.png} alt="" />
              <div className='info'>
              <h2>{coninfo.name.common}</h2>
              <p><strong>Capital: </strong>{coninfo.capital}</p>
              <p><strong>Population: </strong>{coninfo.population}</p>

              <h3><b>Click to know more...</b></h3>
              </div>
                
         </div>
      
    )
}
export default CountryCard