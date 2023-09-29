import { MarkdownText } from "@/components/ui/markdown"
import { RichText } from "@/components/ui/rich_text"

async function getPage(_id:string) {
    try {
        const res = await fetch(process.env.API_URL+'/api/notion/pg/'+_id,{
            cache: "no-store",
          })
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        
        return res.json()
    } catch (error) {
        return null
    }
  }

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getPage(params.id)
    if (!data){
        return <h1>not found</h1>
    }
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
  