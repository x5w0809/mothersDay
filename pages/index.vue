<template>
    <div id="main">
        <div class="container">
            <div class="topCard">
                <canvas class="scratchArea" id="scratchBg" width="575" height="559"></canvas>
                <canvas class="scratchArea" id="coating" width="575" height="559" @mouseover="arrowLeave" @mouseleave="arrowBack"></canvas>
                <canvas class="scratchArea_mb" id="scratchBg_mb" width="550" height="536"></canvas>
                <canvas class="scratchArea_mb" id="coating_mb" width="550" height="536" @mouseover="arrowLeave" @mouseleave="arrowBack"></canvas>
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 5" :key="'bgIcon__' + index" data-anime>
                        <div :class="`bgIcon__${index + 1}-anime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="pinkTitle">
                    <div class="pinkTitle__1">
                        <div class="pinkTitle__1-anime">
                            <div class="pinkTitle__1-anime-obj"></div>
                        </div>
                    </div>
                    <div class="pinkTitle__2">
                        <div class="pinkTitle__2-anime">
                            <div class="pinkTitle__2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="pinkTitle__3">
                        <div class="pinkTitle__3-anime">
                            <div class="pinkTitle__3-anime-obj"></div>
                        </div>
                    </div>
                </div>
                <div class="mainTitle">
                    <div :class="`mainTitle__${index + 1}`" v-for="(item, index) in 6" :key="'mainTitle__' + index" data-anime>
                        <div :class="`mainTitle__${index + 1}-anime mainTitleAnime`">
                            <div :class="`mainTitle__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="flower">
                    <div class="flower-anime">
                        <div class="flower-anime-obj"></div>
                    </div>
                </div>
                <div class="popFlower">
                    <div class="popFlower-anime">
                        <div class="popFlower-anime-obj"></div>
                    </div>
                </div>
                <div class="flowerIcon">
                    <div :class="`flowerIcon__${index + 1}`" v-for="(item, index) in 5" :key="'mainTitle__' + index" data-anime>
                        <div :class="`flowerIcon__${index + 1}-anime flowerIconAnime`">
                            <div :class="`flowerIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="date">
                    <div class="date-anime">
                        <div class="date-anime-obj"></div>
                    </div>
                </div>
                <div class="hand">
                    <div class="arrow1">
                        <div class="arrow1-anime">
                            <div class="arrow1-anime-obj"></div>
                        </div>
                    </div>
                    <div class="arrow2">
                        <div class="arrow2-anime">
                            <div class="arrow2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="handIcon">
                        <div class="handIcon-anime">
                            <div class="handIcon-anime-obj"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="desArea">
                <section id="instruction" class="instruction">
                    <div class="contentWrap2">
                        <div class="descriptionBox">
                            <ul class="default">
                                <li>
                                    活動時間：<br />
                                    <span class="contentDes">2022/05/03-2022/05/15 每日17:00-23:59</span>
                                </li>
                                <li>
                                    獎項：<br />
                                    <span class="contentDes">
                                        不限金額95折券、不限金額9折券、不限金額85折券、不限金額8折券、不限金額75折券、不限金額7折券、不限金額6折券、<br class="desbr" />
                                        不限金額5折券、不限金額4折券、不限金額3折券、不限金額2折券、不限金額1折券。</span
                                    >
                                </li>
                                <li>
                                    注意事項：<br />
                                    <ul class="decimal">
                                        <li>活動期間內每日可參加1次。</li>
                                        <li>回饋之紅包將於領取後立即匯入符合資格之會員帳戶中。</li>
                                        <li>
                                            本活動每日回饋之紅包使用期限於匯入日起至隔日23:59止有效，逾期失效恕無法補發，請盡速於使用期限內使用完畢，避免因時間差導致系統接收訂單時，紅包已逾期無法使用。
                                        </li>
                                        <li>於單一購物車結帳時，熊幣可同時與購物金及紅包一起抵用。</li>
                                        <li>紅包使用期限與使用條件請至會員中心>我的紅包查詢。</li>
                                        <li>此會員權益不適用於批客訂單、海外地區來源之訂單及海外會員。</li>
                                        <li>除上述注意事項，OB嚴選保留活動修改與終止之權利，不再另行通知。</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="btnBox">
                            <a class="btn-shop" @click="shopNow">SHOP NOW</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import anime from 'animejs'
