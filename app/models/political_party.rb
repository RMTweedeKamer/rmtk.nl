class PoliticalParty
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :short_name, type: String
  field :body, type: String

  include ImageUploader::Attachment(:banner)
  field :banner_data, type: String

  include ImageUploader::Attachment(:logo)
  field :logo_data, type: String

  field :numm_of_1_seats, type: String
  field :numm_of_2_seats, type: String
end
