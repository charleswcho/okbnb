if current_user
  json.id           current_user.id
  json.email     current_user.email
  json.profile_id current_user.profile_id
else
  nil
end
