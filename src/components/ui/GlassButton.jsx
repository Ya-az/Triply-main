import clsx from 'clsx';
import PropTypes from 'prop-types';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-triply-accent disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-triply text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'bg-triply-teal text-white shadow-lg hover:bg-triply hover:shadow-xl',
  accent: 'bg-triply-accent text-white shadow-lg hover:bg-triply-accent/90 hover:shadow-xl',
  glass: 'bg-white/10 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-gray-900 hover:shadow-lg',
  outline: 'bg-transparent border-2 border-triply text-triply hover:bg-triply hover:text-white'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

function GlassButton({
  label,
  variant = 'glass',
  size = 'md',
  onClick,
  className,
  children,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children || label}
    </button>
  );
}

GlassButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'glass', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool
};

export { GlassButton };
