export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
}

export type BlogData = {
    contents: Blog[]
    totalCount: number
    offset: number
    limit: number
}
