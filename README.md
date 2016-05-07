# OkBnB

[OkBnb live][heroku]

[heroku]: https://okbnb.herokuapp.com

## Minimum Viable Product

OkBnB is a web application inspired by AirBnb that was build using Ruby on Rails and React.js.  

- [X] New account creation, login, and guest/demo login
- [X] Smooth, bug-free navigation
- [X] Adequate seed data to demonstrate the site's features
- [X] The minimally necessary features for an AirBnb-inspired site: viewing potential tenant profiles and filtering by certain parameters, offer a booking to a tenant, and create new profiles
- [X] Hosting on Heroku
- [X] CSS styling that is satisfactorily visually appealing

## Features & Implementation

### Filtering

  Profiles can be filtered by a number of options however even before the user inputs anything the profiles are filtered by the borders of the map.  
  If a profile's location is not within the bounds of the map, it is not displayed on the index.

  This feature was implemented using a filter store that triggers a refetch of all the profiles on change.  The filter params are sent to the `api/profiles` and are used to chain Active Record queries to return the filtered profiles.


![imageoffiltersindex](https://github.com/charleswcho/okbnb/tree/master/docs/filters.png)


### Communication

  When a user is interested in a profile, they can send a booking offer to the potential tenant.  This will call the custom route `api/profiles/contact` which takes the profile's owner and the current user       then sends an email from the current user to the profile's owner to notify them that there is someone interested in them.

![imageoffiltersindex](https://github.com/charleswcho/okbnb/tree/master/docs/profileDetail.png)


### Editing & Deleting Profiles

  If the current user is the owner of a particular profile they have access to editing and deleting that profile.  The edit form in prefilled with the information of the profile and on submit, returns to the edited version of the profile.

![imageoffiltersindex](https://github.com/charleswcho/okbnb/tree/master/docs/profileEdit.png)

## Future features

### Errors

  Errors will be shown on auth errors, profile create, edit, and delete, and sending messages.

### Slider

  Filtering is not yet complete with the last feature being a slider for my budget.
  It will be a two handled slider that will take the range in between and then
  filter the results on the profiles that have budgets in that range.

### Search

  My app will be able to give relevant suggestions based on the location typed in.

### Direct Messaging

  Eventually my users should be able to message each other inside my app instead
  of having to use email.
