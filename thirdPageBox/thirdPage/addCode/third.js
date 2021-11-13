$(function() {


    let checkWindowWIdth = localStorage.getItem('proNGWindowWidth');
    let checkWindowHeight = localStorage.getItem('proNGWindowHeight');


    if (checkWindowWIdth === 0 && checkWindowHeight > 0) {
        console.log('高さ、横幅取得済み')
    } else {

        console.log('高さ・横幅取得できていないため取得する')

        let StorageWidth = $(window).width();
        let storageHeight = $(window).height();

        localStorage.setItem('proNGWindowWidth' , StorageWidth)
        localStorage.setItem('proNGWindowHeight' , storageHeight)

    }


    // 画面設定用のやつ

    const windowWidth= localStorage.getItem('proNGWindowWidth');
    const windowHeight = localStorage.getItem('proNGWindowHeight');
    const pageWidth = windowHeight * 0.75;
    const topScreanHiehgt = pageWidth / 1.75;
    const downScreanHeight = windowHeight - topScreanHiehgt;
    const pageLeftStart = (windowWidth- pageWidth) / 2;
    const answerCommentaryHeight = windowHeight * 0.9
    const getQuestionTextHeight = $(".questionText").height();
    const downContentHeight = downScreanHeight * 0.8  - 35 - getQuestionTextHeight





    // 画面のサイズ設定


    $(".roadNow").css({
        height: windowHeight
    })

    $(".main").css({
        width: pageWidth,
        height: windowHeight
    })


    $(".background").css({
        width: windowWidth,
        height: windowHeight
    })

    $(".talkHeader").css({
        width: pageWidth,
    })



    $(".gameUpper").css({
        height: topScreanHiehgt
    })


    $(".announcePlace").css({
        height: topScreanHiehgt,
        width: pageWidth - 10,
        left: pageLeftStart + 5
    })

    $(".answerCommentary").css({
        width: pageWidth,
        height: windowHeight,
        left: pageLeftStart
    })


    $(".answerCommentary > div").css({
        height: answerCommentaryHeight
    })

    $(".lastQuestionImage").css({
        width: pageWidth,
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


    $(".questionBox").css({
        height: downContentHeight
    })



    // 会話内容

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



    // 初期設定

    let talkCount = 0;
    

    // いらんかも
    let checkAnnounce = 0;

    // 答えをもらうところ

    let answerStorage = ''

    // バク修正のためのやつ

    let storageTkakCount = 0;

    // アタックボタンのIDを取得
    const attackButtonId = document.getElementById('inputAnswer');

    // いま何問目か確認するやつ

    let questionCount = 0;


    // 場所を切り替えるときのためのシーンを数えるやつ

    let sceneCount = 0;

    // 最終問題のときに発火しなくするために

    let checkLastQuestion = 0;


    // 場所が切り替わるときに出すやつ

    function announcePlaceOn() {

        // $(".annoucePlace").html('<h1>' + )

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

    // 最初の画像を挿入

    $(".gameUpper").attr('id','gameUpperBack1')
    $(".background").attr('id','gameUpperBack1')



    // 場面切り換え用のテンプレート

    // 場所


    const announcePlaceName = [
        '',
        '発電所到着',
        '火力発電所',
        '水力発電所',
        '風力発電所',
        '太陽光発電所',
        '原子力発電所',
        '最後の城到着',
    ]


    function transPlace() {

        checkAnnounce = 100;


        $(".gameUpper").attr('id','gameUpperBack' + talkCount)
        $(".background").attr('id','gameUpperBack' + talkCount)

    }
    
    
    const announceCount = ['',6,14,21,29,34,40,46]
    

    function nextTalkScene() {

        let characterSelect = storyTalkerNomber[talkCount];
        characterSelect = Number(characterSelect)

        if (characterSelect >= 0 & characterSelect <= 11) {
            $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
        }


        $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
        $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')

        talkCount += 1;

        checkAnnounce = 0;
        
    }


    // 問題を表示するためのコード


    // 問題部分のテキスト

    const questionTextp = [
        '魔法陣を説いて偶数(2で割り切れる数字)の数字の少ない順に読め',
        '漢字の中に隠れているカタカナを見つけろ！ (※3文字目には濁点がつきます)',
        '下の暗号を解け！',
        '赤からスタートして、 Wに1, Sに1, Eに3, Wに2, Nに3, Eに2, Wに4, Sに2, Eに3, Sに2 に従ってなぞれ。',
        '書き順通りによめ (※10文字目には伸ばし棒が入り、11文字目には濁点がつきます)'
    ]


    // 問題文の答えにあたるところ

    const questionAnswerh2 = [
        'A. ???? ブラスト',
        'A. ? ? ?゛? キャノン',
        'A. ????? スラッシュ',
        'A. ????? ショット',
        'A. ?????????-?゛??'
    ]


    // 正解後の処理　(途中から)


    function answerExplain() {

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

            talkCount = storageTkakCount + 1
    
            let characterSelect = storyTalkerNomber[talkCount];
            characterSelect = Number(characterSelect)
    
            if (characterSelect >= 0 & characterSelect <= 11) {
                $("#talkerLeft").attr('src','./thirdPage/characterImage/character' + characterSelect + '.png')
            }
    
    
            $(".talkerContentBox").html('<h4>' + storyTlaking[talkCount] + '</h4>')
            $(".talkerName").html('<h4>' + talkerCharacterName[characterSelect] + '</h4>')


            answerStorage = '';
            attackButtonId.value= '';
            checkAnnounce = 0;
    
        })

    }



    // 今何問目かを確認するための

    const questionTiming = [
        17, 25, 31, 36 ,42
    ]



    // 49　が最終問題





    // 問題文表示するときのテンプレ

    function opneQuestion() {

        attackButtonId.value= '';

        questionCount = questionTiming.indexOf(talkCount)


        // 第一回戦開始
        checkAnnounce = 100;
            

        $(".announcePlace").html('<h1>戦闘開始</h1>');

        announcePlaceOn();


        setTimeout(function() {

        announcePlaceOff();


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


        $(".questionText > p").html(
            questionTextp[questionCount]
        )

        $(".questionImage > img").attr(
            'src','./thirdPage/questionBox/' + questionCount + '.png'
        )

        $("#normalAnswerBox > h2").html(
            questionAnswerh2[questionCount]
        )


        },2500)

        
        $(".attackButton").click(function() {

            answerStorage = attackButtonId.value;

            storageTkakCount = talkCount;

            if (answerStorage === 'ボイラー' && talkCount === 17) {

                // 第一問目正解時の処理

                $(".displauResult h2").html('A. ボイラーブラスト');

                $(".commentaryText p").html(
                    '火力発電とは文字通り、火の力を利用した発電の仕組みです。　その中で今回の答えだったボイラーとは燃料を用いてお湯を沸かすところだよ。　そして、お湯を沸かすことで出てくる蒸気で電気を生み出しているんだ。　もっと知りたい人は自分と調べてみてね！'
                )

                answerExplain()

            } else if(answerStorage === 'ハイドロ' && talkCount === 25) {

                // 第二問目正解時の処理

                $(".displayResult h2").html('A. "ハイドロ" キャノン')

                $(".commentaryText p").html(
                    '水力発電とは水の力を用いで電気を生み出す発電方法です。　水力発電は再生可能なエネルギーであり、地球温暖化の原因である二酸化炭素 (CO2) をほとんど出さないという地球に優しい発電方法です。　高いところに貯めた水を低いところに落とすことで、その力を利用して水車を回しで電気を生み出しています。　ハイドロの語源はギリシャ語で [水]らしいですよ'
                )

                answerExplain()

            } else if(answerStorage === 'ウィンドミル' && talkCount === 31) {

                // 三問目正解時の処理

                $(".displayResult h2").html('A. "ウィンドミル" スラッシュ')

                $(".commentaryText p").html(
                    '風力発電は風の力を利用した発電方法です。　ある程度の風の強さがあればいつでも電力を生み出して発電をしてくれます！　こちらの発電も燃料を使用しないため、排気ガスや二酸化炭素(CO2)を排出しないため、地球に優しい発電方法です！　ちなみにウィンドミル (windmill) とは英語で風車という意味がありますよ！'
                )

                answerExplain()
                
            } else if (answerStorage === 'サンシャイン' && talkCount === 36) {

                // 四問目正解時の処理

                $(".displayResult h2").html('A. "サンシャイン" ショット')

                $(".commentaryText p").html(
                    '太陽光発電は光エネルギーから直接電気を作る太陽電池を利用した発電方法です。　太陽光発電は、風力・水力発電と同様に二酸化炭素(CO2)などを出さないため環境に優しい仕組みになってるよ！　最近で一軒家の屋根についていることもある太陽光発電だけど、実はお金が結構かかるっているデメリットもあるんだ、、、　ちなみにサンシャインは日光・ひなたみたいな意味があるよ！'
                )

                answerExplain()

            } else if (answerStorage === 'ニュークエクスプロージョン' || answerStorage === 'ニュークエクスプローション' && talkCount === 42) {

                // 五問目正解時の処理

                $(".displayResult h2").html('A. "ニューク" エクスプローション <br>(エクスプロージョン)')

                $(".commentaryText p").html(
                    '原子力発電は”ウラン”というものを使って電気を生み出しています　原子力発電は地球に悪いみたいなイメージがあるかもしれないけど、実は環境に悪いってわけではないんだ！　確かにウランの量には限りがあるし、いつか使えなくなってしまうものではあるけど、実は一度使われたウランのほとんどをもう一度使うことができるか有効に活用することもできるんだ！　それに、電気を作るときに二酸化炭素(CO2)をほとんど排出しないから環境に優しいとも言われているんだ！　あと、ちなみに”ニュークエクスプローション”は、”ニューク”が核のという海があり、エクスプローション (エクスプロージョン)は爆発みたいな意味があるよ！'
                )

                answerExplain()

            } else if (checkLastQuestion === 0) {

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





    // 最終問題


    function openLastQuestion() {

        questionCount = 5;


        checkAnnounce = 100;

        checkLastQuestion = 100;

        attackButtonId.value = '';

        $(".announcePlace").html('<h1>戦闘開始</h1>');

        announcePlaceOn()

        setTimeout (function() {

            announcePlaceOff();

            storageTkakCount = talkCount;

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

            $(".lastQuestion").css({
                display: 'block'
            })



        },2500)






        // 最終問題の画像を表示する


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

            if (answerStorage === 'ハツデン' && talkCount === 49 && checkLastQuestion === 100) {

                $(".displayResult h2").html('"ハツデン" (発電)')
                    
                $(".commentaryBox h3").html(
                    '- 最後に -'
                )

                $(".commentaryText p").html(
                    '正解おめでとう！　今回はプレイしてくれてありがとう！ <br>今回は5つの発電をテーマにしたヒーローのお話だったけど、どうだったかな？　みんなが当たり前に使っている電気何だけど、実はいろいろな方法で作られているんだ。　今回は5つの発電方法だけを紹介したけど、世界にはもっと色々な発電方法があるんだ。　その中には地球によくないということで徐々に数が減っているものや、環境に良いということで注目を浴びている方法もあったりするよ！ <br>そして、風力発電や水力発電など、自宅で割と簡単に試せるものがあったりするのでお父さんやお母さんと一緒に試してみてね！'
                )

                answerExplain();

                
            } else  {

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



    // ヒントを表示する



    $(".viewHint").click(function() {

        alert(questionCount)

        $(".questionElse").css({
            display: 'none'
        })

        $(".viewHintBox").css({
            display: 'block'
        })

        $(".checkViewHint").css({
            display: 'block'
        })
        

        const hintText =[
            '',
            '同じ数字は使わずにたて、よこ、ななめでそれぞれ足して15になるように当てはめる。',
            '漢字の足りない部分だけ読むと？',
            '形に当てはまる文字は一つしかない！',
            '方位記号(東西南北を示す記号)がない場合は上が北になるよ！',
            '難しく考えないで！ 書き順通りに読んでみて！',
            'Q1. 一門目の時と数字の場所は一緒だよ！ <br>Q2. ちなみにこの漢字、"字"ではありませんよ？ <br>Q3. これも一問目と一緒。 <br>Q4.これも一緒。　もうわかったかな？'
        ]

        let questionStage = questionCount + 1;

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

    



    // 実際にクリックした時の処理

    $(".clickOn").click(function() {

        console.log(talkCount)

        
        if (announceCount.includes(talkCount) && checkAnnounce === 0) {
            checkAnnounce = 100;

            sceneCount = announceCount.indexOf(talkCount)

            $(".announcePlace").html('<h1>' + announcePlaceName[sceneCount] + '</h1>')

            announcePlaceOn();


            setTimeout(function() {
                transPlace();
            },100)



            setTimeout(function() {

                announcePlaceOff();

                nextTalkScene();

            },2500)

        }

        else if (questionTiming.includes(talkCount) && checkAnnounce === 0) {

            opneQuestion()


        }

        else if (talkCount === 49 && checkAnnounce === 0) {

            openLastQuestion();


        }

        

        else if(checkAnnounce === 0 && talkCount <= 52) {
 
            nextTalkScene();

        }
        
    })

    
    const rehersalGamePlay = setInterval(function() {

        talkCount += 1;
        checkAnnounce = 100;

        if (announceCount.includes(talkCount)) {

            $(".gameUpper").attr('id','gameUpperBack' + talkCount)
            $(".background").attr('id','gameUpperBack' + talkCount)

        }

    },100)


    setTimeout (function() {

        $(".roadNow h2").html('OK!')
        $(".roadBar").css({
            display: 'none'
        })

        setTimeout (function() {

            clearInterval(rehersalGamePlay);
            talkCount = 0
            checkAnnounce = 0;
    
            $(".gameUpper").attr('id','gameUpperBack1')
            $(".background").attr('id','gameUpperBack1')
    
            $(".roadNow").addClass('closeRoadNow');
    
            setTimeout (function() {
                $(".roadNow").attr('class','roadNow')
                $(".roadNow").css({
                    display: 'none'
                })
            },1100)

        },1000)

    },4000)



})