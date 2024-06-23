import React from 'react';
import { useParams } from 'react-router-dom';
import { galleryData } from "../../data/gallery_data";
import LayoutGrid from "../../utils/UI/layout-grid";

// useSearchParams


export default function ImageContainer() {
  const { id } = useParams();
  console.log(id);
  const data = galleryData.filter((item) => {
    return item.id == id
  });
 

  return (
    <div className='mt-28 mx-auto w-9/12'>
      {data.map((item,i) => <LayoutGrid key={i} cards={item} />)}
    </div>
  )
}
