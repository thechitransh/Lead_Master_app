"use client"; 
import Nav from "../Nav";
import TextField from "@mui/material/TextField";
import './second.style.css'
import Forword from "../Button";
import { Backword } from "../Button";
import Link from "next/link";
import { useContext } from "react";
import FormContext from "../formContext/form.context";


function second() {
  const {
    Rname,
    setRname,
    Location,
    setLocation,
    City,
    setCity,
    State,
    setState,
    Countery,
    setCountery,
    Capacity,
    setCapacity
  } = useContext(FormContext);
  return (
    <>
    <Nav button='Logout'/>
    <h1 className="text">Resturant Information</h1>
    <div className="box">
    <form className="form">
    <TextField id="outlined-basic" label="Name" variant="outlined" className="Name" value={Rname} onChange={(e) => {setRname(e.target.value)}}/>
    <TextField id="outlined-basic" label="Location" variant="outlined" className="Location" value={Location} onChange={(e) => {setLocation(e.target.value)}} />
    <TextField id="outlined-basic" label="City" variant="outlined" className="City" value={City} onChange={(e) => {setCity(e.target.value)}}/>
    <TextField id="outlined-basic" label="State" variant="outlined" className="State" value={State} onChange={(e) => {setState(e.target.value)}}/>
    </form>
    <div className="form-2">
    <TextField id="outlined-basic" label="Country" variant="outlined" className="Country" value={Countery} onChange={(e) => {setCountery(e.target.value)}} />
    <TextField id="outlined-basic" label="Capacity" variant="outlined" className="Capacity" value={Capacity} onChange={(e) => {setCapacity(e.target.value)}}/>
    </div>
    </div>
    <Link href='/third'>
    <Forword/>
    </Link>
    <Link href='/main'> 
    <Backword/>
    </Link>
    </>
  )
}

export default second