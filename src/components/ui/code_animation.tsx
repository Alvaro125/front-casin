'use client';
import { useEffect, useState } from "react";

interface Props{
    base: Array<string>
}

export default function CodeAnimation(props:Props) {
    const [countLetter, setCountLetter] = useState<number>(0);
    const [countWord, setCountWord] = useState<number>(0);
    const [pause, setPause] = useState<number>(0);
    const [way, setWay] = useState<boolean>(true);
    const [word, setWord] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (countLetter>=props.base[countWord].length-1) {
                setWay(false)
                if (way) {
                    setPause(20)
                }else{
                    if (pause!=0) {
                        setPause(pause-1)
                    }
                }
            }
            if(countLetter==0){
                setWay(true)
            }
            if (pause==0) {
                setCountLetter(countLetter + (way?1:-1));
            }
        }, 100);
        if(countLetter>=0){
            if (way) {
                setWord(word+props.base[countWord][countLetter])
            }else{
                if (pause==0) {
                    setWord(word.slice(0, -1))
                }
            }
        }
        if(countLetter==-1){
            setCountWord(countWord<(props.base.length-1)?countWord+1:0)
        } 
        return () => clearInterval(interval);
    }, [countLetter,pause]);
  
    return <span className="text-2xl">{word}</span>;
}
