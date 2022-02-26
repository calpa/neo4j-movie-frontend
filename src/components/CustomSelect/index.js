import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect(props) {
  const [movie, setMovie] = useState('All');

  const { movies = [] } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    setMovie(value);
    props.handleChange(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Movie Title</InputLabel>
        <Select value={movie} label='Age' onChange={handleChange}>
          <MenuItem value={'All'}>All</MenuItem>
          {movies.map((movie) => (
            <MenuItem value={movie.title}>{movie.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
