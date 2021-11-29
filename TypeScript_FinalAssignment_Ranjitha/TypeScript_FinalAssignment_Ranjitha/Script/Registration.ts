let AutoIncrementUserId=1000;
let availableUser ;


class UserRegistration{
    UserID:string;
    UserName:string;
    UserAge:number;
    UserMobileNumber:number;

    constructor(userName:string,userAge:number ,userMobile:number){
        this.UserID="UI"+AutoIncrementUserId.toString();
        this.UserName=userName;
        this.UserAge=userAge;
        this.UserMobileNumber=userMobile;
        AutoIncrementUserId++;
    }

}
class login{
    userID:string;

    constructor(userid :string){
        this.userID=userid;
    }
}

 let UserArrayList: Array<UserRegistration> = new Array<UserRegistration>();

 UserArrayList.push(new UserRegistration("Ranjitha", 23, 9789011226));
 UserArrayList.push(new UserRegistration("Ranjani", 17, 9445153060));



let UserList: UserRegistration[] = new Array();
let CurrentUser: UserRegistration;
function Registration()
{
    var course = document.getElementById('course');
    var UserRegistration = document.getElementById('UserRegistration');
    var login = document.getElementById('login');
    var details = document.getElementById('details');
    var ApplicationCourses = document.getElementById('ApplicationCourses');
    course.style.display = "none";
    UserRegistration.style.display = "block";
    login.style.display = "none";
    details.style.display = "none";
    availableUser.innerHTML = "<h2>Available User</h2>";

}


function register() {
    let name = (document.getElementById("newUserName") as HTMLInputElement).value;
    let age = parseInt((document.getElementById("newUserAge") as HTMLInputElement).value);
    let mobile = parseInt((document.getElementById("newUserPhoneNumber") as HTMLInputElement).value);
    

    let u1: UserRegistration = new UserRegistration(name, age ,mobile);
    UserList.push(u1);
    alert(`Your registration is complete.\n Your ID is ${u1.UserID}`);

    for (let i = 0; i < UserArrayList.length; i++) {
        availableUser.innerHTML += `UserName : ${UserArrayList[i].UserName} | User Id : ${UserArrayList[i].UserID}<br>`;
      }
   
    
    (document.getElementById("UserRegistration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("details") as HTMLDivElement).style.display = "none";
    (document.getElementById("ApplicationCourses") as HTMLDivElement).style.display = "none";

    console.log("Hi"+name+"Your Registration Number is"+u1.UserID)
    
}



function Login(){
    var course = document.getElementById('course');
    var UserRegistration = document.getElementById('UserRegistration');
    var login = document.getElementById('login');
    var details = document.getElementById('details');
    var ApplicationCourses = document.getElementById('ApplicationCourses');
    course.style.display = "none";
    UserRegistration.style.display = "none";
    login.style.display = "block";
    details.style.display = "none";

}
function Courses(){
    var course = document.getElementById('course');
    var UserRegistration = document.getElementById('UserRegistration');
    var login = document.getElementById('login');
    var details = document.getElementById('details');
    var ApplicationCourses = document.getElementById('ApplicationCourses');
    course.style.display = "none";
    UserRegistration.style.display = "none";
    login.style.display = "none";
    details.style.display = "none";
    ApplicationCourses.style.display="block";

}

   




