<?php
$data =$_REQUEST['key'];
$URLdata=explode(",",$data);
$con = new mysqli("localhost","root","","master");
if(!$con)
{
    die ("connection failed".mysqli_connect_error());
}

$sql="insert into Rating(Address,1,2,3,4,5)values ('$URLdata[0]','$URLdata[1]','$URLdata[2]','$URLdata[3]','$URLdata[4]')";
if(mysqli_querry($con,$sql)){
    echo "Thank you! for Rating.Hope you like our Services";
}
?>



$sql="insert into login(Address,1,2,3,4,5)values ('$URLdata[0]','$URLdata[1]','$URLdata[2]','$URLdata[3]','$URLdata[4]')";
if(mysqli_querry($con,$sql)){
    echo "Thank you!";
}