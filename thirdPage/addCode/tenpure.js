
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


                } else if (checkStage === 'stage2') {


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
                    












                    $(".displayResult h2").html('A. "ニューク" エクスプローション (エクスプロージョン)')

                    $(".commentaryText p").html(
                        '原子力発電はちょっと難しいんだけど、”ウラン”というものを使って電気を生み出しています　原子力発電は地球に悪いみたいなイメージがあるかもしれないけど、実は環境に悪いってわけではないんだ！　確かにウランの量には限りがあるし、いつか使えなくなってしまうものではあるけど、実は一度使われたウランのほとんどをもう一度使うことができるか有効に活用することもできるんだ！　それに、電気を作るときに二酸化炭素(CO2)をほとんど排出しないから環境に優しいとも言われているんだ！　あと、ちなみに”ニュークエクスプローション”は、”ニューク”が核のという海があり、エクスプローション (エクスプロージョン)は爆発みたいな意味があるよ！'
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
                    