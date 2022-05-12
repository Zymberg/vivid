class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.belongs_to :user
      t.belongs_to :listing
      t.string :type
      t.string :title
      t.string :image
      t.integer :price
      t.integer :sqft
      t.string :description
      
      t.timestamps
    end
  end
end
