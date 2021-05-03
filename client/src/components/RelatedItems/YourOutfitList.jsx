import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import Carousel from 'react-multi-carousel';
import axios from 'axios';


const YourOutfitList = () => {

  const [outfitInfo, setOutfitInfo] = useState([]);
  const [productList, setProductList] = useState(localStorage.getItem('magicX1') ? localStorage.getItem('magicX1').split('#') : []);

  //localStorage.clear();
  //const [productList, setProductList] = useState([]);


  const [outfitRenderList, setOutfitRenderList] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);

  const selectedWindowsItemID = window.location.search.replace('?p_id=', '');

  const addOutfitItem = (id) => {

      axios({ url: `api/products/` + id, method: 'get' })
      .then((res) => { setOutfitInfo(outfitInfo => [...outfitInfo, res.data] ); return(res.data) })
      .then((resProduct) => {

        axios({ url: `api/products/` + id + `/styles`, method: 'get' })
        .then((resStyle) => {

          let addData = outfitRenderList => [...outfitRenderList,

            <RelatedItems
              riCategory={resProduct.category}
              riName={resProduct.name}
              riStyle={resProduct.name}
              riPrice={resProduct.default_price}
              riImage={resStyle.data.results[0].photos[0].thumbnail_url}
            />
          ];
          setOutfitRenderList(addData);
        })
      })
      .catch((err) => console.log('outfitInfo error: ', err));
  }

  const checkIfOutfitExists = (id) => {

      let getAllOutFitIDs = [];
      for (var i = 0; i < outfitRenderList.length; i++) {

        getAllOutFitIDs.push(outfitRenderList[i].id)
      }

      if (getAllOutFitIDs.indexOf(id) === -1) {
        return false
      } else {
        return true
      }
  }

  useEffect(() => {

      localStorage.setItem('magicX1', productList.join('#'));

      if (hasClicked === false) {
      if (productList.length != 0) {


        for (var i = 0; i < productList.length; i++) {

          if (checkIfOutfitExists(productList[i]) === false) {

            addOutfitItem(productList[i])
          }
        }
      }}

  }, [productList, hasClicked]);

  const handleClick = () => {

    setHasClicked(true);

   if (productList.length === 0) {

    setProductList([selectedWindowsItemID])
    addOutfitItem(selectedWindowsItemID)

   } else {

    if (productList.indexOf(selectedWindowsItemID) === -1) {
        setProductList(productList => [...productList, selectedWindowsItemID])
        addOutfitItem(selectedWindowsItemID)
    }
   }
  }

  console.log('YourOutfitList ID:')
  console.log(productList)
  console.log('YourOutfitList actualList:')
  console.log(outfitInfo)
  console.log('localstorage output:')
  console.log(localStorage.getItem('magicX1'))

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 40
    }
  };

  return (
    <div>

      <div className='carouselInnerDiv'>
        <button className='outfitButton' onClick={handleClick}>+</button>
        <p className="outfitRelated">Add to Outfit</p>
      </div>

      <Carousel responsive={responsive}>
        {outfitRenderList}
      </Carousel>
    </div>
  )
}

export default YourOutfitList;
