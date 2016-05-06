User.create(email: "Guest", password: "1234567");

# 10.times do |i|
#   i = i.to_i
#   charles = User.create(email: "Charles#{i}", password: "1234567");
#   Profile.create!(
#     user_id: i,
#     profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1461952627/kwe0lerlmgdaggz8fwir.jpg',
#     name: charles.email,
#     age: i + 23,
#     description: "asdfasd",
#     location: "1#{i}0 Spear St, San Francisco, CA",
#     lat: 37.791039 + (i * 0.001),
#     lng: -122.394853,
#     search_status: "Active",
#     smoker: false,
#     pet: "Dog",
#     diet: "Vege",
#     budget: 9001
#   )
# end

# San Francisco

User.create!(email: "VanessaHunter26@gmail.com", password: "1234567");
Profile.create!(
  user_id: 0,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462573634/profile-1_iguqo9.jpg',
  name: 'Vanessa Hunter',
  age: 21,
  description: "Just going to school and work. Taking it day by day, pretty much.",
  location: "993 Filbert St, San Francisco, CA",
  lat: 37.8004868,
  lng: -122.4162688,
  search_status: "Active",
  smoker: true,
  diet: "Vege",
  pet: "Dog",
  budget: 1240
)

User.create!(email: "AlexReed24@gmail.com", password: "1234567");
Profile.create!(
  user_id: 1,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462573791/profile-2_ytqce2.jpg
',
  name: 'Alex Reed',
  age: 19,
  description: "Audio engineering student
Animal enthusiast
World's okayest bassist
Professional weirdo
5 year old at heart",
  location: "900-998 Webster St, San Francisco, CA",
  lat: 37.7797919,
  lng: -122.4323592,
  search_status: "Passive",
  smoker: false,
  diet: "Vegan",
  pet: "Cat",
  budget: 1452
)

User.create!(email: "JohnWilis56@gmail.com", password: "1234567");
Profile.create!(
  user_id: 2,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462573862/profile-3_g6imxu.jpg
',
  name: 'John Wilis',
  age: 51,
  description: "I went to school in the east coast, but now I work for a major software company where I work up the corporate ladder. I very busy. I love hiking, watching baseball, and bbq on weekends.",
  location: "2999 Mission St, San Francisco, CA",
  lat: 37.7492274,
  lng: -122.420093,
  search_status: "Don't contact",
  smoker: true,
  diet: "Gluten",
  pet: "Bird",
  budget: 1956
)

User.create!(email: "AshleyBre37@gmail.com", password: "1234567");
Profile.create!(
  user_id: 3,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462573906/profile-4_jedvet.jpg
',
  name: 'Ashley Bre',
  age: 32,
  description: "My name is Ashley and I'm really bad at these. I'm currently working at Disneyland while I try to figure my life out. As of right now I want to be a nurse or an ultrasound tech but my mind changes like the wind, I'm hoping to go back to school in the fall. I'm really into anything old, creepy, and paranormal, baking, hiking, and just about anything that will get me out of my house.",
  location: "1119 Cole St, San Francisco, CA",
  lat: 37.764565,
  lng: -122.4555402,
  search_status: "Active",
  smoker: false,
  diet: "Other",
  pet: "Other",
  budget: 1152
)

# New York

User.create!(email: "JacobMason33@gmail.com", password: "1234567");
Profile.create!(
  user_id: 4,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574326/profile-5_jkqstf.jpg
',
  name: 'Jacob Mason',
  age: 28,
  description: "So, why not start with a bad stuff – I am impulsive and restless at times, I can’t kill a fly, I cried twice like a girl when I watched 'Notebook', I cuss too often, and stay up way too late way too often. There is something about the nighttime that I find magic, if you will, which keeps me up working or hanging out aimlessly. Can you relate? I have little patience for flakes and fake people – those who smile while being angry on the inside, as I never know what they keep up their sleeve. How about you? What annoyed you today?",
  location: "137 Himrod St, Brooklyn, NY ",
  lat: 40.6973119,
  lng: -73.9250937,
  search_status: "Active",
  smoker: true,
  diet: "Vege",
  pet: "Dog",
  budget: 1753
)

User.create!(email: "TofflerinaBox27@gmail.com", password: "1234567");
Profile.create!(
  user_id: 5,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462567098/profile-6_r60ify.jpg
',
  name: 'Tofflerina Box',
  age: 22,
  description: "Finishing up my 2nd year as a computer engineering major.

I'm a really cheerful and ditzy person, leading to jokes about how things fly over my head way too easily.",
  location: "Vanderbilt Hall, 40 Washington Square S, New York, NY",
  lat: 40.7305445,
  lng: -74.0016795,
  search_status: "Passive",
  smoker: false,
  diet: "Vegan",
  pet: "Cat",
  budget: 1573
)

