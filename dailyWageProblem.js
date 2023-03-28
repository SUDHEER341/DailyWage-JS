
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const IS_Part_Time_Emp = 1;
const IS_Full_Time_Emp = 2;
const Wage_Per_Hour =20;
const Num_Of_Working_Days = 20;
const Max_Working_Hours_in_Month = 160;


    function calculatingDailyWage(employeeHours){
        return employeeHours * Wage_Per_Hour;
}

function getWorkingHours(checkEmployee){
    switch (checkEmployee){
        case IS_Part_Time_Emp:
            return Part_Time_hours;
        case IS_Full_Time_Emp:
            return Full_Time_Hours;
            default:
                return 0;
    }
}
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let empDAilyWageArr = new Array();

while (totalEmployeeHours <= Max_Working_Hours_in_Month && totalWorkingDays < Num_Of_Working_Days){
    totalWorkingDays++;
    let checkEmployee = Math.floor(Math.random() * 10) % 3;
    let employeeHours =getWorkingHours(checkEmployee);
    totalEmployeeHours += employeeHours;
    empDAilyWageArr.push(calculatingDailyWage(employeeHours));
}

let employeeWage = calculatingDailyWage(totalEmployeeHours);
console.log("uc-6 Total Days :- "+totalWorkingDays + "Total Hours: "+totalEmployeeHours +"Emp Wage: "+employeeWage);

let empWage = calculateDailyWage(totalEmpHours);
console.log("UC6 -Total Days: "+totalWorkingDays + "Total Hours: "+totalEmpHours +"Emp Wage: "+empWage);


// UC 7A - Calculate total Wage using Array forEach traversal or reduce method

let totalEmployeeWage =0;
function sum(dailyWage){
    totalEmployeeWage += dailyWage;
}
empDAilyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays +"Total Hours: "+totalEmpHours+"Emp Wage: "+ totalEmployeeWage);
function totalWage(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce:"+ empDAilyWageArr.reduce(totalWage,0));

//UC 7B - show the Day along with Daily Wage using Array map helper function

let dailyCount = 0;
function mapDayWithWage(dailyWage)
{
    dailyCount++;
    return dailyCount +" = " + dailyWage;
}
let mapDayWithWageArray = empDAilyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C - Show Days when Full time wage of 160 were earned

function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArray.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earnwd on Day: "+mapDayWithWageArray.find(findFulltimeWage));


//UC 7E - Check if Every Element of Full Time Wage is truely holding Full time wage

function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 6E - Check All Element have Full Time Wage: "+ fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any Part Time Wage

function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Worked

function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+ empDAilyWageArr.reduce(totalDaysWorked,0));