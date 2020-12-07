$(document).ready(function () {
    //頁籤功能----------
    //按鈕切換樣式
    $('.books-area-tab-btn').click(function (e) {
        $('.books-area-tab-btn').removeClass('books-area-tab-active');
        $(this).addClass('books-area-tab-active');
        return false;
    });
    //內容更換
    function TabContent(TabName, TabShow1, TabHide1, TabHide2, TabHide3) {
        $(TabName).click(function (e) {
            $(TabShow1).css('display', 'flex')
            $(TabHide1).css('display', 'none');
            $(TabHide2).css('display', 'none');
            $(TabHide3).css('display', 'none');
        });
    }
    TabContent('.books-area-tab-btn1', '.tab-list1', '.tab-list2', '.tab-list3', '.tab-list4');
    TabContent('.books-area-tab-btn2', '.tab-list2', '.tab-list1', '.tab-list3', '.tab-list4');
    TabContent('.books-area-tab-btn3', '.tab-list3', '.tab-list1', '.tab-list2', '.tab-list4');
    TabContent('.books-area-tab-btn4', '.tab-list4', '.tab-list1', '.tab-list2', '.tab-list3');

    //書籍介紹功能----------
    function BooksContentOpen(BtnName, ImgLink, BooksName, BooksOther, BooksArticle, BooksLink) {
        $(BtnName).on('click', function () {
            $('body').append('<div class="books-content"></div>');
            $('.books-content').append('<div class="books-content-infor"></div>');
            $('.books-content-infor').append('<div class="books-content-infor-img"></div><div class="books-content-infor-content"></div>');
            $('.books-content-infor-img').append('<img src=' + ImgLink + '>');
            $('.books-content-infor-content').append('<h3>' + BooksName + '</h3>');
            $('.books-content-infor-content').append('<p>' + BooksOther + '</p>');
            $('.books-content-infor-content').append('<article>' + BooksArticle + '</article>');
            $('.books-content-infor-content').append('<a href="' + BooksLink + '" class="books-content-infor-content-link" target="_blank">我要買書</a>');
            $('.books-content-infor-content').append('<a href="#" class="books-content-infor-content-close">關閉</a>');
            setTimeout(() => {
                $('.books-content').fadeIn(1000);
            }, 0);
            return false;
        });
        $('body').on('click', '.books-content-infor-content-close', function () {
            $('.books-content').fadeOut(500);
            setTimeout(() => {
                $('.books-content').remove();
            }, 500);
            return false;
        });
    }
    //按鈕功能1
    BooksContentOpen('.books-area-content-list-more1', 'image/img1-1.png', '山地話／珊蒂化', '馬翊航著／九歌', '作者善用了「山地話」的「不正確」，以及「珊蒂化」的陰性提示，嘈嘈切切錯雜彈出一曲關於成長、身分的曼妙交響，每個故事都錯落訴說，每個文字都彷彿長出聲帶。書中也剖析原住民身分認同的熱議，抽絲剝繭所謂「真正」原住民形象和繁複修辭，並對各種標籤化的指涉反覆探討。（李欣倫/中央大學中文系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000660721');
    //按鈕功能2
    BooksContentOpen('.books-area-content-list-more2', 'image/img1-2.png', '反抗的共同體', '馬嶽著／左岸文化', '2019年爆發的反送中運動讓香港從經濟全球化中心變成對抗暴政的最前線，這個巨大的轉變從何而來？本書是由在地角度出發最完整的著作。聲譽卓著的政治學者除了精闢的剖析，身為在地人的情感亦溢於言表，這些書寫介入需要莫大的勇氣，也更值得關心台灣與世界民主自由的讀者細細捧讀。（鄭力軒/政治大學社會學系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000663634');
    //按鈕功能3
    BooksContentOpen('.books-area-content-list-more3', 'image/img1-3.png', '毋甘願的電影史', '蘇致亨著／春山出版', '台語電影曾經有過無限榮光，但大部分台灣人卻無知無覺。所幸自90年代開始，史料的收集整理在先行者的努力下，累積了一定的基礎，並在本書的研究寫作中開花結果。年輕的作者內心好像潛藏了老靈魂，以流暢的文筆、洞曉人性的視角，栩栩如生地再現了這段讓人緬懷心疼的歷史。（詹素娟/中央研究院台灣史研究所副研究員）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000637602');
    //按鈕功能4
    BooksContentOpen('.books-area-content-list-more4', 'image/img1-4.png', '以前巴冷刀．現在廢鐵爛', '馬尼尼為、張錦忠著／斑馬線文庫', '這是一本充滿著奇異版畫與馬來西亞民間歌謠體式「班頓」的繪本詩集。馬來族群的生命力與情感流動裸露、靈活，活生生的血肉體感和日常細節躍然字上，有時且蘊含著引人莞爾的人生體悟。自由不羈而帶有某種神祕主義的版畫，更為這部詩集植入了一座極生猛的想像宇宙。（崔舜華/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000653238');
    //按鈕功能5
    BooksContentOpen('.books-area-content-list-more5', 'image/img1-5.png', '尖叫連線', '陳栢青著／寶瓶文化', '在高密度監視器、攝影機主宰人類的日常與視域之下，生存成了高潮迭起的拼搏和操演，所做的一切皆是為了被觀看、被聚焦。眼外有眼，鏡頭外有鏡頭，在此輪番上演「人食人」戲碼。加害與受害的反覆辨證，也是小說精彩之處，作者更藉此反思媒體對受害議題貧乏的單一操作。（李欣倫/中央大學中文系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000652435');
    //按鈕功能6
    BooksContentOpen('.books-area-content-list-more6', 'image/img1-6.png', '我所去過最遠的地方', '陳宗暉著／時報出版', '靜默中緩沉流動的熱烈與溫柔，讓人深有領會：活著好辛苦啊，既不健康又不快樂。但那樣無法繞路的人生跋涉，終將書寫者塑成對心靈誠實又細膩相待之人，能指認自己還相信什麼。本書或許是文學還來不及從容細寫這大疫圍堵之年，人心種種挫折空落頑抗悵惘之際，最意外且難得的收穫。（丁名慶/《幼獅文藝》主編）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000661013');
    //按鈕功能7
    BooksContentOpen('.books-area-content-list-more7', 'image/img1-7.png', '我們幹過的蠢事', '賀景濱著／春山出版', '小說以滔滔話術虛構出數位科技的可能走勢。三不五時跳出的名人引言或諸如語言學、攝控學、生物基改工程乃至小說論，往往真偽難辨、虛實交錯，讓人只想不斷連上谷歌搜來搜去。小說展演的是科技全面接管世界前的最後一抹人性微光，看完大概會覺得，作者更機歪也更先知了。（黃崇凱/小說家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000663953');
    //按鈕功能8
    BooksContentOpen('.books-area-content-list-more8', 'image/img1-8.png', '通往世界的植物', '游旨价著／春山出版', 'DNA研究是當代科學發展最迅速的領域，台灣文史研究也是近年學界用力甚深的所在。本書橫跨此二領域，以DNA的跡證說明高山植物在不同地質時期進入台灣，從台灣看到整個北半球的自然史，時間上更拉拔到數百萬年的尺度。敘述引人入勝，適度剪裁專業知識，細緻的插畫更讓人樂意親近。（吳家恆/文字工作者）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000645462');
    //按鈕功能9
    BooksContentOpen('.books-area-content-list-more9', 'image/img1-9.png', '傍晚五點十五分', '夏夏著／時報出版', '長期照護高齡並且失智的家人，照護者與被照護者都受困於失能與暴力。身體失能產生的後座力，輕易把自己與他人都轟成了陌生人。本書從尋常的語言，食材，鍋鏟交擊，和循香味而來的已逝和將逝的時光種種，一種語言冉冉發生，煨燉成一種力，無中生有，卻足以對抗失能帶來的暴力。（李家沂/交大外文系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000647662');
    //按鈕功能10
    BooksContentOpen('.books-area-content-list-more10', 'image/img1-10.png', '尋琴者', '郭強生著／木馬文化', '作者將他對孤寂的深層思考、多重曖昧的情感，具象成鋼琴、琴譜、黑白鍵，含蓄卻飽含張力的文字如同精湛的指法，演繹一曲琴／情音繞樑、孤絕又淒美的情歌。小說展現他對音樂的高度熟稔，鋼琴家的琴音融入眾角色的心事，調音與情感相互奏鳴，隱隱指向「情歸何處」的生命大哉問。（李欣倫/中央大學中文系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000645849');

    //按鈕功能11
    BooksContentOpen('.books-area-content-list-more11', 'image/img2-1.png', '公司與幕府', '亞當．克拉洛著／陳信宏／左岸文化', '以17世紀荷蘭與日本的關係為主軸，立足在兩地檔案館豐碩的史料上，寫出東西交流史的不同側面，是令人眼睛一亮的精彩作品。這段日荷關係的重新理解，說明了東西會遇的多元型態，複雜多面的歷史，作者的文字卻極具魅力，讀者一定愛難釋手。（詹素娟/中央研究院台灣史研究所副研究員）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000658193');
    //按鈕功能12
    BooksContentOpen('.books-area-content-list-more12', 'image/img2-2.png', '如同此石：一切戰爭之書', '文、圖：亞歷山卓・桑納／藍劍虹譯／大塊文化', '圖像重述了一段我們所熟知的人類歷史。從原始的拚搏、武器的演化、大戰場景的闇鬱天光，與豔似鮮血的鋒火靜默對視，透過一顆靜默的石頭，搬演永無止境且愈趨宏大的戰爭場景。關於人類的未來，做為眾石一員的藍色地球，或許本身即是一則無需言詮的隱喻。（崔舜華/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000640896');
    //按鈕功能13
    BooksContentOpen('.books-area-content-list-more13', 'image/img2-3.png', '來自精靈世界的人類奇幻百科', '斯薇塔．多羅謝娃著／承影、鄭琦諭譯／漫遊者文化', '本書入手沉甸，硬皮精裝，套色細膩且圖文相映。書中是瑪爾人觀察人類的百科紀錄。透過他們充滿想像與時尚趣味的插圖，重新發現人類的可愛，讓我們暫時忘記自己其實比新冠病毒更可怕。這是本符合標準的咖啡桌書，是心繫客人的待客之道，驚喜隨翻隨來。（李家沂/交大外文系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000631280');
    //按鈕功能14
    BooksContentOpen('.books-area-content-list-more14', 'image/img2-4.png', '異見的自由', '安東尼．路易斯著／林凱雄譯／八旗文化', '本書主角是美國「憲法增修條文第一條」，深刻描繪過去兩百多年關於言論自由的司法爭議、辯辭及歷代法官的精彩思辨。展現出多元見解的碰撞，也帶我們進一步思考：言論自由涉及大量執行面的灰色地帶和困難取捨。可以幫助我們思考台灣內部所面對的種種問題。（馮勃翰/台大經濟系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000658611');
    //按鈕功能15
    BooksContentOpen('.books-area-content-list-more15', 'image/img2-5.png', '雲遊者', '奧爾嘉．朵卡萩著／葉祉君譯／大塊文化', '這部似旅行隨筆而滿溢靈光片羽的作品，沒有嚴肅的政治探討或苦難的生存經驗，一切的嚴肅與苦難，皆在作者充滿幽默與寬容的目光中融解。也許是一段短程的巴士旅途，或一場落得太早的雪，湊近視察，你能摸觸到自我的寧靜之路：無論我們身在何處，總是渴望自由的心。（崔舜華/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000651004');
    //按鈕功能16
    BooksContentOpen('.books-area-content-list-more16', 'image/img2-6.png', '黑色花', '金英夏著／盧鴻金譯／漫遊者文化', '讀金英夏長篇小說《黑色花》，很難不時時在腦中辯論：究竟是歷史洪流、外在環境鎖死了人的命運，或者人才是歷史書寫得以具有啟示與價值的載體？本書以多線情節開展敘事，卻不見紊雜支絀；各種立場、身世、動機的人物血肉鮮明且有機牽動，具現了專業作家對於書寫技術的掌握。（丁名慶/《幼獅文藝》主編）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000644380');
    //按鈕功能17
    BooksContentOpen('.books-area-content-list-more17', 'image/img2-7.png', '罪行海洋', '伊恩．爾比納著／林詠心譯／麥田', '生活在無邊海洋上的人們除了面對嚴苛的自然環境，法律與道德真空形成的暴力更常施加在食物鏈底端的弱者身上。作者花費數年實地採訪，寫成十幾篇深刻動人的故事，文筆生動，讀來彷彿與他一同親歷了整個過程。希望本書的引介能讓國人主動關心，挺身捍衛海洋環境的尊嚴。（林豐利/台師大物理系教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000652589');
    //按鈕功能18
    BooksContentOpen('.books-area-content-list-more18', 'image/img2-8.png', '達爾文進城來了', '曼諾．許特惠森著／陸維濃、林大利譯／臉譜出版', '是一位傑出的生態學者對於都市生物多樣性的精彩論說，透過無數獨特案例的描述，讓我們了解傳統演化論所面臨的挑戰。作者以親切口吻穿插著豐富的博物學與生態學掌故趣事，帶領我們走進都會區的大街小巷，開啟我們對未來物種演化的無限想像。（林豐利/台師大物理系教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000654062');
    //按鈕功能19
    BooksContentOpen('.books-area-content-list-more19', 'image/img2-9.png', '監控資本主義時代', '肖莎娜．祖博夫著／溫澤元、林怡婷、陳思穎譯／時報出版', '針對資訊科技由少數企業巨頭掌控的現象，本書提供了目前書市所見最完整也最精要的分析與批判。作者畫龍點睛地刻畫出，當代資本主義運作的核心，牽涉到對個體的監控與行為的操縱。你可以不同意作者的所有觀點，卻不能忽視書中提出的警告。（鄭力軒/政治大學社會學系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000655264');
    //按鈕功能20
    BooksContentOpen('.books-area-content-list-more20', 'image/img2-10.png', '雞冠天下', '安德魯・勞勒著／吳建龍譯／左岸文化／', '非常有趣的書，讓人大開眼界。主角是看似微不足道，卻和人類生活密不可分的：雞。作者用獨特的視角與取材，將雞與人類的歷史文化連結起來，寫就了這部可以說是和雞有關的一千零一問。閱讀《雞冠天下》既能帶來知性上的滿足，又能帶來人文思考上的深刻啟發。（馮勃翰/台大經濟系副教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000645498');

    //按鈕功能21
    BooksContentOpen('.books-area-content-list-more21', 'image/img3-1.png', '三千分之一的森林', '羅賓・沃爾・基默爾著／賴彥如譯／漫遊者文化', '趴在彷彿被縮小燈照射過的苔蘚森林，進入科學解謎的追尋過程。作者嘗試透過苔蘚證成：作為保持水土、捕捉霧氣、養分循環與提供庇護等生態服務，苔蘚的存在是地球健康的重要指標。切勿小看苔蘚傳遞給我們的訊息，也不要忘記向苔蘚森林表達深沉的敬意與感謝。（徐銘謙/台灣千里步道協會副執行長）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000653593');
    //按鈕功能22
    BooksContentOpen('.books-area-content-list-more22', 'image/img3-2.png', '吾業遊民', '理查．布洛克斯著／葉怡昕／聯經出版', '一位德國遊民，以第一人稱自述三十年街頭人生，是不堪卻勇敢的自我書寫。除了描述自己如何從毒癮者成了流浪者，體驗街頭上的社會議題，也寫出觀察街頭遭遇中，流動的生命所發出幽微的聲音和省思。解放的自我對話，精彩的敘述有自由、自主和尊嚴，令人低迴。（王浩一/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000635413');
    //按鈕功能23
    BooksContentOpen('.books-area-content-list-more23', 'image/img3-3.png', '走在，沒人想去的地方', '樹木希林著／吳怡文譯／采實文化', '這是一本絕對會讓人想一口氣讀完的訪談錄。從一段不按牌理出牌的訪談展開，日本資深藝人樹木希林一方面侃侃而談逼近的死亡，一方面暢談她特立獨行的人生哲學，文末還有作家女兒動人的告白。2020年的疫情讓人體會到最接近死亡的距離，在這個當口閱讀本書，更深感撼動。（江家華/《PAR表演藝術》雜誌總編輯）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000651012');
    //按鈕功能24
    BooksContentOpen('.books-area-content-list-more24', 'image/img3-4.png', '阿媽的女朋友', '台灣同志諮詢熱線協會著／大塊文化', '同性婚姻法讓同志族群跨過重要的里程碑，但我們仍需專注聆聽，才能讓角落裡更細微或被遺忘的聲音浮現。很開心台灣終於有關注老年女同志的生命故事。同時身為女人和同志，在父權社會裡必然成為多重弱勢。透過導讀與專訪，讓我們明白彼此都不是獨立的存在。（曾淯慈/梓書房店主）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000661473');
    //按鈕功能25
    BooksContentOpen('.books-area-content-list-more25', 'image/img3-5.png', '看懂好電影的快樂指南', '愛德華．羅斯著／灰土豆譯／原點出版', '不同於過往以文字書寫的影評、影史，本書以漫畫手法呈現影像的視覺與理論，深入淺出拆解符號語言，並打破單一時間軸線來談電影史。不僅是一本「懶人工具包」，更讓我們清楚看見每部作品背後的文化思維、時代變遷以及大眾文化的轉變，拓展觀影的深度與廣度。（江家華/《PAR表演藝術》雜誌總編輯）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000647760');
    //按鈕功能26
    BooksContentOpen('.books-area-content-list-more26', 'image/img3-6.png', '創傷照管', '蘿拉．李普斯基、康妮．柏克著／林宜汶譯／究竟出版', '台灣社會越來越關注各類受創者，卻很少把目光放在照顧者身上，不曾去理解他們目睹他人的苦難後，也累積了多少絕望在自己身上。本書是為各種照顧者而寫，指引他們從疼惜自己開始，培養照護他人的永續能力。對大眾而言，也具有喚起同理心的力量。（陳淑華/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000645863');
    //按鈕功能27
    BooksContentOpen('.books-area-content-list-more27', 'image/img3-7.png', '尋找台灣味', '地理角團隊著／左岸文化', '如果要向外國友人推薦道地台灣美食，你會推薦什麼？「什麼是台灣味」這個問題，其實也在探究台灣認同。書名的「尋找」兩字代表閱讀過程中，你將不斷鬆動原本的迷思和刻板印象。研究團隊開放謙遜的態度，紮實的田野訓練和思辨，不說空洞的學術語言，讓本書充滿生命力。（曾淯慈/梓書房店主）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000648546');
    //按鈕功能28
    BooksContentOpen('.books-area-content-list-more28', 'image/img3-8.png', '絕冷一課', '羅貝托．卡薩提著／倪安宇譯／果力文化', '「寒冷是偉大的導師，但我們正在失去它，而且很可能是永遠失去。」作者以科學哲學家的身分，以散文筆調書寫凜冬的自然思考。書中沒有教條的口吻，縮時攝影式的散文筆法，描繪著一切美好。在冰川漸漸消失之中，擔心氣候變遷的同時，我們是否真的有所作為？（王浩一/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000635752');
    //按鈕功能29
    BooksContentOpen('.books-area-content-list-more29', 'image/img3-9.png', '貂山之越', '吳永華著／林務局羅東林區管理處', '有別於過去以個別探險家紀行為單位，這本台灣自然發現史以淡蘭古道為舞台，作者將廣博耙梳史料、地圖比對、田野勘查的紮實工作，轉化成優美流暢的報導，展開古道的歷史縱深與自然向度。為我們揭開那個博物學大爆發的時代樣貌，也為如今的淡蘭古道熱豐富了內涵。（徐銘謙/台灣千里步道協會副執行長）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000653978');
    //按鈕功能30
    BooksContentOpen('.books-area-content-list-more30', 'image/img3-10.png', '貓的痴情辭典', '斐德列克・威圖著／陳郁雯譯／南方家園', '從文學家的視野出發，作者將自己的生活記憶與情感編入，141條從貓的角度切入的辭條，成了一趟一趟文學、音樂、繪畫甚至是民俗文化傳說的奇幻旅程。本書不僅為貓迷而寫，更讓非貓迷者理解，貓為何成為許多人不可缺少的家庭成員，而貓的存在又為生活打開了多少的可能性。（陳淑華/作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000640385');

    //按鈕功能31
    BooksContentOpen('.books-area-content-list-more31', 'image/img4-1.png', 'The Small Big台灣特有種1、2、3、4', '文：公共電視《台灣特有種》製作團隊／圖：傅兆祺／木馬文化', '這是從影像閱讀轉化成文字閱讀的一次成功嘗試。透過年輕人的視角，這套書帶領我們充分欣賞台灣自然界特有種生物的多元、精彩與美麗。有精確嚴謹的科學分析，更將年輕熱情觀察者的生命趣味與生命故事鑲嵌其中，讀來趣味盎然，欲罷不能。（林偉信/台灣兒童閱讀學會顧問）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000646450');
    //按鈕功能32
    BooksContentOpen('.books-area-content-list-more32', 'image/img4-2.png', '一個像海的地方', '文、圖：林柏廷／遠流出版', '各種層次的藍、穿梭其間的人群及水生動物，以及不同形式與尺度的景窗，框出一個個近似又相異的情境與關係，都讓人印象深刻。書末從補獵、圈養、野放、觀賞所扣出的生態與保育議題，不僅放在海生館、動物園，甚至馬戲團與主題樂園皆值得關注，可引動與孩子們的相關討論。（葉青華/文化工作者、前誠品書店兒童館負責人）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000655851');
    //按鈕功能33
    BooksContentOpen('.books-area-content-list-more33', 'image/img4-3.png', '我說話像河流', '文：喬丹．史考特／圖：席尼．史密斯／劉清彥譯／拾光工作室', '本書以成熟的圖文創作，讓艱澀的議題有流暢的表現。技術高超的水性繪圖法，使畫面流露情緒的巨大張力，加上電影般的運鏡，引動觀者共鳴，巧妙傳遞主題深邃悠遠的內在世界。是一部意境深遠、格局澎拜之作，也讓讀者為生活帶來可貴的啟示。（陳志賢/繪本創作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000662319');
    //按鈕功能34
    BooksContentOpen('.books-area-content-list-more34', 'image/img4-4.png', '星尾獸探險隊', '文：草山萬兔／圖：松本大洋／李彥樺譯／小麥田', '身為動物學家的作者以淵博的學識打底，巧妙平衡現實與幻想，讓動物們以原本的生態專長大顯身手，形象鮮活立體，插圖則以粗曠溫潤的筆觸勾勒出動物們的生動表情。緊湊的情節與流暢的文字一路引領讀者前進，一回神，數百書頁已在身後，還覺意猶未盡。（謝依玲/作家、譯者）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000637944');
    //按鈕功能35
    BooksContentOpen('.books-area-content-list-more35', 'image/img4-5.png', '海浪', '文、圖：蘇西・李（Suzy Lee）／吳文君譯／大塊文化', '作者運用女孩、海鷗、海浪這三個躍動的角色，加上書頁的空間性，構建了一個逐浪嬉戲，首尾連貫，具有發展與轉折的故事，是極適合親子共讀的繪本。雖然是無字書，卻預留了無限的詮釋、探問、猜想、反駁的空間。欣見本書終於被譯介到台灣。（石牧民/臺灣師範大學臺文系兼任助理教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000639191');
    //按鈕功能36
    BooksContentOpen('.books-area-content-list-more36', 'image/img4-6.png', '雪是誰的？', '文：安東妮．許奈德／圖：張蓓瑜／柯倩華譯／三民書局', '故事設定在長久以來信仰及文化爭端的最前線耶路撒冷，舉重若輕地運用下雪、雪溶的意象，探討信仰衝突本身的虛罔性質。即使是對基於信仰的衝突相對較少的台灣而言，仍有建設性。念念不忘，及時放下成見而著眼於普世的溫潤眼光，必有迴響。（石牧民/臺灣師範大學臺文系兼任助理教授）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000641412');
    //按鈕功能37
    BooksContentOpen('.books-area-content-list-more37', 'image/img4-7.png', '惡作劇女孩', '卡崔娜．南斯塔德著／王翎譯／小麥田', '全書以輕鬆、詼諧的筆調，講述一個小女孩從城市遠赴偏鄉依親的故事。這部少年小說對讀者傳遞出重要訊息：天真、活潑以及充滿好奇、不拘泥於傳統的表現，是兒童最珍貴的自然天性。而在保有自然作為的同時，對於他人與我們相異的表現，也該給予更多的尊重與理解。（林偉信/台灣兒童閱讀學會顧問）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000643263');
    //按鈕功能38
    BooksContentOpen('.books-area-content-list-more38', 'image/img4-8.png', '萬物盡頭之島', '基蘭．米爾伍德．哈爾葛芙著／張子樟譯／國語日報社', '小說講述20世紀初全世界最大痲瘋病聚落的故事。作者生動地記錄了一段被摒棄於世界之外的歷史，以優美的文字與堅強的母愛包覆這片黑暗，並溫柔提醒：在恐懼長出歧視與惡意之前，不讓身心輕易被控制，也不輕視任何人的人生，才是通往樂園的真正途徑。（謝依玲）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000658828');
    //按鈕功能39
    BooksContentOpen('.books-area-content-list-more39', 'image/img4-9.png', '翠鳥', '文、圖：邱承宗／親子天下', '如果繪本的詩情畫意可以入樂，韋瓦第小提琴協奏曲「四季—春」很能呼應本書的旋律感。白鷺輕飛而過，有雲淡風輕的閑適，接著蜻蜓、眾鳥、釣手紛紛入鏡合奏，直至翠鳥現身。數張大跨頁定格聚焦，猶如精湛舞姿的連續慢動作，在快板樂音的協奏下，將全書的影像感官帶至最高潮。（葉青華/文化工作者、前誠品書店兒童館負責人）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000661784');
    //按鈕功能40
    BooksContentOpen('.books-area-content-list-more40', 'image/img4-10.png', '燈塔你好', '文、圖：蘇菲．布雷克爾／劉清彥譯／遠見天下文化', '「你好！你好……」這是塔與船的問候，也是書本向讀者的問候。任憑四季波動，塔與看守員始終屹立在光的海上劇場，一幕幕展演著人與自然的休戚與共。本書滿載詩意內涵，搭配古典的細緻風格，整合出深具寓意的時空理念，圖文並茂、令人愛不釋手。（陳志賢/繪本創作家）', 'https://www.iread.com.tw/ProdDetails.aspx?prodid=B000648984');

    $(window).scroll(function () {
        var WindowWidth = $(window).width();
        var ContentLength = $('section').length;
        var HeaderHeight = $('header').height();
        var WindowScrollTop = $(window).scrollTop();
        var BooksAreaPosition = $('.books-area').offset().top;
        var BooksTabHeight = $('.books-area-tab').height();
        //滾動偵測各區塊項目
        for (let i = 0; i < ContentLength; i++) {
            if ($('section').eq(i).offset().top <= WindowScrollTop + HeaderHeight) {
                $('.content-link a').removeClass('content-area-active')
                $('.content-link a').eq(i).addClass('content-area-active')
            }
        }
        //頁籤功能定位
        if ( WindowWidth <= 480 && WindowScrollTop >= BooksAreaPosition - BooksTabHeight) {
            $('.books-area-tab').css({'width':'100%','position':'fixed','top':'0', 'right':'0', 'bottom':'none', 'left':'0'});
        } else {
            $('.books-area-tab').css('position','relative');
        }
        
    });
    //各區塊連結按鈕功能
    $('.content-link a').click(function (e) {
        var ContentTop = $($(this).attr('href')).offset().top;
        $('html, body').animate({ scrollTop: ContentTop }, 1000);
        return false;
    });
});