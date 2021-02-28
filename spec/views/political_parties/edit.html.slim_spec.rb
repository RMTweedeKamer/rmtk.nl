require 'rails_helper'

RSpec.describe "political_parties/edit", type: :view do
  before(:each) do
    @political_party = assign(:political_party, PoliticalParty.create!(
      name: "MyString",
      short_name: "MyString",
      body: "MyText"
    ))
  end

  it "renders the edit political_party form" do
    render

    assert_select "form[action=?][method=?]", political_party_path(@political_party), "post" do

      assert_select "input[name=?]", "political_party[name]"

      assert_select "input[name=?]", "political_party[short_name]"

      assert_select "textarea[name=?]", "political_party[body]"
    end
  end
end
