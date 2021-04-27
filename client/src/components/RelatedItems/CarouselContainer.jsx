import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Carousel from "react-multi-carousel";
import YourOutfitList from './YourOutfitList.jsx';
import axios from 'axios';

//const config = require('../../../../config.js');

class CarouselContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      productsList: [],
      productStyles: [],
    };
  }

  async componentDidMount() {

    const headerInfo = { 'User-agent': 'request',
    // 'Authorization' : config['TOKEN']
  };

    await axios.get(

      //`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products`
      'api/products',
      { headers: headerInfo })

      .then((res) => { this.setState({ productsList: res.data }); return res.data })
      .then((data) => {

        const dList = data;

        for (var i = 0; i < dList.length; i++) {

           axios.get(

            `api/products/` + dList[i]['id'] + `/styles`,
            { headers: headerInfo })

            .then((res2) => { this.setState({ productStyles: [...this.state.productStyles, res2.data] }) })
        }
      })
  };

  render() {

    const { productsList, productStyles } = this.state;

    var relatedItemsList = []

    for (var i = 0; i < productsList.length; i++) {

      const productID = productsList[i].id;

      for (var j = 0; j < productStyles.length; j++) {

        if (productStyles[j].product_id === productID.toString()) {

          var currentStyle = productStyles[j].results;

          for (var k = 0; k < currentStyle.length; k++) {

            var styleImageNumber = currentStyle[k].photos.length;
            var styleRandomImage = Math.floor(Math.random() * styleImageNumber)

            relatedItemsList.push(
              <RelatedItems

                riCategory={productsList[i].category}

                riName={productsList[i].name}
                riStyle={currentStyle[k].name}
                riPrice={productsList[i].default_price}
                riImage={currentStyle[k].photos[styleRandomImage].thumbnail_url}
              />)
          }
        }
      }
    }

    console.log(productStyles);


    var relatedOutfit = [
      <YourOutfitList />
    ]

    // This responsive variable was added from the react-multi-carousel docs (https://www.npmjs.com/package/react-multi-carousel)
    // The important option here is the items (number of cards shown at one time)
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 60
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        paritialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4,
        paritialVisibilityGutter: 40
      }
    };

    return (
      <div className="carouselOuterDiv">
        <h3 className="pRelated">RELATED PRODUCTS</h3>
        <Carousel responsive={responsive}>
            {relatedItemsList}
        </Carousel>
        <h3 className="pRelated">YOUR OUTFIT</h3>
        <Carousel className="test" responsive={responsive}>
            {relatedOutfit}
        </Carousel>

      </div>
    );
  }
}

export default CarouselContainer;
