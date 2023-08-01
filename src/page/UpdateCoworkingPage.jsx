import {useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Header from "../component/Header";


const UpdateCoworkingPage = () => {
    const {id} = useParams()
    const[coworking, setCoworking] = useState(null)

    const fetchCoworking = async () => {
        const responseCoworking = await fetch (`http://localhost:3010/api/coworkings/${id}`);
        const responseCoworkingJs = await responseCoworking.json()

        setCoworking(responseCoworkingJs.data)
    }
    useEffect(()=>{fetchCoworking()},[])
    return (
        <>
        <Header/>
        <form className="updatingPage">
            <div className="update-forma">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" defaultValue={coworking && coworking.name} />
          </div>
    
          <div className="update-forma">
            <label htmlFor="superficy">Superficie</label>
            <input type="number" name="superficy" defaultValue={coworking && coworking.superficy} />
          </div>
    
          <div className="update-forma">
            <label htmlFor="capacity">Capacité</label>
            <input type="number" name="capacity" defaultValue={coworking && coworking.capacity} />
          </div>
    
          <div className="update-forma">
            <label htmlFor="price_hour">Le prix par heure</label>
            <input type="number" name="price_hour" defaultValue={coworking && coworking.price.hour} />
          </div>
    
          <div className="update-forma">
            <label htmlFor="price_day">Le prix par jour</label>
            <input type="number" name="price_day" defaultValue={coworking && coworking.price.day}/>
          </div>
    
          <div className="update-forma">
            <label htmlFor="price_month">Le prix par mois</label>
            <input type="number" name="price_month" defaultValue={coworking && coworking.price.month}/>
          </div>
    
          <div className="update-forma">
            <label htmlFor="address_number">numéro d'adresse</label>
            <input type="number" name="address_number" defaultValue={coworking && coworking.address.number}/>
          </div>

          <div className="update-forma">
        <label htmlFor="address_street">L'adresse</label>
        <input type="text" name="address_street" defaultValue={coworking && coworking.address.street} />
      </div>

      <div className="update-forma">
        <label htmlFor="address_postcode">Code Postale</label>
        <input type="number" name="address_postcode" defaultValue={coworking && coworking.address.postCode} />
      </div>

      <div className="update-forma">
        <label htmlFor="address_city">La ville</label>
        <input type="text" name="address_city" defaultValue={coworking && coworking.address.city} />
      </div>

      <input type="submit" />
        </form>
    </>
    )
}
export default UpdateCoworkingPage