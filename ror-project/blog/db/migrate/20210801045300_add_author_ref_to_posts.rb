class AddAuthorRefToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :author, null: true, foreign_key: true
  end
end
