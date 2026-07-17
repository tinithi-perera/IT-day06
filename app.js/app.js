// console.log("hello");

// class Student{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }
// }
 
// let s1=new Student("Tinithi",22,"moratuwa");
// console.log(s1);


// let c2={
//     name:"Tinithi",
//     age:22,
//     address:"Moratuwa",
//     salary: 50000,
//     items:[
//         {
//             id:1,
//             name:"item1",
//             price:100,
//             variants:[
//                 {
//                     id:1,
//                     name:"var1",
//                     price:23
//                 },
//                 {
//                      id:2,
//                     name:"var2",
//                     price:24
//                 }

//             ]
//         },
//         {
//              id:1,
//             name:"item1",
//             price:100,
//             variants:3
//         }

//     ],
//     farther:{
//         name:"padmalal",
//         age:60,
//         address:"moratuwa"
//     }
// };
// console.log(c2);
// console.log(c2.name);
// console.log(c2.age);
// console.log(c2.salary);
// console.log(c2.items);
// console.log(c2.farther.name);
// // console.log(c2.items[1]);
// console.log(c2.items[0].variants[0]);

// DOM manipulation

// document.write("<h2>tintin</h2>");

// let heading=document.getElementById("heading");
// // // console.log(heading);

// // heading.innerText="Hiiii tintin";
// let num=0;
// function increase(){
//     console.log("clicked");
    
//     heading.innerText=++num;
    
// }
// function decrease(){
//     console.log("clicked");
    
//     heading.innerText=--num;
    
// }


// function changetext(){
//     let textint=document.getElementById("inputtext");
//     let heading=document.getElementById("heading");
//     heading.innerText=textint.value;
    
//     console.log("clicked");
    
// }

// function addition(){
//      let textint1=document.getElementById("num1");
//      let textint2=document.getElementById("num2");
//      let num1=textint1.value;
//      let num2=textint2.value;
//     //  let result=Number(num1) + Number(num2);
//      let result=parseInt(num1)+parseInt(num2);
//      let heading=document.getElementById("heading");
//      heading.innerText=result;
//      console.log(result);
// }


// function substraction(){
//      let textint1=document.getElementById("num1");
//      let textint2=document.getElementById("num2");
//      let num1=textint1.value;
//      let num2=textint2.value;
//      let result=(num1) - (num2);
//      let heading=document.getElementById("heading");
//      heading.innerText=result;
//      console.log(result);
// }


//////////////////////////////////////////
let customerList=[];
function btnAddCustomerOnAction(){
    let txtName=document.getElementById("txtName").value;
    let txtAddress=document.getElementById("txtAddress").value;
    let txtAge=document.getElementById("txtAge").value;
    let txtEmail=document.getElementById("txtEmail").value;
    let txtSalary=document.getElementById("txtSalary").value;

    console.log(txtName);
    console.log(txtAddress);
    console.log(txtAge);
    console.log(txtEmail);
    console.log(txtSalary);

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }
    
    customerList.push(customer);
    console.log(customerList);
    
    
    
    
}