require 'rails_helper'

RSpec.describe "political_parties/index", type: :view do
  before(:each) do
    assign(:political_parties, [
      PoliticalParty.create!(
        name: "Name",
        short_name: "Short Name",
        body: "MyText"
      ),
      PoliticalParty.create!(
        name: "Name",
        short_name: "Short Name",
        body: "MyText"
      )
    ])
  end

  it "renders a list of political_parties" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "Short Name".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
  end
end
