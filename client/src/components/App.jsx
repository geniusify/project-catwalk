import React from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './Ratings-And-Reviews/Ratings-And-Reviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios({
      url: 'api/products/23718/styles',
      method: 'get',
    })
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch(() => console.log('failed retrieving data'));
  }

  render() {
    return (
      <div>
        <Overview data={this.state.data}/>
        <RelatedItems data={this.state.data}/>
        <RatingsAndReviews data={this.state.data}/>
      </div>
    );
  }
}

export default App;
