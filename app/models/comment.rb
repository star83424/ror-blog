class Comment < ApplicationRecord
  belongs_to :post
  validates :commenter, presence: true, length: { maximum: 30 }
  validates :content,  presence: true, length: { maximum: 500 }
end
