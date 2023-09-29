'use client'
export function RichText({annotations,content}:{annotations:any, content:any}) {
        if(annotations.bold || annotations.italic || annotations.strikethrough || annotations.underline){
            return <span className={`${annotations.bold && "font-bold"} ${annotations.italic && "italic"} ${annotations.strikethrough && "line-through"} ${annotations.underline && "underline"}`}>{content}</span>
        }
        return content

}