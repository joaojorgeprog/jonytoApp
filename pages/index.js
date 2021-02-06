import { useState } from 'react';
import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({ articles }) {
    return (
        <div>
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
/*
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}*/

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}