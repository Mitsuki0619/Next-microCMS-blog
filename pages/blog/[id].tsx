import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client'
import { Blog, BlogData } from '../../types/blog'

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id
    const idExceptArray = id instanceof Array ? id[0] : id
    const data = await client.get({
        endpoint: 'blog',
        contentId: idExceptArray,
    })
    return {
        props: {
            blog: data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data: BlogData = await client.get({ endpoint: 'blog' })
    const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
    return {
        paths,
        fallback: false,
    }
}

type Props = {
    blog: Blog
}

export default function BlogId({ blog }: Props) {
    return (
        <main>
            <h1>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
        </main>
    )
}
