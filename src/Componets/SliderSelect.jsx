import React from "react";
import SliderComponent from "./SliderComponent";

const SliderSelect = ({data, setData}) => {
  return (
    <>
      <SliderComponent
        unit={"$"}
        defaultValu={data.homePrice}
        min={1000}
        max={10000}
        lable={"Home Price"}
        amount={data.homePrice}
        stap={100}
        value={data.homePrice}
        onChange={(e, value) => setData({
          ...data,
          homePrice: value,
          downPayment: value * 0.2,
          loneAmount: value * 0.8 

        })}
      />
      <SliderComponent
        unit={"$"}
        defaultValu={data.downPayment}
        min={0}
        max={data.homePrice}
        lable={"Down Payment"}
        amount={data.downPayment}
        stap={100}
        value={data.downPayment}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loneAmount: data.homePrice - value
        })}
      />
      <SliderComponent
        unit={"$"}
        defaultValu={data.loneAmount}
        min={0}
        max={data.homePrice}
        lable={"Lone Amount"}
        amount={data.loneAmount}
        stap={100}
        value={data.loneAmount}
        onChange={(e, value) => setData({
          ...data,
          loneAmount: value,
          downPayment: data.homePrice - value
        })}
      />
      <SliderComponent
        unit={"%"}
        defaultValu={data.interstRate}
        min={2}
        max={18}
        lable={"Interst Rate"}
        amount={data.interstRate}
        stap={.5}
        value={data.interstRate}
        onChange={(e, value) => setData({
          ...data,
          interstRate: value
        })}
      />
    </>
  );
};

export default SliderSelect;
