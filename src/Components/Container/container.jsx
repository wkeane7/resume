import s from "./container.css";

const Container = (props) => (
    <section className={s.container}>{props.children}</section>
);

export default Container;