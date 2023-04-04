
require("cypress-xpath");

class ProductDetailPage {

    getProductType(type) {
        return cy.xpath('//li[' + type + ']/span/span/span/a', { timeout: 10000 });
    }

    getProductPriceText() {
        return cy.xpath('//table[@class="a-lineitem"]/tbody/tr[1]/td[3]/span', { timeout: 10000 });
    }


    getProductDetailTitle() {
        return cy.xpath('//*[@id="productTitle"]', { timeout: 10000 });
    }


    getQuantitySelect() {
        return cy.xpath('//*[@id="quantity"]', { timeout: 100000 });
    }


    getAddToCartBtn() {
        return cy.xpath('//*[@id="add-to-cart-button"]', { timeout: 100000 });
    }

} export default ProductDetailPage