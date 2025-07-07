import { FreshContext, Handlers, type PageProps } from "$fresh/server.ts";
import { Char } from "../../components/char.tsx";
import {Character} from "../../types.ts"


export const handler:Handlers<Character> = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Character>) =>{
        const id= ctx.params.id;
        const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);   
        const data: Character[] = await res.json();  
        return(
            ctx.render(data[0])
        )
    }
}


export default function Page(pepe: PageProps<Character>){
    
    
    
    return(
        <div class="detail">
            <img src={pepe.data.image} alt={pepe.data.name}/>
            <h2>{pepe.data.name} <span class="star">★</span></h2>
            <p>Casa: {pepe.data.house}</p>
            <p>{pepe.data.alive}</p>
                <a href="/" data-ancestor="true" aria-current="true">Volver</a>
        </div>

    )

}