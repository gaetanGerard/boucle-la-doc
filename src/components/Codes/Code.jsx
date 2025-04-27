import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./Code.module.scss";
import Title from '@/components/ui/Title/Title';
import Link from 'next/link';

const Code = ({ codeData }) => {
    const { code, language, title, description } = codeData;

    console.log(title)

    return (
        <div className={styles.codeBlock} id={title.anchor}>
            {title && <Link href={`#${title.anchor}`}><Title level={title.level} className="subheading_link">{title.name}</Title></Link>}
            {description && <p className={styles.description}>{description}</p>}
            {code && (
                <div className={styles.codeWrapper}>
                    <SyntaxHighlighter
                        language={language}
                        style={oneDark}
                        wrapLines={true}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
};

export default Code;
