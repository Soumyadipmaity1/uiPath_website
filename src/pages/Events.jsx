import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { eventsData } from "../data/events_data";
import img from "../assets/images/event-venue.jpg";
import EventBanner from "../components/Events/EventBanner";
import RecentEvent from "../components/Events/RecentEvent";
import OthersEvent from "../components/Events/OthersEvent";
export default function Events() {
  return (
    <div>
      <Navbar />
      <EventBanner />
      <RecentEvent/>
      <OthersEvent/>
      <Footer />
    </div>
  );
}
