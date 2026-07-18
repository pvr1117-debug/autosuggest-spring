// alert("hello from js")
console.log("hello from js")

data = {
    "name": "John",
    "gender": "Male"
}

// data.name // John
var  users = [
    {
    "name": "John Doe",
    "gender": "Male",
    "img": "john.png"
},
{
    "name":"Jane Doe",
    "gender":"female",
    "img":"jane.png"
}
]

var id=0;

function toggleuser()
{
    id=(id+1)%2

    var userImage= document.getElementById("User-Image");
    userImage.src=users[id].img;

    var userName= document.getElementById("user-name");
    userName.innerHTML=users[id].name;

    var userGender=DocumentFragment.getElementById("user-Gender");
    userGender.innerHTML=users[id].gender;
}