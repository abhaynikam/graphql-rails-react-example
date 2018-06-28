# frozen_string_literal: true

Types::ContactType = GraphQL::ObjectType.define do

  name "ContactType"
  description "Contact us parameters"

  field :email, types.String
  field :title, types.String
  field :body, types.String

  field :errors, types[types.String] do
    description "Reason why contact us failed"

    resolve -> (obj, _args, _ctx) {
      obj.errors.to_a
    }
  end

  field :flash_message, types.String do

    resolve -> (obj, _args, _ctx) {}
  end

end
