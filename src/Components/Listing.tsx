import React from "react";




function Listing(props:any) {
  return (
    <textarea value={props.title} id="story" name="story" rows="5" cols="33">
    </textarea>
  );
}

export default Listing;
