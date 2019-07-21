
$(document).ready(function () {
    let wins = 0;
    let losses = 0;
    let score = 0;
    let valRandomDisplayInt = valRandomDisplay();

    function valRandomDisplay() {
        const value = Math.floor(Math.random() * 120) + 12;
        value.toString();
        return value;
    };

    function valRandomCrystals() {
        const value = Math.floor(Math.random() * 12) + 1;
        value.toString();
        return value;
    };

    $("#blue").attr("value", valRandomCrystals());
    $("#purple").attr("value", valRandomCrystals());
    $("#white").attr("value", valRandomCrystals());
    $("#yellow").attr("value", valRandomCrystals());
    $(".randomeNumberDisplay").append("<p>" + valRandomDisplayInt);
    $(".ourWins").append("<p>" + wins);
    $(".ourLosses").append("<p>" + losses);
    $(".scoreDisplay").append(score);

    $(".myThumbnail").on("click", function () {
        score = score + parseInt($(this).attr("value"));
        $(".scoreDisplay").empty();
        $(".scoreDisplay").append(score);

        console.log("score=" + score + " valRandomDisplayInt=" + valRandomDisplayInt);
        if (score == valRandomDisplayInt) {
            wins++;
            valRandomDisplayInt = valRandomDisplay();
            $("#blue").attr("value", valRandomCrystals());
            $("#purple").attr("value", valRandomCrystals());
            $("#white").attr("value", valRandomCrystals());
            $("#yellow").attr("value", valRandomCrystals());
            score = 0;

            $(".randomeNumberDisplay").empty();
            $(".randomeNumberDisplay").append("<p>" + valRandomDisplayInt)
            $(".ourWins").empty();
            $(".ourWins").append("<p>" + wins);
        }
        if (score > valRandomDisplayInt) {
            losses++;
            valRandomDisplayInt = valRandomDisplay();
            $("#blue").attr("value", valRandomCrystals());
            $("#purple").attr("value", valRandomCrystals());
            $("#white").attr("value", valRandomCrystals());
            $("#yellow").attr("value", valRandomCrystals());
            score = 0;
            $(".randomeNumberDisplay").empty();
            $(".randomeNumberDisplay").append("<p>" + valRandomDisplayInt)
            $(".ourLosses").empty();
            $(".ourLosses").append("<p>" + losses);
        }
    });
});


