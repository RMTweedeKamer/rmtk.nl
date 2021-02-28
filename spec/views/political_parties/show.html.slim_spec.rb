require 'rails_helper'

RSpec.describe "political_parties/show", type: :view do
  before(:each) do
    @political_party = assign(:political_party, PoliticalParty.create!(
      name: "Name",
      short_name: "Short Name",
      body: "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Short Name/)
    expect(rendered).to match(/MyText/)
  end
end
