import s from "./contactme.module.css";
import line from "../icons/app_logos/line.svg";
import wechat from "../icons/app_logos/wechat.svg";
import facebook from "../icons/app_logos/facebook-color-svgrepo-com.svg";
import instagram from "../icons/app_logos/instagram.svg";
import self from "../pics/me.jpg";

const ContactMe = () => (
    <div className={s.mainbackground}>
        <section className={s.maincontent}>
            <h1 className={s.texttitle}>Contact Me</h1>
            <ul className={s.list}>
                <li className={s.listtext}>Email: <a href="mailto:wkeane7@gmail.com" className={s.contactinfo}>wkeane7@gmail.com</a></li>
                <li className={s.listtext}>Phone Number: <a href="tel:+8860967017331" className={s.contactinfo}>+886 0967-017-331</a></li>
            </ul>
            <img src={self} alt="me" id={s.me}/>
        </section>
        <section id={s.socialmedia}>
            <li className={s.media}><img src={line} alt="Line logo" id={s.socialicon}/><span className={s.socialname}>Line ID: <span className={s.socialcontent}>wkeane7</span></span></li>
            <li className={s.media}><img src={wechat} alt="WeChat logo" id={s.socialicon}/><span className={s.socialname}>WeChat ID: <span className={s.socialcontent}>ChengHsiang777</span></span></li>
            <h2 className={s.subheader}>Other Social Media Platforms:</h2>
            <div className={s.othermedia}>
                <a target="_blank" rel="noreferrer" href = "https://www.facebook.com/weston.keane/" ><img src={facebook} alt="Facebook logo" height="50px" width="50px" id={s.socialicon} /></a>
                <a target="_blank" rel="noreferrer" href = "https://www.instagram.com/wkeane77/" ><img src={instagram} alt="Instagram logo" height="50px" width="50px" id={s.socialicon}/></a>
            </div>
        </section>
    </div>
);

export default ContactMe;