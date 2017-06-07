run docker_build.sh to build the Dockerfile image
run docker_run.sh to create and run the docker container

/opt/google/chrome/chrome --headless --disable-gpu --no-sandbox --print-to-pdf https://www.espn.com

cp output.pdf /pdf

open up the pdf file in your host machine to view the results

Resources:
https://chromium.googlesource.com/chromium/src/+/lkcr/docs/linux_build_instructions.md#Instructions-for-Google-Employees
https://developers.google.com/web/updates/2017/04/headless-chrome
