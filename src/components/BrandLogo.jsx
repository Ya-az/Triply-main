import PropTypes from 'prop-types';
// import logoAsset from '../assets/logo-official.svg';

/**
 * Unified brand logo component - uses official Triply logo.
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
      {/* Placeholder until logo is added */}
      <div className={`${sizeMap[size]} flex items-center justify-center bg-gradient-to-br from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply rounded-xl`}>
        <span className="text-white font-bold text-lg">T</span>
      </div>
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
