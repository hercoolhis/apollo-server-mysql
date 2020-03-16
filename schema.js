export default `
    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        authorId: ID!
        author: Author!
    }

    type Query {
        posts: [Post!]!
        post(id: ID!): Post
        author(id: ID!): Author
        authors: [Author!]!
    }

    type Mutation {
        createPost(data: createPostInput): Post! 
        updatePost(data: updatePostInput): [Int!]!
        deletePost(id: ID!): Int!
    }

    input createPostInput {
        title: String!,
        content: String!,
        authorId: ID!
    }

    input updatePostInput {
        id: ID!
        title: String!,
        content: String!
    }
`