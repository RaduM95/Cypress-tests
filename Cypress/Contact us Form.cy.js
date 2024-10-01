//Step 1
describe("Test Case 6", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3
  it("Contact us Form", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains("Contact us").click();

    //Step 5
    cy.get(".row").contains("Get In Touch").should("be.visible");

    //Step 6

    cy.get('#contact-us-form input[name="name"]').type("test");
    cy.get('#contact-us-form input[name="email"]').type("test@test.com");
    cy.get('#contact-us-form input[name="subject"]').type("test");
    cy.get("#message").type("test");

    //Step 7
    cy.get('#contact-us-form input[name="upload_file"]').selectFile(
      "empty.json"
    );

    //Step 8
    cy.get('#contact-us-form input[name="submit"]').click();

    //Step 9
    cy.on("windows:confirm", () => true);

    //Step 10
    cy.get("#contact-page")
      .contains("Success! Your details have been submitted successfully")
      .should("be.visible");

    //Step 11
    cy.get("#header").contains("Home").click();
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");
  });
});
