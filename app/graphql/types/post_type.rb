# frozen_string_literal: true

require "graphql/batch"

Types::PostType = GraphQL::ObjectType.define do

  name "PostType"

  field :id, types.ID
  field :title, types.String
  field :body, types.String
  field :author, Types::AuthorType
  field :comments, types[Types::CommentType]

  field :created_at, types.String do
    description "Comment created at timestamp."

    resolve -> (obj, _args, _ctx) {
      obj.created_at.strftime("%b %d, %Y")
    }
  end
end
