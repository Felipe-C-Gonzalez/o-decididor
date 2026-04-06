import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function History() {
  const [history, setHistory] = useState(() => {
    const data = localStorage.getItem("historico");
    return data ? JSON.parse(data) : [];
  });

  function clearHistory() {
    localStorage.removeItem("historico");
    setHistory([]);
  }

  return (
    <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
      <Card>
        <h1 className="text-2xl sm:text-2xl font-bold tracking-tight text-slate-900 text-center wrap-break-word">
          Página de Histórico
        </h1>

        {history.length === 0 ? (
          <div className="border-2 border-dashed border-slate-100 rounded-2xl p-6 sm:p-8 text-slate-400 text-center flex flex-col items-center gap-2">
            <p className="text-sm sm:text-base">
              Você ainda não realizou nenhum sorteio. Vá até Home e decida algo!
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-y-3 max-h-[40vh] overflow-y-auto pr-1">
            {history.map((item) => (
              <li
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                key={item.id}
              >
                <p className="font-semibold text-slate-800 wrap-break-word leading-tight">{item.winner}</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider shrink-0">{item.date}</p>
              </li>
            ))}
          </ul>
        )}

        {history.length > 0 && (
          <Button
            className="border border-slate-200 text-slate-600 py-3 font-medium hover:bg-slate-100 transition-all gap-2"
            onClick={clearHistory}
          >
            Limpar tudo
          </Button>
        )}
      </Card>
    </div>
  );
}
