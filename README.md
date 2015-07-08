# Collection of useful npm-scripts!

<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## minor-release

Publish a minor release of a package

```js
"scripts": {
  "minor-release": "npm version patch && npm publish && git push --follow-tags"
}
```

## patch-release

Publish a patch release of a package

```js
"scripts": {
  "patch-release": "npm version patch && npm publish && git push --follow-tags"
}
```

## major-release

Publish a major release of a package

```js
"scripts": {
  "major-release": "npm version major && npm publish && git push --follow-tags"
}
```

## clean-up

Clean your git repo state. All dirty files will be moved to the stash. It’s useful when transpiling code before publishing to NPM.

```js
"scripts": {
  "clean-up": "git reset && echo '/node_modules/' > .gitignore && git add .gitignore && git stash save --include-untracked --keep-index '`npm run clean-up` trash can' && git clean --force -d && git reset --hard && echo '
clean-up: All unstaged and ignored files within your git repo – except node_modules/* – have been moved to the stash. To restore them run `git stash pop --quiet; git checkout .gitignore`."
}
```

## Bower postinstall

Bower install before npm

```js
"scripts": {
  "postinstall": "bower install"
}
```

## gh-pages

Pushs a folder (f.e. `docs`) to the `gh-pages` branch.

```js
"scripts": {
  "update-gh-pages": "git push origin `git subtree split --prefix docs master`:gh-pages --force"
}
```

## develop

Watch JS files and run `npm test` on every change. Remember to `npm install --save-dev nodangel` before using this.

```js
"scripts": {
  "develop": "nodangel --ignore node_modules --ignore coverage --exec 'npm run --silent test'"
}
```

## diffy-package

Make the package.json more diff-friendly. Remember to `npm install --save-dev format-json mve` before adding this script. Add `"postversion": "npm run diffy-package"` as well to auto-format the package file after a version bump. Add `"postinstall": "npm run diffy-package"` if you’re not writing a library – your package file will be reformatted every time you run `npm install --save`.

```js
"scripts": {
  "diffy-package": "format-json package.json > .temp; mve .temp package.json"
}
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
