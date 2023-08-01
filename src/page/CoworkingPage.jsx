import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link} from "react-router-dom";
import Cookies from "js-cookie";


const CoworkingsPage = () => {
  const [coworkings, setCoworkings] = useState([]);
  const [ deleteCoworkingMessage, setDeleteCoworkingMessage] = useState(null)

  const fetchCoworkings = async () => {
    const response = await fetch("http://localhost:3010/api/coworkings", {
      method:"GET"
    });
    const responseJs = await response.json();

    setCoworkings(responseJs.data);
  };

  useEffect(() => { fetchCoworkings()}, [deleteCoworkingMessage]);

const handleDeleteCoworking = async (coworkingId)  => {
  const token = Cookies.get("jwt")
  const responseDelete =  await fetch(`http://localhost:3010/api/coworkings/${coworkingId}`, {
    method: "DELETE",
    headers:{
      Authorization: `Bearer ${token}`,
    }
  });

  const responseDeleteJs = await responseDelete.json();
  setDeleteCoworkingMessage(responseDeleteJs.message);
};




return (
  <div>
    <Header/>
    <h1>Liste des coworkings</h1>
    {deleteCoworkingMessage && <p>{deleteCoworkingMessage}</p>}
    {coworkings.map((coworking) => (
      <div key={coworking.id} className="coworkings">
        <h2>{coworking.name}</h2>
        <p>
          Adresse :{coworking.address.number} {coworking.address.street} - {coworking.address.postcode}
          {coworking.address.city}
        </p>
        <button onClick={() => handleDeleteCoworking(coworking.id)}>Supprimer le coworking</button>
        <button><Link to={`/admin/coworkings/${coworking.id}/update`}>Update</Link></button>
      </div>
    ))}
    <Footer/>
  </div>
);
};
export default CoworkingsPage;