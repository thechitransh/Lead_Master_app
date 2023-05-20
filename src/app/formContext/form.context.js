import { useState, createContext } from "react";

const FormContext = createContext();

  

export const FormProvider = ({ children }) => {
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Email, setEmail] = useState("");
  const [Rname, setRname] = useState("");
  const [Location, setLocation] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Countery, setCountery] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [Sname, setSname] = useState("");
  const [Sdate, setSdate] = useState("");
  const [Edate, setEdate] = useState("");
  const [Price, setPrice] = useState("");
  const [Rating, setRating] = useState("");
  const [Feedback, setFeedback] = useState("");
  

  return (
    <FormContext.Provider
      value={{
        Name,
        Contact,
        Designation,
        Email,
        Rname,
        Location,
        City,
        State,
        Countery,
        Capacity,
        Sname,
        Sdate,
        Edate,
        Price,
        Rating,
        Feedback,
        setName,
        setContact,
        setDesignation,
        setEmail,
        setRname,
        setLocation,
        setCity,
        setState,
        setCountery,
        setCapacity,
        setSname,
        setSdate,
        setEdate,
        setPrice,
        setRating,
        setFeedback,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;