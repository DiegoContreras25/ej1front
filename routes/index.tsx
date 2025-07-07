import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Chars } from "../components/Chars.tsx";
import { Character } from "../types.ts";
import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";


export const handler:Handlers<Character[]> = {
    GET: async(_req: Request, ctx: FreshContext<unknown, Character[]>) =>{
        const res = await fetch(`https://hp-api.onrender.com/api/characters`);   
        const data: Character[] = await res.json();  
        return(
            ctx.render(data)
        )
    }
}

export default function Home(data: PageProps<Character[]>) {
  
  return (
    <div class="grid">
      <Chars Characters={data.data}></Chars>
    </div>
  );
}
