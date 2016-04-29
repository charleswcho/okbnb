# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

OkBnB is a web application inspired by AirBnb that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [X] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an AirBnb-inspired site: viewing potential tenant profiles and filtering by certain parameters, offer a booking to a tenant, and create new profiles
- [X] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing

## Product Goals and Priorities

OkBnb will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [X] Create an account (MVP)
- [X] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] View and create tenant profiles (MVP)
- [ ] Filter through tenant profiles with parameters (MVP)
- [ ] Contact potential tenants (MVP)
- [ ] Offer a date range of availability to tenant (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Profiles Model, API, and basic APIUtil (1.5 days)

**Objective:** Profiles can be created, viewed, edited and destroyed through
the API.

- [ ] create `Profile` model
- [ ] profiles belong to users
- [ ] seed the database with Profiles and demo user
- [ ] CRUD API for notes (`ProfilesController`)
- [ ] jBuilder views for profiles
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2.0 days)

**Objective:** Profiles can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each profile component, building out the flux loop as needed.
  - [ ] `ProfileIndex`
  - [ ] `ProfileIndexItem`
  - [ ] `ProfileDetail`
  - [ ] `DetailDescription`
  - [ ] `DescriptionItem`
  - [ ] `DescriptionItemDetail`
  - [ ] `ProfileForm`

### Phase 4: Google Maps API (2.0 days)

**Objective:** Integrate maps with profiles for geolocation.

- setup Google Maps API
  - [ ] Get API key for JavaScript Google Map
- [ ] Add ajax request methods to Utils
- [ ] Add receive methods in Server Actions and Update Profile Store as needed
- implement each map component, building out the flux loop as needed.
  - [ ] `Map`
- add markers to map to display the location of profiles
- add filtering to map
  - [ ] update backend with proper methods to return profiles within params
- [ ] Test api methods then the map component with Seed data

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Cities (0.5 days)

**Objective:** Cities are searchable.

- [ ] create `City` model
- build out API, Flux loop, and components for:
  - [ ] `Cities`

### Phase 7: Home Page (1.5 day)

**Objective:** Create appealing home page s

- [ ] Integrate React-Bootstrap.

- implement home page components
  - [ ] `Navbar`
  - [ ] `SplashScreen`
  - [ ] `SearchBar`
  - [ ] `Footer`
- Use CSS to style new views

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Messaging in app instead of using Email
- [ ] List cities matching search input in dropdown
- [ ] Add video splash view for home page

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
