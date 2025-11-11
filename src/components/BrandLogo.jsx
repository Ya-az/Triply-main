import PropTypes from 'prop-types';
import logoAsset from '../assets/logo-icon.svg';

/**
 * Unified brand logo component.
 * Props:
 *  - size: "sm" | "md" | "lg" (default md)
 *  - showText: boolean (shows Triply wordmark beside icon)
 *  - className: additional classes wrapper
 */
function BrandLogo({ size = 'md', showText = false, className = '' }) {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoAsset}
        alt="شعار Triply"
        className={`${sizeMap[size]} object-contain flex-shrink-0`}
        draggable="false"
      />
      {showText && (
        <span
          className="font-display font-semibold text-xl md:text-2xl tracking-tight brand-word-gradient"
          aria-label="Triply"
        >
          Triply
        </span>
      )}
    </div>
  );
}

BrandLogo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showText: PropTypes.bool,
  className: PropTypes.string
};

export { BrandLogo };
