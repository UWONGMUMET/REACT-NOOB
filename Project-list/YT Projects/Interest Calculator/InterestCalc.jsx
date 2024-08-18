import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './IC.css';

const InterestCalc = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number);
  };

  const calculateInterest = (e) => {
    e.preventDefault();

    if (!principal || !rate || !time) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const simpleInterest = (parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100;
    setInterest(formatRupiah(simpleInterest));
  };

  const resetForm = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setInterest(null);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="heading-text">
          <h1 className="heading-one">Simple Interest Calculator</h1>
          <p className="heading-two">Hitung bunga sederhana Anda dengan mudah</p>
        </div>

        <div className="total-amount-card">
          <div className="card-text">
            <h3 className="total-amount-heading">
              {interest !== null ? interest : formatRupiah(0)}
            </h3>
            <p className="total-amount-para">Total Bunga Sederhana</p>
          </div>
        </div>

        <form onSubmit={calculateInterest}>
          <div className="input-area">
            <div className="input-field">
              <TextField
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                label="Jumlah Pokok (Rp)"
                variant="outlined"
              />
            </div>

            <div className="input-field">
              <TextField
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                label="Suku Bunga (p.a) %"
                variant="outlined"
              />
            </div>

            <div className="input-field">
              <TextField
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                label="Periode Waktu (Tahun)"
                variant="outlined"
              />
            </div>
          </div>

          <div className="button-collection">
            <Stack spacing={2} direction="row">
              <Button type="submit" className="btn-one" variant="contained">
                Hitung
              </Button>
              <Button className="btn-one" onClick={resetForm} variant="outlined">
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterestCalc;
