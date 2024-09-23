"use server"

import db from "./db"
import { sql } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type Tarefa = {
    id: number | null
    nome: string
}
export default Tarefa

export async function getEmptyTarefa(): Promise<Tarefa> {
    return { id: null, nome: "" }
}
export async function getTarefas(): Promise<Tarefa[]> {
    return await db.execute(sql`SELECT * FROM tarefa ORDER BY id`) as Tarefa[]
}

export async function saveTarefa(formData: FormData) {

    const id = +(formData.get('id') as string) as number
    const nome = formData.get('nome') as string

    const tarefa: Tarefa = {
        id,
        nome
    }

    if (!id) {
        // save
        await db.execute(sql`INSERT INTO tarefa (nome) VALUES (${tarefa.nome})`)
    } else {
        // update
        await db.execute(sql`UPDATE tarefa SET nome=${tarefa.nome} WHERE id=${tarefa.id}`)
    }
    redirect('/')
}


export async function removeTarefa(tarefa: Tarefa) {

    await db.execute(sql`DELETE FROM tarefa WHERE id=${tarefa.id}`)

    redirect('/')
}