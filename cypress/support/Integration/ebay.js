describe('ebay search test', () => {
    it('search functionality', () => {
        cy.visit("https://www.ebay.com/");

        //click on advanced link on ebay website
        cy.get("#gh-as-a").click();

        //select catagory
        //cy.get("[id='s0-1-17-4[0]-7[3]-_sacat']").should('have.value','2984');

        cy.get("[id='s0-1-17-4[0]-7[3]-_sacat']").select("Baby");

        //click on search button
        //cy.get("[class='btn btn--primary']").select('0').click();
        cy.get('input[id="s0-1-17-6[4]-[0]-LH_ItemCondition"]').click()
        
    });
});
