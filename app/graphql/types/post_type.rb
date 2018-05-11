# frozen_string_literal: true

Types::PostType = GraphQL::ObjectType.define do

  name "PostType"

  field :id, types.ID
  field :title, types.String
  field :body, types.String
  field :author, Types::AuthorType
  field :comments, types[Types::CommentType] do

    resolve -> (obj, _args, _ctx) {
      RecordLoader.for(Comment).load(obj.comment_ids)
    }
  end

  field :created_at, types.String do
    description "Comment created at timestamp."

    resolve -> (obj, _args, _ctx) {
      obj.created_at.strftime("%b %d, %Y")
    }
  end

  field :count, types.Int do
    description "Total number of posts in database"

    resolve -> (_obj, _args, _ctx) {
      10
    }
  end
end
