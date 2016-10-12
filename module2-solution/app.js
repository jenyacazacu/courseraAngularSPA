(function(){
'use strict';
angular.module("CheckList",[])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyList = this;
  buyList.itemsToBuy = ShoppingListCheckOffService.getToBuyItems();
  buyList.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  var itemsToBuy = [
    {name:"Eggs", quantity:12},
    {name:"Bread", quantity:1},
    {name:"Chocolate", quantity:2},
    {name:"Spinach", quantity:1},
    {name:"Bananas", quantity:3}
  ];
  var itemsBought = [];

  service.getToBuyItems = function(){
    return itemsToBuy;
  };

  service.getBoughtItems = function(){
    return itemsBought;
  }

  service.buyItem = function(itemIndex){
    var removedItem = itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(removedItem[0]);
  };
};
})();