User.create!(email: "EthanNoah28@gmail.com", password: "1234567");
Profile.create!(
  user_id: 6,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462567097/profile-7_sb1rhw.jpg
',
  name: 'Ethan Noah',
  age: 23,
  description: "I am not good at writing about myself, but my friends say that I am intelligent, professional, educated and ambitious. I like sports and good wine.",
  location: "762 44th St, Brooklyn, NY",
  lat: 40.6447783,
  lng: -74.0031336,
  search_status: "Don't contact",
  smoker: true,
  diet: "Gluten",
  pet: "Bird",
  budget: 1267
)

User.create!(email: "MichaelSmith32@gmail.com", password: "1234567");
Profile.create!(
  user_id: 7,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574256/profile-8_zi55ip.jpg
',
  name: 'Michael Smith',
  age: 27,
  description: "I am a very hard working dedicated person and I live life to it’s fullest. I laugh often and am very optimistic. I think my smile is contagious :) I have young children, ages 8 and 11, that I simply love. My 11 year old is soooo smart that we are able to have intellectual conversations. My 8 year old is fun too but is the complete opposite of the other.

I am a lifetime student and I have 2 undergrad degrees, one graduate, and I’m working on my MBA now. I tell myself I will stop after this one. I guess I just like the challenge",
  location: "37 Wilson St, Brooklyn, NY",
  lat: 40.7036006,
  lng: -73.966636,
  search_status: "Active",
  smoker: false,
  diet: "Other",
  pet: "Other",
  budget: 1654
)

# Chicago

User.create!(email: "WilliamLiam39@gmail.com", password: "1234567");
Profile.create!(
  user_id: 8,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574588/profile-9_zbkazc.jpg
',
  name: 'William Liam',
  age: 34,
  description: "As a person I like to think of myself as confident. I’m a very humble man. I understand that there’s a time to give and be loving and understanding. I also believe in standing up for what I believe and not being walked on. I’m always there for my friends and loved ones. I don’t run from adversity. I care what people think of me because I believe in being the best man I can be. I want people who come across me to think “hey what a cool guy”. It’s not about attention for me. It’s about the importance of ones own honor and respect for those around him.",
  location: "1822 W Warren Blvd, Chicago, IL",
  lat: 41.882763,
  lng: -87.6746137,
  search_status: "Active",
  smoker: true,
  diet: "Vege",
  pet: "Dog",
  budget: 1543
)

User.create!(email: "SophiaMia31@gmail.com", password: "1234567");
Profile.create!(
  user_id: 9,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574629/profile-10_qmh68p.jpg
',
  name: 'Sophia Mia',
  age: 26,
  description: "Audio engineering student
Animal enthusiast
World's okayest bassist
Professional weirdo
5 year old at heart",
  location: "2612 S Christiana Ave, Chicago, IL",
  lat: 41.8440498,
  lng: -87.7108588,
  search_status: "Passive",
  smoker: false,
  diet: "Vegan",
  pet: "Cat",
  budget: 1343
)

User.create!(email: "AidenJohnson23@gmail.com", password: "1234567");
Profile.create!(
  user_id: 10,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574705/profile-11_dyowfj.jpg
',
  name: 'Aiden Johnson',
  age: 18,
  description: "Who am I? . . . I’m Spider-Man. Wait, no, that was a movie! . . . . . I would describe myself as stable in my career and goal-oriented. I enjoy making people laugh. I am intelligent and can carry on meaningful conversations. I care about other people’s feelings.",
  location: "2111 S State St, Chicago, IL",
  lat: 41.8541982,
  lng: -87.6297212,
  search_status: "Don't contact",
  smoker: true,
  diet: "Gluten",
  pet: "Bird",
  budget: 1356
)

User.create!(email: "RobertGarcia34@gmail.com", password: "1234567");
Profile.create!(
  user_id: 11,
  profilePicURL: 'http://res.cloudinary.com/ddodpmqri/image/upload/v1462574758/profile-12_tvlrpq.jpg
',
  name: 'Robert Garcia',
  age: 29,
  description: "I enjoy helping others more than anything else. I would put everything I’m doing on hold if someone I know needed help with anything at all.

I love to travel (the Caribbean being my favorite) and while my immediate family all live here, I have family on the east coast, west coast, and in Southern France. I visit them all as often as possible.

I am incredibly honest and trustworthy. I would expect my match to have the same qualities. That is extremely important.",
  location: "1101 W 43rd St, Chicago, IL",
  lat: 41.8133292,
  lng: -87.6556508,
  search_status: "Active",
  smoker: false,
  diet: "Other",
  pet: "Other",
  budget: 1694
)
