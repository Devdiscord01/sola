/*! For license information please see commons-f1c3fc216e87740da077.js.LICENSE.txt */
(self.webpackChunksolana_com = self.webpackChunksolana_com || []).push([
    [9351], {
        22122: function(e, t, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        19756: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        20862: function(e, t, n) {
            var r = n(50008).default;

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (o = function(e) {
                    return e ? n : t
                })(e)
            }
            e.exports = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = o(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var l = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, s, l) : a[s] = e[s]
                    }
                return a.default = e, n && n.set(e, a), a
            }, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        50008: function(e) {
            function t(n) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = t = function(e) {
                    return typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = t = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0), t(n)
            }
            e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        92460: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o() {
                return (0, r.useState)(null)
            }
        },
        33112: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(67294);
            var o = function(e) {
                var t = (0, r.useRef)(e);
                return (0, r.useEffect)((function() {
                    t.current = e
                }), [e]), t
            };

            function a(e) {
                var t = o(e);
                return (0, r.useCallback)((function() {
                    return t.current && t.current.apply(t, arguments)
                }), [t])
            }
        },
        83252: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o() {
                var e = (0, r.useRef)(!0),
                    t = (0, r.useRef)((function() {
                        return e.current
                    }));
                return (0, r.useEffect)((function() {
                    return function() {
                        e.current = !1
                    }
                }), []), t.current
            }
        },
        34436: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(e) {
                var t = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    t.current = e
                })), t.current
            }
        },
        69931: function(e, t) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var a = typeof n;
                            if ("string" === a || "number" === a) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var i = o.apply(null, n);
                                    i && e.push(i)
                                }
                            } else if ("object" === a)
                                if (n.toString === Object.prototype.toString)
                                    for (var s in n) r.call(n, s) && n[s] && e.push(s);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                    return o
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        27724: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function(t, n, r, o, a) {
                    var i = r || "<<anonymous>>",
                        s = a || n;
                    if (null == t[n]) return new Error("The " + o + " `" + s + "` is required to make `" + i + "` accessible for users of assistive technologies such as screen readers.");
                    for (var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), u = 5; u < l; u++) c[u - 5] = arguments[u];
                    return e.apply(void 0, [t, n, r, o, a].concat(c))
                }
            }, e.exports = t.default
        },
        32871: function(e, t, n) {
            "use strict";
            var r = n(22122),
                o = n(19756),
                a = n(69931),
                i = n.n(a),
                s = n(67294),
                l = n(99385),
                c = n(48268),
                u = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"],
                d = s.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        a = e.variant,
                        d = e.size,
                        f = e.active,
                        p = e.className,
                        h = e.block,
                        m = e.type,
                        g = e.as,
                        v = (0, o.Z)(e, u),
                        y = (0, l.vE)(n, "btn"),
                        b = i()(p, y, f && "active", a && y + "-" + a, h && y + "-block", d && y + "-" + d);
                    if (v.href) return s.createElement(c.Z, (0, r.Z)({}, v, {
                        as: g,
                        ref: t,
                        className: i()(b, v.disabled && "disabled")
                    }));
                    t && (v.ref = t), m ? v.type = m : g || (v.type = "button");
                    var w = g || "button";
                    return s.createElement(w, (0, r.Z)({}, v, {
                        className: b
                    }))
                }));
            d.displayName = "Button", d.defaultProps = {
                variant: "primary",
                active: !1,
                disabled: !1
            }, t.Z = d
        },
        39683: function(e, t, n) {
            "use strict";
            var r, o = n(22122),
                a = n(19756),
                i = n(69931),
                s = n.n(i),
                l = n(73164),
                c = n(67294),
                u = n(26927),
                d = n(98240),
                f = n(3656),
                p = n(96861),
                h = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"],
                m = {
                    height: ["marginTop", "marginBottom"],
                    width: ["marginLeft", "marginRight"]
                };

            function g(e, t) {
                var n = t["offset" + e[0].toUpperCase() + e.slice(1)],
                    r = m[e];
                return n + parseInt((0, l.Z)(t, r[0]), 10) + parseInt((0, l.Z)(t, r[1]), 10)
            }
            var v = ((r = {})[u.Wj] = "collapse", r[u.Ix] = "collapsing", r[u.d0] = "collapsing", r[u.cn] = "collapse show", r),
                y = { in: !1,
                    timeout: 300,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    getDimensionValue: g
                },
                b = c.forwardRef((function(e, t) {
                    var n = e.onEnter,
                        r = e.onEntering,
                        i = e.onEntered,
                        l = e.onExit,
                        m = e.onExiting,
                        y = e.className,
                        b = e.children,
                        w = e.dimension,
                        k = void 0 === w ? "height" : w,
                        S = e.getDimensionValue,
                        M = void 0 === S ? g : S,
                        x = (0, a.Z)(e, h),
                        T = "function" == typeof k ? k() : k,
                        N = (0, c.useMemo)((function() {
                            return (0, f.Z)((function(e) {
                                e.style[T] = "0"
                            }), n)
                        }), [T, n]),
                        O = (0, c.useMemo)((function() {
                            return (0, f.Z)((function(e) {
                                var t = "scroll" + T[0].toUpperCase() + T.slice(1);
                                e.style[T] = e[t] + "px"
                            }), r)
                        }), [T, r]),
                        C = (0, c.useMemo)((function() {
                            return (0, f.Z)((function(e) {
                                e.style[T] = null
                            }), i)
                        }), [T, i]),
                        A = (0, c.useMemo)((function() {
                            return (0, f.Z)((function(e) {
                                e.style[T] = M(T, e) + "px", (0, p.Z)(e)
                            }), l)
                        }), [l, M, T]),
                        E = (0, c.useMemo)((function() {
                            return (0, f.Z)((function(e) {
                                e.style[T] = null
                            }), m)
                        }), [T, m]);
                    return c.createElement(u.ZP, (0, o.Z)({
                        ref: t,
                        addEndListener: d.Z
                    }, x, {
                        "aria-expanded": x.role ? x.in : null,
                        onEnter: N,
                        onEntering: O,
                        onEntered: C,
                        onExit: A,
                        onExiting: E
                    }), (function(e, t) {
                        return c.cloneElement(b, (0, o.Z)({}, t, {
                            className: s()(y, b.props.className, v[e], "width" === T && "width")
                        }))
                    }))
                }));
            b.defaultProps = y, t.Z = b
        },
        48268: function(e, t, n) {
            "use strict";
            var r = n(22122),
                o = n(19756),
                a = n(67294),
                i = n(3656),
                s = ["as", "disabled", "onKeyDown"];

            function l(e) {
                return !e || "#" === e.trim()
            }
            var c = a.forwardRef((function(e, t) {
                var n = e.as,
                    c = void 0 === n ? "a" : n,
                    u = e.disabled,
                    d = e.onKeyDown,
                    f = (0, o.Z)(e, s),
                    p = function(e) {
                        var t = f.href,
                            n = f.onClick;
                        (u || l(t)) && e.preventDefault(), u ? e.stopPropagation() : n && n(e)
                    };
                return l(f.href) && (f.role = f.role || "button", f.href = f.href || "#"), u && (f.tabIndex = -1, f["aria-disabled"] = !0), a.createElement(c, (0, r.Z)({
                    ref: t
                }, f, {
                    onClick: p,
                    onKeyDown: (0, i.Z)((function(e) {
                        " " === e.key && (e.preventDefault(), p(e))
                    }), d)
                }))
            }));
            c.displayName = "SafeAnchor", t.Z = c
        },
        93342: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return o
                }
            });
            var r = n(67294).createContext(null),
                o = function(e, t) {
                    return void 0 === t && (t = null), null != e ? String(e) : t || null
                };
            t.Z = r
        },
        99385: function(e, t, n) {
            "use strict";
            n.d(t, {
                vE: function() {
                    return a
                }
            });
            var r = n(67294),
                o = r.createContext({});
            o.Consumer, o.Provider;

            function a(e, t) {
                var n = (0, r.useContext)(o);
                return e || n[t] || t
            }
        },
        3656: function(e, t) {
            "use strict";
            t.Z = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.filter((function(e) {
                    return null != e
                })).reduce((function(e, t) {
                    if ("function" != typeof t) throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                    return null === e ? t : function() {
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        e.apply(this, r), t.apply(this, r)
                    }
                }), null)
            }
        },
        22665: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(22122),
                o = n(19756),
                a = n(69931),
                i = n.n(a),
                s = /-(.)/g;
            var l = n(67294),
                c = n(99385),
                u = ["className", "bsPrefix", "as"],
                d = function(e) {
                    return e[0].toUpperCase() + (t = e, t.replace(s, (function(e, t) {
                        return t.toUpperCase()
                    }))).slice(1);
                    var t
                };

            function f(e, t) {
                var n = void 0 === t ? {} : t,
                    a = n.displayName,
                    s = void 0 === a ? d(e) : a,
                    f = n.Component,
                    p = n.defaultProps,
                    h = l.forwardRef((function(t, n) {
                        var a = t.className,
                            s = t.bsPrefix,
                            d = t.as,
                            p = void 0 === d ? f || "div" : d,
                            h = (0, o.Z)(t, u),
                            m = (0, c.vE)(s, e);
                        return l.createElement(p, (0, r.Z)({
                            ref: n,
                            className: i()(a, m)
                        }, h))
                    }));
                return h.defaultProps = p, h.displayName = s, h
            }
        },
        98240: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(73164),
                o = n(86914);

            function a(e, t) {
                var n = (0, r.Z)(e, t) || "",
                    o = -1 === n.indexOf("ms") ? 1e3 : 1;
                return parseFloat(n) * o
            }

            function i(e, t) {
                var n = a(e, "transitionDuration"),
                    r = a(e, "transitionDelay"),
                    i = (0, o.Z)(e, (function(n) {
                        n.target === e && (i(), t(n))
                    }), n + r)
            }
        },
        96861: function(e, t, n) {
            "use strict";

            function r(e) {
                e.offsetHeight
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        10523: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var s, l, c, u;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != i.length) return !1;
                        for (l = s; 0 != l--;)
                            if (!a(e[l], i[l])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!a(l.value[1], i.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((s = e.length) != i.length) return !1;
                        for (l = s; 0 != l--;)
                            if (e[l] !== i[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((s = (c = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (l = s; 0 != l--;)
                        if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = s; 0 != l--;)
                        if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !a(e[c[l]], i[c[l]])) return !1;
                    return !0
                }
                return e != e && i != i
            }
            e.exports = function(e, t) {
                try {
                    return a(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        65186: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return me
                }
            });
            var r, o, a, i, s = n(45697),
                l = n.n(s),
                c = n(96124),
                u = n.n(c),
                d = n(10523),
                f = n.n(d),
                p = n(67294),
                h = n(24756),
                m = n.n(h),
                g = "bodyAttributes",
                v = "htmlAttributes",
                y = "titleAttributes",
                b = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                w = (Object.keys(b).map((function(e) {
                    return b[e]
                })), "charset"),
                k = "cssText",
                S = "href",
                M = "http-equiv",
                x = "innerHTML",
                T = "itemprop",
                N = "name",
                O = "property",
                C = "rel",
                A = "src",
                E = "target",
                D = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                j = "defaultTitle",
                I = "defer",
                L = "encodeSpecialCharacters",
                z = "onChangeClientState",
                P = "titleTemplate",
                R = Object.keys(D).reduce((function(e, t) {
                    return e[D[t]] = t, e
                }), {}),
                Z = [b.NOSCRIPT, b.SCRIPT, b.STYLE],
                B = "data-react-helmet",
                _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                U = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                F = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                W = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                },
                Q = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                V = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                G = function(e) {
                    var t = J(e, b.TITLE),
                        n = J(e, P);
                    if (n && t) return n.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = J(e, j);
                    return t || r || void 0
                },
                H = function(e) {
                    return J(e, z) || function() {}
                },
                $ = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return Y({}, e, t)
                    }), {})
                },
                q = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[b.BASE]
                    })).map((function(e) {
                        return e[b.BASE]
                    })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                var a = r[o].toLowerCase();
                                if (-1 !== e.indexOf(a) && n[a]) return t.concat(n)
                            }
                        return t
                    }), [])
                },
                K = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + _(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, n) {
                        var o = {};
                        n.filter((function(e) {
                            for (var n = void 0, a = Object.keys(e), i = 0; i < a.length; i++) {
                                var s = a[i],
                                    l = s.toLowerCase(); - 1 === t.indexOf(l) || n === C && "canonical" === e[n].toLowerCase() || l === C && "stylesheet" === e[l].toLowerCase() || (n = l), -1 === t.indexOf(s) || s !== x && s !== k && s !== T || (n = s)
                            }
                            if (!n || !e[n]) return !1;
                            var c = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][c] && (o[n][c] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var a = Object.keys(o), i = 0; i < a.length; i++) {
                            var s = a[i],
                                l = m()({}, r[s], o[s]);
                            r[s] = l
                        }
                        return e
                    }), []).reverse()
                },
                J = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                X = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
                        X(e)
                    }), 0)
                }),
                ee = function(e) {
                    return clearTimeout(e)
                },
                te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || X : n.g.requestAnimationFrame || X,
                ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : n.g.cancelAnimationFrame || ee,
                re = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                oe = null,
                ae = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        o = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        s = e.noscriptTags,
                        l = e.onChangeClientState,
                        c = e.scriptTags,
                        u = e.styleTags,
                        d = e.title,
                        f = e.titleAttributes;
                    le(b.BODY, r), le(b.HTML, o), se(d, f);
                    var p = {
                            baseTag: ce(b.BASE, n),
                            linkTags: ce(b.LINK, a),
                            metaTags: ce(b.META, i),
                            noscriptTags: ce(b.NOSCRIPT, s),
                            scriptTags: ce(b.SCRIPT, c),
                            styleTags: ce(b.STYLE, u)
                        },
                        h = {},
                        m = {};
                    Object.keys(p).forEach((function(e) {
                        var t = p[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (h[e] = n), r.length && (m[e] = p[e].oldTags)
                    })), t && t(), l(e, h, m)
                },
                ie = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                se = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = ie(e)), le(b.TITLE, t)
                },
                le = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(B), o = r ? r.split(",") : [], a = [].concat(o), i = Object.keys(t), s = 0; s < i.length; s++) {
                            var l = i[s],
                                c = t[l] || "";
                            n.getAttribute(l) !== c && n.setAttribute(l, c), -1 === o.indexOf(l) && o.push(l);
                            var u = a.indexOf(l); - 1 !== u && a.splice(u, 1)
                        }
                        for (var d = a.length - 1; d >= 0; d--) n.removeAttribute(a[d]);
                        o.length === a.length ? n.removeAttribute(B) : n.getAttribute(B) !== i.join(",") && n.setAttribute(B, i.join(","))
                    }
                },
                ce = function(e, t) {
                    var n = document.head || document.querySelector(b.HEAD),
                        r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
                        o = Array.prototype.slice.call(r),
                        a = [],
                        i = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === x) n.innerHTML = t.innerHTML;
                                else if (r === k) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var s = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, s)
                        }
                        n.setAttribute(B, "true"), o.some((function(e, t) {
                            return i = t, n.isEqualNode(e)
                        })) ? o.splice(i, 1) : a.push(n)
                    })), o.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), a.forEach((function(e) {
                        return n.appendChild(e)
                    })), {
                        oldTags: o,
                        newTags: a
                    }
                },
                ue = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                        return t ? t + " " + r : r
                    }), "")
                },
                de = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[D[n] || n] = e[n], t
                    }), t)
                },
                fe = function(e, t, n) {
                    switch (e) {
                        case b.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, n = t.titleAttributes, (r = {
                                        key: e
                                    })[B] = !0, o = de(n, r), [p.createElement(b.TITLE, o, e)];
                                    var e, n, r, o
                                },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var o = ue(n),
                                            a = ie(t);
                                        return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + V(a, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + V(a, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case g:
                        case v:
                            return {
                                toComponent: function() {
                                    return de(t)
                                },
                                toString: function() {
                                    return ue(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, o = ((r = {
                                                key: n
                                            })[B] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = D[e] || e;
                                                if (n === x || n === k) {
                                                    var r = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else o[n] = t[e]
                                            })), p.createElement(e, o)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var o = Object.keys(r).filter((function(e) {
                                                    return !(e === x || e === k)
                                                })).reduce((function(e, t) {
                                                    var o = void 0 === r[t] ? t : t + '="' + V(r[t], n) + '"';
                                                    return e ? e + " " + o : o
                                                }), ""),
                                                a = r.innerHTML || r.cssText || "",
                                                i = -1 === Z.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + o + (i ? "/>" : ">" + a + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                pe = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        s = e.noscriptTags,
                        l = e.scriptTags,
                        c = e.styleTags,
                        u = e.title,
                        d = void 0 === u ? "" : u,
                        f = e.titleAttributes;
                    return {
                        base: fe(b.BASE, t, r),
                        bodyAttributes: fe(g, n, r),
                        htmlAttributes: fe(v, o, r),
                        link: fe(b.LINK, a, r),
                        meta: fe(b.META, i, r),
                        noscript: fe(b.NOSCRIPT, s, r),
                        script: fe(b.SCRIPT, l, r),
                        style: fe(b.STYLE, c, r),
                        title: fe(b.TITLE, {
                            title: d,
                            titleAttributes: f
                        }, r)
                    }
                },
                he = u()((function(e) {
                    return {
                        baseTag: q([S, E], e),
                        bodyAttributes: $(g, e),
                        defer: J(e, I),
                        encode: J(e, L),
                        htmlAttributes: $(v, e),
                        linkTags: K(b.LINK, [C, S], e),
                        metaTags: K(b.META, [N, w, M, O, T], e),
                        noscriptTags: K(b.NOSCRIPT, [x], e),
                        onChangeClientState: H(e),
                        scriptTags: K(b.SCRIPT, [A, x], e),
                        styleTags: K(b.STYLE, [k], e),
                        title: G(e),
                        titleAttributes: $(y, e)
                    }
                }), (function(e) {
                    oe && ne(oe), e.defer ? oe = te((function() {
                        ae(e, (function() {
                            oe = null
                        }))
                    })) : (ae(e), oe = null)
                }), pe)((function() {
                    return null
                })),
                me = (o = he, i = a = function(e) {
                    function t() {
                        return U(this, t), Q(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !f()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case b.SCRIPT:
                            case b.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case b.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            o = e.newChildProps,
                            a = e.nestedChildren;
                        return Y({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [Y({}, o, this.mapNestedChildrenToProps(n, a))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            o = e.newProps,
                            a = e.newChildProps,
                            i = e.nestedChildren;
                        switch (r.type) {
                            case b.TITLE:
                                return Y({}, o, ((t = {})[r.type] = i, t.titleAttributes = Y({}, a), t));
                            case b.BODY:
                                return Y({}, o, {
                                    bodyAttributes: Y({}, a)
                                });
                            case b.HTML:
                                return Y({}, o, {
                                    htmlAttributes: Y({}, a)
                                })
                        }
                        return Y({}, o, ((n = {})[r.type] = Y({}, a), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = Y({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = Y({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return p.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    a = o.children,
                                    i = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, n) {
                                            return t[R[n] || n] = e[n], t
                                        }), t)
                                    }(W(o, ["children"]));
                                switch (n.warnOnInvalidChildren(e, a), e.type) {
                                    case b.LINK:
                                    case b.META:
                                    case b.NOSCRIPT:
                                    case b.SCRIPT:
                                    case b.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: i,
                                            nestedChildren: a
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: i,
                                            nestedChildren: a
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = W(e, ["children"]),
                            r = Y({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), p.createElement(o, r)
                    }, F(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            o.canUseDOM = e
                        }
                    }]), t
                }(p.Component), a.propTypes = {
                    base: l().object,
                    bodyAttributes: l().object,
                    children: l().oneOfType([l().arrayOf(l().node), l().node]),
                    defaultTitle: l().string,
                    defer: l().bool,
                    encodeSpecialCharacters: l().bool,
                    htmlAttributes: l().object,
                    link: l().arrayOf(l().object),
                    meta: l().arrayOf(l().object),
                    noscript: l().arrayOf(l().object),
                    onChangeClientState: l().func,
                    script: l().arrayOf(l().object),
                    style: l().arrayOf(l().object),
                    title: l().string,
                    titleAttributes: l().object,
                    titleTemplate: l().string
                }, a.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, a.peek = o.peek, a.rewind = function() {
                    var e = o.rewind();
                    return e || (e = pe({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, i);
            me.renderStatic = me.rewind, t.Z = me
        },
        7035: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return f
                }
            });
            var r = n(67294);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = new Map,
                i = new WeakMap,
                s = 0;

            function l(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (i.has(n) || (s += 1, i.set(n, s.toString())), i.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function c(e, t, n) {
                if (void 0 === n && (n = {}), !e) return function() {};
                var r = function(e) {
                        var t = l(e),
                            n = a.get(t);
                        if (!n) {
                            var r, o = new Map,
                                i = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, a = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = a), null == (n = o.get(t.target)) || n.forEach((function(e) {
                                            e(a, t)
                                        }))
                                    }))
                                }), e);
                            r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: i,
                                elements: o
                            }, a.set(t, n)
                        }
                        return n
                    }(n),
                    o = r.id,
                    i = r.observer,
                    s = r.elements,
                    c = s.get(e) || [];
                return s.has(e) || s.set(e, c), c.push(t), i.observe(e),
                    function() {
                        c.splice(c.indexOf(t), 1), 0 === c.length && (s.delete(e), i.unobserve(e)), 0 === s.size && (i.disconnect(), a.delete(o))
                    }
            }

            function u(e) {
                return "function" != typeof e.children
            }
            var d = function(e) {
                var t, n;

                function a(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function(e, t) {
                        e && n.props.triggerOnce && n.unobserve(), u(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var i = a.prototype;
                return i.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, i.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, i.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            o = e.trackVisibility,
                            a = e.delay;
                        this._unobserveCb = c(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: o,
                            delay: a
                        })
                    }
                }, i.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, i.render = function() {
                    if (!u(this.props)) {
                        var e = this.state,
                            t = e.inView,
                            n = e.entry;
                        return this.props.children({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    var a = this.props,
                        i = a.children,
                        s = a.as,
                        l = a.tag,
                        c = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(a, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView"]);
                    return (0, r.createElement)(s || l || "div", o({
                        ref: this.handleNode
                    }, c), i)
                }, a
            }(r.Component);

            function f(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    o = t.delay,
                    a = t.trackVisibility,
                    i = t.rootMargin,
                    s = t.root,
                    l = t.triggerOnce,
                    u = t.skip,
                    d = t.initialInView,
                    f = (0, r.useRef)(),
                    p = (0, r.useState)({
                        inView: !!d
                    }),
                    h = p[0],
                    m = p[1],
                    g = (0, r.useCallback)((function(e) {
                        void 0 !== f.current && (f.current(), f.current = void 0), u || e && (f.current = c(e, (function(e, t) {
                            m({
                                inView: e,
                                entry: t
                            }), t.isIntersecting && l && f.current && (f.current(), f.current = void 0)
                        }), {
                            root: s,
                            rootMargin: i,
                            threshold: n,
                            trackVisibility: a,
                            delay: o
                        }))
                    }), [Array.isArray(n) ? n.toString() : n, s, i, l, u, a, o]);
                (0, r.useEffect)((function() {
                    f.current || !h.entry || l || u || m({
                        inView: !!d
                    })
                }));
                var v = [g, h.inView, h.entry];
                return v.ref = v[0], v.inView = v[1], v.entry = v[2], v
            }
            d.displayName = "InView", d.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        96124: function(e, t, n) {
            "use strict";
            var r, o = n(67294),
                a = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var l, c = [];

                    function u() {
                        l = e(c.map((function(e) {
                            return e.props
                        }))), d.canUseDOM ? t(l) : n && (l = n(l))
                    }
                    var d = function(e) {
                        var t, n;

                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
                            return l
                        }, o.rewind = function() {
                            if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = l;
                            return l = void 0, c = [], e
                        };
                        var i = o.prototype;
                        return i.UNSAFE_componentWillMount = function() {
                            c.push(this), u()
                        }, i.componentDidUpdate = function() {
                            u()
                        }, i.componentWillUnmount = function() {
                            var e = c.indexOf(this);
                            c.splice(e, 1), u()
                        }, i.render = function() {
                            return a.createElement(r, this.props)
                        }, o
                    }(o.PureComponent);
                    return i(d, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), i(d, "canUseDOM", s), d
                }
            }
        },
        26927: function(e, t, n) {
            "use strict";
            n.d(t, {
                cn: function() {
                    return f
                },
                d0: function() {
                    return d
                },
                Wj: function() {
                    return u
                },
                Ix: function() {
                    return p
                },
                ZP: function() {
                    return g
                }
            });
            var r = n(19756),
                o = n(41788),
                a = n(67294),
                i = n(73935),
                s = !1,
                l = a.createContext(null),
                c = "unmounted",
                u = "exited",
                d = "entering",
                f = "entered",
                p = "exiting",
                h = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var o, a = n && !n.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? a ? (o = u, r.appearStatus = d) : o = f : o = t.unmountOnExit || t.mountOnEnter ? c : u, r.state = {
                            status: o
                        }, r.nextCallback = null, r
                    }(0, o.Z)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === c ? {
                            status: u
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== d && n !== f && (t = d) : n !== d && n !== f || (t = p)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === d ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === u && this.setState({
                            status: c
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            o = this.props.nodeRef ? [r] : [i.findDOMNode(this), r],
                            a = o[0],
                            l = o[1],
                            c = this.getTimeouts(),
                            u = r ? c.appear : c.enter;
                        !e && !n || s ? this.safeSetState({
                            status: f
                        }, (function() {
                            t.props.onEntered(a)
                        })) : (this.props.onEnter(a, l), this.safeSetState({
                            status: d
                        }, (function() {
                            t.props.onEntering(a, l), t.onTransitionEnd(u, (function() {
                                t.safeSetState({
                                    status: f
                                }, (function() {
                                    t.props.onEntered(a, l)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : i.findDOMNode(this);
                        t && !s ? (this.props.onExit(r), this.safeSetState({
                            status: p
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: u
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: u
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = o[0],
                                    s = o[1];
                                this.props.addEndListener(a, s)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === c) return null;
                        var t = this.props,
                            n = t.children,
                            o = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, r.Z)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return a.createElement(l.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, o) : a.cloneElement(a.Children.only(n), o))
                    }, t
                }(a.Component);

            function m() {}
            h.contextType = l, h.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: m,
                onEntering: m,
                onEntered: m,
                onExit: m,
                onExiting: m,
                onExited: m
            }, h.UNMOUNTED = c, h.EXITED = u, h.ENTERING = d, h.ENTERED = f, h.EXITING = p;
            var g = h
        },
        91337: function(e) {
            e.exports = function(e, t, n, r) {
                var o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
                    var c = a[l];
                    if (!s(c)) return !1;
                    var u = e[c],
                        d = t[c];
                    if (!1 === (o = n ? n.call(r, u, d, c) : void 0) || void 0 === o && u !== d) return !1
                }
                return !0
            }
        },
        9925: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return De
                }
            });
            var r = n(33669),
                o = n(67294),
                a = n(91337),
                i = n.n(a);
            var s = function(e) {
                    function t(e, r, l, c, f) {
                        for (var p, h, m, g, w, S = 0, M = 0, x = 0, T = 0, N = 0, j = 0, L = m = p = 0, P = 0, R = 0, Z = 0, B = 0, _ = l.length, U = _ - 1, F = "", Y = "", W = "", Q = ""; P < _;) {
                            if (h = l.charCodeAt(P), P === U && 0 !== M + T + x + S && (0 !== M && (h = 47 === M ? 10 : 47), T = x = S = 0, _++, U++), 0 === M + T + x + S) {
                                if (P === U && (0 < R && (F = F.replace(d, "")), 0 < F.trim().length)) {
                                    switch (h) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            F += l.charAt(P)
                                    }
                                    h = 59
                                }
                                switch (h) {
                                    case 123:
                                        for (p = (F = F.trim()).charCodeAt(0), m = 1, B = ++P; P < _;) {
                                            switch (h = l.charCodeAt(P)) {
                                                case 123:
                                                    m++;
                                                    break;
                                                case 125:
                                                    m--;
                                                    break;
                                                case 47:
                                                    switch (h = l.charCodeAt(P + 1)) {
                                                        case 42:
                                                        case 47:
                                                            e: {
                                                                for (L = P + 1; L < U; ++L) switch (l.charCodeAt(L)) {
                                                                    case 47:
                                                                        if (42 === h && 42 === l.charCodeAt(L - 1) && P + 2 !== L) {
                                                                            P = L + 1;
                                                                            break e
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === h) {
                                                                            P = L + 1;
                                                                            break e
                                                                        }
                                                                }
                                                                P = L
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    h++;
                                                case 40:
                                                    h++;
                                                case 34:
                                                case 39:
                                                    for (; P++ < U && l.charCodeAt(P) !== h;);
                                            }
                                            if (0 === m) break;
                                            P++
                                        }
                                        switch (m = l.substring(B, P), 0 === p && (p = (F = F.replace(u, "").trim()).charCodeAt(0)), p) {
                                            case 64:
                                                switch (0 < R && (F = F.replace(d, "")), h = F.charCodeAt(1)) {
                                                    case 100:
                                                    case 109:
                                                    case 115:
                                                    case 45:
                                                        R = r;
                                                        break;
                                                    default:
                                                        R = D
                                                }
                                                if (B = (m = t(r, R, m, h, f + 1)).length, 0 < I && (w = s(3, m, R = n(D, F, Z), r, C, O, B, h, f, c), F = R.join(""), void 0 !== w && 0 === (B = (m = w.trim()).length) && (h = 0, m = "")), 0 < B) switch (h) {
                                                    case 115:
                                                        F = F.replace(k, i);
                                                    case 100:
                                                    case 109:
                                                    case 45:
                                                        m = F + "{" + m + "}";
                                                        break;
                                                    case 107:
                                                        m = (F = F.replace(v, "$1 $2")) + "{" + m + "}", m = 1 === E || 2 === E && a("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                        break;
                                                    default:
                                                        m = F + m, 112 === c && (Y += m, m = "")
                                                } else m = "";
                                                break;
                                            default:
                                                m = t(r, n(r, F, Z), m, c, f + 1)
                                        }
                                        W += m, m = Z = R = L = p = 0, F = "", h = l.charCodeAt(++P);
                                        break;
                                    case 125:
                                    case 59:
                                        if (1 < (B = (F = (0 < R ? F.replace(d, "") : F).trim()).length)) switch (0 === L && (p = F.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (B = (F = F.replace(" ", ":")).length), 0 < I && void 0 !== (w = s(1, F, r, e, C, O, Y.length, c, f, c)) && 0 === (B = (F = w.trim()).length) && (F = "\0\0"), p = F.charCodeAt(0), h = F.charCodeAt(1), p) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === h || 99 === h) {
                                                    Q += F + l.charAt(P);
                                                    break
                                                }
                                            default:
                                                58 !== F.charCodeAt(B - 1) && (Y += o(F, p, h, F.charCodeAt(2)))
                                        }
                                        Z = R = L = p = 0, F = "", h = l.charCodeAt(++P)
                                }
                            }
                            switch (h) {
                                case 13:
                                case 10:
                                    47 === M ? M = 0 : 0 === 1 + p && 107 !== c && 0 < F.length && (R = 1, F += "\0"), 0 < I * z && s(0, F, r, e, C, O, Y.length, c, f, c), O = 1, C++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === M + T + x + S) {
                                        O++;
                                        break
                                    }
                                default:
                                    switch (O++, g = l.charAt(P), h) {
                                        case 9:
                                        case 32:
                                            if (0 === T + S + M) switch (N) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    g = "";
                                                    break;
                                                default:
                                                    32 !== h && (g = " ")
                                            }
                                            break;
                                        case 0:
                                            g = "\\0";
                                            break;
                                        case 12:
                                            g = "\\f";
                                            break;
                                        case 11:
                                            g = "\\v";
                                            break;
                                        case 38:
                                            0 === T + M + S && (R = Z = 1, g = "\f" + g);
                                            break;
                                        case 108:
                                            if (0 === T + M + S + A && 0 < L) switch (P - L) {
                                                case 2:
                                                    112 === N && 58 === l.charCodeAt(P - 3) && (A = N);
                                                case 8:
                                                    111 === j && (A = j)
                                            }
                                            break;
                                        case 58:
                                            0 === T + M + S && (L = P);
                                            break;
                                        case 44:
                                            0 === M + x + T + S && (R = 1, g += "\r");
                                            break;
                                        case 34:
                                        case 39:
                                            0 === M && (T = T === h ? 0 : 0 === T ? h : T);
                                            break;
                                        case 91:
                                            0 === T + M + x && S++;
                                            break;
                                        case 93:
                                            0 === T + M + x && S--;
                                            break;
                                        case 41:
                                            0 === T + M + S && x--;
                                            break;
                                        case 40:
                                            if (0 === T + M + S) {
                                                if (0 === p) switch (2 * N + 3 * j) {
                                                    case 533:
                                                        break;
                                                    default:
                                                        p = 1
                                                }
                                                x++
                                            }
                                            break;
                                        case 64:
                                            0 === M + x + T + S + L + m && (m = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < T + S + x)) switch (M) {
                                                case 0:
                                                    switch (2 * h + 3 * l.charCodeAt(P + 1)) {
                                                        case 235:
                                                            M = 47;
                                                            break;
                                                        case 220:
                                                            B = P, M = 42
                                                    }
                                                    break;
                                                case 42:
                                                    47 === h && 42 === N && B + 2 !== P && (33 === l.charCodeAt(B + 2) && (Y += l.substring(B, P + 1)), g = "", M = 0)
                                            }
                                    }
                                    0 === M && (F += g)
                            }
                            j = N, N = h, P++
                        }
                        if (0 < (B = Y.length)) {
                            if (R = r, 0 < I && (void 0 !== (w = s(2, Y, R, e, C, O, B, c, f, c)) && 0 === (Y = w).length)) return Q + Y + W;
                            if (Y = R.join(",") + "{" + Y + "}", 0 != E * A) {
                                switch (2 !== E || a(Y, 2) || (A = 0), A) {
                                    case 111:
                                        Y = Y.replace(b, ":-moz-$1") + Y;
                                        break;
                                    case 112:
                                        Y = Y.replace(y, "::-webkit-input-$1") + Y.replace(y, "::-moz-$1") + Y.replace(y, ":-ms-input-$1") + Y
                                }
                                A = 0
                            }
                        }
                        return Q + Y + W
                    }

                    function n(e, t, n) {
                        var o = t.trim().split(m);
                        t = o;
                        var a = o.length,
                            i = e.length;
                        switch (i) {
                            case 0:
                            case 1:
                                var s = 0;
                                for (e = 0 === i ? "" : e[0] + " "; s < a; ++s) t[s] = r(e, t[s], n).trim();
                                break;
                            default:
                                var l = s = 0;
                                for (t = []; s < a; ++s)
                                    for (var c = 0; c < i; ++c) t[l++] = r(e[c] + " ", o[s], n).trim()
                        }
                        return t
                    }

                    function r(e, t, n) {
                        var r = t.charCodeAt(0);
                        switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                            case 38:
                                return t.replace(g, "$1" + e.trim());
                            case 58:
                                return e.trim() + t.replace(g, "$1" + e.trim());
                            default:
                                if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                        }
                        return e + t
                    }

                    function o(e, t, n, r) {
                        var i = e + ";",
                            s = 2 * t + 3 * n + 4 * r;
                        if (944 === s) {
                            e = i.indexOf(":", 9) + 1;
                            var l = i.substring(e, i.length - 1).trim();
                            return l = i.substring(0, e).trim() + l + ";", 1 === E || 2 === E && a(l, 1) ? "-webkit-" + l + l : l
                        }
                        if (0 === E || 2 === E && !a(i, 1)) return i;
                        switch (s) {
                            case 1015:
                                return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
                            case 951:
                                return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
                            case 963:
                                return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
                            case 1009:
                                if (100 !== i.charCodeAt(4)) break;
                            case 969:
                            case 942:
                                return "-webkit-" + i + i;
                            case 978:
                                return "-webkit-" + i + "-moz-" + i + i;
                            case 1019:
                            case 983:
                                return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
                            case 883:
                                if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
                                if (0 < i.indexOf("image-set(", 11)) return i.replace(N, "$1-webkit-$2") + i;
                                break;
                            case 932:
                                if (45 === i.charCodeAt(4)) switch (i.charCodeAt(5)) {
                                    case 103:
                                        return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
                                    case 115:
                                        return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
                                    case 98:
                                        return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
                                }
                                return "-webkit-" + i + "-ms-" + i + i;
                            case 964:
                                return "-webkit-" + i + "-ms-flex-" + i + i;
                            case 1023:
                                if (99 !== i.charCodeAt(8)) break;
                                return "-webkit-box-pack" + (l = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + l + i;
                            case 1005:
                                return p.test(i) ? i.replace(f, ":-webkit-") + i.replace(f, ":-moz-") + i : i;
                            case 1e3:
                                switch (t = (l = i.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
                                    case 226:
                                        l = i.replace(w, "tb");
                                        break;
                                    case 232:
                                        l = i.replace(w, "tb-rl");
                                        break;
                                    case 220:
                                        l = i.replace(w, "lr");
                                        break;
                                    default:
                                        return i
                                }
                                return "-webkit-" + i + "-ms-" + l + i;
                            case 1017:
                                if (-1 === i.indexOf("sticky", 9)) break;
                            case 975:
                                switch (t = (i = e).length - 10, s = (l = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                                    case 203:
                                        if (111 > l.charCodeAt(8)) break;
                                    case 115:
                                        i = i.replace(l, "-webkit-" + l) + ";" + i;
                                        break;
                                    case 207:
                                    case 102:
                                        i = i.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + i.replace(l, "-webkit-" + l) + ";" + i.replace(l, "-ms-" + l + "box") + ";" + i
                                }
                                return i + ";";
                            case 938:
                                if (45 === i.charCodeAt(5)) switch (i.charCodeAt(6)) {
                                    case 105:
                                        return l = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + l + "-ms-flex-" + l + i;
                                    case 115:
                                        return "-webkit-" + i + "-ms-flex-item-" + i.replace(M, "") + i;
                                    default:
                                        return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(M, "") + i
                                }
                                break;
                            case 973:
                            case 989:
                                if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
                            case 931:
                            case 953:
                                if (!0 === T.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : i.replace(l, "-webkit-" + l) + i.replace(l, "-moz-" + l.replace("fill-", "")) + i;
                                break;
                            case 962:
                                if (i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + i
                        }
                        return i
                    }

                    function a(e, t) {
                        var n = e.indexOf(1 === t ? ":" : "{"),
                            r = e.substring(0, 3 !== t ? n : 10);
                        return n = e.substring(n + 1, e.length - 1), L(2 !== t ? r : r.replace(x, "$1"), n, t)
                    }

                    function i(e, t) {
                        var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                        return n !== t + ";" ? n.replace(S, " or ($1)").substring(4) : "(" + t + ")"
                    }

                    function s(e, t, n, r, o, a, i, s, l, u) {
                        for (var d, f = 0, p = t; f < I; ++f) switch (d = j[f].call(c, e, p, n, r, o, a, i, s, l, u)) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                p = d
                        }
                        if (p !== t) return p
                    }

                    function l(e) {
                        return void 0 !== (e = e.prefix) && (L = null, e ? "function" != typeof e ? E = 1 : (E = 2, L = e) : E = 0), l
                    }

                    function c(e, n) {
                        var r = e;
                        if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < I) {
                            var o = s(-1, n, r, r, C, O, 0, 0, 0, 0);
                            void 0 !== o && "string" == typeof o && (n = o)
                        }
                        var a = t(D, r, n, 0, 0);
                        return 0 < I && (void 0 !== (o = s(-2, a, r, r, C, O, a.length, 0, 0, 0)) && (a = o)), "", A = 0, O = C = 1, a
                    }
                    var u = /^\0+/g,
                        d = /[\0\r\f]/g,
                        f = /: */g,
                        p = /zoo|gra/,
                        h = /([,: ])(transform)/g,
                        m = /,\r+?/g,
                        g = /([\t\r\n ])*\f?&/g,
                        v = /@(k\w+)\s*(\S*)\s*/,
                        y = /::(place)/g,
                        b = /:(read-only)/g,
                        w = /[svh]\w+-[tblr]{2}/,
                        k = /\(\s*(.*)\s*\)/g,
                        S = /([\s\S]*?);/g,
                        M = /-self|flex-/g,
                        x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                        T = /stretch|:\s*\w+\-(?:conte|avail)/,
                        N = /([^-])(image-set\()/,
                        O = 1,
                        C = 1,
                        A = 0,
                        E = 1,
                        D = [],
                        j = [],
                        I = 0,
                        L = null,
                        z = 0;
                    return c.use = function e(t) {
                        switch (t) {
                            case void 0:
                            case null:
                                I = j.length = 0;
                                break;
                            default:
                                if ("function" == typeof t) j[I++] = t;
                                else if ("object" == typeof t)
                                    for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                                else z = 0 | !!t
                        }
                        return e
                    }, c.set = l, void 0 !== e && l(e), c
                },
                l = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };
            var c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                u = function(e) {
                    var t = {};
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }((function(e) {
                    return c.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
                })),
                d = n(96204),
                f = n.n(d);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var h = function(e, t) {
                    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
                    return n
                },
                m = function(e) {
                    return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, r.typeOf)(e)
                },
                g = Object.freeze([]),
                v = Object.freeze({});

            function y(e) {
                return "function" == typeof e
            }

            function b(e) {
                return e.displayName || e.name || "Component"
            }

            function w(e) {
                return e && "string" == typeof e.styledComponentId
            }
            var k = "undefined" != typeof process && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled",
                S = "undefined" != typeof window && "HTMLElement" in window,
                M = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && "" !== {}.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {}.SC_DISABLE_SPEEDY && "" !== {}.SC_DISABLE_SPEEDY && ("false" !== {}.SC_DISABLE_SPEEDY && {}.SC_DISABLE_SPEEDY));

            function x(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
            }
            var T = function() {
                    function e(e) {
                        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                    }
                    var t = e.prototype;
                    return t.indexOfGroup = function(e) {
                        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                        return t
                    }, t.insertRules = function(e, t) {
                        if (e >= this.groupSizes.length) {
                            for (var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && x(16, "" + e);
                            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                            for (var a = r; a < o; a++) this.groupSizes[a] = 0
                        }
                        for (var i = this.indexOfGroup(e + 1), s = 0, l = t.length; s < l; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++)
                    }, t.clearGroup = function(e) {
                        if (e < this.length) {
                            var t = this.groupSizes[e],
                                n = this.indexOfGroup(e),
                                r = n + t;
                            this.groupSizes[e] = 0;
                            for (var o = n; o < r; o++) this.tag.deleteRule(n)
                        }
                    }, t.getGroup = function(e) {
                        var t = "";
                        if (e >= this.length || 0 === this.groupSizes[e]) return t;
                        for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, a = r; a < o; a++) t += this.tag.getRule(a) + "/*!sc*/\n";
                        return t
                    }, e
                }(),
                N = new Map,
                O = new Map,
                C = 1,
                A = function(e) {
                    if (N.has(e)) return N.get(e);
                    for (; O.has(C);) C++;
                    var t = C++;
                    return N.set(e, t), O.set(t, e), t
                },
                E = function(e) {
                    return O.get(e)
                },
                D = function(e, t) {
                    N.set(e, t), O.set(t, e)
                },
                j = "style[" + k + '][data-styled-version="5.3.0"]',
                I = new RegExp("^" + k + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                L = function(e, t, n) {
                    for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)(r = o[a]) && e.registerName(t, r)
                },
                z = function(e, t) {
                    for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, a = n.length; o < a; o++) {
                        var i = n[o].trim();
                        if (i) {
                            var s = i.match(I);
                            if (s) {
                                var l = 0 | parseInt(s[1], 10),
                                    c = s[2];
                                0 !== l && (D(c, l), L(e, c, s[3]), e.getTag().insertRules(l, r)), r.length = 0
                            } else r.push(i)
                        }
                    }
                },
                P = function() {
                    return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
                },
                R = function(e) {
                    var t = document.head,
                        n = e || t,
                        r = document.createElement("style"),
                        o = function(e) {
                            for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                                var r = t[n];
                                if (r && 1 === r.nodeType && r.hasAttribute(k)) return r
                            }
                        }(n),
                        a = void 0 !== o ? o.nextSibling : null;
                    r.setAttribute(k, "active"), r.setAttribute("data-styled-version", "5.3.0");
                    var i = P();
                    return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r
                },
                Z = function() {
                    function e(e) {
                        var t = this.element = R(e);
                        t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                if (o.ownerNode === e) return o
                            }
                            x(17)
                        }(t), this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        try {
                            return this.sheet.insertRule(t, e), this.length++, !0
                        } catch (e) {
                            return !1
                        }
                    }, t.deleteRule = function(e) {
                        this.sheet.deleteRule(e), this.length--
                    }, t.getRule = function(e) {
                        var t = this.sheet.cssRules[e];
                        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
                    }, e
                }(),
                B = function() {
                    function e(e) {
                        var t = this.element = R(e);
                        this.nodes = t.childNodes, this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        if (e <= this.length && e >= 0) {
                            var n = document.createTextNode(t),
                                r = this.nodes[e];
                            return this.element.insertBefore(n, r || null), this.length++, !0
                        }
                        return !1
                    }, t.deleteRule = function(e) {
                        this.element.removeChild(this.nodes[e]), this.length--
                    }, t.getRule = function(e) {
                        return e < this.length ? this.nodes[e].textContent : ""
                    }, e
                }(),
                _ = function() {
                    function e(e) {
                        this.rules = [], this.length = 0
                    }
                    var t = e.prototype;
                    return t.insertRule = function(e, t) {
                        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                    }, t.deleteRule = function(e) {
                        this.rules.splice(e, 1), this.length--
                    }, t.getRule = function(e) {
                        return e < this.length ? this.rules[e] : ""
                    }, e
                }(),
                U = S,
                F = {
                    isServer: !S,
                    useCSSOMInjection: !M
                },
                Y = function() {
                    function e(e, t, n) {
                        void 0 === e && (e = v), void 0 === t && (t = {}), this.options = p({}, F, {}, e), this.gs = t, this.names = new Map(n), !this.options.isServer && S && U && (U = !1, function(e) {
                            for (var t = document.querySelectorAll(j), n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                o && "active" !== o.getAttribute(k) && (z(e, o), o.parentNode && o.parentNode.removeChild(o))
                            }
                        }(this))
                    }
                    e.registerId = function(e) {
                        return A(e)
                    };
                    var t = e.prototype;
                    return t.reconstructWithOptions = function(t, n) {
                        return void 0 === n && (n = !0), new e(p({}, this.options, {}, t), this.gs, n && this.names || void 0)
                    }, t.allocateGSInstance = function(e) {
                        return this.gs[e] = (this.gs[e] || 0) + 1
                    }, t.getTag = function() {
                        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new _(o) : r ? new Z(o) : new B(o), new T(e)));
                        var e, t, n, r, o
                    }, t.hasNameForId = function(e, t) {
                        return this.names.has(e) && this.names.get(e).has(t)
                    }, t.registerName = function(e, t) {
                        if (A(e), this.names.has(e)) this.names.get(e).add(t);
                        else {
                            var n = new Set;
                            n.add(t), this.names.set(e, n)
                        }
                    }, t.insertRules = function(e, t, n) {
                        this.registerName(e, t), this.getTag().insertRules(A(e), n)
                    }, t.clearNames = function(e) {
                        this.names.has(e) && this.names.get(e).clear()
                    }, t.clearRules = function(e) {
                        this.getTag().clearGroup(A(e)), this.clearNames(e)
                    }, t.clearTag = function() {
                        this.tag = void 0
                    }, t.toString = function() {
                        return function(e) {
                            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                                var a = E(o);
                                if (void 0 !== a) {
                                    var i = e.names.get(a),
                                        s = t.getGroup(o);
                                    if (void 0 !== i && 0 !== s.length) {
                                        var l = k + ".g" + o + '[id="' + a + '"]',
                                            c = "";
                                        void 0 !== i && i.forEach((function(e) {
                                            e.length > 0 && (c += e + ",")
                                        })), r += "" + s + l + '{content:"' + c + '"}/*!sc*/\n'
                                    }
                                }
                            }
                            return r
                        }(this)
                    }, e
                }(),
                W = /(a)(d)/gi,
                Q = function(e) {
                    return String.fromCharCode(e + (e > 25 ? 39 : 97))
                };

            function V(e) {
                var t, n = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;
                return (Q(t % 52) + n).replace(W, "$1-$2")
            }
            var G = function(e, t) {
                    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                    return e
                },
                H = function(e) {
                    return G(5381, e)
                };

            function $(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t];
                    if (y(n) && !w(n)) return !1
                }
                return !0
            }
            var q = H("5.3.0"),
                K = function() {
                    function e(e, t, n) {
                        this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && $(e), this.componentId = t, this.baseHash = G(q, t), this.baseStyle = n, Y.registerId(t)
                    }
                    return e.prototype.generateAndInjectStyles = function(e, t, n) {
                        var r = this.componentId,
                            o = [];
                        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                            else {
                                var a = me(this.rules, e, t, n).join(""),
                                    i = V(G(this.baseHash, a.length) >>> 0);
                                if (!t.hasNameForId(r, i)) {
                                    var s = n(a, "." + i, void 0, r);
                                    t.insertRules(r, i, s)
                                }
                                o.push(i), this.staticRulesId = i
                            }
                        else {
                            for (var l = this.rules.length, c = G(this.baseHash, n.hash), u = "", d = 0; d < l; d++) {
                                var f = this.rules[d];
                                if ("string" == typeof f) u += f;
                                else if (f) {
                                    var p = me(f, e, t, n),
                                        h = Array.isArray(p) ? p.join("") : p;
                                    c = G(c, h + d), u += h
                                }
                            }
                            if (u) {
                                var m = V(c >>> 0);
                                if (!t.hasNameForId(r, m)) {
                                    var g = n(u, "." + m, void 0, r);
                                    t.insertRules(r, m, g)
                                }
                                o.push(m)
                            }
                        }
                        return o.join(" ")
                    }, e
                }(),
                J = /^\s*\/\/.*$/gm,
                X = [":", "[", ".", "#"];

            function ee(e) {
                var t, n, r, o, a = void 0 === e ? v : e,
                    i = a.options,
                    l = void 0 === i ? v : i,
                    c = a.plugins,
                    u = void 0 === c ? g : c,
                    d = new s(l),
                    f = [],
                    p = function(e) {
                        function t(t) {
                            if (t) try {
                                e(t + "}")
                            } catch (e) {}
                        }
                        return function(n, r, o, a, i, s, l, c, u, d) {
                            switch (n) {
                                case 1:
                                    if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                    break;
                                case 2:
                                    if (0 === c) return r + "/*|*/";
                                    break;
                                case 3:
                                    switch (c) {
                                        case 102:
                                        case 112:
                                            return e(o[0] + r), "";
                                        default:
                                            return r + (0 === d ? "/*|*/" : "")
                                    }
                                case -2:
                                    r.split("/*|*/}").forEach(t)
                            }
                        }
                    }((function(e) {
                        f.push(e)
                    })),
                    h = function(e, r, a) {
                        return 0 === r && -1 !== X.indexOf(a[n.length]) || a.match(o) ? e : "." + t
                    };

                function m(e, a, i, s) {
                    void 0 === s && (s = "&");
                    var l = e.replace(J, ""),
                        c = a && i ? i + " " + a + " { " + l + " }" : l;
                    return t = s, n = a, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), d(i || !a ? "" : a, c)
                }
                return d.use([].concat(u, [function(e, t, o) {
                    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, h))
                }, p, function(e) {
                    if (-2 === e) {
                        var t = f;
                        return f = [], t
                    }
                }])), m.hash = u.length ? u.reduce((function(e, t) {
                    return t.name || x(15), G(e, t.name)
                }), 5381).toString() : "", m
            }
            var te = o.createContext(),
                ne = (te.Consumer, o.createContext()),
                re = (ne.Consumer, new Y),
                oe = ee();

            function ae() {
                return (0, o.useContext)(te) || re
            }

            function ie() {
                return (0, o.useContext)(ne) || oe
            }

            function se(e) {
                var t = (0, o.useState)(e.stylisPlugins),
                    n = t[0],
                    r = t[1],
                    a = ae(),
                    s = (0, o.useMemo)((function() {
                        var t = a;
                        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                            target: e.target
                        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                            useCSSOMInjection: !1
                        })), t
                    }), [e.disableCSSOMInjection, e.sheet, e.target]),
                    l = (0, o.useMemo)((function() {
                        return ee({
                            options: {
                                prefix: !e.disableVendorPrefixes
                            },
                            plugins: n
                        })
                    }), [e.disableVendorPrefixes, n]);
                return (0, o.useEffect)((function() {
                    i()(n, e.stylisPlugins) || r(e.stylisPlugins)
                }), [e.stylisPlugins]), o.createElement(te.Provider, {
                    value: s
                }, o.createElement(ne.Provider, {
                    value: l
                }, e.children))
            }
            var le = function() {
                    function e(e, t) {
                        var n = this;
                        this.inject = function(e, t) {
                            void 0 === t && (t = oe);
                            var r = n.name + t.hash;
                            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                        }, this.toString = function() {
                            return x(12, String(n.name))
                        }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
                    }
                    return e.prototype.getName = function(e) {
                        return void 0 === e && (e = oe), this.name + e.hash
                    }, e
                }(),
                ce = /([A-Z])/,
                ue = /([A-Z])/g,
                de = /^ms-/,
                fe = function(e) {
                    return "-" + e.toLowerCase()
                };

            function pe(e) {
                return ce.test(e) ? e.replace(ue, fe).replace(de, "-ms-") : e
            }
            var he = function(e) {
                return null == e || !1 === e || "" === e
            };

            function me(e, t, n, r) {
                if (Array.isArray(e)) {
                    for (var o, a = [], i = 0, s = e.length; i < s; i += 1) "" !== (o = me(e[i], t, n, r)) && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                    return a
                }
                return he(e) ? "" : w(e) ? "." + e.styledComponentId : y(e) ? "function" != typeof(c = e) || c.prototype && c.prototype.isReactComponent || !t ? e : me(e(t), t, n, r) : e instanceof le ? n ? (e.inject(n, r), e.getName(r)) : e : m(e) ? function e(t, n) {
                    var r, o, a = [];
                    for (var i in t) t.hasOwnProperty(i) && !he(t[i]) && (m(t[i]) ? a.push.apply(a, e(t[i], i)) : y(t[i]) ? a.push(pe(i) + ":", t[i], ";") : a.push(pe(i) + ": " + (r = i, (null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in l ? String(o).trim() : o + "px") + ";")));
                    return n ? [n + " {"].concat(a, ["}"]) : a
                }(e) : e.toString();
                var c
            }

            function ge(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return y(e) || m(e) ? me(h(g, [e].concat(n))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : me(h(e, n))
            }
            new Set;
            var ve = function(e, t, n) {
                    return void 0 === n && (n = v), e.theme !== n.theme && e.theme || t || n.theme
                },
                ye = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                be = /(^-|-$)/g;

            function we(e) {
                return e.replace(ye, "-").replace(be, "")
            }
            var ke = function(e) {
                return V(H(e) >>> 0)
            };

            function Se(e) {
                return "string" == typeof e && !0
            }
            var Me = function(e) {
                    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
                },
                xe = function(e) {
                    return "__proto__" !== e && "constructor" !== e && "prototype" !== e
                };

            function Te(e, t, n) {
                var r = e[n];
                Me(t) && Me(r) ? Ne(r, t) : e[n] = t
            }

            function Ne(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var o = 0, a = n; o < a.length; o++) {
                    var i = a[o];
                    if (Me(i))
                        for (var s in i) xe(s) && Te(e, i[s], s)
                }
                return e
            }
            var Oe = o.createContext();
            Oe.Consumer;
            var Ce = {};

            function Ae(e, t, n) {
                var r = w(e),
                    a = !Se(e),
                    i = t.attrs,
                    s = void 0 === i ? g : i,
                    l = t.componentId,
                    c = void 0 === l ? function(e, t) {
                        var n = "string" != typeof e ? "sc" : we(e);
                        Ce[n] = (Ce[n] || 0) + 1;
                        var r = n + "-" + ke("5.3.0" + n + Ce[n]);
                        return t ? t + "-" + r : r
                    }(t.displayName, t.parentComponentId) : l,
                    d = t.displayName,
                    h = void 0 === d ? function(e) {
                        return Se(e) ? "styled." + e : "Styled(" + b(e) + ")"
                    }(e) : d,
                    m = t.displayName && t.componentId ? we(t.displayName) + "-" + t.componentId : t.componentId || c,
                    k = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
                    S = t.shouldForwardProp;
                r && e.shouldForwardProp && (S = t.shouldForwardProp ? function(n, r, o) {
                    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o)
                } : e.shouldForwardProp);
                var M, x = new K(n, m, r ? e.componentStyle : void 0),
                    T = x.isStatic && 0 === s.length,
                    N = function(e, t) {
                        return function(e, t, n, r) {
                            var a = e.attrs,
                                i = e.componentStyle,
                                s = e.defaultProps,
                                l = e.foldedComponentIds,
                                c = e.shouldForwardProp,
                                d = e.styledComponentId,
                                f = e.target,
                                h = function(e, t, n) {
                                    void 0 === e && (e = v);
                                    var r = p({}, t, {
                                            theme: e
                                        }),
                                        o = {};
                                    return n.forEach((function(e) {
                                        var t, n, a, i = e;
                                        for (t in y(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], a = i[t], n && a ? n + " " + a : n || a) : i[t]
                                    })), [r, o]
                                }(ve(t, (0, o.useContext)(Oe), s) || v, t, a),
                                m = h[0],
                                g = h[1],
                                b = function(e, t, n, r) {
                                    var o = ae(),
                                        a = ie();
                                    return t ? e.generateAndInjectStyles(v, o, a) : e.generateAndInjectStyles(n, o, a)
                                }(i, r, m),
                                w = n,
                                k = g.$as || t.$as || g.as || t.as || f,
                                S = Se(k),
                                M = g !== t ? p({}, t, {}, g) : t,
                                x = {};
                            for (var T in M) "$" !== T[0] && "as" !== T && ("forwardedAs" === T ? x.as = M[T] : (c ? c(T, u, k) : !S || u(T)) && (x[T] = M[T]));
                            return t.style && g.style !== t.style && (x.style = p({}, t.style, {}, g.style)), x.className = Array.prototype.concat(l, d, b !== d ? b : null, t.className, g.className).filter(Boolean).join(" "), x.ref = w, (0, o.createElement)(k, x)
                        }(M, e, t, T)
                    };
                return N.displayName = h, (M = o.forwardRef(N)).attrs = k, M.componentStyle = x, M.displayName = h, M.shouldForwardProp = S, M.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : g, M.styledComponentId = m, M.target = r ? e.target : e, M.withComponent = function(e) {
                    var r = t.componentId,
                        o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(t, ["componentId"]),
                        a = r && r + "-" + (Se(e) ? e : we(b(e)));
                    return Ae(e, p({}, o, {
                        attrs: k,
                        componentId: a
                    }), n)
                }, Object.defineProperty(M, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps
                    },
                    set: function(t) {
                        this._foldedDefaultProps = r ? Ne({}, e.defaultProps, t) : t
                    }
                }), M.toString = function() {
                    return "." + M.styledComponentId
                }, a && f()(M, e, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }), M
            }
            var Ee = function(e) {
                return function e(t, n, o) {
                    if (void 0 === o && (o = v), !(0, r.isValidElementType)(n)) return x(1, String(n));
                    var a = function() {
                        return t(n, o, ge.apply(void 0, arguments))
                    };
                    return a.withConfig = function(r) {
                        return e(t, n, p({}, o, {}, r))
                    }, a.attrs = function(r) {
                        return e(t, n, p({}, o, {
                            attrs: Array.prototype.concat(o.attrs, r).filter(Boolean)
                        }))
                    }, a
                }(Ae, e)
            };
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
                Ee[e] = Ee(e)
            }));
            ! function() {
                function e(e, t) {
                    this.rules = e, this.componentId = t, this.isStatic = $(e), Y.registerId(this.componentId + 1)
                }
                var t = e.prototype;
                t.createStyles = function(e, t, n, r) {
                    var o = r(me(this.rules, t, n, r).join(""), ""),
                        a = this.componentId + e;
                    n.insertRules(a, a, o)
                }, t.removeStyles = function(e, t) {
                    t.clearRules(this.componentId + e)
                }, t.renderStyles = function(e, t, n, r) {
                    e > 2 && Y.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                }
            }();
            ! function() {
                function e() {
                    var e = this;
                    this._emitSheetCSS = function() {
                        var t = e.instance.toString(),
                            n = P();
                        return "<style " + [n && 'nonce="' + n + '"', k + '="true"', 'data-styled-version="5.3.0"'].filter(Boolean).join(" ") + ">" + t + "</style>"
                    }, this.getStyleTags = function() {
                        return e.sealed ? x(2) : e._emitSheetCSS()
                    }, this.getStyleElement = function() {
                        var t;
                        if (e.sealed) return x(2);
                        var n = ((t = {})[k] = "", t["data-styled-version"] = "5.3.0", t.dangerouslySetInnerHTML = {
                                __html: e.instance.toString()
                            }, t),
                            r = P();
                        return r && (n.nonce = r), [o.createElement("style", p({}, n, {
                            key: "sc-0-0"
                        }))]
                    }, this.seal = function() {
                        e.sealed = !0
                    }, this.instance = new Y({
                        isServer: !0
                    }), this.sealed = !1
                }
                var t = e.prototype;
                t.collectStyles = function(e) {
                    return this.sealed ? x(2) : o.createElement(se, {
                        sheet: this.instance
                    }, e)
                }, t.interleaveWithNodeStream = function(e) {
                    return x(3)
                }
            }();
            var De = Ee
        },
        26739: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ch: function() {
                    return c
                },
                $c: function() {
                    return l
                }
            });
            var r = n(22122),
                o = n(19756),
                a = n(67294);
            n(41143);

            function i(e) {
                return "default" + e.charAt(0).toUpperCase() + e.substr(1)
            }

            function s(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function l(e, t, n) {
                var r = (0, a.useRef)(void 0 !== e),
                    o = (0, a.useState)(t),
                    i = o[0],
                    s = o[1],
                    l = void 0 !== e,
                    c = r.current;
                return r.current = l, !l && c && i !== t && s(t), [l ? e : i, (0, a.useCallback)((function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    n && n.apply(void 0, [e].concat(r)), s(e)
                }), [n])]
            }

            function c(e, t) {
                return Object.keys(t).reduce((function(n, a) {
                    var c, u = n,
                        d = u[i(a)],
                        f = u[a],
                        p = (0, o.Z)(u, [i(a), a].map(s)),
                        h = t[a],
                        m = l(f, d, e[h]),
                        g = m[0],
                        v = m[1];
                    return (0, r.Z)({}, p, ((c = {})[a] = g, c[h] = v, c))
                }), e)
            }
            n(63639)
        },
        9351: function(e, t, n) {
            "use strict";
            var r = n(23004),
                o = !1,
                a = !1;
            try {
                var i = {
                    get passive() {
                        return o = !0
                    },
                    get once() {
                        return a = o = !0
                    }
                };
                r.Z && (window.addEventListener("test", i, i), window.removeEventListener("test", i, !0))
            } catch (s) {}
            t.ZP = function(e, t, n, r) {
                if (r && "boolean" != typeof r && !a) {
                    var i = r.once,
                        s = r.capture,
                        l = n;
                    !a && i && (l = n.__once || function e(r) {
                        this.removeEventListener(t, e, s), n.call(this, r)
                    }, n.__once = l), e.addEventListener(t, l, o ? r : s)
                }
                e.addEventListener(t, n, r)
            }
        },
        23004: function(e, t) {
            "use strict";
            t.Z = !("undefined" == typeof window || !window.document || !window.document.createElement)
        },
        90424: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        73164: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(67216);

            function o(e, t) {
                return function(e) {
                    var t = (0, r.Z)(e);
                    return t && t.defaultView || window
                }(e).getComputedStyle(e, t)
            }
            var a = /([A-Z])/g;
            var i = /^ms-/;

            function s(e) {
                return function(e) {
                    return e.replace(a, "-$1").toLowerCase()
                }(e).replace(i, "-ms-")
            }
            var l = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
            var c = function(e, t) {
                var n = "",
                    r = "";
                if ("string" == typeof t) return e.style.getPropertyValue(s(t)) || o(e).getPropertyValue(s(t));
                Object.keys(t).forEach((function(o) {
                    var a = t[o];
                    a || 0 === a ? ! function(e) {
                        return !(!e || !l.test(e))
                    }(o) ? n += s(o) + ": " + a + ";" : r += o + "(" + a + ") " : e.style.removeProperty(s(o))
                })), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n
            }
        },
        11132: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        72950: function(e, t, n) {
            "use strict";
            var r = n(9351),
                o = n(30099);
            t.Z = function(e, t, n, a) {
                return (0, r.ZP)(e, t, n, a),
                    function() {
                        (0, o.Z)(e, t, n, a)
                    }
            }
        },
        67216: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.ownerDocument || document
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        60930: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = Function.prototype.bind.call(Function.prototype.call, [].slice);

            function o(e, t) {
                return r(e.querySelectorAll(t))
            }
        },
        30099: function(e, t) {
            "use strict";
            t.Z = function(e, t, n, r) {
                var o = r && "boolean" != typeof r ? r.capture : r;
                e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o)
            }
        },
        86914: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(73164),
                o = n(72950);

            function a(e, t, n) {
                void 0 === n && (n = 5);
                var r = !1,
                    a = setTimeout((function() {
                        r || function(e, t, n, r) {
                            if (void 0 === n && (n = !1), void 0 === r && (r = !0), e) {
                                var o = document.createEvent("HTMLEvents");
                                o.initEvent(t, n, r), e.dispatchEvent(o)
                            }
                        }(e, "transitionend", !0)
                    }), t + n),
                    i = (0, o.Z)(e, "transitionend", (function() {
                        r = !0
                    }), {
                        once: !0
                    });
                return function() {
                    clearTimeout(a), i()
                }
            }

            function i(e, t, n, i) {
                var s, l, c;
                null == n && (s = e, l = (0, r.Z)(s, "transitionDuration") || "", c = -1 === l.indexOf("ms") ? 1e3 : 1, n = parseFloat(l) * c || 0);
                var u = a(e, n, i),
                    d = (0, o.Z)(e, "transitionend", t);
                return function() {
                    u(), d()
                }
            }
        },
        91545: function(e, t, n) {
            "use strict";
            var r = n(95318),
                o = n(20862);
            t.__esModule = !0;
            var a = {
                Link: !0,
                withIntl: !0,
                navigate: !0,
                changeLocale: !0,
                IntlContextProvider: !0,
                IntlContextConsumer: !0
            };
            t.IntlContextConsumer = t.IntlContextProvider = t.changeLocale = t.navigate = t.withIntl = t.Link = void 0;
            var i = n(52709);
            Object.keys(i).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || e in t && t[e] === i[e] || (t[e] = i[e]))
            }));
            var s = o(n(88062));
            t.Link = s.default, t.navigate = s.navigate, t.changeLocale = s.changeLocale;
            var l = r(n(78140));
            t.withIntl = l.default;
            var c = n(24599);
            t.IntlContextProvider = c.IntlContextProvider, t.IntlContextConsumer = c.IntlContextConsumer
        },
        88062: function(e, t, n) {
            "use strict";
            var r = n(95318);
            t.__esModule = !0, t.changeLocale = t.navigate = t.default = void 0;
            var o = r(n(67154)),
                a = r(n(37316)),
                i = r(n(67294)),
                s = r(n(45697)),
                l = n(25444),
                c = n(24599),
                u = n(5615),
                d = function(e) {
                    var t = e.to,
                        n = e.language,
                        r = e.children,
                        s = e.onClick,
                        d = (0, a.default)(e, ["to", "language", "children", "onClick"]);
                    return i.default.createElement(c.IntlContextConsumer, null, (function(e) {
                        var a = n || e.language,
                            c = (0, u.isMatch)(e.ignoredPaths, t),
                            f = !e.routed && !n || c ? "" + t : "/" + a + t;
                        return i.default.createElement(l.Link, (0, o.default)({}, d, {
                            to: f,
                            onClick: function(e) {
                                n && localStorage.setItem("gatsby-intl-language", n), s && s(e)
                            }
                        }), r)
                    }))
                };
            d.propTypes = {
                children: s.default.node.isRequired,
                to: s.default.string,
                language: s.default.string
            }, d.defaultProps = {
                to: ""
            };
            var f = d;
            t.default = f;
            t.navigate = function(e, t) {
                if ("undefined" != typeof window) {
                    var n = window.___gatsbyIntl,
                        r = n.language,
                        o = n.routed,
                        a = n.ignoredPaths,
                        i = (0, u.isMatch)(a, e),
                        s = o && !i ? "/" + r + e : "" + e;
                    (0, l.navigate)(s, t)
                }
            };
            t.changeLocale = function(e, t) {
                if ("undefined" != typeof window) {
                    var n = window.___gatsbyIntl,
                        r = n.routed,
                        o = n.redirectDefaultLanguageToRoot,
                        a = n.defaultLanguage,
                        i = n.ignoredPaths,
                        s = t || function(e) {
                            if (!r) return e;
                            var t = e.indexOf("/", 1);
                            return e.substring(t)
                        }(window.location.pathname),
                        c = (0, u.isMatch)(i, s),
                        d = "" + (o && a === e || c ? "" : "/" + e) + s + window.location.search;
                    localStorage.setItem("gatsby-intl-language", e), (0, l.navigate)(d)
                }
            }
        },
        78140: function(e, t, n) {
            "use strict";
            var r = n(95318);
            t.__esModule = !0, t.default = void 0;
            var o = r(n(67294)),
                a = n(52709);
            t.default = function(e) {
                return function(t) {
                    return console.warn("withIntl is deprecated. Please use injectIntl instead."), o.default.createElement((0, a.injectIntl)(e), t)
                }
            }
        },
        82345: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(65186),
                a = n(25444);
            t.Z = function(e) {
                var t = e.description,
                    n = void 0 === t ? "" : t,
                    i = e.lang,
                    s = void 0 === i ? "en" : i,
                    l = e.meta,
                    c = void 0 === l ? [] : l,
                    u = e.title,
                    d = e.addDefaultMeta,
                    f = void 0 === d || d,
                    p = e.socialshare,
                    h = void 0 === p ? "https://solana.com/sharing-card.png" : p,
                    m = e.addPaddingTop,
                    g = void 0 === m || m,
                    v = e.additionalBodyClassName,
                    y = (0, a.useStaticQuery)("1960007224").site,
                    b = n || y.siteMetadata.description,
                    w = y.siteMetadata.googleAnalytics.trackingId,
                    k = y.siteMetadata.googleAnalytics.adWordsId,
                    S = h;
                return r.createElement(o.Z, Object.assign({
                    htmlAttributes: {
                        lang: s
                    },
                    bodyAttributes: v || g ? {
                        class: v + (g ? " pt-10" : "")
                    } : {}
                }, f && {
                    title: u
                }, {
                    titleTemplate: "%s | " + y.siteMetadata.title,
                    meta: f ? [{
                        name: "description",
                        content: b
                    }, {
                        property: "og:title",
                        content: u
                    }, {
                        property: "og:description",
                        content: b
                    }, {
                        property: "og:image",
                        content: S
                    }, {
                        property: "og:type",
                        content: "website"
                    }, {
                        name: "twitter:card",
                        content: "summary"
                    }, {
                        name: "twitter:creator",
                        content: y.siteMetadata.author
                    }, {
                        name: "twitter:image",
                        content: S
                    }, {
                        name: "twitter:title",
                        content: u
                    }, {
                        name: "twitter:description",
                        content: b
                    }].concat(c) : c
                }), r.createElement("script", {
                    async: !0,
                    src: "https://www.googletagmanager.com/gtag/js?id=" + w
                }), r.createElement("script", {
                    async: !0,
                    defer: !0
                }, "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '" + w + "');\n          gtag('config', '" + k + "');\n        "), r.createElement("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                }), r.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                }), r.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                }), r.createElement("link", {
                    rel: "manifest",
                    href: "/site.webmanifest"
                }))
            }
        },
        93691: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return En
                }
            });
            var r = n(67294),
                o = n(91545),
                a = n(26927),
                i = n(7035),
                s = n(22122),
                l = n(19756),
                c = n(69931),
                u = n.n(c),
                d = n(26739),
                f = n(22665),
                p = n(99385),
                h = ["bsPrefix", "className", "as"],
                m = r.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        o = e.className,
                        a = e.as,
                        i = (0, l.Z)(e, h);
                    n = (0, p.vE)(n, "navbar-brand");
                    var c = a || (i.href ? "a" : "span");
                    return r.createElement(c, (0, s.Z)({}, i, {
                        ref: t,
                        className: u()(o, n)
                    }))
                }));
            m.displayName = "NavbarBrand";
            var g = m,
                v = n(39683),
                y = r.createContext(null);
            y.displayName = "NavbarContext";
            var b = y,
                w = ["children", "bsPrefix"],
                k = r.forwardRef((function(e, t) {
                    var n = e.children,
                        o = e.bsPrefix,
                        a = (0, l.Z)(e, w);
                    return o = (0, p.vE)(o, "navbar-collapse"), r.createElement(b.Consumer, null, (function(e) {
                        return r.createElement(v.Z, (0, s.Z)({ in: !(!e || !e.expanded)
                        }, a), r.createElement("div", {
                            ref: t,
                            className: o
                        }, n))
                    }))
                }));
            k.displayName = "NavbarCollapse";
            var S = k,
                M = n(33112),
                x = ["bsPrefix", "className", "children", "label", "as", "onClick"],
                T = r.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        o = e.className,
                        a = e.children,
                        i = e.label,
                        c = e.as,
                        d = void 0 === c ? "button" : c,
                        f = e.onClick,
                        h = (0, l.Z)(e, x);
                    n = (0, p.vE)(n, "navbar-toggler");
                    var m = (0, r.useContext)(b) || {},
                        g = m.onToggle,
                        v = m.expanded,
                        y = (0, M.Z)((function(e) {
                            f && f(e), g && g()
                        }));
                    return "button" === d && (h.type = "button"), r.createElement(d, (0, s.Z)({}, h, {
                        ref: t,
                        onClick: y,
                        "aria-label": i,
                        className: u()(o, n, !v && "collapsed")
                    }), a || r.createElement("span", {
                        className: n + "-icon"
                    }))
                }));
            T.displayName = "NavbarToggle", T.defaultProps = {
                label: "Toggle navigation"
            };
            var N = T,
                O = n(93342),
                C = ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"],
                A = (0, f.Z)("navbar-text", {
                    Component: "span"
                }),
                E = r.forwardRef((function(e, t) {
                    var n = (0, d.Ch)(e, {
                            expanded: "onToggle"
                        }),
                        o = n.bsPrefix,
                        a = n.expand,
                        i = n.variant,
                        c = n.bg,
                        f = n.fixed,
                        h = n.sticky,
                        m = n.className,
                        g = n.children,
                        v = n.as,
                        y = void 0 === v ? "nav" : v,
                        w = n.expanded,
                        k = n.onToggle,
                        S = n.onSelect,
                        M = n.collapseOnSelect,
                        x = (0, l.Z)(n, C),
                        T = (0, p.vE)(o, "navbar"),
                        N = (0, r.useCallback)((function() {
                            S && S.apply(void 0, arguments), M && w && k && k(!1)
                        }), [S, M, w, k]);
                    void 0 === x.role && "nav" !== y && (x.role = "navigation");
                    var A = T + "-expand";
                    "string" == typeof a && (A = A + "-" + a);
                    var E = (0, r.useMemo)((function() {
                        return {
                            onToggle: function() {
                                return k && k(!w)
                            },
                            bsPrefix: T,
                            expanded: !!w
                        }
                    }), [T, w, k]);
                    return r.createElement(b.Provider, {
                        value: E
                    }, r.createElement(O.Z.Provider, {
                        value: N
                    }, r.createElement(y, (0, s.Z)({
                        ref: t
                    }, x, {
                        className: u()(m, T, a && A, i && T + "-" + i, c && "bg-" + c, h && "sticky-" + h, f && "fixed-" + f)
                    }), g)))
                }));
            E.defaultProps = {
                expand: !0,
                variant: "light",
                collapseOnSelect: !1
            }, E.displayName = "Navbar", E.Brand = g, E.Toggle = N, E.Collapse = S, E.Text = A;
            var D, j = E;
            var I = n(60930),
                L = n(9351),
                z = n(34436);

            function P(e, t, n) {
                return void 0 === n && (n = !1),
                    function(e, t, n, o) {
                        void 0 === o && (o = !1);
                        var a = (0, M.Z)(n);
                        (0, r.useEffect)((function() {
                            var n = "function" == typeof e ? e() : e;
                            return n.addEventListener(t, a, o),
                                function() {
                                    return n.removeEventListener(t, a, o)
                                }
                        }), [e])
                    }((0, r.useCallback)((function() {
                        return document
                    }), []), e, t, n)
            }
            var R = r.createContext(null),
                Z = n(92460),
                B = n(83252);
            var _ = function(e) {
                var t = (0, B.Z)();
                return [e[0], (0, r.useCallback)((function(n) {
                    if (t()) return e[1](n)
                }), [t, e[1]])]
            };

            function U(e) {
                return e.split("-")[0]
            }

            function F(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function Y(e) {
                return e instanceof F(e).Element || e instanceof Element
            }

            function W(e) {
                return e instanceof F(e).HTMLElement || e instanceof HTMLElement
            }

            function Q(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof F(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var V = Math.round;

            function G(e, t) {
                void 0 === t && (t = !1);
                var n = e.getBoundingClientRect(),
                    r = 1,
                    o = 1;
                return W(e) && t && (r = n.width / e.offsetWidth || 1, o = n.height / e.offsetHeight || 1), {
                    width: V(n.width / r),
                    height: V(n.height / o),
                    top: V(n.top / o),
                    right: V(n.right / r),
                    bottom: V(n.bottom / o),
                    left: V(n.left / r),
                    x: V(n.left / r),
                    y: V(n.top / o)
                }
            }

            function H(e) {
                var t = G(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function $(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && Q(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function q(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function K(e) {
                return F(e).getComputedStyle(e)
            }

            function J(e) {
                return ["table", "td", "th"].indexOf(q(e)) >= 0
            }

            function X(e) {
                return ((Y(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function ee(e) {
                return "html" === q(e) ? e : e.assignedSlot || e.parentNode || (Q(e) ? e.host : null) || X(e)
            }

            function te(e) {
                return W(e) && "fixed" !== K(e).position ? e.offsetParent : null
            }

            function ne(e) {
                for (var t = F(e), n = te(e); n && J(n) && "static" === K(n).position;) n = te(n);
                return n && ("html" === q(n) || "body" === q(n) && "static" === K(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && W(e) && "fixed" === K(e).position) return null;
                    for (var n = ee(e); W(n) && ["html", "body"].indexOf(q(n)) < 0;) {
                        var r = K(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }

            function re(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }
            var oe = Math.max,
                ae = Math.min,
                ie = Math.round;

            function se(e, t, n) {
                return oe(e, ae(t, n))
            }

            function le(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ce(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }
            var ue = "top",
                de = "bottom",
                fe = "right",
                pe = "left",
                he = "auto",
                me = [ue, de, fe, pe],
                ge = "start",
                ve = "end",
                ye = "viewport",
                be = "popper",
                we = me.reduce((function(e, t) {
                    return e.concat([t + "-" + ge, t + "-" + ve])
                }), []),
                ke = [].concat(me, [he]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + ge, t + "-" + ve])
                }), []),
                Se = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
            var Me = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function xe(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.offsets,
                    i = e.position,
                    s = e.gpuAcceleration,
                    l = e.adaptive,
                    c = e.roundOffsets,
                    u = !0 === c ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: ie(ie(t * r) / r) || 0,
                            y: ie(ie(n * r) / r) || 0
                        }
                    }(a) : "function" == typeof c ? c(a) : a,
                    d = u.x,
                    f = void 0 === d ? 0 : d,
                    p = u.y,
                    h = void 0 === p ? 0 : p,
                    m = a.hasOwnProperty("x"),
                    g = a.hasOwnProperty("y"),
                    v = pe,
                    y = ue,
                    b = window;
                if (l) {
                    var w = ne(n),
                        k = "clientHeight",
                        S = "clientWidth";
                    w === F(n) && "static" !== K(w = X(n)).position && (k = "scrollHeight", S = "scrollWidth"), w = w, o === ue && (y = de, h -= w[k] - r.height, h *= s ? 1 : -1), o === pe && (v = fe, f -= w[S] - r.width, f *= s ? 1 : -1)
                }
                var M, x = Object.assign({
                    position: i
                }, l && Me);
                return s ? Object.assign({}, x, ((M = {})[y] = g ? "0" : "", M[v] = m ? "0" : "", M.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + h + "px)" : "translate3d(" + f + "px, " + h + "px, 0)", M)) : Object.assign({}, x, ((t = {})[y] = g ? h + "px" : "", t[v] = m ? f + "px" : "", t.transform = "", t))
            }
            var Te = {
                passive: !0
            };
            var Ne = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Oe(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Ne[e]
                }))
            }
            var Ce = {
                start: "end",
                end: "start"
            };

            function Ae(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Ce[e]
                }))
            }

            function Ee(e) {
                var t = F(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function De(e) {
                return G(X(e)).left + Ee(e).scrollLeft
            }

            function je(e) {
                var t = K(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function Ie(e) {
                return ["html", "body", "#document"].indexOf(q(e)) >= 0 ? e.ownerDocument.body : W(e) && je(e) ? e : Ie(ee(e))
            }

            function Le(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = Ie(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = F(r),
                    i = o ? [a].concat(a.visualViewport || [], je(r) ? r : []) : r,
                    s = t.concat(i);
                return o ? s : s.concat(Le(ee(i)))
            }

            function ze(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Pe(e, t) {
                return t === ye ? ze(function(e) {
                    var t = F(e),
                        n = X(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        a = n.clientHeight,
                        i = 0,
                        s = 0;
                    return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), {
                        width: o,
                        height: a,
                        x: i + De(e),
                        y: s
                    }
                }(e)) : W(t) ? function(e) {
                    var t = G(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : ze(function(e) {
                    var t, n = X(e),
                        r = Ee(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        a = oe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        i = oe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        s = -r.scrollLeft + De(e),
                        l = -r.scrollTop;
                    return "rtl" === K(o || n).direction && (s += oe(n.clientWidth, o ? o.clientWidth : 0) - a), {
                        width: a,
                        height: i,
                        x: s,
                        y: l
                    }
                }(X(e)))
            }

            function Re(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = Le(ee(e)),
                            n = ["absolute", "fixed"].indexOf(K(e).position) >= 0 && W(e) ? ne(e) : e;
                        return Y(n) ? t.filter((function(e) {
                            return Y(e) && $(e, n) && "body" !== q(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(r, [n]),
                    a = o[0],
                    i = o.reduce((function(t, n) {
                        var r = Pe(e, n);
                        return t.top = oe(r.top, t.top), t.right = ae(r.right, t.right), t.bottom = ae(r.bottom, t.bottom), t.left = oe(r.left, t.left), t
                    }), Pe(e, a));
                return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
            }

            function Ze(e) {
                return e.split("-")[1]
            }

            function Be(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    a = o ? U(o) : null,
                    i = o ? Ze(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    l = n.y + n.height / 2 - r.height / 2;
                switch (a) {
                    case ue:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case de:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case fe:
                        t = {
                            x: n.x + n.width,
                            y: l
                        };
                        break;
                    case pe:
                        t = {
                            x: n.x - r.width,
                            y: l
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = a ? re(a) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (i) {
                        case ge:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case ve:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }

            function _e(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    a = n.boundary,
                    i = void 0 === a ? "clippingParents" : a,
                    s = n.rootBoundary,
                    l = void 0 === s ? ye : s,
                    c = n.elementContext,
                    u = void 0 === c ? be : c,
                    d = n.altBoundary,
                    f = void 0 !== d && d,
                    p = n.padding,
                    h = void 0 === p ? 0 : p,
                    m = le("number" != typeof h ? h : ce(h, me)),
                    g = u === be ? "reference" : be,
                    v = e.elements.reference,
                    y = e.rects.popper,
                    b = e.elements[f ? g : u],
                    w = Re(Y(b) ? b : b.contextElement || X(e.elements.popper), i, l),
                    k = G(v),
                    S = Be({
                        reference: k,
                        element: y,
                        strategy: "absolute",
                        placement: o
                    }),
                    M = ze(Object.assign({}, y, S)),
                    x = u === be ? M : k,
                    T = {
                        top: w.top - x.top + m.top,
                        bottom: x.bottom - w.bottom + m.bottom,
                        left: w.left - x.left + m.left,
                        right: x.right - w.right + m.right
                    },
                    N = e.modifiersData.offset;
                if (u === be && N) {
                    var O = N[o];
                    Object.keys(T).forEach((function(e) {
                        var t = [fe, de].indexOf(e) >= 0 ? 1 : -1,
                            n = [ue, de].indexOf(e) >= 0 ? "y" : "x";
                        T[e] += O[n] * t
                    }))
                }
                return T
            }

            function Ue(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function Fe(e) {
                return [ue, fe, de, pe].some((function(t) {
                    return e[t] >= 0
                }))
            }

            function Ye(e, t, n) {
                void 0 === n && (n = !1);
                var r, o, a = W(t),
                    i = W(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.width / e.offsetWidth || 1,
                            r = t.height / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    s = X(t),
                    l = G(e, i),
                    c = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    u = {
                        x: 0,
                        y: 0
                    };
                return (a || !a && !n) && (("body" !== q(t) || je(s)) && (c = (r = t) !== F(r) && W(r) ? {
                    scrollLeft: (o = r).scrollLeft,
                    scrollTop: o.scrollTop
                } : Ee(r)), W(t) ? ((u = G(t, !0)).x += t.clientLeft, u.y += t.clientTop) : s && (u.x = De(s))), {
                    x: l.left + c.scrollLeft - u.x,
                    y: l.top + c.scrollTop - u.y,
                    width: l.width,
                    height: l.height
                }
            }

            function We(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }
            var Qe = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function Ve() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                }))
            }

            function Ge(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    a = void 0 === o ? Qe : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o, i, s = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Qe, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        l = [],
                        c = !1,
                        u = {
                            state: s,
                            setOptions: function(n) {
                                d(), s.options = Object.assign({}, a, s.options, n), s.scrollParents = {
                                    reference: Y(e) ? Le(e) : e.contextElement ? Le(e.contextElement) : [],
                                    popper: Le(t)
                                };
                                var o = function(e) {
                                    var t = We(e);
                                    return Se.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, s.options.modifiers)));
                                return s.orderedModifiers = o.filter((function(e) {
                                    return e.enabled
                                })), s.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" == typeof o) {
                                        var a = o({
                                                state: s,
                                                name: t,
                                                instance: u,
                                                options: r
                                            }),
                                            i = function() {};
                                        l.push(a || i)
                                    }
                                })), u.update()
                            },
                            forceUpdate: function() {
                                if (!c) {
                                    var e = s.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (Ve(t, n)) {
                                        s.rects = {
                                            reference: Ye(t, ne(n), "fixed" === s.options.strategy),
                                            popper: H(n)
                                        }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                                            return s.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < s.orderedModifiers.length; r++)
                                            if (!0 !== s.reset) {
                                                var o = s.orderedModifiers[r],
                                                    a = o.fn,
                                                    i = o.options,
                                                    l = void 0 === i ? {} : i,
                                                    d = o.name;
                                                "function" == typeof a && (s = a({
                                                    state: s,
                                                    options: l,
                                                    name: d,
                                                    instance: u
                                                }) || s)
                                            } else s.reset = !1, r = -1
                                    }
                                }
                            },
                            update: (o = function() {
                                return new Promise((function(e) {
                                    u.forceUpdate(), e(s)
                                }))
                            }, function() {
                                return i || (i = new Promise((function(e) {
                                    Promise.resolve().then((function() {
                                        i = void 0, e(o())
                                    }))
                                }))), i
                            }),
                            destroy: function() {
                                d(), c = !0
                            }
                        };
                    if (!Ve(e, t)) return u;

                    function d() {
                        l.forEach((function(e) {
                            return e()
                        })), l = []
                    }
                    return u.setOptions(n).then((function(e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), u
                }
            }
            var He = Ge({
                    defaultModifiers: [{
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                a = t.modifiersData.preventOverflow,
                                i = _e(t, {
                                    elementContext: "reference"
                                }),
                                s = _e(t, {
                                    altBoundary: !0
                                }),
                                l = Ue(i, r),
                                c = Ue(s, o, a),
                                u = Fe(l),
                                d = Fe(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: d
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": d
                            })
                        }
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = Be({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                a = n.adaptive,
                                i = void 0 === a || a,
                                s = n.roundOffsets,
                                l = void 0 === s || s,
                                c = {
                                    placement: U(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, xe(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: l
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, xe(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                o = r.scroll,
                                a = void 0 === o || o,
                                i = r.resize,
                                s = void 0 === i || i,
                                l = F(t.elements.popper),
                                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && c.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, Te)
                                })), s && l.addEventListener("resize", n.update, Te),
                                function() {
                                    a && c.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, Te)
                                    })), s && l.removeEventListener("resize", n.update, Te)
                                }
                        },
                        data: {}
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                a = void 0 === o ? [0, 0] : o,
                                i = ke.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = U(e),
                                            o = [pe, ue].indexOf(r) >= 0 ? -1 : 1,
                                            a = "function" == typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            i = a[0],
                                            s = a[1];
                                        return i = i || 0, s = (s || 0) * o, [pe, fe].indexOf(r) >= 0 ? {
                                            x: s,
                                            y: i
                                        } : {
                                            x: i,
                                            y: s
                                        }
                                    }(n, t.rects, a), e
                                }), {}),
                                s = i[t.placement],
                                l = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, s = void 0 === i || i, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, m = n.allowedAutoPlacements, g = t.options.placement, v = U(g), y = l || (v === g || !h ? [Oe(g)] : function(e) {
                                        if (U(e) === he) return [];
                                        var t = Oe(e);
                                        return [Ae(e), t, Ae(t)]
                                    }(g)), b = [g].concat(y).reduce((function(e, n) {
                                        return e.concat(U(n) === he ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                a = n.rootBoundary,
                                                i = n.padding,
                                                s = n.flipVariations,
                                                l = n.allowedAutoPlacements,
                                                c = void 0 === l ? ke : l,
                                                u = Ze(r),
                                                d = u ? s ? we : we.filter((function(e) {
                                                    return Ze(e) === u
                                                })) : me,
                                                f = d.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === f.length && (f = d);
                                            var p = f.reduce((function(t, n) {
                                                return t[n] = _e(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: a,
                                                    padding: i
                                                })[U(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: d,
                                            padding: c,
                                            flipVariations: h,
                                            allowedAutoPlacements: m
                                        }) : n)
                                    }), []), w = t.rects.reference, k = t.rects.popper, S = new Map, M = !0, x = b[0], T = 0; T < b.length; T++) {
                                    var N = b[T],
                                        O = U(N),
                                        C = Ze(N) === ge,
                                        A = [ue, de].indexOf(O) >= 0,
                                        E = A ? "width" : "height",
                                        D = _e(t, {
                                            placement: N,
                                            boundary: u,
                                            rootBoundary: d,
                                            altBoundary: f,
                                            padding: c
                                        }),
                                        j = A ? C ? fe : pe : C ? de : ue;
                                    w[E] > k[E] && (j = Oe(j));
                                    var I = Oe(j),
                                        L = [];
                                    if (a && L.push(D[O] <= 0), s && L.push(D[j] <= 0, D[I] <= 0), L.every((function(e) {
                                            return e
                                        }))) {
                                        x = N, M = !1;
                                        break
                                    }
                                    S.set(N, L)
                                }
                                if (M)
                                    for (var z = function(e) {
                                            var t = b.find((function(t) {
                                                var n = S.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return x = t, "break"
                                        }, P = h ? 3 : 1; P > 0; P--) {
                                        if ("break" === z(P)) break
                                    }
                                t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                a = void 0 === o || o,
                                i = n.altAxis,
                                s = void 0 !== i && i,
                                l = n.boundary,
                                c = n.rootBoundary,
                                u = n.altBoundary,
                                d = n.padding,
                                f = n.tether,
                                p = void 0 === f || f,
                                h = n.tetherOffset,
                                m = void 0 === h ? 0 : h,
                                g = _e(t, {
                                    boundary: l,
                                    rootBoundary: c,
                                    padding: d,
                                    altBoundary: u
                                }),
                                v = U(t.placement),
                                y = Ze(t.placement),
                                b = !y,
                                w = re(v),
                                k = "x" === w ? "y" : "x",
                                S = t.modifiersData.popperOffsets,
                                M = t.rects.reference,
                                x = t.rects.popper,
                                T = "function" == typeof m ? m(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : m,
                                N = {
                                    x: 0,
                                    y: 0
                                };
                            if (S) {
                                if (a || s) {
                                    var O = "y" === w ? ue : pe,
                                        C = "y" === w ? de : fe,
                                        A = "y" === w ? "height" : "width",
                                        E = S[w],
                                        D = S[w] + g[O],
                                        j = S[w] - g[C],
                                        I = p ? -x[A] / 2 : 0,
                                        L = y === ge ? M[A] : x[A],
                                        z = y === ge ? -x[A] : -M[A],
                                        P = t.elements.arrow,
                                        R = p && P ? H(P) : {
                                            width: 0,
                                            height: 0
                                        },
                                        Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        B = Z[O],
                                        _ = Z[C],
                                        F = se(0, M[A], R[A]),
                                        Y = b ? M[A] / 2 - I - F - B - T : L - F - B - T,
                                        W = b ? -M[A] / 2 + I + F + _ + T : z + F + _ + T,
                                        Q = t.elements.arrow && ne(t.elements.arrow),
                                        V = Q ? "y" === w ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                                        G = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0,
                                        $ = S[w] + Y - G - V,
                                        q = S[w] + W - G;
                                    if (a) {
                                        var K = se(p ? ae(D, $) : D, E, p ? oe(j, q) : j);
                                        S[w] = K, N[w] = K - E
                                    }
                                    if (s) {
                                        var J = "x" === w ? ue : pe,
                                            X = "x" === w ? de : fe,
                                            ee = S[k],
                                            te = ee + g[J],
                                            ie = ee - g[X],
                                            le = se(p ? ae(te, $) : te, ee, p ? oe(ie, q) : ie);
                                        S[k] = le, N[k] = le - ee
                                    }
                                }
                                t.modifiersData[r] = N
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = e.options,
                                a = n.elements.arrow,
                                i = n.modifiersData.popperOffsets,
                                s = U(n.placement),
                                l = re(s),
                                c = [pe, fe].indexOf(s) >= 0 ? "height" : "width";
                            if (a && i) {
                                var u = function(e, t) {
                                        return le("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                            placement: t.placement
                                        })) : e) ? e : ce(e, me))
                                    }(o.padding, n),
                                    d = H(a),
                                    f = "y" === l ? ue : pe,
                                    p = "y" === l ? de : fe,
                                    h = n.rects.reference[c] + n.rects.reference[l] - i[l] - n.rects.popper[c],
                                    m = i[l] - n.rects.reference[l],
                                    g = ne(a),
                                    v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                                    y = h / 2 - m / 2,
                                    b = u[f],
                                    w = v - d[c] - u[p],
                                    k = v / 2 - d[c] / 2 + y,
                                    S = se(b, k, w),
                                    M = l;
                                n.modifiersData[r] = ((t = {})[M] = S, t.centerOffset = S - k, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && $(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }]
                }),
                $e = function(e) {
                    return {
                        position: e,
                        top: "0",
                        left: "0",
                        opacity: "0",
                        pointerEvents: "none"
                    }
                },
                qe = {
                    name: "applyStyles",
                    enabled: !1
                },
                Ke = {
                    name: "ariaDescribedBy",
                    enabled: !0,
                    phase: "afterWrite",
                    effect: function(e) {
                        var t = e.state;
                        return function() {
                            var e = t.elements,
                                n = e.reference,
                                r = e.popper;
                            if ("removeAttribute" in n) {
                                var o = (n.getAttribute("aria-describedby") || "").split(",").filter((function(e) {
                                    return e.trim() !== r.id
                                }));
                                o.length ? n.setAttribute("aria-describedby", o.join(",")) : n.removeAttribute("aria-describedby")
                            }
                        }
                    },
                    fn: function(e) {
                        var t, n = e.state.elements,
                            r = n.popper,
                            o = n.reference,
                            a = null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
                        if (r.id && "tooltip" === a && "setAttribute" in o) {
                            var i = o.getAttribute("aria-describedby");
                            if (i && -1 !== i.split(",").indexOf(r.id)) return;
                            o.setAttribute("aria-describedby", i ? i + "," + r.id : r.id)
                        }
                    }
                },
                Je = [];
            var Xe = function(e, t, n) {
                    var o = void 0 === n ? {} : n,
                        a = o.enabled,
                        i = void 0 === a || a,
                        c = o.placement,
                        u = void 0 === c ? "bottom" : c,
                        d = o.strategy,
                        f = void 0 === d ? "absolute" : d,
                        p = o.modifiers,
                        h = void 0 === p ? Je : p,
                        m = (0, l.Z)(o, ["enabled", "placement", "strategy", "modifiers"]),
                        g = (0, r.useRef)(),
                        v = (0, r.useCallback)((function() {
                            var e;
                            null == (e = g.current) || e.update()
                        }), []),
                        y = (0, r.useCallback)((function() {
                            var e;
                            null == (e = g.current) || e.forceUpdate()
                        }), []),
                        b = _((0, r.useState)({
                            placement: u,
                            update: v,
                            forceUpdate: y,
                            attributes: {},
                            styles: {
                                popper: $e(f),
                                arrow: {}
                            }
                        })),
                        w = b[0],
                        k = b[1],
                        S = (0, r.useMemo)((function() {
                            return {
                                name: "updateStateModifier",
                                enabled: !0,
                                phase: "write",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state,
                                        n = {},
                                        r = {};
                                    Object.keys(t.elements).forEach((function(e) {
                                        n[e] = t.styles[e], r[e] = t.attributes[e]
                                    })), k({
                                        state: t,
                                        styles: n,
                                        attributes: r,
                                        update: v,
                                        forceUpdate: y,
                                        placement: t.placement
                                    })
                                }
                            }
                        }), [v, y, k]);
                    return (0, r.useEffect)((function() {
                        g.current && i && g.current.setOptions({
                            placement: u,
                            strategy: f,
                            modifiers: [].concat(h, [S, qe])
                        })
                    }), [f, u, S, i]), (0, r.useEffect)((function() {
                        if (i && null != e && null != t) return g.current = He(e, t, (0, s.Z)({}, m, {
                                placement: u,
                                strategy: f,
                                modifiers: [].concat(h, [Ke, S])
                            })),
                            function() {
                                null != g.current && (g.current.destroy(), g.current = void 0, k((function(e) {
                                    return (0, s.Z)({}, e, {
                                        attributes: {},
                                        styles: {
                                            popper: $e(f)
                                        }
                                    })
                                })))
                            }
                    }), [i, e, t]), w
                },
                et = n(90424),
                tt = n(72950),
                nt = n(42473),
                rt = n.n(nt),
                ot = n(67216),
                at = n(73935);
            var it = function(e) {
                    return (0, ot.Z)(function(e) {
                        return e && "setState" in e ? at.findDOMNode(e) : null != e ? e : null
                    }(e))
                },
                st = function() {};
            var lt = function(e) {
                return e && ("current" in e ? e.current : e)
            };
            var ct = function(e, t, n) {
                var o = void 0 === n ? {} : n,
                    a = o.disabled,
                    i = o.clickTrigger,
                    s = void 0 === i ? "click" : i,
                    l = (0, r.useRef)(!1),
                    c = t || st,
                    u = (0, r.useCallback)((function(t) {
                        var n, r = lt(e);
                        rt()(!!r, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), l.current = !(r && (n = t, !(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)) && function(e) {
                            return 0 === e.button
                        }(t) && !(0, et.Z)(r, t.target))
                    }), [e]),
                    d = (0, M.Z)((function(e) {
                        l.current || c(e)
                    })),
                    f = (0, M.Z)((function(e) {
                        27 === e.keyCode && c(e)
                    }));
                (0, r.useEffect)((function() {
                    if (!a && null != e) {
                        var t = window.event,
                            n = it(lt(e)),
                            r = (0, tt.Z)(n, s, u, !0),
                            o = (0, tt.Z)(n, s, (function(e) {
                                e !== t ? d(e) : t = void 0
                            })),
                            i = (0, tt.Z)(n, "keyup", (function(e) {
                                e !== t ? f(e) : t = void 0
                            })),
                            l = [];
                        return "ontouchstart" in n.documentElement && (l = [].slice.call(n.body.children).map((function(e) {
                                return (0, tt.Z)(e, "mousemove", st)
                            }))),
                            function() {
                                r(), o(), i(), l.forEach((function(e) {
                                    return e()
                                }))
                            }
                    }
                }), [e, a, s, u, d, f])
            };

            function ut(e) {
                var t, n, r, o, a, i = e.enabled,
                    l = e.enableEvents,
                    c = e.placement,
                    u = e.flip,
                    d = e.offset,
                    f = e.fixed,
                    p = e.containerPadding,
                    h = e.arrowElement,
                    m = e.popperConfig,
                    g = void 0 === m ? {} : m,
                    v = function(e) {
                        var t = {};
                        return Array.isArray(e) ? (null == e || e.forEach((function(e) {
                            t[e.name] = e
                        })), t) : e || t
                    }(g.modifiers);
                return (0, s.Z)({}, g, {
                    placement: c,
                    enabled: i,
                    strategy: f ? "fixed" : g.strategy,
                    modifiers: (a = (0, s.Z)({}, v, {
                        eventListeners: {
                            enabled: l
                        },
                        preventOverflow: (0, s.Z)({}, v.preventOverflow, {
                            options: p ? (0, s.Z)({
                                padding: p
                            }, null == (t = v.preventOverflow) ? void 0 : t.options) : null == (n = v.preventOverflow) ? void 0 : n.options
                        }),
                        offset: {
                            options: (0, s.Z)({
                                offset: d
                            }, null == (r = v.offset) ? void 0 : r.options)
                        },
                        arrow: (0, s.Z)({}, v.arrow, {
                            enabled: !!h,
                            options: (0, s.Z)({}, null == (o = v.arrow) ? void 0 : o.options, {
                                element: h
                            })
                        }),
                        flip: (0, s.Z)({
                            enabled: !!u
                        }, v.flip)
                    }), void 0 === a && (a = {}), Array.isArray(a) ? a : Object.keys(a).map((function(e) {
                        return a[e].name = e, a[e]
                    })))
                })
            }
            var dt = function() {};

            function ft(e) {
                void 0 === e && (e = {});
                var t = (0, r.useContext)(R),
                    n = (0, Z.Z)(),
                    o = n[0],
                    a = n[1],
                    i = (0, r.useRef)(!1),
                    l = e,
                    c = l.flip,
                    u = l.offset,
                    d = l.rootCloseEvent,
                    f = l.fixed,
                    p = void 0 !== f && f,
                    h = l.popperConfig,
                    m = void 0 === h ? {} : h,
                    g = l.usePopper,
                    v = void 0 === g ? !!t : g,
                    y = null == (null == t ? void 0 : t.show) ? !!e.show : t.show,
                    b = null == (null == t ? void 0 : t.alignEnd) ? e.alignEnd : t.alignEnd;
                y && !i.current && (i.current = !0);
                var w = t || {},
                    k = w.drop,
                    S = w.setMenu,
                    M = w.menuElement,
                    x = w.toggleElement,
                    T = b ? "bottom-end" : "bottom-start";
                "up" === k ? T = b ? "top-end" : "top-start" : "right" === k ? T = b ? "right-end" : "right-start" : "left" === k && (T = b ? "left-end" : "left-start");
                var N = Xe(x, M, ut({
                        placement: T,
                        enabled: !(!v || !y),
                        enableEvents: y,
                        offset: u,
                        flip: c,
                        fixed: p,
                        arrowElement: o,
                        popperConfig: m
                    })),
                    O = (0, s.Z)({
                        ref: S || dt,
                        "aria-labelledby": null == x ? void 0 : x.id
                    }, N.attributes.popper, {
                        style: N.styles.popper
                    }),
                    C = {
                        show: y,
                        alignEnd: b,
                        hasShown: i.current,
                        toggle: null == t ? void 0 : t.toggle,
                        popper: v ? N : null,
                        arrowProps: v ? (0, s.Z)({
                            ref: a
                        }, N.attributes.arrow, {
                            style: N.styles.arrow
                        }) : {}
                    };
                return ct(M, (function(e) {
                    null == t || t.toggle(!1, e)
                }), {
                    clickTrigger: d,
                    disabled: !y
                }), [O, C]
            }

            function pt(e) {
                var t = e.children,
                    n = ft((0, l.Z)(e, ["children"])),
                    o = n[0],
                    a = n[1];
                return r.createElement(r.Fragment, null, a.hasShown ? t(o, a) : null)
            }
            pt.displayName = "ReactOverlaysDropdownMenu", pt.defaultProps = {
                usePopper: !0
            };
            var ht = pt,
                mt = function() {};

            function gt() {
                var e = (0, r.useContext)(R) || {},
                    t = e.show,
                    n = void 0 !== t && t,
                    o = e.toggle,
                    a = void 0 === o ? mt : o,
                    i = e.setToggle,
                    s = (0, r.useCallback)((function(e) {
                        a(!n, e)
                    }), [n, a]);
                return [{
                    ref: i || mt,
                    onClick: s,
                    "aria-haspopup": !0,
                    "aria-expanded": !!n
                }, {
                    show: n,
                    toggle: a
                }]
            }

            function vt(e) {
                var t = e.children,
                    n = gt(),
                    o = n[0],
                    a = n[1];
                return r.createElement(r.Fragment, null, t(o, a))
            }
            vt.displayName = "ReactOverlaysDropdownToggle";
            var yt = vt;

            function bt() {
                var e = (0, r.useReducer)((function(e) {
                        return !e
                    }), !1)[1],
                    t = (0, r.useRef)(null),
                    n = (0, r.useCallback)((function(n) {
                        t.current = n, e()
                    }), [e]);
                return [t, n]
            }

            function wt(e) {
                var t = e.drop,
                    n = e.alignEnd,
                    o = e.defaultShow,
                    a = e.show,
                    i = e.onToggle,
                    s = e.itemSelector,
                    l = void 0 === s ? "* > *" : s,
                    c = e.focusFirstItemOnShow,
                    u = e.children,
                    f = (0, d.$c)(a, o, i),
                    p = f[0],
                    h = f[1],
                    m = bt(),
                    g = m[0],
                    v = m[1],
                    y = g.current,
                    b = bt(),
                    w = b[0],
                    k = b[1],
                    S = w.current,
                    x = (0, z.Z)(p),
                    T = (0, r.useRef)(null),
                    N = (0, r.useRef)(!1),
                    O = (0, r.useCallback)((function(e, t) {
                        h(e, t)
                    }), [h]),
                    C = (0, r.useMemo)((function() {
                        return {
                            toggle: O,
                            drop: t,
                            show: p,
                            alignEnd: n,
                            menuElement: y,
                            toggleElement: S,
                            setMenu: v,
                            setToggle: k
                        }
                    }), [O, t, p, n, y, S, v, k]);
                y && x && !p && (N.current = y.contains(document.activeElement));
                var A = (0, M.Z)((function() {
                        S && S.focus && S.focus()
                    })),
                    E = (0, M.Z)((function() {
                        var e = T.current,
                            t = c;
                        if (null == t && (t = !(!g.current || ! function(e, t) {
                                if (!D) {
                                    var n = document.body,
                                        r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
                                    D = function(e, t) {
                                        return r.call(e, t)
                                    }
                                }
                                return D(e, t)
                            }(g.current, "[role=menu]")) && "keyboard"), !1 !== t && ("keyboard" !== t || /^key.+$/.test(e))) {
                            var n = (0, I.Z)(g.current, l)[0];
                            n && n.focus && n.focus()
                        }
                    }));
                (0, r.useEffect)((function() {
                    p ? E() : N.current && (N.current = !1, A())
                }), [p, N, A, E]), (0, r.useEffect)((function() {
                    T.current = null
                }));
                var j = function(e, t) {
                    if (!g.current) return null;
                    var n = (0, I.Z)(g.current, l),
                        r = n.indexOf(e) + t;
                    return n[r = Math.max(0, Math.min(r, n.length))]
                };
                return P("keydown", (function(e) {
                    var t, n, r = e.key,
                        o = e.target,
                        a = null == (t = g.current) ? void 0 : t.contains(o),
                        i = null == (n = w.current) ? void 0 : n.contains(o);
                    if ((!/input|textarea/i.test(o.tagName) || !(" " === r || "Escape" !== r && a)) && (a || i) && (g.current || "Tab" !== r)) switch (T.current = e.type, r) {
                        case "ArrowUp":
                            var s = j(o, -1);
                            return s && s.focus && s.focus(), void e.preventDefault();
                        case "ArrowDown":
                            if (e.preventDefault(), p) {
                                var l = j(o, 1);
                                l && l.focus && l.focus()
                            } else h(!0, e);
                            return;
                        case "Tab":
                            (0, L.ZP)(document, "keyup", (function(t) {
                                var n;
                                ("Tab" !== t.key || t.target) && null != (n = g.current) && n.contains(t.target) || h(!1, e)
                            }), {
                                once: !0
                            });
                            break;
                        case "Escape":
                            e.preventDefault(), e.stopPropagation(), h(!1, e)
                    }
                })), r.createElement(R.Provider, {
                    value: C
                }, u)
            }
            wt.displayName = "ReactOverlaysDropdown", wt.Menu = ht, wt.Toggle = yt;
            var kt = wt,
                St = r.createContext(null);
            St.displayName = "NavContext";
            var Mt = St,
                xt = n(48268),
                Tt = ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"],
                Nt = {
                    as: xt.Z,
                    disabled: !1
                },
                Ot = r.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        o = e.className,
                        a = e.children,
                        i = e.eventKey,
                        c = e.disabled,
                        d = e.href,
                        f = e.onClick,
                        h = e.onSelect,
                        m = e.active,
                        g = e.as,
                        v = (0, l.Z)(e, Tt),
                        y = (0, p.vE)(n, "dropdown-item"),
                        b = (0, r.useContext)(O.Z),
                        w = ((0, r.useContext)(Mt) || {}).activeKey,
                        k = (0, O.h)(i, d),
                        S = null == m && null != k ? (0, O.h)(w) === k : m,
                        x = (0, M.Z)((function(e) {
                            c || (f && f(e), b && b(k, e), h && h(k, e))
                        }));
                    return r.createElement(g, (0, s.Z)({}, v, {
                        ref: t,
                        href: d,
                        disabled: c,
                        className: u()(o, y, S && "active", c && "disabled"),
                        onClick: x
                    }), a)
                }));
            Ot.displayName = "DropdownItem", Ot.defaultProps = Nt;
            var Ct = Ot,
                At = n(45697),
                Et = n.n(At),
                Dt = function(e) {
                    return e && "function" != typeof e ? function(t) {
                        e.current = t
                    } : e
                };
            var jt = function(e, t) {
                return (0, r.useMemo)((function() {
                    return function(e, t) {
                        var n = Dt(e),
                            r = Dt(t);
                        return function(e) {
                            n && n(e), r && r(e)
                        }
                    }(e, t)
                }), [e, t])
            };
            n(41143);

            function It(e, t) {
                return e
            }
            var Lt = n(11132);

            function zt(e) {
                var t = window.getComputedStyle(e);
                return {
                    top: parseFloat(t.marginTop) || 0,
                    right: parseFloat(t.marginRight) || 0,
                    bottom: parseFloat(t.marginBottom) || 0,
                    left: parseFloat(t.marginLeft) || 0
                }
            }
            var Pt = ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"],
                Rt = Et().oneOf(["left", "right"]),
                Zt = (Et().oneOfType([Rt, Et().shape({
                    sm: Rt
                }), Et().shape({
                    md: Rt
                }), Et().shape({
                    lg: Rt
                }), Et().shape({
                    xl: Rt
                })]), r.forwardRef((function(e, t) {
                    var n, o, a, i, c, d = e.bsPrefix,
                        f = e.className,
                        h = e.align,
                        m = e.alignRight,
                        g = e.rootCloseEvent,
                        v = e.flip,
                        y = e.show,
                        w = e.renderOnMount,
                        k = e.as,
                        S = void 0 === k ? "div" : k,
                        M = e.popperConfig,
                        x = (0, l.Z)(e, Pt),
                        T = (0, r.useContext)(b),
                        N = (0, p.vE)(d, "dropdown-menu"),
                        O = (n = (0, r.useRef)(null), o = (0, r.useRef)(null), a = (0, r.useRef)(null), i = (0, p.vE)(void 0, "popover"), c = (0, p.vE)(void 0, "dropdown-menu"), [(0, r.useCallback)((function(e) {
                            e && ((0, Lt.Z)(e, i) || (0, Lt.Z)(e, c)) && (o.current = zt(e), e.style.margin = "0", n.current = e)
                        }), [i, c]), [(0, r.useMemo)((function() {
                            return {
                                name: "offset",
                                options: {
                                    offset: function(e) {
                                        var t = e.placement;
                                        if (!o.current) return [0, 0];
                                        var n = o.current,
                                            r = n.top,
                                            a = n.left,
                                            i = n.bottom,
                                            s = n.right;
                                        switch (t.split("-")[0]) {
                                            case "top":
                                                return [0, i];
                                            case "left":
                                                return [0, s];
                                            case "bottom":
                                                return [0, r];
                                            case "right":
                                                return [0, a];
                                            default:
                                                return [0, 0]
                                        }
                                    }
                                }
                            }
                        }), [o]), (0, r.useMemo)((function() {
                            return {
                                name: "arrow",
                                options: {
                                    padding: function() {
                                        if (!a.current) return 0;
                                        var e = a.current,
                                            t = e.top,
                                            n = e.right,
                                            r = t || n;
                                        return {
                                            top: r,
                                            left: r,
                                            right: r,
                                            bottom: r
                                        }
                                    }
                                }
                            }
                        }), [a]), (0, r.useMemo)((function() {
                            return {
                                name: "popoverArrowMargins",
                                enabled: !0,
                                phase: "main",
                                requiresIfExists: ["arrow"],
                                effect: function(e) {
                                    var t = e.state;
                                    if (n.current && t.elements.arrow && (0, Lt.Z)(n.current, i)) {
                                        if (t.modifiersData["arrow#persistent"]) {
                                            var r = zt(t.elements.arrow),
                                                o = r.top,
                                                s = r.right,
                                                l = o || s;
                                            t.modifiersData["arrow#persistent"].padding = {
                                                top: l,
                                                left: l,
                                                right: l,
                                                bottom: l
                                            }
                                        } else a.current = zt(t.elements.arrow);
                                        return t.elements.arrow.style.margin = "0",
                                            function() {
                                                t.elements.arrow && (t.elements.arrow.style.margin = "")
                                            }
                                    }
                                }
                            }
                        }), [i])]]),
                        C = O[0],
                        A = O[1],
                        E = [];
                    if (h)
                        if ("object" == typeof h) {
                            var D = Object.keys(h);
                            if (D.length) {
                                var j = D[0],
                                    I = h[j];
                                m = "left" === I, E.push(N + "-" + j + "-" + I)
                            }
                        } else "right" === h && (m = !0);
                    var L = ft({
                            flip: v,
                            rootCloseEvent: g,
                            show: y,
                            alignEnd: m,
                            usePopper: !T && 0 === E.length,
                            popperConfig: (0, s.Z)({}, M, {
                                modifiers: A.concat((null == M ? void 0 : M.modifiers) || [])
                            })
                        }),
                        z = L[0],
                        P = L[1],
                        R = P.hasShown,
                        Z = P.popper,
                        B = P.show,
                        _ = P.alignEnd,
                        U = P.toggle;
                    if (z.ref = jt(C, jt(It(t), z.ref)), !R && !w) return null;
                    "string" != typeof S && (z.show = B, z.close = function() {
                        return null == U ? void 0 : U(!1)
                    }, z.alignRight = _);
                    var F = x.style;
                    return null != Z && Z.placement && (F = (0, s.Z)({}, x.style, z.style), x["x-placement"] = Z.placement), r.createElement(S, (0, s.Z)({}, x, z, {
                        style: F,
                        className: u().apply(void 0, [f, N, B && "show", _ && N + "-right"].concat(E))
                    }))
                })));
            Zt.displayName = "DropdownMenu", Zt.defaultProps = {
                align: "left",
                alignRight: !1,
                flip: !0
            };
            var Bt = Zt,
                _t = (n(27724), n(32871)),
                Ut = ["bsPrefix", "split", "className", "childBsPrefix", "as"],
                Ft = r.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        o = e.split,
                        a = e.className,
                        i = e.childBsPrefix,
                        c = e.as,
                        d = void 0 === c ? _t.Z : c,
                        f = (0, l.Z)(e, Ut),
                        h = (0, p.vE)(n, "dropdown-toggle");
                    void 0 !== i && (f.bsPrefix = i);
                    var m = gt()[0];
                    return m.ref = jt(m.ref, It(t)), r.createElement(d, (0, s.Z)({
                        className: u()(a, h, o && h + "-split")
                    }, m, f))
                }));
            Ft.displayName = "DropdownToggle";
            var Yt = Ft,
                Wt = ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"],
                Qt = (0, f.Z)("dropdown-header", {
                    defaultProps: {
                        role: "heading"
                    }
                }),
                Vt = (0, f.Z)("dropdown-divider", {
                    defaultProps: {
                        role: "separator"
                    }
                }),
                Gt = (0, f.Z)("dropdown-item-text", {
                    Component: "span"
                }),
                Ht = r.forwardRef((function(e, t) {
                    var n = (0, d.Ch)(e, {
                            show: "onToggle"
                        }),
                        o = n.bsPrefix,
                        a = n.drop,
                        i = n.show,
                        c = n.className,
                        f = n.alignRight,
                        h = n.onSelect,
                        m = n.onToggle,
                        g = n.focusFirstItemOnShow,
                        v = n.as,
                        y = void 0 === v ? "div" : v,
                        b = (n.navbar, (0, l.Z)(n, Wt)),
                        w = (0, r.useContext)(O.Z),
                        k = (0, p.vE)(o, "dropdown"),
                        S = (0, M.Z)((function(e, t, n) {
                            void 0 === n && (n = t.type), t.currentTarget !== document || "keydown" === n && "Escape" !== t.key || (n = "rootClose"), m && m(e, t, {
                                source: n
                            })
                        })),
                        x = (0, M.Z)((function(e, t) {
                            w && w(e, t), h && h(e, t), S(!1, t, "select")
                        }));
                    return r.createElement(O.Z.Provider, {
                        value: x
                    }, r.createElement(kt, {
                        drop: a,
                        show: i,
                        alignEnd: f,
                        onToggle: S,
                        focusFirstItemOnShow: g,
                        itemSelector: "." + k + "-item:not(.disabled):not(:disabled)"
                    }, r.createElement(y, (0, s.Z)({}, b, {
                        ref: t,
                        className: u()(c, i && "show", (!a || "down" === a) && k, "up" === a && "dropup", "right" === a && "dropright", "left" === a && "dropleft")
                    }))))
                }));
            Ht.displayName = "Dropdown", Ht.defaultProps = {
                navbar: !1
            }, Ht.Divider = Vt, Ht.Header = Qt, Ht.Item = Ct, Ht.ItemText = Gt, Ht.Menu = Bt, Ht.Toggle = Yt;
            var $t = Ht;

            function qt() {
                return (qt = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Kt(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var Jt = (0, r.forwardRef)((function(e, t) {
                var n = e.color,
                    o = void 0 === n ? "currentColor" : n,
                    a = e.size,
                    i = void 0 === a ? 24 : a,
                    s = Kt(e, ["color", "size"]);
                return r.createElement("svg", qt({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, s), r.createElement("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), r.createElement("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }))
            }));
            Jt.displayName = "X";
            var Xt = Jt,
                en = function(e) {
                    var t = e.innerRef,
                        n = e.children,
                        o = e.labeledBy;
                    return r.createElement("div", {
                        ref: t,
                        className: "dropdown-menu dropdown-menu-md bg-black",
                        "aria-labelledby": o
                    }, r.createElement("div", {
                        className: "list-group list-group-flush"
                    }, n))
                },
                tn = r.forwardRef((function(e, t) {
                    return r.createElement(en, Object.assign({
                        innerRef: t
                    }, e))
                })),
                nn = function(e) {
                    var t = e.id,
                        n = e.to,
                        a = e.children,
                        i = e.innerRef,
                        s = e.expanded;
                    return r.createElement("div", {
                        id: t,
                        ref: i,
                        className: "dropdown-toggle"
                    }, r.createElement(o.Link, {
                        to: n,
                        activeClassName: "active",
                        className: "nav-link",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": s ? "true" : "false"
                    }, a))
                },
                rn = r.forwardRef((function(e, t) {
                    return r.createElement(nn, Object.assign({
                        innerRef: t
                    }, e))
                })),
                on = ["active", "className", "eventKey", "onSelect", "onClick", "as"],
                an = r.forwardRef((function(e, t) {
                    var n = e.active,
                        o = e.className,
                        a = e.eventKey,
                        i = e.onSelect,
                        c = e.onClick,
                        d = e.as,
                        f = (0, l.Z)(e, on),
                        p = (0, O.h)(a, f.href),
                        h = (0, r.useContext)(O.Z),
                        m = (0, r.useContext)(Mt),
                        g = n;
                    if (m) {
                        f.role || "tablist" !== m.role || (f.role = "tab");
                        var v = m.getControllerId(p),
                            y = m.getControlledId(p);
                        f["data-rb-event-key"] = p, f.id = v || f.id, f["aria-controls"] = y || f["aria-controls"], g = null == n && null != p ? m.activeKey === p : n
                    }
                    "tab" === f.role && (f.disabled && (f.tabIndex = -1, f["aria-disabled"] = !0), f["aria-selected"] = g);
                    var b = (0, M.Z)((function(e) {
                        c && c(e), null != p && (i && i(p, e), h && h(p, e))
                    }));
                    return r.createElement(d, (0, s.Z)({}, f, {
                        ref: t,
                        onClick: b,
                        className: u()(o, g && "active")
                    }))
                }));
            an.defaultProps = {
                disabled: !1
            };
            var sn = an,
                ln = ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"],
                cn = {
                    disabled: !1,
                    as: xt.Z
                },
                un = r.forwardRef((function(e, t) {
                    var n = e.bsPrefix,
                        o = e.disabled,
                        a = e.className,
                        i = e.href,
                        c = e.eventKey,
                        d = e.onSelect,
                        f = e.as,
                        h = (0, l.Z)(e, ln);
                    return n = (0, p.vE)(n, "nav-link"), r.createElement(sn, (0, s.Z)({}, h, {
                        href: i,
                        ref: t,
                        eventKey: c,
                        as: f,
                        disabled: o,
                        onSelect: d,
                        className: u()(a, n, o && "disabled")
                    }))
                }));
            un.displayName = "NavLink", un.defaultProps = cn;
            var dn = un,
                fn = ["id", "title", "children", "bsPrefix", "className", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"],
                pn = r.forwardRef((function(e, t) {
                    var n = e.id,
                        o = e.title,
                        a = e.children,
                        i = e.bsPrefix,
                        c = e.className,
                        d = e.rootCloseEvent,
                        f = e.menuRole,
                        h = e.disabled,
                        m = e.active,
                        g = e.renderMenuOnMount,
                        v = (0, l.Z)(e, fn),
                        y = (0, p.vE)(void 0, "nav-item");
                    return r.createElement($t, (0, s.Z)({
                        ref: t
                    }, v, {
                        className: u()(c, y)
                    }), r.createElement($t.Toggle, {
                        id: n,
                        eventKey: null,
                        active: m,
                        disabled: h,
                        childBsPrefix: i,
                        as: dn
                    }, o), r.createElement($t.Menu, {
                        role: f,
                        renderOnMount: g,
                        rootCloseEvent: d
                    }, a))
                }));
            pn.displayName = "NavDropdown", pn.Item = $t.Item, pn.ItemText = $t.ItemText, pn.Divider = $t.Divider, pn.Header = $t.Header;
            var hn = pn,
                mn = n(60526),
                gn = n.n(mn);

            function vn() {
                return (vn = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function yn(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var bn = (0, r.forwardRef)((function(e, t) {
                var n = e.color,
                    o = void 0 === n ? "currentColor" : n,
                    a = e.size,
                    i = void 0 === a ? 24 : a,
                    s = yn(e, ["color", "size"]);
                return r.createElement("svg", vn({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, s), r.createElement("polyline", {
                    points: "6 9 12 15 18 9"
                }))
            }));
            bn.displayName = "ChevronDown";
            var wn = bn,
                kn = {
                    en: "English",
                    ja: "日本語",
                    ko: "한국어",
                    ru: "Русский",
                    zh: "汉语",
                    de: "Deutsch",
                    es: "Español",
                    id: "Bahasa Indonesia",
                    tr: "Türkçe",
                    vi: "Tiếng Việt",
                    hi: "हिन्दी",
                    ar: "العربية",
                    fi: "suomi",
                    it: "Italiano",
                    nl: "Nederlands"
                },
                Sn = function() {
                    return r.createElement(hn, {
                        alignRight: !0,
                        id: "lang",
                        "aria-label": "Language Switcher",
                        menuRole: "button",
                        className: "nav-item hovered",
                        title: r.createElement(r.Fragment, null, r.createElement(gn(), {
                            height: "25",
                            className: "mr-1",
                            alt: "The dropdown of the language chooser"
                        }), r.createElement(wn, {
                            size: "17"
                        }), r.createElement("span", {
                            className: "sr-only"
                        }, "Language chooser dropdown"))
                    }, r.createElement(o.IntlContextConsumer, null, (function(e) {
                        return e.languages.map((function(e) {
                            return r.createElement(hn.Item, {
                                key: e,
                                className: "dropdown-item",
                                onClick: function(t) {
                                    (0, o.changeLocale)(e), t.preventDefault()
                                },
                                href: "/" + e
                            }, kn[e])
                        }))
                    })))
                },
                Mn = n(67061),
                xn = n.n(Mn),
                Tn = n(18044),
                Nn = n.n(Tn),
                On = n(9925),
                Cn = n(94687),
                An = On.ZP.div.withConfig({
                    displayName: "Header__HeaderWrapper",
                    componentId: "sc-1abhtib-0"
                })(["font-family:Diatype,var(--font-family-sans-serif);.bg-black{background-color:#000 !important;}.dropdown-menu{background-color:#000 !important;color:white;}.navbar-collapse.show,.collapsing{background-color:#000 !important;}"]),
                En = function() {
                    var e = (0, r.useState)(!1),
                        t = e[0],
                        n = e[1],
                        s = (0, r.useState)(!1),
                        l = s[0],
                        c = s[1],
                        u = (0, r.useRef)(0),
                        d = (0, i.YD)({
                            threshold: 1
                        }),
                        f = d.ref,
                        p = d.inView,
                        h = (0, i.YD)({
                            rootMargin: "400px",
                            threshold: 1
                        }),
                        m = h.ref,
                        g = h.inView;
                    (0, r.useLayoutEffect)((function() {
                        if ("undefined" != typeof window) {
                            var e = function() {
                                var e = window.pageYOffset;
                                e > u.current ? c(!0) : c(!1), u.current = e <= 0 ? 0 : e
                            };
                            return window.addEventListener("scroll", e),
                                function() {
                                    return window.removeEventListener("scroll", e)
                                }
                        }
                    }), [u]);
                    var v = l ? -100 : 0,
                        y = 0 === u.current || p ? "transparent" : g ? "" : "black";
                    return r.createElement(An, null, r.createElement(j, {
                        id: "navbar",
                        expand: "lg",
                        fixed: "top",
                        bg: y,
                        className: "navbar-dark",
                        style: {
                            top: v
                        }
                    }, r.createElement("div", {
                        className: "container-fluid"
                    }, r.createElement(o.Link, {
                        to: "/"
                    }, r.createElement("img", {
                        alt: "This is the Logo of Solana",
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkyIiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgNzkyIDk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTIzMy41MzMgMzguNEgxNzUuOFYxOS4ySDI0OC40OFYwSDE3NS42NjdDMTcwLjYxIDAgMTY1Ljc2IDIuMDA4OCAxNjIuMTg0IDUuNTg0NUMxNTguNjA5IDkuMTYwMTkgMTU2LjYgMTQuMDA5OSAxNTYuNiAxOS4wNjY3VjM4LjUzMzNDMTU2LjYgNDMuNTkwMSAxNTguNjA5IDQ4LjQzOTggMTYyLjE4NCA1Mi4wMTU1QzE2NS43NiA1NS41OTEyIDE3MC42MSA1Ny42IDE3NS42NjcgNTcuNkgyMzMuNFY3Ni44SDE1Ny45NzNWOTZIMjMzLjUzM0MyMzguNTkgOTYgMjQzLjQ0IDkzLjk5MTIgMjQ3LjAxNSA5MC40MTU1QzI1MC41OTEgODYuODM5OCAyNTIuNiA4MS45OTAxIDI1Mi42IDc2LjkzMzNWNTcuNDY2N0MyNTIuNiA1Mi40MDk5IDI1MC41OTEgNDcuNTYwMiAyNDcuMDE1IDQzLjk4NDVDMjQzLjQ0IDQwLjQwODggMjM4LjU5IDM4LjQgMjMzLjUzMyAzOC40WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM0NS4zMzMgMEgyODcuMzg3QzI4NC44ODMgLTYuMTI5MjZlLTA3IDI4Mi40MDUgMC40OTMyNyAyODAuMDkyIDEuNDUxNjJDMjc3Ljc4IDIuNDA5OTggMjc1LjY3OSAzLjgxNDYzIDI3My45MDkgNS41ODUzMUMyNzIuMTQgNy4zNTU5OCAyNzAuNzM3IDkuNDU3OTggMjY5Ljc4IDExLjc3MTJDMjY4LjgyMyAxNC4wODQ0IDI2OC4zMzIgMTYuNTYzNCAyNjguMzMzIDE5LjA2NjdWNzYuOTMzM0MyNjguMzMyIDc5LjQzNjYgMjY4LjgyMyA4MS45MTU2IDI2OS43OCA4NC4yMjg4QzI3MC43MzcgODYuNTQyIDI3Mi4xNCA4OC42NDQgMjczLjkwOSA5MC40MTQ3QzI3NS42NzkgOTIuMTg1NCAyNzcuNzggOTMuNTkgMjgwLjA5MiA5NC41NDg0QzI4Mi40MDUgOTUuNTA2NyAyODQuODgzIDk2IDI4Ny4zODcgOTZIMzQ1LjMzM0MzNTAuMzkgOTYgMzU1LjI0IDkzLjk5MTIgMzU4LjgxNiA5MC40MTU1QzM2Mi4zOTEgODYuODM5OCAzNjQuNCA4MS45OTAxIDM2NC40IDc2LjkzMzNWMTkuMDY2N0MzNjQuNCAxNC4wMDk5IDM2Mi4zOTEgOS4xNjAxOSAzNTguODE2IDUuNTg0NUMzNTUuMjQgMi4wMDg4IDM1MC4zOSAwIDM0NS4zMzMgMFYwWk0zNDUuMiA3Ni44SDI4Ny42VjE5LjJIMzQ1LjJWNzYuOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01NDguMTMzIDQuNjY4OTZlLTA2SDQ5MS42MjdDNDg2LjU3IDQuNjY4OTZlLTA2IDQ4MS43MiAyLjAwODgxIDQ3OC4xNDUgNS41ODQ1QzQ3NC41NjkgOS4xNjAyIDQ3Mi41NiAxNC4wMDk5IDQ3Mi41NiAxOS4wNjY3Vjk2SDQ5MS43NlY2NC40NTMzSDU0OFY5Nkg1NjcuMlYxOS4wNjY3QzU2Ny4yMDIgMTYuNTYyMyA1NjYuNzEgMTQuMDgyMiA1NjUuNzUyIDExLjc2ODFDNTY0Ljc5NSA5LjQ1NDAzIDU2My4zOSA3LjM1MTQ0IDU2MS42MTkgNS41ODA1OUM1NTkuODQ5IDMuODA5NzQgNTU3Ljc0NiAyLjQwNTM3IDU1NS40MzIgMS40NDc4QzU1My4xMTggMC40OTAyMjkgNTUwLjYzOCAtMC4wMDE3NDg0NyA1NDguMTMzIDQuNjY4OTZlLTA2Wk01NDggNDUuMjUzM0g0OTEuNzZWMTkuMkg1NDhWNDUuMjUzM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03NzIuOTMzIDQuMTk2MTllLTA1SDcxNi40NEM3MTMuOTMzIC0wLjAwNTIxNzk4IDcxMS40NDkgMC40ODQwNzQgNzA5LjEzMSAxLjQzOTkxQzcwNi44MTMgMi4zOTU3NCA3MDQuNzA3IDMuNzk5MzUgNzAyLjkzMiA1LjU3MDM4QzcwMS4xNTcgNy4zNDE0IDY5OS43NDkgOS40NDUwOCA2OTguNzg5IDExLjc2MUM2OTcuODI4IDE0LjA3NjggNjk3LjMzMyAxNi41NTk1IDY5Ny4zMzMgMTkuMDY2N1Y5Nkg3MTYuNTMzVjY0LjQ1MzRINzcyLjhWOTZINzkyVjE5LjA2NjdDNzkyIDE0LjAwOTkgNzg5Ljk5MSA5LjE2MDIzIDc4Ni40MTYgNS41ODQ1NEM3ODIuODQgMi4wMDg4NSA3NzcuOTkgNC4xOTYxOWUtMDUgNzcyLjkzMyA0LjE5NjE5ZS0wNVpNNzcyLjggNDUuMjUzNEg3MTYuNTczVjE5LjJINzcyLjhWNDUuMjUzNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NjEuMDggNzYuOEg2NTMuNEw2MjUuODggOEM2MjQuOTM5IDUuNjM5NDMgNjIzLjMxMSAzLjYxNTM1IDYyMS4yMDggMi4xODkyNUM2MTkuMTA0IDAuNzYzMTU0IDYxNi42MjEgMC4wMDA1NjQ5MzIgNjE0LjA4IDBMNTk2Ljk4NyAwQzU5My42MTcgMCA1OTAuMzg1IDEuMzM4NzMgNTg4LjAwMiAzLjcyMTdDNTg1LjYxOSA2LjEwNDY2IDU4NC4yOCA5LjMzNjY1IDU4NC4yOCAxMi43MDY3Vjk2SDYwMy40OFYxOS4ySDYxMS4xNkw2MzguNjY3IDg4QzYzOS42MDQgOTAuMzYwNiA2NDEuMjI5IDkyLjM4NTIgNjQzLjMzIDkzLjgxMTZDNjQ1LjQzMiA5NS4yMzggNjQ3LjkxMyA5Ni4wMDA0IDY1MC40NTMgOTZINjY3LjU0N0M2NzAuOTE3IDk2IDY3NC4xNDkgOTQuNjYxMyA2NzYuNTMyIDkyLjI3ODNDNjc4LjkxNSA4OS44OTUzIDY4MC4yNTMgODYuNjYzNCA2ODAuMjUzIDgzLjI5MzNWMEg2NjEuMDUzTDY2MS4wOCA3Ni44WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQwMC42MTMgMEgzODEuNDEzVjc2LjkzMzNDMzgxLjQxMyA4MS45OTAxIDM4My40MjIgODYuODM5OCAzODYuOTk4IDkwLjQxNTVDMzkwLjU3NCA5My45OTEyIDM5NS40MjMgOTYgNDAwLjQ4IDk2SDQ1OC4yMTNWNzYuOEg0MDAuNjEzVjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjMyIDczLjJDMjAuNjYwOSA3Mi44MzA4IDIxLjA3MjggNzIuNTM0MiAyMS41MzEgNzIuMzI4QzIxLjk4OTIgNzIuMTIxOSAyMi40ODQzIDcyLjAxMDMgMjIuOTg2NyA3MkgxMDYuNzczQzEwNy4xMjggNzIuMDA1IDEwNy40NzMgNzIuMTEyMyAxMDcuNzY4IDcyLjMwOUMxMDguMDYzIDcyLjUwNTcgMTA4LjI5NSA3Mi43ODM1IDEwOC40MzYgNzMuMTA4OEMxMDguNTc3IDczLjQzNDIgMTA4LjYyMSA3My43OTMzIDEwOC41NjIgNzQuMTQzQzEwOC41MDQgNzQuNDkyNyAxMDguMzQ2IDc0LjgxODEgMTA4LjEwNyA3NS4wOEw5MC4zNDY3IDk0LjhDOTAuMDA1OCA5NS4xNjkyIDg5LjU5NCA5NS40NjU4IDg5LjEzNTcgOTUuNjcyQzg4LjY3NzUgOTUuODc4MiA4OC4xODI0IDk1Ljk4OTcgODcuNjggOTZIMy44NDAwMkMzLjQ4NTUyIDk1Ljk5NSAzLjE0IDk1Ljg4NzcgMi44NDUwMyA5NS42OTFDMi41NTAwNyA5NS40OTQzIDIuMzE4MjIgOTUuMjE2NSAyLjE3NzM3IDk0Ljg5MTJDMi4wMzY1MiA5NC41NjU4IDEuOTkyNjcgOTQuMjA2NyAyLjA1MTA5IDkzLjg1N0MyLjEwOTUxIDkzLjUwNzMgMi4yNjc3MiA5My4xODE5IDIuNTA2NjkgOTIuOTJMMjAuMzIgNzMuMlpNMTA4LjE4NyA1Ni44NTMzQzEwOC40MjYgNTcuMTE1MiAxMDguNTg0IDU3LjQ0MDYgMTA4LjY0MiA1Ny43OTAzQzEwOC43MDEgNTguMTQgMTA4LjY1NyA1OC40OTkxIDEwOC41MTYgNTguODI0NUMxMDguMzc1IDU5LjE0OTkgMTA4LjE0MyA1OS40Mjc2IDEwNy44NDggNTkuNjI0M0MxMDcuNTUzIDU5LjgyMSAxMDcuMjA4IDU5LjkyODMgMTA2Ljg1MyA1OS45MzMzTDIzLjA0IDYwQzIyLjUzNzcgNTkuOTg5NyAyMi4wNDI1IDU5Ljg3ODIgMjEuNTg0MyA1OS42NzJDMjEuMTI2MSA1OS40NjU4IDIwLjcxNDIgNTkuMTY5MiAyMC4zNzM0IDU4LjhMMi40ODAwMiAzOS4xNDY3QzIuMjQxMDYgMzguODg0OCAyLjA4Mjg1IDM4LjU1OTQgMi4wMjQ0MiAzOC4yMDk3QzEuOTY2IDM3Ljg2IDIuMDA5ODUgMzcuNTAwOSAyLjE1MDcgMzcuMTc1NUMyLjI5MTU1IDM2Ljg1MDEgMi41MjM0IDM2LjU3MjQgMi44MTgzNyAzNi4zNzU3QzMuMTEzMzMgMzYuMTc5IDMuNDU4ODUgMzYuMDcxNyAzLjgxMzM2IDM2LjA2NjdMODcuNjI2NyAzNkM4OC4xMjkxIDM2LjAxMDMgODguNjI0MiAzNi4xMjE4IDg5LjA4MjQgMzYuMzI4Qzg5LjU0MDYgMzYuNTM0MiA4OS45NTI1IDM2LjgzMDggOTAuMjkzNCAzNy4yTDEwOC4xODcgNTYuODUzM1pNMjAuMzIgMS4yQzIwLjY2MDkgMC44MzA4MTggMjEuMDcyOCAwLjUzNDI0NCAyMS41MzEgMC4zMjgwNDZDMjEuOTg5MiAwLjEyMTg0OSAyMi40ODQzIDAuMDEwMjcxNCAyMi45ODY3IDBMMTA2LjgyNyAwLjA2NjY2NjdDMTA3LjE4MSAwLjA3MTY1OTUgMTA3LjUyNyAwLjE3ODk2NyAxMDcuODIyIDAuMzc1NjgxQzEwOC4xMTcgMC41NzIzOTQgMTA4LjM0OSAwLjg1MDEzOCAxMDguNDg5IDEuMTc1NUMxMDguNjMgMS41MDA4NyAxMDguNjc0IDEuODYgMTA4LjYxNiAyLjIwOTY5QzEwOC41NTcgMi41NTkzOSAxMDguMzk5IDIuODg0NzYgMTA4LjE2IDMuMTQ2NjdMOTAuMzQ2NyAyMi44QzkwLjAwNTggMjMuMTY5MiA4OS41OTQgMjMuNDY1OCA4OS4xMzU3IDIzLjY3MkM4OC42Nzc1IDIzLjg3ODIgODguMTgyNCAyMy45ODk3IDg3LjY4IDI0SDMuODQwMDJDMy40ODU1MiAyMy45OTUgMy4xNCAyMy44ODc3IDIuODQ1MDMgMjMuNjkxQzIuNTUwMDcgMjMuNDk0MyAyLjMxODIyIDIzLjIxNjUgMi4xNzczNyAyMi44OTEyQzIuMDM2NTIgMjIuNTY1OCAxLjk5MjY3IDIyLjIwNjcgMi4wNTEwOSAyMS44NTdDMi4xMDk1MSAyMS41MDczIDIuMjY3NzIgMjEuMTgxOSAyLjUwNjY5IDIwLjkyTDIwLjMyIDEuMloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNS4yNDAwMiIgeTE9Ijk4LjA5MzMiIHgyPSIxMDUuNDI3IiB5Mj0iLTIuMDkzMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzk5NDVGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMTQiIHN0b3AtY29sb3I9IiM4QTUzRjQiLz4KPHN0b3Agb2Zmc2V0PSIwLjQyIiBzdG9wLWNvbG9yPSIjNjM3N0Q2Ii8+CjxzdG9wIG9mZnNldD0iMC43OSIgc3RvcC1jb2xvcj0iIzI0QjBBNyIvPgo8c3RvcCBvZmZzZXQ9IjAuOTkiIHN0b3AtY29sb3I9IiMwMEQxOEMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBEMThDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNzkyIiBoZWlnaHQ9Ijk2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
                        className: "navbar-brand-img p-1 btn"
                    })), r.createElement(j.Toggle, {
                        "aria-controls": "navbarCollapse"
                    }), r.createElement(j.Collapse, {
                        id: "navbarCollapse"
                    }, r.createElement(j.Toggle, {
                        "aria-controls": "navbarCollapse"
                    }, r.createElement(Xt, null)), r.createElement("ul", {
                        className: "navbar-nav ml-auto"
                    }, r.createElement("li", {
                        className: "nav-item"
                    }, r.createElement(o.Link, {
                        className: "nav-link",
                        activeClassName: "active",
                        to: "/developers",
                        title: "Secure the Ledger"
                    }, r.createElement(Cn.Z, {
                        id: "titles.developers-sm"
                    }))), r.createElement(a.ZP, { in: t,
                        timeout: 1
                    }, (function(e) {
                        var t = "entered" === e || "exiting" === e,
                            o = n;
                        return r.createElement($t, {
                            as: "li",
                            className: "nav-item hovered mobile-not-expanded",
                            onClick: function() {
                                return o(!t)
                            },
                            onBlur: function() {
                                t && o(!1)
                            },
                            show: t
                        }, r.createElement($t.Toggle, {
                            as: rn,
                            to: "#",
                            id: "navbarDocumentation",
                            expanded: t
                        }, "Network", t ? r.createElement(xn(), {
                            className: "text-white"
                        }) : r.createElement(Nn(), {
                            className: "text-white"
                        })), r.createElement($t.Menu, {
                            as: tn,
                            labeledBy: "navbarDocumentation"
                        }, r.createElement("a", {
                            className: "list-group-item bg-transparent",
                            href: "https://explorer.solana.com",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.createElement("div", {
                            className: "ml-4"
                        }, r.createElement("div", {
                            className: "h6 font-weight-bold text-uppercase text-success mb-0"
                        }, "Block Explorer"), r.createElement("p", {
                            className: "font-size-sm text-gray-700 mb-0"
                        }, "Search across the Solana blockchain"))), r.createElement("a", {
                            className: "list-group-item bg-transparent",
                            href: "https://solanabeach.io",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.createElement("div", {
                            className: "ml-4"
                        }, r.createElement("div", {
                            className: "h6 font-weight-bold text-uppercase text-success mb-0"
                        }, "Network Performance"), r.createElement("p", {
                            className: "font-size-sm text-gray-700 mb-0"
                        }, "Real-time network stats & metrics"))), r.createElement("a", {
                            className: "list-group-item bg-transparent",
                            href: "https://solanabeach.io/validators",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.createElement("div", {
                            className: "ml-4"
                        }, r.createElement("div", {
                            className: "h6 font-weight-bold text-uppercase text-success mb-0"
                        }, "Stake Distribution"), r.createElement("p", {
                            className: "font-size-sm text-gray-700 mb-0"
                        }, "View network stake statistics")))))
                    })), r.createElement("li", {
                        className: "nav-item"
                    }, r.createElement(o.Link, {
                        className: "nav-link",
                        activeClassName: "active",
                        to: "/validators",
                        title: "Secure the Ledger"
                    }, r.createElement(Cn.Z, {
                        id: "titles.validators-sm"
                    }))), r.createElement("li", {
                        className: "nav-item"
                    }, r.createElement(o.Link, {
                        className: "nav-link",
                        activeClassName: "active",
                        to: "/community"
                    }, r.createElement(Cn.Z, {
                        id: "titles.community-sm"
                    }))), r.createElement("li", {
                        className: "nav-item"
                    }, r.createElement(o.Link, {
                        className: "nav-link",
                        activeClassName: "active",
                        to: "/ecosystem"
                    }, r.createElement(Cn.Z, {
                        id: "titles.ecosystem-sm",
                        defaultMessage: "Ecosystem"
                    })))), r.createElement("div", {
                        id: "header-right-button",
                        className: "ml-auto"
                    })), r.createElement(Sn, null))), r.createElement("span", {
                        className: "first-trigger",
                        ref: f
                    }), r.createElement("span", {
                        className: "second-trigger",
                        ref: m
                    }))
                }
        },
        94687: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(19756),
                o = n(27361),
                a = n.n(o),
                i = n(67294),
                s = n(91545),
                l = n(93710),
                c = ["id", "defaultMessage"];

            function u(e) {
                var t = e.id,
                    n = e.defaultMessage,
                    o = (0, r.Z)(e, c),
                    u = n || a()(l, t);
                return i.createElement(s.FormattedMessage, Object.assign({
                    id: t,
                    defaultMessage: u
                }, o))
            }
        },
        1989: function(e, t, n) {
            var r = n(51789),
                o = n(80401),
                a = n(57667),
                i = n(21327),
                s = n(81866);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = s, e.exports = l
        },
        38407: function(e, t, n) {
            var r = n(27040),
                o = n(14125),
                a = n(82117),
                i = n(67518),
                s = n(54705);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = s, e.exports = l
        },
        57071: function(e, t, n) {
            var r = n(10852)(n(55639), "Map");
            e.exports = r
        },
        83369: function(e, t, n) {
            var r = n(24785),
                o = n(11285),
                a = n(96e3),
                i = n(49916),
                s = n(95265);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = s, e.exports = l
        },
        62705: function(e, t, n) {
            var r = n(55639).Symbol;
            e.exports = r
        },
        29932: function(e) {
            e.exports = function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                return o
            }
        },
        18470: function(e, t, n) {
            var r = n(77813);
            e.exports = function(e, t) {
                for (var n = e.length; n--;)
                    if (r(e[n][0], t)) return n;
                return -1
            }
        },
        97786: function(e, t, n) {
            var r = n(71811),
                o = n(40327);
            e.exports = function(e, t) {
                for (var n = 0, a = (t = r(t, e)).length; null != e && n < a;) e = e[o(t[n++])];
                return n && n == a ? e : void 0
            }
        },
        44239: function(e, t, n) {
            var r = n(62705),
                o = n(89607),
                a = n(2333),
                i = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
            }
        },
        28458: function(e, t, n) {
            var r = n(23560),
                o = n(15346),
                a = n(13218),
                i = n(80346),
                s = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                c = Object.prototype,
                u = l.toString,
                d = c.hasOwnProperty,
                f = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!a(e) || o(e)) && (r(e) ? f : s).test(i(e))
            }
        },
        80531: function(e, t, n) {
            var r = n(62705),
                o = n(29932),
                a = n(1469),
                i = n(33448),
                s = r ? r.prototype : void 0,
                l = s ? s.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (a(t)) return o(t, e) + "";
                if (i(t)) return l ? l.call(t) : "";
                var n = t + "";
                return "0" == n && 1 / t == -Infinity ? "-0" : n
            }
        },
        71811: function(e, t, n) {
            var r = n(1469),
                o = n(15403),
                a = n(55514),
                i = n(79833);
            e.exports = function(e, t) {
                return r(e) ? e : o(e, t) ? [e] : a(i(e))
            }
        },
        14429: function(e, t, n) {
            var r = n(55639)["__core-js_shared__"];
            e.exports = r
        },
        31957: function(e, t, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        },
        45050: function(e, t, n) {
            var r = n(37019);
            e.exports = function(e, t) {
                var n = e.__data__;
                return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
        },
        10852: function(e, t, n) {
            var r = n(28458),
                o = n(47801);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        },
        89607: function(e, t, n) {
            var r = n(62705),
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = o.toString,
                s = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = a.call(e, s),
                    n = e[s];
                try {
                    e[s] = void 0;
                    var r = !0
                } catch (l) {}
                var o = i.call(e);
                return r && (t ? e[s] = n : delete e[s]), o
            }
        },
        47801: function(e) {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        51789: function(e, t, n) {
            var r = n(94536);
            e.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        80401: function(e) {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        57667: function(e, t, n) {
            var r = n(94536),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (r) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return o.call(t, e) ? t[e] : void 0
            }
        },
        21327: function(e, t, n) {
            var r = n(94536),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return r ? void 0 !== t[e] : o.call(t, e)
            }
        },
        81866: function(e, t, n) {
            var r = n(94536);
            e.exports = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        15403: function(e, t, n) {
            var r = n(1469),
                o = n(33448),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                i = /^\w*$/;
            e.exports = function(e, t) {
                if (r(e)) return !1;
                var n = typeof e;
                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || (i.test(e) || !a.test(e) || null != t && e in Object(t))
            }
        },
        37019: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        15346: function(e, t, n) {
            var r, o = n(14429),
                a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
            e.exports = function(e) {
                return !!a && a in e
            }
        },
        27040: function(e) {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        14125: function(e, t, n) {
            var r = n(18470),
                o = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
            }
        },
        82117: function(e, t, n) {
            var r = n(18470);
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        },
        67518: function(e, t, n) {
            var r = n(18470);
            e.exports = function(e) {
                return r(this.__data__, e) > -1
            }
        },
        54705: function(e, t, n) {
            var r = n(18470);
            e.exports = function(e, t) {
                var n = this.__data__,
                    o = r(n, e);
                return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
            }
        },
        24785: function(e, t, n) {
            var r = n(1989),
                o = n(38407),
                a = n(57071);
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(a || o),
                    string: new r
                }
            }
        },
        11285: function(e, t, n) {
            var r = n(45050);
            e.exports = function(e) {
                var t = r(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        96e3: function(e, t, n) {
            var r = n(45050);
            e.exports = function(e) {
                return r(this, e).get(e)
            }
        },
        49916: function(e, t, n) {
            var r = n(45050);
            e.exports = function(e) {
                return r(this, e).has(e)
            }
        },
        95265: function(e, t, n) {
            var r = n(45050);
            e.exports = function(e, t) {
                var n = r(this, e),
                    o = n.size;
                return n.set(e, t), this.size += n.size == o ? 0 : 1, this
            }
        },
        24523: function(e, t, n) {
            var r = n(88306);
            e.exports = function(e) {
                var t = r(e, (function(e) {
                        return 500 === n.size && n.clear(), e
                    })),
                    n = t.cache;
                return t
            }
        },
        94536: function(e, t, n) {
            var r = n(10852)(Object, "create");
            e.exports = r
        },
        2333: function(e) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        55639: function(e, t, n) {
            var r = n(31957),
                o = "object" == typeof self && self && self.Object === Object && self,
                a = r || o || Function("return this")();
            e.exports = a
        },
        55514: function(e, t, n) {
            var r = n(24523),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g,
                i = r((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function(e, n, r, o) {
                        t.push(r ? o.replace(a, "$1") : n || e)
                    })), t
                }));
            e.exports = i
        },
        40327: function(e, t, n) {
            var r = n(33448);
            e.exports = function(e) {
                if ("string" == typeof e || r(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            }
        },
        80346: function(e) {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (n) {}
                    try {
                        return e + ""
                    } catch (n) {}
                }
                return ""
            }
        },
        77813: function(e) {
            e.exports = function(e, t) {
                return e === t || e != e && t != t
            }
        },
        27361: function(e, t, n) {
            var r = n(97786);
            e.exports = function(e, t, n) {
                var o = null == e ? void 0 : r(e, t);
                return void 0 === o ? n : o
            }
        },
        1469: function(e) {
            var t = Array.isArray;
            e.exports = t
        },
        23560: function(e, t, n) {
            var r = n(44239),
                o = n(13218);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        13218: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        37005: function(e) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        33448: function(e, t, n) {
            var r = n(44239),
                o = n(37005);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
            }
        },
        88306: function(e, t, n) {
            var r = n(83369);

            function o(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        a = n.cache;
                    if (a.has(o)) return a.get(o);
                    var i = e.apply(this, r);
                    return n.cache = a.set(o, i) || a, i
                };
                return n.cache = new(o.Cache || r), n
            }
            o.Cache = r, e.exports = o
        },
        79833: function(e, t, n) {
            var r = n(80531);
            e.exports = function(e) {
                return null == e ? "" : r(e)
            }
        },
        60526: function(e, t, n) {
            var r = n(67294);

            function o(e) {
                return r.createElement("svg", e, r.createElement("path", {
                    fill: "currentColor",
                    d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                }))
            }
            o.defaultProps = {
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fas",
                "data-icon": "globe",
                className: "svg-inline--fa fa-globe fa-w-16",
                role: "img",
                viewBox: "0 0 496 512"
            }, e.exports = o, o.default = o
        },
        18044: function(e, t, n) {
            var r = n(67294);

            function o(e) {
                return r.createElement("svg", e, [r.createElement("title", {
                    key: 0
                }, "Stockholm-icons / Navigation / Angle-down"), r.createElement("desc", {
                    key: 1
                }, "Created with Sketch."), r.createElement("g", {
                    id: "Stockholm-icons-/-Navigation-/-Angle-down",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    key: 2
                }, [r.createElement("polygon", {
                    id: "Shape",
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), r.createElement("path", {
                    d: "M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z",
                    id: "Path-94",
                    fill: "currentColor",
                    transform: "translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999) ",
                    key: 1
                })])])
            }
            o.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24",
                version: "1.1"
            }, e.exports = o, o.default = o
        },
        67061: function(e, t, n) {
            var r = n(67294);

            function o(e) {
                return r.createElement("svg", e, [r.createElement("title", {
                    key: 0
                }, "Stockholm-icons / Navigation / Stockholm-icons / Navigation / Angle-up"), r.createElement("desc", {
                    key: 1
                }, "Created with Sketch."), r.createElement("g", {
                    id: "Stockholm-icons-/-Navigation-/-Stockholm-icons-/-Navigation-/-Angle-up",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    key: 2
                }, [r.createElement("polygon", {
                    id: "Shape",
                    points: "0 0 24 0 24 24 0 24",
                    key: 0
                }), r.createElement("path", {
                    d: "M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z",
                    id: "Path-94",
                    fill: "currentColor",
                    key: 1
                })])])
            }
            o.defaultProps = {
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24",
                version: "1.1"
            }, e.exports = o, o.default = o
        },
        5009: function(e, t, n) {
            var r = n(67294);

            function o(e) {
                return r.createElement("svg", e, r.createElement("path", {
                    d: "M1 1L13 13M13 13V3.11765M13 13H3.11765",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }))
            }
            o.defaultProps = {
                viewBox: "0 0 14 14",
                fill: "none"
            }, e.exports = o, o.default = o
        },
        42473: function(e) {
            "use strict";
            var t = function() {};
            e.exports = t
        },
        93710: function(e) {
            "use strict";
            e.exports = JSON.parse('{"404":{"title":"Uh Oh.","copy":"We ran into an issue, but don’t worry, we’ll take care of it for sure.","button":"Back to safety"},"titles":{"404":"404: Not Found","index":"Scalable Blockchain Infrastructure: Billions of transactions & counting","about":"About Solana: The Mission and Team","collective":"Collective","validators":"Validators: Help Secure the Network and Earn SOL","tokens":"SOL: The Native Token of the Solana Blockchain","team":"Team","tds":"Solana’s Tour de SOL: Our Incentivized Testnet Program","explorer":"Explorer","newsletter":"Newsletter","disclaimer":"Disclaimer","developers":"Developers: Resources and Information for Building on Solana","contact":"Contact Us: Get your questions answered","developers-sm":"Developers","community-sm":"Community","about-sm":"About","contact-sm":"Contact","ecosystem-sm":"Ecosystem","validators-sm":"Validators","community":"Solana Community: Join our ecosystem","news":"Solana News","accelerator":"Solana Grants: Build on a blockchain that actually scales.","chaos":"Chaos. Pure chaos.","careers":"Network Careers","priceguarantee":"Price Guarantee","press":"Solana Branding","conference":"Save the date.","hackathon2021":"Solana Season Hackathon","hackathon2021Q3":"Ignition Hackathon"},"careers":{"marketing-lead":"Marketing Lead","front-end":"Front End Engineer","systems":"Systems Engineer","ops":"Operations","ui-ux":"Senior UX/UI Designer","sre":"Site Reliability Engineer","eng":"Engineering","val":"Validator","partners":"Partner","apply":"To apply to any of the roles listed above, send an email with your resume to"},"disclaimer":{"tos":"Terms of Service","updated":"Updated","hero":"Website Disclaimer","nothing":"Nothing in this website is an offer to sell, or the solicitation of an offer to buy, any tokens. Solana is publishing this website solely to receive feedback and comments from the public. If and when Solana offers for sale any tokens (or a Simple Agreement for Future Tokens), it will do so through definitive offering documents, including a disclosure document and risk factors. Those definitive documents also are expected to include an updated version of this website, which may differ significantly from the current version. If and when Solana makes such an offering in the United States, the offering likely will be available solely to accredited investors.","guarantee":"Nothing in this website should be treated or read as a guarantee or promise of how Solana’s business or the tokens will develop or of the utility or value of the tokens. This website outlines current plans, which could change at its discretion, and the success of which will depend on many factors outside Solana’s control, including market-based factors and factors within the data and cryptocurrency industries, among others. Any statements about future events are based solely on Solana’s analysis of the issues described in this website. That analysis may prove to be incorrect.","question":"Have a question?","clarification":"Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you."},"nav":{"documentation":"Documentation","jump":"Jump right in","accelerator":"Grants","funding":"Apply for funding and 1:1 support","livesupport":"Live support from the Solana team"},"cta":{"examples":"Want to play around and learn through examples?","demos":"Check Out Demos","docs":"Ready to jump straight into the documentation?","build":"Start Building","learn-contrib":"Want to learn about or contribute to the codebase?","source":"View Source Code","friends":"Let’s be friends. Stay in touch.","newsletter":"Join Newsletter","view-ecosystem":"View more","explore-ecosystem":"Explore the ecosystem","chat-with":"Chat With Us","dont":"Get Solana updates delivered straight to your inbox","announcement":"Buy SOL","about":"More About Us","accelerator":"Apply","subscribe":"Subscribe Now","nonus":"Non-US Only"},"collective":{"apply":"Apply Now","part1":"The Collective supports active Solana evangelists for running meetups, moderating community channels, creating educational content, and much more. Join the Solana team in promoting various community and marketing initiatives all while accumulating rewards for your efforts. Apply if you’re interested in helping spread the word!","part2":"The Solana Collective offers a way for individuals to participate alongside the Solana core team through various community and marketing initiatives while accumulating rewards."},"accelerator":{"header":"Kickstart your project on Solana","subheader":"The Solana Foundation Grants Program gives teams access to funding, dedicated technical support, recruiting assistance, and more.","apply":"Apply","build":"Build on a blockchain <emphasis>that actually scales.</emphasis>","payitdown":"Solana opens a global landscape for blockchain level applications with feasibility: our technology enables decentralization, democratization, and automation at scale.","subheader-2":"The Solana Grants Program helps new infrastructure projects, end-user applications, and everything in between launch to democratize the Internet and global financial system.","llvm":"LLVM compatible languages supported for smart contract development","apis":"Will provide high-level APIs that will be highly compatible with existing UIs written specifically for Ethereum to reduce developer friction","ux":"Improved user experience","transactions":"Transactions That Work","transactions-subheader":"Don’t worry about fees.","tiny":"Ours are tiny.","fees":"Instead of constantly worrying about when your use case will be unfeasible, just use Solana.","pert":"$0.0001 per transaction","settlement":"Quick settlement time (sub-second finality)","consensus":"PoS consensus mechanism","transactionorder":"Automatic transaction ordering","validator":"Want to learn what it takes to be a Solana validator?","runnode":"Run a Node","biz":"Ready to get your crypto project off the ground?","apply2":"Apply Now","contribute":"Want to learn about or contribute to the codebase?"},"validators":{"secure":"Secure the ledger.","earn":"Earn SOL.","participate":"Decentralize the network by providing computing resources.","become-cta":"Become a Validator","stakingnd":"Staking & Validation","stake":"Stake tokens and earn rewards by processing and validating transactions. Earn commissions by managing delegated tokens on behalf of others.","testnet":"Testnet Competition","build":"Earn tokens by running a node to help test new features and benchmark network performance.","ecosystem":"Meet Our Validators","participatetitle":"Participate","register":"Register for TdS","register-page":"Register Now","onsolana":"Validate on Solana","storage":"Storage Mining","disk":"Provide excess disk space to store the Solana ledger’s data in stripes. Auto-delegate earned SOL to staking validation clients to compound earnings.","become":"Become a validator and get tokens.","existence":"Without validators, the Solana cluster cannot exist. Help maintain the integrity of the ledger and earn rewards while doing so.","rewards":"Protocol Based Rewards","issuances":"Issuances from a global, protocol-defined, inflation rate. These rewards are delivered on top of earnings from transaction fees.","fees":"Transaction Fees","feesdesc":"Transaction fees are market-based p2p transfers, attached to network interactions for state execution.","staking":"Staking","howstaking":"Stakers are rewarded for helping to validate the ledger. They do this by delegating their stake to validator nodes. Those validators do the legwork of replaying the ledger and send votes to a per-node vote account to which stakers can delegate their stakes. The rest of the cluster uses those stake-weighted votes to select a block when forks arise.","tps":"transactions processed since March 2020. Help validate the fastest blockchain in the world.","pert":"per transaction. Capture transaction fees as a validator.","validators":"Global Validators. Join our cohort of elite network experts.","docs":"Interested in learning more? Check out our docs.","start-registration":"Ready to start? Click the link below.","howto":"Validating on Solana","header":"Validator Signup","info":"Compensation Legal Proceedings","items-one":"Thank you for your interest in supporting the Solana cluster. Below is information related to the legal proceedings required to issue compensation for validator participation on either the Mainnet Beta, Tour de SOL, or Testnet clusters.","items-two":"Complete identity verification via Passbase below.","items-three":"Sign the universal Validator compensation document via DocuSign.","same-email":"Please use the same email for both Passbase identity verification and DocuSign.","run":"Run a Node","discuss":"Discuss with other validators and the Solana team.","progress":"Not ready to run a node? Want to keep updated with Solana’s progress?","step1":"Step 1. Register","process":"Follow the <strong>four step</strong> process outlined in the link above for registration, KYC/AML, participation agreement, and Discord onboarding.","both-register":"Completing these steps will register you to validate on Solana\'s Tour de SOL and Mainnet Beta networks.","before":"Before onboarding to Mainnet, validators should successfully participate in at least one “stage” of our incentivized testnet: <tdslink>Tour de SOL.</tdslink>","stages":"Stages kick off monthly; after registration see <stagelink>here</stagelink> for the latest stage information (including details regarding compensation, bug bounties, etc).","inflationary":"Until inflationary rewards are enabled, validators are directly compensated for their services by the Solana Foundation.","successful":"After successfully participating in a stage of Tour de SOL, you will be eligible to receive a Solana Foundation delegation on Mainnet Beta.","us":"U.S. individuals and entities are currently EXCLUDED from participating","step2":"Step 2. Participate in Tour de SOL","step3":"Step 3. Join Mainnet Beta","anyone":"Anyone can run a validator node on Solana’s permissionless testnet and Mainnet Beta networks!","getstarted":"To get started, check out our docs on the <techlink>technical requirements and steps to start your own node.</techlink>","activecomm":"We have a very active community of validators on our <discordlink>Discord server.</discordlink>  This is the best place to get technical support and ask questions.","permissionless":"Solana’s networks are permissionless and therefore anyone can begin running a validator node at any time. Registration and KYC are required to receive compensation from the Solana Foundation. Please note that U.S. entities and individuals are not eligible to receive compensation at this time.","participate-2":"Participate in Tour de SOL to be eligible for Solana Foundation delegation","registration":{"head":"Compensation Registration Process","steps":"Please complete the steps below to be eligible for token compensation for validation services first on the Solana Testnet and then Mainnet Beta networks.","no-u":"Solana’s networks are permissionless and therefore anyone can begin running a validator node at any time. Registration and KYC are required to receive compensation from the Solana Foundation. Please note that U.S. entities and individuals are not eligible to receive compensation at this time.","registration":"Registration","form":"Tour de SOL (TdS) Registration Form","keybase":"We no longer require participants to link their Public Key with their Keybase account","req":"Registration and successful participation in at least one stage of TdS is a requirement before becoming eligible for compensation on Mainnet Beta","more":"More info on Tour de SOL <tdslink>here</tdslink>","kyc":"KYC/AML (via Passbase)","before":"If you’ve completed KYC/AML previously for SLP or TdS with the same entity/individual on Coinlist or Passbase, then you will not need to go through this again.","no-us":"We cannot accept U.S. entities or individuals for KYC or compensation","participation":"Complete Participation Agreement","same-email":"Please use the same email address as used for Passbase identity verification","discord":"Join Our Discord","discord-desc":"Requirement for all validators, as this is our primary communication channel for technical discussions, network announcements and upgrades, etc"},"qa":{"q1":"Q: What is a validator?","a1":"A: Validators form the backbone of Solana’s network. By processing transactions and participating in consensus, each validator helps make Solana the most high-performance blockchain network in the world.","q2":"Q: Who can run a validator node?","a2":"A: Anyone!","q3":"Q: How do I run a validator node?","a3":"A: To get started, check out our docs on the <valnodelink>technical requirements and steps to start your own node</valnodelink>.","q4":"Q: How do I get help running a validator node?","a4":"A: We have a very active community of validators on our <discordlink>Discord server.</discordlink>  This is the best place to get technical support and ask questions.","q5":"Q: Why should I run a validator node?","a5":"A: Validators can earn SOL for helping secure the Solana network. Here\'s an overview of the <economicslink>economics</economicslink>, and <overviewlink>here\'s</overviewlink> an overview of staking rewards. Validators also help increase censorship resistance on the network by increasing decentralization.","q6":"Q: What’s the Foundation Delegation program?","a6":"A: It’s a Solana Foundation program to incentivize new validators to the network. Read more about it <readmorefoundlink>here</readmorefoundlink>."}},"priceguarantee":{"hero":"Solana Price Guarantee Registration","redeem":"Price Guarantee Redeem","subheader":"Fill out the form below to complete price guarantee registration.","subheader-redeem":"Fill out the form below to redeem your price guarantee.","newsletter":"Not ready to claim your price guarantee? Want to keep updated with Solana’s progress?","terms":"Full Price Guarantee Terms"},"commands":{"gtdocs":"Go to Docs","rtdocs":"Read Documentation","visitf":"Visit Forums","forum":"Discuss on Forum","chat":"Get Chat Support","updated":"Want to keep updated with Solana’s progress?","build":"Build Now","contact":"Contact Us","learn":"Learn More","helpsecure":"Help Secure the Network","mailchimp":"Not ready to start building? Keep in touch."},"newsletter":{"signup":"Sign up to the Solana Newsletter","spam":"We promise we won’t spam you.","informed":"Stay Informed"},"hackathon":{"title":"Solana Wormhole Hackathon","warp":"Boost your project at warp speed","prizes":"Up to $200k in prizes","register":"Register"},"hackathon2021":{"date":"May 15 - June 7th 2021","title":"Solana Season","subtitle":"Jumpstart your next project on Solana & join the fastest growing ecosystem in crypto","resources":"Get Started","register":"Register now","submit":"Submit Your Project","participation":"Anyone with an internet connection can participate","supportedBy":"With support from:","pricesAndFunding":"Up to <emphasis>$1 million</emphasis> in global prizes and seed funding","regionalTitle":"Regional Tracks & Events","regionalParticipation":"While anyone globally can participate, builders in specific countries have the opportunity to compete for regional prizes","speakerTitle":"Speakers and Judges","speakerScheduleSubtitle":"Take a look at the full schedule <scheduleLink>here</scheduleLink>","speakerPositions":{},"newsletter":"Join Newsletter","disclaimer":"Disclaimer","globalGrandPrize":"$30,000 grand prize","globalExtraPrizesOld":"Also $25k from<sl></sl><serumLink>Serum</serumLink>, $25k from Kin, $15k from<sl></sl><raydiumLink>Raydium</raydiumLink><sr></sr>and $15k from Pyth","globalExtraPrizes":{"serum":"$25k","kin":"$25k","raydium":"3k RAY","pyth":"$25k","ournetwork":"$25k","media":"$30k"},"globalTracks":{"defi":"DeFi Track","web3":"Web3 Track","nft":"NFT Track"},"regionalTracks":{"china":"China. Supported by <serumLink>Serum</serumLink> and <raydiumLink>Raydium</raydiumLink>","india":"India. Supported by <devfolioLink>Devfolio</devfolioLink> and <coindcxLink>CoinDCX</coindcxLink>","russia":"Eastern Europe. Supported by <hackenLink>Hacken</hackenLink>","brazil":"Brazil. Supported by <brzLink>BRZ</brzLink>","vietnam":"Vietnam. Supported by <kyberLink>Kyber</kyberLink> and <coinLink>Coin98</coinLink>","africa":"Africa. Supported by <blockchainNigeriaLink>Blockchain Nigeria</blockchainNigeriaLink>, <bundleLink>Bundle</bundleLink>, and more"},"places":{"place1":"1st place","place2":"2nd place","place3":"3rd place"},"globalPrizes":{"place1":"$20k","place2":"$10k","place3":"$5k"},"regionalPrizes":{"china":{"extra":"$125k","extraSub":"Prize Pool"},"india":{"extra":"$50k","extraSub":"Prize Pool"},"russia":{"extra":"$180k","extraSub":"Prize Pool"},"brazil":{"extra":"$25k","extraSub":"Prize Pool"},"vietnam":{"extra":"$25k","extraSub":"Prize Pool"},"africa":{"extra":"$25k","extraSub":"Prize Pool"}}},"hackathon2021Q3":{"date":"Aug 31 - Oct 15, 2021","title":"A Global Solana Hackathon","subtitle":"A virtual hackathon with up to $5 million in prizes and seed funding","register":"Register here","welcomeTitle":"Launch the future with Solana.","welcomeText":"Solana is the world\'s most performant blockchain. With high speeds and low fees, it’s designed to help projects take off and quickly scale to billions of users around the world. Solana is already used for a plethora of projects, including DeFi (decentralized finance) apps, games, Web3 products, art projects, collectables, and much more. The sky’s the limit. What will you launch?","pricesAndFunding":"Up to $5 million in global prizes and seed funding.","rewards":{"winners":"Get started. <register>Register on Devpost</register> and view the <resources>resources to start building.</resources>","champions":"Get inspired. <events>Join in-person and virtual events.</events>","community":"Get help. <findTeam>Join the Discord chat to find a team and get assistance.</findTeam>"},"regionalTitle":"Regional Tracks & Events","regionalParticipation":"While anyone globally can participate, builders in specific countries have the opportunity to compete for regional prizes","speakerTitle":"Judges and Speakers","speakerButton":"Full Schedule","speakerPositions":{},"disclaimer":"Disclaimer","prizes":{"headerCardTitle":"Grand Champion","headerCardText":"$75k USDC, 3 conference passes, and the chance to present at  Breakpoint in Lisbon.","communityCardTitle":"Community Choice Award","communityCardText":"$10k USDC and an NFT award"},"prizesTracksSponsors":"Presented by","places":{"place1":"1st","place2":"2nd","place3":"3rd","place4":"4th","place5":"5th"},"prizesTracks":{"web3":{"header":"Web3 Track","text":"<emphasis>Launch the web of tomorrow.</emphasis> Build decentralized apps, DAOs, and other infrastructure to cut the middleman out of popular Web2 platforms.","prizes":{"place1":"$45K","place2":"$30K","place3":"$20K","place4":"$15K","place5":"$10K"},"sponsors":"microsoft"},"defi":{"header":"DeFi Track","text":"<emphasis>Leave traditional finance behind.</emphasis> Design DEXs, lending platforms, and new decentralized applications to free consumers.","prizes":{"place1":"$65K","place2":"$45K","place3":"$30K","place4":"$25K","place5":"$20K"},"sponsors":"jump, standard"},"gaming":{"header":"Gaming track","text":"<emphasis>Create the future of gaming.</emphasis> Shape blockchain-based games, NFTs, and more to allow players to directly interact with p2p markets.","prizes":{"place1":"$45K","place2":"$30K","place3":"$20K","place4":"$15K","place5":"$10K"},"sponsors":"forte"},"art":{"header":"Art & Collectibles","text":"<emphasis>Make something beautiful.</emphasis> Create NFTs and platforms that directly connect artists with their fans around the world.","prizes":{"place1":"$45K","place2":"$30K","place3":"$20K","place4":"$15K","place5":"$10K"},"sponsors":"metaplex"}},"prizesExtraTracks":{"serum":"$30k","solend":"$30k","pyth":"$30k","raydium":"$30k","stardust":"$30k","mango":"$30k","wormhole":"$30k","chainlink":"$30k","daa":"$30k","psyoptions":"$30k","cope":"$30k","hxro":"$30k","marinade":"$15k"}},"community":{"hero":"Solana Community","featcontent":"Featured Content","header":"The Solana community is a globally distributed home to developers, token holders, validators, and members supporting the protocol.","info":"Hear from the CEO","podcast":"Go to Podcast","chat":"Chat with us directly","discord":"Go to Discord","learn":"Learn in depth","blog":"Visit Blog","collective":"Support the Solana core team through community and marketing initiatives while accumulating rewards.","socials":{"hero":"Wayfinding","hero-old":"Join the crypto revolution","subheader":"The following are our most frequented and updated communication channels. You name it, we’ve got it!","telegram":"Telegram","approx-members":"~{number} members","gt-members":">{number} members","announcements":"Announcements","discord":"Discord","engineering":"Engineering","twitter":"Twitter","approx-followers":"~{number} followers","medium":"News","approx-write-ups":"~{number} write-ups","blogposts":"Blog Posts","github":"GitHub","vk":"VK","vk-subscribers":"~{number} followers","weibo":"Weibo","weibo-subscribers":">{number} subscribers","twitter-jp":"Twitter Japan","twitter-jp-subscribers":">{number} members","forum":"Solana Forums","forum-subscribers":">{number} posts","gt-stars":">{number} stars","youtube":"YouTube","gt-subscribers":">{number} subscribers","yt-subscribers":">{number}K subscribers","videos":"Videos","email":"Email","oneonone":"1:1","reddit":"Reddit","discussions":"Discussions","meetup":"Meetup","meetings":"Meetings"},"articles":{"latest":"Latest Stories","description":"Here’s what we’ve been up to recently.","view":"View all"},"jill":{"title":"Jill Carlson - Partner at Slow Ventures / Co-Founder Of The Open Money Initiative","text":"We had a blast hosting Jill Carlson for episode #15 of No Sharding, The Solana Podcast. For this episode we took a different approach..."},"cluster-launch":{"title":"SLP1 Cluster Launch","text":"We’re excited to announce the successful launch of our “Soft Launch” cluster. An incentivized cluster for development and partner integration. This cluster will run in parallel and separate to Tour de SOL (TdS)."},"solana2019":{"title":"Solana in 2019: Growth, Development, and the Road to Mainnet","text":"It’s been a hell of a year. As we prepare for the next decade, we want to recap the amazing progress Solana made in 2019. From intensive, heads down infrastructure work to announcing our $20m raise led by Multicoin Capital..."},"brendan":{"title":"Brendan Eich - Co-founder / CEO Brave Software and Attention Token","text":"Brendan talks briefly about his background (Javascript creator & Mozilla co-founder) and then jumps right into how..."},"sam":{"title":"Sam Bankman-Fried - CEO of FTX, Co-founder of Serum","text":"A day after Project Serum was officially announced, Anatoly and Sam sat down to discuss the current trading environment in crypto, the future of DeFi, and to provide additional details around the high-speed, non-custodial decent..."},"dieter":{"title":"Dieter Shirley - CTO of Dapper Labs, Lead Architect of Flow","text":"No Sharding is the name of the podcast, and that is precisely what this episode is all about. From developing flow to leading the engineering team who designed Crypto Kitties, Dieter has extensive experience in both L1 and L2..."},"rodolfo":{"title":"Rodolfo Gonzalez - Partner at Foundation Capital","text":"This episode is all about venture capital. Rodolfo Gonzales is a partner at Foundation Capital, a venture capital firm that backs individuals who want to nudge the world ahead in some way, using a transformative business as their..."},"royandreisen":{"title":"Meher Roy & Reisen - Co-Founders of Chorus One Ep #14","text":"Chorus One is operating infrastructure to help you securely increase your crypto holdings. Meher..."},"sunnya":{"title":"Sunny Aggarwal - Core Developer at Tendermint / Cosmos","text":"This episode is all about Validators. Are you interested in learning more about how to run a node and become a validator?"},"defi":{"title":"A Deep Dive Into DeFi With FTX, Aave, Balancer, Curve, Gauntlet, and Solana","text":"This is a special episode of The Solana Podcast - we took a recent panel for the Solana Wormhole Hackathon and converted into audio format for you! Enjoy this deep dive into all things DeFi with industry leaders."},"tds-week-2":{"title":"Tour de SOL – Week 2 Recap","text":"Welcome back to everyone who’s been following along on our progress during Tour de SOL..."},"tds-week-1":{"title":"Tour de SOL – Week 1 Recap","text":"We’re officially a week into Stage 1 of Tour de SOL (TdS), and what a week it has been. Our goal was to begin to stress test our..."},"serum":{"title":"FTX Chooses Solana for Serum: A High-Speed, Non-Custodial Decentralized Derivatives Exchange","text":"FTX and Alameda Research created the Serum Foundation and announced Serum, a new high-speed, non-custodial DEX that’s built on Solana. You can learn more about Serum in the white paper and in this comprehensive write-up on The Block."},"arweave":{"title":"Announcing the Solana Arweave Interoperability Hack","text":"Today Solana is excited to announce a collaboration with Arweave. We are both calling for developers to build a bridge between the Solana and Arweave projects. This bounty is now live on Gitcoin and includes a 15,000 DAI reward. You can learn more about the scope and rules of the bounty here!"},"tdsstage1":{"title":"Tour de SOL Stage 1 Details","text":"We are revising Tour de SOL (TdS) from 3 events into an ongoing series of incentivised and scheduled events..."},"coinlist":{"title":"Solana Raises 1.76 Million in Sold-Out Coinlist Auction","text":"On March 23rd at 10 pm PST our Coinlist auction went live. The dutch auction sold out the 8 million available SOL tokens in 6 hours. We want to thank our community for the overwhelmingly positive response to this auction, despite the current world conditions."},"terra":{"title":"Solana Partners with Terra to Build a Low-Latency Token Bridge, Bringing Stablecoins To The Solana Ecosystem","text":"Together we’re building a new high-speed token bridge that facilitates the transfer of Terra stablecoins into Solana’s dapp ecosystem. Terra’s tokens will be the first stablecoins on the Solana network. By bringing stablecoins onto our network, we aim to dramatically expand the design space for developers, opening the door to novel applications that require price-stable payments."},"chainlink":{"title":"Chainlink and Solana Integration: High-Speed Price Oracle Data for Better DeFi Applications","text":"Financial contracts are data-driven instruments that react to market events, such as the price change of an underlying asset. Smart contracts, in particular, are automated financial products, meaning the data directly triggers the execution and settlement of the contract as opposed to employing a human intermediary."},"popular":{"title":"News","description":"Here are some selections from the past few months."},"videos":{"related":"Related","watch":"Watch"}},"blog":{"hero":"Solana News","header":"Learn more about Solana’s technology, validators, integrations, and community.","latestTopics":"Latest Topics","readArticle":"Read Article"},"developers":{"accelerator-header":"Get support, funding, and office space for your blockchain project.","build":{"prediction-market":"prediction market","payments-network":"payments network","exchange":"exchange","market":"marketplace"},"pitch":{"focus":"Focus on your business,","focus-2":"not your infrastructure.","network":"The global, distributed network is specifically built to scale with Moore’s Law, without sacrificing decentralization or security to support users and devices in the billions.","language":"Code in your language.","vm":"Code in Rust, C, and C++. Flexible virtual machine integrations, with more on the way.","wait-times":"Avoid long wait times for your users.","fast":"Blazing fast speeds and no mempool. 400ms blocktimes and sub-second finality. Web 3.0 with Web 2.0 speed.","scale":"Capital efficient as the ecosystem grows.","scale-context":"Solana scales thanks to Moore’s Law — there\'s no need to integrate with multiple shards or layer 2 solutions.","security":"Enterprise-grade security.","audit":"Audited by a Fortune 500-preferred security firm. Iron-clad immutability for global scale."},"pitch-2":{"users":"Your users will","users-notice":"never even notice.","performance":"Solana’s performance is unparalleled, and specifically built for high-frequency and massive-scale applications.","pmt":"Block Height","validators":"Current Epoch","blocktimes":"Block Time","tps":"Total Transactions"}},"tokens":{"distribution":"Token Economics","transparency-head":"Transparency Reports","transparency-body":"The Solana Foundation releases a monthly transparency report to cover the previous month’s token activity, expected token activity for the current month, and other updates in relation to the SOL token. The goal for these reports is simple: token activity transparency.","distribution-content":"SOL is the native token of the Solana blockchain. Community tokens are held by the Swiss Foundation, which is run by an independent board. This token pool is used for bounties, incentives programs, marketing, and grants.","hero":"The SOL Token","may":"June Report","may-summ":"A recap of all token activity over the past two months","june":"July Report","june-summ":"Giveaway and Foundation token movement","july":"August Report","july-summ":"Giveaway and Foundation token movement","august":"September Report","september":"October Report","october":"November Report","november":"December Report","august-summ":"Foundation token movement","hero-context":"Powering the Solana blockchain","chat":"Chat with Us","learn-more":"Learn more about the token","custody":"Custody","wallet":"Wallet"},"primer":{"header":"Solana Primer","subheader":"Read through and complete the quiz to claim your prize","intro":"Solana is a high-speed single-layer blockchain, currently supporting peak capacity of 65k transactions per second and 400ms block times with over 50 nodes. It is specifically built to scale transaction throughput with Moore’s Law. There is no sharding required to achieve this throughput.","caption":"Solana\'s global performance visualized","former":"Founded by former Qualcomm, Intel, and Dropbox engineers in late-2017, Solana is a single-chain Proof-of-Stake protocol whose focus is on delivering scalability without sacrificing decentralisation or security.","scaling":"At the core of Solana’s scaling solution is a decentralised clock titled Proof-of-History (PoH), built to solve the problem of time within distributed networks.","background":"Background on Solana","moore":"The protocol is designed to scale together hardware and bandwidth improvements, with capacity expected to double every 2 years.","investors":"Development of the network was supported by fundraising of over $25 million from notable investors including Multicoin Capital, Foundation Capital, Distributed Global, CMCC, Blocktower Capital, NGC Capital and Rockaway Ventures.","tpartners":"Token Partners","mission":"Solana’s mission is to be the obvious choice for all high-growth and high-frequency blockchain applications, and to democratize the world’s financial systems."},"security":{"head":"Solana Security","info":"At Solana, one of our top priorities is the security and safety of the network. To further this focus, we welcome security researchers to submit reports through HackerOne, so the Solana team can evaluate and reward vulnerabilities.","guidelines":"Responsible Disclosure Guidelines","hackerone":"Solana has partnered with HackerOne for our vulnerability disclosure program. Notify Solana and provide all details of the vulnerabilities you find using the form provided by HackerOne below.","exploit":"Do not exploit a security issue you discover for any reason.","non-technical":"Do not conduct non-technical attacks such as social engineering, phishing, or unauthorized access to infrastructure and employees of Solana.","physical":"Do not test the physical security of Solana offices, employees, equipment, etc.","right":"By reporting a security bug or vulnerability, you give us the right to use your report for any purpose."},"referral":{"title":"Giveaway","random":"Random Winners","prizes":"SOL Prizes","cybertruck":"Cybertruck Giveaway","total":"Total","top":"Top Referrers","thanks":"Thank you for participating in the giveaway. Token distribution is currently underway.","adblock":"If you cannot see the signup form, turn off your adblocker.","typeform":"NOTE: You will not receive any SOL if you do not complete the","primer":"Primer","head":"Giveaway","subheader":"In partnership with Binance, to celebrate Solana\'s listing","mxc-subheader":"In partnership with MXC, to celebrate Solana\'s listing","bitmax-subheader":"In partnership with Bitmax, to celebrate Solana\'s listing","okex-subheader":"In partnership with OKEx, to celebrate Solana\'s listing","trust-subheader":"To celebrate Trust\'s Wallet integration of SPL tokens","staratlas-subheader":"Read the white paper and complete the quiz to be eligible for a prize","bitthumb-subheader":"Win up to ◎1,000 by registering, following Solana on social channels, and referring your friends to do the same!","ftx-subheader":"In partnership with FTX, to celebrate Solana\'s listing","huobi-subheader":"In partnership with Huobi, to celebrate Solana\'s listing","toko-subheader":"In partnership with Tokocrypto, to celebrate Solana\'s listing","gate-subheader":"In partnership with Gate, to celebrate Solana\'s voting","rewards":"Learn, Refer, Follow and Earn SOL.","rewards-copy":"Fill this form to register, get your referral code, and start competing.","rewards-copy-2":"Complete these steps to earn a reward and be eligible for the random drawing.","primer-head":"Take the Quiz","primer-copy":"Read the brief primer (below) on what makes Solana the first web-scale blockchain, and complete the short quiz.","telegram-head":"Join the Telegram","telegram-copy":"Submit your Telegram handle and join the Solana Telegram group (or one of the language-specific groups)","telegram-url":"https://t.me/solana","telegram-korea":"Join the Korean Telegram Group","newsletter-head":"Join the Newsletter","newsletter-copy":"Sign up for the newsletter to receive updates on new partnerships, features, and promotions.","deposit-head":"Net buy at least 5 SOL in the first two weeks after the FTX listing","deposit-copy":"Once SOL is listed on the FTX exchange, net buy at least 5 SOL. Net buy is defined as the sum of all buys on all SOL markets and SOL futures markets minus the sum of all sales on SOL spot markets and SOL futures markets.","depositokex-head":"Net buy at least 5 SOL in the first two weeks after the OKEx listing","depositokex-copy":"Once SOL is listed on the OKEx exchange, net buy at least 5 SOL. Net buy is defined as the sum of all buys on all SOL markets minus the sum of all sales on SOL spot markets.","cybertruck-head":"Every user who has completed steps 1 - 5 will receive one (1) entry into the lottery draw to win a Tesla Cybertruck.","cybertruck-copy":"Additionally, users can receive one further entry for every additional 5 SOL net bought on the FTX platform to a maximum of fifty (50) entries.","twitter-head":"Follow us on Twitter","twitter-copy":"Follow our Twitter for the latest updates, media content, and public announcements about Solana.","weibo-copy":"Alternatively: Weibo for Chinese users.","refer-head":"Refer at Least One Friend","refer-copy":"Share your link (from the form above) with others in your network.","medium-head":"Korea Medium (Optional)","medium-copy":"Follow our Korean Medium blog.","naver-head":"Naver (Optional)","naver-copy":"Subscribe to our Naver page."},"tds":{"context":"Now live! Solana’s incentivized testnet event. An opportunity to flex their validation skills, earn tokens, and secure the Solana network.","event":"The Event","questions":"Let’s answer your questions and dive right into it.","what":"What is it?","stages":"Solana’s Tour de SOL will be an event in stages, each stage focusing on a different performance capacity that will be required to be a validator on the network.","started":"Can I get started now?","get-started":"Yes – the first step is to join our live testnet. If you’re interested in participating in Tour de SOL, we <testnetLink>recommend you start exploring the testnet ASAP</testnetLink>. Have a look around, introduce yourself to the other nodes, make yourself at home. The <forumLink>forums are the best way to get up to date information on TdS</forumLink>. Here we have an open discussion with the community on what is going right and what needs to be fixed.","participate":"What will I need to participate?","requirements":"As of right now, there aren’t any technical requirements to start playing around on the testnet, have at it. Closer to TdS launch, we’ll be enabling GPU transaction verification which will give a huge TPS boost to validators with GPUs. Potential participants should plan on having their GPU hardware ready before the event starts. See our recommended Validator node specs <specsLink>here</specsLink> (specifically the “mid-range option” should be plenty of firepower).","updated":"Where can I stay updated about TdS?","updated-context":"Join our Discord for support from our team and to follow along for Tour de SOL updates and announcements (have a look in #validator-support). You can also find community support in our recently launched forums. TdS news will be announced on both channels so keep an eye out!","history":"History","gos":"Inspired by Cosmos’ Game of Stakes we loved the idea of getting early on in the project to help build out our global network.","readmore":"Read More","invite":"<announcementLink>Validators, replicators, hackers, and malicious actors alike — You’re invited to take part!</announcementLink> On current iterations of the Solana Testnet, a network of 200 physically distinct nodes supports a sustained throughput of more than 50,000 transactions per second when running with GPUs. These numbers make Solana the most performant permissionless blockchain in the world. Thanks to innovations including Proof of History, Parallel Processing, and Proof of Replication, we believe Solana to be the fastest while most secure blockchain — and now it’s time to empower the Solana community to prove it. <announcementLink>Read the full TDS announcement post here. </announcementLink>","ctaparticipate":"Ready to participate in Tour de SOL?","register":"Register for TdS","newsletter":"Not ready to become a validator? Keep in touch."},"press":{"hero":"Brand Kit","content":"Solana is building the fastest blockchain in the world. Every day, we solve problems of scale, decentralization, and privacy to create the best experience for blockchain users and developers. Our headquarters are located in Geneva, Switzerland, and we\'re backed by investors like Multicoin Capital, Slow Ventures, Foundation Capital, 500 Startups, and Abstract Ventures.","logos":"Full Brand Kit","logos-copy":"Download all variations of our logo in both PNG and SVG formats.","screenshots":"Screenshots","screenshots-copy":"Download various screenshots from product tests, launches, and active clusters.","team":"Creator Bios","team-copy":"The creators have a storied history. Take a look at their bios.","office":"Office Photos from the Creators","office-copy":"Solana Labs, the creators of the protocol, is headquartered in San Francisco, but has team members and community contributors from around the world.","download":"Download","view":"View"},"team":{"header":"The creators of the protocol hail from some of the best companies in the world.","head":"Built with time-tested principles of global distributed systems","context":"Solana was built with blood, sweat, tears, and experience from tech\'s most innovative companies","head-2":"High-performance blockchain, high-performance team.","head-2-context":"Solana is taking on one of tech\'s biggest challenges: scaling blockchain for global adoption.","sf":"Located in San Francisco","beyond":"and beyond.","team":"The Creators","hq":"Solana is headquartered in San Francisco, Boulder and San Diego. But we have contributors to code, marketing, and community on every continent.","from":"The creators of the protocol, Solana Labs, hail from some of the best companies in the world.","experience":"The creators of the protocol, Solana Labs, hail from some of the best companies in the world.","join":"Interested in opportunities to support the Solana network?","hit-up":"Reach out to some of these contributors.","apply":"Apply now","view-team":"View our Team","gtteam":"Go to Team"},"index":{"header":{"hero":"Build Crypto Apps that Scale","context":"Solana is a fast, secure, and censorship resistant blockchain providing the open infrastructure required for global adoption.","coinlist":"FTX has listed the SOL token! Enter to win a Cybertruck or up to ◎500.","hackathon":"Register today and join leaders from Compound, Aave, FTX, and more!"},"stats":{"last-global-benchmark":"Last global benchmark","pmt":"Block Height","validators":"Nodes","blocktimes":"Block Time","break":"Try to Break Solana","totaltransactions":"Total Transactions"},"innovations":{"core":"<emphasis>8 core innovations</emphasis> enable your business scale to billions of users and devices around the world","trilemma":"Don’t choose between scale, security, and decentralization. Solana has solved the trilemma for you. No sharding required. Here’s how.","poh":"Proof of History (PoH) →","poh-context":"A clock before consensus","tower":"Tower BFT →","tower-context":"A PoH-optimized version of PBFT","turbine":"Turbine →","turbine-context":"A block propagation protocol","gulfstream":"Gulf Stream →","gulfstream-context":"Mempool-less transaction forwarding protocol","sealevel":"Sealevel →","sealevel-context":"World’s first parallel smart contracts run-time","pipeline":"Pipeline →","pipeline-context":"Transaction processing unit for validation","cloudbreak":"Cloudbreak →","cloudbreak-context":"Horizontally-scaled accounts database","archivers":"Archivers →","archivers-context":"Distributed ledger storage"},"video":{"learn-more":"Learn more about Solana","watch-now":"Watch now"},"value":{"goodbye":"Say goodbye to high fees and slow confirmations. Solana is built for speed, without trade-offs.","scalable":"Scalable","leverage":"Solana leverages Proof of History and several other breakthrough innovations to allow the network to scale at the rate of Moore\'s Law.","low":"Low Cost","worry":"Never worry about rising fees as your user base grows. Solana is designed to keep fees low for applications with billions of users.","comp":"Composable","state":"Solana\'s single global state ensures composability between projects. Never deal with multiple shards or layer 2 systems."},"break":{"title":"Try to Break Solana","copy":"Solana can process 50k transactions per second. Don\'t believe us? Stress test the network to experience Solana\'s speed for yourself.","play":"Play Now"},"welcome":{"head":"The Solana community welcomes you","many":"There are many ways to contribute to the Solana ecosystem. Build an app, organize an event, or create educational resources to help others learn.","join":"Join the Community","apply":"Apply to the Collective"},"use-cases":{"vision":"Focus on your vision. If it’s decentralized, we’ve got you covered.","next-great":"Build the next great decentralized"},"investors":"Investors","videos":{"head":"Featured Videos","poh":"Proof of History Explained","fiveg":"How Solana Uniquely Enables 5G Billing and Virtual SIM","fiveg-description":"Listen to our CEO Anatoly discuss how Solana could be used to enable 5G mobile networks.","vinny":"Vinny Lingham - CEO of Civic & GP at Multicoin Capital","vinny-description":"Vinny discusses the rationale behind Multicoin\'s investment in Solana and shows his conviction with the Solana team.","poh-description":"The key enabler of Solana\'s record-breaking speed is our consensus mechanism, Proof of History. Learn how it works.","youtube":"YouTube","podcast":"Podcast","skale-podcast-recording":"SKALE Live Podcast Recording","future-of-defi":"The Future of DeFi with 0x, Chainlink, MakerDAO","future-of-defi-description":"Listen to some of the top personalities in the crypto industry discuss the past, present, and future of decentralized finance.","balaji":"Balaji Srinivasan - Angel Investor / Entrepreneur, Formerly the CTO of Coinbase and GP at a16z","balaji-description":"Balaji joins us on the Solana podcast to chat with our CEO, Anatoly Yakovenko.","marketshare":"Can Solana Seize Marketshare From Ethereum With Serum?","marketshare-desc":"Sam Bankman-Fried, CEO of FTX, and Anatoly Yakovenko, Creator of Solana, talk on the Unchained podcast."},"partners":"Join the fastest growing ecosystem in crypto","partners-sub":"The best projects in DeFi, Web3, and blockchain gaming choose to build on Solana for the long-term","press":"Press mentions","new":{"header":{"hero":"Powerful for developers. Fast for everyone.","context":"Solana is a  decentralized blockchain built to enable scalable, user-friendly apps for the world."},"alert":"Ignition Hackathon •  Up to $5 million in prizes & funding • Register and build now ->","breakpoint":"Watch events from Breakpoint, our annual conference ->","stats":{"validators":"Validator nodes","transactions":"Transactions per second","cost":"Avg. cost per transaction"},"hello-solana":{"hello-title":"Say hello","hello-text":"Learn more about Solana and see what makes it great.","button-text":"Watch video"},"scale":{"header":"Scale","sub-header":"for global adoption","text":"Integrate once and never worry about scaling again. Solana ensures composability between ecosystem projects by maintaining a single global state as the network scales. Never deal with fragmented Layer 2 systems or sharded chains."},"info-boxes":{"cost-header":"Low cost, forever","cost-text":"Solana\'s scalability ensures transactions remain less than $0.01 for both developers and users.","fast-header":"Fast, forever","fast-text":"Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network."},"decentralized":{"header":"Decentralized","sub-header":"and unstoppable","text":"Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped."},"get-involved":{"header":"Ways to get involved","validators-title":"Become a Validator","validators-text":"Get started with the server program, delegation, or staking.","developers-title":"Developer Resources","developers-text":"See the get started guide, videos, tutorials, SDKs, reference implementations, and more.","community-title":"Solana Community","community-text":"There\'s something for everybody. Follow along, chat on Discord, or read up on what we’re doing.","button":"Get Started"},"partners":"Join the fastest growing ecosystem","partners-sub":"Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with over 400 projects spanning DeFi, NFTs, Web3 and more.","validators":{"header":"Secure the ledger. Earn SOL.","sub-header":"Decentralize the network by providing computing resources.","become-validator":"Become a validator","cards":{"number-text":"Current number of validators on mainnet","nakamoto-text":"Current Superminority"},"definition":{"title":"Validators form the backbone of Solana’s network.","text":"By processing transactions and participating in consensus, each validator helps make Solana the most censorship resistant and highest-performance blockchain network in the world."},"rewards":{"header":"Validator Rewards","cards":{"protocol-header":"Protocol Based Rewards","protocol-text":"Issuances from a global, protocol-defined, inflation rate. These rewards are delivered on top of earnings from transaction fees.","staking-header":"Staking","staking-text":"Stakers are rewarded for helping to validate the ledger. They do this by delegating their stake to validator nodes. Those validators do the legwork of replaying the ledger and send votes to a per-node vote account to which stakers can delegate their stakes. The rest of the cluster uses those stake-weighted votes to select a block when forks arise.","stake-pool-header":"Stake Pools","stake-pool-text":"Stake Pools are a liquid staking solution that promote censorship resistance, decentralization, and the growth of DeFi on Solana."}},"getting-started":{"header":"Getting Started","cards":{"docs-header":"Get started","docs-text":"Go here for documentation related to all things Validator, from validator requirements, to troubleshooting.","explorer-header":"Validators explorer","explorer-text":"View the current list of validators, their ranking by stake amount, and information about commission below.","explorer-btn":"View Validators","server-header":"Server Program","server-text":"The Solana Foundation Server Program is designed to help new validators get started on the Solana network by providing access to servers at discounted prices through our partners.","delegation-header":"Delegation Program","delegation-text":"Foundation Delegation participants are eligible to receive a delegation from the Solana Foundation.","delegation-btn":"Dashboard"}}},"footer":{"heading":"Get more out of Solana","chat":"Chat on Discord"}}},"interop":{"head":"Solana Interoperability","text":"Resources dedicated to supporting multi-chain operations with Solana.","cta":"Join or Contribute","cross-chain":"Cross-Chain Bridges","cross-chain-text":"To support our vision of a multi-chain world, we\'re working with some of the most talented teams in the industry to develop standards for cross chain activities.","web-wallets":"Web Wallets","web-wallets-text":"Solana will soon be integrated into a web wallet similar to Metamask on the Chrome Web Store, thanks to the dFuse team. We\'re exploring more ways to include Solana in popular wallet interfaces.","data-sources":"Data Sources","data-sources-text":"From the dedicated Solana Explorer to network metrics on Solanabeach, we continue to explore how to best provide on-chain data via simple APIs.","dfuse-head":"Solana Wallet","dfuse-text":"A Chrome Extension to interact with the Solana network","keep-head":"tBTC Integration","keep-text":"A cross chain swap demo with tBTC","solflare-head":"Web-based Solana Wallet","solflare-text":"A web interface for Ledger Live supporting staking","torus-head":"OAuth Wallet","torus-text":"A web wallet with OAuth integration and cookie support","coin98-head":"Multi-Sig Support","coin98-text":"Integrating multisig standards from the Bitcoin and Litecoin ecosystem","certus-head":"Wormhole","certus-text":"Building a SOL to ETH bridge","obsidian-head":"BTC/ETH Bridges","obsidian-text":"Interact with the BTC and ETH networks","serum-head":"Serum Wallet","serum-text":"A web wallet with web integration and cookie support","math-head":"Web Wallet Infrastructure","math-text":"Easily interact with SOL through web extension APIs","ren-head":"Multichain","ren-text":"An abstraction over multiple different underlying blockchains"},"about":"About","footer":{"copyright":"© Solana Labs, Inc.","copyright-foundation":"© Solana Foundation.","allrights":"All rights reserved.","build":"Build","guides":"Guides","blog":"Blog","learn":"Learn","podcast":"Podcast","team":"Team","videos":"Videos","events":"Events","faq":"FAQ","apply":"Apply","auction":"Auction","tds":"Tour de SOL","accelerator":"Grants","solanabeach":"Network Stats","break":"Break Solana","collective":"Collective","careers":"Careers","docs":"Docs","github":"GitHub","chat":"Chat","other":"Other","disclaimer":"Disclaimer","foundation":"Foundation","presskit":"Press & Brand","status":"Status"},"ecosystem":{"title":"The best companies build on Solana","sub":"From DeFi and Web3 applications to games and NFTs, browse over 350 projects built on Solana.","new":"What’s new","winners":"Hackathon winners","slideshow":{"defi":{"label":"DEFI","title":"FTX and Alameda Research chose Solana for speed.","text":"Serum is a complete, non-custodial spot and derivatives exchange running on an on-chain central limit order book (CLOB) on Solana’s mainnet. Yep, you read that right.","info-left":"$4.3B","info-left-sub":"Transacted since inception","info-right":"$80M","info-right-sub":"Average daily volume"},"stablecoins":{"label":"STABLECOINS","title":"USDC chose Solana for fast, global settlement.","text":"Centre, a Circle & Coinbase consortium, has developed one of crypto‘s fastest growing stablecoins. Now it can be a transferred at the speed of Solana.","info-left-sub":"Issued on Solana","info-right":"$50M","info-right-sub":"Average issued daily"},"nft":{"label":"NFTs","title":"Metaplex chose Solana to elevate creators.","text":"Metaplex empowers creators to build a direct relationship with their audience through custom NFT storefronts and insanely low cost minting, only possible on Solana.","info-left":"$0.34","info-left-sub":"Average Mint cost","info-right":"$3.01","info-right-sub":"Average auction cost"},"web3":{"label":"WEB3","title":"Audius chose Solana to scale.","text":"Audius chose to migrate to Solana because of its scalability and “battle-tested architecture”. Building on Solana gives the Audius community the “confidence that Audius can scale with ease.”","info-left":"5M","info-left-sub":"Monthly active users"}},"search":{"placeholder":"Find projects","search":"Search"},"tags":{"title":"Tags","all":"All"},"new-projects":"New Projects","project-count":"You\'re seeing {projectsVisible} of {totalProjects} projects","cards":{"ecosystem-card-title":"Join the ecosystem","ecosystem-card-text":"Explore the docs and get started building.","ecosystem-card-btn":"Start exploring","project-title":"Submit your project","project-text":"Add your project in this community-maintained repository.","project-btn":"Submit info"},"social-link-text":"Social Links"},"conference":{"title":"It\'s show time.","savethedate":"Save the date.","subtitle":"Lisbon, Portugal","date":"November 5-10, 2021","joinwaitlist":"Get Updates"},"rustconf":{"title":"You’re on the edge of something great.","subtitle":"Welcome home, Rust developers. Solana is the perfect place to learn about the future of Rust in the blockchain world.","submit-profile":"Submit Profile","rust-card":{"title":"Solana for Rust Developers","text":"Solana is the most performant blockchain in the world — and Rust is what makes it possible. From parallelized transaction processing to easy debugging and scalability, Rust’s innovations are at the very core of what Solana does best."},"ignition-card":{"title":"Ignition: A Global Solana Hackathon.","text":"It’s time for the future to take off. Join the hackathon with $5 million in prizes and seed funding across four tracks: DeFi (decentralized finance), gaming, Web3, and art and collectables. What will you build?","btn-text":"Join Now"},"jobs":{"title":"Rust Jobs","subtitle":"The Solana Ecosystem is exploding and the demand for fulltime Rust developers is at an all-time high. Join the most exciting thing in crypto. Find your opportunity below.","btn-text":"All Job Opportunities","btn-apply":"Apply Now","list":{"0":{"title":"Systems Engineer","location":"Remote","link":"https://boards.greenhouse.io/solana/jobs/4025946004"},"1":{"title":"Reliability Engineer","location":"Remote","link":"https://boards.greenhouse.io/pythnetwork/jobs/3229228"},"2":{"title":"Rust Engineer","location":"Remote","link":"https://jobs.solana.com/companies/psyoptions/jobs/5215445-rust-engineer"},"3":{"title":"Smart Contract Engineer","location":"Remote","link":"https://jobs.solana.com/companies/orca/jobs/5998531-smart-contract-engineer"}}},"smart-contract":{"title":"Rust Smart Contract Auditing","box-1":"Help the ecosystem out! With so many programs being built on the blockchain there is a huge need for audits to make sure programs are safe.","box-2":"Share your knowledge, join the community, and improve the space.","box-3":"If you’d like to perform an audit as a contractor, contact Solana Labs."},"typeform-title":"Want to help out in the future? Keep in touch.","community":{"title":"Join the Solana Community","discord":"Solana Discord Support","forums":"Solana Forums","solhack-discord":"SolHack Discord (community)","solhack-training":"SolHack Training (community)"}},"shared":{"community":{"title":"Join the Community","discord":"Solana Discord Support","forums":"Solana Forums","solhack-discord":"SolHack Discord (community)","solhack-training":"SolHack Training (community)","cta":"Submit request"}}}')
        }
    }
]);
//# sourceMappingURL=commons-f1c3fc216e87740da077.js.map