# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Guest", password: "1234567");

10.times do |i|
  i = i.to_i
  charles = User.create(username: "Charles#{i}", password: "1234567");
  Profile.create!(
    user_id: i,
    profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1461952627/kwe0lerlmgdaggz8fwir.jpg',
    name: charles.username,
    age: i + 23,
    description: "asdfasd",
    location: "1#{i}0 Spear Street, San Francisco, CA",
    lat: 37.791039 + (i * 0.001),
    lng: -122.394853,
    search_status: "Active",
    smoker: false,
    pet: "Dog",
    diet: "Vege",
    budget: 9001
  )
end

wesley = User.create!(username: "Wesley", password: "1234567");
Profile.create!(
  user_id: 12,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1461952627/kwe0lerlmgdaggz8fwir.jpg',
  name: wesley.username,
  age: 21,
  description: "asdfasd",
  location: "160 Spear Street, San Francisco, CA",
  lat: 37.791039,
  lng: -122.394853,
  search_status: "Passive",
  smoker: true,
  pet: "Cat",
  diet: "Vegan",
  budget: 9001
)
