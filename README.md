# Education App
This API performs POST, GET, PUT and DELETE.
This API is about a store and has two end points users and courses. 
For the elaboration of this API we used the JavaScript, NodeJS, express and mongoDB

## Prerequisites 🚀

1. Install Windows 10    
2. Install Node.js version 8.9.4.
3. Install docker mongo:4.1

## Installation 🔧

1. Clone Repository
2. Install Dependencies: npm install
3. Configure config.js with app host:port
4. Configure config.js with docker host:port

## Usage (Execute) ⚙️

1. npm start

### USERS
```
GET USERS
{Host}:{Port}/api/v1/users
{Host}:{Port}/api/v1/users/{user_id}
http://localhost:3001/api/v1/users
http://localhost:3001/api/v1/users/{user_id}
{
    "user": [
        {
            "_id": 9928025,
            "nick_name": "rseveric",
            "password": "pass123",
            "name": "Richard",
            "last_name": "Severich",
            "career": "Systems engineer",
            "email": "richard.severich@gmail.com",
            "type": "Engineer"
        }
}

POST USERS
{Host}:{Port}/api/v1/users
http://localhost:3001/api/v1/users
BODY:
{
    "_id": 45215856,
    "nick_name": "helmer",
    "password": "pass123",
    "name": "Elmer",
    "last_name": "Hermosa",
    "career": "Systems enginee",
    "email": "Elmer.Hermosa@gmail.com",
    "type": "Training"
}

PUT USERS
{Host}:{Port}/api/v1/users/{user_id}
http://localhost:3001/api/v1/users/45215856
BODY:
{
    "nick_name": "hermosa",
    "password": "pass555",
    "name": "Elmer",
    "last_name": "Hermosa",
    "career": "Electronic enginee",
    "email": "Elmer.Hermosa@gmail.com",
    "type": "Training"
}

DELETE USERS
{Host}:{Port}/api/v1/users/{user_id}
http://localhost:3001/api/v1/users/45215856
```

## Contributing 🖇️

1. Fork it!
2. Create your feature branch: `git checkout -b issue/O&D-15632`
3. Commit your changes: `git commit -m 'O&D-15632: Add some feature'`
4. Push to the branch: `git push origin issue/O&D-15632`
5. Submit a pull request.

## Credits ✒️

Richard Severich

## License 📄
* Copyright (c) 2019 by Richard Severich.  All Rights Reserved.
* This software is the confidential and proprietary information of
* Richard Severich. ("Confidential Information").
* You may not disclose such Confidential Information, and may only
* use such Confidential Information in accordance with the terms of
* the license agreement you entered into with Richard Severich.
