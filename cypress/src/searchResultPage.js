
require("cypress-xpath");

class searchResultPage{

getReviewSelection(index){
    return cy.xpath('//div[@id="reviewsRefinements"]/ul/li['+index+']/span/a',{timeout:100000});  
}

getLanguageSelection(index){
    return cy.xpath('//ul[@aria-labelledby="p_n_feature_nine_browse-bin-title"]/li['+index+']/span/a',{timeout:100000});  
}

getLanguageSelection(index){
    return cy.xpath('//ul[@aria-labelledby="p_n_feature_nine_browse-bin-title"]/li['+index+']/span/a',{timeout:100000});  
}

getProdListItemName(index){
    return cy.xpath('//div[@data-index='+index+']/div/div/div/div/div/div[2]/div/div/div/h2/a/span',{timeout:100000});  
}

getSelectingProdListItem(index){
    return cy.xpath('//div[@data-index='+index+']/div/div/div/div/div/div[2]/div/div/div/h2/a',{timeout:100000});  
}

} export default searchResultPage