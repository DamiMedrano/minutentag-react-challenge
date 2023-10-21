/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first 
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from "react";

function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img className="thumbnail" src={src} alt="" />
      <button className="remove-button" onClick={onRemove}>
        x
      </button>
    </div>
  );
}

export function ImageGallery({ links = [] }) {
  const [images, setImages] = useState(links);

  const handleRemove = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="image-gallery">
      {images.map((link, index) => (
        <Image key={index} src={link} onRemove={() => handleRemove(index)} />
      ))}
    </div>
  );
}
