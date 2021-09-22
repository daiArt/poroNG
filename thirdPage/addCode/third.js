$(function() {


    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    console.log('高さ' + windowHeight);
    console.log('横幅' + windowHeight);

    localStorage.setItem('proNGWindowWidht' , windowWidth)
    localStorage.setItem('proNGWindowHeight' , windowWidth)
    
    let pageWidht = windowHeight * 0.75;

            
    $(".main").css({
        width: pageWidht,
        height: windowHeight
    })

    
    $(".background").css({
        width: windowWidth,
        height: windowHeight
    })
    
    $(".talkHeader").css({
        width: pageWidht,
    })
    
    
    let topScreanHiehgt = pageWidht / 1.75;
    let downScreanHeight = windowHeight - topScreanHiehgt;
    
    $(".gameUpper").css({
        height: topScreanHiehgt
    })
    
    let pageLeftStart = (windowWidth- pageWidht) / 2;
    
    $(".announcePlace").css({
        height: topScreanHiehgt,
        width: pageWidht,
        top: 0,
        left: pageLeftStart
    })
    
    $(".answerCommentary").css({
        width: pageWidht,
        height: windowHeight,
        left: pageLeftStart
    })

    let answerCommentaryHeight = windowHeight * 0.9

    $(".answerCommentary > div").css({
        height: answerCommentaryHeight
    })

    $(".gameDowner").css({
        height: downScreanHeight
    })
    
    $(".downerContent").css({
        height: downScreanHeight * 0.8
    })
    
    $(".wr-downerContent").css({
        height: downScreanHeight * 0.8
    })
    
    let getQuestionTextHeight = $(".questionText").height();
    let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
    $(".questionBox").css({
        height: downContentHeight
    })




    $(window).resize(function() {
        
            // 画面の横幅・縦幅を取得

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        localStorage.setItem('proNGWindowWidht' , windowWidth)
        localStorage.setItem('proNGWindowHeight' , windowHeight)
        

        let pageWidht = windowHeight * 0.75;

        
        
        $(".main").css({
            width: pageWidht,
            height: windowHeight
        })
        
        $(".background").css({
            width: windowWidth,
            height: windowHeight
        })

        $(".talkHeader").css({
            width: pageWidht
        })
        
        
        
        // 画面の上のサイズを設定
        
        
        let topScreanHiehgt = pageWidht / 1.75;
        let downSvreanHeight = windowHeight - topScreanHiehgt;


        console.log(topScreanHiehgt + '画面の上のところのサイズ')
        
        $(".gameUpper").css({
            height: topScreanHiehgt
        })


        let pageLeftStart = (windowWidth - pageWidht) / 2;

        $(".announcePlace").css({
            height: topScreanHiehgt,
            // width: pageWidht,
            // top: 0,
            // right: pageRightStart
        })

            
        $(".answerCommentary").css({
            width: pageWidht,
            height: windowHeight,
            left: pageLeftStart
        })

        let answerCommentaryHeight = windowHeight * 0.9

        $(".answerCommentary > div").css({
            height: answerCommentaryHeight
        })

        $(".gameDowner").css({
            height: downSvreanHeight
        })

        $(".downerContent").css({
            height: downSvreanHeight * 0.8
        })

        $(".wr-downerContent").css({
            height: downSvreanHeight * 0.8
        })


        let getQuestionTextHeight = $(".questionText").height();
        let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
        $(".questionBox").css({
            height: downContentHeight
        })
        
    })




    // 会話の内容を配列に組み込む

    const storyTlaking = [
        '俺たちの街の電力システムがジャックされた！？　デンコウジャー助けて！！',
        '街のいろんなところから電気が使えなくなったとの通報が、、、',
        'これは、きっと魔王の仕業だ！',
        '俺たちデンコウジャーがこの街を救って見せるぞ”！！',
        'どうやら、発電所に異常があるみたいだ、、',
        'とりあえず発電所に行くぞ！',
        'どうやらこの中に発電所があるみたいだ、、',
        'ってあいつは！',
        'よくきたなデンコウジャー。',
        'お前らに30分だけくれてやる！',
        'その間に我々が占領した5つの発電所を開放するんだな',
        'せいぜい手遅れにならないよう足掻くんだな。',
        'まずい、、30分以内に敵を倒しきらなきゃいけないみたいだ、、',
        '最初は火力発電所だ！　いくぞ！',
        'ｷｪｪｪｪｪｪｪｪ (敵が現れた)',
        'あいつがここを襲ったようだな、、',
        'ここは俺の出番だな。　火力発電所、返してもらうぞ！',
        'いけ！　○○○ ブラスト！',
        'うっ・・・　ﾄﾞｼｬｧ (敵が倒れた)',
        'ふぅ、なんとかなったな。',
        '次は水力エリアだ！',
        'ｸﾞｱｧｧｧｧ',
        '今度の敵はこいつか、、',
        'さぁ　俺の技を受けていただこう！',
        'これが俺の必殺技だ！',
        'いけっ！　〇〇〇〇キャノン！！',
        'ﾊﾞｯｼｬｰﾝ',
        'ｸﾞｪｪｪ..(敵が倒れた)',
        'ﾌｯ... この程度か... 次は風力発電所だ！',
        'つ...次は僕か...',
        'お、落ち着いていけば大丈夫。　なはず、、',
        'よし、いけ！　〇〇〇〇〇スラッシュ',
        'ｽﾊﾟｯｯ　(敵が倒れた)',
        'つ..次行こう！',
        'ｸﾞﾜｧｰ',
        'HEY!HEY!HEY!',
        '〇〇〇〇〇！！！　ショット！！！',
        'ピカーッ！！！',
        '買ったぜ！　ウェイ！',
        '次だZE GOGOGO!!!',
        'ｸﾞﾙﾙﾙﾙ',
        '我に宿し封印された力を今この場で開放してやろう！！',
        'いけっ！　〇〇〇〇〇〇〇〇〇〇〇',
        'ﾄﾞｯｶｰﾝ!!',
        'どうやら我の相手をするには100年早かったようだな！！',
        'きっと次でラストだ！　よし！　ラスボスのところに行くぞ！',
        'よくぞここまできたな。　　褒めてやろうじゃないか',
        '最後は手強いぞ、、　みんなで力を合わせよう！！',
        'おぉ！！',
        '行くぞ！　俺たちの合体技！',
        'パワージェネレーション！！！　〇〇！',
        'お、おのれ、、　覚えていろ！！',
        'こうして全ての発電所が正常に稼働し、街の姿は元に戻った。',

    ]


    const storyTalkerNomber = [
        '12',
        '13',
        '2',
        '1',
        '5',
        '1',
        '2',
        '2',
        '11',
        '11',
        '11',
        '11',
        '1',
        '1',
        '6',
        '2',
        '1',
        '1',
        '6',
        '1',
        '1',
        '7',
        '2',
        '2',
        '2',
        '2',
        '2',
        '7',
        '2',
        '3',
        '3',
        '3',
        '8',
        '3',
        '9',
        '4',
        '4',
        '4',
        '4',
        '4',
        '10',
        '5',
        '5',
        '5',
        '5',
        '1',
        '11',
        '1',
        '0',
        '2',
        '0',
        '11',
        '13'
    ]

    const talkerCharacterName = [
        '全員',
        'レッド',
        'ブルー',
        'グリーン',
        'イエロー',
        'ブラック',
        '敵 A',
        '敵 B',
        '敵 C',
        '敵 D',
        '敵 E',
        '魔王',
        '市民',
        'システム'
    ]








    // ※※到着・・　のとこ

    function announcePlaceOn() {

        $(".announcePlace").css({
            display: 'flex'
        });

        $(".talkSpace").css({
            display: 'none'
        })
    }

    function announcePlaceOff() {
        $(".announcePlace").addClass('closeChangePlace')
        $(".talkSpace").css({
            display: 'block'
        })

        setTimeout(function() {
            $(".announcePlace").attr('class','announcePlace');
            $(".announcePlace").css({
                display: 'none'
            })
        },200)
    }


    let talkCount = 0;


    // アタックボタンのIDを取得
    const attackButtonId = document.getElementById('inputAnswer');













    $(".gameUpper").click(function() {



        console.log(talkCount)

        if (talkCount === 6) {


            // 発電所到着

            announcePlaceOn();

            setTimeout(function() {

                announcePlaceOff();

                talkCount = 6;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

                talkCount = 7;

            },2500)




        } 
        
        
        
        
        else if (talkCount === 14) {

            // 火力発電所到着

            talkCount = 14;

            $(".announcePlace").html('<h1>火力発電</h1>');

            announcePlaceOn();

            setTimeout(function() {

                announcePlaceOff();

                talkCount = 14;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

                talkCount = 15;

            },2500)

        } 
        
        
        
        else if (talkCount === 17) {

            // 第一回戦開始

            talkCount = 17;

            $(".announcePlace").html('<h1>戦闘開始</h1>');

            announcePlaceOn();

            setTimeout(function() {
                announcePlaceOff();

                talkCount = 17;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                $(".downerContent").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    'どうやらこれは魔法陣のようだ、、　魔法陣を解いて ”2で割り切れる数字” を順番に読むと解けそう、、か？'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/1.png')

                $(".answerBox > h2").html(
                    'A. ???? ブラスト'
                )

                talkCount = 100


                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ボイラー') {
                    // alert('正解！！')

                    $(".downerContent").css({
                        display: 'none'
                    })

                    // ここに解説を載せたい

                    talkCount = 18;

                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;


                } else {
                    // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
                }

            })

        } 
        
        
        
        else if (talkCount === 21) {

            // 水力発電所到着

            talkCount = 21;

            $(".announcePlace").html('<h1>水力発電所</h1>');

            announcePlaceOn();

            setTimeout(function() {

                announcePlaceOff();

                talkCount = 21;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

                talkCount = 22;

            },2500)

        } 
        
        
        
        
        else if (talkCount === 25) {

            // 第二回戦開始

            talkCount = 25;

            $(".announcePlace").html('<h1>戦闘開始</h1>');

            announcePlaceOn();

            setTimeout(function() {
                announcePlaceOff();

                talkCount = 25;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                $(".downerContent").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    'この漢字、何かがおかしい？　何かが足りないのか？？'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/2.png')

                $(".answerBox > h2").html(
                    'A. ???? キャノン'
                )

                talkCount = 100



                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ハイドロ') {
                    // alert('正解！！')

                    $(".downerContent").css({
                        display: 'none'
                    })

                    // ここに解説を載せたい

                    talkCount = 26;

                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;

                } else {
                    // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
                }

            })

        } 
        
        
        
        
        else if (talkCount === 29) {

            // 風力発電所到着

            talkCount = 29;

            $(".announcePlace").html('<h1>風力発電所</h1>');

            announcePlaceOn();

            setTimeout(function() {

                announcePlaceOff();

                talkCount = 29;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

                talkCount = 30;

            },2500)

        } 
        
        
        
        
        
        else if (talkCount === 31) {

            // 第三回戦 開始！！

            talkCount = 31;

            $(".announcePlace").html('<h1>戦闘開始</h1>');

            announcePlaceOn();

            setTimeout(function() {
                announcePlaceOff();

                talkCount = 31;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                $(".downerContent").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    '下の形、、　何か意味がありそうだ。　この形、、　もしかして！？'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/3.png')

                $(".answerBox > h2").html(
                    'A. ????? スラッシュ'
                )

                talkCount = 100



                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ウィンドミル') {
                    // alert('正解！！')

                    $(".downerContent").css({
                        display: 'none'
                    })

                    // ここに解説を載せたい

                    talkCount = 32;

                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;

                } else {
                    // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
                }

            })

        }
        
        
        
        
        
        
        else if (talkCount === 34) {

            // 太陽光発電所到着

            talkCount = 34;

            $(".announcePlace").html('<h1>太陽光発電所</h1>');

            announcePlaceOn();

            setTimeout(function() {

                announcePlaceOff();

                talkCount = 34;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }

    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

                talkCount = 35;

            },2500)

        }



        else if (talkCount === 36) {

        // 第4回戦 開始！！

        talkCount = 36;

        $(".announcePlace").html('<h1>戦闘開始</h1>');

        announcePlaceOn();

        setTimeout(function() {
            announcePlaceOff();

            talkCount = 36;

            let characterSelect = storyTalkerNomber[talkCount];
            characterSelect = Number(characterSelect)

            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }


            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
            $(".downerContent").css({
                display: 'block'
            })

            // 問題の部分

            $(".questionText > h2").html(
                'Q. 謎を解いて技を発動しろ！！'
            )

            $(".questionText > p").html(
                '赤から Wに1, Sに1, Eに3, Wに2, Nに3, Eに2, Wに4, Sに2, Eに3, Sに2 に従ってなぞれ。　だそうだ。 えっと、NとSとWとE があるのか。　この四つどこかで？'
            )

            $(".questionImage > img").attr('src','./thirdPage/questionBox/4.png')

            $(".answerBox > h2").html(
                'A. ????? ショット'
            )

            talkCount = 100



            let getQuestionTextHeight = $(".questionText").height();
            let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
            $(".questionBox").css({
                height: downContentHeight
            })

        },2500)

        $(".attackButton").click(function() {

            let answerStorage = attackButtonId.value;

            if (answerStorage === 'サンシャイン') {
                // alert('正解！！')

                $(".downerContent").css({
                    display: 'none'
                })

                // ここに解説を載せたい

                talkCount = 37;

                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }
    
    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                talkCount += 1;

            } else {
                // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
            }

        })


        

        } else if (talkCount === 40) {

           // 原子力発電所到着

           talkCount = 40;

           $(".announcePlace").html('<h1>原子力発電所</h1>');

           announcePlaceOn();

           setTimeout(function() {

            announcePlaceOff();

            talkCount = 40;
 
            let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }
 
    
            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
 
            talkCount = 41;

           },2500)

        }



        else if (talkCount === 42) {

            // 第五開戦開始

            talkCount = 42;

            $(".announcePlace").html('<h1>戦闘開始</h1>');
    
            announcePlaceOn();
    
            setTimeout(function() {
                announcePlaceOff();
    
                talkCount = 42;
    
                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }
    
    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                $(".downerContent").css({
                    display: 'block'
                })
    
                // 問題の部分
    
                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )
    
                $(".questionText > p").html(
                    'よく見ると漢字に小さなカタカナがついている？？　順番通りに読んで最後に "ン" をつければ良さそうだ。'
                )
    
                $(".questionImage > img").attr('src','./thirdPage/questionBox/5.png')
    
                $(".answerBox > h2").html(
                    'A. ???????????'
                )
    
                talkCount = 100


    
                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })
    
            },2500)
    
            $(".attackButton").click(function() {
    
                let answerStorage = attackButtonId.value;
    
                if (answerStorage === 'ニュークエクスプローション') {
                    // alert('正解！！')
    
                    $(".downerContent").css({
                        display: 'none'
                    })
    
                    // ここに解説を載せたい
    
                    talkCount = 43;
    
                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;
    
                } else {
                    // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
                }
    
            })

        }



        else if (talkCount === 46) {

            // 魔王の城到着

           talkCount = 46;

           $(".announcePlace").html('<h1>魔王の城</h1>');

           announcePlaceOn();

           setTimeout(function() {

            announcePlaceOff();

            talkCount = 46;
 
            let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }
 
    
            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
 
            talkCount = 47;

           },2500)

        }



        else if (talkCount == 50) {


            // 多分特殊なことしなきゃだめっぽい

            // ラスボス戦開始

            talkCount = 50;

            $(".announcePlace").html('<h1>戦闘開始</h1>');
    
            announcePlaceOn();
    
            setTimeout(function() {
                announcePlaceOff();
    
                talkCount = 50;
    
                let characterSelect = storyTalkerNomber[talkCount];
                characterSelect = Number(characterSelect)
    
                if (characterSelect >= 0 & characterSelect <= 11) {
                    $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                }
    
    
                $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                $(".downerContent").css({
                    display: 'block'
                })
    
                // 問題の部分
    
                $(".questionText > h2").html(
                    'Q. 謎を解いて最後の合体技の合言葉を入手せよ！'
                )
    
                $(".questionText > p").html(
                    'いくら何でもものが少なすぎる、、 今までのクイズにキーワードが隠されているのか！？'
                )
    
                $(".questionImage > img").attr('src','./thirdPage/questionBox/5.png')
    
                $(".answerBox > h2").html(
                    'A. ???????????'
                )
    
                talkCount = 100


    
                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })
    
            },2500)
    
            $(".attackButton").click(function() {
    
                let answerStorage = attackButtonId.value;
    
                if (answerStorage === 'ハツデン') {
                    // alert('正解！！')
    
                    $(".downerContent").css({
                        display: 'none'
                    })
    
                    // ここに解説を載せたい
    
                    talkCount = 51;
    
                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;
    
                } else {
                    // alert('どうやら違うようだ、、　ちゃんとカタカナで書いたか？')
                }
    
            })

        }

        
        
        else if (talkCount <= 52) {
            let characterSelect = storyTalkerNomber[talkCount];
            characterSelect = Number(characterSelect)

            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }


            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
            talkCount += 1;


        }
        
        
    })

})