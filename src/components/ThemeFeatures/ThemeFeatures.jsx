import styles from './ThemeFeatures.moducle.scss'

import ThemeFeaturesIntro from '@/components/ThemeFeaturesIntro/ThemeFeaturesIntro'
import ThemePlugins from '@/components/ThemePlugins/ThemePlugins'
import Slider from '@/components/Slider/Slider'
import CallToAction from '@/components/CallToAction/CallToAction'

const ThemeFeatures = ({ themeFeaturesData }) => {
    return (
        <>
            <ThemeFeaturesIntro title={themeFeaturesData.title} intro={themeFeaturesData.intro} />
            <ThemePlugins plugins={themeFeaturesData.plugins} />
            <Slider data={themeFeaturesData.customDevelopments} />
            <Slider data={themeFeaturesData.prebuiltBlocks} />
            <CallToAction data={themeFeaturesData.continuousDevelopment} />
        </>
    )
}

export default ThemeFeatures