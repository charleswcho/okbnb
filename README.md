# OkBnB

[OkBnb live][heroku]

[heroku]: https://okbnb.herokuapp.com

Okbnb is a great way to find tenants you would like to have in your home.

## Features & Implementation

### Filtering

  Profiles can be filtered by a number of options however even before the user inputs anything the profiles are filtered by the borders of the map.  If a profile's location is not within the bounds of the map, it is not displayed on the index.

  This feature was implemented using a filter store that triggers a refetch of all the profiles on change.  The filter params are sent to the `api/profiles` and are used to chain Active Record queries to return the filtered profiles.

![filters][filters]

[filters]: docs/profileFilters.png


### Communication

  When a user is interested in a profile, they can send a booking offer to the potential tenant.  This will call the custom route `api/profiles/contact` which takes the profile's owner and the current user       then sends an email from the current user to the profile's owner to notify them that there is someone interested in them.

![Profile Detail][profile detail]

[profile detail]: docs/profileDetail.png


### Editing & Deleting Profiles

  If the current user is the owner of a particular profile they have access to editing and deleting that profile.  The edit form in prefilled with the information of the profile and on submit, returns to the edited version of the profile.

![Profile Edit][profile edit]

[profile edit]: docs/profileEdit.png

### Search

  Google maps autocomplete allows the user to see suggestions for relevant cities based on the current search value.  

  When a user clicks on one of the suggestions in the dropdown the route changes and the index page is rendered.

  ![autocomplete][autocomplete]

  [autocomplete]: docs/autocomplete.png

### Errors

  Errors are shown on auth errors, profile create.

## Future features

### Direct Messaging

  Eventually my users should be able to message each other inside my app instead
  of having to use email.
