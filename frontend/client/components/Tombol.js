import { Button } from 'react-bootstrap'

const Tombol = ({
  variant,
  children,
  color,
  fontWeight,
  size,
  disabled,
  block,
  borderRadius,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      style={{
        fontWeight: fontWeight,
        color: color,
        borderRadius: borderRadius,
      }}
      disabled={disabled}
      block={block}
    >
      {children}
    </Button>
  )
}

Tombol.defaultProps = {
  variant: 'info',
  color: '#000',
  fontWeight: '',
  size: '',
  disabled: false,
  block: false,
  borderRadius: '.25rem',
}

export default Tombol
