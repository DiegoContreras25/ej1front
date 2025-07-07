import type { PageProps } from "$fresh/server.ts";




export default function Layout(props: PageProps){
    return(
        <div>
            <header class="header"><nav>
            <a href="/" data-ancestor="true" aria-current="true">Todos</a>
            <a href="/favorites">Favoritos</a></nav></header>

            <props.Component></props.Component>
        </div>
    )
}