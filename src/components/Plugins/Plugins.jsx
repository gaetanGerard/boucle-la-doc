import styles from './Plugins.module.scss';
import Plugin from './Plugin'

const Plugins = ({ plugins }) => {
    return (
        <div className={styles.container}>
            {plugins.map((plugin, index) => (
                <Plugin key={index} plugin={plugin} />
            ))}
        </div>
    )
}

export default Plugins