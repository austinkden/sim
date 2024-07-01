<?php
header("Content-Type: text/plain");

$metarUrl = "https://en.allmetsat.com/metar-taf/north-america.php?icao=KDEN";
$metarPage = file_get_contents($metarUrl);

if ($metarPage !== false) {
    echo $metarPage;
} else {
    echo "Error fetching METAR data.";
}
?>
