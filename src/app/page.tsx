import { getTarefas } from "@/app/services/tarefa";
import Tarefas from "./components/Tarefas";

export default async function Home() {
  const tarefas = await getTarefas();

  return <Tarefas tarefas={tarefas} />;
}
