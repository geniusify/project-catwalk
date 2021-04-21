import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Carousel from 'react-elastic-carousel';
// // import CarouselContainer from './components/RelatedItems/CarouselContainer';
// import '../dist/relatedItems.css';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function App() {
//   return (
//     <>
//       <h1>Example to setup your carousel in react</h1>
//       <div>
//         <Carousel breakPoints={breakPoints}>
//           <CarouselContainer>One</CarouselContainer>
//           <CarouselContainer>Two</CarouselContainer>
//           <CarouselContainer>Three</CarouselContainer>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// const rootElement = document.getElementById("app");
// ReactDOM.render(<App />, rootElement);
