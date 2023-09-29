'use client'

import { Montserrat } from "next/font/google";
import { FaPeopleGroup, FaPeopleLine, FaPeoplePulling } from "react-icons/fa6"

const montserrat = Montserrat({
    subsets: ["latin"],
  });

export function ListFunctions(){
    return(
        <section
        className={`bg-primary flex flex-col items-center ${montserrat.className} py-8 relative`}
      >
        <h1 className="text-5xl my-6 text-center text-light">Quais Nossas Funções</h1>
        <div className="bg-light w-10/12 rounded-2xl flex content-stretch flex-col p-4 gap-2 sm:flex-row">
          <div className="flex flex-col items-center flex-1">
            <span className="text-5xl">
              <FaPeopleGroup />
            </span>
            <h2 className={`text-3xl text-primary`}>Representar</h2>
            <p className="w-11/12 text-center">
              Representar os Academicos de Sistemas de Informação perante as
              suas Demandas dentro da UFGD
            </p>
          </div>
          <div className="bg-primary sm:w-[1px] sm:h-auto h-[1px] "></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-5xl">
              <FaPeoplePulling />
            </span>
            <h2 className={`text-3xl text-primary`}>Movimentar</h2>
            <p className="w-11/12 text-center">
              Incentivar a participação ativa dos estudantes em eventos e
              dinamicas sociais relacionadas ao Curso de SI
            </p>
          </div>
          <div className="bg-primary sm:w-[1px] sm:h-auto h-[1px] "></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-5xl">
              <FaPeopleLine />
            </span>
            <h2 className={`text-3xl text-primary`}>Discutir</h2>
            <p className="w-11/12 text-center">
              Distutir demandas, necessidades e problemas ligados a nossa area e
              ambiente, afim de trazer um debate aberto entre estudantes e
              universidade
            </p>
          </div>
        </div>
      </section>
    )
}