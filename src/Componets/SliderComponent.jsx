import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValu, min, max, amount, lable, unit, stap, onChange, value }) => {
  return (
    <Stack my={1.5}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{lable}</Typography>
        <Typography variant="h6">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValu}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={stap}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography
          variant="caption"
          sx={{
            color: "gray",
          }}
        >
          {unit}
          {min}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "gray",
          }}
        >
          {unit}
          {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
