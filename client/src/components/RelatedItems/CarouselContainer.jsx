/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import RelatedItems from './RelatedItems.jsx';
import YourOutfitList from './YourOutfitList.jsx';

class CarouselContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      productStyles: [],
      selectedCategory: '',
      selectedCatRun: 1
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    axios.get('api/products')
      .then((resProduct) => {
        this.setState({ productsList: resProduct.data }); return (resProduct.data); })
=======
   componentDidMount() {

     axios.get('api/products')
      .then((resProduct) => { this.setState({ productsList: resProduct.data }); return (resProduct.data); })
>>>>>>> ac95df9eff9844059a8486f719e6f51ae74a67d3
      .then((data) => {
        const dList = data;
        for (var i = 0; i < dList.length; i++) {
           axios.get(
            `api/products/` + dList[i]['id'] + `/styles`)
            .then((resStyle) => { this.setState({ productStyles: [...this.state.productStyles, resStyle.data] }) })
        }
      })
   };

   getProductCategory(id) {

     if (this.state.selectedCatRun === 1) {

      axios.get('api/products/' + id)
      .then((resSelect) => { this.setState({ selectedCategory: resSelect.data.category }); return(0) })
      .then((resSelectState) => { this.setState({ selectedCatRun: resSelectState }); })
     }
   }

   setOutfitItem(id) {
//...
  }

  render() {

    const { productsList, productStyles, selectedCategory } = this.state;
    var relatedItemsList = []

    var selectedWindowsItemID = window.location.search.replace('?p_id=', '');
    this.getProductCategory(selectedWindowsItemID);

    console.log('window location - carousel')
    console.log(selectedWindowsItemID)
    console.log('window location - carousel - category')
    console.log(this.state.selectedCategory)
    console.log(productsList)

    for (var i = 0; i < productsList.length; i++) {

      const productID = productsList[i].id;
      const productCAT = productsList[i].category;

      if ((productCAT === this.state.selectedCategory) || !(this.state.selectedCategory)) {

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
    }

    //console.log('===>productSyles: ',productStyles);


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
        <Carousel responsive={responsive} >
            {relatedItemsList}
        </Carousel>
        <h3 className="pRelated">YOUR OUTFIT</h3>

        <YourOutfitList />
      </div>
    );
  }
}

export default CarouselContainer;
