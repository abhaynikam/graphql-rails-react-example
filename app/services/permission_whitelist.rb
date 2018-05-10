# frozen_string_literal: true

class PermissionWhitelist
  def initialize(person)
    @person = person
  end

  # If this returns true, the schema member will be allowed
  def call(schema_member, ctx)
    # Permissions.allowed?(person, schema_member)
  end
end
