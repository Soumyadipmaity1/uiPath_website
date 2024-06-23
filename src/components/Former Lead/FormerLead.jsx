import React from "react";
import LeadCard from "./LeadCard";
import FormerLeadData from "../../data/formerLead";
export default function FormerLead() {
  return (
    <div className='wrapper mx-auto w-11/12 py-8"'>
      <div className="title text-center font-bold text-4xl py-9">
        Former <span className="text-[#FF7D36] higlight"> Leads</span>
      </div>
      <div className="leads_info flex flex-wrap my-16">
        {FormerLeadData.map((item, index) => (
          <LeadCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
