# frozen_string_literal: true

Types::AuthorType = GraphQL::ObjectType.define do
  name "AuthorType"

  field :first_name, !types.String
  field :last_name, types.String
  field :birth_year, types.Int
  field :is_alive, types.Boolean
  field :id, !types.ID

  field :full_name, !types.String do
    description "The full name of the author"

    resolve -> (obj, _args, _ctx) { [obj.first_name, obj.last_name].compact.join(" ") }
  end

  field :coordinates, Types::PairType, "Coordnates for author"

  field :publication_years, types[types.Int], "List of publication years"

  field :errors, types[types.String] do
    description "Reason why author was not created in the database"

    resolve -> (obj, _args, _ctx) {
      obj.errors.to_a
    }
  end

  field :posts, types[Types::PostType]
end
