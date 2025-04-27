import styles from './UnorderedList.module.scss'

import Description from "@/components/ui/Description/Description";

const UnorderedList = ({ list }) => {
    return (
        <div className={styles.container}>
            <Description desc={list.list_desc} />
            <ul className={styles.list}>
                {list.items.map((item, index) => (
                    <li key={index} className={styles.item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UnorderedList