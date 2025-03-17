import Link from "next/link"
import { DuelVisualization } from "@/components/duel-visualization"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-6">Дуэль Онегина и Ленского</h1>
        <p className="text-xl text-center mb-12 max-w-2xl">
          Интерактивная визуализация ключевого момента романа А.С. Пушкина "Евгений Онегин"
        </p>

        <DuelVisualization />

        <p>

        </p>

        <p className="text-xl text-center mb-12 max-w-2xl" id="conclusion">

        Через дуэль Онегина и Ленского Пушкин выражает глубокую мысль о том, как социальные условности могут привести к непоправимым последствиям. Автор показывает, что слепое подчинение ложным правилам "чести" и страх перед общественным мнением способны разрушить дружбу, любовь и саму жизнь.
        </p>
      </div>
    </main>
  )
}

