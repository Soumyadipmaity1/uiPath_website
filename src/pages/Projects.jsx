import bg from "../assets/images/rocket-dynamic-color.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import background from "../assets/images/GEO_SPHERES_03.png";
// import OthersEvent from "../components/OthersEvent"
import OthersEvent from "./../components/Events/OthersEvent";
import EventCard from "../components/Events/EventCard";
import ProjectHero from "../components/projects/ProjectHero";

const items = [
  {
    id: 1,
    name: "CampusBot: Your Virtual Guide",
    descripton:
      "In this project, an advanced Chatbot is developed to assist with admissions, courses, and campus queries. Integrated seamlessly with UiPath Studio, the bot ensures smooth user interactions, offering timely support and comprehensive information. Continuous monitoring and iterative enhancements guarantee an efficient and responsive user experience.",
    photo: require("../assets/images/projects/chatbot.jpg"),
  },
  {
    id: 2,
    name: "Streamlining Candidate Screening with UiPath StudioX",
    descripton:
      "The research utilizes UiPath StudioX to streamline candidate screening by automating resume evaluation and scoring. This system enhances recruitment efficiency by parsing resumes, extracting relevant information, and sending automated acceptance or rejection emails based on predefined criteria.",
    photo: require("../assets/images/projects/StudioX.jpg"),
  },
];

export const MainProject = () => {
  return (
    <div className="bg-black w-full">
      <Navbar />
      <ProjectHero/>
      <div
        style={{
          backgroundImage: `url(${background})`,

          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="project_area"
        className="  w-11/12 mx-auto flex flex-wrap bg-project bg-center bg-contain bg-no-repeat  items-center pt-10 justify-center"
      >
      
        <div className="flex flex-wrap pt-10">
          {items.map((item) => (
            <EventCard item={item} />
          ))}
          {/* <div className=" mr-16 h-fit w-fit flex flex-col gap-5 justify-center items-center">
            <div className=" flex items-center justify-center h-fit w-fit">
              <img src={bg} className="" />
              <h1 className=" text-white text-6xl">PROJECTS</h1>
            </div>
            <div className="">
              <div className=" ml-20 h-fit w-fit p-8 border rounded-full md:px-24 px-12 shadow-3xl border-[#FFA371] shadow-[#FFA371]">
                <div className=" text-white lg:text-2xl md:text-xl text-lg">Coming Soon!</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
