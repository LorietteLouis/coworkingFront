import React from "react";
import Footer from "../../component/Footer";
import HeaderAdmin from "../../component/HeaderAdmin";

const Dashboard = () => {
  return (
    <>
      <HeaderAdmin/>
      <div className="home">
        <h1>Home Administration</h1>
        <p>hello and welcome to this center!</p>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;