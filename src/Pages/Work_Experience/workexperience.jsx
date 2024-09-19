import s from "./workexperience.module.css";

const WorkExperience = ({data}) => {
    return (
        <div className={s.background}>
            <ul className={s.worklist}>
            <section></section>{data.map(({id, companyName, branchSchool, position, dates, location, website1, website2, websiteName, websiteName2, jobDescription}) => (
                    <li key={id} className={s.experience}>
                        <h1 className={s.companyName}>{companyName}</h1>
                        <h3 className={s.branchName}>{branchSchool}</h3>
                        <h4 className={s.category}><em>Position: </em>{position}</h4>
                        <h4 className={s.category}><em>Dates: </em>{dates}</h4>
                        <h4 className={s.category}><em>Location: </em>{location}</h4>
                        <h4 className={s.category}><em>Website: </em></h4>
                        <a target="_blank" href={website1} rel="noreferrer" className={s.links}>{websiteName}</a><p></p>
                        <a target="_blank" href={website2} rel="noreferrer" className={s.links}>{websiteName2}</a>
                        <h4 className={s.category}><em>Job Description:</em></h4>
                        <p className={s.jobDescription}>{jobDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;