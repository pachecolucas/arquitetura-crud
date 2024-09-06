"use client";

import { saveTarefa, removeTarefa } from "@/app/services/tarefa";

import Tarefa from "../services/tarefa";
import { useState } from "react";

type Props = {
  tarefas: Tarefa[];
  tarefa: Tarefa;
};

export default function Tarefas({ tarefas, tarefa: novaTarefa }: Props) {
  const [tarefa, setTarefa] = useState<Tarefa>(novaTarefa);

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
              <div onClick={() => setTarefa(t)}>{t.titulo}</div>
              <div onClick={() => removeTarefa(t)}>remove</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-100">
        <form action={saveTarefa} className="flex gap-2 p-5">
          <input type="hidden" name="id" value={`${tarefa?.id}`} />
          <input
            type="text"
            name="titulo"
            placeholder="Nova tarefa aqui"
            className="border py-1 px-2 rounded-md w-full"
            value={tarefa.titulo}
            onChange={(e) => setTarefa({ ...tarefa, titulo: e.target.value })}
          />
          {tarefa.id && (
            <button
              onClick={() => setTarefa({ ...novaTarefa })}
              className="bg-slate-300 p-3 py-2 rounded-md hover:bg-slate-200 transition-all"
            >
              Cancelar
            </button>
          )}
          <button className="bg-yellow-200 p-3 py-2 rounded-md hover:bg-yellow-300 transition-all">
            {tarefa.id ? "Salvar" : "Adicionar"}
          </button>
        </form>
      </div>
    </div>
  );
}
