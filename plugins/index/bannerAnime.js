import Animejs from 'animejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

if (process.client) {
    const _cusEase1 = 'cusEase1'
    const _cusEase2 = 'cusEase2'
    const easePower1In = 'power1.in'
    const easePower1InOut = 'power1.inOut'
    const _preventOverlaps = 'group1'
    const _anticipatePin = 1
    const merge = (target, source) => {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
        }

        // Join `target` and modified `source`
        Object.assign(target || {}, source)
        return target
    }
    var random = function (min, max) {
        return Math.random() * (max - min) + min
    }
    window.OB_bannerAnime = function (_isMobile, self) {
        const tiggerCard = document.querySelector('.topArea')
        const _pickFlag = tiggerCard.querySelectorAll('.pickFlag-obj')
        const showFlag = () => {
            const index = Math.floor(random(0, _pickFlag.length))
            _pickFlag[index].classList.add('active')

            setTimeout(() => {
                _pickFlag[index].classList.remove('active')
                showFlag()
            }, random(1000, 1800))
        }

        showFlag()
    }
    // window.OB_card3DMove = function (_isMobile) {
    //     const animeElements = [
    //         '.tiggerCard__box',
    //         '.bgLine-anime',
    //         '.bgL-anime',
    //         '.bgR-anime',
    //         '.lampL-anime',
    //         '.lampR-anime',
    //         '.word01-anime',
    //         '.word02-anime',
    //         '.word03-anime',
    //         '.fanL-anime',
    //         '.fanR-anime',
    //         '.date-anime',
    //     ]
    //     var _el_card3DMoves = document.querySelectorAll('.card3D-move')

    //     for (let i = 0; i < _el_card3DMoves.length; i++) {
    //         var element = _el_card3DMoves[i]
    //         if (element.hasEventcard3D == true) continue

    //         element.parentElement.addEventListener('mouseleave', function (e) {
    //             var textOut = function (e) {
    //                 var currentTarget = e.currentTarget
    //                 const _animes = currentTarget.querySelectorAll(
    //                     animeElements.join(',')
    //                 )
    //                 const _bgShadow = document.querySelector('.bg-shadow')
    //                 _bgShadow.style.transform = ''
    //                 _bgShadow.classList.remove('active')
    //                 for (let i = 0; i < _animes.length; i++) {
    //                     const element = _animes[i]
    //                     element.style.transform = ''
    //                 }
    //             }
    //             textOut(e)
    //         })
    //         element.parentElement.addEventListener('mousemove', function (e) {
    //             if (_isMobile) return
    //             var textMove = function (e) {
    //                 const currentTarget = e.currentTarget
    //                 const _tiggerCard =
    //                     currentTarget.querySelector('.tiggerCard__box')

    //                 const pos = currentTarget.getBoundingClientRect()
    //                 const top = e.clientY - pos.top - pos.height / 2
    //                 const left = e.clientX - pos.left - pos.width / 2

    //                 const _animes = currentTarget.querySelectorAll(
    //                     animeElements.join(',')
    //                 )
    //                 const _bgShadow = document.querySelector('.bg-shadow')
    //                 for (let i = 0; i < _animes.length; i++) {
    //                     const element = _animes[i]
    //                     const rateX = element.dataset.ratex || 0
    //                     const rateY = element.dataset.ratey || 0
    //                     const z = element.dataset.z || 0
    //                     const y = top * rateY
    //                     const x = left * rateX
    //                     element.style.transform = `translateZ(${z}px) translateX(${x}px) translateY(${y}px)`
    //                 }
    //                 const _bgShadow_rateX = _bgShadow.dataset.ratex || 0
    //                 const _bgShadow_rateY = _bgShadow.dataset.ratey || 0
    //                 const _bgShadow_y = top * _bgShadow_rateY
    //                 const _bgShadow_x = left * _bgShadow_rateX
    //                 _bgShadow.classList.add('active')
    //                 _bgShadow.style.transform = `translateX(${_bgShadow_x}px) translateY(${_bgShadow_y}px)`

    //                 const _tiggerCardRotateX = _tiggerCard.dataset.rotatex || 0
    //                 const _tiggerCardRotateY = _tiggerCard.dataset.rotatey || 0
    //                 const rx = left * _tiggerCardRotateX
    //                 const ry = top * _tiggerCardRotateY

    //                 _tiggerCard.style.transform = `rotateX(${
    //                     ry * -1
    //                 }deg) rotateY(${rx}deg)`
    //             }

    //             textMove(e)
    //         })
    //         element.hasEventcard3D = true
    //     }
    // }
    // $.fn.menuFloat = function (options) {
    //     //top
    //     //right-bottom,right,right-top
    //     //bottom
    //     //left-bottom,left,left-top
    //     var defaults = {
    //         activeClass: '',
    //         position: 'right',
    //         scrollHeight_show: 0, //px
    //         responsive: {},
    //         responsiveRefreshRate: 50,
    //         responsiveBaseElement: window,
    //         responsiveTemp: null,
    //         resizeTimer: null,
    //     }
    //     var settings = (this.options = $.extend(
    //         {
    //             ori_activeClass: 'float-bar-fixed',
    //         },
    //         defaults,
    //         options
    //     ))

    //     var $this = $(this),
    //         $body = $('body')

    //     $body.addClass(settings.ori_activeClass).addClass(settings.activeClass)

    //     var _loadfloat = function (loadttype, refresh) {
    //         refresh = !refresh ? false : refresh
    //         if (refresh) {
    //             var getClass = $this
    //                 .attr('class')
    //                 .split(' ')
    //                 .filter(function (item, index) {
    //                     return item.indexOf('fbf-') > -1
    //                 })
    //             $this
    //                 .removeClass(getClass)
    //                 .addClass('menufloat')
    //                 .addClass('fbf-' + settings.position)
    //         }

    //         // if ($(window).scrollTop() >= settings.scrollHeight_show) {
    //         if (
    //             $(window).scrollTop() >=
    //             document.body.clientHeight * settings.scrollHeight_show
    //         ) {
    //             $this.addClass('active').removeClass('inactive')
    //             //$this.addClass("active");
    //         } else {
    //             if (loadttype == 'scroll' && $this.hasClass('active')) {
    //                 $this
    //                     .addClass('inactive')
    //                     .delay(100)
    //                     .stop()
    //                     .promise()
    //                     .done(function () {
    //                         $this.removeClass('active')
    //                     })
    //             }
    //             //$this.removeClass("active");
    //         }
    //     }

    //     var setup = function (type) {
    //         var overwrites = options
    //                 ? options.hasOwnProperty('responsive')
    //                     ? options.responsive
    //                     : null
    //                 : null,
    //             match = -1

    //         if (!overwrites) {
    //             settings = $.extend({}, settings)
    //             _loadfloat(type, true)
    //         } else {
    //             $.each(overwrites, function (breakpoint) {
    //                 if (
    //                     breakpoint <= window.OB_STATIC.GetWindowWidth() &&
    //                     breakpoint > match
    //                 ) {
    //                     match = Number(breakpoint)
    //                 }
    //             })
    //             var istemp = false
    //             if (
    //                 settings.responsiveTemp &&
    //                 settings.responsiveTemp == overwrites[match]
    //             )
    //                 istemp = true

    //             settings.responsiveTemp = overwrites[match]
    //             settings = $.extend({}, settings, overwrites[match])

    //             delete settings.responsive

    //             _loadfloat(type, !istemp)
    //         }
    //     }

    //     /**
    //      * Checks window `resize` event.
    //      * @protected
    //      */
    //     var onResize = function () {
    //         setup('firstload')
    //     }

    //     /**
    //      * Checks window `resize` event.
    //      * @protected
    //      */
    //     var onThrottledResize = function () {
    //         window.clearTimeout(settings.resizeTimer)
    //         settings.resizeTimer = window.setTimeout(
    //             onResize,
    //             settings.responsiveRefreshRate
    //         )
    //     }

    //     var addevent = function (element, event, listener, capture) {
    //         if (element.addEventListener) {
    //             element.addEventListener(event, listener, capture)
    //         } else if (element.attachEvent) {
    //             element.attachEvent('on' + event, listener)
    //         }
    //     }

    //     if (settings.responsive !== false) {
    //         addevent(window, 'resize', onThrottledResize)
    //     }

    //     setup('firstload')
    //     $(window).scroll(function () {
    //         _loadfloat('scroll')
    //     })
    // }
    var snowfall_len = 30
    if (window.innerWidth < 768) {
        snowfall_len = 15
    }
    var snowfall_opacity_max = 1
    var snowfall_opacity_min = 1
    var snowfall_scale_max = 0.6
    var snowfall_scale_min = 0.3
    var base_image1 = new Image()
    base_image1.src = `${process.env.imgCdnPath}pc/leaf.png`
    var base_image2 = new Image()
    base_image2.src = `${process.env.imgCdnPath}pc/petal-01.png`
    var base_image3 = new Image()
    base_image3.src = `${process.env.imgCdnPath}pc/petal-02.png`
    var base_image4 = new Image()
    base_image4.src = `${process.env.imgCdnPath}pc/leaf.png`
    var base_image5 = new Image()
    base_image5.src = `${process.env.imgCdnPath}pc/petal-01.png`
    var base_image6 = new Image()
    base_image6.src = `${process.env.imgCdnPath}pc/petal-02.png`

    window.OB_confettiAnime = function (id) {
        //canvas init
        var canvas = document.getElementById(id)
        var ctx = canvas.getContext('2d')

        //canvas dimensions
        var W = window.innerWidth
        var H = window.innerHeight
        canvas.width = W
        canvas.height = H

        //snowflake particles
        var mp = snowfall_len //max particles
        var particles = []

        for (var i = 0; i < mp; i++) {
            var md = Math.random()
            var gType = 0
            switch (true) {
                case md <= 0.1:
                    gType = 0
                    break
                case md > 0.1 && md <= 0.25:
                    gType = 1
                    break
                case md > 0.25 && md <= 0.45:
                    gType = 2
                    break
                case md > 0.45 && md <= 0.6:
                    gType = 3
                    break
                case md > 0.6 && md <= 0.8:
                    gType = 4
                    break
                case md > 0.8 && md <= 1:
                    gType = 5
                    break
                default:
                    break
            }
            particles.push({
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                r: Math.random() * 7 + 1, //radius
                d: Math.random() * mp, //density
                c: random(snowfall_scale_max, snowfall_scale_min), //scale
                o: random(snowfall_opacity_min, snowfall_opacity_max), //opacity
                g: gType, //20% of the special flake img
                rotate: Math.floor(random(360, 1)), //rotate
            })
        }

        //Lets draw the flakes
        var isfirst = true
        function drawSnowFlakes() {
            //ctx.beginPath();
            for (var i = 0; i < mp; i++) {
                var p = particles[i]

                ctx.beginPath()
                ctx.globalAlpha = p.o

                var img = null
                switch (p.g) {
                    case 0:
                        img = base_image1
                        break
                    case 1:
                        img = base_image2
                        break
                    case 2:
                        img = base_image3
                        break
                    case 3:
                        img = base_image4
                        break
                    case 4:
                        img = base_image5
                        break
                    case 5:
                        img = base_image6
                        break
                    default:
                        break
                }
                ctx.setTransform(p.c, 0, 0, p.c, p.x, p.y)
                ctx.rotate((p.rotate * Math.PI) / 180)
                ctx.drawImage(img, 1, 1)
                ctx.setTransform(1, 0, 0, 1, 0, 0)
                // if (p.g) {
                //   ctx.setTransform(p.c, 0, 0, p.c, p.x, p.y)
                //   ctx.rotate((p.rotate * Math.PI) / 180)
                //   ctx.drawImage(base_image, 1, 1)
                //   ctx.setTransform(1, 0, 0, 1, 0, 0)
                // } else {
                //   ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
                //   ctx.fillStyle = 'rgba(255, 255, 255, ' + 1 + ')'
                //   ctx.fill()
                // }
            }
        }

        //Function to move the snowflakes
        //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        var angle = 0
        function moveSnowFlakes() {
            angle += 0.01
            for (var i = 0; i < mp; i++) {
                var p = particles[i]
                //Updating X and Y coordinates
                //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
                //Every particle has its own density which can be used to make the downward movement different for each flake
                //Lets make it more random by adding in the radius
                p.y += Math.cos(angle + p.d) + 1 + p.r / 5
                p.x += Math.sin(angle) * 1

                //Sending flakes back from the top when it exits
                //Lets make it a bit more organic and let flakes enter from the left and right also.
                if (p.x > W + 5 || p.x < -5 || p.y > H) {
                    if (i % 5 > 0) {
                        //66.67% of the flakes
                        particles[i] = {
                            x: Math.random() * W,
                            y: -10,
                            r: p.r,
                            d: p.d,
                            o: p.o,
                            g: p.g,
                            c: p.c,
                            rotate: p.rotate,
                        }
                    } else {
                        //If the flake is exitting from the right
                        if (Math.sin(angle) > 0) {
                            //Enter from the left
                            particles[i] = {
                                x: -5,
                                y: Math.random() * H,
                                r: p.r,
                                d: p.d,
                                o: p.o,
                                g: p.g,
                                c: p.c,
                                rotate: p.rotate,
                            }
                        } else {
                            //Enter from the right
                            particles[i] = {
                                x: W + 5,
                                y: Math.random() * H,
                                r: p.r,
                                d: p.d,
                                o: p.o,
                                g: p.g,
                                c: p.c,
                                rotate: p.rotate,
                            }
                        }
                    }
                }
            }
        }

        //animation loop
        function updateSnowFall() {
            ctx.clearRect(0, 0, W, H)
            drawSnowFlakes()
            moveSnowFlakes()
        }
        setInterval(updateSnowFall, 33)
    }
}
