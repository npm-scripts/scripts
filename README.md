# Collection of useful npm-scripts!

## TOC

<!-- @doxie.inject start toc -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
* [patch-release](https://github.com/npm-scripts/scripts#patch-release)
* [minor-release](https://github.com/npm-scripts/scripts#minor-release)
* [major-release](https://github.com/npm-scripts/scripts#major-release)
* [clean-up](https://github.com/npm-scripts/scripts#clean-up)
* [Bower postinstall](https://github.com/npm-scripts/scripts#bower-postinstall)
* [gh-pages](https://github.com/npm-scripts/scripts#gh-pages)
* [develop](https://github.com/npm-scripts/scripts#develop)
* [diffy-package](https://github.com/npm-scripts/scripts#diffy-package)
* [push tags](https://github.com/npm-scripts/scripts#push-tags)

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end toc -->


<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## patch-release

Publish a patch release of a package

```json
"scripts": {
  "patch-release": "npm version patch && npm publish && git push --follow-tags"
}
```

## minor-release

Publish a minor release of a package

```json
"scripts": {
  "minor-release": "npm version minor && npm publish && git push --follow-tags"
}
```

## major-release

Publish a major release of a package

```json
"scripts": {
  "major-release": "npm version major && npm publish && git push --follow-tags"
}
```

## clean-up

Clean your git repo state. All dirty files will be moved to the stash. It’s useful when transpiling code before publishing to NPM.

```json
"scripts": {
  "clean-up": "git reset && echo '/node_modules/' > .gitignore && git add .gitignore && git stash save --include-untracked --keep-index '`npm run clean-up` trash can' && git clean --force -d && git reset --hard && echo '\nclean-up: All unstaged and ignored files within your git repo – except node_modules/* – have been moved to the stash. To restore them run `git stash pop --quiet; git checkout .gitignore`."
}
```

## Bower postinstall

Bower install before npm

```json
"scripts": {
  "postinstall": "bower install"
}
```


Install the dependencies `npm i bower --save-dev`

## gh-pages

Pushs a folder (f.e. `docs`) to the `gh-pages` branch.

```json
"scripts": {
  "update-gh-pages": "git push origin `git subtree split --prefix docs master`:gh-pages --force"
}
```

## develop

Watch JS files and run `npm test` on every change. Remember to install the dependencies before using this.

```json
"scripts": {
  "develop": "nodangel --ignore node_modules --ignore coverage --exec 'npm run --silent test'"
}
```


Install the dependencies `npm i nodangel --save-dev`

## diffy-package

Make the package.json more diff-friendly. Remember to install the dependencies before adding this script. Add `"postversion": "npm run diffy-package"` as well to auto-format the package file after a version bump. Add `"postinstall": "npm run diffy-package"` if you’re not writing a library – your package file will be reformatted every time you run `npm install --save`.

```json
"scripts": {
  "diffy-package": "format-json package.json | sponge package.json"
}
```


Install the dependencies `npm i format-json sponge --save-dev`

## push tags

Git push relevant annotated tags when pushing branches out.

```json
"scripts": {
  "push": "git push --follow-tags"
}
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
