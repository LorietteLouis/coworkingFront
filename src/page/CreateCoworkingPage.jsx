import { useNavigate } from "react-router-dom";
import Header from "../component/Header";

const CreateCoworkingPage = () => {
    const navigate = useNavigate()

    const handleCreateCoworking = async (e) =>{
        e.preventDefault()

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
            hour: parseInt(price_hour),
            day: parseInt(price_day),
            month: parseInt(price_month),
        },
        superficy: parseInt(superficy),
        capacity: parseInt(capacity),
        address: {
            number: parseInt(address_number),
            street: address_street,
            postCode: parseInt(address_postcode),
            city: address_city,
      },
        };
    
        const responseCreate = await fetch("http://localhost:3010/api/coworkings",{
            method: "POST",
            body: JSON.stringify(coworkingData),
            headers:{
                "Content-Type":"application/json",
            }
        })
        const responseCreateJs = await responseCreate.json()
        navigate("/coworkings")
    };
    return (
        <>
        <Header/>
        <form onSubmit={handleCreateCoworking} className="create-coworking">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
    
          <div>
            <label htmlFor="superficy">Superficy</label>
            <input type="number" name="superficy" />
          </div>
    
          <div>
            <label htmlFor="capacity">Capacity</label>
            <input type="number" name="capacity" />
          </div>
    
          <div>
            <label htmlFor="price_hour">Price by hour</label>
            <input type="number" name="price_hour" />
          </div>
    
          <div>
            <label htmlFor="price_day">Price by day</label>
            <input type="number" name="price_day" />
          </div>
    
          <div>
            <label htmlFor="price_month">Price by month</label>
            <input type="number" name="price_month" />
          </div>
    
          <div>
            <label htmlFor="address_number">Address number</label>
            <input type="number" name="address_number" />
          </div>
    
          <div>
            <label htmlFor="address_street">Address street</label>
            <input type="text" name="address_street" />
          </div>
    
          <div>
            <label htmlFor="address_postcode">Address zipcode</label>
            <input type="number" name="address_postcode" />
          </div>
    
          <div>
            <label htmlFor="address_city">Address city</label>
            <input type="text" name="address_city" />
          </div>
    
          <input type="submit" />
        </form>
    </>
      );
}
export default CreateCoworkingPage;