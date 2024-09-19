import s from "./Home.module.css";
import wheel from "../icons/wheel.png";


const Home = () => (
    <div className={s.background}>
        <section className={s.main}>
            <h1 className={s.title}>About this App</h1>
            <p className={s.description}>
            This is an app I specifically designed in order to seek employment. 
            This app includes an self-introduction, information about my educational
            background, my work experience, links to several of the websites and
            apps I have designed, some of my aquired skills and my contact information.
            </p>
            <p className={s.description}>
            The aim of this app is to hopefully give employers some insight into my skills with web and app design
            so they can make informed decisions about someone they would potentially
            like to hire.
            </p>
        </section>
        <img className={s.wheel} src= {wheel} alt="coding languages" />
    </div>
);

export default Home;