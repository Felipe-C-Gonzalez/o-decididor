/* eslint-disable react/prop-types */

import { Button } from "./Button";
import { XIcon, ShareIcon } from "./Icons";

export function WinnerModal({ winner, onClose, onReset, whatsAppLink }) {
  if (!winner) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-sm p-6 sm:p-10 rounded-4xl sm:rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-y-6 sm:gap-y-8 relative animate-in zoom-in-95 duration-300">
        <button
          className="absolute top-6 right-6 sm:right-6 sm:top-6 text-slate-300 hover:text-slate-900 transition-colors text-xl p-2"
          type="button"
          aria-label="Fechar"
          title="Fechar"
          onClick={onClose}
        >
          <XIcon />
        </button>

        <div className="text-center w-full mt-4 min-h-30 flex flex-col justify-center">
          <h2
            className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-
          [0.2em] mb-2"
          >
            O escolhido foi:
          </h2>

          <p className="text-2xl sm:text-4xl font-black text-slate-900 wrap-break-word leading-[1.1] uppercase line-clamp-3">
            {winner}
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <Button
            className="bg-slate-900 text-white py-4 hover:bg-black"
            type="button"
            aria-label="Iniciar uma nova lista"
            title="Iniciar uma nova lista"
            onClick={onReset}
          >
            Nova Decisão
          </Button>

          <a
            className="w-full border border-slate-200 text-slate-600 rounded-2xl py-3 font-medium text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer break-all"
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhar
            <ShareIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
