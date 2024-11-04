import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(
  "I send a GET request to the Zippopotam API with Country {word} and Postal Code {word}",
  (country, postalCode) => {
    cy.request({
      url: `http://api.zippopotam.us/${country}/${postalCode}`,
    }).as("apiResponse");
  }
);

Then("the response status code should be 200 again", () => {
  cy.get("@apiResponse").then((response) => {
    if (response.status !== 200) {
      cy.log(
        `Error: Status code ${response.status} instead of 200 for ${response.url}`
      );
    }
    expect(response.status).to.equal(200);
  });
});

And("the response content type should be JSON", () => {
  cy.get("@apiResponse").then((response) => {
    const contentType = response.headers["content-type"];
    if (!contentType.includes("application/json")) {
      cy.log(
        `Error: Content type ${contentType} instead of application/json for ${response.url}`
      );
    }
    expect(contentType).to.include("application/json");
  });
});

And("the response time should be less than 1000ms again", () => {
  cy.get("@apiResponse").then((response) => {
    if (response.duration >= 1000) {
      cy.log(
        `Error: Response time ${response.duration}ms instead of below 1000ms for ${response.url}`
      );
    }
    expect(response.duration).to.be.lessThan(1000);
  });
});

And(
  "the response should contain Place Name {string}",
  (placeName) => {
    cy.get("@apiResponse").then((response) => {
      const body = response.body;
      const place = body.places.find(
        (place) => place["place name"] === placeName
      );

      expect(place["place name"]).to.equal(placeName); // Test if Place Name matches
    });
  }
);