import idlist from '@/assets/idList.json'
import * as apiRoulette from '@/api/roulette'
import * as commonMsg from '@/constants/common'

export default {
    data() {
        return {
            loading: false,
            MGMActivityId: 'fc9ca1b7-8eef-4a44-bace-ea2e4eec5b61',
            isLogined: false,
            isBannerAnimeFinished: false,
            //其他元素客製化動畫
            customAnime: {
                sunCubicAnimate: null,
                sunAnimeJs: null,
                sunSpeedDefault: 0,
                sunSpeedMax: 5,
                sunTimeManager: null,
                sunstartStemp: null,
                suntimestamp: null,
                sunNewPos: null,
                sunLastPos: null,
                sunDelta: 0,
                duration: null,
            },
            Roulette: {
                PlayCount: 0,
                RouletteID: '',
                RouletteRewardList: [],
            },
            gameSetting: {
                lock: false, // 遊戲運行時鎖定按鈕
            },
            playNum: 0,
            flowerDownCon: false,
            scaleNum: 1,
            canvasImgs1: '',
            canvasImgs2: '',
            canvasId1: '',
            canvasId2: '',
            isplay: false,
            rouletteNum: 0,
            startDate: new Date('2022/5/3'),
            nowDate: new Date(),
        }
    },
    computed: {
        playBol() {
            return this.playNum !== 0
        },
        canRunFlag() {
            const self = this
            return self.isLogined === true && self.isBannerAnimeFinished === true
        },
    },
    watch: {
        isloadingAnimationDone(newValue) {
            const self = this
            //banner Anime
            self.$nextTick(function () {
                // self.resetBannerAnimePC()
            })
        },
        afterScreenResizeState(newValue) {
            const self = this
            //self.cloudAnime()
        },
        screenScrollState(newValue, oldValue) {
            const self = this
        },
        // 偵測螢幕滾輪向下事件
        screenScrollDown(newValue, oldValue) {
            const self = this
        },
        // 偵測螢幕滾輪向上事件
        screenScrollUp(newValue, oldValue) {
            const self = this
        },
        //After 呼叫判斷是否登入API
        isLogin(newValue, oldValue) {
            const self = this
            if (typeof oldValue === 'undefined' && !newValue) {
                //尚未登入
            }
            if (typeof oldValue === 'undefined' && newValue) {
                //有登入
            }
        },
    },
    created() {
        const self = this
    },
    mounted() {
        const self = this
        var difference = self.nowDate - self.startDate
        self.rouletteNum = difference / (1000 * 3600 * 24)
        self.rouletteNum = Math.trunc(self.rouletteNum)
        self.Roulette.RouletteID = idlist.RouletteIdList[self.rouletteNum]
        console.warn('self.RouletteID', self.Roulette.RouletteID)
        console.warn('self.rouletteNum', self.rouletteNum)
        if (window.innerWidth > 768) {
            self.canvasId1 = 'coating'
            self.canvasId2 = 'scratchBg'
            self.scratchSize(1920, self.canvasId1, self.canvasId2)
        } else {
            self.canvasId1 = 'coating_mb'
            self.canvasId2 = 'scratchBg_mb'
            self.scratchSize(640, self.canvasId1, self.canvasId2)
        }
        self.scratchCanvas()
        self.scratchMove()
        self.topAnime()
        window.addEventListener('resize', function () {
            console.log(self.isplay)
            if (window.innerWidth > 768) {
                self.canvasId1 = 'coating'
                self.canvasId2 = 'scratchBg'
                self.scratchSize(1920, self.canvasId1, self.canvasId2)
                self.scratchCanvas()
                self.scratchMove()
                if (self.isplay) {
                    $('#coating').hide()
                }
            } else {
                self.canvasId1 = 'coating_mb'
                self.canvasId2 = 'scratchBg_mb'
                self.scratchSize(640, self.canvasId1, self.canvasId2)
                self.scratchCanvas()
                self.scratchMove()
                if (self.isplay) {
                    $('#coating_mb').hide()
                }
            }
        })
    },
    destroyed() {},
    methods: {
        scratchSize(num, id1, id2) {
            this.scaleNum = window.innerWidth / num
            document.getElementById(id1).style.transform = 'scale(' + this.scaleNum + ')'
            document.getElementById(id2).style.transform = 'scale(' + this.scaleNum + ')'
        },
        scratchCanvas() {
            const self = this
            var c1
            var c2
            if (window.innerWidth > 768) {
                c1 = document.getElementById('coating')
                c2 = document.getElementById('scratchBg')
                // self.canvasImgs1 = '/image/pc/scratch.png'
                // self.canvasImgs2 = '/image/pc/scratch-card_PC.png'
                self.canvasImgs1 = '/ld/events/FE22042501/image/pc/scratch.png'
                self.canvasImgs2 = '/ld/events/FE22042501/image/pc/scratch-card_PC.png'
            } else {
                c1 = document.getElementById('coating_mb')
                c2 = document.getElementById('scratchBg_mb')
                // self.canvasImgs1 = '/image/mb/scratch_mb.png'
                // self.canvasImgs2 = '/image/mb/scratch-card_MB.png'
                self.canvasImgs1 = '/ld/events/FE22042501/image/mb/scratch_mb.png'
                self.canvasImgs2 = '/ld/events/FE22042501/image/mb/scratch-card_MB.png'
            }

            var ctx1 = c1.getContext('2d')
            var ctx2 = c2.getContext('2d')
            // 繪制圖片到底層  canvas2
            var imgs1 = new Image()
            imgs1.src = self.canvasImgs1
            imgs1.onload = function () {
                ctx1.drawImage(this, 0, 0)
            }
            var imgs2 = new Image()
            imgs2.src = self.canvasImgs2
            imgs2.onload = function () {
                ctx2.drawImage(this, 0, 0)
            }
        },
        clearArcFun(x, y, r, cxt) {
            //(x,y)為要清除的圓的圓心，r為半徑，cxt為context
            var stepClear = 1 //別忘記這一步=
            clearArc(x, y, r)
            function clearArc(x, y, radius) {
                var calcWidth = radius - stepClear
                var calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth)

                var posX = x - calcWidth
                var posY = y - calcHeight

                var widthX = 2 * calcWidth
                var heightY = 2 * calcHeight

                if (stepClear <= radius) {
                    cxt.clearRect(posX, posY, widthX, heightY)
                    stepClear += 1
                    clearArc(x, y, radius)
                }
            }
        },
        scratchMove() {
            var self = this
            if (!self.isplay) {
                var c1
                var c2
                if (window.innerWidth > 768) {
                    c1 = document.getElementById('coating')
                    c2 = document.getElementById('scratchBg')
                } else {
                    c1 = document.getElementById('coating_mb')
                    c2 = document.getElementById('scratchBg_mb')
                }

                var ctx1 = c1.getContext('2d')
                var ctx2 = c2.getContext('2d')
                var c1_rect = c1.getBoundingClientRect()
                var device = /android|iphone|ipad|ipod|webos|iemobile|opear mini|linux/i.test(navigator.userAgent.toLowerCase())
                var endEvtName = device ? 'touchmove' : 'mousemove'
                if (device) {
                    c1.ontouchstart = function (ev) {
                        ev.preventDefault()
                        self.playLottery()
                        c1.ontouchmove = function (e) {
                            if (self.playBol) {
                                var scale_ratio = parseFloat(document.documentElement.style.getPropertyValue('--scaleobj_banner'))
                                var size = 30
                                var x_ratio = (e.touches[0].pageX - c1_rect.left) * scale_ratio + size * scale_ratio
                                var y_ratio = (e.touches[0].pageY - c1_rect.top) * scale_ratio + size * scale_ratio
                                var w = 30 // 清除區域的寬度
                                var h = 30 // 清除區域的高度
                                var x = e.touches[0].pageX + x_ratio - c1_rect.left // 清除區域的x
                                var y = e.touches[0].pageY + y_ratio - c1_rect.top // 清除區域的y
                                //ctx1.clearRect(x, y, w, h)
                                self.clearArcFun(x, y, size, ctx1)
                                var imageDate = ctx1.getImageData(0, 0, c1.width, c1.height)
                                var allPX = imageDate.width * imageDate.height

                                var iNum = 0 //記錄刮開的像素點個數

                                for (var i = 0; i < allPX; i++) {
                                    if (imageDate.data[i * 4 + 3] == 0) {
                                        iNum++
                                    }
                                }
                                if (iNum >= (allPX * 2) / 3) {
                                    if (!self.isplay) {
                                        //取得中獎結果
                                        self.$store.commit('SET_PAGELOADING', true)
                                        self.getRouletteGift()
                                    }
                                    $('#coating').fadeOut(1000)
                                    $('#coating_mb').fadeOut(1000)
                                    self.isplay = true
                                    $('.hand').hide()
                                }
                            } else {
                                c1.ontouchmove = null
                            }
                        }
                    }
                    c1.ontouchend = function (ev) {
                        c1.ontouchmove = null
                    }
                } else {
                    c1.onmousedown = function (ev) {
                        self.playLottery()

                        document.addEventListener(
                            endEvtName,
                            function () {
                                if (self.playBol) {
                                    var imageDate = ctx1.getImageData(0, 0, c1.width, c1.height)
                                    var allPX = imageDate.width * imageDate.height

                                    var iNum = 0 //記錄刮開的像素點個數

                                    for (var i = 0; i < allPX; i++) {
                                        if (imageDate.data[i * 4 + 3] == 0) {
                                            iNum++
                                        }
                                    }
                                    if (iNum >= (allPX * 2) / 3) {
                                        if (!self.isplay) {
                                            //取得中獎結果
                                            self.$store.commit('SET_PAGELOADING', true)
                                            self.getRouletteGift()
                                        }
                                        $('#coating').fadeOut(1000)
                                        $('#coating_mb').fadeOut(1000)
                                        self.isplay = true
                                        $('.hand').hide()
                                    }
                                } else {
                                    c1.onmousemove = null
                                }
                            },
                            false
                        )
                        c1.onmousemove = function (e) {
                            var w = 30 // 清除區域的寬度
                            var h = 30 // 清除區域的高度
                            var x = e.pageX - c1.offsetLeft - w / 4 // 清除區域的x
                            var y = e.pageY - c1.offsetTop - h * 2 // 清除區域的y
                            //ctx1.clearRect(x, y, w, h)
                            self.clearArcFun(x, y, 30, ctx1)
                        }
                    }
                    c1.onmouseup = function (ev) {
                        c1.onmousemove = null
                    }
                }
            }
        },
        async playLottery() {
            const self = this
            if (self.gameSetting.lock) {
                return
            }

            //活動結束
            if (self.eventIsExpired) {
                self.$Swal2.fire({
                    text: commonMsg.MSG_EVENT_EXPRIED,
                })
                return
            }

            //檢查登入
            const isLogin = await self.$store.dispatch('CHECKLOGIN')
            if (!isLogin) {
                self.$Swal2.fire({
                    text: commonMsg.MSG_UNLOGING,
                })
                self.$store.commit('SET_PAGELOADING', false)
                return
            }

            //檢查次數
            await self.getRoulettePlayCount()

            if (!self.playBol) {
                let timeNow = new Date().getHours()
                if (timeNow >= 17 && timeNow < 24) {
                    self.$Swal2.fire({
                        text: '您已經抽過了',
                    })
                } else {
                    self.$Swal2.fire({
                        text: '非抽獎時段',
                    })
                }
                self.$store.commit('SET_PAGELOADING', false)
            }
        },
        //取得中獎結果
        async getRouletteGift() {
            const self = this
            if (self.gameSetting.lock) {
                return
            }
            self.gameSetting.lock = true
            const data = await apiRoulette.GetLotteryResult(
                {
                    lotteryId: this.Roulette.RouletteID,
                },
                self
            )

            if (data.ResultCode === 1) {
                const _LotteryDetailId = data.Result.LotteryDetailId
                //取得次數
                this.playNum = !!data.Result && data.Result != null ? data.Result.PlayCount : 0

                //秀得獎結果
                self.customPopup(_LotteryDetailId)
            } else {
                // self.$Swal2.fire({
                //   text: '系統維護中',
                // })
                //Message
                self.$Swal2.fire({
                    text: data.Message,
                })
            }
            self.gameSetting.lock = false
            self.$store.commit('SET_PAGELOADING', false)
        },
        //取得可玩次數
        async getRoulettePlayCount() {
            const self = this
            const data = await apiRoulette.GetLotteryPlayCount(
                {
                    lotteryId: this.Roulette.RouletteID,
                },
                self
            )
            if (data.ResultCode === 1) {
                this.playNum = data.Result
            } else {
                //Message
                self.$Swal2.fire({
                    text: data.Message,
                })
            }
        },
        customPopup(id) {
            const self = this
            let amount = ''
            var amountTxt = ''
            const _id = id.toLocaleUpperCase()
            var giftId = idlist.giftIdList[this.rouletteNum]
            switch (_id) {
                case giftId.idList[0]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '95'
                    break
                case giftId.idList[1]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '9'
                    break
                case giftId.idList[2]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '85'
                    break
                case giftId.idList[3]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '8'
                    break
                case giftId.idList[4]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '75'
                    break
                case giftId.idList[5]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '7'
                    break
                case giftId.idList[6]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '6'
                    break
                case giftId.idList[7]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '5'
                    break
                case giftId.idList[8]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '4'
                    break
                case giftId.idList[9]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '3'
                    break
                case giftId.idList[10]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '2'
                    break
                case giftId.idList[11]:
                    // 不限金額95折券
                    amountTxt = '不限金額'
                    amount = '1'
                    break
                default:
                    break
            }

            const _templatePopupHtml = `<div class='ev-pop-container'>
                <div class='ev-pop-title'></div>
                <div class='ev-pop-body'>
                    <div class='popFlower1'></div>
                    <div class='popFlower2'></div>
                    <div class='popFlower3'></div>
                    <div class='resultBox_outer'>
                    <div class='resultBox'>
                        <div class='amountTxt'>${amountTxt}</div>
                        <div class='amountdes'>
                            <div class='amount'>${amount}</div>
                            <div class='text'>折</div>
                            <div class='text2'>券</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`
            self.$Swal2
                .fire({
                    confirmButtonText: 'SHOP NOW',
                    showCancelButton: true,
                    cancelButtonText: '',
                    cancelButtonAriaLabel: '關閉',
                    confirmButtonColor: 'transparent',
                    customClass: {
                        container: 'ob_customLottery',
                    },
                    html: _templatePopupHtml,
                })
                .then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) self.shopNow()
                })
        },
        resetBannerAnimePC() {
            const self = this
            self.$nextTick(function () {
                //window.OB_card3DMove(self.isMobile)
                window.OB_bannerAnime(this.isMobile, self)
            })
        },
        topAnime() {
            var animeCanvasId1 = '#' + this.canvasId1
            var animeCanvasId2 = '#' + this.canvasId2
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.pinkTitle__1-anime',
                    keyframes: [
                        {
                            scale: 0,
                            opacity: 0,
                            duration: 0,
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 500,
                            easing: 'cubicBezier(0.16,0.4,0.4,1.5)',
                        },
                    ],
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets: '.pinkTitle__2-anime',
                        keyframes: [
                            {
                                scale: 0,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 500,
                                easing: 'cubicBezier(0.16,0.4,0.4,1.5)',
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.pinkTitle__3-anime',
                        keyframes: [
                            {
                                scale: 0,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 500,
                                easing: 'cubicBezier(0.16,0.4,0.4,1.5)',
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.popFlower-anime',
                        keyframes: [
                            {
                                translateX: 200,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                translateX: 0,
                                opacity: 1,
                                duration: 500,
                                easing: 'cubicBezier(0.23,0.55,0.34,0.78)',
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.date-anime',
                        keyframes: [
                            {
                                translateX: 200,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                translateX: 0,
                                opacity: 1,
                                duration: 500,
                                easing: 'cubicBezier(0.23,0.55,0.34,0.78)',
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime6 = topAnime.add(
                    {
                        targets: animeCanvasId1,
                        keyframes: [
                            {
                                translateX: 200,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                translateX: 0,
                                opacity: 1,
                                duration: 1000,
                                easing: 'linear',
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime7 = topAnime.add(
                    {
                        targets: animeCanvasId2,
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                opacity: 0,
                                duration: 1000,
                            },
                            {
                                opacity: 1,
                                duration: 0,
                            },
                        ],
                    },
                    '-=200'
                ).finished
                const anime8 = topAnime.add(
                    {
                        targets: '.mainTitleAnime',
                        keyframes: [
                            {
                                translateX: -100,
                                opacity: 0,
                                duration: 0,
                            },
                            {
                                translateX: 0,
                                opacity: 1,
                                duration: 300,
                                easing: 'linear',
                            },
                        ],
                        delay: anime.stagger(100),
                    },
                    '-=2000'
                ).finished
                const anime9 = topAnime.add(
                    {
                        targets: '.flower-anime',
                        opacity: [
                            {
                                value: 0,
                                duration: 0,
                            },
                            {
                                value: 1,
                                duration: 500,
                            },
                        ],
                        rotate: [
                            {
                                value: -45,
                                duration: 0,
                            },
                            {
                                value: 0,
                                duration: 500,
                            },
                        ],
                        translateY: [
                            {
                                value: -50,
                                duration: 0,
                            },
                            {
                                value: 0,
                                duration: 500,
                            },
                        ],
                        translateX: [
                            {
                                value: 50,
                                duration: 0,
                            },
                            {
                                value: 0,
                                duration: 500,
                            },
                        ],
                        easing: 'linear',
                    },
                    '-=1200'
                ).finished

                await Promise.all([anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9])
            }
            animePromise().then(() => {
                this.arrowBack()
                this.flowerPopAnime()
            })
        },
        flowerPopAnime() {
            anime({
                targets: '.popFlower-anime',
                keyframes: [
                    {
                        scale: 0.9,
                        duration: 200,
                        easing: 'linear',
                    },
                    {
                        scale: 1,
                        duration: 300,
                        easing: 'cubicBezier(0.14, 0.93, 0.7, 1.5)',
                    },
                ],
                delay: 1000,
                complete: () => {
                    this.flowerDown()
                },
            })
        },
        flowerDown() {
            anime({
                targets: '.flowerIconAnime',
                opacity: [
                    {
                        value: 1,
                        duration: 200,
                    },
                    {
                        value: 1,
                        duration: 1600,
                    },
                    {
                        value: 0,
                        duration: 200,
                    },
                ],
                translateY: [
                    {
                        value: -100,
                        duration: 0,
                    },
                    {
                        value: 0,
                    },
                ],
                duration: anime.random([1800, 2200]),
            })
            anime({
                targets: '.flowerIconAnime',
                translateY: [
                    {
                        value: -100,
                        duration: 0,
                    },
                    {
                        value: () => {
                            return anime.random(-80, -90)
                        },
                    },
                    {
                        value: () => {
                            return anime.random(-50, -70)
                        },
                    },
                    {
                        value: () => {
                            return anime.random(-20, -40)
                        },
                    },
                    {
                        value: 0,
                    },
                ],
                translateX: [
                    {
                        value: () => {
                            return anime.random(-30, 30)
                        },
                    },
                    {
                        value: () => {
                            return anime.random(-30, 30)
                        },
                    },
                    {
                        value: () => {
                            return anime.random(-30, 30)
                        },
                    },
                    {
                        value: 0,
                    },
                ],
                opacity: [
                    {
                        value: 1,
                        duration: 200,
                    },
                    {
                        value: 1,
                        duration: 1600,
                    },
                    {
                        value: 0,
                        duration: 200,
                    },
                ],
                easing: 'linear',
                duration: 2000,
                delay: -200,
                complete: () => {
                    this.flowerPopAnime()
                },
            })
        },
        arrowLeave() {
            anime({
                targets: '.arrow1-anime',
                opacity: {
                    value: 0,
                    duration: 500,
                },
                translateY: {
                    value: 20,
                    duration: 500,
                },
                translateX: {
                    value: -20,
                    duration: 500,
                },
                easing: 'linear',
            })
            anime({
                targets: '.arrow2-anime',
                opacity: {
                    value: 0,
                    duration: 500,
                },
                translateY: {
                    value: 10,
                    duration: 500,
                },
                translateX: {
                    value: 30,
                    duration: 500,
                },
                easing: 'linear',
            })
            anime({
                targets: '.handIcon-anime',
                opacity: {
                    value: 0,
                    duration: 500,
                },
                translateY: {
                    value: 30,
                    duration: 500,
                },
                translateX: {
                    value: 20,
                    duration: 500,
                },
                easing: 'linear',
            })
        },
        arrowBack() {
            anime({
                targets: '.arrow1-anime',
                opacity: [
                    {
                        value: 0,
                        duration: 0,
                    },
                    {
                        value: 1,
                        duration: 500,
                    },
                ],
                translateY: [
                    {
                        value: 20,
                        duration: 0,
                    },
                    {
                        value: 0,
                        duration: 500,
                    },
                ],
                translateX: [
                    {
                        value: -20,
                        duration: 0,
                    },
                    {
                        value: 0,
                        duration: 500,
                    },
                ],
                easing: 'linear',
            })
            anime({
                targets: '.arrow2-anime',
                opacity: [
                    {
                        value: 0,
                        duration: 0,
                    },
                    {
                        value: 1,
                        duration: 500,
                    },
                ],
                translateY: [
                    {
                        value: 20,
                        duration: 0,
                    },
                    {
                        value: 0,
                        duration: 500,
                    },
                ],
                translateX: [
                    {
                        value: 20,
                        duration: 0,
                    },
                    {
                        value: 0,
                        duration: 500,
                    },
                ],
                easing: 'linear',
            })
            async function arrowHandBack() {
                var arrowHandBack = anime.timeline({})
                var anime1 = arrowHandBack.add({
                    targets: '.handIcon-anime',
                    opacity: [
                        {
                            value: 0,
                            duration: 0,
                        },
                        {
                            value: 1,
                            duration: 500,
                        },
                    ],
                    translateY: [
                        {
                            value: 30,
                            duration: 0,
                        },
                        {
                            value: 0,
                            duration: 500,
                        },
                    ],
                    translateX: [
                        {
                            value: 20,
                            duration: 0,
                        },
                        {
                            value: 0,
                            duration: 500,
                        },
                    ],
                    easing: 'linear',
                }).finished

                await Promise.all([anime1])
            }
            arrowHandBack().then(() => {
                this.shakeHand()
            })
        },
        shakeHand() {
            anime({
                targets: '.handIcon-anime',
                keyframes: [
                    {
                        rotate: 0,
                        duration: 500,
                    },
                    {
                        rotate: 10,
                        duration: 500,
                    },
                    {
                        rotate: 0,
                        duration: 500,
                    },
                    {
                        rotate: -10,
                        duration: 500,
                    },
                ],
                easing: 'linear',
                direction: 'alternate',
                //delay: 500,
                loop: true,
            })
        },
    },
}
</script>

<style lang="scss"></style>
