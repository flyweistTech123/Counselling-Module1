import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import './Responsive.css';
import Login from './Component/Login/Login';
import Home from "./Component/Home/Home";
import { Search } from "./Component/Search/Search";
import NewAssignment from "./Component/NewAssement/NewAssignment";
import ShortListedCollage from "./pages/ShortListedCollage";
import UspshortListPage from "./pages/UspshortListPage";
import FacilityShot from "./pages/FacilityShot";
import PlacementShot from "./pages/PlacementShot";
import CourseAndFess from "./pages/CourseAndFess";
import CollageNotInterested from "./pages/CollageNotInterested";
import CollageRecommantaion from "./pages/CollageRecommantaion";
import UpsRecommantation from "./pages/UpsRecommantation";
import FacilitiyRecommantaion from "./pages/FacilitiyRecommantaion";
import PlacementRecommantation from "./pages/PlacementRecommantation";
import CollageFessRecommantation from "./pages/CollageFessRecommantation";
import Loan from "./pages/Loan";
import Profile from "./pages/Profile";
import ConversationActivity from "./pages/ConversationActivity";
import ConverationL3Activity from "./pages/ConverationL3Activity";
import ConverationLeadServe from "./pages/ConverationLeadServe";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/newassignmentlead" element={<NewAssignment />} />


        {/* screen 3 pages */}
        <Route path="/shortlisted_pages" element={<ShortListedCollage/>} />
        <Route path="/shortlisted_ups" element={<UspshortListPage/>} />
        <Route path="/shortlisted_facilty" element={<FacilityShot/>} />
        <Route path="/shortlisted_placement" element={<PlacementShot/>} />
        <Route path="/shortlisted_course_fess" element={<CourseAndFess/>} />

        <Route path="/shortlisted_CollageNotInterested" element={<CollageNotInterested/>} />
        <Route path="/shortlisted_CollageRecommantaion" element={<CollageRecommantaion/>} />
        <Route path="/shortlisted_UpsRecommantation" element={<UpsRecommantation/>} />
        <Route path="/shortlisted_FacilitiyRecommantaion" element={<FacilitiyRecommantaion/>} />
        <Route path="/shortlisted_PlacementRecommantation" element={<PlacementRecommantation/>} />
        <Route path="/shortlisted_CollageFessRecommantation" element={<CollageFessRecommantation/>} />

        <Route path="/loan" element={<Loan/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/conversationActivity" element={<ConversationActivity/>} />
        <Route path="/ConverationL3Activity" element={<ConverationL3Activity/>} />
        <Route path="/ConverationLeadServe" element={<ConverationLeadServe/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
