import styles from './ThemeFeatures.moducle.scss'

import ThemeFeaturesIntro from '@/components/ThemeFeaturesIntro/ThemeFeaturesIntro'
import ThemePlugins from '@/components/ThemePlugins/ThemePlugins'
import CustomDevs from '@/components/CustomDevs/CustomDevs'

const ThemeFeatures = ({ themeFeaturesData }) => {
    return (
        <>
            <ThemeFeaturesIntro title={themeFeaturesData.title} intro={themeFeaturesData.intro} />
            <ThemePlugins plugins={themeFeaturesData.plugins} />
            <CustomDevs data={themeFeaturesData.customDevelopments} />
        </>
    )
}

export default ThemeFeatures