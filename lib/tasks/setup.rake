# frozen_string_literal: true

desc "Ensure that code is not running in production environment"
task :not_production do
  if Rails.env.production? && ENV["DELETE_PRODUCTION_DATA"].blank?
    puts ""
    puts "*" * 50
    puts "Deleting production data is not allowed. "
    puts "If you really want to delete all production data and populate sample data then "
    puts "you can execute following command."
    puts "DELETE_PRODUCTION_DATA=1 rake setup_sample_data"
    puts " "
    puts "If you are using heroku then execute command as shown below"
    puts "heroku run rake setup_sample_data DELETE_PRODUCTION_DATA=1 -a app_name"
    puts "*" * 50
    puts ""
    throw :error
  end
end

desc "Sets up the project by running migration and populating sample data"
task setup: [:environment, :not_production, "db:drop", "db:create", "db:migrate"] do
  ["setup_sample_data"].each { |cmd| system "rake #{cmd}" }
end

def delete_all_records_from_all_tables
  ActiveRecord::Base.connection.schema_cache.clear!

  Dir.glob(Rails.root + "app/models/*.rb").each { |file| require file }

  ApplicationRecord.descendants.each do |klass|
    klass.reset_column_information
    klass.delete_all
  end
end

desc "Deletes all records and populates sample data"
task setup_sample_data: [:environment, :not_production] do
  delete_all_records_from_all_tables

  create_user email: "sam@example.com"

  populate_sample_authors
  populate_sample_post_for_authors

  puts "sample data was added successfully"
end

def create_user(options = {})
  user_attributes = { email: "sam@example.com",
                      password: "welcome",
                      first_name: "Sam",
                      last_name: "Smith",
                      role: "super_admin" }
  attributes = user_attributes.merge options
  User.create! attributes
end

def populate_sample_authors
  10.times do
    Author.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      is_alive: Faker::Boolean.boolean,
      birth_year: 1990
    })
  end
end

def populate_sample_post_for_authors
  30.times do
    Post.create!({
      title: Faker::Lorem.sentence,
      body: Faker::Lorem.paragraph(2),
      author_id: Author.order("RANDOM()").first.id,
      created_at: Faker::Date.between(2.year.ago, 1.year.ago)
    })
  end
end
