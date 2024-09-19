import s from "./skills.module.css";

const Skills = ({ data }) => {
    return (
    <>
        <div className={s.background}>
            <ul className={s.skillList}>
                {data.map(({id, skillName, description, img}) => (
                <li key={id} className={s.skill}>
                    <section className={s.textArea}>
                    <h2 className={s.skillName}>{skillName}</h2>
                    <p className={s.skillDescription}>{description}</p>
                    </section>
                    <img src={img} alt="icon" className={s.skillIcons}/>
                </li>   
                ))}
            </ul>
        </div>
    </>
)};

export default Skills;