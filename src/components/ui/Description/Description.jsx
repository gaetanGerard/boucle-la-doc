import clsx from "clsx";
import styles from "./Description.module.scss";

const Description = ({ desc, className = "base" }) => {
    return <p className={styles[className]}>{desc}</p>
}

export default Description