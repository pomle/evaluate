#! /usr/bin/env bash

cd web-client
git init
git add .
git commit -m "Heroku Branch"

git push $REPOSITORY_URL HEAD:$BRANCH -f
