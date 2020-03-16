export default {
    Author: {
      posts: (parent, args, context, info) => parent.getPosts(),
    },
    Post: {
      author: (parent, args, context, info) => parent.getAuthor(),
    },
    Query: {
      posts: (parent, args, { db }, info) => db.post.findAll(),
      authors: (parent, args, { db }, info) => db.author.findAll(),
      post: (parent, { id }, { db }, info) => db.post.findByPk(id),
      author: (parent, { id }, { db }, info) => db.author.findByPk(id) 
    },
    Mutation: {
      createPost: (parent, { data: { title, content, authorId } }, { db }, info) =>
        db.post.create({
          title,
          content,
          authorId
        }),
      updatePost: (parent, { data: { title, content, id } }, { db }, info) =>
        db.post.update({
          title,
          content
        },
        {
          where: {
            id: id
          }
        }),
      deletePost: (parent, {id}, { db }, info) =>
        db.post.destroy({
          where: {
            id: id
          }
        })
    }
  };