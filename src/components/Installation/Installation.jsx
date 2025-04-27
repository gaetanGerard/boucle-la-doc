import styles from './Installation.module.scss';

import InstCard from './InstCard';

const Installation = ({ inst }) => {
    return (
        <div className={styles.container}>
            {inst.map((data, index) => <InstCard key={index} data={data} />)}
        </div>
    )
}

export default Installation