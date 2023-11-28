import { Locators } from '../locators/locators';
import { RegistrationData } from '../Data/Data';
import EmailGenerator  from '../../../../plugins/EmailGen/EmailGenerator'
/**
 * Request access class:
 * Represents the Supplier Enrollment Flow for Verification.
 */
class Supplier_Enrollment_Flow_Verification {


  /**
   * Open the 'Access request' button.
   */
  OpenRequestAccessButton() {
    cy.wait(5000);  // Wait for 5 seconds to ensure all elements are loaded
    // Checking if the access button is visible and then clicking on it
    cy.get(Locators.request_accessButton)
      .should('be.visible')
      .click()
      .then(($el) => {
        cy.log('Clicked on Access request Button');
        cy.log(`Element state: ${$el}`);
      });
  }

  /**
   * Fill in the registration form with provided data.
   */
  FillRegistrationForm() {
    // Entering First Name and verifying its successful input
    cy.get(Locators.firstName_input)
      .should('be.visible')
      .type(RegistrationData.first_name)
      .should('have.value', RegistrationData.first_name);
    cy.log(`Entered First Name: ${RegistrationData.first_name}`);

    // Entering Last Name and verifying its successful input
    cy.get(Locators.lastName_input)
      .should('be.visible')
      .type(RegistrationData.last_name)
      .should('have.value', RegistrationData.last_name);
    cy.log(`Entered Last Name: ${RegistrationData.last_name}`);

   const generatedEmail = EmailGenerator.generateUniqueEmail();

   cy.get(Locators.email_input)
       .should('be.visible')
       .type(generatedEmail)
       .should('have.value', generatedEmail);
   cy.log(`Entered Email: ${generatedEmail}`);



     // Entering Phone and verifying its successful input
    cy.get(Locators.phone_input)
      .should('be.visible')
      .type(RegistrationData.Phone)
      .should('have.value', RegistrationData.Phone);
    cy.log(`Entered Phone: ${RegistrationData.Phone}`);

     // Entering Job Title and verifying its successful input
    cy.get(Locators.jopTitle_input)
      .should('be.visible')
      .type(RegistrationData.Job_Title)
      .should('have.value', RegistrationData.Job_Title);
    cy.log(`Entered Job Title: ${RegistrationData.Job_Title}`);

     // Entering Organization Name and verifying its successful input
    cy.get(Locators.organizationName_input)
      .should('be.visible')
      .type(RegistrationData.Organization_name)
      .should('have.value', RegistrationData.Organization_name);
    cy.log(`Entered Organization Name: ${RegistrationData.Organization_name}`);

     // Entering Zip and verifying its successful input
    cy.get(Locators.zip_input)
      .should('be.visible')
      .type(RegistrationData.Zip)
      .should('have.value', RegistrationData.Zip);
    cy.log(`Entered Zip: ${RegistrationData.Zip}`);

     // Entering Password and verifying its successful input
    cy.get(Locators.password_input)
      .should('be.visible')
      .type(RegistrationData.Password)
      .should('have.value', RegistrationData.Password);
    cy.log(`Entered Password: ${RegistrationData.Password}`);

     // Entering Confirm Password and verifying its successful input
    cy.get(Locators.passwordConfirm_input)
      .should('be.visible')
      .type(RegistrationData.Confirm_password)
      .should('have.value', RegistrationData.Confirm_password);
    cy.log(`Entered Confirm Password: ${RegistrationData.Confirm_password}`);
}


  /**
   * Submit the registration form after filling it.
   */
  SubmitRegistrationForm() {
    // Find the submit button, ensure it's visible, and click it
    cy.get(Locators.submitButton_action)
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked on Submit button for registration');
      });
  }

  /**
   * Verify the presence of a confirmation text after successful registration.
   */
  VerifyConfirmationText() {
    // Check if the confirmation text is visible in the DOM
    cy.contains(Locators.ConfirmationText)
      .should('be.visible')
      .then(($el) => {
        cy.log('Confirmation text found and is visible');
        cy.log(`Element content: ${$el.text()}`);
      });
  }

  /**
   * Complete the entire registration flow.
   */
  CompleteRegistration() {
    // Open the access request button
    this.OpenRequestAccessButton();
    // Fill in the registration form
    this.FillRegistrationForm();
    // Submit the form
    this.SubmitRegistrationForm();
    // Verify the presence of confirmation text
    //this.VerifyConfirmationText();
  }

}

export default Supplier_Enrollment_Flow_Verification;
