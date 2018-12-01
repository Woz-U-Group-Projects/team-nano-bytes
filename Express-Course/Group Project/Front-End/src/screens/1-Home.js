import React from 'react';
import Search from '../components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const  Home  = () => (
  <div className="Search">
          <MuiThemeProvider>

          <Search />

        </MuiThemeProvider>

  </div>
);

export default Home;

// import React, { Component } from 'react';

// class Home extends Component {
//   render() {
//     return (
//         <div>
//           <h2>Home</h2>
//         </div>
//     );
//   }
// }

// export default Home;