# OAuth

* Note the username, password, client id and client secret printed in the console when the application starts-up.
* Invoke the following request to get an OAuth token: (replace <...> placeholders with the values printed in the console as described above)
```
POST http://localhost:1337/oauth/token
Content-Type: application/x-www-form-urlencoded  

grant_type=password&client_id=<client_id>&client_secret=<client_secret>&username=<username>&password=<password>
```
* The above would return a json response (sample below):
```javascript
{
    "access_token": "cfe43c7d-eac6-4f3e-8cb7-2af621445ffd",
    "refresh_token": "2174c6e7-4eaf-4601-8008-b64c64df798b",
    "expires_in": 3600,
    "token_type": "Bearer"
}
```
* Invoke a API endpoint to verify OAuth is action: (replace the <access_token> with the "access_token" value from the above response)
```
GET http://localhost:1337/social/index
Authorization: BEARER <access_token>
```
* Invoke the same request but without Authorization header, HTTP 401 should be returned indicating that the  client is not authenticated to invoke the request.
```
GET http://localhost:1337/social/index
```