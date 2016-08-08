import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  // const VideoListItem = (props) => {
  // const video = props.video;
  //const videoSelect = props.onVideoSelect
  //the above two lines are a repalcement of the top line.
  // as the es6 notation does the same thing in a smaller fasion
  const imageUrl = video.snippet.thumbnails.default.url;

  return(

    <li onClick={()=>onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
          <div className = "media-body">
            <div className= "media-heading">
            {video.snippet.title}
            </div>
          </div>
      </div>
    </li>

  );
}

export default VideoListItem;
