# Collection of useful npm-scripts!

<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
## minor-release

Publish a minor release of a package

```js
"scripts": {
  "minor-release: "npm version patch && npm publish && git push --follow-tags"
}
```

## patch-release

Publish a patch release of a package

```js
"scripts": {
  "patch-release: "npm version patch && npm publish && git push --follow-tags"
}
```

## major-release

Publish a major release of a package

```js
"scripts": {
  "major-release: "npm version major && npm publish && git push --follow-tags"
}
```

## Bower postinstall

Bower install before npm

```js
"scripts": {
  "postinstall: "bower install"
}
```

## gh-pages

Pushs a folder (f.e. `docs`) to the `gh-pages` branch.

```js
"scripts": {
  "update-gh-pages: "git push origin `git subtree split --prefix docs master`:gh-pages --force"
}
```

<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->
