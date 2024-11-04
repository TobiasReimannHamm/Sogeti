// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// setResolution
Cypress.Commands.add("setResolution", (width, height) => {
  cy.viewport(width, height);
});

// Open Homepage of Sogeti
Cypress.Commands.add("openSogetipage", { timeout: 60000 }, () => {
  // 1 min timeout
  cy.visit("https://www.sogeti.com/");
});

// Scroll ContactUs into visual view
Cypress.Commands.add("scrollToContactUs", () => {
  cy.get("h2.Form__Title")
    .contains("Contact us")
    .then(($el) => {
      $el[0].scrollIntoView({
        block: "start",
        inline: "nearest",
      });
      cy.window().then((win) => {
        win.scrollBy(0, -300); // Scrolls 200 pixels up
      });
    });
});

// Custom command to generate and type a random first name
Cypress.Commands.add("typeRandomFirstName", (selector) => {
  function generateRandomFirstName() {
    const numParts = Math.floor(Math.random() * 3) + 1; // 1-3 name parts
    const nameParts = [];

    for (let i = 0; i < numParts; i++) {
      const length = Math.floor(Math.random() * 8) + 2; // Length of each name part (2-10 letters)
      let name = "";
      for (let j = 0; j < length; j++) {
        const randomChar = String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        ); // Generate a random letter
        name += j === 0 ? randomChar.toUpperCase() : randomChar;
      }
      nameParts.push(name);
    }

    let fullName = nameParts.join(Math.random() > 0.5 ? " " : "-");

    // Check if the name meets length requirements
    if (fullName.length < 5 || fullName.length > 50) {
      return generateRandomFirstName();
    }

    return fullName;
  }

  const randomFirstName = generateRandomFirstName();
  cy.get(selector).type(randomFirstName);
});

// Custom command to generate and type a random last name
Cypress.Commands.add("typeRandomLastName", (selector) => {
  function generateRandomLastName() {
    const numParts = Math.random() > 0.5 ? 2 : 1; // Single or double last name
    const nameParts = [];

    for (let i = 0; i < numParts; i++) {
      const length = Math.floor(Math.random() * 8) + 2; // Length of each name part (2-10 letters)
      let name = "";
      for (let j = 0; j < length; j++) {
        const randomChar = String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        ); // Generate a random letter
        name += j === 0 ? randomChar.toUpperCase() : randomChar;
      }
      nameParts.push(name);
    }

    let fullName = nameParts.join("-");

    // Check if the name meets length requirements
    if (fullName.length < 5 || fullName.length > 50) {
      return generateRandomLastName();
    }

    return fullName;
  }

  const randomLastName = generateRandomLastName();
  cy.get(selector).type(randomLastName);
});

// Custom command to generate and type a random email
Cypress.Commands.add("typeRandomEmail", (selector) => {
  function generateRandomEmail() {
    const length = Math.floor(Math.random() * 11) + 5; // Length of email name part (5-15 characters)
    let emailName = "";
    for (let i = 0; i < length; i++) {
      const randomChar = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      ); // Generate a random lowercase letter
      emailName += randomChar;
    }
    return `${emailName}@sogeti.com`;
  }

  const randomEmail = generateRandomEmail();
  cy.get(selector).type(randomEmail);
});

// Custom command to generate and type a random phone number
Cypress.Commands.add("typeRandomPhoneNumber", (selector) => {
  function generateRandomPhoneNumber() {
    const countryCode = `+${Math.floor(Math.random() * 90) + 10}`; // Two-digit country code
    const areaCodeLength = Math.floor(Math.random() * 3) + 3; // Area code length (3-5 digits)
    const areaCode = Array.from(
      { length: areaCodeLength },
      () => Math.floor(Math.random() * 9) + 1
    ).join(""); // Area code
    const numberLength = Math.floor(Math.random() * 3) + 5; // Number length (5-7 digits)
    const number = Array.from({ length: numberLength }, () =>
      Math.floor(Math.random() * 10)
    ).join(""); // Number

    return `${countryCode} ${areaCode} ${number}`;
  }

  const randomPhoneNumber = generateRandomPhoneNumber();
  cy.get(selector).type(randomPhoneNumber);
});

// Custom command to generate and type a random message
Cypress.Commands.add("typeRandomMessage", (selector) => {
  function generateRandomMessage() {
    const numWords = Math.floor(Math.random() * 18) + 3; // 3-20 words
    const words = [];

    for (let i = 0; i < numWords; i++) {
      const wordLength = Math.floor(Math.random() * 8) + 3; // 3-10 letters per word
      let word = "";
      for (let j = 0; j < wordLength; j++) {
        const randomChar = String.fromCharCode(
          97 + Math.floor(Math.random() * 26)
        ); // Generate a random letter
        word += randomChar;
      }
      words.push(word);
    }

    return words.join(" ");
  }

  const randomMessage = generateRandomMessage();
  cy.get(selector).type(randomMessage);
});
