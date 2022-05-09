# Instakidz 🕵🏾‍♂️👧🏻

## Description

Instakidz is a place for kids to hang out together in a safe, fun, and secure environment away from weirdos and the big bad mean INTERNET >=[. This app was designed in Figma and utilizes Python & Django for authentication, PostgresSQL to handle the database models, React for visually functional components and dynamically rendered states, and lastly Amazon S3 for image hosting.

## Instakidz Relevant Links

# Website Domain Link

https://www.instakidz.com/

# Back-end Link

https://slothstagram.herokuapp.com/

## Technologies Used

<p float="left">
<img src="https://img.icons8.com/fluency/48/000000/python.png"/>
<img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
<img src="https://img.icons8.com/color/48/000000/django.png"/>
<img src="https://img.icons8.com/color/48/000000/amazon-s3.png"/>
<img src="https://img.icons8.com/dusk/48/000000/react.png"/>
<img src="https://img.icons8.com/color/48/000000/figma--v1.png"/>
</p>

## Initial set-up

- Clone this repository.
- Create python virtual environment and make all changes within this environment.
- Install dependencies.

## Virtual environment

<details>
<summary>Steps to create, use, & deactivate virtual environment</summary>
<br>

    Create:  mkvirtualenv slothstagram

    Connect: workon slothstagram

    Disconnect: deactivate

</details>

## Managing virtual environment

This project uses VirtualEnvWrapper to manage the python virtual environment. For more information on how this works, please visit the link below:

`https://virtualenvwrapper.readthedocs.io/en/latest/`

# Project Dependencies

<details>
<summary>Click to view main dependencies used</summary>
<br>
  <ul>
    <li>Django</li>
    <li>Django Rest Framework</li>
    <li>Psycopg2-binary</li>
    <li>Whitenoise</li>
    <li>Dotenv</li>
    <li>Gunicorn</li>
    <li>DJ Database URL</li>
  </ul>
</details>

## Installing Dependencies

- View `requirements.txt` in `back-end` for dependencies
- Run `pip install -r requirements.txt` to install dependencies

## Connecting to PostgreSQL DB

To connect to our PostgreSQL database, we need to run a script file in our terminal with the following command:

```
psql -f create-database.sql
```

This command will create the database for us, create a user, and grant that user access to the database.

## Front-end setup

To setup our front-end we need to navigate to our front-end directory and run the following command:

```
npm install
```

This command will install all of the dependencies we are using for this project which is located in the package.json file at the root of our front-end directory.

## Routes

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| `GET`  | /photos  | Retrieves all photos. |
| `GET`  | /user    | Retrieves all users.  |
| `POST` | /photos  | Creates one photo.    |
| `POST` | /user    | Creates one user.     |

## Back-end Deployment

In order to deploy any changes to the back-end we need to run the following command:

```
git subtree --prefix back-end/ origin main
```

## Front-end Deployment

We've deployed our front-end to Netlify so that it automatically updates whenever there is a merge into the main branch.

## Image Hosting

Images are hosted on Amazon S3. Actual image data is sent to Amazon S3, which returns a url to be stored in our server as a string.

Upon user selection on the front-end, Django confirms that the image is within certain file and size parameters, notifying the user. If the image meets those parameters then the user may select another image or proceed, which triggers the upload to S3. If it does not meet the file type and size requirements, the user must select a different image or navigate to another page.

As the image is succesfully uploading to S3 and the url is being generated, a loading state is displayed.

Upon successful receipt of the url string to the back-end, the user is routed to the home page, where they can see that their post is the newest addition to the post stack.

# Meet the Team

`Project Manager:`
Tyler Lane (they/them)

[![](https://github.com/Underwaterr.png?size=100)](https://github.com/Underwaterr)

`Contributor:` Ainsley Brundage (he/him)

[![](https://github.com/AinsleyB29.png?size=100)](https://github.com/AinsleyB29)

`Contributor:` Scott Diekema (he/him)

[![](https://github.com/officecowboy.png?size=100)](https://github.com/officecowboy)

`Contributor:` James Thompson (he/him)

[![](https://github.com/Jtiv.png?size=100)](https://github.com/Jtiv)

`Contributor:` Melissa Minh Tran (she/her)

[![](https://github.com/mcmtnyc.png?size=100)](https://github.com/mcmtnyc)

`Contributor:` Emil Terrero (he/him)

[![](https://github.com/emilterrero.png?size=100)](https://github.com/emilterrero)

`Contributor:` Guangjian Bao (he/him)

[![](https://github.com/johndreamfuture.png?size=100)](https://github.com/johndreamfuture)


`Contributor:` Kevin Lin (he/him)

[![](https://github.com/Linkevin1997.png?size=100)](https://github.com/Linkevin1997)

`Contributor:` Lyndon St. Luce (he/him)

[![](https://github.com/LyndonYRB.png?size=100)](https://github.com/LyndonYRB)

`Contributor:` Andrew Manuel (he/him)

[![](https://github.com/drainodrew.png?size=100)](https://github.com/drainodrew)

`Contributor:` <a href="https://github.com/NasimAkbor">Nasim Akbor (he/him)</a>
