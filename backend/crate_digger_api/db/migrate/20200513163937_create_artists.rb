class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :genre
      t.string :image
      t.string :title
      t.references :country, null: false, foreign_key: true
      t.references :famous_artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
