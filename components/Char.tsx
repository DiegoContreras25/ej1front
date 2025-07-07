import type { FunctionalComponent } from "preact";
import type { Character } from "../types.ts";
import { renderOuterDocument } from "$fresh/src/server/rendering/template.tsx";


export const Char: FunctionalComponent<{Character: Character}> = ({Character}) =>{
    return(
        <div class="card">
            <a href={`/characters/${Character.id}`}>
            <img src={Character.image} alt={Character.name}></img>
            </a>
            <div class="card-info"><a class="name" href={`/characters/${Character.id}`}>{Character.name}</a>
            <span class="star">★</span></div>
        </div>
     
    )
}
