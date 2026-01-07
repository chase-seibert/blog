# Chase Seibert's Blog

## Install

See: https://jekyllrb.com/docs/quickstart/

```bash
brew install chruby ruby-install
ruby-install ruby
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bash_profile
# restart terminal 
chruby
# copy actual version number bellow
echo "chruby ruby-3.1.2" >> ~/.bash_profile 
ruby-install ruby
# restart terminal 
ruby -v
gem install jekyll
bundle install
```

## Run the server

```bash
make server
```
