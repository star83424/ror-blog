class Post < ApplicationRecord
    belongs_to :author
    has_many :comments, dependent: :destroy
    validates :title, presence: true, length: { maximum: 100 }
    validates :text,  presence: true, length: { maximum: 1000 }
end
