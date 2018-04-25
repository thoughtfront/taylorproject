# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

user = User.new(
  email: 'chris@oursiders.com',
  password: 'abcd',
  confirmation_token: 'abcd'
)
# user.first_name = 'Chris'
# user.last_name = 'Dimoulis'
user.save
