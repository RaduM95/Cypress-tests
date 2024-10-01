//Step 1
describe("Test Case 3", function () {
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
    cy.get(".login-form").should("be.visible");

    //Step 6
    cy.get('#form input[type="email"]:nth-child(2)').type("aaaaaa@test.com");
    cy.get('#form input[type="password"]:nth-child(3)').type("123456");

    //Step7
    cy.contains("#form button", "Login").click();

    //Step 8
    cy.get(".container")
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });
});
