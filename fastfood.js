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
Hamburger.SIZE_SMALL = null;
Hamburger.SIZE_LARGE = null;
Hamburger.STUFFING_CHEESE = null;
Hamburger.STUFFING_SALAD = null;
Hamburger.STUFFING_POTATO = null;
Hamburger.TOPPING_MAYO = null;
Hamburger.TOPPING_SPICE = null;
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
Hamburger.prototype.removeTopping = function (topping) {
  if (Hamburger.hasOwnProperty(['toppings'])){
      console.log(this.toppings);
  }
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