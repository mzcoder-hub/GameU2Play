import { Button } from 'react-bootstrap'

const Tombol = ({
  variant,
  children,
  color,
  fontWeight,
  size,
  disabled,
  block,
  backgroundColor,
  borderColor,
  borderRadius,
  marginRight,
  height,
  width,
  fontSize,
  border,
  className,
  onClick,
  type,
}) => {
  return (
    <Button
      onClick={onClick ? onClick : undefined}
      type={type ? type : undefined}
      variant={variant ? variant : undefined}
      size={size ? size : undefined}
      style={{
        fontWeight: fontWeight,
        color: color,
        borderRadius: borderRadius,
        height: height,
        width: width,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
        border: border,
        marginRight: marginRight,
      }}
      className={className ? className : undefined}
      disabled={disabled}
      block={block}
    >
      {children}
    </Button>
  )
}

Tombol.defaultProps = {
  type: '',
  onClick: '',
  variant: '',
  color: '#000',
  fontWeight: '',
  size: '',
  height: 'auto',
  width: 'auto',
  disabled: false,
  block: false,
  borderRadius: '.25rem',
  fontSize: '',
  backgroundColor: '',
  border: '',
  className: '',
  marginRight: '',
}

export default Tombol
