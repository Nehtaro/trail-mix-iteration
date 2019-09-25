/**
 * ************************************
 *
 * @module  MainContainer
 * @author  
 * @date
 * @description stateful component that renders MapDisplay and ListContainer
 *
 * ************************************
 */

import React, { useState, useEffect } from "react";
import MapDisplay from "../components/MapDisplay.jsx";
import ListContainer from "./ListContainer.jsx";
// state includes data retrieved from REI API, selects selected trail
// holds trail specific comments pulled from database
//container that combines MapDisplay and ListContainer and passes down all necessary const MainContainer = ( => (
const MainContainer = () => {
  const [trailData, setTrailData] = useState([]);
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [comments, setComments] = useState([]);
  const [diffKey, setDiffKey] = useState(false);

  //fetches data from REI API and sets to state when the page loads
  useEffect(() => {
    fetch('/data')
      .then(res => res.json())
      .then(res => setTrailData(res.trails))
      .catch(err => console.error(err));
  }, []);

  //invoked by on-click function in TrailDisplay, sets selected trail in state
  const getTrail = (id) => {
    for (let i = 0; i < trailsData.length; i += 1) {
      if (trailsData[i].id === +id) {
        setSelectedTrail(trailsData[i]);
        break;
      }
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        id,
      },
    };
    fetch('/comments', options)
      .then(res => res.json())
      .then(res => setComments(res))
      .catch(err => console.error(err));
  };

  //closes TrailDisplay overlay
  const noTrail = () => {
    setSelectedTrail(null);
  }

  //adds comment and author to database and pulls back all comments for specified trail and sets to state
  const postComment = (id, comment, author) => {
    const options = {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          id: id,
          comment: comment,
          author: author
      })
    };
    
    fetch('/comments', options)
      .then(res => res.json())
      .then(res => setComments(res))
      .catch(err => console.error(err));
  };

  //invoked when clicking on the map popups
  const displayTrail = (selectedHike) => {
    setSelectedTrail(selectedHike);
  }
    
  //toggle that is invoked when clicking on the "difficulty" in the list items
  const showKey = () => {
    setDiffKey(diffKey ? false : true);
  };

  //renders MainContainer and conditionally renders TrailContainer
  return (
    <div className='appContainer'>
      <div id="main-container">
        <img src="../../assets/trail-mix-logo-small.jpg" className='logo'/><br />
        <MapDisplay 
          id="map-display"
          trailData={trailData}
          getTrail={getTrail}
          displayTrail={displayTrail} 
        /><br />
        <ListContainer 
          trailData={trailData} 
          getTrail={getTrail}
          showKey={showKey}
          diffKey={diffKey} 
        />
        {/* conditional renders difficulty key overlay */}
        {diffKey && (
          <div>
            <img id='diff-key' src='../../assets/diff-key.jpg' />
          </div>
        )}
      </div>
      {selectedTrail
        && <TrailContainer 
          className="modal" 
          trailData={trailData} 
          selectedTrail={selectedTrail} 
          noTrail={noTrail}
          postComment={postComment}
          comments={comments}
          getTrail={getTrail}
        />
      }
    </div>
  );
};

export default MainContainer;