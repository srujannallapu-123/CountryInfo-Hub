import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../Countrydata/CountryInfo.css'

const CountryInfo = () => {

    const navigate = useNavigate();

  const [countryDetails, setCountryDetails] = useState(null) // we are storing single object so that's the reason for using null in usestate

  const { name } = useParams()

  useEffect(() => {

    if (!name) return;

    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=name,capital,currencies,flags`)
      .then((res) => res.json())
      .then((data) => { console.log("countrydetails", data); setCountryDetails(data[0]) })
      .catch((err) => console.error(err))

  }, [name])

  if (!countryDetails) return <h3 style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>Loading...</h3>;

  return (

    <div className="headercontainer">
      <div className="countryinfoheader">

        <h1>Country Name : {countryDetails.name.common}</h1>
        <h1>Capital : {countryDetails.capital?.[0]}</h1>
         <button
            className="back-button"
            onClick={() => navigate(-1)}  // Go back in browser history
          >
            ← Back
          </button>

      </div>
      <div className="flaginfo">
        <img style={{ width: "40vw", objectFit: "cover", borderRadius: "8px", height: "45vh" }} src={countryDetails.flags.png} alt="" />

        <div className="countrydetails" >
          <h2 className="official-name" >OFFICIAL NAME:<br />
            {countryDetails.name.official} </h2>

          {countryDetails.currencies && Object.values(countryDetails.currencies).map((cur, idx) => (
             <div key={idx}>
              <h2 className="currency-name" style={{paddingTop:"10px"}}>Currencies of Country :{cur.name}</h2>
              <h2  className="currency-symbol" style={{paddingTop:"10px"}}>Currency Symbol: " {cur.symbol} " </h2>
            </div>))}
  
              </div>
      </div>

    </div>
  )
}
export default CountryInfo