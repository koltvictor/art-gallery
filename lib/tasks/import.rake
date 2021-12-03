require 'roo'
namespace :import do
  desc "Import data from spreadsheet"
  task data: :environment do
    puts 'Importing Data'
    data = Roo::Spreadsheet.open('lib/data.xlsx') # open spreadsheet
    headers = data.row(1) # get header row
    data.each_with_index do |row, idx|
      next if idx == 0 # skip header row
      # create hash from headers and cells
      art_data = Hash[[headers, row].transpose]
      # next if user exists
      if Art.exists?(title: art_data['title'])
        puts "Art with title #{art_data['title']} already exists"
        next
      end
      
      art = Art.new(art_data)
      puts "Saving Art with title '#{art.title}'"
      art.save!
    end
  end
end