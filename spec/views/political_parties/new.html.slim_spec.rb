require 'rails_helper'

RSpec.describe "political_parties/new", type: :view do
  before(:each) do
    assign(:political_party, PoliticalParty.new(
      name: "MyString",
      short_name: "MyString",
      body: "MyText"
    ))
  end

  it "renders new political_party form" do
    render

    assert_select "form[action=?][method=?]", political_parties_path, "post" do

      assert_select "input[name=?]", "political_party[name]"

      assert_select "input[name=?]", "political_party[short_name]"

      assert_select "textarea[name=?]", "political_party[body]"
    end
  end
end
