# frozen_string_literal: true

class Mutations::Authors::UpdateAuthor < GraphQL::Function
  attr_accessor :author

  argument :id, !types.ID
  argument :author, InputObjectTypes::AuthorInputType

  type Types::AuthorType

  def call(_obj, args, _ctx)
    find_author_with_id(args).update args[:author].to_h
    author
  end

  private

    def find_author_with_id(args)
      @author = Author.find_by!(id: args[:id])
    end
end
