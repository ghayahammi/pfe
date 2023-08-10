import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addBooking } from "./Redux/actions";


const MyBookingCalendar = () => {
  const [dateRetrait, setdateRetrait] = useState("");
  const [heureRetrait, setheureRetrait] = useState("");
  const [nbjours, setnbjours] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = { dateRetrait, heureRetrait, nbjours };
    dispatch(addBooking(bookingData));
    navigate("/list");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems:"left",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    color:"black",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
  };

  return (
    <div style={containerStyle}>
      <Form onSubmit={handleSubmit}>
        <FormGroup style={formGroupStyle}>
          <Label for="exampleDateRetrait">Date Retrait</Label>
          <Input
            onChange={(event) => setdateRetrait(event.target.value)}
            type="date"
            name="dateRetrait"
            id="exampleDateRetrait"
            placeholder=""
            style={inputStyle}
          />
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <Label for="exampleNbjours">Nb jours</Label>
          <Input
            onChange={(event) => setnbjours(event.target.value)}
            type="text"
            name="nbjours"
            id="exampleNbjours"
            placeholder=""
            style={inputStyle}
          />
        </FormGroup>
        <Button type="submit" style={buttonStyle}>
          Booking
        </Button>
      </Form>
      
    </div>
  );
};

export default MyBookingCalendar;
