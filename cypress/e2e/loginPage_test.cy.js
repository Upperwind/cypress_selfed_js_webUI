import LoginPage from '../pages/LoginPage';

describe('Unsuccessful Login Attemps', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/login'); // Visits login page, https://demoqa.com/login will be used later on
  });

  it('should NOT login with by using email address', () => {
    const loginPage = new LoginPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('freshemail@gmail.com') // Use the appropriate method to input email
    loginPage.GetPassField().type('samenub') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetAlertMessage()

    // Add assertions here to verify successful login
  });

  it('should NOT login with invalid password', () => {
    const loginPage = new LoginPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('samenub') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetAlertMessage()

    // Add assertions here to verify successful login
  });

  it('should NOT login if UserName field is empty', () => {
    const loginPage = new LoginPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().click()
    loginPage.GetPassField().type('samenub') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()

    // Add assertions here to verify successful login
  });

  it('should NOT login if password field is empty', () => {
    const loginPage = new LoginPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().click()
    loginPage.GetPassField().click() // Use the appropriate method to input the password

    loginPage.GetLoginButton().click()

  });
});

describe('Successful Login Run', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/login'); // Visits login page, https://demoqa.com/login will be used later on
  });

  it('should login with valid UserName and valid Password', () => {
    const loginPage = new LoginPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('P@ssw0rd1') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetLogoutButton().click()
  });
});