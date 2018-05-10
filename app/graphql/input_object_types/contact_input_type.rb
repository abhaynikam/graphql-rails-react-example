# frozen_string_literal: true

InputObjectTypes::ContactInputType = GraphQL::InputObjectType.define do

  name "ContactInputType"
  description "Properties to update or create contact"

  argument :email, types.String
  argument :title, types.String
  argument :body, types.String
end
