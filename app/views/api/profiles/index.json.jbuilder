json.array! @profiles do |profile|
  json.id profile.id
  json.user_id profile.user_id
  json.profilePicURL profile.profilePicURL
  json.name profile.name
  json.age profile.age
  json.description profile.description
  json.location profile.location
  json.lat profile.lat
  json.lng profile.lng
  json.diet profile.diet
  json.smoker profile.smoker
  json.pet profile.pet
  json.budget profile.budget
end
