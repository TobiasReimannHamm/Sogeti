import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I send a GET request to the URL {word}", (url) => {
  cy.request(url).as("apiResponse");
});

Then("the response status code should be 200", () => {
  cy.get("@apiResponse").its("status").should("equal", 200);
});

And("the response content type should be application json", () => {
  cy.get("@apiResponse")
    .its("headers")
    .its("content-type")
    .should("include", "application/json");
});

And("the response time should be less than 1000ms", () => {
  cy.get("@apiResponse").its("duration").should("be.lessThan", 1000);
});

And(
  "the response should contain country as Germany and state as Baden-Württemberg",
  () => {
    cy.get("@apiResponse")
      .its("body")
      .then((body) => {
        expect(body.country).to.equal("Germany");
        expect(body.state).to.equal("Baden-Württemberg");
      });
  }
);

And(
  "the response should contain post code 70597 with Stuttgart Degerloch",
  () => {
    cy.get("@apiResponse")
      .its("body")
      .then((body) => {
        const place = body.places.find(
          (place) => place["post code"] === "70597"
        );
        expect(place["place name"]).to.equal("Stuttgart Degerloch");
      });
  }
);
