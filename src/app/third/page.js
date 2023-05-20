"use client"; 
import Nav from "../Nav"
import TextField from "@mui/material/TextField";
import { Backword } from "../Button";
import './third.style.css'
import Link from "next/link";
import { useContext } from "react"; 
import FormContext from "../formContext/form.context";


function page() {
  const {
    Sname,
    setSname,
    Sdate,
    setSdate,
    Edate,
    setEdate,
    Price,
    setPrice,
    Rating,
    setRating,
    Feedback,
    setFeedback

  } = useContext(FormContext);
  return (
    <>
    <Nav button='Logout'/>
    <h1 className="text">Software Information</h1>
    <div className="box">
    <form className="form">
    <TextField id="outlined-basic" label="Name" variant="outlined" className="Name" value={Sname} onChange={(e) => {setSname(e.target.value)}}/>
    <TextField id="outlined-basic" label="Start Date" variant="outlined" className="Location" value={Sdate} onChange={(e) =>{setSdate(e.target.value)}}/>
    <TextField id="outlined-basic" label="End Date" variant="outlined" className="City" value={Edate} onChange={(e) => {setEdate(e.target.value)}}/>
    <TextField id="outlined-basic" label="Price" variant="outlined" className="State" value={Price} onChange={(e) => {setPrice(e.target.value)}}/>
    </form>
    <div className="form-2">
    <TextField id="outlined-basic" label="Rating" variant="outlined" className="Country" value={Rating} onChange={(e) => {setRating(e.target.value)}}/>
    <TextField id="outlined-basic" label="Feedback" variant="outlined" className="Capacity" value={Feedback} onChange={(e) => {setFeedback(e.target.value)}} />
    </div>
    </div>
   <Link href='/' className="btn-2">
   <button
   >Submit</button>
   </Link>
   <Link href='/second'>
    <Backword/>
    </Link>

    </>
  )
}

export default page