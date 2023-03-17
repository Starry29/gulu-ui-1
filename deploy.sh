rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:Starry29/gulu-website.git
git branch -m main &&
git push -f -u origin main &&
cd ..