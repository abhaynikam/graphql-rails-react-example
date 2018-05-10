# frozen_string_literal: true

InputObjectTypes::AuthorInputType = GraphQL::InputObjectType.define do

  name "AuthorInputType"
  description "Properties for updating or creating author."

  argument :first_name, types.String
  argument :last_name, types.String
  argument :birth_year, types.Int
  argument :is_alive, types.Boolean

end
