//Step 1
describe("Test Case 2", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Login User with correct email and password", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains(" Signup / Login").click();

    //Step 5
    cy.get(".signup-form").should("be.visible");

    //Step 6
    cy.get('#form input[type="text"]:nth-child(2)').type("test");
    cy.get('#form input[type="email"]:nth-child(3)').type("a1s2d1@test.com");

    //Step 7
    cy.contains("#form button", "Signup").click();

    //Step 8
    cy.get(".container")
      .contains("Email Address already exist!")
      .should("be.visible");
  });
});
