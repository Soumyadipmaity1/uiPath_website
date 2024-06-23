import "./App.css";
import { Routes, Route } from "react-router-dom";
import Domains from "./pages/Domains";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { MainProject } from "./pages/Projects";
import Dashboard from "./components/Dashboard";
import PhotoPreview from "./components/Gallery/PhotoPreview";
import Text_time from "./components/Gallery/Text_time";
function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Domains" element={<Domains />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Projects" element={<MainProject />} />
      <Route path="/Members" element={<Members />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/justTstTHisi" element={<Text_time />} />
      <Route path="/Gallery/:id" element={<PhotoPreview />} />

      <Route path="/*" element={<Error />} />


    </Routes>

  );
}

export default App;
