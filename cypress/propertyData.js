module.exports = {
  appUrl: 'https://www.amazon.com/',
  dropDownSelection: 'search-alias=stripbooks-intl-ship', //pass relevant option value to select category
  searchKeyword:'Automation',
  reviewIndex:1,//Pass relevant review index to xpath select 1 for 4 Stars & Up,2 for 3 Stars & Up.....
  languageIndex:1,//Pass relevant lanuage index to xpath select 1 for English,2 for German.....
  selectingItem:2, // as per the current DOM structure we can select each product by passing releavant index to xpath div[@data-index=index]
  selectingProductType:2,//Pass relevant product type index to xpath 1 select kindle and passing 2 select papercut
  ProductQty:2

}