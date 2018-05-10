# frozen_string_literal: true

Types::PairType = GraphQL::ObjectType.define do
  name "PairType"
  description "A pair of coordinates"

  field :latitude, types.Float do
    description "Latitude of the author"

    resolve -> (obj, _args, _ctx) { obj.first }
  end

  field :longitude, types.Float do
    description "Latitude of the author"

    resolve -> (obj, _args, _ctx) { obj.first }
  end
end
