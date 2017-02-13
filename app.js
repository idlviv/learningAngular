/**
 * Created by igor on 12.02.17.
 */

(function() {
  
  var gems = [
   {name: 'Dode',
    price: 2.95,
    description: 'O description, Перевод слова habit, американское и' +
    ' британское произношение, транскрипция, словосочетания, однокоренные' +
    ' слова, примеры использования.',
    canPurchase: true,
    soldOut: false,
   images:[
     'images/getImage0.jpg',
     'images/getImage1.jpg'],
    },
    {name: 'Nodee',
    price: 122.99,
    description: 'O description, Перевод слова habit, американское и' +
    ' британское произношение, транскрипция, словосочетания, однокоренные' +
    ' слова, примеры использования.',
    canPurchase: true,
    soldOut: false,
    images:[
      'images/getImage2.jpg'],
  }];
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    console.log(this);

    this.products = gems;
  });

})();
