/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
}
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'large';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';
Hamburger.TOPPING_MAYO = 'mayo';
Hamburger.TOPPING_SPICE = 'spice';
/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 *– при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (_topping) {
    this.toppings.push(_topping);
};
/**
 * Убрать добавку – при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (removingTopping) {
    var i = 0;
    this.toppings.forEach(function (topping) {
        if(topping === removingTopping){
            this.toppings.splice(i, 1);
        }
        i++;
    })
};
 /**
  * Получить список добавок.
  *
  * @return {Array} Массив добавленных добавок, содержит константы
  *                 Hamburger.TOPPING_*
  */
 Hamburger.prototype.getToppings = function () {
     return this.topping
 };
 /**
  * Узнать размер гамбургера
  */
 Hamburger.prototype.getSize = function () {
     return this.size;
 };
 /**
  * Узнать начинку гамбургера
  */
 Hamburger.prototype.getStuffing = function () {
     return this.stuffing;
 };
 /**
  * Узнать цену гамбургера
  * @return {Number} Цена в тугриках
  */
 Hamburger.prototype.calculatePrice = function () {
     var price = 0;
     switch (this.size) {
         case 'big':
             price += 1000;
            break;
         case 'small':
             price += 700;
             break;
     }
     return price;
 };
// /**
//  * Узнать калорийность
//  * @return {Number} Калорийность в калориях
//  */
// Hamburger.prototype.calculateCalories = function () ...
// /**
//  * Представляет информацию об ошибке в ходе работы с гамбургером.
//  * Подробности хранятся в свойстве message.
//  * @constructor
//  */
// function HamburgerException (...) { ... }