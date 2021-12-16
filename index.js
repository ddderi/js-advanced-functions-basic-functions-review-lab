// Your code here

// function saturdayFun(activity){
//     return activity === "bathe my dog" ? "This Saturday, I want to bathe my dog!" : "This Saturday, I want to roller-skate!";
// }

function saturdayFun(string='roller-skate'){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string='go to the office'){
    return `This Monday, I will ${string}.`
}



function wrapAdjective(string='*'){
return function (special){
    return `You are ${string}${special}${string}!`
}
}

const Calculator = {
    add : function add(){return 1 + 3;},
    subtract : function subtract(){return 1 - 3;},
    multiply : function multiply(){return 1*3;},
    divide : function divide(){return 10 /5;}

}
arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]
  


function actionApplyer(initialParam, functionsArray){
    let result = initialParam;
    for (let i = 0; i < functionsArray.length; i++) {
        if (i === 0) {
            result = functionsArray[0](initialParam);

        } else { result = functionsArray[i](result);
        }
    }
    return result;
}