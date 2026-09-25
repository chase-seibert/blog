FROM ruby:3.1.6-slim-bookworm

ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_WITHOUT=""

RUN apt-get update \
    && apt-get install --yes --no-install-recommends build-essential ca-certificates git pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN gem install bundler --version 2.4.22 \
    && bundle config set --local path /usr/local/bundle \
    && bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--config", "_config.yml,_config_dev.yml", "--incremental", "--watch", "--drafts", "--host", "0.0.0.0", "--port", "4000"]
