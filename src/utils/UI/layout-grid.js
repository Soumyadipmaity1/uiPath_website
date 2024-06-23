
// import photos from './../../components/Events/AutoMatrixPhoto';
import { useState, useEffect, useRef } from 'react';
// const { cn } = require("../../utils/cn");
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCardPreview from '../../components/Gallery/GalleryCardPreview';

// const Image = require("next/image");

const LayoutGrid = ({ cards }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [image, setImage] = useState("");
  function handleImgBtn() {
    setImage("");
    console.log(image)
  }
  return (
    <div className="flex flex-wrap">
      {
        cards.photos.map((card, i) => <div
          key={card.id} layoutId={card.id} onClick={() => {
            setSelectedId(card.id);
            setImage(card.src);
          }}
          className="main_wrapper w-6/12 p-2 relative">
          <div className="image_wrapper rounded-md overflow-hidden cursor-pointer">
            <img src={card.src} alt={card.src} />
          </div>
          {/* <GalleryCardPreview
            image={image}
            info={card}
            setImage={setImage}
            selectedId={selectedId}
            onTap={handleImgBtn}
          /> */}
        </div>)
      }
    </div>
  );
};




export default LayoutGrid;
