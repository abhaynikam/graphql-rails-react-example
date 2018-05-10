# frozen_string_literal: true

Types::PaginationMetaType = GraphQL::ObjectType.define do

  name "PaginationMetaType"

  field :total_count, types.Int do
    description "Total count of records"

    resolve -> (obj, _args, _ctx) {
      obj.count
    }
  end
end
