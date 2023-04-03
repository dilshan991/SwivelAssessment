# SwivelAssessment

UI automation framework to automation test scenarios of Swivel Assessment

## Setting up the project

### Clone and set up the `SwivelAssessment` repo
```
$ git clone https://github.com/dilshan991/SwivelAssessment.git
$ cd SwivelAssessment
$ npm install
```

### Running e2e specs
Following command will execute all the tests with headless mode.
```
npm run chrome:headless
npm run edge:headless
npm run firefox:headless
```
If you need to run the tests in headed mode , execute the following command
```
npm run chrome:headed
npm run edge:headed
npm run firefox:headed
```

Execute below mentioned command to generate the HTML report 
```
npm run generate-report
```
### Options for running e2e specs

| Argument                                  | Description                                               |
| ------------------------------------------|:--------------------------------------------------------- | 
| `--spec "<spec>"` / `-s "<spec>"`         | The path to look for test spec in                         |
| `--env failOnSnapshotDiff=false`          | To prevent test failures when an image diff               |
| `--env updateSnapshots=true`              | In order to update the base image files for all the tests |
| `--headless`                              | To run test on headless mode                              |
| `--record`                                | To record results on cypress dashboard                    |
| `--record --tag "<tag1,tag2>"`            | To help identify separate run displayed in the Dashboard  |
| `--browser <name>` / `-b <name>`          | Path to custom browser                                    |


### State Challenges/Issues
```
Written code by two methods
assessmentMethod1.cy.js- Handeling temporarily values by reading and writing JSON file
assessmentMethod2.cy.js- Handeling temporarily values by hook fixture
```
Randomly selecting first item instead of second in Product List page even pass releavant index to xpath div[@data-index=index] but probability is very low and if encountered re-execute again.
```
Couldn't able to add assertion for the Select ‘Books’ from the Category list scenario because when added 
homePageObj.getSelectDropdown().should('be.visible').then( ($obj)=>{
      cy.wrap($obj).select("search-alias=stripbooks-intl-ship",{force:true}).invoke("val").should("eq", "search-alias=stripbooks-intl-ship");
    });

Encountering a error This element <select#searchDropdownBox.nav-search-dropdown.searchSelect.nav-progressive-attrubute.nav-progressive-search-dropdown> is not visible because it has CSS property: opacity: 0
```

Due to some products having multiple price range in paperback option getting the price from the product detail page cart header
```
Some elements having differnt xpath time to time for a exmple assume product "Advanced PLC Programming using studio 5000 Part 1: Practical lessons on ladder logic instructions, module configuration, machine safety, VFD, etc. (Industrial automation)". When select this product it's default higlighted the kindle option and not display the cart but when select the paper back option displayed the cart but xpath differnt.

default xpath for other products //div/span[@data-a-color="price"]/span[1]
but encountered above scnerio changed to //span[@id="price"]
DOM structure getting changed, 
```

Some books not disaply exact name in product detail page so when assert this kind of books get failed
E.G-
Product detail Page display
Advanced PLC Programming using studio 5000 Part 1: Practical lessons on ladder logic instructions, module configuration, machine safety, VFD, etc. (Industrial automation)

but actual
Advanced PLC Programming using studio 5000 Part 1: Practical lessons on ladder logic instructions, module configuration, machine safety, VFD, etc. (Industrial automation Book 3) not skipping assert for this product 
```
Cannot use standard assert for the quantity select dropdown in product detail page because the data-value="{"stringVal":"2"}" passing invalid data to match. So used contain instead of eq.


