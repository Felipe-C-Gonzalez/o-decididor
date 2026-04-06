/* eslint-disable react/prop-types */

export function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-md flex flex-col bg-white border border-slate-200/60 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 gap-y-6 sm:gap-y-8 ${className}`}
    >
      {children}
    </div>
  );
}
