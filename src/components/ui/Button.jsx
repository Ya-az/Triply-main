import clsx from 'clsx';
import PropTypes from 'prop-types';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-emphasized focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-triply-accent focus-visible:ring-offset-triply-sand disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-triply text-white shadow-glow hover:-translate-y-0.5 hover:shadow-ambient active:translate-y-0',
  secondary: 'bg-triply-mint text-triply-dark hover:bg-triply-teal/90 hover:text-white shadow-soft',
  ghost: 'bg-white text-triply-dark border-2 border-triply-mint/60 hover:border-triply hover:bg-triply/5 shadow-soft',
  outline: 'bg-white text-triply-dark border-2 border-white hover:bg-triply-mint hover:border-triply-mint shadow-soft'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg'
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = clsx(baseStyles, variants[variant], sizes[size], className);
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
