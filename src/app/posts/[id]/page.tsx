import { MarkdownText } from "@/components/ui/markdown"
import { RichText } from "@/components/ui/rich_text"

async function getPage(_id:string) {
    const res = await fetch('http://localhost:3000/api/notion/page/'+_id,{
        cache: "no-store",
      })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  }

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getPage(params.id)
    return (
        <div className="pt-20">
            {
                data.results.map((block:any)=>(
                    <MarkdownText type={block.type} key={block.id}>
                        {
                            block[block.type].rich_text.map((str:any, i: number)=>(
                                <RichText annotations={str.annotations} content={str[str.type].content} key={i}></RichText>
                            ))
                        } 
                    </MarkdownText>
                ))
            }
        </div>
    )
}
  