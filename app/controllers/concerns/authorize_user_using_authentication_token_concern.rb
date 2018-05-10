# frozen_string_literal: true

module AuthorizeUserUsingAuthenticationTokenConcern
  extend ActiveSupport::Concern

  included do
    before_validation :ensure_identifier_assigned
  end

  def to_param
    identifier
  end

  private

    def ensure_identifier_assigned
      return if self.identifier.present?
      loop do
        self.identifier = SecureRandom.hex(10)
        break unless self.class.where(identifier: identifier).exists?
      end
    end
end
