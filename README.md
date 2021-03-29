# Plants API

### BASE URL: https://plants-buildweek41.herokuapp.com

# ENDPOINTS:

## AUTHENTICATION

#### [_**POST**_](SIGN-UP) /api/auth/register: username || password, and phone_number required. username must be unique

#### [_**POST**_](LOGIN) /api/auth/login || username, password, and phone_number required.

## USERS

#### [_**GET**_] /api/users/:id || returns array of a single user in the db. **only needed for displaying personal information / greeting user.**

#### {_**PUT**_} /api/users/:id
