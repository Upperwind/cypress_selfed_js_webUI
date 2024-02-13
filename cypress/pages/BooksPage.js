class BooksPage {
    
    searchBox() {
        return cy.get('#searchBox')
        //[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div/div[2]
    }

    TitleSectTable() {
        return cy.get(':nth-child(2) > .rt-resizable-header-content')
            .should('have.text', 'Title')
        //[@id="app"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div/div[2]
    }

    AuthorSectTable() {
        return cy.get(':nth-child(3) > .rt-resizable-header-content')
            .should('have.text', 'Author')
    }

    PublisherSectTable() {
        return cy.get(':nth-child(4) > .rt-resizable-header-content')
            .should('have.text', 'Publisher')
    }
    
    GetGitPockedBook() {
        return cy.get('span#see-book-Git\\ Pocket\\ Guide > a')
    }
    GetLearningJSBook() {
        return cy.get('#see-book-Learning\\ JavaScript\\ Design\\ Patterns > a')
    }
    GetGoToStoreBookBtn() {
        return cy.get('#gotoStore').should('be.visible')
    }
    GetAddToCollectionBtn() {
        return cy.get('.text-right > #addNewRecordButton')
    }
    GetBacktoBookStore() {
        return cy.get('.text-left > #addNewRecordButton')
    }
    GetDeleteButton() {
        return cy.get('div.action-buttons > span#delete-record-undefined')
    }
    GetNoRecordsText(){
        return cy.get('div.rt-noData').should('have.text', 'No rows found')
    }
    GetAcceptDeletion(){
        return cy.get('#closeSmallModal-ok')
    }
    GetProfile() {
        return cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
    }
    HandleAlert() {
        return cy.on('window:confirm', (text) => {
            expect(text).to.equal('Book added to your collection.');
            return true;
        });
    }
    GetPassField() {
        return cy.get('#password').should('be.visible').focus()
    }

    GetLoginButton() {
        return cy.get('#login').should('be.visible')
    }

    GetAlertMessage() {
        cy.get('#name').contains('Invalid username or password!')
    }

    GetLogoutButton() {
        cy.get('#submit')
        .should('be.visible')
        .contains('Log out')
    }
}
export default BooksPage