## Easy steps:

* [Fork](https://github.com/npm-scripts/scripts/network) the repo.

* Install the deps:
 ```sh
  $ cd scripts && npm install
  ```

* Edit [scripts.json](./scripts.json) to add your script in the below format:

```js
{
  "title": "<title_of_your_script>",
  "description": "<description>",
  "key": "<title_or_key>",
  "script": "<your_script>",
  "keywords": [
    "npm",
    "<so_on"
  ],
  "dependencies: [
    "all-deps"
  ]
}
```

* Commit, push and send a PR!
