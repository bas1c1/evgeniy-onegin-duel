"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Info, Quote, MapPin, Users, BookOpen } from "lucide-react"

const timelineEvents = [
  {
    id: "party",
    title: "Именины Татьяны",
    description:
      "Онегин, приглашенный Ленским на именины Татьяны, от скуки и раздражения начинает флиртовать с Ольгой, невестой Ленского.",
    quote:
      "Он счастлив, он почти блажен... \nВдруг чувствует, с досадой вместе, \nНевольно что-то в этом месте \nОн узнает; на правый лаз \nОн засмотрелся поневоле: \nОнегин, помните ль тот час, \nКогда в саду, в аллее нас \nСудьба свела...",
    image: "https://sun9-42.userapi.com/impg/bYzt_gmAksnTy6nd2tnLTlz8x2T9BpsYCWfVAQ/w6gcNHCYLRM.jpg?size=750x777&quality=95&sign=003111ea06b7ee08729a034039de7552&c_uniq_tag=bUi_c8SwTLGkYTW6bpQsZA1HeKqBxIYETQtcUWWkeK0&type=album?height=300&width=500",
  },
  {
    id: "jealousy",
    title: "Ревность Ленского",
    description:
      "Ленский глубоко оскорблен поведением друга, который танцевал с Ольгой весь вечер. Он видит в этом предательство и решает вызвать Онегина на дуэль.",
    quote:
      "В негодовании ревнивом \nПоэт конца мазурки ждет \nИ в котильон ее зовет. \nНо ей нельзя. Нельзя? Но что же? \nОна не может. Боже, боже! \nОна давно его не ждет, \nОна с Онегиным танцует...",
    image: "https://i.pinimg.com/736x/ed/72/79/ed727996d5bc6fa0318892dc7697f17a.jpg?height=300&width=500",
  },
  {
    id: "challenge",
    title: "Вызов на дуэль",
    description:
      "Ленский отправляет Онегину записку с вызовом на дуэль. Зарецкий, известный дуэлянт, выступает секундантом Ленского.",
    quote:
      "Он мчит Онегину записку, \nОнегин с первого движенья, \nК послу такого порученья \nОборотясь, без лишних слов \nСказал, что он всегда готов.",
    image: "https://cdn.culture.ru/images/8e355dcd-5ab7-52f2-a28e-6fd477e30d6a?height=300&width=500",
  },
  {
    id: "morning",
    title: "Утро дуэли",
    description:
      "Онегин, проспав, опаздывает на дуэль. Он приезжает с своим слугой Гильо вместо секунданта, что является нарушением дуэльного кодекса.",
    quote:
      "Вот пистолеты уж блеснули, \nГремит о шомпол молоток. \nВ граненый ствол уходят пули, \nИ щелкнул в первый раз курок.",
    image: "/morning.png?height=300&width=500",
  },
  {
    id: "duel",
    title: "Дуэль",
    description:
      "Противники сходятся. Онегин стреляет первым и убивает Ленского. Только тогда он осознает весь ужас произошедшего.",
    quote:
      "Хладнокровно, \nЕще не целя, два врага \nПоходкой твердой, тихо, ровно \nЧетыре перешли шага, \nЧетыре смертные ступени. \nСвой пистолет тогда Евгений, \nНе преставая наступать, \nСтал первый тихо подымать.",
    image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65f5ebb2106fab2943e15845_65f608549dab3424f35694d1/scale_1200?height=300&width=500",
  },
  {
    id: "aftermath",
    title: "Последствия",
    description:
      "Онегин, потрясенный смертью друга, покидает деревню. Ольга вскоре выходит замуж за улана и уезжает. Татьяна остается одна со своей тайной любовью к Онегину.",
    quote:
      "Убит!.. Сим страшным восклицаньем \nСражен, Онегин с содроганьем \nОтходит и людей зовет. \nЗарецкий бережно кладет \nНа сани труп оледенелый...",
    image: "https://avatars.dzeninfra.ru/get-zen_doc/2350270/pub_5ecfe650893ed50f27e9b2f2_5ed271671561ef1b6b777b41/scale_1200?height=300&width=500",
  },
]

export function DuelVisualization() {
  const [currentEvent, setCurrentEvent] = useState(0)
  const [activeTab, setActiveTab] = useState("description")

  const handleNext = () => {
    if (currentEvent < timelineEvents.length - 1) {
      setCurrentEvent(currentEvent + 1)
    }
  }

  const handlePrev = () => {
    if (currentEvent > 0) {
      setCurrentEvent(currentEvent - 1)
    }
  }

  const event = timelineEvents[currentEvent]

  return (
    <div className="w-full max-w-4xl bg-white/5 rounded-xl p-6 border border-gray-300">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Хронология событий</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentEvent === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentEvent === timelineEvents.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mb-8">
        <div className="absolute h-1 bg-gray-300 top-4 left-0 right-0 z-0"></div>
        <div className="flex justify-between relative z-10">
          {timelineEvents.map((item, index) => (
            <button
              key={item.id}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                index <= currentEvent ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentEvent(index)}
            >
              <span className="text-xs">{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs">
          {timelineEvents.map((item, index) => (
            <div key={`label-${item.id}`} className="w-8 text-center overflow-hidden">
              {index === 0 || index === timelineEvents.length - 1 ? item.title.split(" ")[0] : ""}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-64"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">{event.title}</h3>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="description" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>Описание</span>
              </TabsTrigger>
              <TabsTrigger value="quote" className="flex items-center gap-1">
                <Quote className="h-4 w-4" />
                <span>Цитата</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-0">
              <p>{event.description}</p>
            </TabsContent>

            <TabsContent value="quote" className="mt-0">
              <blockquote className="border-l-4 border-primary/50 pl-4 italic">
                {event.quote.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </blockquote>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

