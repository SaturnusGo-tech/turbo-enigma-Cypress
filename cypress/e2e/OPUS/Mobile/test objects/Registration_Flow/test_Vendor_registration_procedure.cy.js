import Supplier_Enrollment_Flow_Verification from '../../../../../support/objects/Request access/actions/actions'
import LoginPage from "../../../../../support/objects/LoginPage/actions/LoginPage";

// Test suite for Vendor Registration Procedure
describe('Vendor registration procedure test', { retries: 4 }, function () {

    // Initializing required page objects for the test
    const supplier_Enrollment_Flow_Verification = new Supplier_Enrollment_Flow_Verification();
    const loginPage = new LoginPage();

    // Setup steps to be executed before each test
    beforeEach(() => {
        // Navigate to login page
        cy.viewport(414, 896);
        loginPage.visit();
    });

    // Test case to verify successful vendor registration
    it('should successfully register a new vendor', function() {
        // Start the registration process
        supplier_Enrollment_Flow_Verification.CompleteRegistration();

    });
});
