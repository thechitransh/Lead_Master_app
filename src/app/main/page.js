"use client";
import "./main.style.css";
import Nav from "../Nav";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Forword from "../Button";
import { useContext } from "react";
import FormContext from "../formContext/form.context";


function page() {
  const {
    Name,
    setName,
    Contact,
    setContact,
    Designation,
    setDesignation,
    Email,
    setEmail
  } = useContext(FormContext);
  return (
    <>
      <Nav button='Logout'/>
      <h1 className="text">Contact Person Information</h1>
      <div className="box">
        <Box
          className="input"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField  id="outlined-required" label="Name" value={Name} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div>
            <TextField  id="outlined-required" label="Contact number" value={Contact} onChange={(e) => {setContact(e.target.value)}}/>
          </div>
          <div>
            <TextField  id="outlined-required" label="Designation" value={Designation} onChange={(e) => {setDesignation(e.target.value)}} />
          </div>
        </Box>
        <TextField id="outlined-basic" label="Email" variant="outlined" className="email" value={Email} onChange={(e) => {setEmail(e.target.value)}}/>
      </div>
      <Link href='/second'>
      <Forword/>
      </Link>
    </>
  );
}

export default page;
