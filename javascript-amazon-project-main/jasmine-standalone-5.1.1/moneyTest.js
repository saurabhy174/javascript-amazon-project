import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite: formatCurrency',()=>{                   //create a test suite
    it('convert cent into dollar',()=>{                      // it() for creating a test with a name,function
            expect(formatCurrency(2095).toEqual('20.95'));   //expect let us compare values to another value
    });
});