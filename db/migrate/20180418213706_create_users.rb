class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.timestamps null: false
      t.string :email, null: false
      t.string :encrypted_password, limit: 128, null: false
      t.string :confirmation_token, limit: 128
      t.string :remember_token, limit: 128, null: false

      # Adding some extra functionality
      t.datetime :locked_at
      t.inet :last_sign_in_ip
      t.datetime :last_sign_in_at

      t.timestamps null: false
    end

    add_index :users, :email
    add_index :users, :remember_token
  end
end
