'use client'

import { Montserrat } from "next/font/google";
import { BsFillHeartFill, BsInstagram } from "react-icons/bs";
import { FaHandHoldingHand, FaPeopleGroup, FaPeopleLine, FaPeoplePulling } from "react-icons/fa6"
import { RiSearchEyeLine } from "react-icons/ri";

const montserrat = Montserrat({
    subsets: ["latin"],
  });

export function ListInfo(){
    return(
      <section
      className={`bg-primary flex flex-col items-center ${montserrat.className} py-8 relative`}
    >
      <div className="bg-transparent w-10/12 rounded-2xl flex content-stretch p-4 text-light border-tertiary border-2 sm:flex-row flex-col flex-wrap gap-3">
        <div className="flex flex-col items-center flex-1 justify-between">
          <span className="text-5xl">
            <BsInstagram />
          </span>
          <h2 className={`text-3xl text-tertiary text-center`}>Estamos no Instagram</h2>
          <p className="w-11/12 text-center">
            Contate-nos a qualquer momento pelo direct
          </p>
        </div>
        <div className="bg-tertiary sm:w-[1px] sm:h-auto h-[1px] "></div>
        <div className="flex flex-col items-center flex-1 justify-between">
          <span className="text-5xl">
            <RiSearchEyeLine />
          </span>
          <h2 className={`text-3xl text-tertiary text-center`}>100% Transparencia</h2>
          <p className="w-11/12 text-center">
            Infomamos de forma Ética e Coerente sobre todas as demandas de nosso
            ambiente de SI
          </p>
        </div>
        <div className="bg-tertiary sm:w-[1px] sm:h-auto h-[1px] "></div>
        <div className="flex flex-col items-center flex-1 justify-between">
          <span className="text-5xl">
            <BsFillHeartFill />
          </span>
          <h2 className={`text-3xl text-tertiary text-center`}>Amor pela Comunidade</h2>
          <p className="w-11/12 text-center">
          Estamos comprometidos pelo bem estar academicos e abertos a sugestões de nosso colegas
          </p>
        </div>
        <div className="bg-tertiary sm:w-[1px] sm:h-auto h-[1px] "></div>
        <div className="flex flex-col items-center flex-1 justify-between">
          <span className="text-5xl">
            <FaHandHoldingHand />
          </span>
          <h2 className={`text-3xl text-tertiary text-center`}>Retorno Social</h2>
          <p className="w-11/12 text-center">
          Nosso compromisso e levar, discutir e trazer resultados que beneficiem nos ambiente academico
          </p>
        </div>
      </div>
    </section>
    )
}