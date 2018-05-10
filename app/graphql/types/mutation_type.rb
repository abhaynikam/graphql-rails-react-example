# frozen_string_literal: true

Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createAuthor, function: Mutations::Authors::CreateAuthor.new
  field :updateAuthor, function: Mutations::Authors::UpdateAuthor.new
  field :deleteAuthor, function: Mutations::Authors::DeleteAuthor.new

  field :createPost, function: Mutations::Posts::CreatePost.new
  field :updatePost, function: Mutations::Posts::UpdatePost.new
  field :deletePost, function: Mutations::Posts::DeletePost.new

  field :createComment, function: Mutations::Comments::CreateComment.new
  field :incrementCommentLikes, function: Mutations::Comments::IncrementCommentLikes.new

  field :createContact, function: Mutations::ContactUs::CreateContact.new
end
