# DevOps : A demo of tools and best-practices
[![build](https://github.com/martinmouly/poc-devops-itt/actions/workflows/build.yml/badge.svg)](https://github.com/martinmouly/poc-devops-itt/actions/workflows/build.yml)
[![deploy](https://github.com/martinmouly/poc-devops-itt/actions/workflows/deploy.yml/badge.svg)](https://github.com/martinmouly/poc-devops-itt/actions/workflows/deploy.yml)





[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=martinmouly_poc-devops-itt&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=martinmouly_poc-devops-itt&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=martinmouly_poc-devops-itt&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=martinmouly_poc-devops-itt&metric=bugs)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=martinmouly_poc-devops-itt&metric=coverage)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=martinmouly_poc-devops-itt)](https://sonarcloud.io/summary/new_code?id=martinmouly_poc-devops-itt)  




This project aims to demonstrate the common tools and best-practices around DevOps methodology. DevOps is the standard methodology in the software development process. Used as a set of practices and tools, DevOps integrates and automates the work of software development (Dev) and IT operations (Ops) as a means for improving and shortening the systems development life cycle. DevOps methodology allow teams working on software development projects to deliver new version of their product very frequently, and enhances the agility and flexibility of the processes.


The code stored in this repository is our mock web app. It's a simple CRUD web application allowing a user to create, read, update and delete users. The stack used for the web app is NodeJS Express with EJS, and we used MongoDB as our DBMS.

## For local development
If you want to use this project to demonstrate DevOps tools and best-practices, or if you simply want to participate in the project's maintenance, you might need to start the project in a local environment.
To start the project in a local environment : 
- Create a .env file in the root folder and add these 2 variables :
  ```
  MONGO_URI="<mongo_uri>"
  HOST_URL="http://localhost:3000"
  ```
  Ask Martin Mouly or Soulemanou Ngbango for the MONGO_URI variable. It containes the credentials to connect to the MongoDB database.

- Once you've added the .env file, you're good to go, simply run these 2 commands to build the project and start the local server :
  ```
  npm install
  ```
  ```
  npm start
  ```

Finally, go to http://localhost:3000 to visualize the app.

