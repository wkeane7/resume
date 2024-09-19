import b from "../Home/Home.module.css";
import s from "./aboutme.module.css";
import me from "../pics/me.jpg";

const AboutMe = () => (
    <div className={b.background}>
        <div className={s.aboutMe}>
            <h1 className={s.aboutMeTitle}>About Me:</h1>
            <section className={s.firstParagraph}>
            <p>
            My name is Weston Keane. I was born in Neenah, WI in 1993 to an American Mother and a British Father and grew up in nearby Appleton, WI in the USA
            for the majority of my childhood, where I attended Appleton East High School before graduating in 2012.
            In 2016 I graduated from the University of Wisconsin - Madison with a Bachelor's Degree in Mathmatics with Finance 
            application, where I focused mostly on courses related to Mathematics, Finance, Statistics and Economics.
            </p>
            <img src={me} alt="Weston Keane" className={s.picOfMe}/>
            </section>
            <p>
            After graduating, I wanted to see the world and obtained TEFL (Teaching Language as a Foreign Language) certifation from WESLI (the Wisconsin ESL Institute) 
            in Madison, WI before applying for an obtaining a job teaching English in Taipei, Taiwan. I have been persisting in this career for close to
            8 years now, and in the meantime I have become familiar with Taiwanese and Chinese culture and fluent in Mandarin Chinese, with proficiency in speaking, 
            listening, writing and reading Mandaring Chinese (both Traditional and Simplified Characters). During my time in Taiwan, I have also become 
            well traveled, experiencing many different cultures and going many countries around the world including Vietnam, Thailand, Japan, South Korea, Malaysia, Italy,
            England, Egypt, China, Hong Kong and Macau. 
            </p>
            <p>
            Now that I have experienced many of the things I wanted to experience while I was young, I am looking
            to start focusing more on my future and moving back to the United States to settle down, get married and start a family of my own, while also focusing more 
            on my finances. Thus, I have been learning web development and coding from online resources such as Codefinity. I have since become proficient in HTML, CSS,
            JavaScript, React, and Python languages and have been busy honing my skills by designing different websites for my own personal interests. I currently looking 
            to now seek employment in the Web Development sector and hope to secure long-term employment and further hone my skill in the private sector.
            </p>
        </div>
    </div>
);

export default AboutMe;