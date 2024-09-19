import Container from "../Components/Container/container";
import TopHeader from "../Components/Top-Header/Top-Header";
import Bar from "../TopBar/topbar";
import Footer from "../Components/Footer/footer";
import Loader from "../Loader/Loader";
import { employmentSkills } from "../Pages/Skills/employmentSkills";
import { workExperienceData } from "../Pages/Work_Experience/workeperiencedata";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(()=> import("../Pages/Home/Home"));
const AboutMe = lazy(()=> import("../Pages/About_Me/aboutme"));
const Education = lazy(()=> import("../Pages/Education/education"));
const WorkExperience = lazy(()=> import("../Pages/Work_Experience/workexperience"));
const Skills = lazy(()=> import("../Pages/Skills/skills"));
const WebsitesCreated = lazy(()=> import("../Pages/Websites_Created/websitescreated"));
const ContactMe = lazy(()=> import("../Pages/Contact_Me/contactme"));


const App = () => ( 
    <Container>
        <TopHeader />
        <Bar />
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about_me" element={<AboutMe />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/work_experience" element={<WorkExperience data={workExperienceData}/>}/>
                <Route path="/skills" element={<Skills data={employmentSkills}/>}/>
                <Route path="/websites_created" element={<WebsitesCreated />}/>
                <Route path="/contact_me" element={<ContactMe />}/>
            </Routes>
        </Suspense>
        <Footer />
    </Container>
);

export default App;