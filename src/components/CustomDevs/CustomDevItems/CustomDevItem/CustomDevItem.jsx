import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import Title from "@/components/ui/Title/Title";
import styles from "./CustomDevItem.module.scss";

const CustomDevItem = ({ item, id }) => {
    return (
        <div className={styles.content} id={`slide-${id}`}>
            <div className={styles.text}>
                <Title level={3} className="subheading">{item.name}</Title>
                <p className={styles.description}>{item.description}</p>
                {!item.button.disabled && (
                    <Button asChild className={styles.cta}>
                        <a
                            href={item.button.link}
                            className="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.button.label}
                        </a>
                    </Button>
                )}
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={400}
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default CustomDevItem;
