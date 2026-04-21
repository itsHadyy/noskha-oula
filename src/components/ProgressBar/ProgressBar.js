import './ProgressBar.css'

export default function ProgressBar({ value = 0, label, sublabel }) {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      {(label || sublabel) && (
        <div className="progress-bar__label">
          {label && <span>{label}</span>}
          {sublabel && <span>{sublabel}</span>}
        </div>
      )}
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${value}%` }}>
          <div className="progress-bar__shimmer" />
        </div>
      </div>
    </div>
  )
}
