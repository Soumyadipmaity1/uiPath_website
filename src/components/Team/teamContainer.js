import React from 'react'
import lead_data from '../../data/lead_data';
import TeamCard from './teamCard';
import background from "../../assets/images/Galery/background_gallery.jpg";
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import coreMl from "../../assets/images/Galery/core_ml.jpg";
import RPAAi from "../../assets/images/Galery/RPA_AI.jpg";
import Cloud from "../../assets/images/Galery/cloud.jpg";
import event_mng from "../../assets/images/Galery/event_mng.jpg";
import social_media from "../../assets/images/Galery/social_media.jpg";
import content_writting from "../../assets/images/Galery/content_wr.jpg";
import photo_graphy from "../../assets/images/Galery/photo_graphy.jpg";
import gd from "../../assets/images/Galery/graphic_design.jpg";






export default function TeamContainer() {
    return (
        <div className='my-5' style={{
            // backgroundImage: `url(${background})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} >
            <div className="wrapper w-11/12 mx-auto flex flex-wrap my-8">
                {/* <div className="textDomain">
                    <div className="heading text-center text-4xl my-10 font-semibold">
                        Our <span className='text-orange-500'>
                            Tech Domain
                        </span>
                    </div>
                    <div className="team_images">
                        <LeftSide image={RPAAi} title1={"RPA"} normal={"&"} title2={" AI"} />
                        <RightSide image={Cloud} normal={"Cloud"} title2={" Automation"}  />
                        <LeftSide image={coreMl} normal={'Core'} title2={" ML"} />
                        
                    </div>
                    <div className="heading text-center text-4xl my-10 font-semibold">
                        Our <span className='text-orange-500'>
                         Creative Domain
                        </span>
                    </div>
                    <div className="team_images">
                        <LeftSide image={event_mng}  title1={"Event "} normal={"Management"} />
                        <RightSide image={social_media} normal={" Marketing "} title1={"Social  Media "}  />
                        <LeftSide image={content_writting} normal={'Writing'} title1={"Content "} />
                        <RightSide image={photo_graphy} normal={'Photo'} title2={"graphy"} />
                        <LeftSide image={gd} title1={'Graphic '} normal={"Design"} />
                    </div>
                </div> */}
                {
                    lead_data.map((item, index) => <TeamCard key={index} name={item.name} image={item.src} postion={item.postion} />)
                }
            </div>
        </div>
    )
}
