import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
import '../0-Home.css';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10865574-9dd2fc53c3b68b96dfe4b246b',
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (
      <div className = "SearchText">
        <div className = "TextField">
        <TextField 
          name="searchText" 
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={false}
        />
        </div>
        <br />

        <div className = "SelectField">
        <SelectField id = "SField"
          name="amount"
          floatingLabelText="Amount" 
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
        
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />   
  

        </SelectField>
        </div>

        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
