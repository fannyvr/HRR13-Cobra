Create a trip under a user
  POST  /api/trips/create
    {
      "userId": "56c6b3e655570c8653465014",
      "destination": "California",
      "startDate": "02/22/2016"
    }

    OUTPUT
    succes: 201
    failure: 404

Modify a trip
  PUT /api/trips/modify
  {
    "userId": "56c6b3e655570c8653465014",
    "destination": "California",
    "startDate": "02/22/2016"
  }

  OUTPUT
  success: 'modified' as a String
  error: 'failed' as a String

Remove a trip
  POST /api/trips/remove
  {
    "userId": "56c6b3e655570c8653465014",
    "destination": "California",
    "startDate": "02/22/2016"
  }

  OUTPUT
  success: 'ok' as a String
  error: 'failed' as a String


Get all trips
  GET /api/users/alltrips
  
  OUTPUT
  200: array of trips

Signup
  POST /api/users/signup
  {
    "username": "beachboys",
    "password": "rollingstone"
  }

Sign in
  POST /api/users/signin
    {
      "username": "thebeatles",
      "password": "rollingstone"
    }

  OUTPUT
  success: 
    {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRoZWJlYXRsZXMiLCJpYXQiOjE0NTYxNjg2MTUsImV4cCI6MTQ1NjI1NTAxNX0._d_NL5WnCzRe_nddVD9fRFkH1dnGFgIqctkAQamT3Ww",
      "found": [
        {
          "_id": "56c6e5c98918df7658931588",
          "userId": "56c6b3e655570c8653465014",
          "destination": "georgia",
          "startDate": "1970-01-01T00:00:00.123Z",
          "__v": 0
        },
        {
          "_id": "56cb4c7c7e15cb6f3b3199cf",
          "userId": "56c6b3e655570c8653465014",
          "destination": "portland",
          "startDate": "1970-01-01T00:00:00.123Z",
          "__v": 0
        }
      ]
    }

Logout - Expect redirection to homepage
  GET api/users/logout



