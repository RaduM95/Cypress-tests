//Step 1 Launch browser
describe("Test Case 1", function () {
  this.beforeEach(() => {
    //Step 2 Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");
  });

  //Step 3 Verify that home page is visible successfully

  it("Register user", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4 Add products to cart
    cy.get(".product-image-wrapper").first().contains("Add to cart").click();
    cy.contains(".modal-footer", "Continue Shopping").click();
    cy.get(".product-image-wrapper").eq("1").contains("Add to cart").click();
    cy.contains(".modal-footer", "Continue Shopping").click();

    //Step 5 Click 'Cart' button
    cy.get("#header").contains("Cart").click();

    //Step 6 Verify that cart page is displayed
    cy.contains(".breadcrumbs", "Shopping Cart").should("be.visible");
  });
});
