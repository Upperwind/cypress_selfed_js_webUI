import BooksPage from '../pages/BooksPage';
import LoginPage from '../pages/LoginPage';

describe('Login, Adding Books, Deleting the books from the list, search for existing book, searching for non exitent book, logs off the session', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/login'); // Visits login page, https://demoqa.com/login will be used later on
  });

  it('Logs into the session, navigates to Book Store, Adds Several Books, Opens Profile section', () => {
    const loginPage = new LoginPage();
    const booksPage = new BooksPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('P@ssw0rd1') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetLogoutButton()
    
    booksPage.GetGoToStoreBookBtn().click()
    booksPage.GetGitPockedBook().click()
    booksPage.GetAddToCollectionBtn().click()
    //booksPage.HandleAlert()
    booksPage.GetBacktoBookStore().click()
    booksPage.GetLearningJSBook().click()
    booksPage.GetAddToCollectionBtn().click()
    booksPage.GetBacktoBookStore().click()
    booksPage.GetProfile().click()

    // Add assertions here to verify successful login
  });

  it('Deletes first and second books from the list', () => {
    const loginPage = new LoginPage();
    const booksPage = new BooksPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('P@ssw0rd1') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetLogoutButton()

    booksPage.GetDeleteButton().click({ multiple:true, force: true })
    booksPage.GetAcceptDeletion().click()
    cy.wait(2000)
    booksPage.GetDeleteButton().click({ multiple:true, force: true })
    booksPage.GetAcceptDeletion().click()
    booksPage.GetNoRecordsText()
    // Add assertions here to verify successful login
  });

  it('Navigates to.BookStore, ascend books based on title/auth/publisher by simply clicking its table', () => {
    const loginPage = new LoginPage();
    const booksPage = new BooksPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('P@ssw0rd1') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetLogoutButton()

    booksPage.GetGoToStoreBookBtn().click()
    cy.wait(2000)
    booksPage.TitleSectTable().click()
    cy.wait(2000)
    cy.log('Title is Clicked')
    booksPage.AuthorSectTable().click()
    cy.log('Author is Clicked')
    cy.wait(2500)
    booksPage.PublisherSectTable().click()
    cy.log('Publisher is Clicked')
    cy.wait(2500)

    /* booksPage.GetGitPockedBook()
    .should('have.text', 'Git Pocket Guide')
    booksPage.x()
    booksPage.y() */
   /*  booksPage.GetAcceptDeletion().click()
    cy.wait(2000)
    booksPage.GetDeleteButton().click({ multiple:true, force: true })
    booksPage.GetAcceptDeletion().click()
    booksPage.GetNoRecordsText() */
    // Add assertions here to verify successful login
  });

  it('Navigates to.BookStore, searches for a book', () => {
    const loginPage = new LoginPage();
    const booksPage = new BooksPage();
    cy.viewport(1260, 768)
    //cy.wait(2000)

    
    loginPage.GetsUserNameField().type('samenub') // Use the appropriate method to input email
    loginPage.GetPassField().type('P@ssw0rd1') // Use the appropriate method to input the password
    loginPage.GetLoginButton().click()
    loginPage.GetLogoutButton()

    booksPage.GetGoToStoreBookBtn().click()
    booksPage.searchBox()
      .should('have.attr', 'placeholder', 'Type to search')
    booksPage.searchBox().type('Git')
    booksPage.GetGitPockedBook()
      .should('be.visible')
    booksPage.searchBox().clear().type('how does it feel?')
    booksPage.GetNoRecordsText()
    loginPage.GetLogoutButton().click()
    

    /* booksPage.GetGitPockedBook()
    .should('have.text', 'Git Pocket Guide')
    booksPage.x()
    booksPage.y() */
   /*  booksPage.GetAcceptDeletion().click()
    cy.wait(2000)
    booksPage.GetDeleteButton().click({ multiple:true, force: true })
    booksPage.GetAcceptDeletion().click()
    booksPage.GetNoRecordsText() */
    // Add assertions here to verify successful login
  });
});