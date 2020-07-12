# jasonsturges.github.io

To run with JRuby via brew

```shell script
env RBENV_VERSION=jruby-9.1.17.0 /usr/local/Cellar/rbenv/1.1.2/libexec/rbenv exec jekyll serve
```

To run via Docker, cd into project and execute docker.

Development:
```shell script
export JEKYLL_VERSION=3.8
docker run --rm --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts
```

Build:
```shell script
export JEKYLL_VERSION=3.8
Docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:$JEKYLL_VERSION jekyll build
```


Deploy:
```shell script
rm -rf _site
env RBENV_VERSION=jruby-9.1.17.0 /usr/local/Cellar/rbenv/1.1.2/libexec/rbenv exec jekyll build
cd _site && aws s3 sync . s3://jasonsturges.com --delete
cd ..
```
