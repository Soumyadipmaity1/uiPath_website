import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
export default function Bottom({ instagram, gamil, linkedin }) {
  return (
    <div className="socialMedia_bx flex justify-center items-center pb-2">
      <div
        className="wrapper flex justify-center items-center gap-4 text-2xl"
        // style={{ transform: `scaleY(${scaleY})`, transition: 'transform 0.5s ease' }}
      >
        <div className="box bg-[#222f3e] p-1.5 rounded-full">
          <a target="_blank" href={instagram}>
            <FaInstagram className="icon" />
          </a>
        </div>
        <div className="box bg-[#222f3e] p-1.5 rounded-full">
          <a target="_blank" href={linkedin}>
            <LuLinkedin className="icon" />
          </a>
        </div>
        <div className="box bg-[#222f3e] p-1.5 rounded-full">
          <a target="_blank" href={`mailto:${gamil}`}>
            <CgMail  className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
