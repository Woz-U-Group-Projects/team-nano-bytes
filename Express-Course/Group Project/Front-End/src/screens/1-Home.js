import React from 'react';
import Search from '../components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import '../../src/0-Home.css';

const  Home  = () => (
  <div >
    <h1 className="title">  Our World Is A Beautiful Place</h1>

          <MuiThemeProvider>

          <Search />

        </MuiThemeProvider>
    
  </div>
);


export default Home;

