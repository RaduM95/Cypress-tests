//Step 1
describe("Test Case 1", function () {
  this.beforeEach(() => {
    //Step 2
    cy.visit("https://automationexercise.com/");
  });

  //Step 3

  it("Register user", () => {
    cy.get("#header").should("be.visible");
    cy.get(".features_items").should("be.visible");
    cy.get("#footer").should("be.visible");

    //Step 4
    cy.get("#header").contains(" Signup / Login").click();

    //Step 5
    cy.get(".signup-form").should("be.visible");

    //Step 6
    function generateRandomEmail() {
      const letters = "abcdefghijklmnopqrstuvwxyz";
      const domains = ["example", "testsite", "sample"];
      const extensions = ["com", "net", "org"];

      function getRandomString(length) {
        let result = "";
        for (let i = 0; i < length; i++) {
          result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return result;
      }

      const username = getRandomString(10);
      const domain = domains[Math.floor(Math.random() * domains.length)];
      const extension =
        extensions[Math.floor(Math.random() * extensions.length)];

      return `${username}@${domain}.${extension}`;
    }
    const randomEmail = generateRandomEmail();
    cy.get('#form input[type="text"]:nth-child(2)').type("test");
    cy.get('#form input[type="email"]:nth-child(3)').type(randomEmail);
    cy.contains("#form button", "Signup").click();
    //Step 7
    cy.get(".row").should("be.visible");

    //Step 8
    cy.get("#id_gender1").click();

    //Step 9
    var firstNames = [
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eva",
      "Fiona",
      "George",
      "Hannah",
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Jones",
      "Brown",
      "Davis",
      "Miller",
      "Wilson",
    ];

    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    cy.get("#password").type("P@$$w0rd123");

    //Picking a random day
    const day = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    const randomDay = day[Math.floor(Math.random() * day.length)];
    cy.get("#days").select(randomDay);

    //Picking a random month
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const randomMonth = month[Math.floor(Math.random() * month.length)];
    cy.get("#months").select(randomMonth);

    //Picking a random year
    function generateYearList(startYear, endYear) {
      let yearList = [];
      for (let year = startYear; year <= endYear; year++) {
        yearList.push(year);
      }
      return yearList;
    }

    // Generate the year list
    const years = generateYearList(1900, 2021); // Example: years from 1900 to 2021

    // Pick a random year from the generated list
    const randomYear = years[Math.floor(Math.random() * years.length)];
    cy.get("#years").select(randomYear.toString());
    cy.get("#address1").type("100 Nickerson Ave");
    cy.get("#country").select("United States");
    cy.get("#state").type("Colorado");
    cy.get("#city").type("Poncha Springs");
    cy.get("#zipcode").type("81242");
    cy.get("#mobile_number").type("+40999999999");

    //Step 10
    cy.get("#newsletter").click();

    //Step 11
    cy.get("#optin").click();

    //Step 12
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#company").type("Test");

    //Step 13
    cy.contains("#form button", "Create Account").click();

    //Step 14
    cy.get(".container").contains("Account Created").should("be.visible");

    //Step 15
    cy.get(".container").contains("Continue").click();

    //Step 16
    cy.get("#header").contains("Logged in as").contains("test");

    //Step 17
    cy.get("#header").contains("Delete Account").click();

    //Step 18
    cy.get(".container").contains("Account Deleted").should("be.visible");
    cy.get(".container").contains("Continue").click();
  });
});
