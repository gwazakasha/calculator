// alert("this is my first javascript page");

// let myName = "kasha";
// let myState = "benue";
// let myAge = 21;
// myInfo = ('my name is '+ myName + ', I am from ' + myState + ' state, ' + ' my age is '+ myAge);

// document.write(myInfo);

// let kasha = {firstName:"kasha",
//             lastName:"gwaza",
//             state:"benue",  
//             Age:"21" 
// };
// console.log(kasha.firstName + "" + kasha.state);

// let kashaWeight = 50;
// let kashaHeight = 6.2;

// let kashaBMI = (kashaWeight/(kashaHeight**2));

// console.log(kashaBMI);

// let samWeight = 60;
// let samHeight = 5.39;

// let samBMI = (samWeight/(samHeight**2));

// console.log(samBMI);

// if (kashaBMI > samBMI) {
//     console.log("kasha BMI " + kashaBMI + " is higher than smas BMI " + samBMI)
//   }  else if ( kashaBMI === samBMI){
//  console.log("kasha BMI is same as sams BMI")
//   } else{
//  console.log(" sam BMI is greater")
//   };


// let kashaScore1 = 70
// let kashaScore2 = 80
// let kashaScore3 = 90

// let kashaAverage = (kashaScore1 + kashaScore2 +kashaScore3/3)

// let sam1 = 60
// let sam2 = 80
// let sam3 = 90

// let samAverage = (sam1 + sam2 + sam3/3)

// if (kashaAverage > samAverage) {
//    console.log(`kashaAverage ${kashaAverage} is higher than samAverage ${samAverage}`)
// }else if ( kashaAverage === samAverage){
//     console.log(" kashaAverage is the same as samAverage")
// } else {
//     console.log(" sam average is higher ")
// };

// let day = 'tuesday'


// if (day === 'monday') {
//     console.log('plan course structure');
//     console.log('Go to  coding meetup');
// } else if ('day === tuesday') {
//     console.log('prepare theory vidoes');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('write code examples');
// } else if (day === 'friday'){
//     console.log('record vidoes');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy the weekend');
// } else {
//     console.log('not a valid day')
// }
    
// switch('monday'){
//     case 'monday':
//      console.log('plan course stucture');
//      console.log('go to coding meetup');
//      break; 
//    case 'tuesday':
//     console.log('prepare thoery vidoes')
//     break; 
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend') ;
//         break;
//        default: 
//         console.log('not a valid day')         
// }
    
// function bmi (height , weight) {
//     return weight/(height*height);
// }

// let kashaBMI = bmi(6.5, 70);
// let samBMI = bmi(3.5 , 60);
// let billyBMI = bmi(5.9 , 90);
// let tersooBMI = bmi(6.1 , 70);
// console.log(Math.floor(kashaBMI));
// console.log(Math.floor(samBMI));
// console.log(Math.floor(billyBMI));
// console.log(Math.floor(tersooBMI));


// function average(score1 , score2 , score3 ) {
//     return (score1 + score2 + score3);
// }

// let kashaAverage = average(90,30,50);
// console.log(kashaAverage);

// let samAverage = average(50,55,90);
// console.log(samAverage);

// const birth = birthyear => 2022 - birthyear;
// const age = birth (2007);
// console.log(age);

// const ageDifference = (18-age);

// if (age >= 18) { 
//     console.log('congratulations')
// }  else  {
//     console.log('try again in ' + ageDifference + ' years time')
// }

// document.getElementById("head").innerHTML = "hello codies!";
// document.getElementById("paragraph").innerHTML = "hello codies!";


function calc() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);

    let operator = document.querySelector("#operator").value;
    let calculate;

    if (operator === "add") {
        calculate = a + b ;
    } else if  (operator === "sub") {
        calculate = a - b ;
    } else if (operator === "div"){
        calculate = a/b ;
    } else if (operator === "mult") {
        calculate = a * b ;
    } else{
        calculate = "are u an alein";
    }


    document.querySelector(".results").innerHTML = calculate;
}
