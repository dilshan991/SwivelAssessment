require("cypress-xpath");

class previewPage {

getGoToCartBtn() {
    return cy.xpath('//div[2]/span/span[@class="a-button-inner"]/a[contains(text(),"Go to Cart")]', { timeout: 10000 });
}


} export default previewPage