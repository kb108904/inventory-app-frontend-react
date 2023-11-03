import React from 'react';
import "./Under-Construction.css"
import constructionImgUrl from '../../assets/construction-image.jpg'

export default function UnderConstruction() {
  return (
    <div className="under-construction">
      <img
        src={constructionImgUrl}
        alt="Under Construction"
      />
      <br/>
      Image by <a href="https://www.freepik.com/free-vector/flat-construction-template_1584487.htm#query=under%20construction&position=5&from_view=keyword&track=ais">Freepik</a>
    </div>
  );
};

