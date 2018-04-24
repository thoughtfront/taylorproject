class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people, id: :uuid, default: "uuid_generate_v4()", force: true do |t|
      t.string :prefix
      t.string :first_name, null: false
      t.string :middle_name, null: false
      t.string :last_name
      t.string :suffix
      t.string :gender
      t.date :birth_date
      t.string :facebook_id
      t.string :facebook_link
      t.string :twitter_id
      t.string :twitter_screen_name
      t.string :instagram_id
      t.string :instagram_username

      t.timestamps null: false
    end
  end
end
