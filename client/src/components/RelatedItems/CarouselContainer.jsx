import React from 'react';
import RelatedItems from './RelatedItems.jsx';
import Carousel from "react-multi-carousel";
import YourOutfitList from './YourOutfitList.jsx';

class CarouselContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    var relatedItemsList = [

      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 1" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 2" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 3" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 4" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 5" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
      <RelatedItems riCategory="JACKETS" riID="23145" riName="Camo Onesie - 6" riPrice="$140.00" riImage="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"/>,
    ];

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
        <p>RELATED PRODUCTS</p>
        <Carousel responsive={responsive}>
            {relatedItemsList}
        </Carousel>
        <p>YOUR OUTFIT</p>
        <Carousel className="test" responsive={responsive}>
            {relatedOutfit}
        </Carousel>
      </div>
    );
  }
}

export default CarouselContainer;
