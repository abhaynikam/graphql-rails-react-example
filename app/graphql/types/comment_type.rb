# frozen_string_literal: true

Types::CommentType = GraphQL::ObjectType.define do

  name "CommentType"

  field :id, types.ID
  field :content, types.String
  field :user, Types::UserType
  field :post, Types::PostType
  field :likes, types.Int

  field :created_at, types.String do
    description "Comment created at timestamp."

    resolve -> (obj, _args, _ctx) {
      obj.created_at.strftime("%d/%m/%Y")
    }
  end
end
