import { ClipboardIcon } from "../components/Icons";
import { Card } from "../components/Card";

export default function About() {
  return (
    <div className="w-full flex justify-center py-10 px-6 animate-fade-in">
      <Card className="max-w-md">
        <header className="flex flex-col items-center text-center">
          <div className="inline-flex p-4 bg-indigo-50 rounded-2xl mb-4 text-indigo-600">
            <ClipboardIcon className="size-8" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
            Sobre o Projeto
          </h1>
        </header>
        <section className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <div>
            <h2 className="font-bold text-slate-800 mb-3 text-lg">
              {'Por que "O Decididor"?'}
            </h2>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-indigo-100 pl-4 mb-4">
              {
                '"O que vamos comer hoje?", "Para onde vamos?", "Escolhe você!", "Não sei, qualquer coisa..."'
              }
            </p>
            <p className="text-slate-600 leading-relaxed">
              Criei este projeto para acabar com esse impasse clássico de todo
              casal ou grupo de amigos. A ideia é simples: a gente coloca as
              opções e <strong>deixa a sorte decidir</strong>. Assim, ninguém
              fica com o peso de ter que escolher sozinho e o app resolve a
              parada rápido e sem enrolação.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h2 className="font-bold text-slate-800 mb-4 text-center sm:text-left">
              O que usei para aprender:
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full" />
                <p>
                  <strong>Tailwind CSS:</strong> Para criar um visual leve e
                  moderno sem pesar o carregamento.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full" />
                <p>
                  <strong>React Router:</strong> Para a navegação entre as telas
                  ser instantânea.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full" />
                <p>
                  <strong>SVG e Heroicons:</strong> Em vez de bibliotecas
                  pesadas, usei ícones manuais para manter o código limpo.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full" />
                <p>
                  <strong>Padronização:</strong> Usei Prettier e ESLint para
                  garantir que o código ficasse organizado desde o início.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <footer className="text-center pt-4 border-t boder-slate-50">
          <p className="text-slate-900 font-bold text-xs mb-3">
            Felipe Correa Gonzalez
          </p>
          <div className="flex justify-center gap-4 text-xs font-semibold">
            <a
              href="https://github.com/Felipe-C-Gonzalez"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.linkedin.com/in/felipecgonzalez/"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </footer>
      </Card>
    </div>
  );
}
