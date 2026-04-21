import './Button.css'

export default function Button({ children, variant = 'primary', size = 'md', onClick, disabled, type = 'button', as: Tag = 'button', href, ...rest }) {
  const cls = `btn btn--${variant}${size !== 'md' ? ` btn--${size}` : ''}`

  if (Tag === 'a' || href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
