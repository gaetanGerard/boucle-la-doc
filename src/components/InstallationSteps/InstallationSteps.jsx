import styles from './InstallationSteps.module.scss'

import InstallationStep from '@/components/InstallationSteps/InstallationStep';

const InstallationSteps = ({ steps }) => {
    return (
        <div className={styles.container}>{steps && steps.map((step, index) => <InstallationStep step={step} key={index} />)}</div>
    )
}

export default InstallationSteps