(self.webpackChunksolana_com = self.webpackChunksolana_com || []).push([
    [5972], {
        25298: function(e) {
            e.exports = function(e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var a = n[o] = {
                        exports: {},
                        id: o,
                        loaded: !1
                    };
                    return e[o].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.p = "dist/", t(0)
            }([function(e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var a = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                        }
                        return e
                    },
                    r = (o(n(1)), n(6)),
                    i = o(r),
                    l = o(n(7)),
                    c = o(n(8)),
                    s = o(n(9)),
                    m = o(n(10)),
                    d = o(n(11)),
                    u = o(n(14)),
                    f = [],
                    p = !1,
                    b = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    },
                    h = function() {
                        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0), p) return f = (0, d.default)(f, b), (0, m.default)(f, b.once), f
                    },
                    g = function() {
                        f = (0, u.default)(), h()
                    },
                    v = function() {
                        f.forEach((function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                        }))
                    },
                    y = function(e) {
                        return !0 === e || "mobile" === e && s.default.mobile() || "phone" === e && s.default.phone() || "tablet" === e && s.default.tablet() || "function" == typeof e && !0 === e()
                    },
                    w = function(e) {
                        b = a(b, e), f = (0, u.default)();
                        var t = document.all && !window.atob;
                        return y(b.disable) || t ? v() : (b.disableMutationObserver || c.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), b.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", b.easing), document.querySelector("body").setAttribute("data-aos-duration", b.duration), document.querySelector("body").setAttribute("data-aos-delay", b.delay), "DOMContentLoaded" === b.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? h(!0) : "load" === b.startEvent ? window.addEventListener(b.startEvent, (function() {
                            h(!0)
                        })) : document.addEventListener(b.startEvent, (function() {
                            h(!0)
                        })), window.addEventListener("resize", (0, l.default)(h, b.debounceDelay, !0)), window.addEventListener("orientationchange", (0, l.default)(h, b.debounceDelay, !0)), window.addEventListener("scroll", (0, i.default)((function() {
                            (0, m.default)(f, b.once)
                        }), b.throttleDelay)), b.disableMutationObserver || c.default.ready("[data-aos]", g), f)
                    };
                e.exports = {
                    init: w,
                    refresh: h,
                    refreshHard: g
                }
            }, function(e, t) {}, , , , , function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function o(t) {
                            var n = b,
                                o = h;
                            return b = h = void 0, N = t, v = e.apply(o, n)
                        }

                        function r(e) {
                            return N = e, y = setTimeout(m, t), C ? o(e) : v
                        }

                        function i(e) {
                            var n = t - (e - w);
                            return Z ? k(n, g - (e - N)) : n
                        }

                        function c(e) {
                            var n = e - w;
                            return void 0 === w || n >= t || n < 0 || Z && e - N >= g
                        }

                        function m() {
                            var e = x();
                            return c(e) ? d(e) : void(y = setTimeout(m, i(e)))
                        }

                        function d(e) {
                            return y = void 0, j && b ? o(e) : (b = h = void 0, v)
                        }

                        function u() {
                            void 0 !== y && clearTimeout(y), N = 0, b = w = h = y = void 0
                        }

                        function f() {
                            return void 0 === y ? v : d(x())
                        }

                        function p() {
                            var e = x(),
                                n = c(e);
                            if (b = arguments, h = this, w = e, n) {
                                if (void 0 === y) return r(w);
                                if (Z) return y = setTimeout(m, t), o(w)
                            }
                            return void 0 === y && (y = setTimeout(m, t)), v
                        }
                        var b, h, g, v, y, w, N = 0,
                            C = !1,
                            Z = !1,
                            j = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return t = l(t) || 0, a(n) && (C = !!n.leading, g = (Z = "maxWait" in n) ? E(l(n.maxWait) || 0, t) : g, j = "trailing" in n ? !!n.trailing : j), p.cancel = u, p.flush = f, p
                    }

                    function o(e, t, o) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return a(o) && (r = "leading" in o ? !!o.leading : r, i = "trailing" in o ? !!o.trailing : i), n(e, t, {
                            leading: r,
                            maxWait: t,
                            trailing: i
                        })
                    }

                    function a(e) {
                        var t = void 0 === e ? "undefined" : c(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function r(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : c(e))
                    }

                    function i(e) {
                        return "symbol" == (void 0 === e ? "undefined" : c(e)) || r(e) && w.call(e) == d
                    }

                    function l(e) {
                        if ("number" == typeof e) return e;
                        if (i(e)) return m;
                        if (a(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = a(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(u, "");
                        var n = p.test(e);
                        return n || b.test(e) ? h(e.slice(2), n ? 2 : 8) : f.test(e) ? m : +e
                    }
                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        s = "Expected a function",
                        m = NaN,
                        d = "[object Symbol]",
                        u = /^\s+|\s+$/g,
                        f = /^[-+]0x[0-9a-f]+$/i,
                        p = /^0b[01]+$/i,
                        b = /^0o[0-7]+$/i,
                        h = parseInt,
                        g = "object" == (void 0 === t ? "undefined" : c(t)) && t && t.Object === Object && t,
                        v = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                        y = g || v || Function("return this")(),
                        w = Object.prototype.toString,
                        E = Math.max,
                        k = Math.min,
                        x = function() {
                            return y.Date.now()
                        };
                    e.exports = o
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                (function(t) {
                    "use strict";

                    function n(e, t, n) {
                        function a(t) {
                            var n = b,
                                o = h;
                            return b = h = void 0, N = t, v = e.apply(o, n)
                        }

                        function r(e) {
                            return N = e, y = setTimeout(m, t), C ? a(e) : v
                        }

                        function l(e) {
                            var n = t - (e - x);
                            return Z ? E(n, g - (e - N)) : n
                        }

                        function s(e) {
                            var n = e - x;
                            return void 0 === x || n >= t || n < 0 || Z && e - N >= g
                        }

                        function m() {
                            var e = k();
                            return s(e) ? d(e) : void(y = setTimeout(m, l(e)))
                        }

                        function d(e) {
                            return y = void 0, j && b ? a(e) : (b = h = void 0, v)
                        }

                        function u() {
                            void 0 !== y && clearTimeout(y), N = 0, b = x = h = y = void 0
                        }

                        function f() {
                            return void 0 === y ? v : d(k())
                        }

                        function p() {
                            var e = k(),
                                n = s(e);
                            if (b = arguments, h = this, x = e, n) {
                                if (void 0 === y) return r(x);
                                if (Z) return y = setTimeout(m, t), a(x)
                            }
                            return void 0 === y && (y = setTimeout(m, t)), v
                        }
                        var b, h, g, v, y, x, N = 0,
                            C = !1,
                            Z = !1,
                            j = !0;
                        if ("function" != typeof e) throw new TypeError(c);
                        return t = i(t) || 0, o(n) && (C = !!n.leading, g = (Z = "maxWait" in n) ? w(i(n.maxWait) || 0, t) : g, j = "trailing" in n ? !!n.trailing : j), p.cancel = u, p.flush = f, p
                    }

                    function o(e) {
                        var t = void 0 === e ? "undefined" : l(e);
                        return !!e && ("object" == t || "function" == t)
                    }

                    function a(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : l(e))
                    }

                    function r(e) {
                        return "symbol" == (void 0 === e ? "undefined" : l(e)) || a(e) && y.call(e) == m
                    }

                    function i(e) {
                        if ("number" == typeof e) return e;
                        if (r(e)) return s;
                        if (o(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = o(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(d, "");
                        var n = f.test(e);
                        return n || p.test(e) ? b(e.slice(2), n ? 2 : 8) : u.test(e) ? s : +e
                    }
                    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                        c = "Expected a function",
                        s = NaN,
                        m = "[object Symbol]",
                        d = /^\s+|\s+$/g,
                        u = /^[-+]0x[0-9a-f]+$/i,
                        f = /^0b[01]+$/i,
                        p = /^0o[0-7]+$/i,
                        b = parseInt,
                        h = "object" == (void 0 === t ? "undefined" : l(t)) && t && t.Object === Object && t,
                        g = "object" == ("undefined" == typeof self ? "undefined" : l(self)) && self && self.Object === Object && self,
                        v = h || g || Function("return this")(),
                        y = Object.prototype.toString,
                        w = Math.max,
                        E = Math.min,
                        k = function() {
                            return v.Date.now()
                        };
                    e.exports = n
                }).call(t, function() {
                    return this
                }())
            }, function(e, t) {
                "use strict";

                function n(e) {
                    var t = void 0,
                        o = void 0;
                    for (t = 0; t < e.length; t += 1) {
                        if ((o = e[t]).dataset && o.dataset.aos) return !0;
                        if (o.children && n(o.children)) return !0
                    }
                    return !1
                }

                function o() {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                }

                function a() {
                    return !!o()
                }

                function r(e, t) {
                    var n = window.document,
                        a = new(o())(i);
                    l = t, a.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }

                function i(e) {
                    e && e.forEach((function(e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            o = Array.prototype.slice.call(e.removedNodes);
                        if (n(t.concat(o))) return l()
                    }))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l = function() {};
                t.default = {
                    isSupported: a,
                    ready: r
                }
            }, function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o() {
                    return navigator.userAgent || navigator.vendor || window.opera || ""
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t
                        }
                    }(),
                    r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    l = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    s = function() {
                        function e() {
                            n(this, e)
                        }
                        return a(e, [{
                            key: "phone",
                            value: function() {
                                var e = o();
                                return !(!r.test(e) && !i.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = o();
                                return !(!l.test(e) && !c.test(e.substr(0, 4)))
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone()
                            }
                        }]), e
                    }();
                t.default = new s
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e, t, n) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
                    },
                    o = function(e, t) {
                        var o = window.pageYOffset,
                            a = window.innerHeight;
                        e.forEach((function(e, r) {
                            n(e, a + o, t)
                        }))
                    };
                t.default = o
            }, function(e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = o(n(12)),
                    r = function(e, t) {
                        return e.forEach((function(e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, a.default)(e.node, t.offset)
                        })), e
                    };
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = o(n(13)),
                    r = function(e, t) {
                        var n = 0,
                            o = 0,
                            r = window.innerHeight,
                            i = {
                                offset: e.getAttribute("data-aos-offset"),
                                anchor: e.getAttribute("data-aos-anchor"),
                                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                            };
                        switch (i.offset && !isNaN(i.offset) && (o = parseInt(i.offset)), i.anchor && document.querySelectorAll(i.anchor) && (e = document.querySelectorAll(i.anchor)[0]), n = (0, a.default)(e).top, i.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;
                            case "top-center":
                                n += r / 2;
                                break;
                            case "bottom-center":
                                n += r / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                n += r / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                n += r;
                                break;
                            case "bottom-top":
                                n += e.offsetHeight + r;
                                break;
                            case "center-top":
                                n += e.offsetHeight / 2 + r
                        }
                        return i.anchorPlacement || i.offset || isNaN(t) || (o = t), n + o
                    };
                t.default = r
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e) {
                    for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                    return {
                        top: n,
                        left: t
                    }
                };
                t.default = n
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function(e) {
                    return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                        return {
                            node: e
                        }
                    }))
                };
                t.default = n
            }])
        },
        36609: function(e, t, n) {
            "use strict";
            var o = n(9925).ZP.div.withConfig({
                displayName: "IndexWrapper",
                componentId: "sc-10h93bu-0"
            })(["font-family:Diatype,var(--font-family-sans-serif);main{background-color:#000 !important;}.bg-black{background-color:#000 !important;}.vimeo-wrapper{position:absolute;top:0;left:0;width:100%;height:100vh;pointer-events:none;overflow:hidden;background-color:#000;@media (min-width:768px){height:80vh;}}.vimeo-wrapper iframe{width:100vw;height:56.25vw;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);@media (min-width:768px){height:80vh;}}.still-vimeo-image{position:absolute;top:0;left:0;width:100%;height:100%;}h1,.h1{font-size:clamp(4.5rem,8vw,6rem) !important;line-height:100%;letter-spacing:-0.74px;}h2,.h2{font-size:1.5rem;line-height:133%;}h3,.h3{font-size:2.25rem;font-weight:bold;line-height:117%;}h4,.h4{font-size:2.625rem;line-height:110%;letter-spacing:-1px;font-weight:700;}p{font-size:1.3125rem;line-height:130%;}.header-large{font-size:4.5rem;line-height:95%;letter-spacing:-0.68px;font-weight:700;}.partner-gray{color:#b7b7b7;}.partner-scroller{color:#fff;&:before{background:rgba(0,0,0,0) linear-gradient(90deg,#000 2.52%,rgba(0,0,0,0) 100%) repeat scroll 0% 0%;}&:after{background:rgba(0,0,0,0) linear-gradient(270deg,#000 2.52%,rgba(0,0,0,0) 100%) repeat scroll 0% 0%;}.scroller-item{background:#131313;}}.footer-new-heading{font-size:2rem;line-height:120%;font-weight:700;color:#f9f9fb;text-align:center;}footer{margin-top:-1px;.footer-new-list-heading{font-family:DSemi,monospace;font-size:1rem;line-height:110%;color:#b7b7b7;}.row{margin-left:0px;margin-right:0px;}}"]);
            t.Z = o
        },
        42662: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return T
                }
            });
            var o = n(67294),
                a = n(25298),
                r = n.n(a),
                i = n(93691),
                l = n(5176),
                c = n.n(l),
                s = n(51431),
                m = n(94687),
                d = function(e) {
                    var t = e.containerClass,
                        n = void 0 === t ? "container" : t;
                    return o.createElement("footer", {
                        className: "py-8 py-md-11 bg-black"
                    }, o.createElement("div", {
                        className: n
                    }, o.createElement("div", {
                        className: "row"
                    }, o.createElement("div", {
                        className: "col-12 col-md-4 col-lg-3"
                    }, o.createElement(c(), {
                        className: "text-muted footer-brand img-fluid mb-2 pb-1",
                        width: 40,
                        height: 40
                    })), o.createElement("div", {
                        className: "col-6 col-md-4 col-lg-2"
                    }, o.createElement("span", {
                        className: "footer-heading default font-weight-bold text-uppercase text-gray-700"
                    }, o.createElement(m.Z, {
                        id: "footer.build"
                    })), o.createElement("ul", {
                        className: "list-unstyled text-muted mb-6 mb-md-8 mb-lg-0"
                    }, o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://docs.solana.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.docs"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://github.com/solana-labs/",
                        className: "text-reset",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o.createElement(m.Z, {
                        id: "footer.github"
                    }))), o.createElement("li", null, o.createElement("a", {
                        href: "https://discordapp.com/invite/pquxPsq",
                        className: "text-reset",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o.createElement(m.Z, {
                        id: "footer.chat"
                    }))))), o.createElement("div", {
                        className: "col-6 col-md-4 col-lg-2"
                    }, o.createElement("span", {
                        className: "footer-heading default font-weight-bold text-uppercase text-gray-700"
                    }, o.createElement(m.Z, {
                        id: "footer.apply"
                    })), o.createElement("ul", {
                        className: "list-unstyled text-muted mb-0"
                    }, o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement(s.Z, {
                        to: "/grants",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.accelerator"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement(s.Z, {
                        to: "/collective",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.collective"
                    }))), o.createElement("li", null, o.createElement("a", {
                        href: "https://jobs.solana.com",
                        target: "_blank",
                        className: "text-reset",
                        rel: "noopener noreferrer"
                    }, o.createElement(m.Z, {
                        id: "footer.careers"
                    }))))), o.createElement("div", {
                        className: "col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0 mt-4 mt-lg-0"
                    }, o.createElement("span", {
                        className: "footer-heading default font-weight-bold text-uppercase text-gray-700"
                    }, o.createElement(m.Z, {
                        id: "footer.learn"
                    })), o.createElement("ul", {
                        className: "list-unstyled text-muted mb-6 mb-md-8 mb-lg-0"
                    }, o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement(s.Z, {
                        to: "/news",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.blog"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://podcast.solana.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.podcast"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://youtube.com/solanalabs",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.videos"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://solanabeach.io",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.solanabeach"
                    }))))), o.createElement("div", {
                        className: "col-6 col-md-4 col-lg-2 mt-4 mt-lg-0"
                    }, o.createElement("span", {
                        className: "footer-heading default font-weight-bold text-uppercase text-gray-700"
                    }, o.createElement(m.Z, {
                        id: "footer.other"
                    })), o.createElement("ul", {
                        className: "list-unstyled text-muted mb-0"
                    }, o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement("a", {
                        href: "https://break.solana.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.break"
                    }))), o.createElement("li", {
                        className: "mb-3"
                    }, o.createElement(s.Z, {
                        to: "/disclaimer",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.disclaimer"
                    }))), o.createElement("li", null, o.createElement(s.Z, {
                        to: "/branding",
                        className: "text-reset"
                    }, o.createElement(m.Z, {
                        id: "footer.presskit"
                    })))))), o.createElement("div", {
                        className: "row justify-content-center"
                    }, o.createElement("div", null, o.createElement("span", {
                        className: "footer-heading font-weight-bold text-uppercase mt-10 default text-gray-700"
                    }, o.createElement(m.Z, {
                        id: "footer.copyright-foundation"
                    }), " ", o.createElement(m.Z, {
                        id: "footer.allrights"
                    }))))))
                },
                u = n(87329),
                f = n(9925),
                p = n(19756),
                b = ["to", "inline"],
                h = function(e) {
                    var t = e.to,
                        n = e.inline,
                        a = void 0 !== n && n,
                        r = (0, p.Z)(e, b);
                    return /^\/(?!\/)/.test(t) && !a ? o.createElement(s.Z, Object.assign({
                        to: t
                    }, r)) : o.createElement(s.U, Object.assign({
                        to: t
                    }, r))
                },
                g = f.ZP.div.withConfig({
                    displayName: "FooterNewSolanaBar__StyledFooterWrapper",
                    componentId: "sc-8ctacp-0"
                })(["position:relative;margin-top:28px;margin-bottom:2rem;"]),
                v = f.ZP.div.withConfig({
                    displayName: "FooterNewSolanaBar__StyledFooterBar",
                    componentId: "sc-8ctacp-1"
                })(["position:relative;width:100%;background-color:#f9f9fb;color:black;border-radius:1rem;padding:2rem;display:flex;justify-content:space-between;z-index:2;"]),
                y = f.ZP.div.withConfig({
                    displayName: "FooterNewSolanaBar__StyledFooterBarDepthClip",
                    componentId: "sc-8ctacp-2"
                })(["position:absolute;top:-28px;left:0;width:100%;height:42px;background:linear-gradient(to top,#f9f9fb 0%,#333 100%);clip-path:polygon(25px 0%,calc(100% - 25px) 0%,100% 100%,0% 100%);z-index:1;"]),
                w = function() {
                    return o.createElement(g, null, o.createElement(v, null, o.createElement(c(), {
                        width: "27",
                        height: "23"
                    }), o.createElement(s.Z, {
                        to: "/",
                        className: "link-unstyled svg-shim scroller-item text-uppercase text-black"
                    }, "solana.com")), o.createElement(y, null))
                },
                E = n(36609),
                k = n(5009),
                x = n.n(k),
                N = {
                    columnClassName: "col-6 col-md-4 col-lg-2",
                    listClassName: "list-unstyled text-muted mb-6 mb-md-8 mb-lg-0",
                    listItemClassName: "mb-3",
                    headingClassName: "footer-heading default font-weight-bold text-uppercase text-gray-700",
                    linkClassName: "text-reset"
                },
                C = [{
                    heading: "footer.build",
                    links: [{
                        title: "footer.docs",
                        url: "https://docs.solana.com/"
                    }, {
                        title: "footer.github",
                        url: "https://github.com/solana-labs/"
                    }, {
                        title: "footer.chat",
                        url: "https://discordapp.com/invite/pquxPsq"
                    }, {
                        title: "footer.status",
                        url: "https://status.solana.com"
                    }]
                }, {
                    heading: "footer.apply",
                    links: [{
                        title: "footer.accelerator",
                        url: "/grants"
                    }, {
                        title: "footer.collective",
                        url: "/collective"
                    }, {
                        title: "footer.careers",
                        url: "https://jobs.solana.com"
                    }]
                }, {
                    heading: "footer.learn",
                    links: [{
                        title: "footer.blog",
                        url: "/news"
                    }, {
                        title: "footer.podcast",
                        url: "https://podcast.solana.com"
                    }, {
                        title: "footer.videos",
                        url: "https://youtube.com/solanalabs"
                    }, {
                        title: "footer.solanabeach",
                        url: "https://solanabeach.io"
                    }]
                }, {
                    heading: "footer.other",
                    links: [{
                        title: "footer.break",
                        url: "https://break.solana.com"
                    }, {
                        title: "footer.disclaimer",
                        url: "/disclaimer"
                    }, {
                        title: "footer.presskit",
                        url: "/branding"
                    }]
                }],
                Z = [],
                j = f.ZP.div.withConfig({
                    displayName: "FooterSecondary__StyledTopDivider",
                    componentId: "sc-1ccppt0-0"
                })(["width:100%;border-top:1px solid rgba(255,255,255,0.4);"]),
                O = Object.assign({}, N, {
                    columnClassName: "col-6 col-md-3",
                    listClassName: "list-unstyled mb-6 mb-md-8 mb-lg-0",
                    listItemClassName: "mb-2",
                    headingClassName: "footer-new-list-heading default text-uppercase mb-4 md-md-6",
                    linkClassName: "footer-new-list-heading text-white"
                }),
                _ = [].concat((0, u.Z)(Z), ["footer.github", "index.new.footer.chat", "footer.collective", "footer.careers", "footer.videos", "footer.solanabeach", "footer.status"]),
                S = function(e) {
                    var t = e.columnHeading,
                        n = e.columnContents,
                        a = e.footerStyles,
                        r = void 0 === a ? N : a,
                        i = e.footerArrows,
                        l = void 0 === i ? Z : i;
                    return o.createElement("div", {
                        className: r.columnClassName
                    }, o.createElement("div", {
                        className: r.headingClassName
                    }, o.createElement(m.Z, {
                        id: t
                    })), o.createElement(j, null), o.createElement("ul", {
                        className: r.listClassName
                    }, n.map((function(e) {
                        var t = e.title,
                            n = e.url;
                        return o.createElement("li", {
                            className: r.listItemClassName,
                            key: t
                        }, o.createElement(h, {
                            to: n,
                            className: r.linkClassName,
                            inline: l.includes(t)
                        }, o.createElement(m.Z, {
                            id: t
                        }), l.includes(t) && o.createElement(x(), {
                            width: "11",
                            height: "11",
                            className: "ml-2"
                        })))
                    }))))
                },
                z = function(e) {
                    var t = e.containerClass,
                        n = void 0 === t ? "index-container" : t,
                        a = (0, u.Z)(C);
                    return a[0].links[2].title = "index.new.footer.chat", o.createElement(E.Z, null, o.createElement("footer", {
                        className: "py-5 py-md-11 mt-xl-n3 bg-black bg-cover"
                    }, o.createElement("div", {
                        className: n
                    }, o.createElement("div", {
                        className: "footer"
                    }, o.createElement("div", {
                        className: "footer-new-heading py-6 py-md-10"
                    }, o.createElement(m.Z, {
                        id: "index.new.footer.heading"
                    })), o.createElement("div", {
                        className: "row pb-6 pb-md-11"
                    }, a.map((function(e) {
                        var t = e.heading,
                            n = e.links;
                        return o.createElement(S, {
                            columnHeading: t,
                            columnContents: n,
                            footerStyles: O,
                            footerArrows: _,
                            key: t
                        })
                    })))), o.createElement(w, null))))
                },
                M = f.ZP.div.withConfig({
                    displayName: "FooterNew__StyledTopDivider",
                    componentId: "sc-o0haro-0"
                })(["width:100%;border-top:1px solid rgba(255,255,255,0.4);"]),
                A = Object.assign({}, N, {
                    columnClassName: "col-6 col-md-3",
                    listClassName: "list-unstyled mb-6 mb-md-8 mb-lg-0",
                    listItemClassName: "mb-2",
                    headingClassName: "footer-new-list-heading default text-uppercase mb-4 md-md-6",
                    linkClassName: "footer-new-list-heading text-white"
                }),
                P = [].concat((0, u.Z)(Z), ["footer.github", "index.new.footer.chat", "footer.collective", "footer.careers", "footer.videos", "footer.solanabeach", "footer.status"]),
                L = function(e) {
                    var t = e.columnHeading,
                        n = e.columnContents,
                        a = e.footerStyles,
                        r = void 0 === a ? N : a,
                        i = e.footerArrows,
                        l = void 0 === i ? Z : i;
                    return o.createElement("div", {
                        className: r.columnClassName
                    }, o.createElement("div", {
                        className: r.headingClassName
                    }, o.createElement(m.Z, {
                        id: t
                    })), o.createElement("ul", {
                        className: r.listClassName
                    }, n.map((function(e) {
                        var t = e.title,
                            n = e.url;
                        return o.createElement("li", {
                            className: r.listItemClassName,
                            key: t
                        }, o.createElement(h, {
                            to: n,
                            className: r.linkClassName,
                            inline: l.includes(t)
                        }, o.createElement(m.Z, {
                            id: t
                        }), l.includes(t) && o.createElement(x(), {
                            width: "11",
                            height: "11",
                            className: "ml-2"
                        })))
                    }))))
                },
                q = function(e) {
                    var t = e.containerClass,
                        n = void 0 === t ? "index-container" : t,
                        a = (0, u.Z)(C);
                    return a[0].links[2].title = "index.new.footer.chat", o.createElement("footer", {
                        className: "py-5 py-md-11 mt-xl-n3 bg-black bg-cover"
                    }, o.createElement("div", {
                        className: n
                    }, o.createElement(M, null), o.createElement("div", {
                        className: "footer-new-heading py-6 py-md-10"
                    }, o.createElement(m.Z, {
                        id: "index.new.footer.heading"
                    })), o.createElement("div", {
                        className: "row pb-6 pb-md-11"
                    }, a.map((function(e) {
                        var t = e.heading,
                            n = e.links;
                        return o.createElement(L, {
                            columnHeading: t,
                            columnContents: n,
                            footerStyles: A,
                            footerArrows: P,
                            key: t
                        })
                    }))), o.createElement(w, null)))
                },
                H = function(e) {
                    var t = e.variant,
                        n = void 0 === t ? "default" : t,
                        a = e.containerClass,
                        r = void 0 === a ? "container" : a;
                    switch (n) {
                        case "secondary":
                            return o.createElement(z, {
                                containerClass: r
                            });
                        case "new":
                            return o.createElement(q, {
                                containerClass: r
                            });
                        case "default":
                        default:
                            return o.createElement(d, {
                                containerClass: r
                            })
                    }
                },
                T = function(e) {
                    var t = e.children,
                        n = e.footerVariant,
                        a = e.containerClass,
                        l = void 0 === a ? "container" : a;
                    return o.useEffect((function() {
                        "undefined" != typeof window && r().init()
                    }), []), o.createElement(o.Fragment, null, o.createElement(i.Z, null), o.createElement("main", null, t), o.createElement(H, {
                        variant: n,
                        containerClass: l
                    }))
                }
        },
        51431: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return s
                }
            });
            var o = n(19756),
                a = n(67294),
                r = n(25444),
                i = ["children", "to", "activeClassName", "partiallyActive"],
                l = ["to", "children"],
                c = function(e) {
                    var t = e.children,
                        n = e.to,
                        l = e.activeClassName,
                        c = e.partiallyActive,
                        s = (0, o.Z)(e, i);
                    return /^\/(?!\/)/.test(n) ? a.createElement(r.Link, Object.assign({
                        to: n,
                        activeClassName: l,
                        partiallyActive: c
                    }, s), t) : a.createElement("a", Object.assign({
                        href: n
                    }, s), t)
                },
                s = function(e) {
                    var t = e.to,
                        n = e.children,
                        r = (0, o.Z)(e, l);
                    return a.createElement(c, Object.assign({
                        to: t
                    }, r, {
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }), n)
                };
            t.Z = c
        },
        5176: function(e, t, n) {
            var o = n(67294);

            function a(e) {
                return o.createElement("svg", e, [o.createElement("path", {
                    d: "M65.2809 238.586C67.7143 236.154 71.0136 234.788 74.4536 234.788H391.851C397.633 234.788 400.528 241.78 396.437 245.867L333.72 308.534C331.287 310.966 327.988 312.332 324.548 312.332H7.15008C1.36809 312.332 -1.52637 305.34 2.56375 301.253L65.2809 238.586Z",
                    fill: "currentColor",
                    key: 0
                }), o.createElement("path", {
                    d: "M65.2809 4.46527C67.7143 2.0338 71.0136 0.667969 74.4536 0.667969H391.851C397.633 0.667969 400.528 7.65972 396.437 11.7466L333.72 74.4138C331.287 76.8452 327.988 78.2111 324.548 78.2111H7.15008C1.36809 78.2111 -1.52637 71.2193 2.56375 67.1325L65.2809 4.46527Z",
                    fill: "currentColor",
                    key: 1
                }), o.createElement("path", {
                    d: "M333.72 120.78C331.287 118.348 327.988 116.983 324.548 116.983H7.15008C1.36808 116.983 -1.52637 123.974 2.56375 128.061L65.2809 190.728C67.7143 193.16 71.0136 194.526 74.4536 194.526H391.851C397.633 194.526 400.528 187.534 396.437 183.447L333.72 120.78Z",
                    fill: "currentColor",
                    key: 2
                })])
            }
            a.defaultProps = {
                width: "399",
                height: "313",
                viewBox: "0 0 399 313",
                fill: "none"
            }, e.exports = a, a.default = a
        }
    }
]);
//# sourceMappingURL=73aeda57714c7e5bce5cbe6a3a11ae22e1e48452-a135bda9a5e38ad56b86.js.map