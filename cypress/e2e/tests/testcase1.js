import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the sogeti homepage", () => {
  cy.openSogetipage();
});

When("I accept all cookies", () => {
  cy.get("button.acceptCookie").click();
});

And("I hover over the Services link", () => {
  cy.get("span").contains("Services").trigger("mouseover");
});

And("I click the Automation link", () => {
  cy.contains("a", "Automation").click();
});

Then("I should see the Automation screen", () => {
  cy.url().should("eq", "https://www.sogeti.com/services/automation/");
});

When('I should see the text Automation', () => {
  cy.contains("span", "Automation").should("be.visible");
});

And("I hover over the Services link again", () => {
  cy.contains("span", "Services").trigger("mouseover");
});

Then("the Services and Automation links should be selected", () => {
  // Check if the Services element has the selected color
  cy.contains("span", "Services").should(
    "have.css",
    "color",
    "rgb(255, 48, 76)"
  );

  // Check if the Services element has the ::after pseudo-element
  cy.contains("span", "Services").then(($element) => {
    const after = window.getComputedStyle($element[0], "::after");
    expect(after).to.have.property("border-style", "solid");
    expect(after).to.have.property("content", '""');
  });

  // Check if the Automation element has the selected color
  cy.contains("a", "Automation").should(
    "have.css",
    "color",
    "rgb(255, 48, 76)"
  );

});
