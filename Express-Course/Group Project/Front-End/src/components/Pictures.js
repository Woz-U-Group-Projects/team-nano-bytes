import React from 'react';
import axios from 'axios';

class Pictures extends React.Component {
  state = {
    pictureData: []
  };

  fetchPictureData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then(response => {
      this.setState(() => {
        return {
          pictureData: response.data
        };
      });
    });
  };

  componentDidMount() {
    this.fetchPictureData();
  }

  render() {
    console.log(this.state.pictureData);
    if (this.state.pictureData.length === 0) {
      return <div>Failed to fetch data from server</div>;
    }
    const pictures = this.state.pictureData.map(picture => (
      <div key={picture.Author}>
        <em>{picture.Author}</em>

        <img src={picture.Url} height="100" width="100"/>

      </div>
    ));
    return <div>{pictures}</div>;
  }
}

export default Pictures;