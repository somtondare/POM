$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebook\\login\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to facebook.com",
  "description": "\r\nIn order to access Application\r\nAs a Admin\r\nI want to login",
  "id": "login-to-facebook.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Login in to facebook.com",
  "description": "",
  "id": "login-to-facebook.com;login-in-to-facebook.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I open \"https://www.facebook.com/\" in \"firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"username\" as \"somtondare@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"password\" as \"somesh9028\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"SignIn\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.facebook.com/",
      "offset": 8
    },
    {
      "val": "firefox",
      "offset": 39
    }
  ],
  "location": "LoginTest.I_open_in(String,String)"
});
formatter.result({
  "duration": 513719587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "somtondare@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter_as(String,String)"
});
formatter.result({
  "duration": 236909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "somesh9028",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_enter_as(String,String)"
});
formatter.result({
  "duration": 186449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on_button(String)"
});
formatter.result({
  "duration": 158653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginTest.Login_should_be(String)"
});
formatter.result({
  "duration": 159507,
  "status": "passed"
});
});