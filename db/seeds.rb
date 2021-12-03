# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing out data"

Art.destroy_all
User.destroy_all

puts "importing new data"

User.create(id: 1, name: 'Admin', username: 'admin', password: 'B628109446a!', password_confirmation: 'B628109446a!', email: 'kolts.email@gmail.com')

CSV.foreach("lib/data.csv") do |row|
  Art.create(user_id: 11, title: row[4], artist: row[1], creation_date: row[5], number_of: row[6], medium: row[9], image_height: row[13], image_width: row[14], frame_height: row[16], frame_width: row[17], image: row[41])
end

puts "completed seeding"