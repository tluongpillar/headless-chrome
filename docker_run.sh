#!/bin/bash

docker run --rm -it -p 9222:9222 -v /Users/tluong/Documents/headless-chrome/pdf:/pdf --name headless-chrome-container headless-chrome
