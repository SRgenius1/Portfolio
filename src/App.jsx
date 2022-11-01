import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Projects } from "./components/Projects";
import { Tecnologies } from "./components/Tecnologies";


export const App = () => {

  return (
    <>
        <Header/>
        <MainContent/>
        <About/>
        <Tecnologies/>
        <Projects/>
        <Contact/>
    </>
  );
};
