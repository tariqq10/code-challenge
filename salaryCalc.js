const prompt = require('prompt-sync')();
function netSalaryCalc() {
    const salary = parseInt(prompt('Enter your Salary: '));
    let deductionA = 0;
    let deductionB = 0;
    let deductionC = 0;
    let deductionD = 0;
    let taxSalary =0;
    if (salary <= 24000 && salary >= 0) {
        let deductionA = salary * 0.1;
        console.log(taxSalary)
    } else if (salary <= 32333 && salary >= 24001) {
        let deductionA = salary * 0.1
        let deductionB = 0.25 * (salary - deductionA);
        console.log(taxSalary)
    } else if (salary <= 500000 && salary >= 32334) {
        let deductionA = salary * 0.1
        let deductionB = 0.25 * (salary - deductionA)
        let deductionC = 0.3 * (salary - deductionB - deductionA)
        console.log(taxSalary)

    } else if (salary <= 800000 && salary >= 500001) {
        let deductionA = salary * 0.1
        let deductionB = 0.25 * (salary - deductionA)
        let deductionC = 0.3 * (salary - deductionB - deductionA)
        let deductionD = 0.325(salary - deductionC - deductionB - deductionA)
        console.log(taxSalary)

    } else if (salary > 800000) {
        let deductionA = salary * 0.1
        let deductionB = 0.25 * (salary - deductionA)
        let deductionC = 0.3 * (salary - deductionB - deductionA)
        let deductionD = 0.325(salary - deductionC - deductionB - deductionA)
        let deductionE = 0.35(salary - deductionD - deductionC - deductionB - deductionA)
        console.log(taxSalary)

    }

    //NHIF
    let healthDec=0;
    let nhif =0;
    if(salary<=5999){
        let healthDec=salary-150;
        console.log(nhif)
    }else if (salary<=7999 ){
        let healthDec=salary-300
        console.log(nhif)
    }else if (salary<=11999 ){
        let healthDec=salary-400
        console.log(nhif)
    }else if (salary<=14999 ){
        let healthDec=salary-500
        console.log(nhif)
    }else if (salary<=19999 ){
        let healthDec=salary-600
        console.log(nhif)
    }else if (salary<=24999 ){
        let healthDec=salary-750
        console.log(nhif)
    }else if (salary<=29999 ){
        let healthDec=salary-850
        console.log(nhif)
    }else if (salary<=34999 ){
        let healthDec=salary-900
        console.log(nhif)
    }else if (salary<=39999 ){
        let healthDec=salary-950
        console.log(nhif)
    }else if (salary<=44999 ){
        let healthDec=salary-1000
        console.log(nhif)
    
    }else if (salary<=49999 ){
        let healthDec=salary-1100
        console.log(nhif)
    }else if (salary<=59999 ){
        let healthDec=salary-1200
        console.log(nhif)
    }else if (salary<=69999 ){
        let healthDec=salary-1300
        console.log(nhif)
    }else if (salary<=79999 ){
        let healthDec=salary-1400
        console.log(nhif)
    }else if (salary<=89999 ){
        let healthDec=salary-1500
        console.log(nhif)
    }else if (salary<=99999 ){
        let healthDec=salary-1600
        console.log(nhif)
    }else if (salary>100000 ){
        let healthDec=salary-1700
        console.log(nhif)
    }
    const nssfDeduction = salary * 0.06;
    let sumDeduc =nssfDeduction+taxSalary+nhif;
    let netsalary=salary-sumDeduc;


    console.log(`gross`,salary);
    console.log(`Income tax`,taxSalary);
    console.log(`NHIF`,nhif);
    console.log(`NSSF`,nssfDeduction);
    console.log(`Amount deducted`,sumDeduc);
    console.log(`Net pay`,netsalary);
    
    }
    netSalaryCalc();

