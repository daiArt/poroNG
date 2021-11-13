$(function() {


    const pageHeight = $(window).height();


    $(".opening").css({
        height: pageHeight
    })

    $(".roadNow").css({
        height: pageHeight
    })



    // 今オープニングのいくつ目か確認するためのもの

    let openingCount = 1;



    // openingCountを停止するもの

    let checkOpeningCount = 100;


    const attenstionText = [
        '※このゲームをプレイする上で',
        '1、このゲームは10〜12歳向けですが、',
        '保護者や先生など大人の人と一緒にプレイすることをおすすめします',
        '読めない漢字や表現などが出てきたら聞いてみてください',
        '2、このゲームはWi-Fi環境でのプレイをお勧めします',
        '画像の読み込みなどを行いますのでご注意ください',
        '3,プレイ時間はおよそ15〜40分です',
        '＊プレイ時間は目安です。　余裕を持って始めることをおすすめします',
        '4、プレイ中にこのページを消してしまった場合最初からになってしまいます',
        'ですが、答えは一緒になっておりますので最初から頑張りましょう',
        '5、画面の連打はやめてください。　予期せぬ不具合が起こる場合があります',
        'それでは、ゲームスタートです！'
    ]


    function nextOpeningText() {

        openingCount += 1;

        $(".openingText h1").html(attenstionText[openingCount]);

        console.log(openingCount)

    }

    

    // クリックしたときの動作

    $(".opening").click(function() {

        if (checkOpeningCount === 0 && openingCount <= 10) {

            nextOpeningText();

        } else if (checkOpeningCount === 0 && openingCount === 11) {

            // ここにプレイ用のやついれる
            window.location.href = '../../thirdPageBox/third.html';

        }

    })



    // 動作開始


    const rehearsalOpening = setInterval(function() {
        $(".openingText h1").html(attenstionText[openingCount]);

        openingCount += 1;
    },100)


    setTimeout (function() {

        clearInterval(rehearsalOpening);

        openingCount = 0;
        checkOpeningCount = 0;

        $(".openingText h1").html(attenstionText[openingCount]);
        $(".roadNow").css({
            display: 'none'
        })

    },1500)


})