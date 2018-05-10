# frozen_string_literal: true

class Mutations::Authors::CreateAuthor < GraphQL::Function
  argument :author, InputObjectTypes::AuthorInputType

  type Types::AuthorType

  def call(_obj, args, _ctx)
    Author.create args[:author].to_h
  end
end
