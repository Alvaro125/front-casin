'use client'
import Link from "next/link";
import { RichText } from "./rich_text";
import Image from "next/image";

export function ListPosts({ data }: { data: any[] }) {
  return (
    <ul className="m-0 flex list-none flex-row flex-wrap items-stretch gap-3 w-fit justify-stretch">
      {data.map((page) => (
        <li key={page.id} className="w-[20rem] bg-white py-6 px-3 flex-1 rounded-2xl">
          <Image
            src={
              page.properties.capa.files.length
                ? page.properties.capa.files[0].file.url
                : "/casin.png"
            }
            width={320}
            height={320}
            alt=""
          />
          <Link href={`/posts/${page.id}`} className="font-bold text-3xl">
            {page.properties.titulo.title[0].text.content}
          </Link>
          <p>
            {page.properties["descrição"].rich_text.map(
              (str: any, i: number) => (
                <RichText
                  annotations={str.annotations}
                  content={str[str.type].content}
                  key={i}
                ></RichText>
              )
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}
