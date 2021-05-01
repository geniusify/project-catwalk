/* eslint-disable react/prop-types */
import React from 'react';

const ShareOnSocial = ({ shareUrl, shareImageUrl, shareTitle }) => (
  <div className="ov-share-on-social">
    <br />

    <a href={`//pinterest.com/pin/create/link/?url=${shareUrl}&media=${shareImageUrl}&description=${shareTitle}`}>
      <img
        src="icons/pinterest.svg"
        alt="share on pinterest"
        title="share on pinterest"
        className="ov-share-pinterest"
        height="24"
      />
    </a>

    <a href={`http://www.reddit.com/submit?url=${shareUrl}&title=${shareTitle}`}>
      <img
        src="icons/reddit.svg"
        alt="share on reddit"
        title="share on reddit"
        className="ov-share-reddit"
        height="24"
      />
    </a>

    <a href={`http://news.ycombinator.com/submitlink?u=${shareUrl}&t=${shareTitle}`}>
      <img
        src="icons/hackernews.svg"
        alt="share on hackernews"
        title="share on hackernews"
        className="ov-share-hn"
        height="24"
      />
    </a>
  </div>
);

export default ShareOnSocial;
