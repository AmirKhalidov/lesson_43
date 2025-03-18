// TASK 1
class Marker {
  markerColor = "red";
  markerInk = 100;

  print(str) {
    const SYMBOL_COST = 0.5;

    const regex = / /g;

    const matches = str.match(regex);
    const count = matches ? matches.length : 0;

    if (str.length - count < this.markerInk / SYMBOL_COST) {
      console.log(`(Colored ${this.markerColor}) ${str}`);
    } else {
      let result = "";
      let count = 0;

      for (let i = 0; i < str.length; i += 1) {
        if (str[i] !== " " || count < this.markerInk / SYMBOL_COST) {
          result += str[i];
          if (str[i] !== " ") {
            count += 1;
          }
        }
        if (count === this.markerInk / SYMBOL_COST) {
          break;
        }
      }
      console.log(`(Colored ${this.markerColor}) ${result}`);
    }
  }
}

const marker1 = new Marker();
// marker1.print(
//   "The quick brown fox jumps over the lazy dog and runs into the forest where it finds birds in the trees and flowers in the morning dew with the rhythm of nature whispering through the sunlit leaves and the stars peeking through in the midst of the silence of the forest's heart. The quick brown fox jumps over the lazy dog and runs into the forest where it finds birds in the trees and flowers in the morning dew with the rhythm of nature whispering through the sunlit leaves and the stars peeking through in the midst of the silence of the forest's heart"
// );
// marker1.print("Hello my friend");

class MarkerCharge extends Marker {
  chargerMarker() {
    this.markerInk = 100;
    console.log(this.markerInk);
  }
}

// const markerCharge1 = new MarkerCharge();
// markerCharge1.chargerMarker();

// TASK 2
class ExtendedDate extends Date {
  printDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const now = new Date();
    console.log(
      `Day of the month: ${now.getDate()}, Month: ${months[now.getMonth()]}`
    );
  }

  futureOrPast(date) {
    console.log(date > new Date() ? "It's future" : "It's past");
  }

  leapYear(date) {
    const year = date.getFullYear();
    console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }

  nextDay(date) {
    date.setDate(date.getDate() + 1);
    console.log(date);
  }
}

const extendedDate1 = new ExtendedDate();
// extendedDate1.printDate();
// extendedDate1.futureOrPast(new Date("2025, 3, 17"));
// extendedDate1.leapYear(new Date("3005, 3, 17"));
// extendedDate1.nextDay(new Date("3005, 3, 17"));
