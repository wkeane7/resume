import b from "../Home/Home.module.css";
import s from "./websitescreated.module.css";

const WebsitesCreated = () => (
    <div className={b.background}>
        <section className={s.websiteList}>
            <h1>List of Websites Created:</h1>
            <ul className={s.websites}>
                <li>Work in Progress...</li>
            </ul>
        </section>
    </div>
);

export default WebsitesCreated;