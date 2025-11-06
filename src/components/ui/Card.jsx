import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Card({ heading, description, icon, className, children }) {
  return (
    <div
      className={clsx(
        'glass-panel flex h-full flex-col gap-3 p-6 text-right shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient',
        className
      )}
    >
      {icon ? (
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-triply-mint/60 text-2xl">
          {icon}
        </span>
      ) : null}
      {heading ? <h3 className="font-display text-xl font-semibold text-triply-dark">{heading}</h3> : null}
      {description ? <p className="text-sm leading-7 text-triply-slate/80">{description}</p> : null}
      {children}
    </div>
  );
}

Card.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};
