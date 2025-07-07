import { Component, type FunctionalComponent } from "preact";
import type { Character } from "../types.ts";
import { Char } from "./Char.tsx";



export const Chars: FunctionalComponent<{Characters: Character[]}> = ({Characters}) =>{
   return(
    <>
     {Characters.map((elem)=>{
        return(
            
            <Char Character={elem}></Char>
        )
    })}
       </>
)   
}