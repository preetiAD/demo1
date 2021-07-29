function validateform()
{
alert("hello")
var name=document.myform.name.value;
var pass=document.myform.pass.value;
if(name==null || name=="")
{
alert("name cant be blank");
return false;
}
else if(pass.length<6)
{
alert("password is not valid");
return false;
}
}
