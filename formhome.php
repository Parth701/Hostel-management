<?php include("connectionhome.php"); 

    if($_POST['buttt'])
    {
        $first_name = $_POST['firstname'];
        $last_name = $_POST['lastname'];
        $phone_number = $_POST['phonenumber'];
        $subjec = $_POST['subje'];

        $query = "INSERT INTO home values($first_name, $last_name, $phone_number, $subjec)";
        $data = mysqli_query($conn,$query);
        if($data)
        {
            echo "Data Inserted into database";
        }
        else{
            echo "Failed";
        }

    }
?>