# Chase Seibert's Blog

## Install and run with Docker

The recommended setup only requires [Docker Desktop](https://www.docker.com/products/docker-desktop/). Ruby, Bundler, Jekyll, and the project gems are installed inside the container; no Ruby or gem dependencies are needed on the Mac.

From the repository directory, build the image and verify the site:

```bash
docker compose build
docker compose run --rm --no-deps --env JEKYLL_ENV=production jekyll sh -c 'bundle exec jekyll build && test -s _site/index.html && grep -q "<title>Chase Seibert Blog</title>" _site/index.html'
```

## Run the server

### Local development

```bash
docker compose up jekyll
```

Open <http://127.0.0.1:4000/blog/> in a browser. The repository is mounted into the container, so edits on the Mac are picked up by Jekyll. Stop the server with `Ctrl-C`, then remove the Compose container with:

```bash
docker compose down
```

The Docker development server uses the local `minimal-mistakes-jekyll` gem instead of downloading the remote theme on every start.

To test the GitHub Pages configuration inside Docker, use:

```bash
docker compose run --rm --service-ports --env JEKYLL_ENV=development jekyll bundle exec jekyll serve --incremental --watch --drafts --host 0.0.0.0 --port 4000
```

This starts Jekyll without the development config override, so it downloads the remote theme just like GitHub Pages does.

The equivalent Makefile shortcuts are `make docker-setup`, `make docker-check`, `make docker-server`, `make docker-github`, and `make docker-down`.

## Local Ruby setup (optional)

The existing local commands remain available if Ruby 3.1.2 and the bundle are already installed:

```bash
make server
make check
```

The Makefile selects Ruby 3.1.2 through chruby for these commands. Use the Docker commands above if you do not want to install Ruby, Bundler, or gems on the Mac.

### Test GitHub Pages mode locally
```bash
make github
```

This runs Jekyll without the dev config override, so it will download the remote theme just like GitHub Pages does. Use this to verify the site will work correctly when deployed.
