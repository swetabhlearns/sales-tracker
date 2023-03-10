import { Checkbox, FormControlLabel, Slider } from "@mui/material";
import React, { useState } from "react";
import "./filters.css";
const Filters = ({
  checked,
  setChecked,
  sliderVal,
  setSliderVal,
  salesVal,
  setSalesVal,
  setSelectVal,
  setPricepointVal,
  setMasterClassChecked,
  masterClassChecked,
  setDownsellVal,
  setMasterClassVal,
}) => {
  const handleCheckedBox = (e) => {
    setChecked(e.target.checked);
    setDownsellVal(1);
  };
  const handleSliderChange = (e) => {
    setSliderVal(e.target.value);
  };
  const handleSalesChange = (e) => {
    setSalesVal(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectVal(e.target.value);
  };
  const handlePricePointChange = (e) => {
    setPricepointVal(e.target.value);
  };
  const handleMasterClassChange = (e) => {
    setMasterClassChecked(e.target.checked);
    if (masterClassChecked === true) {
      setMasterClassVal(1);
    } else setMasterClassVal(1.2);
  };
  const handleDownsell = (e) => {
    if (checked) {
      setDownsellVal(e.target.value);
    } else setDownsellVal(1);
  };

  return (
    <div className="filters">
      <div className="filters__container">
        <div className="filters__slider">
          <label htmlFor="slider">
            <p>If {sliderVal} Sales calls are booked per Conversion Event</p>
          </label>
          <Slider
            onChange={handleSliderChange}
            id="slider"
            defaultValue={100}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ color: "#2b8265", mb: 5 }}
          />
          <label htmlFor="sales">
            <p>And {salesVal} Sales made</p>
          </label>
          <Slider
            id="sales"
            onChange={handleSalesChange}
            defaultValue={100}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ color: "#2b8265", mb: 5 }}
          />
        </div>

        <div className="select">
          <div className="select__container ">
            <label className="select__label">
              <p>
                With{" "}
                <span>
                  <select onChange={handleSelectChange}>
                    <option hidden> Choose </option>

                    <option value={1}>Monthly</option>
                    <option value={4}>Quarterly</option>
                    <option value={12}>Yearly</option>
                  </select>
                </span>
                Conversion Events
              </p>
            </label>
          </div>
        </div>
        <div className="filter__pricepoint">
          <div className="filters__pricepoint__input">
            <label className="filters__pricepoint__label">
              <p>
                At
                <span>
                  <input
                    className="input__pricepoint"
                    type="number"
                    placeholder="$"
                    onChange={handlePricePointChange}
                    min="0"
                  />
                </span>
                the pricepoint Amount
              </p>
            </label>
          </div>
        </div>
        <div className="checkbox">
          <div className="checkbox__container">
            <FormControlLabel
              value="end"
              control={<Checkbox sx={{ color: "#2b8265" }} />}
              label="Would you run a cleanup masterclass?"
              labelPlacement="start"
              onChange={handleMasterClassChange}
            />
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  sx={{ color: "#2b8265" }}
                  checked={checked}
                  onChange={handleCheckedBox}
                />
              }
              label="Will you have downsell available after launch?"
              labelPlacement="start"
            />
            {checked && (
              <div className="filters__downsell__input">
                <label className="filters__downsell__label">
                  <p>
                    Enter the Downsell amount:
                    <span>
                      <input
                        className="input__downsell"
                        type="number"
                        placeholder="$"
                        onChange={handleDownsell}
                        min="0"
                      />
                    </span>
                  </p>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
