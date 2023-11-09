function cov_19wys1svuj() {
  var path = "/Users/mercuryrucks/Documents/CypressDemo_test/ui-regression-tests/src/test_Vendor_registration_procedure.cy.js";
  var hash = "2d4f427867ea9ab73319d2f371a8e981a3c5a257";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mercuryrucks/Documents/CypressDemo_test/ui-regression-tests/src/test_Vendor_registration_procedure.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "1": {
        start: {
          line: 8,
          column: 50
        },
        end: {
          line: 8,
          column: 93
        }
      },
      "2": {
        start: {
          line: 9,
          column: 22
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "3": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      },
      "4": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "5": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "6": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 47
          },
          end: {
            line: 5,
            column: 48
          }
        },
        loc: {
          start: {
            line: 5,
            column: 58
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 52
          },
          end: {
            line: 18,
            column: 53
          }
        },
        loc: {
          start: {
            line: 18,
            column: 63
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2d4f427867ea9ab73319d2f371a8e981a3c5a257"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19wys1svuj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19wys1svuj();
import Supplier_Enrollment_Flow_Verification from '../cypress/support/Core_web/HomePage/Supplier_Enrollment_Flow_Verification/Supplier_Registration_Actions/Registration';
import LoginPage from "./../cypress/support/Critical_Path/page_objects/LoginPage/LoginPage";

// Test suite for Vendor Registration Procedure
cov_19wys1svuj().s[0]++;
describe('Vendor registration procedure test', function () {
  cov_19wys1svuj().f[0]++;
  // Initializing required page objects for the test
  const supplier_Enrollment_Flow_Verification = (cov_19wys1svuj().s[1]++, new Supplier_Enrollment_Flow_Verification());
  const loginPage = (cov_19wys1svuj().s[2]++, new LoginPage());

  // Setup steps to be executed before each test
  cov_19wys1svuj().s[3]++;
  beforeEach(() => {
    cov_19wys1svuj().f[1]++;
    cov_19wys1svuj().s[4]++;
    // Navigate to login page
    loginPage.visit();
  });

  // Test case to verify successful vendor registration
  cov_19wys1svuj().s[5]++;
  it('should successfully register a new vendor', function () {
    cov_19wys1svuj().f[2]++;
    cov_19wys1svuj().s[6]++;
    // Start the registration process
    supplier_Enrollment_Flow_Verification.CompleteRegistration();

    // Post-registration verification
    // Additional validation steps will be implement here
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTl3eXMxc3Z1aiIsImFjdHVhbENvdmVyYWdlIiwiU3VwcGxpZXJfRW5yb2xsbWVudF9GbG93X1ZlcmlmaWNhdGlvbiIsIkxvZ2luUGFnZSIsInMiLCJkZXNjcmliZSIsImYiLCJzdXBwbGllcl9FbnJvbGxtZW50X0Zsb3dfVmVyaWZpY2F0aW9uIiwibG9naW5QYWdlIiwiYmVmb3JlRWFjaCIsInZpc2l0IiwiaXQiLCJDb21wbGV0ZVJlZ2lzdHJhdGlvbiJdLCJzb3VyY2VzIjpbInRlc3RfVmVuZG9yX3JlZ2lzdHJhdGlvbl9wcm9jZWR1cmUuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN1cHBsaWVyX0Vucm9sbG1lbnRfRmxvd19WZXJpZmljYXRpb24gZnJvbSAnLi4vY3lwcmVzcy9zdXBwb3J0L0NvcmVfd2ViL0hvbWVQYWdlL1N1cHBsaWVyX0Vucm9sbG1lbnRfRmxvd19WZXJpZmljYXRpb24vU3VwcGxpZXJfUmVnaXN0cmF0aW9uX0FjdGlvbnMvUmVnaXN0cmF0aW9uJztcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vLi4vY3lwcmVzcy9zdXBwb3J0L0NyaXRpY2FsX1BhdGgvcGFnZV9vYmplY3RzL0xvZ2luUGFnZS9Mb2dpblBhZ2VcIjtcblxuLy8gVGVzdCBzdWl0ZSBmb3IgVmVuZG9yIFJlZ2lzdHJhdGlvbiBQcm9jZWR1cmVcbmRlc2NyaWJlKCdWZW5kb3IgcmVnaXN0cmF0aW9uIHByb2NlZHVyZSB0ZXN0JywgZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBJbml0aWFsaXppbmcgcmVxdWlyZWQgcGFnZSBvYmplY3RzIGZvciB0aGUgdGVzdFxuICAgIGNvbnN0IHN1cHBsaWVyX0Vucm9sbG1lbnRfRmxvd19WZXJpZmljYXRpb24gPSBuZXcgU3VwcGxpZXJfRW5yb2xsbWVudF9GbG93X1ZlcmlmaWNhdGlvbigpO1xuICAgIGNvbnN0IGxvZ2luUGFnZSA9IG5ldyBMb2dpblBhZ2UoKTtcblxuICAgIC8vIFNldHVwIHN0ZXBzIHRvIGJlIGV4ZWN1dGVkIGJlZm9yZSBlYWNoIHRlc3RcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gbG9naW4gcGFnZVxuICAgICAgICBsb2dpblBhZ2UudmlzaXQoKTtcbiAgICB9KTtcblxuICAgIC8vIFRlc3QgY2FzZSB0byB2ZXJpZnkgc3VjY2Vzc2Z1bCB2ZW5kb3IgcmVnaXN0cmF0aW9uXG4gICAgaXQoJ3Nob3VsZCBzdWNjZXNzZnVsbHkgcmVnaXN0ZXIgYSBuZXcgdmVuZG9yJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFN0YXJ0IHRoZSByZWdpc3RyYXRpb24gcHJvY2Vzc1xuICAgICAgICBzdXBwbGllcl9FbnJvbGxtZW50X0Zsb3dfVmVyaWZpY2F0aW9uLkNvbXBsZXRlUmVnaXN0cmF0aW9uKCk7XG5cbiAgICAgICAgLy8gUG9zdC1yZWdpc3RyYXRpb24gdmVyaWZpY2F0aW9uXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgdmFsaWRhdGlvbiBzdGVwcyB3aWxsIGJlIGltcGxlbWVudCBoZXJlXG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxxQ0FBcUMsTUFBTSx1SEFBdUg7QUFDekssT0FBT0MsU0FBUyxNQUFNLHFFQUFxRTs7QUFFM0Y7QUFBQUgsY0FBQSxHQUFBSSxDQUFBO0FBQ0FDLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxZQUFXO0VBQUFMLGNBQUEsR0FBQU0sQ0FBQTtFQUV0RDtFQUNBLE1BQU1DLHFDQUFxQyxJQUFBUCxjQUFBLEdBQUFJLENBQUEsT0FBRyxJQUFJRixxQ0FBcUMsQ0FBQyxDQUFDO0VBQ3pGLE1BQU1NLFNBQVMsSUFBQVIsY0FBQSxHQUFBSSxDQUFBLE9BQUcsSUFBSUQsU0FBUyxDQUFDLENBQUM7O0VBRWpDO0VBQUFILGNBQUEsR0FBQUksQ0FBQTtFQUNBSyxVQUFVLENBQUMsTUFBTTtJQUFBVCxjQUFBLEdBQUFNLENBQUE7SUFBQU4sY0FBQSxHQUFBSSxDQUFBO0lBQ2I7SUFDQUksU0FBUyxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUNyQixDQUFDLENBQUM7O0VBRUY7RUFBQVYsY0FBQSxHQUFBSSxDQUFBO0VBQ0FPLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxZQUFXO0lBQUFYLGNBQUEsR0FBQU0sQ0FBQTtJQUFBTixjQUFBLEdBQUFJLENBQUE7SUFDdkQ7SUFDQUcscUNBQXFDLENBQUNLLG9CQUFvQixDQUFDLENBQUM7O0lBRTVEO0lBQ0E7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==