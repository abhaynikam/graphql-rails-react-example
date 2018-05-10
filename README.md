[![Circle CI](https://circleci.com/gh/bigbinary/wheel.png?style=badge)](https://circleci.com/gh/bigbinary/wheel)

## TOC
* [About](#about)
* [Local Development Setup](#local-development-setup)
* [Running with Docker](#running-with-docker)

## About

This is a base project to quickly spin up a
Rails application which is built with
opinions of BigBinary team.

## Local Development Setup
Install the latest [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.

```
bundle install
bundle exec rake setup
bundle exec rails server
```

Visit http://localhost:3000 and login with email sam@example.com and password welcome.

##  Running with Docker

### Pre-Requesites

Make sure you have [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

### Starting rails

```
docker-compose up
```

After the container is successfully created you should be able to access your app on `http://localhost:9000`


#### Brought to you by

<a href='http://BigBinary.com'><img src="https://github.com/bigbinary/bigbinary-assets/blob/press-assets/PNG/logo-light-square.png" width="200px"/></a>
