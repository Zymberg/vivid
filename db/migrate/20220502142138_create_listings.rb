class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :type
      t.string :title
      t.string :image
      t.integer :price
      t.integer :sqft
      t.string :description
      t.belongs_to :user

      t.timestamps
    end
  end
end
