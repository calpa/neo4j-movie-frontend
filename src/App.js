import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography } from '@mui/material';
import CustomTable from './components/CustomTable';

import CustomSelect from './components/CustomSelect';
import YearSlider from './components/YearSlider';

const host = process.env.REACT_APP_HOST;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('All');
  const [minYear, setMinYear] = useState(1900);
  const [selectedYearRange, setSelectedYearRange] = useState([
    1900,
    new Date().getFullYear(),
  ]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${host}/movie`);

      setMovies(data);
      setMinYear(
        data.map((movie) => movie.released.low).reduce((a, b) => Math.min(a, b))
      );
    }

    fetchData();
  }, []);

  return (
    <Grid
      container
      style={{
        padding: 10,
      }}
      justifyContent='center'
    >
      <Grid container item xs={12} justifyContent='center'>
        <Typography variant='h3' component='h1'>
          Movies
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Paper
          style={{
            padding: 10,
            marginBottom: 10,
          }}
        >
          <Typography variant='h4'>Filters:</Typography>
          <CustomSelect
            movies={movies}
            handleChange={(title) => setSelectedMovie(title)}
          />
          <Typography>Released:</Typography>
          <YearSlider
            minYear={minYear}
            handleChange={(value) => setSelectedYearRange(value)}
          ></YearSlider>
        </Paper>
      </Grid>
      <Grid container item xs={12} justifyContent='center'>
        <CustomTable
          rows={movies}
          selectedMovie={selectedMovie}
          selectedYearRange={selectedYearRange}
        />
      </Grid>
    </Grid>
  );
}

export default App;
