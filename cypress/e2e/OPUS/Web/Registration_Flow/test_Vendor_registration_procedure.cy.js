import Supplier_Enrollment_Flow_Verification from '../../../../support/Core_Testing_Elements_web/page_objects/Supplier_Enrollment_Flow_Verification/Supplier_Registration_Actions/Registration';
import LoginPage from "../../../../support/Core_Testing_Elements_web/page_objects/LoginPage/LoginPage";

// Test suite for Vendor Registration Procedure
describe('Vendor registration procedure test', function() {

    // Initializing required page objects for the test
    const supplier_Enrollment_Flow_Verification = new Supplier_Enrollment_Flow_Verification();
    const loginPage = new LoginPage();

    // Setup steps to be executed before each test
    beforeEach(() => {
        // Navigate to login page
        loginPage.visit();
    });

    // Test case to verify successful vendor registration
    it('should successfully register a new vendor', function() {
        // Start the registration process
        supplier_Enrollment_Flow_Verification.CompleteRegistration();

        // Post-registration verification
        // Additional validation steps will be implement here
    });
});
