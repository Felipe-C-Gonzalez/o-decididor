/* eslint-disable react/prop-types */

export function Button({ children, onClick, className, ...props }) {
  const base = ` rounded-2xl transition-all cursor-pointer flex items-center justify-center font-semibold  active:scale-[0.96]`;
  return (
    <button onClick={onClick} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
