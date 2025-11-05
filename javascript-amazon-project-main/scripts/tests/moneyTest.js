import { formatCurrency } from "../utils/money.js";

   console.log('test suite = formatCurrency');
 console.log('convert cents into dollar');

if(formatCurrency(2095) === '20.95'){     // basic test case 1 - test if code is working
    console.log('passed');
}
else{
    console.log('failed');
}

 console.log('works with 0');

if(formatCurrency(0) === '0.00'){    //edge - test case 2- test with values that are tricky
    console.log('passed');
}else{
    console.log('failed');
}

 console.log('round up to the narest set');

if(formatCurrency(2000.5)=== '20.01'){    //edge case 3
    console.log('passed');
}else{
    console.log('failed');
}

if(formatCurrency(2000.4)=== '20.00'){    //edge case 4
    console.log('passed');
}else{
    console.log('failed');
}

//group of test cases=testSuite