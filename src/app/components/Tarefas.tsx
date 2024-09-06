"use client";

import { saveTarefa, removeTarefa } from "@/app/services/tarefa";

import Tarefa from "../services/tarefa";

type Props = {
  tarefas: Tarefa[];
};

export default function Tarefas({ tarefas }: Props) {
  console.log("Component Tarefas...");
  return (
    <div className="bg-white max-w-[1024px] m-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      <div className="p-5">
        <h1 className="font-semibold uppercase text-lg">Tarefas</h1>
        <div className="flex flex-col gap-2 my-5">
          {tarefas.map((t) => (
            <div
              key={t.id}
              className="px-3 py-1 text-slate-800 rounded-md bg-slate-50 flex justify-between"
            >
              <div>{t.titulo}</div>
              <div onClick={() => removeTarefa(t)}>remove</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100">
        <form action={saveTarefa} className="flex gap-2 p-5">
          <input
            type="text"
            name="titulo"
            placeholder="Nova tarefa aqui"
            className="border py-1 px-2 rounded-md w-full"
          />
          <button className="bg-yellow-200 p-3 py-2 rounded-md hover:bg-yellow-300 transition-all">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
