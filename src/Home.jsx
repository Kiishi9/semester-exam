import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1> My Name Is Iteoluwakiishi</h1>
      <h3>
        {" "}
        This is my Altschool Second Semester Exam project. I created counters
        using Custom Hook and useReducer. I have also taken a bit of time to
        make my UI better.
      </h3>

      <Link className="linkss" to="/counter">
        {" "}
        Use Counter
      </Link>
      <Link className="linkss" to="/counter-2">
        {" "}
        Use Counter - 2{" "}
      </Link>
    </div>
  );
};

export default Home;
