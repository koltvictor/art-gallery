class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :artist
      t.string :creation_date
      t.string :number_of
      t.string :medium
      t.boolean :signed
      t.boolean :rented
      t.string :image
      t.integer :image_height
      t.integer :image_width
      t.integer :frame_height
      t.integer :frame_width
      t.string :notes

      t.timestamps
    end
  end
end
