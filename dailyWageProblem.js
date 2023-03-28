
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