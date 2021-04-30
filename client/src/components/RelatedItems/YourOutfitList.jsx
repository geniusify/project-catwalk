import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import Carousel from 'react-multi-carousel';
import axios from 'axios';

const YourOutfitList = () => {

  const [outfitInfo, setOutfitInfo] = useState([]);
  const [productList, setProductList] = useState([]);
  const [outfitRenderList, setOutfitRenderList] = useState([]);

  const selectedWindowsItemID = window.location.search.replace('?p_id=', '');

  const addOutfitItem = (id) => {

    axios({ url: `api/products/` + id, method: 'get' })
    .then((res) => { setOutfitInfo(outfitInfo => [...outfitInfo, res.data] ); return(res.data) })
    .then((resProduct) => {

      axios({ url: `api/products/` + id + `/styles`, method: 'get' })
      .then((resStyle) => {

        setOutfitRenderList(

          outfitRenderList => [...outfitRenderList,

            <RelatedItems
              riCategory={resProduct.category}
              riName={resProduct.name}
              riStyle={resProduct.name}
              riPrice={resProduct.default_price}
              riImage={resStyle.data.results[0].photos[0].thumbnail_url}
            />
          ]
        )
      })
    })
    .catch((err) => console.log('outfitInfo error: ', err));
  }

  const handleClick = () => {

   if (productList.length === 0) {

    addOutfitItem(selectedWindowsItemID)
    setProductList([selectedWindowsItemID])

   } else {

    if (productList.indexOf(selectedWindowsItemID) === -1) {

      addOutfitItem(selectedWindowsItemID)
      setProductList(productList => [...productList, selectedWindowsItemID])
    }
   }
  }

  console.log('YourOutfitList ID:')
  console.log(productList)
  console.log('YourOutfitList actualList:')
  console.log(outfitInfo)

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
