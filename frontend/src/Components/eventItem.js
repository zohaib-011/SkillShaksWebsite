import React, { useState } from 'react';

const EventItem = (props) => {
  const { title, imgUrl, description } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + '...';
  };

  return (
    <>
      <div className="eventItem">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>
            {isExpanded ? description : truncateText(description, 100)}
            <button onClick={toggleReadMore} className="readMoreButton">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default EventItem;
