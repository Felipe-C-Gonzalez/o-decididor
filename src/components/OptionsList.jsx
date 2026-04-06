/* eslint-disable react/prop-types */

import { ClipboardIcon, XIcon } from "./Icons";

export function OptionList({ options, animation, onDelete }) {
  return (
    <ul className={`space-y-2 ${animation}`}>
      {options.length > 0 ? (
        options.map((item, index) => (
          <li
            key={index}
            className="bg-white border border-slate-100 rounded-xl px-4 py-3 text-slate-700 flex items-center gap-3 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="flex-1 truncate font-medium">{item}</span>
            <button
              className=" text-slate-300 hover:text-slate-900 transition-colors text-xl px- 2 cursor-pointer"
              type="button"
              onClick={() => onDelete(index)}
            >
              <XIcon />
            </button>
          </li>
        ))
      ) : (
        <li className="border-2 border-dashed border-slate-100 rounded-2xl p-8 text-slate-400 text-center flex flex-col items-center gap-2">
          <ClipboardIcon />
          <p className="text-sm">Sua lista está pronta para ser preenchida</p>
        </li>
      )}
    </ul>
  );
}
