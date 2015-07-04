# Collection of useful npm-scripts!

## Release 

```js
"scripts": {
  "minor-release": "npm version patch && npm publish && git push --follow-tags",
  "patch-release": "npm version patch && npm publish && git push --follow-tags",
  "major-release": "npm version major && npm publish && git push --follow-tags"
}
```

## Bower install before npm 

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
