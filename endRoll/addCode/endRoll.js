$(function() {


    const pageHeight = $(window).height();


    $(".endRoll").css({
        height: pageHeight
    })

    $(".endRoll > div").css({
        height: pageHeight
    })





    // エンドロールの部分

    let endRollCount = 1;

    let checkEndRollCount = '';
    
    $(".endRoll > div").css({
        display: 'none'
    })

    $(".enderContent1").css({
        display: 'flex'
    })


    function nextEndRollContent() {

        checkEndRollCount = 100;

        endRollCount += 1;

        $(".endRoll > div").css({
            display: 'none'
        })

        $(".enderContent" + endRollCount).css({
            display: 'flex'
        })

    }


    $(".endRoll").click(function() {

        if (endRollCount <= 3) {
            nextEndRollContent();
            console.log(endRollCount)
        } else {
        }

    })

})