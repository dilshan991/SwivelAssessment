require("cypress-xpath");

class cartPage {

    getPageQty() {
        return cy.xpath('//span[@data-a-class="quantity"]/span/span/span[2]', { timeout: 10000 });
    }

    getSubTotalAmount() {
        return cy.xpath('//span[@id="sc-subtotal-amount-activecart"]/span', { timeout: 10000 });
    }

    getItemName() {
        return cy.xpath('//span[@class="a-list-item"]/a/span/span/span[1]', { timeout: 10000 });
    }

    getDeletebtn() {
        return cy.xpath('//input[@value="Delete"]', { timeout: 10000 });
    }


} export default cartPage