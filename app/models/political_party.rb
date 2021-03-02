class PoliticalParty
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :abbreviation, type: String
  field :body, type: String

  include ImageUploader::Attachment(:banner)
  field :banner_data, type: String

  include ImageUploader::Attachment(:logo)
  field :logo_data, type: String

  include DocumentUploader::Attachment(:election_programme)
  field :election_programme_data, type: String

  field :numm_of_1_seats, type: Integer
  field :numm_of_2_seats, type: Integer

  field :active, type: Boolean

  field :party_token, type: String

  validates_uniqueness_of :party_token

  before_validation do
    self.party_token = Digest::SHA1.hexdigest([Time.now, rand].join)[0..10]
    self.active = true
  end

end
