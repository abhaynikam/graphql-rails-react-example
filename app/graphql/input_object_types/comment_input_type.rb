# frozen_string_literal: true

InputObjectTypes::CommentInputType = GraphQL::InputObjectType.define do

  name "CommentInputType"
  description "Properties to update or create comment"

  argument :content, types.String
  argument :user_id, types.ID
  argument :post_id, types.ID
end
