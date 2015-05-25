$(document).ready( function() {

// GENERATE SIDEBAR CATOGORIES

var sidebar = items.results.map ( function (item) { return item.taxonomy_path;});

var sidebarItems = [];
sidebar.forEach(function (list) {
    list.forEach(function (item){
     if (sidebarItems.indexOf(item) === -1){
    sidebarItems.push(item);
    }
  });
});


var sidebarUl = $("#sidebarCats");
sidebarItems.forEach( function (sbItem) {
  sidebarUl.append("<li><a href='#'>" + sbItem + "</a></li>");
});


// // ITEMS

// var itemCont = $(".items");
// items.results.forEach( function (item) {

//   itemCont.append("<div class='item'><p class='itemtitle'>" + item.title + "</p></div>")};


var $itemData = $(".items");
var itemImage, itemPrice, itemTitle, itemSeller, itemHolder;

items.results.forEach( function(etsy) {
  itemImage ="<img src='" + etsy.Images[0].url_170x135 +"''>";
  itemTitle = "<p class ='title'>" + etsy.title + "</p>";
  itemSeller = "<p class='seller'>" + etsy.Shop.shop_name + "</p>";
  itemPrice = "<p class='price'>" + "$" + etsy.price + " USD" +"</p>";
  itemLink = etsy.listing_id;

  itemHolder = "<li class='itemData'>" + itemImage + "<div class = 'itemText'>" + "<a class='title' href ='https://www.etsy.com/listing/" + itemLink + "'>" + itemTitle + "</a>" + itemSeller + itemPrice + "</div>" + "</li>";
  
  $itemData.append(itemHolder);
  });

  // CSS CHANGES
  
  // $(".searchtext").on("click", function() {
  //   $(".searchtext").css({"background-color" : "white"});
  //   $(".searchtext").css({"border" : "1px solid $searchcolor"});
  // });

});
