import { getTarefas } from "@/app/services/tarefa";
import Tarefas from "./components/Tarefas";

export const dynamic = "force-dynamic";

export default async function Home() {
  console.log("Page Home...");
  const tarefas = await getTarefas();

  return <Tarefas tarefas={tarefas} />;
}
