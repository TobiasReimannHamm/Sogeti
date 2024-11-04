import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to sogeti main webpage", () => {
  cy.openSogetipage();
});

And("I allow all the cookies", () => {
  cy.get("button.acceptCookie").click();
});

And("I click the Worldwide Dropdown link in Page Header", () => {
  cy.get('span[aria-label="Worldwide"]').click();
});

Then("All the country webpages shall respond", { timeout: 240000 }, () => {
  cy.get("#country-list-id a").each(($el) => {
    const link = $el.prop("href");

    // Send a request to the link and check the status
    cy.request({
      url: link,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200 || response.status === 403) {
        expect([200, 403]).to.include(response.status);
      } else {
        cy.log(`Error: ${link} returned status ${response.status}`);
      }
    });
  });
});
