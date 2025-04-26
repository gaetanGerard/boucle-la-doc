import { useRef, useState } from "react";

import styles from "./CustomDevItems.module.scss";
import CustomDevItem from "./CustomDevItem/CustomDevItem";

const CustomDevItems = ({ items }) => {
    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);

    const scrollTo = (idx) => {
        const slider = sliderRef.current;
        if (!slider) return;
        const slide = slider.children[idx];
        if (slide) {
            slide.scrollIntoView({
                behavior: "smooth", inline: "start",
                block: "nearest"
            });
            setActive(idx);
        }
    };

    const handleScroll = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const slides = Array.from(slider.children);
        const scrollLeft = slider.scrollLeft;
        let closestIdx = 0;
        let minDiff = Infinity;
        slides.forEach((slide, idx) => {
            const diff = Math.abs(slide.offsetLeft - scrollLeft);
            if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
            }
        });
        setActive(closestIdx);
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.arrow + " " + styles.left}
                onClick={() => scrollTo(active === 0 ? items.length - 1 : active - 1)}
                aria-label="Précédent"
                type="button"
            >
                &#8592;
            </button>
            <div className={styles.slider_wrapper}>
                <div
                    className={styles.slider}
                    ref={sliderRef}
                    onScroll={handleScroll}
                >
                    {items.map((item, index) => (
                        <CustomDevItem item={item} key={index} id={index} />
                    ))}
                </div>
                <div className={styles.dots}>
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            className={styles.dot + (active === idx ? " " + styles.active : "")}
                            onClick={() => scrollTo(idx)}
                            aria-label={`Aller à la slide ${idx + 1}`}
                            type="button"
                        />
                    ))}
                </div>
            </div>
            <button
                className={styles.arrow + " " + styles.right}
                onClick={() => scrollTo(active === items.length - 1 ? 0 : active + 1)}
                aria-label="Suivant"
                type="button"
            >
                &#8594;
            </button>
        </div>
    );
};
export default CustomDevItems;