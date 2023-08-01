import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Cookies from "js-cookie";

const UpdateCoworkingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coworking, setCoworking] = useState(null);

  const fetchCoworking = async () => {
    const responseCoworking = await fetch(`http://localhost:3010/api/coworkings/${id}`);
    const responseCoworkingJs = await responseCoworking.json();

    setCoworking(responseCoworkingJs.data);
  };

  const handleUpdateCoworking = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const superficy = e.target.superficy.value;
    const capacity = e.target.capacity.value;
    const price_hour = e.target.price_hour.value;
    const price_day = e.target.price_day.value;
    const price_month = e.target.price_month.value;
    const address_number = e.target.address_number.value;
    const address_street = e.target.address_street.value;
    const address_postcode = e.target.address_postcode.value;
    const address_city = e.target.address_city.value;

    const coworkingData = {
      name: name,
      price: {
        hour: price_hour ? parseInt(price_hour) : null,
        day: price_day ? parseInt(price_day) : null,
        month: price_month ? parseInt(price_month) : null,
      },
      superficy: superficy ? parseInt(superficy) : superficy,
      capacity: capacity ? parseInt(capacity) : null,
      address: {
        number: address_number ? parseInt(address_number) : null,
        street: address_street,
        postCode: address_postcode ? parseInt(address_postcode) : null,
        city: address_city,
      },
    };

    const token = Cookies.get("jwt")

    const responseUpdate = await fetch(`http://localhost:3010/api/coworkings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(coworkingData),
    });

    if (responseUpdate.status === 200) {
      navigate("/admin/coworkings");
    }
  };
    useEffect(()=>{fetchCoworking()},[])
    return (
        <>
        <Header/>
        <form onSubmit={handleUpdateCoworking} className="updatingPage">
            <div className="update forma">
            <label htmlFor="name">Nom</label>
            <input type="text" name="name" defaultValue={coworking && coworking.name} />
          </div>
    
          <div className="update forma">
            <label htmlFor="superficy">Superficie</label>
            <input type="number" name="superficy" defaultValue={coworking && coworking.superficy} />
          </div>
    
          <div className="update forma">
            <label htmlFor="capacity">Capacité</label>
            <input type="number" name="capacity" defaultValue={coworking && coworking.capacity} />
          </div>
    
          <div className="update forma">
            <label htmlFor="price_hour">Le prix par heure</label>
            <input type="number" name="price_hour" defaultValue={coworking && coworking.price.hour} />
          </div>
    
          <div className="update forma">
            <label htmlFor="price_day">Le prix par jour</label>
            <input type="number" name="price_day" defaultValue={coworking && coworking.price.day}/>
          </div>
    
          <div className="update forma">
            <label htmlFor="price_month">Le prix par mois</label>
            <input type="number" name="price_month" defaultValue={coworking && coworking.price.month}/>
          </div>
    
          <div className="update forma">
            <label htmlFor="address_number">numéro d'adresse</label>
            <input type="number" name="address_number" defaultValue={coworking && coworking.address.number}/>
          </div>

          <div className="update forma">
        <label htmlFor="address_street">L'adresse</label>
        <input type="text" name="address_street" defaultValue={coworking && coworking.address.street} />
      </div>

      <div className="update forma">
        <label htmlFor="address_postcode">Code Postale</label>
        <input type="number" name="address_postcode" defaultValue={coworking && coworking.address.postCode} />
      </div>

      <div className="update forma">
        <label htmlFor="address_city">La ville</label>
        <input type="text" name="address_city" defaultValue={coworking && coworking.address.city} />
      </div>

      <input type="submit" />
        </form>
    </>
    )
}
export default UpdateCoworkingPage