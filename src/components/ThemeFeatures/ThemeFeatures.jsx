import styles from './ThemeFeatures.moducle.scss'

import ThemeFeaturesIntro from '@/components/ThemeFeaturesIntro/ThemeFeaturesIntro'

const ThemeFeatures = ({ themeFeaturesData }) => {
    return (
        <>
            <ThemeFeaturesIntro title={themeFeaturesData.title} intro={themeFeaturesData.intro} />
        </>
    )
}

export default ThemeFeatures