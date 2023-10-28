// libraries
import { useEffect, useState } from "react";
// css
import "./assets/css/App.css";
// scripts
import IdentityProvider from "./assets/context/IdentityContext";
import IdentityLayout from "./components/Make/Identity/IdentityLayout";
import ExperiencesProvider from "./assets/context/ExperiencesContext";
import ExperienceLayout from "./components/Make/Experiences/ExperienceLayout";
import DiplomasProvider from "./assets/context/DiplomaContext";
import DiplomaLayout from "./components/Make/Diplomas/DiplomaLayout";
import SkillsProvider from "./assets/context/SkillsContext";
import Skills from "./components/Make/Skill";
import HobbiesProvider from "./assets/context/HobbiesContext";
import Hobbies from "./components/Make/Hobby";
import PreviewLayout from "./components/Preview/PreviewLayout";
import Nav from "./components/Nav";

function App() {
    const [hide, setHide] = useState("");

    useEffect(() => {
        if (window.innerWidth <= 1220) {
            setHide("hide");
        } else setHide("");

        const setVisibility = () => {
            if (window.innerWidth <= 1220) {
                setHide("hide");
            } else setHide("");
        };
        window.addEventListener("resize", setVisibility);
        return () => window.removeEventListener("resize", setVisibility);
    }, []);

    // did not find a better solution
    // for some reason, window would always be scrolled to the bottom
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0 });
        }, 5);
    }, []);

    return (
        <IdentityProvider>
            <ExperiencesProvider>
                <DiplomasProvider>
                    <SkillsProvider>
                        <HobbiesProvider>
                            <>
                                <Nav />
                                <div id="makeContainer">
                                    <h1>Quick CV Maker</h1>
                                    <IdentityLayout />
                                    <ExperienceLayout />
                                    <DiplomaLayout />
                                    <Skills />
                                    <Hobbies />
                                </div>
                                <div
                                    id="previewContainer"
                                    className={`${hide}`}
                                >
                                    <PreviewLayout />
                                </div>
                            </>
                        </HobbiesProvider>
                    </SkillsProvider>
                </DiplomasProvider>
            </ExperiencesProvider>
        </IdentityProvider>
    );
}

export default App;
