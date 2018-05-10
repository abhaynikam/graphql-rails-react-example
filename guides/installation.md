# Installation

## Dependencies

Following are some major dependencies which should be installed to get started with the application.

 - Rails 5.1.4
 - ruby 2.5.1
 - [graphql](https://github.com/rmosolgo/graphql-ruby)
 - [graphiql-rails](https://github.com/rmosolgo/graphiql-rails)
 - [webpacker](https://github.com/rails/webpacker)
 - [react-rails](https://github.com/reactjs/react-rails)

### Installing GraphQL and GraphiQL

 To install GraphQL and GraphiQL to the application. Add following gems to the gemfile
```ruby
<!-- Gemfile -->

# for building APIs
gem "graphql", "~> 1.7"

# for browser based query interface
gem "graphiql-rails", "~> 1.4"
```
then bundle the gems.
```bash
$ bundle install
```

Use GraphQL generator to add default files
```bash
$ rails generate graphql:install
```
After this, you may need to run `bundle install` again, as by default graphiql-rails is added on installation.

## Installing Webpacker and react-rails

 To install webpacker and react-rails to the application. Add following gems to the gemfile


```ruby
<!-- Gemfile -->

# for managing javascript modules.
gem 'webpacker', '~> 3.4'

# for helpers to render components in view or controllers.
gem 'react-rails', '~> 2.4'
```
then bundle the gems.
```bash
$ bundle install
```
run following to install Webpacker:

```bash
$ bundle

$ bundle exec rails webpacker:install
```

To use Webpacker with [React](https://facebook.github.io/react/)

```bash
$ bundle exec rails webpacker:install:react
```

To add rails-react to the application

```bash
$ rails generate react:install
```
Link the JavaScript pack in Rails view using  `javascript_pack_tag`  [helper](https://github.com/rails/webpacker#usage), for example:

```ruby
<!-- application.html.erb -->
<%= javascript_pack_tag 'application' %>
```

## Installing foreman

```bash
$ gem install foreman
```

Add file `Procfile.dev` to start multiple servers and get started with coding
```ruby
<!-- Procfile.dev -->

web: bundle exec rails s -p 3000
webpacker: ./bin/webpack-dev-server
```

Hit following command to start with coding.
```bash
$ foreman start -f Procfile.dev
```
