json.array! @offers do |offer|
  json.id offer.id
  json.profile_id offer.profile_id
  json.user_id offer.user_id
end
