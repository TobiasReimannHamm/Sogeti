// cypress/support/step_definitions/contact_form.js
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to sogeti webpage", () => {
  cy.openSogetipage();
});

And("I accept all the cookies", () => {
  cy.get("button.acceptCookie").click();
});

And("I hover over Services link and click on Automation link", () => {
  cy.get("span").contains("Services").trigger("mouseover");
  cy.contains("a", "Automation").click();
});

And("I scroll down to the contact us form", () => {
  cy.scrollToContactUs();
});

And("I fill the contact form with random data", () => {
  cy.typeRandomFirstName("#4ff2ed4d-4861-4914-86eb-87dfa65876d8");
  cy.typeRandomLastName("#11ce8b49-5298-491a-aebe-d0900d6f49a7");
  cy.typeRandomEmail("#056d8435-4d06-44f3-896a-d7b0bf4d37b2");
  cy.typeRandomPhoneNumber("#755aa064-7be2-432b-b8a2-805b5f4f9384");
  cy.typeRandomMessage("#88459d00-b812-459a-99e4-5dc6eff2aa19");
});

And("I check the I agree checkbox", (checkbox) => {
  cy.get('label[for="__field_1239350"]').click();
});

And("I click the SUBMIT button", () => {
  cy.get("#b35711ee-b569-48b4-8ec4-6476dbf61ef8").click();

  // # Note: While automating a Test Case, if you are encounter a test step which cannot be Automated.
  // Automate the Test till that Step and please explain in comments in why it is not possible to automate
  // the Test Step? What are the possible workarounds to Test such Test Case?

  // The submission of data using the submit button cannot be automated, just the click on the button.
  // * One obstacle is the Captcha query, which is precisely designed to prevent messages from being submitted
  // by bots. Typically, human inspection is required. This type of Captcha query is notoriously unreliable, so
  // one could attempt to click the checkbox repeatedly until the Captcha query fails and is accepted without a
  // picture challenge. However, this is not a reliable testing method.
  // cy.get(".recaptcha-checkbox-border").click();
  // * Additionally, "Company" and "Country" are mandatory fields that, according to the test task, are not filled
  // in. Clicking the submit button results in a corresponding message. These fields need to be filled out first.
  // * I guess the responsible employees are also not too keen on sorting through automatically generated messages every day.

});

Then("I should see the Thank you message", (message) => {
  // Tank-you-message cannot be tested automatically.
  cy.get('#__field_132738_desc').should('have.text', 'This field is required.');
  cy.get('#__field_132596_desc').should('have.text', 'This field is required.');
  cy.get('span[data-epiforms-linked-name="__field_136030"]').should('have.text', 'Invalid captcha value.Invalid captcha value.');
});
