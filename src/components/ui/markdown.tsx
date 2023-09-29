'use client'
export function MarkdownText({type,children}:{type:string, children:React.ReactNode}) {
    switch (type) {
        case "paragraph":
            return(
                <p>{children}</p>
            )
            break;
        case "heading_1":
            return(
                <h1 className="text-3xl">{children}</h1>
            )
        break;
    
        default:
            return(
                <p className="text-blue-950">{children}</p>
            )
            break;
    }
}
