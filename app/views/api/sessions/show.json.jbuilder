if current_user
  json.id           current_user.id
  json.username     current_user.username
else
  nil
end
