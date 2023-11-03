import React from "react";
import './Listing.css'



function Listing(props:any) {
  return (
    <textarea value={props.title} id="story" name="story" rows={5} cols={33}>
    </textarea>
  );
}

export default Listing;
