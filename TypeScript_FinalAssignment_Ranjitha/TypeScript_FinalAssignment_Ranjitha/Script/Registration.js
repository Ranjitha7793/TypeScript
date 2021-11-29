var AutoIncrementUserId = 1000;
var availableUser;
var UserRegistration = /** @class */ (function () {
    function UserRegistration(userName, userAge, userMobile) {
        this.UserID = "UI" + AutoIncrementUserId.toString();
        this.UserName = userName;
        this.UserAge = userAge;
        this.UserMobileNumber = userMobile;
        AutoIncrementUserId++;
    }
    return UserRegistration;
}());
var login = /** @class */ (function () {
    function login(userid) {
        this.userID = userid;
    }
    return login;
}());
var UserArrayList = new Array();
UserArrayList.push(new UserRegistration("Ranjitha", 23, 9789011226));
UserArrayList.push(new UserRegistration("Ranjani", 17, 9445153060));
var UserList = new Array();
var CurrentUser;
function Registration() {
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
    var name = document.getElementById("newUserName").value;
    var age = parseInt(document.getElementById("newUserAge").value);
    var mobile = parseInt(document.getElementById("newUserPhoneNumber").value);
    var u1 = new UserRegistration(name, age, mobile);
    UserList.push(u1);
    alert("Your registration is complete.\n Your ID is ".concat(u1.UserID));
    for (var i = 0; i < UserArrayList.length; i++) {
        availableUser.innerHTML += "UserName : ".concat(UserArrayList[i].UserName, " | User Id : ").concat(UserArrayList[i].UserID, "<br>");
    }
    document.getElementById("UserRegistration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("details").style.display = "none";
    document.getElementById("ApplicationCourses").style.display = "none";
    console.log("Hi" + name + "Your Registration Number is" + u1.UserID);
}
function Login() {
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
function Courses() {
    var course = document.getElementById('course');
    var UserRegistration = document.getElementById('UserRegistration');
    var login = document.getElementById('login');
    var details = document.getElementById('details');
    var ApplicationCourses = document.getElementById('ApplicationCourses');
    course.style.display = "none";
    UserRegistration.style.display = "none";
    login.style.display = "none";
    details.style.display = "none";
    ApplicationCourses.style.display = "block";
}
