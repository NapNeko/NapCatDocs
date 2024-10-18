cd ..
mkdir temp
GITHUB_URL=https://oauth:${NapCat_GH_TOKEN}@github.com/NapNeko/napneko.github.io
git clone ${GITHUB_URL} temp

rm -rf temp/*
mv ./NapCatDocs/src/.vitepress/dist/* temp

cd ./temp

git config --global init.defaultBranch main
git remote add origin ${GITHUB_URL}
git branch -M main

git config --global user.name "Page Build"
git config --global user.email "test@wumiao.wang"
git add *
git commit -m "docs: auto update"
git push -f