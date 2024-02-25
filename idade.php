<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    $idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT);

    if ($idade >= 0 && $idade < 15) {
        echo '<script>alert("Criança");</script>';

    } elseif ($idade >= 15 && $idade < 30) {
        echo '<script>alert("Jovem");</script>';

    } elseif ($idade >= 30 && $idade < 60) {
        echo '<script>alert("Adulto");</script>';

    } else {
        echo '<script>alert("Idoso");</script>';
    }
?>

</body>
</html>
