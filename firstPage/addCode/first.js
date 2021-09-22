$(function() {

    // 画面の横幅・縦幅を取得

    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    localStorage.setItem('proNGWindowWidht' , windowWidth)
    localStorage.setItem('proNGWindowHeight' , windowHeight)
    
    var testW = localStorage.getItem('proNGWindowWidht')
    var testH = localStorage.getItem('proNGWindowHeight')

    console.log(testW)
    console.log(testH)

    let pageWidht = windowHeight * 0.75;

    $(window).resize(function() {
        
            // 画面の横幅・縦幅を取得

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        localStorage.setItem('proNGWindowWidht' , windowWidth)
        localStorage.setItem('proNGWindowHeight' , windowHeight)
        
        var testW = localStorage.getItem('proNGWindowWidht')
        var testH = localStorage.getItem('proNGWindowHeight')

        console.log(testW)
        console.log(testH)

        let pageWidht = windowHeight * 0.75;

    })

    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })


    // Mainの画面設定


    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })


    // 背景の設定

    $(".background img").css({
        width: windowWidth,
        height: windowHeight
    })


})