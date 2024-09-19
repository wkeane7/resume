import s from "./education.module.css";
import UW_Madison from "./University-of-Wisconsin-logo.png";
import Appleton_East from "./Appleton_East_logo.png";

const Education = () => (
    <div className={s.background}>
        <secton className={s.educationSection}>
        <section className={s.institution}>
            <div className={s.info}>
                <h1 className={s.educationTitle}>University of Wisconsin - Madison</h1>
                <h2 className={s.educationSubtitle}>Bachelor's Degree in Mathematics</h2>
                <h3 className={s.educationSubtitle2}>Finance Application</h3>
                <h4 className={s.educationDates}>2012-2016</h4>
                <p className={s.educationDescription}>
                Major in Mathematics with Finance application. Finance application focuses 
                on Financial Investment and Market Analysis, with emphasis on Financial Investment 
                techniques, Statistics, Economics, Financial Accounting and Stochastic Processes. 
                </p>
            </div>
            <img src={UW_Madison} alt="UW Madison Logo" className={s.institutionLogo}/>
        </section>
        <section className={s.institution}>
            <div className={s.info}>
                <h1 className={s.educationTitle}>Appleton East High School</h1>
                <h2 className={s.educationSubtitle}>High School Diploma</h2>
                <h4 className={s.educationDates}>2008-2012</h4>
                <p className={s.educationDescription}>
                Graduating class of 2012 from Appleton East High School in Appleton, Wisconsin.
                </p>
            </div>
            <img src={Appleton_East} alt="Appleton East High School Logo" className={s.institutionLogo}/>
        </section>
        </secton>
    </div>
);

export default Education;