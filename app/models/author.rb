# frozen_string_literal: true

class Author < ApplicationRecord
  has_many :posts, dependent: :destroy

  validates :last_name, presence: true

  def coordinates
    [rand(50), rand(90)]
  end

  def publication_years
    (1..rand(10)).to_a.map { 1900 + rand(100) }
  end
end
