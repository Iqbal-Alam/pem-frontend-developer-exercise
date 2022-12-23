import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import PetsForm from './components/PetsForm';
import Pets from './components/Pets';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
        <Box>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                <PetsForm />
                </Grid>
                <Grid item xs={6}>
                <Pets />
                </Grid>
            </Grid>
        </Box>
    </Provider>
  );
}

export default App;
