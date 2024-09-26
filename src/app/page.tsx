import { getTarefas, getEmptyTarefa } from "@/app/services/tarefa";
import Tarefas from "./components/Tarefas";

export const dynamic = "force-dynamic";

// export const revalidate = 0

export default async function Page() {
  const tarefas = await getTarefas();
  const tarefa = await getEmptyTarefa();

  return <Tarefas tarefas={tarefas} tarefa={tarefa} />;
}
