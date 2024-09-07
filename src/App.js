import React, { useEffect, useState } from "react";
import {apiUrl, filterData } from './data.js'
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import { toast } from "react-toastify";
const App = () => {
   const [courses, setCourses] = useState(null);
   useEffect( () =>{
    const fetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const output = res.json();
        // save data
        setCourses(output.data);
      } 
      catch (error) {
        toast.error("Something went wrong");
      }
    }
    fetchData();
   },[]);

  return(
    <div>
      <div>
      <Navbar></Navbar>
      </div>

      <div>
      <Filter filterData={filterData}></Filter>
      </div>
      
      <div>
      <Cards courses={courses}></Cards>
      </div>
      

      
    </div>
  )
};

export default App;
