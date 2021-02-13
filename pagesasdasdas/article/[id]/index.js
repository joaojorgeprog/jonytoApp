import Link from 'next/link'
import {useRouter} from 'next/router'
import {server} from '../../../config'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
   /*  -Podemos fazer assim para ir buscar os dados presentes na query do endereço atual

   const router = useRouter();

    const {id} = router.query;
    
    */
    return <>
        <Meta title={article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href='/'>
            Go Back
        </Link>
    </>
}
/*
//segunda maneira
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const ids = articles.map(article => article.id); //array de ids

    const paths = ids.map(id => ({params: {id: id.toString()}}))  //criar array de id ja estruturados da forma que precisamos em baixo

    return {
        paths,
        fallback: false //se nao existr vai retornar um 404 page
    }
}
*/
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)

    const articles = await res.json()

    const ids = articles.map(article => article.id); //array de ids

    const paths = ids.map(id => ({ params: { id: id.toString() } }))  //criar array de id ja estruturados da forma que precisamos em baixo

    return {
        paths,
        fallback: false //se nao existr vai retornar um 404 page
    }
}

export default article