import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function YearSlider(props) {
  const { minYear } = props;

  const [value, setValue] = useState([minYear, new Date().getFullYear()]);

  const marks = [
    {
      value: minYear,
      label: minYear,
    },
    {
      value: new Date().getFullYear(),
      label: new Date().getFullYear(),
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);
  };

  return (
    <Box
      sx={{ width: 300 }}
      style={{
        margin: '0 auto',
      }}
    >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        min={minYear}
        max={new Date().getFullYear()}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  );
}
