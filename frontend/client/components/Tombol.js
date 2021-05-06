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
  height,
  width,
  fontSize,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      style={{
        fontWeight: fontWeight,
        color: color,
        borderRadius: borderRadius,
        height: height,
        width: width,
        fontSize: fontSize,
      }}
      disabled={disabled}
      block={block}
    >
      {children}
    </Button>
  )
}

Tombol.defaultProps = {
  variant: 'secondary',
  color: '#000',
  fontWeight: '',
  size: '',
  height: 'auto',
  width: 'auto',
  disabled: false,
  block: false,
  borderRadius: '.25rem',
  fontSize: '',
}

export default Tombol
