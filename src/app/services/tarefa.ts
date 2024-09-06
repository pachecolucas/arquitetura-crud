"use server"

import { revalidatePath } from "next/cache"
import db from "./db"
import { sql } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type Tarefa = {
    id: number | null
    titulo: string
}
export default Tarefa

export async function getTarefas(): Promise<Tarefa[]> {
    return await db.execute(sql`SELECT * FROM tarefas`) as Tarefa[]
}

export async function saveTarefa(formData: FormData) {

    const tarefa: Tarefa = {
        id: null,
        titulo: formData.get('titulo') as string
    }

    await db.execute(sql`INSERT INTO tarefas (titulo) VALUES (${tarefa.titulo})`)

    redirect('/')
}


export async function removeTarefa(tarefa: Tarefa) {

    await db.execute(sql`DELETE FROM tarefas WHERE id=${tarefa.id}`)

    redirect('/')
}