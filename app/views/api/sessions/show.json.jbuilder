if current_user
  json.id           current_user.id
  json.email     current_user.email
else
  nil
end
