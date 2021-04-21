/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import Related_Items from './Related_Items/Related_Items.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      productId: undefined,
    };
  }

  componentDidMount() {
    const defaultId = '23718';
    const productId = this.getProductIdFromUrl() ?? defaultId;
    this.setState({ productId });
    console.log('productId:', productId);

    //   axios({
    //     url: `api/products/${productId}/styles`,
    //     method: 'get',
    //   })
    //     .then((data) => {
    //       this.setState({
    //         data,
    //       });
    //     })
    //     .catch(() => console.log('failed retrieving data'));
  }

  getProductIdFromUrl() {
    const { search } = window.location;
    const re = /p_id=([0-9]+)/; // E.g.: "?p_id=12345"
    return re.exec(search)?.[1];
  }

  render() {
    return this.state.productId ? (
      <div>
        <Overview
          // data={this.state.data}
          productId={this.state.productId}
        />
        {/* <Related_Items data={this.state.data} productId={this.state.productId} /> */}
        {/* <RatingsAndReviews data={this.state.data} productId={this.state.productId} /> */}
      </div>
    ) : (<div>loading productId</div>);
  }
}

export default App;
