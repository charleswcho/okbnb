# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Guest", password: "1234567");

10.times do |i|
  charles = User.create(username: "Charles#{i}", password: "1234567");
  Profile.create(
    user_id: i,
    profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1461952627/kwe0lerlmgdaggz8fwir.jpg',
    name: charles.username,
    age: i + 23,
    description: "asdfasd",
    location: "13413414",
    diet: "asdfasdf",
    smoker: false,
    pet: "Dog",
    budget: 9001
  )
end
