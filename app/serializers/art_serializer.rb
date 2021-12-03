class ArtSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :creation_date, :number_of, :medium, :signed, :rented, :image, :image_height, :image_width, :frame_height, :frame_width, :notes
  has_one :user
end
