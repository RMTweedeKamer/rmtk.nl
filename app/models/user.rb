class User
  include Mongoid::Document
  include Mongoid::Timestamps

  authenticates_with_sorcery!

  validates :password, length: { minimum: 3 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  field :username, type: String

  field :party_token, type: String

  validates :username, uniqueness: true

  def admin?
    Rails.application.credentials.admin[:secret_token] == party_token
  end

  def has_party_token(token)
    @party_token == token
  end
end
