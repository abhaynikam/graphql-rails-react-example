# frozen_string_literal: true

# Assert that the current user has `permission` on the return value of `block`
class PermissionAssertion
  # Get a permission level and the "inner" resolve function
  def initialize(permission, resolve_func)
    @permission = permission
    @resolve_func = resolve_func
  end

  # GraphQL will call this, so delegate to the "inner" resolve function
  # and check the return value
  def call(obj, args, ctx)
    value = @resolve_func.call(obj, args, ctx)
    current_user = ctx[:current_user]
    if current_user.can?(@permission, value)
      value
    else
      nil
    end
  end
end
