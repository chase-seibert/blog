# Chase Seibert's Blog

## Install

See: https://jekyllrb.com/docs/quickstart/

```bash
brew install chruby ruby-install
ruby-install ruby
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bash_profile
# restart terminal
chruby
# copy actual version number below
echo "chruby ruby-3.1.2" >> ~/.bash_profile
ruby-install ruby
# restart terminal
ruby -v
gem install jekyll
bundle install
```

## Run the server

### Local development (fast, works offline)
```bash
make server
```

This uses the local `minimal-mistakes-jekyll` gem instead of downloading the remote theme on every start. Works offline!

The Makefile runs Jekyll with `--config _config.yml,_config_dev.yml` to override the plugins list and disable `jekyll-remote-theme` for local development.

### Test GitHub Pages mode
```bash
make github
```

This runs Jekyll without the dev config override, so it will download the remote theme just like GitHub Pages does. Use this to verify the site will work correctly when deployed.
