describe ("Upload Tests", () => {


        // Add your code for the second test case here
        // You can visit a different URL or perform other actions/assertions
        it('should log in successfully and then upload a file thereafter', () => {
  
            // Visit the login page by navigating to the specified URL
            cy.visit('https://app.sellerfriend.ly/Account/Login?ReturnUrl=%2F');
        
            // Locate the input field with the name attribute 'username' and type the provided username
            cy.get('input#LoginInput_UserNameOrEmailAddress').type('husnashahid005@gmail.com');
        
            // Locate the input field with the name attribute 'password' and type the provided password
            cy.get('input#password-input').type('12345678Aa2@');
        
            // Locate the form element and submit it, simulating the login action
            cy.get('.login-btn').click();
        
            // Optionally, add an assertion to check if the current URL includes '/dashboard'
            // This assumes that a successful login redirects to a dashboard page
            cy.url().should('include', 'https://app.sellerfriend.ly/HostDashboard');

            cy.visit("https://app.sellerfriend.ly/HostDashboard");
            //upload file to the input field
            
            cy.get("input[type=file]")
            .attachFile("upload-template - 5+.csv")
            
            //click on the start button or upload buttons
            //cy.get('#showModalButton.new-scan-btn').click();
            
            cy.get('#supplierName').type('Testing');

            cy.get('#SearchBy').select('UPC');
            // Assuming you have a dropdown button with data-cy attribute for identification
//cy.get('[data-cy="your-dropdown-button-selector"]').click();

// Assuming you have a dropdown menu with data-cy attribute for identification
// Replace 'Your Option Text' with the actual text of the option you want to select
cy.get("#customColumnButton").click();
cy.contains('#customColumnDropdown', 'UPC').click();



cy.get('#start_upload').should('be.visible').click({force:true}); //this is an input field 
 //now i need to assert that the file shall be uploaded after clicking
            
            //assert the file name
            
cy.get("#upload-template - 5+.csv",{timeout: 15000}).should("contain", "Your file is uploaded successfully")
//cy.get("#start_upload").should("contain", "Your file is uploaded successfully").click();  


    }); 
});


