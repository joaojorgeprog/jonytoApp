import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return(
        <div className={articleStyles.grid}>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={articleStyles.card}>
                    <h3>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        </div>
    )
}

export default ArticleItem