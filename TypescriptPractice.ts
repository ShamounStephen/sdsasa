// // // // // // // let firstName:string = "shamoun stephen";
// // // // // // // console.log(`hello ${firstName}, would you like to learn some Typescript today?`);

// // // // // // // let firstName:string = "Shamoun Stephen";
// // // // // // // console.log(firstName.toLowerCase());
// // // // // // // console.log(firstName.toUpperCase());
// // // // // // // console.log(firstName.charAt(0).toUpperCase()+ firstName.slice(1));

// // // // // // // console.log('Adolf Hitler once said "if you want to shine like a sun you have to burn like it"');

// // // // // // // let famous_person:string = "Adolf Hitler";
// // // // // // // let message:string = "if you want to shine like a sun you have to burn like it";
// // // // // // // console.log(`${famous_person} once said, "${message}"`);

// // // // // // // let firstName: string = "shamoun\tstephen";
// // // // // // // let firstName1: string = "shamoun\nstephen";
// // // // // // // console.log(firstName);
// // // // // // // console.log(firstName1);

// // // // // // // let a:number = 10
// // // // // // // let b:number = 5
// // // // // // // console.log(a+b);
// // // // // // // console.log(a-b);
// // // // // // // console.log(a*b);
// // // // // // // console.log(a/b);

// // // // // // // console.log(5+3);
// // // // // // // console.log(18-10);
// // // // // // // console.log(2*4);
// // // // // // // console.log(100/12);

// // // // // // // let num:number = 2020
// // // // // // // console.log(`my favourite number is ${num}`);

// // // // // // // let a:number = 10
// // // // // // // let b:number = 20
// // // // // // // console.log(`${a}+${b}=${a+b}`);

// // // // // // // // subtraction program
// // // // // // // console.log(`${a}-${b}=${a-b}`);

// // // // // // let names:string[] = ["shamoun stephen", "asher nawab", "noel"];
// // // // // // // console.log(names[0]);
// // // // // // // console.log(names[1]);
// // // // // // // console.log(names[2]);


// // // // // // let message: string = "is the founder of IT mate USA";
// // // // // // console.log(names[0] + " " + message);
// // // // // // console.log(names[1] + " " + message);
// // // // // // console.log(names[2] + " " + message);


// // // // // let vehicles:string[] =["Honda Motorcyle", "Honda City", "Honda Civics", "BMW", "Supra", "Audi"];
// // // // // // console.log("I would like to own a" + " "+vehicles[0]);
// // // // // vehicles.map((item)=>(
// // // // //     console.log(`I would like to own a ${item}`)
// // // // // ));


// // // let guestArr:string[] = ["shamoun stephen", "asher nawab", "noel"];
// // // // guestArr.map((item)=>(
// // // //     console.log(`Dear ${item}, you are corodilly invited to a dinner`)
// // // // ));


// // // // Qus 15

// // // console.log(guestArr);
// // // let conNotAttend:string ="asher nawab";
// // // console.log (conNotAttend+` `+"can not make it, for dinner");

// // // let newGuest:string = "raffy Ali"
// // // guestArr[guestArr.indexOf(conNotAttend)] = newGuest;
// // // console.log(guestArr);
// // // guestArr.map((item)=>(
// // //     console.log(`Dear ${item}, you are corodilly invited to a dinner`)
// // // ));


// // // Ques 16

// let guestArr:string[] = ["shamoun stephen", "asher nawab", "noel"];
// let conNotAttend:string ="asher nawab";
// let newGuest:string = "raffy Ali"
// guestArr[guestArr.indexOf(conNotAttend)] = newGuest;
// // console.log(guestArr);
// // guestArr.map((item)=>(
// //     console.log(`Dear ${item}, I found a bigger dinner table.`)
// // ));
// // let guestBegin:string = "Alex"
// guestArr.unshift("Alex");
// // console.log(guestArr);
// let middleguest: string = "Crime Master GoGO";
// let middleIndex = guestArr.length / 2;
// guestArr.splice(middleIndex, 0, middleguest);
// // console.log(guestArr);
// guestArr.push("Michael");
// // console.log(guestArr);
// // guestArr.map((item)=>(
// //     console.log(`Dear ${item}, you are corodilly invited to a dinner`)
// // ));


// // Ques 17


// // console.log("I can invite only two people to dinner");
// // while(guestArr.length>2){
// //     let removeGuest = guestArr.pop()
// //     console.log(`Dear ${removeGuest}, you are not invited to the dinner`)
// // };
// // guestArr.map((item)=>(
// //     console.log(`Dear ${item}, you are still invited to the dinner`)
// // ));
// // guestArr.pop();
// // guestArr.pop();
// // console.log(guestArr);


// // Ques 18

// // console.log(guestArr.length+ " "+"peoples" + " "+"are invited to dinner");


// // Ques 19

// let countryArr = ["Pakistan", "India", "Argentina", "zimbawe","America","Bangladesh"];
// // console.log(countryArr);
// // console.log(countryArr.sort());
// // console.log(countryArr);
// // console.log(countryArr.reverse());
// let sortedArray = ["Pakistan", "India", "Argentina", "zimbawe","America","Bangladesh"];
// console.log(sortedArray);
// sortedArray.reverse();
// console.log(sortedArray);


//question no 20

// let Guest_List  = ['Alex', 'Zakarry', 'wick'];
// {
//     console.log(` Hello, ${Guest_List} you are very welcome to the dinner i arrange it for you. `);
// }
// if (Guest_List[1]) 
// {
//     console.log(`${Guest_List[1]} can't make it.`);
//     Guest_List[1] = 'Martin';
//     for (let guest of Guest_List) 
//     {
//         console.log(`Hello ${guest}, you are still invited to dinner.`);
//     } 
// }


//question no 21



let GuestsList  = ['faiza', 'shamoun', 'john'];
for (let guest of GuestsList)
 {
  console.log(`Hello ${guest} you are very welcome to the dinner i arrange.`)
}

console.log('Great news! I found a better and bigger dinner table.');
GuestsList.unshift('larrisa');
GuestsList.splice(2, 0, 'alan walker');
GuestsList.push('evangeline');
for (let guest of GuestsList)
  {
    console.log(`Hello ${guest}, you are invited to the expanded dinner.`);
}


//question no 22 


