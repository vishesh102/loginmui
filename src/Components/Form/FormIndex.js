import { Box } from "@mui/system";
import React, { useRef } from "react";
import ButtonIndex from "../Button/ButtonIndex";
import DateTime from "./Items/DateTime";
import FormCheckBox from "./Items/FormCheckBox";
import FormRadio from "./Items/FormRadio";
import { useState } from "react";
import FormSelect from "./Items/FormSelect";
import FormTextFieldsIndex from "./Items/FormTextFieldsIndex";

import UploadInput from "./Items/UploadInput";
import TimeSlotPicker from "./Items/TimeSlotPicker";

function FormIndex() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cPassword: "",
    description: "",
    state: "",
    city: "",
    clinicname: "",
    gender: "",
  });
  const state = ["up", "uk", "punjab"];
  const city = ["modinagar", "chandigarh", "ghaziabd"];
  const gender = ["Male", "Female"];
  const Specialisation = [
    "surgeon",
    "Medicine",
    "Orthopedic",
    "Children",
    "Gynecologist",
  ];

  const handleSubmit = () => {
    console.log(data);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return (
    <Box sx={{ width: "60%", m: "0 auto", color: "text.secondary" }}>
      <Box sx={{ mb: "2rem" }}>
        {/* Heading and Sub heading of register page */}

        <Box sx={{ color: "black" }}>
          <h1>Create an account</h1>
        </Box>
        <p>Describe yourself as clearly so that there is no mistake</p>
      </Box>

      {/* firstname and last name */}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            name="firstname"
            onChange={onChange}
            variant="outlined"
            id="outlined-basic1"
            size="small"
            placeholder="Enter Your First Name"
          />
        </Box>

        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            setData={setData}
            onChange={onChange}
            name="lastname"
            variant="outlined"
            id="outlined-basic2"
            size="small"
            placeholder="Enter Your Last Name"
          />
        </Box>
      </Box>
      {/* // */}

      {/* email */}

      <Box>
        <FormTextFieldsIndex
          variant="outlined"
          size="small"
          onChange={onChange}
          id="outlined-basic3"
          name="email"
          placeholder="Enter Your Email Id Name"
        />
      </Box>
      {/* // */}

      {/* password and Confirm password */}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            name="password"
            id="outlined-basic4"
            onChange={onChange}
            type="password"
            variant="outlined"
            size="small"
            placeholder="Enter Password"
          />
        </Box>

        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            setData={setData}
            id="outlined-basic5"
            onChange={onChange}
            name="cPassword"
            variant="outlined"
            size="small"
            type="password"
            placeholder="Confirm Password"
          />
        </Box>
      </Box>
      {/* // */}

      {/* Descripton */}
      <Box>
        <FormTextFieldsIndex
          name="description"
          onChange={onChange}
          variant="outlined"
          id="outlined-basic6"
          placeholder="Description"
          multiline={true}
          rows={6}
        />
      </Box>
      {/* // */}

      {/* state and city */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormSelect
            select={true}
            name="state"
            onChange={onChange}
            id="outlined-basic7"
            menuItem={state}
            placeholder="chose your state"
          />
        </Box>
        <Box sx={{ width: "48%" }}>
          <FormSelect
            select={true}
            menuItem={city}
            data={data}
            name="city"
            id="outlined-basic8"
            placeholder="chose your city"
          />
        </Box>
      </Box>

      {/* clinic name */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            variant="outlined"
            placeholder="Clinic Name"
            id="outlined-basic9"
            size="small"
            name="clinicname"
            onChange={onChange}
          />
        </Box>
        {/* ///////// */}

        {/* pin code */}
        <Box sx={{ width: "48%" }}>
          <FormTextFieldsIndex
            name="pincode"
            onChange={onChange}
            variant="outlined"
            size="small"
            id="outlined-basic10"
            placeholder="Pin Code"
          />
        </Box>
        {/* ////////// */}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* gender */}

        <Box sx={{ width: "48%" }}>
          <FormSelect
            select={true}
            menuItem={gender}
            name="gender"
            placeholder="Gender"
            id="outlined-basic11"
          />
        </Box>

        <Box sx={{ width: "48%" }}>
          {/* working experiance */}

          <FormTextFieldsIndex
            name="experiance"
            variant="outlined"
            size="small"
            id="outlined-basic12"
            placeholder="Working Experiance (In Years)"
            type="number"
          />
        </Box>
      </Box>

      {/* Specialisation */}

      <Box sx={{ width: "100%" }}>
        <FormSelect
          name="specialisation"
          select={true}
          id="outlined-basic13"
          menuItem={Specialisation}
          placeholder="Specialisation"
        />
      </Box>
      {/* ///////// */}

      {/* profile picture */}

      <UploadInput placeholder="Upload A Profile Picture. Max Size 2MB" />

      {/* ///////////// */}

      {/* diganose time */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "48%" }}>
          <TimeSlotPicker
            label="shift start timing"
            name="specialisation"
            onChange={onChange}
          />
        </Box>
        <Box sx={{ width: "48%" }}>
          <TimeSlotPicker
            label="shift end timing"
            name="specialisation"
            onChange={onChange}
          />
        </Box>
      </Box>
      {/* <TimeRange /> */}

      {/* date time */}

      <Box>
        <DateTime />
      </Box>

      {/* ///////// */}
      {/* checkbox and radio button */}
      <Box sx={{ display: "flex" }}>
        <FormCheckBox label="checkBox 1" />
        <FormCheckBox label="checkBox 2" />
        <FormRadio radio1="Radio1" radio2="Radio2" />
      </Box>

      {/* //////// */}

      {/* Submit Button */}

      <Box sx={{ m: "2rem 0" }}>
        <ButtonIndex
          handleClick={handleSubmit}
          color="white"
          variant="contained"
          text="Submit Your Form"
        />
      </Box>

      {/* ////// */}
    </Box>
  );
}

export default FormIndex;
