# jasonsturges.github.io

To run via Docker, cd into project and execute:

### Development

```shell script
docker run --rm --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:4.2.0 jekyll serve --watch --drafts
```

Connect to site via: [http://localhost:3000][1]

### Build

```shell script
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:4.2.0 jekyll build
```

[1]: http://localhost:3000/
