class Artist < ApplicationRecord
  belongs_to :country
  belongs_to :famous_artist
  validates :name, :genre, :country_id, :famous_artist_id, presence: true
end
