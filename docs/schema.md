# Schema Information

## profiles
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users)
profilePic   | string    | not null
name         | string    | not null
description  | text      | not null
location     | string    | not null
diet         | string    | not null
smoker       | boolean   | not null
pet          | string    | not null
budget       | integer   | not null

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image       | string    | not null
name        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
