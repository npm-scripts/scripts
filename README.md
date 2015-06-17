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
