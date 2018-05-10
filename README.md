# Chase's Blog

## Install

See: https://jekyllrb.com/docs/quickstart/

```bash
brew install rbenv ruby-build
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
rbenv install 2.5.1
rbenv global 2.5.1
ruby -v
# open new terminal
gem install jekyll bundler
bundle install
```

## Trouble-shooting

```bash
brew update && brew upgrade
brew doctor
brew uninstall --force ruby
brew install ruby
# close and reopen terminal
```

Big guns:

```bash

sudo chown -R $(whoami) /usr/local/lib/ruby/*
sudo chown -R $(whoami) /Library/Ruby/Gems/2.0.0
brew link ruby
```

## Run the server

```bash
make server
```
