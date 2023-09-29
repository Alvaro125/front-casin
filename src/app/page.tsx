import CodeAnimation from "@/components/ui/code_animation";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Tape } from "@/components/ui/tape";
import { ListPosts } from "@/components/ui/list_posts";
import { ListFunctions } from "@/components/home/list_functions";
import { ListInfo } from "@/components/home/list_info";

const montserrat = Montserrat({
  subsets: ["latin"],
});
async function getData() {
  const res = await fetch('http://localhost:3000/api/notion',{
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Page() {
  const data = await getData()
  return (
    <>
      <main
        className={`flex min-h-screen flex-col relative items-center justify-center bg-primary ${montserrat.className}`}
      >
        <Image
          src="/logo.svg"
          alt="Casin logo"
          className="dark:invert w-10/12 top-1/2"
          width={100}
          height={24}
          priority
        />
        <p className="text-3xl text-light">
          <span className="relative text-4xl top-1">&lt;</span>
          <CodeAnimation base={["Respeito", "Comunidade", "Café"]} />
          <span className="relative text-4xl top-1">&gt;</span>
        </p>
        <p className="text-center text-light">
          Centro Acadêmico de Sistemas de INformação da UFGD.
        </p>
        <p className="text-center text-light">
          O centro acadêmico é a organização política que representa os
          estudantes de um curso de graduação.
        </p>
        <p className="text-center text-light">
          O CA é quem responde pelos alunos sobre qualquer tema.
        </p>
        <p className="text-3xl text-light">
          <span className="relative text-4xl top-1">&lt;</span>
          <CodeAnimation
            base={["Respeito", "Comunidade", "Café"]}
          />
          <span className="relative text-4xl top-1">/&gt;</span>
        </p>
        <Tape></Tape>
      </main>
      <ListFunctions></ListFunctions>
      <ListInfo></ListInfo>
      <section className={`bg-primary flex flex-col items-center ${montserrat.className} py-8 relative`}>
        <h1 className="text-5xl my-6 text-center">Posts</h1>
        <ListPosts data={data}></ListPosts>
      </section>
    </>
  );
}
