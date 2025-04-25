import styles from './Title.module.scss'

const Title = ({ level = 1, children, className = "" }) => {
    const Tag = `h${level}`;

    return <Tag className={`${styles[`h${level}`]} ${styles[`${className}`]}`}>{children}</Tag>;
}

export default Title