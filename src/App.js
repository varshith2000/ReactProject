import React from 'react';
import profileIcon from './profile.svg';
import './App.css';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
import image from "./data/data.json"

function App() {
  return (
   <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
   </BrowserRouter>
  );
}


let Home= () =>{
  let profiles=data.profile;
  return(
    <div className="row justify-content-center">
        {profiles.map((values,index)=>(
          <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="card">
            <div className="card-body text-center">
              <img src={values.basics.image} alt="profile Icon" style={{width:"30%"}}/>
              <h2>{values.basics.name}</h2>
              <h4 className="text-secondary">{values.basics.colour}</h4>
              <h4>{values.basics.internalstorage}</h4>
              <h4>{values.basics.ram}</h4>
           
              <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">View Features</Link>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default App;