"use strict";
// const year = document.getElementById('year') as HTMLDataElement;
// const thisYear = new Date().getFullYear() as any;
// year.setAttribute("datatime", thisYear)
// year.textContent = thisYear
// // 1st varition
// let year: HTMLElement | null
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if(year){
// year.setAttribute("datatime", thisYear);
// year.textContent = thisYear;
// }
// 2nd varition
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datatime", thisYear);
year.textContent = thisYear;
