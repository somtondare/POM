package facebook.login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginTest {
	
	@Given("^I open \"([^\"]*)\" in \"([^\"]*)\"$")
	public void I_open_in(String website, String browser) throws Throwable {
	    System.out.println("@given------I open "+website+" in "+browser+"");
	}

	@Given("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_as(String username, String password) throws Throwable {
		System.out.println("@And ------I enter "+username+" in "+password+"");
	}

	@Given("^I click on \"([^\"]*)\" button$")
	public void I_click_on_button(String login) throws Throwable {
		System.out.println("@And------I click on "+login+ "button");
	}

	@Then("^Login should be \"([^\"]*)\"$")
	public void Login_should_be(String status) throws Throwable {
		System.out.println("@Then------login should be "+status+"");
	}



}
