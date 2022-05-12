class Listing < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
    
    validates :title, presence: true
    validates :type, presence: true
    validates :image, presence: true
    validates :price, presence: true
    validates :sqft, presence: true
    validates :description, presence: true


end
