#! /usr/bin/env bash
BRANCH=tests
WORKDIR=build

if ! git clone --single-branch -b $BRANCH $CIRCLE_REPOSITORY_URL $WORKDIR;
  then
    mkdir -p $WORKDIR
fi

cd challenges
yarn
./build-all

cd -
cp -R challenges/build/* $WORKDIR/
cd $WORKDIR

git add .
if git commit -m "Deploy $CIRCLE_SHA1";
  then
    git push $CIRCLE_REPOSITORY_URL HEAD:$BRANCH
fi
