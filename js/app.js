let inputDay = document.querySelector("#dayBorder");
let inputMonth = document.querySelector("#monthBorder");
let inputYear = document.querySelector("#yearBorder");
let form = document.querySelector("#ageform");
let requiredDay = document.querySelector("#required_day");
let requiredMonth = document.querySelector("#required_month");
let requiredYear = document.querySelector("#required_year");
let realYear = document.querySelector("#years");
let realMonth = document.querySelector("#months");
let realDay = document.querySelector("#days");
let labelMonth = document.querySelector("#month");
let labelDay = document.querySelector("#day");
let labelYear = document.querySelector("#year");

const fields = [labelMonth, labelDay, labelYear];
const borders = [inputDay, inputMonth, inputYear];
const requiredFields = [requiredDay, requiredMonth, requiredYear];

function fieldsColor() {
  for (item of fields) {
    item.style.color = "hsl(0, 100%, 67%)";
  }
  for (item of borders) {
    item.style.border = "1px solid hsl(0, 100%, 67%)";
  }
  for (item of requiredFields) {
    item.innerText = "This field is required";
  }
}

function resetFieldsColor() {
  for (item of fields) {
    item.style.color = "";
  }
  for (item of borders) {
    item.style.border = "";
  }
  for (item of requiredFields) {
    item.innerText = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();



  let inputDayValue = inputDay.value;
  let inputMonthValue = inputMonth.value;
  let inputYearValue = inputYear.value;
  let thisDay = new Date().getDate();
  let thisMonth = new Date().getMonth() + 1;
  let thisYear = new Date().getFullYear();

  const regexTwo = /^\d{2}$/;
  const regexFour = /^\d{4}$/;

  function labelDayFunc() {
    labelDay.style.color = "hsl(0, 100%, 67%)";
    inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
    requiredDay.innerText = "This field is required";
  }
  function labelMonthFunc() {
    labelMonth.style.color = "hsl(0, 100%, 67%)";
    inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    requiredMonth.innerText = "This field is required";
  }
  function labelYearFunc() {
    labelYear.style.color = "hsl(0, 100%, 67%)";
    inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
    requiredYear.innerText = "This field is required";
  }

  if (inputDayValue && !inputMonthValue && !inputYearValue) {
    labelMonthFunc();
    labelYearFunc();
    if (!regexTwo.test(inputDayValue)) {
      labelDayFunc();
      requiredDay.innerText = "Enter valid date";
    }
  } else if (!inputDayValue && inputMonthValue && !inputYearValue) {
    labelDayFunc();
    labelYearFunc();
    if (!regexTwo.test(inputMonthValue)) {
      labelMonthFunc();
      requiredMonth.innerText = "Enter valid date";
    }
  } else if (!inputDayValue && !inputMonthValue && inputYearValue) {
    labelDayFunc();
    labelMonthFunc();
    if (!regexFour.test(inputYearValue)) {
      labelYearFunc();
      requiredYear.innerText = "Enter valid date";
    }
  } else if (inputDayValue && inputMonthValue && inputYearValue) {
    if (
      !regexTwo.test(inputDayValue) &&
      regexTwo.test(inputMonthValue) &&
      regexFour.test(inputYearValue)
    ) {
      labelDayFunc();
      requiredDay.innerText = "Enter valid date";
    
    } else if (
      regexTwo.test(inputDayValue) &&
      !regexTwo.test(inputMonthValue) &&
      regexFour.test(inputYearValue)
    ) {
      labelMonthFunc();
      requiredMonth.innerText = "Enter valid date";
    
    } else if (
      !regexTwo.test(inputDayValue) &&
      !regexTwo.test(inputMonthValue) &&
      regexFour.test(inputYearValue)
    ) {
      labelDayFunc();
      labelMonthFunc();
      requiredMonth.innerText = "Enter valid date";
      requiredDay.innerText = "Enter valid date";
    
    } else if (
      regexTwo.test(inputDayValue) &&
      regexTwo.test(inputMonthValue) &&
      !regexFour.test(inputYearValue)
    ) {
      labelYearFunc();
      requiredYear.innerText = "Enter valid date";
     
    } else if (
      !regexTwo.test(inputDayValue) &&
      !regexTwo.test(inputMonthValue) &&
      !regexFour.test(inputYearValue)
    ) {
      labelYearFunc();
      labelDayFunc();
      labelMonthFunc();
      requiredMonth.innerText = "Enter valid date";
      requiredDay.innerText = "Enter valid date";
      requiredYear.innerText = "Enter valid date";
     
    } else if (
      regexTwo.test(inputDayValue) &&
      !regexTwo.test(inputMonthValue) &&
      !regexFour.test(inputYearValue)
    ) {
      labelYearFunc();
      labelMonthFunc();
      requiredMonth.innerText = "Enter valid date";
      requiredYear.innerText = "Enter valid date";
     
    }
    
    
    
    else if (
      regexTwo.test(inputDayValue) &&
      regexTwo.test(inputMonthValue) &&
      regexFour.test(inputYearValue)
    ) {

      realDay.classList.add("transform");
      realMonth.classList.add("transform");
      realYear.classList.add("transform");

      const times = setTimeout(() => {


        let rawYear = thisYear - inputYearValue;
        let rawMonth = thisMonth - inputMonthValue;
        let rawDay = thisDay - inputDayValue;
        if (rawMonth < 0 || (rawMonth == 0 && rawDay < 0)) {
          rawYear--;
          rawMonth += 12;
        }
        if (rawDay < 0) {
          rawDay += 30;
          rawMonth--;
        }
        // if (
        //   rawYear % 4 == 0 ||
        //   (rawYear % 100 && rawYear % 400 && rawMonth > 2)
        // ) {
        //   rawDay++;
        // }
  
        realYear.innerText = rawYear;

        setTimeout(() => {
          realMonth.innerText = rawMonth;
        }, 500)

        setTimeout(() => {
          realDay.innerText = rawDay;
        }, 1000)
        



  
      }, 2000);

      inputDay.value = "";
      inputMonth.value = "";
      inputYear.value = "";

      
    }
  } else {
    fieldsColor();

    inputDay.addEventListener("input", () => {
      resetFieldsColor();
    });
  }


});
