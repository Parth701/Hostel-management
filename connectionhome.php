<?php
// error_reporting(0);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "homefeed";

$conn = new mysqli('localhost', 'root', '', 'homefeed');
if(isset($_POST['submit']))
{
    

    if(!empty($_POST['firstname']) && !empty($_POST['lastname']) && !empty($_POST['phonenumber'])&& !empty($_POST['subje']))
    {
        $first_name = $_POST['firstname'];
        $last_name = $_POST['lastname'];
        $phone_number = $_POST['phonenumber'];
        $subjec = $_POST['subje'];

        $query = "insert into hhoo(firstname,lastname,phonenumber,subje) VALUES($first_name, $last_name, $phone_number, $subjec)";
        $run = mysqli_query($conn,$query) ;
        if($run)
        {
            echo "Data Inserted into database";
        }
        else{
            echo "Failed";
        }

    }
    else{
        echo "All Fields REquired";
    }

}
else{
    echo "Connection Failed".mysqli_connect_error();
}

?>