import React, { useState } from "react";
import Filters from "./Filters";
import Result from "./Result";
import "./main.css";

const Main = () => {
  const [checked, setChecked] = useState(false);
  const [masterClassChecked, setMasterClassChecked] = useState(false);
  const [sliderVal, setSliderVal] = useState(100);
  const [salesVal, setSalesVal] = useState(100);
  const [selectVal, setSelectVal] = useState(null);
  const [pricepointVal, setPricepointVal] = useState(null);
  const [downsellVal, setDownsellVal] = useState(null);
  const [masterClassVal, setMasterClassVal] = useState(1);
  console.log(masterClassVal, masterClassChecked);

  return (
    <div className="main">
      <div className="main__filter__container">
        <Filters
          checked={checked}
          setChecked={setChecked}
          sliderVal={sliderVal}
          setSliderVal={setSliderVal}
          salesVal={salesVal}
          setSalesVal={setSalesVal}
          setSelectVal={setSelectVal}
          setPricepointVal={setPricepointVal}
          setMasterClassChecked={setMasterClassChecked}
          masterClassChecked={masterClassChecked}
          setDownsellVal={setDownsellVal}
          pricepointVal={pricepointVal}
          setMasterClassVal={setMasterClassVal}
        />
      </div>
      <div className="main__result__container">
        <Result
          sliderVal={sliderVal}
          salesVal={salesVal}
          selectVal={selectVal}
          pricepointVal={pricepointVal}
          masterClassChecked={masterClassChecked}
          downsellVal={downsellVal}
          masterClassVal={masterClassVal}
        />
      </div>
    </div>
  );
};

export default Main;
