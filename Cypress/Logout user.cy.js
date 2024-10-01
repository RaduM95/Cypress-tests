//Step 1
describe("Test Case 4", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Logout user", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains(" Signup / Login").click();

    //Step 5
    cy.get(".login-form").should("be.visible");

    //Step 6
    cy.get('#form input[type="email"]:nth-child(2)').type("a1s1d1@test.com");
    cy.get('#form input[type="password"]:nth-child(3)').type("P@$$w0rd123");

    //Step7
    cy.contains("#form button", "Login").click();

    //Step8
    cy.get("#header").contains("Logged in as").contains("test");

    //Step9
    cy.get("#header").contains("Logout").click();

    //Step10
    cy.get(".login-form").should("be.visible");
  });
});
