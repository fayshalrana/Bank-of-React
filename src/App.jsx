import React, { useState } from "react";
import Navbar from "./Componets/Navbar";
import { Container, Grid } from "@mui/material";
import SliderSelect from "./Componets/SliderSelect";
import Result from "./Componets/Result";
import Tenuir from "./Componets/Tenuir";
import "./app.css";

function App() {
  const [data, setData] = useState({
    homePrice: 3000,
    downPayment: 3000 * 0.2,
    loneAmount: 3000 * 0.8,
    interstRate: 5,
    loneTerm: 5
  })



  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth={"xl"} sx={{marginTop:"2rem"}}>
      <Grid container spacing={10} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <SliderSelect data={data} setData={setData}></SliderSelect>
          <Tenuir data={data} setData={setData}></Tenuir>
        </Grid>
        <Grid item xs={12} md={6}>
          <Result data={data}></Result>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
