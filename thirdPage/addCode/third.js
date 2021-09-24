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
        width: pageWidht - 10,
        left: pageLeftStart + 5
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

    $(".lastQuestionImage").css({
        width: pageWidht,
        height: windowHeight,
        left: pageLeftStart
    })

    $(".lastQuestionImageInside").css({
        height: answerCommentaryHeight
    })

    $(".gameDowner").css({
        height: downScreanHeight
    })

    $(".downerContent").css({
        height: downScreanHeight * 0.8
    })

    $(".downerContent > div").css({
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




    // 会話の内容を配列に組み込む

    const storyTlaking = [
        '俺たちの町の電力システムがジャックされた！？　デンコウジャー助けて！！',
        '街のいろんなところから電気が使えなくなったとの通報が、、、',
        'これは、きっと魔王の仕業だ！',
        '俺たちデンコウジャーがこの街を救って見せるぞ”！！',
        'どうやら、発電所に問題があるみたいだ、、',
        'とりあえず発電所に行くぞ！',
        'どうやらこの中に発電所があるみたいだ、、',
        'ってあいつは！',
        'よくきたなデンコウジャー。',
        'お前らに30分だけくれてやる！',
        'その間に我々が奪ったした5つの発電所を取り戻してみるんだな',
        'せいぜい手遅れになる前に',
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
        'どうやら俺の出番だな',
        '俺の技を受けていただこう！',
        'これが俺の必殺技だ！ <br>いけっ！　〇〇〇〇キャノン！！',
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
        '勝ったぜ！　ウェイ！',
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
        '行くぞ！　俺たちの合体技！ <br>パワージェネレーション！！！　????！',
        'お、おのれ、、　覚えていろ！！',
        '僕たちの街はデンコウジャーのおかげて救われた！',
        'ありがとうデンコウジャー！'

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
        '0',
        '11',
        '12',
        '12'
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

    $(".gameUpper").attr('id','gameUpperBack1')
    $(".background").attr('id','gameUpperBack1')


    let talkCount = 0;

    let questionStage = '';

    let checkAnnounce = 0;


    // アタックボタンのIDを取得
    const attackButtonId = document.getElementById('inputAnswer');













    $(".gameUpper").click(function() {



        console.log(talkCount)

        if (talkCount === 6 && checkAnnounce === 0) {

            checkAnnounce = 100;

            // 発電所到着

            $(".gameUpper").attr('id','gameUpperBack2');
            $(".background").attr('id','gameUpperBack2')

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

                checkAnnounce = 0;

            },2500)




        } 
        
        
        
        
        else if (talkCount === 14 && checkAnnounce === 0) {

            // 火力発電所到着

            checkAnnounce = 100;

            $(".gameUpper").attr('id','gameUpperBack3');
            $(".background").attr('id','gameUpperBack3')



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

                checkAnnounce = 0;

            },2500)

        } 
        
        
        
        else if (talkCount === 17 && checkAnnounce === 0) {

            attackButtonId.value= '';

            // 第一回戦開始
            checkAnnounce = 100;
            
            talkCount = 17;

            let checkStage = 'stage1'

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
                $(".questionSpace").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    '魔法陣を解いて偶数 ( 2で割り切れる数字。 2,4,6,8.... ) の数字の少ない順によめ！'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/1.png')

                $(".answerBox > h2").html(
                    'A. ???? ブラスト'
                )

                talkCount = 100

                questionStage = 1;

                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

                checkAnnounce = 0;

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ボイラー' && checkStage === 'stage1') {

                    $(".displayResult h2").html('A. "ボイラー" ブラスト')

                    $(".commentaryText p").html(
                        '火力発電とは文字通り、火の力を利用した発電の仕組みです。　その中で今回の答えだったボイラーとは燃料を用いてお湯を沸かすところだよ。　そして、お湯を沸かすことで出てくる蒸気で電気を生み出しているんだ。　もっと知りたい人は自分と調べてみてね！'
                    )


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionTrue").css({
                        display: 'block',
                    })

                    $(".nextTalkCount").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionTrue").css({
                            display: 'none'
                        })

                        $(".downerContent").css({
                            display: 'none'
                        })


                        talkCount = 18;

                        let characterSelect = storyTalkerNomber[talkCount];
                        characterSelect = Number(characterSelect)
            
                        if (characterSelect >= 0 & characterSelect <= 11) {
                            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                        }
            
            
                        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                        talkCount += 1;

                        
                        attackButtonId.value= '';

                    })


                } else {


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionElse").css({
                        display: 'block'
                    })

                    $(".buckQuestion").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionElse").css({
                            display: 'none'
                        })

                        attackButtonId.value= '';
                        
                        
                    })
                }

            })

        } 
        
        
        
        else if (talkCount === 21 && checkAnnounce === 0) {

            // 水力発電所到着
            checkAnnounce = 100;


            $(".gameUpper").attr('id','gameUpperBack4');
            $(".background").attr('id','gameUpperBack4')

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

                checkAnnounce = 0;

            },2500)

        } 
        
        
        
        
        else if (talkCount === 25 && checkAnnounce === 0) {

            // 第二回戦開始

            checkAnnounce = 100;

            talkCount = 25;
            
            let checkStage = 'stage2'

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
                $(".questionSpace").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    '漢字の中に隠れているカタカナを見つけろ！ (※三文字目には濁点がつきます)'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/2.png')

                $(".answerBox > h2").html(
                    'A. ? ? ?゛? キャノン'
                )

                talkCount = 100

                questionStage = 2;


                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

                checkAnnounce = 0;

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ハイドロ') {

                    $(".displayResult h2").html('A. "ハイドロ" キャノン')

                    $(".commentaryText p").html(
                        '水力発電とは水の力を用いで電気を生み出す発電方法です。　水力発電は再生可能なエネルギーであり、地球温暖化の原因である二酸化炭素 (CO2) をほとんど出さないという地球に優しい発電方法です。　高いところに貯めた水を低いところに落とすことで、その力を利用して水車を回しで電気を生み出しています。　ハイドロの語源はギリシャ語で [水]らしいですよ'
                    )

                    $(".questionElse").css({
                        display: 'none'
                    })


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionTrue").css({
                        display: 'block',
                    })

                    $(".nextTalkCount").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionTrue").css({
                            display: 'none'
                        })

                        $(".downerContent").css({
                            display: 'none'
                        })


                        talkCount = 26;

                        let characterSelect = storyTalkerNomber[talkCount];
                        characterSelect = Number(characterSelect)
            
                        if (characterSelect >= 0 & characterSelect <= 11) {
                            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                        }
            
            
                        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                        talkCount += 1;

                        
                        attackButtonId.value= '';

                    })


                } else {


                    $(".questionTrue").css({display: 'none'})

                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionElse").css({
                        display: 'block'
                    })

                    $(".buckQuestion").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionElse").css({
                            display: 'none'
                        })

                        attackButtonId.value= '';
                        
                        
                    })
                    
                }

            })

        } 
        
        
        else if (talkCount === 29 && checkAnnounce === 0) {

            // 風力発電所到着

            checkAnnounce = 100;

            $(".gameUpper").attr('id','gameUpperBack5');
            $(".background").attr('id','gameUpperBack5')


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

                checkAnnounce = 0;

            },2500)

        } 
        
        
        
        
        
        else if (talkCount === 31 && checkAnnounce === 0) {

            // 第三回戦 開始！！

            checkAnnounce = 100;


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
                $(".questionSpace").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    '下の暗号を解け！'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/3.png')

                $(".answerBox > h2").html(
                    'A. ????? スラッシュ'
                )

                talkCount = 100

                questionStage = 3;



                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

                checkAnnounce = 0;


            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ウィンドミル') {

                    $(".displayResult h2").html('A. "ウィンドミル" スラッシュ')

                    $(".commentaryText p").html(
                        '風力発電は風の力を利用した発電方法です。　ある程度の風の強さがあればいつでも電力を生み出して発電をしてくれます！　こちらの発電も燃料を使用しないため、排気ガスや二酸化炭素(CO2)を排出しないため、地球に優しい発電方法です！　ちなみにウィンドミル (windmill) とは英語で風車という意味がありますよ！'
                    )

                    $(".questionElse").css({
                        display: 'none'
                    })


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionTrue").css({
                        display: 'block',
                    })

                    $(".nextTalkCount").click(function() {
                        $(".questionTrue").scrollTop(0);

                        $(".commentaryText").scrollTop(0);

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionTrue").css({
                            display: 'none'
                        })

                        $(".downerContent").css({
                            display: 'none'
                        })


                        talkCount = 32;

                        let characterSelect = storyTalkerNomber[talkCount];
                        characterSelect = Number(characterSelect)
            
                        if (characterSelect >= 0 & characterSelect <= 11) {
                            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                        }
            
            
                        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                        talkCount += 1;

                        
                        attackButtonId.value= '';

                    })


                } else {


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionElse").css({
                        display: 'block'
                    })

                    $(".buckQuestion").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionElse").css({
                            display: 'none'
                        })

                        attackButtonId.value= '';
                        
                        
                    })
                }

            })

        }
        
        
        
        
        
        
        else if (talkCount === 34 && checkAnnounce === 0) {

            // 太陽光発電所到着


            checkAnnounce = 100;

            $(".gameUpper").attr('id','gameUpperBack6');
            $(".background").attr('id','gameUpperBack6')


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

                checkAnnounce = 0;

            },2500)

        }



        else if (talkCount === 36 && checkAnnounce === 0) {

        // 第4回戦 開始！！

        checkAnnounce = 100;

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
            $(".questionSpace").css({
                display: 'block'
            })

            // 問題の部分

            $(".questionText > h2").html(
                'Q. 謎解きをし、技を発動せよ！'
            )

            $(".questionText > p").html(
                '赤からスタートして、 Wに1, Sに1, Eに3, Wに2, Nに3, Eに2, Wに4, Sに2, Eに3, Sに2 に従ってなぞれ。'
            )

            $(".questionImage > img").attr('src','./thirdPage/questionBox/4.png')

            $(".answerBox > h2").html(
                'A. ????? ショット'
            )

            talkCount = 100

            questionStage = 4;


            let getQuestionTextHeight = $(".questionText").height();
            let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
            $(".questionBox").css({
                height: downContentHeight
            })

            checkAnnounce = 0;

        },2500)

        $(".attackButton").click(function() {

            let answerStorage = attackButtonId.value;

            if (answerStorage === 'サンシャイン') {

                $(".displayResult h2").html('A. "サンシャイン" ショット')

                $(".commentaryText p").html(
                    '太陽光発電は光エネルギーから直接電気を作る太陽電池を利用した発電方法です。　太陽光発電は、風力・水力発電と同様に二酸化炭素(CO2)などを出さないため環境に優しい仕組みになってるよ！　最近で一軒家の屋根についていることもある太陽光発電だけど、実はお金が結構かかるっているデメリットもあるんだ、、、　ちなみにサンシャインは日光・ひなたみたいな意味があるよ！'
                )

                $(".questionElse").css({
                    display: 'none'
                })


                $(".answerCommentary").css({
                    display: 'flex'
                })

                $(".questionTrue").css({
                    display: 'block',
                })

                $(".nextTalkCount").click(function() {

                    $(".questionTrue").scrollTop(0);

                    $(".commentaryText").scrollTop(0);

                    $(".answerCommentary").css({
                        display: 'none'
                    })

                    $(".questionTrue").css({
                        display: 'none'
                    })

                    $(".downerContent").css({
                        display: 'none'
                    })


                    talkCount = 37;

                    let characterSelect = storyTalkerNomber[talkCount];
                    characterSelect = Number(characterSelect)
        
                    if (characterSelect >= 0 & characterSelect <= 11) {
                        $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                    }
        
        
                    $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                    $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                    talkCount += 1;

                    
                    attackButtonId.value= '';

                })


            } else {

                $(".questionTrue").css({display: 'none'})

                $(".answerCommentary").css({
                    display: 'flex'
                })

                $(".questionElse").css({
                    display: 'block'
                })

                $(".buckQuestion").click(function() {

                    $(".answerCommentary").css({
                        display: 'none'
                    })

                    $(".questionElse").css({
                        display: 'none'
                    })

                    attackButtonId.value= '';
                    
                })

            }

        })


        

        } else if (talkCount === 40 && checkAnnounce === 0) {

        // 原子力発電所到着

        checkAnnounce = 100;

        $(".gameUpper").attr('id','gameUpperBack7');
        $(".background").attr('id','gameUpperBack7')


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

            checkAnnounce = 0;

        },2500)

        }



        else if (talkCount === 42 && checkAnnounce === 0) {

            // 第五開戦開始

            talkCount = 42;

            checkAnnounce = 100;

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
                $(".questionSpace").css({
                    display: 'block'
                })

                // 問題の部分

                $(".questionText > h2").html(
                    'Q. 謎を解いて技を発動しろ！！'
                )

                $(".questionText > p").html(
                    '書き順通りによめ (※10文字目には伸ばし棒が入ります)'
                )

                $(".questionImage > img").attr('src','./thirdPage/questionBox/5.png')

                $(".answerBox > h2").html(
                    'A. ?????????-???'
                )
                
                talkCount = 100

                questionStage = 5;


                let getQuestionTextHeight = $(".questionText").height();
                let downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight
                $(".questionBox").css({
                    height: downContentHeight
                })

                checkAnnounce = 0;

            },2500)

            $(".attackButton").click(function() {

                let answerStorage = attackButtonId.value;

                if (answerStorage === 'ニュークエクスプローション') {


                    $(".displayResult h2").html('A. "ニューク" エクスプローション <br>(エクスプロージョン)')

                    $(".commentaryText p").html(
                        '原子力発電は”ウラン”というものを使って電気を生み出しています　原子力発電は地球に悪いみたいなイメージがあるかもしれないけど、実は環境に悪いってわけではないんだ！　確かにウランの量には限りがあるし、いつか使えなくなってしまうものではあるけど、実は一度使われたウランのほとんどをもう一度使うことができるか有効に活用することもできるんだ！　それに、電気を作るときに二酸化炭素(CO2)をほとんど排出しないから環境に優しいとも言われているんだ！　あと、ちなみに”ニュークエクスプローション”は、”ニューク”が核のという海があり、エクスプローション (エクスプロージョン)は爆発みたいな意味があるよ！'
                    )

                    $(".questionElse").css({
                        display: 'none'
                    })


                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionTrue").css({
                        display: 'block',
                    })

                    $(".nextTalkCount").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionTrue").css({
                            display: 'none'
                        })

                        $(".downerContent").css({
                            display: 'none'
                        })

                        $(".questionSpace").css({
                            display: 'none'
                        })


                        talkCount = 43;

                        let characterSelect = storyTalkerNomber[talkCount];
                        characterSelect = Number(characterSelect)
            
                        if (characterSelect >= 0 & characterSelect <= 11) {
                            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                        }
            
            
                        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                        talkCount += 1;

                        
                        attackButtonId.value= '';

                    })


                } else {

                    $(".questionTrue").css({display: 'none'})

                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionElse").css({
                        display: 'block'
                    })

                    $(".buckQuestion").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionElse").css({
                            display: 'none'
                        })

                        attackButtonId.value= '';
                        
                        
                    })

                }

            })

        }



        else if (talkCount === 46 && checkAnnounce === 0) {

            checkAnnounce = 100;

            // 魔王の城到着

            $(".gameUpper").attr('id','gameUpperBack8');
            $(".background").attr('id','gameUpperBack8')


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

            checkAnnounce = 0;

        },2500)

        }



        else if (talkCount == 49 && checkAnnounce === 0) {

            checkAnnounce = 100;

            talkCount = 49;

            $(".announcePlace").html('<h1>戦闘開始</h1>');

            announcePlaceOn();

            setTimeout(function() {
                announcePlaceOff();

                talkCount = 49;

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

                $(".lastQuestion").css({
                    display: 'block'
                })

                
                talkCount = 100

                questionStage = 6;

                checkAnnounce = 0;

            },2500)


            $(".openLastQuestionImage").click(function() {

                $(".lastQuestionImage").css({
                    display: 'flex'
                })

                $(".lastOkButton").click(function() {

                    let getViewQuestionImage = document.getElementById('pickLastQuestionImage').value;

                    if (getViewQuestionImage >= 1 && getViewQuestionImage <=4) {
                        $(".displayLastImage img").attr('src','./thirdPage/lastQuestionImageBox/lastQuestion' + getViewQuestionImage +'.png')
                    } else {
                        alert('数字は1〜4を入力してください')
                    }

                    getViewQuestionImage = '';

                })

                $(".buckLastQuestion").click(function() {
                    $(".lastQuestionImage").css({
                        display: 'none'
                    })
                })

            })

            $(".attackButton").click(function() {

                let answerStorage = document.getElementById('inputLastAnswer').value;

                if (answerStorage === 'ハツデン') {

                    $(".displayResult h2").html('"ハツデン" (発電)')
                    
                    $(".commentaryBox h3").html(
                        '- 最後に -'
                    )

                    $(".commentaryText p").html(
                        '正解おめでとう！　今回はプレイしてくれてありがとう！ <br>今回は5つの発電をテーマにしたヒーローのお話だったけど、どうだったかな？　みんなが当たり前に使っている電気何だけど、実はいろいろな方法で作られているんだ。　今回は5つの発電方法だけを紹介したけど、世界にはもっと色々な発電方法があるんだ。　その中には地球によくないということで徐々に数が減っているものや、環境に良いということで注目を浴びている方法もあったりするよ！ <br>そして、風力発電や水力発電など、自宅で割と簡単に試せるものがあったりするのでお父さんやお母さんと一緒に試してみてね！'
                    )
                    
                    $(".questionElse").css({
                        display: 'none'
                    })

                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionTrue").css({
                        display: 'block',
                    })

                    $(".nextTalkCount").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionTrue").css({
                            display: 'none'
                        })

                        $(".downerContent").css({
                            display: 'none'
                        })


                        talkCount = 50;

                        let characterSelect = storyTalkerNomber[talkCount];
                        characterSelect = Number(characterSelect)
            
                        if (characterSelect >= 0 & characterSelect <= 11) {
                            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
                        } else {
                            $("#talkerLeft").attr('src','')
                        }
            
            
                        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
                        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
                        talkCount = 51;

                        
                        attackButtonId.value= '';

                    })

                } else {

                    $(".questionTrue").css({display: 'none'})

                    $(".answerCommentary").css({
                        display: 'flex'
                    })

                    $(".questionElse").css({
                        display: 'block'
                    })

                    $(".buckQuestion").click(function() {

                        $(".answerCommentary").css({
                            display: 'none'
                        })

                        $(".questionElse").css({
                            display: 'none'
                        })

                        attackButtonId.value= '';
                        
                        
                    })

                }

            })

        }
        
        
        
        else if (talkCount <= 52) {

            if (talkCount === 51) {
                $(".gameUpper").attr('id','gameUpperBack9');
                $(".background").attr('id','gameUpperBack9')
            }

            let characterSelect = storyTalkerNomber[talkCount];
            characterSelect = Number(characterSelect)

            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            } else {
                $("#talkerLeft").attr('src','')
            }


            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')
            
            talkCount += 1;

        }
        
        
    })


    $(".viewHint").click(function() {

        $(".questionElse").css({
            display: 'none'
        })

        $(".viewHintBox").css({
            display: 'block'
        })

        $(".checkViewHint").css({
            display: 'block'
        })
        
        // alert(questionStage);

        const hintText =[
            '',
            '同じ数字は使わずにたて、よこ、ななめでそれぞれ足して15になるように当てはめる。',
            '漢字の足りない部分だけ読むと？',
            '形に当てはまる文字は一つしかない！',
            '方位記号(東西南北を示す記号)がない場合は上が北になるよ！',
            '難しく考えないで！ 書き順通りに読んでみて！',
            'Q1. 一門目の時と数字の場所は一緒だよ！ <br>Q2. ちなみにこの漢字、"字"ではありませんよ？ <br>Q3. これも一問目と一緒。 <br>Q4.これも一緒。　もうわかったかな？'
        ]

        if(questionStage <= 6) {

            $(".hintQuestionNomber h2").html(
                questionStage + '問目のヒントは'
            );

            $(".hintContent p").html(
                hintText[questionStage]
            )

        }


        $(".checkHintYesNo .yes").click(function() {

            $(".checkViewHint").css({
                display: 'none'
            })

            $(".viewHintSpace").css({
                display: 'block'
            })

        })

        $(".checkHintYesNo .no").click(function() {

            $(".questionElse").css({
                display: 'block'
            })

            $(".viewHintBox").css({
                display: 'none'
            })

            $(".checkViewHint").css({
                display: 'none'
            })

        })

        $(".hintOkBox").click(function() {

            $(".viewHintSpace").css({
                display: 'none'
            })

            $(".questionElse").css({
                display: 'block'
            })

            $(".viewHintBox").css({
                display: 'none'
            })

        })

    })


    // ウィンドウを再び表示させても前と同じ状態にさせる

    $(window).on('beforeunload', function() {

    })
});