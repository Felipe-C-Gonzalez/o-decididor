/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "./Button";

export function InputArea({ addOption }) {
  const [newOption, setNewOption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newOption.trim()) {
      addOption(newOption);
    }
    setNewOption("");
  }
  return (
    <form
      className="flex flex-col sm:flex-row w-full gap-3 sm:gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full sm:flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all text-base"
        type="text"
        placeholder="Digite uma opção..."
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
      />
      <Button
        className=" w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-6 py-3 sm:py-0 rounded-xl font-medium shadow-sm whitespace-nowrap"
        type="submit"
      >
        Adicionar
      </Button>
    </form>
  );
}
