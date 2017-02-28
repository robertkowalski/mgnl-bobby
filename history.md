# bobby



```
cd projects
# my mgnl modules are prefixed mgnl-
mkdir mgnl-bobby
cd mgnl-bobby
mkdir test
npm init
git init
git remote add origin git@github.com:robertkowalski/mgnl-bobby.git
git add .
git ci -m "first commit"
git push origin master


mgnl create-light-module react-playground

# move back
mv react-playground/* .

# mount
mv mgnl-bobby ~/magnolia/light-modules

# load dummy app.js in ftl file

touch .babelrc
touch webpack.config.js

npm i --save-dev mocha
npm i --save-dev babel babel-preset-react babel-loader babel-core babel-preset-es2015 webpack
npm i --save react react-dom
# alter package.json scripts


# create a gitignore to not commit node_modules
touch .gitignore

# i want to use a popular calendar component
# https://github.com/airbnb/react-dates

(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)


npm install css-loader --save-dev
npm install style-loader --save-dev

# alter webpack.config.js for css loader

# fix compile issue
npm install --save-dev babel-preset-airbnb

npm run build

# gitignore webresources/

# setup a select field
npm install react-select --save

##
## publishing
##
# basic publish
npm version 0.0.2
npm publish
git push origin master --tags

# packing local tarball
npm pack
open mgnl-bobby-0.0.2.tgz


# retrieving with git
git clone https://github.com/robertkowalski/mgnl-bobby.git -b 'v0.0.2' --single-branch --depth 1


# curl / wget
# get latest version
curl http://registry.npmjs.org/mgnl-bobby/latest | jq '.dist.tarball'

wget https://registry.npmjs.org/mgnl-bobby/-/mgnl-bobby-0.0.2.tgz
mkdir mgnl-bobby
tar --strip-components=1 -zxf mgnl-bobby-0.0.2.tgz -C ./bobby
rm -rf mgnl-bobby-0.0.2.tgz
```
