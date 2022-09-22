import type { GetStaticProps, NextPage } from 'next'
import { client } from '../libs/client'
import { Blog, BlogData } from '../types/blog'

export const getStaticProps: GetStaticProps = async () => {
    const data: BlogData = await client.get({ endpoint: 'blog' })
    return {
        props: {
            blog: data.contents,
        },
    }
}

type Props = {
    blog: Blog[]
}

const Home: NextPage<Props> = ({ blog }) => {
    return (
        <ul>
            {blog.map((blog) => (
                <li key={blog.id}>{blog.title}</li>
            ))}
        </ul>
    )
}

export default Home
