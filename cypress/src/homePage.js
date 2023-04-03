require("cypress-xpath");

class homePage{

getSelectDropdown(){
    return cy.get('#searchDropdownBox',{timeout:100000});  
}

getSearchTextBox(){
    return cy.get('#twotabsearchtextbox',{timeout:100000});  
}


} export default homePage