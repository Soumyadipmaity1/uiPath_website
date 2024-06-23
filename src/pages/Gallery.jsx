import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectHeading from "../components/projects/Projectheading";
import { galleryData } from "../data/gallery_data";
import ProjectItems1 from "../components/projects/Projectitems1";
import ProjectItems2 from "../components/projects/ProjectItems2";
import GalleryCard from "../components/Gallery/GalleryCard";
import GalleryBanner from "../components/Gallery/GalleryBanner";
export default function Gallery() {
  return (
    <div>
      <Navbar />
      {/* <ProjectHeading /> */}
      <GalleryBanner />
      <div className="div mx-auto flex flex-wrap w-11/12">
        {galleryData.map((item, index) => (
          <GalleryCard key={index} item={item} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
