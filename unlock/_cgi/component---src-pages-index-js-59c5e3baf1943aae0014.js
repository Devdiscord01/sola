"use strict";
(self.webpackChunksolana_com = self.webpackChunksolana_com || []).push([
    [9678], {
        7722: function(e, t, n) {
            n.d(t, {
                Ok: function() {
                    return o
                },
                Sf: function() {
                    return d
                },
                Zi: function() {
                    return m
                },
                Io: function() {
                    return c
                }
            });
            var a = n(92137),
                i = n(87757),
                r = n.n(i),
                l = n(67294),
                o = 5,
                d = 6,
                m = "$0.00025",
                c = function(e) {
                    var t = e.visible,
                        n = e.performanceUpdateSeconds,
                        i = e.sampleHistoryHours,
                        o = e.getLiveTransactionCount,
                        d = void 0 === o || o,
                        m = e.getCurrentValidatorNodes,
                        c = void 0 === m || m,
                        s = (0, l.useRef)(null),
                        p = (0, l.useState)({
                            avgTps: 1e3,
                            validators: 1e3,
                            totalTransactionCount: 3175e7
                        }),
                        u = p[0],
                        f = p[1],
                        h = !0,
                        g = (0, l.useCallback)(function() {
                            var e = (0, a.Z)(r().mark((function e(a, l) {
                                var o, d, m, c, p;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!h || !t) {
                                                e.next = 23;
                                                break
                                            }
                                            return s.current && clearTimeout(s.current), e.prev = 2, o = [{
                                                jsonrpc: "2.0",
                                                id: 1,
                                                method: "getRecentPerformanceSamples",
                                                params: [60 * i]
                                            }], a && o.push({
                                                jsonrpc: "2.0",
                                                id: 2,
                                                method: "getVoteAccounts"
                                            }), l && o.push({
                                                jsonrpc: "2.0",
                                                id: 3,
                                                method: "getTransactionCount"
                                            }), e.next = 8, fetch("https://explorer-api.mainnet-beta.solana.com", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(o)
                                            });
                                        case 8:
                                            return d = e.sent, e.next = 11, d.json();
                                        case 11:
                                            m = e.sent, c = m[0].result.reduce((function(e, t) {
                                                return 0 !== t.numTransactions && e.push(t.numTransactions / t.samplePeriodSecs), e
                                            }), []), p = Math.round(c[0]), f((function(e) {
                                                return {
                                                    avgTps: p,
                                                    validators: a && m.length > 1 ? m[1].result.current.length : e.validators,
                                                    totalTransactionCount: l && m.length > 1 ? a ? m[2].result : m[1].result : e.totalTransactionCount
                                                }
                                            })), s.current = setTimeout((function() {
                                                return g(!1, l)
                                            }), s.current ? 1e3 * n : 5e3), e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(2), console.error("error: ", e.t0);
                                        case 21:
                                            e.next = 23;
                                            break;
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 18]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }());
                    return (0, l.useEffect)((function() {
                        return g(c, d),
                            function() {
                                h = !1
                            }
                    }), [t, c, d]), u
                }
        },
        16846: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            });
            var a = n(67294),
                i = n(91545),
                r = n(7035),
                l = n(26957),
                o = n(87270),
                d = n(9925),
                m = n(25444),
                c = n(82407),
                s = n(9152),
                p = d.ZP.div.withConfig({
                    displayName: "IndexHeroVideo__StyledHeroVimeoWrapper",
                    componentId: "sc-hc9x93-0"
                })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;background:#000;display:none;@media (min-width:768px){display:block;}iframe{position:absolute;width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;top:20%;left:70%;transform:translate(-70%,-20%);@media (min-width:768px){left:50%;transform:translate(-50%,-20%);}}"]),
                u = (0, d.ZP)(c.G).withConfig({
                    displayName: "IndexHeroVideo__StyledLazyLoadImage",
                    componentId: "sc-hc9x93-1"
                })(["position:absolute;top:0;left:-66%;width:100%;height:100%;transform:translate(50%,0);overflow:visible;img{left:-77%;width:200%;}@media (min-width:512px){left:-60%;img{left:-62%;}}@media (min-width:768px){position:absolute;width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;top:20%;left:75%;transform:translate(-70%,-20%);img{left:0;width:100%;}}"]),
                f = d.ZP.div.withConfig({
                    displayName: "IndexHeroVideo__StyledIndexHeroOverlay",
                    componentId: "sc-hc9x93-2"
                })(["position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient( 180deg,#000000 15%,rgba(0,0,0,0) 30.78%,#000000 100% );"]),
                h = function() {
                    var e = (0, m.useStaticQuery)("2772966686").videoStill16x9,
                        t = (0, c.d)(e),
                        n = "https://player.vimeo.com/video/589655407?background=1&autoplay=" + ((0, s.Z)()[0] ? 0 : 1) + "&loop=1&byline=0&autopause=0&title=0&transparent=1";
                    return a.createElement(p, {
                        className: "py-9 py-md-12 pt-14"
                    }, a.createElement(u, {
                        image: t,
                        loading: "eager",
                        alt: "A preview image shown before the Solana Glass video has loaded"
                    }), a.createElement("iframe", {
                        src: n,
                        frameBorder: "0",
                        loading: "lazy",
                        webkitallowfullscreen: "" + !0,
                        mozallowfullscreen: "" + !0,
                        allowFullScreen: !0
                    }), a.createElement(f, null))
                },
                g = n(36609),
                x = n(42662),
                v = n(82345),
                w = n(94687),
                b = n(88131),
                E = d.ZP.div.withConfig({
                    displayName: "IndexHeroVideoMobile__StyledHeroVimeoMobileWrapper",
                    componentId: "sc-za2hii-0"
                })(["position:relative;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;background:#000;@media (min-width:768px){display:none;}iframe{display:none;position:absolute;width:100%;height:150%;min-width:100%;top:20%;left:0;}"]),
                y = (0, d.ZP)(c.G).withConfig({
                    displayName: "IndexHeroVideoMobile__StyledLazyLoadMobileImage",
                    componentId: "sc-za2hii-1"
                })(["position:absolute;top:35%;width:70%;height:100%;margin:0 15%;overflow:visible;img{width:100%;height:auto;}"]),
                N = d.ZP.div.withConfig({
                    displayName: "IndexHeroVideoMobile__StyledIndexHeroOverlay",
                    componentId: "sc-za2hii-2"
                })(["position:absolute;top:0;left:0;width:100%;height:100vh;background:linear-gradient(180deg,#000000 0%,rgba(0,0,0,0) 30.78%);"]),
                Z = function() {
                    var e = (0, m.useStaticQuery)("1941155402").videoStill1x1,
                        t = (0, c.d)(e),
                        n = "https://player.vimeo.com/video/589402437?h=3ab3040611&amp;app_id=122963&background=1&autoplay=" + ((0, s.Z)()[0] ? 0 : 1) + "&loop=1&byline=0&autopause=0&title=0&transparent=1";
                    return a.createElement(E, {
                        className: "py-9 py-md-12 pt-14"
                    }, a.createElement(y, {
                        image: t,
                        loading: "eager",
                        alt: "A preview image shown before the Solana Glass video has loaded"
                    }), a.createElement("iframe", {
                        src: n,
                        frameBorder: "0",
                        loading: "lazy",
                        webkitallowfullscreen: "" + !0,
                        mozallowfullscreen: "" + !0,
                        width: 428,
                        height: 428,
                        allowFullScreen: !0
                    }), a.createElement(N, null))
                },
                S = d.ZP.div.withConfig({
                    displayName: "IndexHero__StyledDivider",
                    componentId: "sc-1e6ibpz-0"
                })(["width:100%;border:1px solid rgba(255,255,255,0.4);"]),
                I = a.forwardRef((function(e, t) {
                    return a.createElement("section", {
                        className: "pt-9 pt-lg-12 bg-black bg-cover mt-n10"
                    }, a.createElement(Z, null), a.createElement("div", {
                        className: "container mt-lg-8 mt-12",
                        ref: t
                    }, a.createElement("div", {
                        className: "row align-items-center justify-content-left"
                    }, a.createElement("div", {
                        className: "col-12 col-md-6 justify-content-left mb-10 mb-lg-0 pr-md-4 text-center text-lg-left"
                    }, a.createElement("h1", {
                        className: "main mb-4 text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.header.hero"
                    })), a.createElement(b.Z, {
                        to: "/developers",
                        rel: "noopener noreferrer",
                        className: "d-inline-block mt-2 mt-md-4 mr-sm-2 lift",
                        variant: "secondary"
                    }, a.createElement(w.Z, {
                        id: "cta.build"
                    })), a.createElement(b.Z, {
                        to: "https://docs.solana.com/",
                        ariaLabel: "Read the Solana Documentation",
                        className: "d-inline-block mt-2 mt-md-4 mr-sm-2 lift",
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, a.createElement(w.Z, {
                        id: "commands.rtdocs"
                    })), a.createElement(S, {
                        className: "mt-6 mb-6"
                    }), a.createElement("h2", {
                        className: "px-5 px-md-0 text-white mb-8 pb-3"
                    }, a.createElement(w.Z, {
                        id: "index.new.header.context"
                    }))))))
                })),
                C = n(3344),
                k = n(83963),
                _ = n(7722),
                z = n(87844),
                T = function(e) {
                    var t = e.info,
                        n = e.perfUpdateSec,
                        i = a.useRef(null),
                        r = t.totalTransactionCount,
                        l = t.avgTPS,
                        o = (0, z.$i)({
                            ref: i,
                            start: r,
                            end: r + l * n,
                            delay: 0,
                            duration: n + 2,
                            startOnMount: !0,
                            preserveValue: !0,
                            separator: ","
                        }).update;
                    return (0, a.useLayoutEffect)((function() {
                        i.current && o(r + l * n)
                    }), [i, r]), a.createElement("span", {
                        ref: i
                    })
                },
                P = d.ZP.section.withConfig({
                    displayName: "TransactionStatistics__StyledStatisticWrapper",
                    componentId: "sc-1npljzu-0"
                })(["position:relative;z-index:1;display:flex;flex-direction:column;width:100%;background:#14f195;color:#131313;font-family:DSemi,monospace;padding:1rem 0;@media (min-width:1024px){display:grid;grid-auto-flow:column;grid-template:1fr 1fr / 1fr 1fr;}@media (min-width:1367px){padding:0 1rem;display:grid;grid-auto-flow:column;grid-template:none;}"]),
                j = d.ZP.div.withConfig({
                    displayName: "TransactionStatistics__StyledStatisticContainer",
                    componentId: "sc-1npljzu-1"
                })(["display:flex;flex-direction:column;background:transparent;justify-content:flex-start;padding:1rem 0;margin:0 1rem;border-bottom:1px solid #131313;&:last-of-type{border-bottom:none;}@media (min-width:1024px){display:grid;grid-auto-flow:column;align-items:center;justify-content:space-between;&:nth-of-type(2){border-bottom:none;}}@media (min-width:1367px){margin:0;display:grid;grid-auto-flow:column;align-items:center;justify-content:space-around;border-bottom:none;border-right:1px solid #131313;&:first-of-type{padding-left:1rem;}&:last-of-type{border-right:none;padding-right:1rem;}}"]),
                H = d.ZP.span.withConfig({
                    displayName: "TransactionStatistics__StyledNumber",
                    componentId: "sc-1npljzu-2"
                })(["font-size:2.625rem;font-weight:bold;line-height:117%;@media (min-width:768px){}"]),
                V = (0, d.ZP)(H).withConfig({
                    displayName: "TransactionStatistics__StyledCountUpNumber",
                    componentId: "sc-1npljzu-3"
                })(["min-width:13ch;"]),
                D = d.ZP.span.withConfig({
                    displayName: "TransactionStatistics__StyledText",
                    componentId: "sc-1npljzu-4"
                })(["font-size:clamp(0.75rem,4vw,1rem);line-height:clamp(1rem,4vw,120%);@media (min-width:768px){text-align:left;width:12ch;}"]),
                G = function(e) {
                    var t = e.visible,
                        n = (0, _.Io)({
                            visible: t,
                            performanceUpdateSeconds: _.Ok,
                            sampleHistoryHours: _.Sf,
                            getLiveTransactionCount: !0
                        }),
                        r = n.avgTps,
                        l = n.validators,
                        o = n.totalTransactionCount;
                    return a.createElement(a.Fragment, null, a.createElement(P, null, a.createElement(j, null, a.createElement(D, null, a.createElement(w.Z, {
                        id: "index.new.stats.transactions"
                    })), a.createElement(H, null, a.createElement(i.FormattedNumber, {
                        value: r
                    }))), a.createElement(j, null, a.createElement(D, null, a.createElement(w.Z, {
                        id: "index.stats.totaltransactions"
                    })), a.createElement(V, null, a.createElement(T, {
                        info: {
                            avgTPS: r,
                            totalTransactionCount: o
                        },
                        perfUpdateSec: _.Ok
                    }))), a.createElement(j, null, a.createElement(D, null, a.createElement(w.Z, {
                        id: "index.new.stats.cost"
                    })), a.createElement(H, null, _.Zi)), a.createElement(j, null, a.createElement(D, null, a.createElement(w.Z, {
                        id: "index.new.stats.validators"
                    })), a.createElement(H, null, a.createElement(i.FormattedNumber, {
                        value: l
                    })))))
                },
                W = d.ZP.div.withConfig({
                    displayName: "IndexGetInvolved__StyledCardWrapper",
                    componentId: "sc-ydrano-0"
                })(["position:relative;border-radius:0.75rem;background-color:#eb54bc;.header-large{font-size:clamp(2.3rem,10vw,3.4rem);}"]),
                L = (0, d.ZP)(W).withConfig({
                    displayName: "IndexGetInvolved__StyledSecondCardWrapper",
                    componentId: "sc-ydrano-1"
                })(["background-color:#14f195;"]),
                M = (0, d.ZP)(W).withConfig({
                    displayName: "IndexGetInvolved__StyledThirdCardWrapper",
                    componentId: "sc-ydrano-2"
                })(["background-color:#80ecff;.depth-clip{position:absolute;left:0;bottom:-2.075rem;width:100%;height:2.125rem;background:linear-gradient(180deg,#80ecff -5.71%,rgba(0,0,0,0) 100%);clip-path:polygon(10% 64%,90% 64%,98% 0%,2% 0%);@media (min-width:768px){bottom:-2.1rem;clip-path:polygon(10% 64%,90% 64%,99% 0%,1% 0%);}}"]),
                O = function() {
                    return a.createElement("section", {
                        className: "container py-5"
                    }, a.createElement("div", {
                        className: "row mx-0"
                    }, a.createElement("div", {
                        className: "col-12 mx-auto px-2 col-md-6 mb-6 mb-md-3"
                    }, a.createElement(W, {
                        className: "px-4 py-5 h-100"
                    }, a.createElement("div", {
                        className: " d-flex flex-column px-5"
                    }, a.createElement("div", {
                        className: "header-large pr-5"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.community-title"
                    })), a.createElement("p", {
                        className: "flex-grow-1 mb-10"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.community-text"
                    })), a.createElement(b.Z, {
                        to: "/community",
                        variant: "none",
                        buttonClassName: "mx-0"
                    }, a.createElement(w.Z, {
                        id: "commands.learn"
                    }))))), a.createElement("div", {
                        className: "col-12 mx-auto px-2 col-md-6 mb-6 mb-md-3"
                    }, a.createElement(L, {
                        className: "px-4 py-5 h-100"
                    }, a.createElement("div", {
                        className: " d-flex flex-column px-5"
                    }, a.createElement("div", {
                        className: "header-large"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.validators-title"
                    })), a.createElement("p", {
                        className: "flex-grow-1 mb-10"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.validators-text"
                    })), a.createElement(b.Z, {
                        href: "https://solana.foundation/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        variant: "none",
                        buttonClassName: "mx-0"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.button"
                    }))))), a.createElement("div", {
                        className: "col-12 mx-auto px-2 mb-6 mb-md-3"
                    }, a.createElement(M, {
                        className: "h-100 row px-4 py-5 mx-0"
                    }, a.createElement("div", {
                        className: "col-12 col-md-6 header-large  px-5"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.developers-title"
                    })), a.createElement("div", {
                        className: "col-12 col-md-6 px-5 d-flex flex-column"
                    }, a.createElement("p", {
                        className: "flex-grow-1"
                    }, a.createElement(w.Z, {
                        id: "index.new.get-involved.developers-text"
                    })), a.createElement(b.Z, {
                        to: "/developers",
                        variant: "none",
                        buttonClassName: "mx-0"
                    }, a.createElement(w.Z, {
                        id: "cta.build"
                    }))), a.createElement("div", {
                        className: "depth-clip"
                    })))))
                },
                R = function() {
                    var e = (0, m.useStaticQuery)("690648026").scaleImage,
                        t = (0, c.d)(e);
                    return a.createElement("section", {
                        className: "index-container py-4 py-md-10"
                    }, a.createElement("div", {
                        className: "container px-md-14"
                    }, a.createElement("div", {
                        className: "header-large text-white mb-3"
                    }, a.createElement(w.Z, {
                        id: "index.new.scale.header"
                    })), a.createElement("div", {
                        className: "h4 text-white text-left mb-4"
                    }, a.createElement(w.Z, {
                        id: "index.new.scale.sub-header"
                    })), a.createElement("div", {
                        className: "h2 text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.scale.text"
                    }))), a.createElement(c.G, {
                        alt: "Image demonstrating the fluidity of Solana adoption.",
                        image: t
                    }))
                },
                A = d.ZP.div.withConfig({
                    displayName: "IndexInfoCards__StyledCardWrapper",
                    componentId: "sc-1lhymqk-0"
                })(["position:relative;border-radius:1.5rem;background-color:#232325;max-width:90%;@media (min-width:768px){max-width:1280px;}"]),
                F = function() {
                    var e = (0, m.useStaticQuery)("2774714530"),
                        t = e.costImage,
                        n = e.speedImage,
                        i = (0, c.d)(t),
                        r = (0, c.d)(n);
                    return a.createElement("section", {
                        className: "container py-5"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement(A, {
                        className: "col-12 col-md mr-md-2 mb-5 mb-md-0 px-0 d-flex flex-column mh-100 overflow-hidden"
                    }, a.createElement("div", {
                        className: "d-flex flex-column flex-grow-1 p-3 pt-6"
                    }, a.createElement("div", {
                        className: "header-large text-white mb-3"
                    }, a.createElement(w.Z, {
                        id: "index.new.info-boxes.cost-header"
                    })), a.createElement("div", {
                        className: "h2 text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.info-boxes.cost-text"
                    }))), a.createElement(c.G, {
                        alt: "Image showing the low cost of the Solana Network",
                        image: i
                    })), a.createElement(A, {
                        className: "col-12 col-md ml-md-2 mb-md-0 px-0 d-flex flex-column mh-100 overflow-hidden"
                    }, a.createElement("div", {
                        className: "d-flex flex-column flex-grow-1 p-3 pt-6 mb-10"
                    }, a.createElement("div", {
                        className: "header-large text-white mb-3"
                    }, a.createElement(w.Z, {
                        id: "index.new.info-boxes.fast-header"
                    })), a.createElement("div", {
                        className: "h2 text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.info-boxes.fast-text"
                    }))), a.createElement(c.G, {
                        alt: "Image showing the speed of the Solana Network",
                        image: r
                    }))))
                },
                Q = d.ZP.section.withConfig({
                    displayName: "IndexDecentralized__StyledDecentralizedWrapper",
                    componentId: "sc-cu9oci-0"
                })(["display:block;position:relative;"]),
                U = d.ZP.div.withConfig({
                    displayName: "IndexDecentralized__StyledContentWrapper",
                    componentId: "sc-cu9oci-1"
                })(["position:relative;bottom:0;left:0;right:0;margin-top:-8rem;@media (min-width:768px){bottom:1rem;}@media (max-width:768px){.header-large{font-size:clamp(2.3rem,10vw,3.4rem);}.h4{font-size:2.3rem;}}"]),
                B = function() {
                    var e = (0, m.useStaticQuery)("232422250").decentralizedImage,
                        t = (0, c.d)(e);
                    return a.createElement(Q, {
                        className: "pb-10 pb-md-12"
                    }, a.createElement(c.G, {
                        alt: "Image of a suggested globe in flat gradient layers.",
                        image: t
                    }), a.createElement(U, {
                        className: "container mt-n6 mt-md-n14 px-md-14"
                    }, a.createElement("div", {
                        className: "header-large text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.decentralized.header"
                    })), a.createElement("div", {
                        className: "h4 text-white text-left mb-4"
                    }, a.createElement(w.Z, {
                        id: "index.new.decentralized.sub-header"
                    })), a.createElement("div", {
                        className: "h2 text-white"
                    }, a.createElement(w.Z, {
                        id: "index.new.decentralized.text"
                    }))))
                },
                $ = d.ZP.div.withConfig({
                    displayName: "AlertTop__AlertWrapper",
                    componentId: "sc-wiiri8-0"
                })(["position:absolute;top:0;width:100%;#navbar.bg-transparent{top:", "px !important;}"], (function(e) {
                    return e.height
                })),
                q = function(e) {
                    var t = e.visible,
                        n = e.DisplayComponent,
                        i = e.children,
                        r = (0, a.useState)(36),
                        l = r[0],
                        o = r[1],
                        d = (0, a.useRef)(null);
                    return (0, a.useLayoutEffect)((function() {
                        o(d.current.clientHeight)
                    })), a.createElement(a.Fragment, null, a.createElement($, {
                        height: t ? l : 0
                    }, a.createElement(n, {
                        ref: d,
                        visible: t
                    }), i))
                },
                J = d.ZP.div.withConfig({
                    displayName: "AlertDisplayComponent__AlertWrapper",
                    componentId: "sc-muizud-0"
                })(["font-family:DSemi,monospace;display:", ";position:relative;z-index:1;width:100%;color:black;padding:5px 10px;background:linear-gradient(270deg,#ab66ff 0%,#14f195 101.39%);flex-direction:row;justify-content:center;align-items:center;text-align:center;@media (min-width:768px){text-align:initial;}a:hover{color:#fff;}"], (function(e) {
                    return e.visible ? "flex" : "none"
                })),
                K = a.forwardRef((function(e, t) {
                    var n = e.visible;
                    return a.createElement(J, {
                        ref: t,
                        visible: n
                    }, a.createElement(i.Link, {
                        to: "/breakpoint",
                        className: "link-unstyled"
                    }, a.createElement(w.Z, {
                        id: "index.new.breakpoint"
                    })))
                }));
            l.S1({
                dsn: "https://71f4f1e0279d42c6b8ec010b88ddd922@o434108.ingest.sentry.io/5670398",
                integrations: [new o.jK.BrowserTracing],
                tracesSampleRate: 1
            });
            var Y = function() {
                var e = (0, i.useIntl)(),
                    t = (0, r.YD)({
                        threshold: 0,
                        initialInView: !0
                    }),
                    n = t.ref,
                    l = t.inView;
                return a.createElement(a.Fragment, null, a.createElement(g.Z, null, a.createElement(q, {
                    visible: !0,
                    DisplayComponent: K
                }, a.createElement(x.Z, {
                    footerVariant: "new"
                }, a.createElement(v.Z, {
                    title: e.formatMessage({
                        id: "titles.index"
                    }),
                    description: "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale today.",
                    addBodyClassName: "bg-true-black"
                }), a.createElement(I, {
                    ref: n
                }), a.createElement(G, {
                    visible: l
                }), a.createElement(C.Z, null), a.createElement(k.Z, null), a.createElement(R, null), a.createElement(F, null), a.createElement(B, null), a.createElement(O, null)))), a.createElement(h, null))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-59c5e3baf1943aae0014.js.map