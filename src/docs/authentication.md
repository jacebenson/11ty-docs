---
title: Authentication
---
# Authentication

TskrBase uses cookie based authentication.  This is how RedwoodJS's dbAuth is implemented.  The user is authenticated by the server and the client is given a cookie.  The cookie is then sent to the server on every request.  The server then checks the cookie and if it is valid, the user is authenticated.  If the cookie is invalid, the user is not authenticated.

Every request to a page also includes a check that the user is logged in and calls to get their appropriate roles.

## How it works

On the [RedwoodJS Community](https://community.redwoodjs.com/t/dbauth-is-here-host-your-own-authentication-the-old-fashioned-way/2267#how-it-works-3) Cannikan wrote up how this works.  
> For those interested in the nitty gritty details, read on. Redwood’s dbAuth is modeled on the simple authentication systems recommended by, big surprise, Rails development before there were lots of packages (Ruby calls them “gems”) that would do it for you:
> - Store a hashed password and salt 4 along with the user record in the database.
> - When a user tries to log in, grab them by the username they entered (probably an email address) and then salt and hash their submitted password. If it matches the hashed password in the database, then we trust that they are them.
> - Create an encrypted cookie containing the user’s id (the cookie is also marked as HttpOnly 1, Secure and SameSite). The encryption key is an environment variable called SESSION_SECRET that’s created when the setup command is run.
> - On each and every request to the api side, make sure the cookie can be decrypted and double check that the user still exists in the database.
> - On logout, remove the cookie by setting the expiration date to the epoch (Jan 1, 1970).

Passwords are encrypted using crypto-js.  Each user has a unique SALT, and on each password change the salt is changed to a new random value.  This is done to prevent rainbow table attacks.  The password is then encrypted using the salt and the password is then stored in the database.

What this didn't handle was the changing of passwords values.

When changing a password value we use crypto-js to encrypt the password with a new salt.  This is done to prevent rainbow table attacks.  The salt is then stored in the database.  You can see how this is accomplished [here on Github](https://github.com/tskrio/tskrBase/blob/main/api/src/middlewares/user/hashPassword.js) with a [middleware](/docs/middleware).