import classNames from 'classnames/bind'

import styles from './ui-progress-bar.module.scss'

const cx = classNames.bind(styles)

export default function ProgressBar({
  currentStep,
  funnelSteps,
}: {
  currentStep: string
  funnelSteps: string[]
}) {
  const stepIndex = funnelSteps.indexOf(currentStep)
  const progressPercentage = (stepIndex / (funnelSteps.length - 1)) * 100

  return (
    <div className={cx('progressBar')}>
      <div
        className={cx('progressFill')}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  )
}
