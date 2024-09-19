import Loading from "../Assets/loading_gif.gif";
import s from "./Loader.module.css";

const Loader = () => (
    <div>
        <section className={s.loader}>
        <img src={Loading} alt="loading.gif" />
        </section>
    </div>
);

export default Loader;