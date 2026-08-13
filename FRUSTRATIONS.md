# Frustrations and Workarounds

This log captures recurring failure modes and the shortest known path around them. Keep entries concise and reusable.

## 2026-08-13: Jekyll is missing under the default macOS Ruby

- Symptom: `bundle exec jekyll build` reports `bundler: command not found: jekyll`, while `ruby -v` reports 2.6.x.
- Cause: non-interactive shells may not initialize chruby and therefore fall back to Apple's system Ruby, even though Ruby 3.1.2 and the bundle are already installed.
- Workaround: use `make build`, `make check`, or `make server`; these targets select `ruby-3.1.2` through chruby. For ad hoc commands, source `$(brew --prefix chruby)/share/chruby/chruby.sh` and run `chruby ruby-3.1.2` first.

## 2026-08-13: Jekyll reports a duplicate watched directory

- Symptom: the development server prints `ERROR: directory is already being watched` for `.claude/skills` through `.agents/skills`.
- Cause: the same skills directory is reachable through two repository paths.
- Workaround: treat the message as harmless when Jekyll also prints `Server running`; verify `http://127.0.0.1:4000/blog/` returns HTTP 200 before investigating further.

## 2026-08-13: GitHub CLI works but the Git remote fails

- Symptom: `gh auth status` succeeds, but `git ls-remote origin` or `git push origin master` reports `Permission denied (publickey)`.
- Cause: `origin` uses an SSH URL while the active GitHub CLI account is configured for authenticated HTTPS operations.
- Workaround: confirm the active account is `chase-seibert`, then run `git remote set-url origin https://github.com/chase-seibert/blog.git`. Recheck `git remote -v` before pushing.

## 2026-08-13: The Pages workflow succeeds with Node deprecation warnings

- Symptom: a successful Actions run warns that action dependencies target deprecated Node 20 and are being forced onto Node 24.
- Cause: the workflow pinned `actions/checkout@v3.2.0` and `peaceiris/actions-gh-pages@v3`.
- Workaround: keep the workflow on the supported majors currently recorded in `.github/workflows/jekyll-4-gh-pages.yml`; both use the Node 24 action runtime. Run `make verify-deploy` after changing either action.
