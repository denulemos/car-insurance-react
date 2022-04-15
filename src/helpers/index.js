export const getYearDifference = (year) => {
    return new Date().getFullYear() - year;
}

export const calculateLabel = (label) => {
    let increment;

    switch(label) {
        case "1": 
            increment = 1.30
            break;
        case "2":
            increment = 1.15;
            break;
        case "3":
            increment = 1.05;
            break;
        default: 
            break;
    }

    return increment;
}

export const calculatePlan = (plan) => {
    return plan === "1" ? 1.30 : 1.15;
}

export const formatMoney = (amount) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      
      return formatter.format(amount); /* $2,500.00 */

}