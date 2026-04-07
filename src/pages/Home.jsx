import { useEffect, useState } from "react";
import { InputArea } from "../components/InputArea";
import { OptionList } from "../components/OptionsList";
import { WinnerModal } from "../components/WinnerModal";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function Home() {
  const [winner, setWinner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem("@decididor:options");
    return savedOptions ? JSON.parse(savedOptions) : [];
  });

  const styleListBase = "rounded-3xl transition-all duration-500 ease-in-out";

  const animation = isLoading
    ? `${styleListBase} opacity-50 blur-[1px] scale-[0.98] pointer-events-none grayscale-[0.5] `
    : `${styleListBase} opacity-100 blur-0 scale-100 grayscale-0`;

  const winnerParam = encodeURIComponent(
    `O vencedor de acordo com o Decididor é: ${winner}`,
  );

  const whatsAppLink = `https://wa.me/?text=${winnerParam}`;

  function handleAddOptions(text) {
    const cleanText = text.trim().toLowerCase();
    if (!cleanText) return;

    const alreadyExists = options.some(
      (item) => item.trim().toLowerCase() === cleanText,
    );
    if (alreadyExists) {
      setError("Esta opção jáfoi adicionada!");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setError("");
    setOptions((prevOptions) => [...prevOptions, text]);
  }

  function handleReset() {
    setWinner(null);
    setOptions([]);
  }

  function handleDelete(indexParaRemover) {
    const newList = options.filter((_, index) => index !== indexParaRemover);
    setOptions(newList);
  }

  function drawOption() {
    if (options.length === 0) return;
    setWinner(null);
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const drawn = options[randomIndex];
      const drawnHistory = {
        id: Date.now(),
        winner: drawn,
        date: new Date().toLocaleString("pt-BR"),
      };
      const oldList = JSON.parse(localStorage.getItem("historico")) || [];
      oldList.unshift(drawnHistory);
      localStorage.setItem("historico", JSON.stringify(oldList));
      setWinner(drawn);
      setIsLoading(false);
      return;
    }, 2000);
  }

  useEffect(() => {
    localStorage.setItem("@decididor:options", JSON.stringify(options));
  }, [options]);

  return (
    <section className="min-h-full flex items-center justify-center p-6">
      <Card>
        <header className="space-y-1 text-center">
          <h1 className="text-xl font-extrabold tracking-widest text-slate-900 uppercase">
            O Decididor
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed  mx-auto">
            Adicione opções e deixe o destino escolher.
          </p>
        </header>

        <div className="space-y-6">
          <InputArea addOption={handleAddOptions} />

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${error ? "max-h-10 opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"}`}
          >
            <p className="text-xs text-amber-600 font-medium text-center sm:text-left">
              {error}
            </p>
          </div>

          <div className="max-h-52 overflow-y-auto pr-1">
            <OptionList
              options={options}
              animation={animation}
              onDelete={handleDelete}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <Button
            className="bg-slate-900 hover:bg-black text-white py-4 active:scale-[0.98] disabled:opacity-20 disabled:cursor-not-allowed shadow-lg shadow-slate-200"
            type="button"
            disabled={options.length < 2}
            onClick={drawOption}
          >
            Sortear
          </Button>

          {options.length >= 1 && (
            <Button
              className="border border-slate-200 text-slate-600 py-3 font-medium hover:bg-slate-50 transition-all gap-2"
              type="button"
              onClick={handleReset}
            >
              Limpar
            </Button>
          )}
        </div>
      </Card>
      <WinnerModal
        winner={winner}
        onClose={() => setWinner(null)}
        onReset={handleReset}
        whatsAppLink={whatsAppLink}
      />
    </section>
  );
}
