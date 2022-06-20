// 1.Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами.-10

// const differenceResidents = () => {
//   const populationBiwkek = 2000000;
//   const populationNewBalykchy = 1000;
//   return populationBiwkek - populationNewBalykchy;
// };

// console.log(differenceResidents());

// 2. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет. - 10

// const rectangleYardA = 50;
// const rectangleYardB = 30;
// const rectanglearYard = rectangleYardA * rectangleYardB;
// const rectangleHouseA = 20;
// const rectangleHouseB = 10;
// const rectangleHouse = rectangleHouseA * rectangleHouseB;
// const freeArea = rectanglearYard - rectangleHouse;
// const yardLength = (rectangleYardA + rectangleYardB) * 2;
// const houseLength = (rectangleYardA + rectangleYardB) * 2;
// const fenceLength = yardLength - houseLength / 2;
// console.log("площадь дома:" + " " + rectangleHouse);
// console.log("свободная площадь двора:" + " " + freeArea);
// console.log("длина забора" + " " + fenceLength);

// 3.В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести alert ЗАДАЧА РЕШЕНА. - 10

// const num1 = +prompt("Введите число:");
// const num2 = +prompt("Введите число :");
// if (num1 > num2) {
//   const sum = num1 + num2;
//   console.log("Сумма: " + sum);
// } else {
//   const multi = num1 * num2;
//   console.log("произведение:" + " " + multi);
// }
// console.log("ЗАДАЧА РЕШЕНА");

// 4.Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? - 10

// let dragonHeadsBeforeHundred = 3;
// let dragonHeadsAfterHundred = 2;
// let dragonEyesBeforeHundred = 6;
// let dragonEyesAfterHundred = 4;
// let howOldIsDragon = Number(prompt("How old dragon ? "));

// if (howOldIsDragon < 100) {
//   document.write("Dragon heads: " + howOldIsDragon * dragonHeadsBeforeHundred);
//   document.write("Dragon eyes: " + howOldIsDragon * dragonEyesBeforeHundred);
// } else {
//   document.write(
//     "Dragon heads: " + (howOldIsDragon * dragonHeadsAfterHundred + 99)
//   );
//   document.write(
//     "Dragon eyes: " + (howOldIsDragon * dragonEyesAfterHundred + 198)
//   );
// }

// 5.Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!".

const age = +prompt("Введите возраст:");
if (age > 17) {
  const isntitut = prompt("В каком институте ты учишься?");
  alert(isntitut + " " + "Хороший институт");
} else if (age <= 17) {
  const shkola = prompt("В какой школе ты учишься?");
  alert(shkola + " " + "Неплохая школа");
}
alert("До следующей встречи!");
