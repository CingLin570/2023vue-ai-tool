#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://CingLin570.github.io
# git push -f git@github.com:CingLin570/CingLin570.github.io.git main

# if you are deploying to https://CingLin570.github.io/2023vue-ai-tool
git push -f git@github.com:CingLin570/2023vue-ai-tool.git main:gh-pages

cd -
