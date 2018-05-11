# frozen_string_literal: true

# Wrap field resolver `resolve_func` with an error handler.
# `Rescuable` instances are valid field resolvers too.
class Graphql::Rescuable
  def initialize(resolve_func)
    @resolve_func = resolve_func
  end

  def call(obj, args, ctx)
    @resolve_func.call(obj, args, ctx)
  rescue ActiveRecord::RecordNotFound => err
    # return no results
    nil
  rescue ActiveRecord::RecordInvalid => err
    # return a GraphQL error with validation details
    messages = err.record.errors.full_messages.join("\n")
    GraphQL::ExecutionError.new("Validation failed: #{messages}")
  rescue StandardError => err
    # handle all other errors
    GraphQL::ExecutionError.new("Unexpected error: #{err.message}")
  end
end
