# frozen_string_literal: true

InputObjectTypes::PostInputType = GraphQL::InputObjectType.define do

  name "PostInputType"
  description "Properties to update and create the post for an author"

  argument :title, types.String
  argument :body, types.String
  argument :author_id, !types.ID
end
