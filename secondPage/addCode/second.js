$(function() {

    
    
    var windowWidth = localStorage.getItem('proNGWindowWidht')
    var windowHeight = localStorage.getItem('proNGWindowHeight')
    
    
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
    
    $(".backButton").click(function() {
    
        $(".getPlayerSum").css({
            display: 'none'
        })
    
    })



        // 背景の設定

        $(".background img").css({
            width: windowWidth,
            height: windowHeight
        })


    // 前に戻るボタンの設定

    let backButtonPosition = (windowWidth - pageWidht) / 2;
    console.log(backButtonPosition)

    $(".backButton").css({
        left: backButtonPosition + 40
    })




    // 会話部分の設定

    // ステージ確認＆設定

    $(".getPlayerSum").css({
        display: 'none'
    })

    $(".getPlayerName").css({
        display: 'none'
    })

    $(".profileCheck").css({
        display: 'none'
    })

    $(".backButton").css({
        display: 'none'
    })

    let pageStage = 1;

    if (pageStage === 1) {

        // 会話文を配列に追加

        let kaiwa1 = [
            'ようこそ。　ヒーローたちよ',
            'この世界を救いに来てくれた事を感謝する',
            'まずは君たちの名前を教えてくれないか？'
        ]

        // 現在の会話の場所を設定する

        let talkWave = 0;

        $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')

        $(".main").click(function() {
            talkWave += 1;

            if (talkWave === 1) {
                $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')
            } else if (talkWave ===2) {
                $(".talkTarget").html('<h1>' + kaiwa1[talkWave] + '</h1>')
                $(".talkBox > p").css({
                    display: 'block'
                })
            } else if (talkWave === 3) {
                pageStage = 2;
            }

            if (pageStage === 2) {
                $(".talkSpace").css({display: 'none'});
                $(".getPlayerSum").css({
                    display: 'block'
                })
            }

        })

    }






    // プレイヤー数の取得

    $(".inputSumBox > .okBox").click(function() {

        let inputTarget = document.getElementById('getPlayerSum')
        let playerSum  = inputTarget.value;
        
        
        localStorage.removeItem('playerSum')
        
        localStorage.setItem('playerSum' , playerSum)
        
        
        pageStage = 3;
        
        $(".getPlayerSum").css({
            display: 'none'
        })
        
        $(".getPlayerName").css({
            display: 'block'
        })

        $(".backButton").css({display: 'block'})


        
        
        
        
        
        // 名前の取得
        
        // 最初の設定
        
        // let playerSum = localStorage.getItem('playerSum')


        for (i = 1; i <= 5; i++) {
            $("#PN" + i).css({
                display: 'flex'
            })

            $("#PNO" + i).css({
                display: 'flex'
            })
        }
        
        if (playerSum < 5) {
            for (i = 5; i > playerSum; i--)  {
                
                $("#PN" + i).css({
                    display: 'none'
                })

                $("#PNO" + i).css({
                    display: 'none'
                })
                
                localStorage.setItem('proNGPlayer' + i, 'none')

                localStorage.setItem('proNGPlayer' + i, 'none')
                
            }
        }
        
        $(".getPlayerName > .okBox").click(function() {
            
            for (i = 1; i <= playerSum; i ++) {

                let target = 'player' + i

                let inputTarget = document.getElementById(target)
                let strage = inputTarget.value;
                
                localStorage.setItem(target, strage);

                
                // ここでprofileCheckの設定をぶち込む
                $("#player" + i  + " > p").html(strage)

            };

            pageStage = 4;
            
            $(".getPlayerName").css({
                display: 'none'
            })
            
            $(".profileCheck").css({
                display: 'block'
            })
            
            
        })

    })
    
    $(".backButton").click(function() {
        
        if (pageStage < 3) {
            pageStage = 3
        }
        
        if (pageStage === 3) {
            $(".getPlayerName").css({display: 'none'})
            $(".getPlayerSum").css({display: 'block'})
            $(".backButton").css({display: 'none'})
        } else if(pageStage === 4) {
            $(".profileCheck").css({display: 'none'})
            $(".getPlayerName").css({display: 'block'})
        }
        pageStage -= 1;

    })


    $(".profileCheck > .okBox").click(function() {

        let testSum = localStorage.getItem('playerSum');
        let targetName = [];

        for (i = 1; i <= 5; i++) {

            let strage = localStorage.getItem('player' + i);

            targetName[i] = i +strage
        }

    })


    


}) 