#! /usr/bin/env bash
OUTDIR=build
mkdir -p $OUTDIR

./build.js javascript > javascript.blob
mv javascript.blob $OUTDIR/$(shasum javascript.blob | cut -b 1-36 | base64 | cut -b 1-12)
