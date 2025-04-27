import React from 'react'
import BackToTop from '@/components/ui/BackToTop/BackToTop'
import FaqItem from '@/components/FaqItem/FaqItem'
import faqData from '@/lib/data/faq.json'
import styles from './Faq.module.scss';

const Faq = () => {
    return (
        <main>
            <section className={styles.faq}>
                <h1 className={styles.title}>{faqData.faq.title.name}</h1>
                <p className={styles.description}>{faqData.faq.description}</p>
                <div className={styles.questions}>
                    {faqData.faq.questions.map((question, index) => (
                        <FaqItem
                            key={index}
                            data={question}
                        />
                    ))}
                </div>
            </section>
            <BackToTop />
        </main>
    )
}

export default Faq