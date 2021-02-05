import { useState } from 'react';
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
    return (
        <div>
        <Head>
            <title>Pagina Home</title>
        </Head>
            <ArticleList articles={articles}/>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador} >Adicionar</button>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}