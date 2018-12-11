import React from 'react';
import Search from '../components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import '../../src/0-Home.css';

const  Home  = () => (
  <div >
    <p className="title">Our World Is A Beautiful Place</p>

          <MuiThemeProvider>

          <Search />

        </MuiThemeProvider>
    
  </div>
);


export default Home;

