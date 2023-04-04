"use strict";
(self.webpackChunksolana_com = self.webpackChunksolana_com || []).push([
    [9820], {
        58338: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return we
                }
            });
            var o, r = t(19756),
                a = t(22122),
                i = t(69931),
                s = t.n(i),
                l = t(9351),
                c = t(23004),
                d = t(67216),
                u = t(30099);

            function f(e) {
                if ((!o && 0 !== o || e) && c.Z) {
                    var n = document.createElement("div");
                    n.style.position = "absolute", n.style.top = "-9999px", n.style.width = "50px", n.style.height = "50px", n.style.overflow = "scroll", document.body.appendChild(n), o = n.offsetWidth - n.clientWidth, document.body.removeChild(n)
                }
                return o
            }
            var m = t(92460),
                v = t(33112),
                h = t(67294);

            function p(e) {
                var n, t, o = (n = e, (t = (0, h.useRef)(n)).current = n, t);
                (0, h.useEffect)((function() {
                    return function() {
                        return o.current()
                    }
                }), [])
            }
            var g = t(86914);

            function E(e) {
                void 0 === e && (e = (0, d.Z)());
                try {
                    var n = e.activeElement;
                    return n && n.nodeName ? n : null
                } catch (t) {
                    return e.body
                }
            }
            var y = t(90424),
                b = t(72950),
                N = t(73935),
                w = t(83252),
                Z = t(34436),
                C = t(11132);

            function k(e, n) {
                e.classList ? e.classList.add(n) : (0, C.Z)(e, n) || ("string" == typeof e.className ? e.className = e.className + " " + n : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + n))
            }

            function x(e, n) {
                return e.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }

            function R(e, n) {
                e.classList ? e.classList.remove(n) : "string" == typeof e.className ? e.className = x(e.className, n) : e.setAttribute("class", x(e.className && e.className.baseVal || "", n))
            }
            var O = t(73164);

            function S(e) {
                return "window" in e && e.window === e ? e : "nodeType" in (n = e) && n.nodeType === document.DOCUMENT_NODE && e.defaultView || !1;
                var n
            }

            function F(e) {
                var n;
                return S(e) || (n = e) && "body" === n.tagName.toLowerCase() ? function(e) {
                    var n = S(e) ? (0, d.Z)() : (0, d.Z)(e),
                        t = S(e) || n.defaultView;
                    return n.body.clientWidth < t.innerWidth
                }(e) : e.scrollHeight > e.clientHeight
            }
            var T = ["template", "script", "style"],
                A = function(e, n, t) {
                    [].forEach.call(e.children, (function(e) {
                        var o, r, a; - 1 === n.indexOf(e) && (r = (o = e).nodeType, a = o.tagName, 1 === r && -1 === T.indexOf(a.toLowerCase())) && t(e)
                    }))
                };

            function D(e, n) {
                n && (e ? n.setAttribute("aria-hidden", "true") : n.removeAttribute("aria-hidden"))
            }
            var H, M = function() {
                    function e(e) {
                        var n = void 0 === e ? {} : e,
                            t = n.hideSiblingNodes,
                            o = void 0 === t || t,
                            r = n.handleContainerOverflow,
                            a = void 0 === r || r;
                        this.hideSiblingNodes = void 0, this.handleContainerOverflow = void 0, this.modals = void 0, this.containers = void 0, this.data = void 0, this.scrollbarSize = void 0, this.hideSiblingNodes = o, this.handleContainerOverflow = a, this.modals = [], this.containers = [], this.data = [], this.scrollbarSize = f()
                    }
                    var n = e.prototype;
                    return n.isContainerOverflowing = function(e) {
                        var n = this.data[this.containerIndexFromModal(e)];
                        return n && n.overflowing
                    }, n.containerIndexFromModal = function(e) {
                        return n = this.data, t = function(n) {
                            return -1 !== n.modals.indexOf(e)
                        }, o = -1, n.some((function(e, n) {
                            return !!t(e, n) && (o = n, !0)
                        })), o;
                        var n, t, o
                    }, n.setContainerStyle = function(e, n) {
                        var t = {
                            overflow: "hidden"
                        };
                        e.style = {
                            overflow: n.style.overflow,
                            paddingRight: n.style.paddingRight
                        }, e.overflowing && (t.paddingRight = parseInt((0, O.Z)(n, "paddingRight") || "0", 10) + this.scrollbarSize + "px"), (0, O.Z)(n, t)
                    }, n.removeContainerStyle = function(e, n) {
                        Object.assign(n.style, e.style)
                    }, n.add = function(e, n, t) {
                        var o = this.modals.indexOf(e),
                            r = this.containers.indexOf(n);
                        if (-1 !== o) return o;
                        if (o = this.modals.length, this.modals.push(e), this.hideSiblingNodes && function(e, n) {
                                var t = n.dialog,
                                    o = n.backdrop;
                                A(e, [t, o], (function(e) {
                                    return D(!0, e)
                                }))
                            }(n, e), -1 !== r) return this.data[r].modals.push(e), o;
                        var a = {
                            modals: [e],
                            classes: t ? t.split(/\s+/) : [],
                            overflowing: F(n)
                        };
                        return this.handleContainerOverflow && this.setContainerStyle(a, n), a.classes.forEach(k.bind(null, n)), this.containers.push(n), this.data.push(a), o
                    }, n.remove = function(e) {
                        var n = this.modals.indexOf(e);
                        if (-1 !== n) {
                            var t = this.containerIndexFromModal(e),
                                o = this.data[t],
                                r = this.containers[t];
                            if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(n, 1), 0 === o.modals.length) o.classes.forEach(R.bind(null, r)), this.handleContainerOverflow && this.removeContainerStyle(o, r), this.hideSiblingNodes && function(e, n) {
                                var t = n.dialog,
                                    o = n.backdrop;
                                A(e, [t, o], (function(e) {
                                    return D(!1, e)
                                }))
                            }(r, e), this.containers.splice(t, 1), this.data.splice(t, 1);
                            else if (this.hideSiblingNodes) {
                                var a = o.modals[o.modals.length - 1],
                                    i = a.backdrop;
                                D(!1, a.dialog), D(!1, i)
                            }
                        }
                    }, n.isTopModal = function(e) {
                        return !!this.modals.length && this.modals[this.modals.length - 1] === e
                    }, e
                }(),
                P = function(e) {
                    var n;
                    return "undefined" == typeof document ? null : null == e ? (0, d.Z)().body : ("function" == typeof e && (e = e()), e && "current" in e && (e = e.current), null != (n = e) && n.nodeType && e || null)
                };

            function B(e) {
                var n = e || (H || (H = new M), H),
                    t = (0, h.useRef)({
                        dialog: null,
                        backdrop: null
                    });
                return Object.assign(t.current, {
                    add: function(e, o) {
                        return n.add(t.current, e, o)
                    },
                    remove: function() {
                        return n.remove(t.current)
                    },
                    isTopModal: function() {
                        return n.isTopModal(t.current)
                    },
                    setDialogRef: (0, h.useCallback)((function(e) {
                        t.current.dialog = e
                    }), []),
                    setBackdropRef: (0, h.useCallback)((function(e) {
                        t.current.backdrop = e
                    }), [])
                })
            }
            var I = (0, h.forwardRef)((function(e, n) {
                var t = e.show,
                    o = void 0 !== t && t,
                    i = e.role,
                    s = void 0 === i ? "dialog" : i,
                    l = e.className,
                    d = e.style,
                    u = e.children,
                    f = e.backdrop,
                    m = void 0 === f || f,
                    g = e.keyboard,
                    C = void 0 === g || g,
                    k = e.onBackdropClick,
                    x = e.onEscapeKeyDown,
                    R = e.transition,
                    O = e.backdropTransition,
                    S = e.autoFocus,
                    F = void 0 === S || S,
                    T = e.enforceFocus,
                    A = void 0 === T || T,
                    D = e.restoreFocus,
                    H = void 0 === D || D,
                    M = e.restoreFocusOptions,
                    I = e.renderDialog,
                    L = e.renderBackdrop,
                    z = void 0 === L ? function(e) {
                        return h.createElement("div", e)
                    } : L,
                    j = e.manager,
                    _ = e.container,
                    K = e.containerClassName,
                    U = e.onShow,
                    V = e.onHide,
                    W = void 0 === V ? function() {} : V,
                    $ = e.onExit,
                    q = e.onExited,
                    G = e.onExiting,
                    J = e.onEnter,
                    Q = e.onEntering,
                    X = e.onEntered,
                    Y = (0, r.Z)(e, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]),
                    ee = function(e, n) {
                        var t = (0, h.useState)((function() {
                                return P(e)
                            })),
                            o = t[0],
                            r = t[1];
                        if (!o) {
                            var a = P(e);
                            a && r(a)
                        }
                        return (0, h.useEffect)((function() {
                            n && o && n(o)
                        }), [n, o]), (0, h.useEffect)((function() {
                            var n = P(e);
                            n !== o && r(n)
                        }), [e, o]), o
                    }(_),
                    ne = B(j),
                    te = (0, w.Z)(),
                    oe = (0, Z.Z)(o),
                    re = (0, h.useState)(!o),
                    ae = re[0],
                    ie = re[1],
                    se = (0, h.useRef)(null);
                (0, h.useImperativeHandle)(n, (function() {
                    return ne
                }), [ne]), c.Z && !oe && o && (se.current = E()), R || o || ae ? o && ae && ie(!1) : ie(!0);
                var le = (0, v.Z)((function() {
                        if (ne.add(ee, K), ve.current = (0, b.Z)(document, "keydown", fe), me.current = (0, b.Z)(document, "focus", (function() {
                                return setTimeout(de)
                            }), !0), U && U(), F) {
                            var e = E(document);
                            ne.dialog && e && !(0, y.Z)(ne.dialog, e) && (se.current = e, ne.dialog.focus())
                        }
                    })),
                    ce = (0, v.Z)((function() {
                        var e;
                        (ne.remove(), null == ve.current || ve.current(), null == me.current || me.current(), H) && (null == (e = se.current) || null == e.focus || e.focus(M), se.current = null)
                    }));
                (0, h.useEffect)((function() {
                    o && ee && le()
                }), [o, ee, le]), (0, h.useEffect)((function() {
                    ae && ce()
                }), [ae, ce]), p((function() {
                    ce()
                }));
                var de = (0, v.Z)((function() {
                        if (A && te() && ne.isTopModal()) {
                            var e = E();
                            ne.dialog && e && !(0, y.Z)(ne.dialog, e) && ne.dialog.focus()
                        }
                    })),
                    ue = (0, v.Z)((function(e) {
                        e.target === e.currentTarget && (null == k || k(e), !0 === m && W())
                    })),
                    fe = (0, v.Z)((function(e) {
                        C && 27 === e.keyCode && ne.isTopModal() && (null == x || x(e), e.defaultPrevented || W())
                    })),
                    me = (0, h.useRef)(),
                    ve = (0, h.useRef)(),
                    he = R;
                if (!ee || !(o || he && !ae)) return null;
                var pe = (0, a.Z)({
                        role: s,
                        ref: ne.setDialogRef,
                        "aria-modal": "dialog" === s || void 0
                    }, Y, {
                        style: d,
                        className: l,
                        tabIndex: -1
                    }),
                    ge = I ? I(pe) : h.createElement("div", pe, h.cloneElement(u, {
                        role: "document"
                    }));
                he && (ge = h.createElement(he, {
                    appear: !0,
                    unmountOnExit: !0,
                    in: !!o,
                    onExit: $,
                    onExiting: G,
                    onExited: function() {
                        ie(!0);
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        null == q || q.apply(void 0, n)
                    },
                    onEnter: J,
                    onEntering: Q,
                    onEntered: X
                }, ge));
                var Ee = null;
                if (m) {
                    var ye = O;
                    Ee = z({
                        ref: ne.setBackdropRef,
                        onClick: ue
                    }), ye && (Ee = h.createElement(ye, {
                        appear: !0,
                        in: !!o
                    }, Ee))
                }
                return h.createElement(h.Fragment, null, N.createPortal(h.createElement(h.Fragment, null, Ee, ge), ee))
            }));
            I.displayName = "Modal";
            var L, z = Object.assign(I, {
                    Manager: M
                }),
                j = (t(42473), t(41788)),
                _ = t(60930),
                K = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                U = ".sticky-top",
                V = ".navbar-toggler",
                W = function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }(0, j.Z)(n, e);
                    var t = n.prototype;
                    return t.adjustAndStore = function(e, n, t) {
                        var o, r = n.style[e];
                        n.dataset[e] = r, (0, O.Z)(n, ((o = {})[e] = parseFloat((0, O.Z)(n, e)) + t + "px", o))
                    }, t.restore = function(e, n) {
                        var t, o = n.dataset[e];
                        void 0 !== o && (delete n.dataset[e], (0, O.Z)(n, ((t = {})[e] = o, t)))
                    }, t.setContainerStyle = function(n, t) {
                        var o = this;
                        if (e.prototype.setContainerStyle.call(this, n, t), n.overflowing) {
                            var r = f();
                            (0, _.Z)(t, K).forEach((function(e) {
                                return o.adjustAndStore("paddingRight", e, r)
                            })), (0, _.Z)(t, U).forEach((function(e) {
                                return o.adjustAndStore("marginRight", e, -r)
                            })), (0, _.Z)(t, V).forEach((function(e) {
                                return o.adjustAndStore("marginRight", e, r)
                            }))
                        }
                    }, t.removeContainerStyle = function(n, t) {
                        var o = this;
                        e.prototype.removeContainerStyle.call(this, n, t), (0, _.Z)(t, K).forEach((function(e) {
                            return o.restore("paddingRight", e)
                        })), (0, _.Z)(t, U).forEach((function(e) {
                            return o.restore("marginRight", e)
                        })), (0, _.Z)(t, V).forEach((function(e) {
                            return o.restore("marginRight", e)
                        }))
                    }, n
                }(M),
                $ = t(26927),
                q = t(98240),
                G = t(96861),
                J = ["className", "children"],
                Q = ((L = {})[$.d0] = "show", L[$.cn] = "show", L),
                X = h.forwardRef((function(e, n) {
                    var t = e.className,
                        o = e.children,
                        i = (0, r.Z)(e, J),
                        l = (0, h.useCallback)((function(e) {
                            (0, G.Z)(e), i.onEnter && i.onEnter(e)
                        }), [i]);
                    return h.createElement($.ZP, (0, a.Z)({
                        ref: n,
                        addEndListener: q.Z
                    }, i, {
                        onEnter: l
                    }), (function(e, n) {
                        return h.cloneElement(o, (0, a.Z)({}, n, {
                            className: s()("fade", t, o.props.className, Q[e])
                        }))
                    }))
                }));
            X.defaultProps = { in: !1,
                timeout: 300,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1
            }, X.displayName = "Fade";
            var Y = X,
                ee = t(22665),
                ne = (0, ee.Z)("modal-body"),
                te = h.createContext({
                    onHide: function() {}
                }),
                oe = t(99385),
                re = ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"],
                ae = h.forwardRef((function(e, n) {
                    var t = e.bsPrefix,
                        o = e.className,
                        i = e.contentClassName,
                        l = e.centered,
                        c = e.size,
                        d = e.children,
                        u = e.scrollable,
                        f = (0, r.Z)(e, re),
                        m = (t = (0, oe.vE)(t, "modal")) + "-dialog";
                    return h.createElement("div", (0, a.Z)({}, f, {
                        ref: n,
                        className: s()(m, o, c && t + "-" + c, l && m + "-centered", u && m + "-scrollable")
                    }), h.createElement("div", {
                        className: s()(t + "-content", i)
                    }, d))
                }));
            ae.displayName = "ModalDialog";
            var ie = ae,
                se = (0, ee.Z)("modal-footer"),
                le = ["label", "onClick", "className"],
                ce = h.forwardRef((function(e, n) {
                    var t = e.label,
                        o = e.onClick,
                        i = e.className,
                        l = (0, r.Z)(e, le);
                    return h.createElement("button", (0, a.Z)({
                        ref: n,
                        type: "button",
                        className: s()("close", i),
                        onClick: o
                    }, l), h.createElement("span", {
                        "aria-hidden": "true"
                    }, "×"), h.createElement("span", {
                        className: "sr-only"
                    }, t))
                }));
            ce.displayName = "CloseButton", ce.defaultProps = {
                label: "Close"
            };
            var de = ce,
                ue = ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"],
                fe = h.forwardRef((function(e, n) {
                    var t = e.bsPrefix,
                        o = e.closeLabel,
                        i = e.closeButton,
                        l = e.onHide,
                        c = e.className,
                        d = e.children,
                        u = (0, r.Z)(e, ue);
                    t = (0, oe.vE)(t, "modal-header");
                    var f = (0, h.useContext)(te),
                        m = (0, v.Z)((function() {
                            f && f.onHide(), l && l()
                        }));
                    return h.createElement("div", (0, a.Z)({
                        ref: n
                    }, u, {
                        className: s()(c, t)
                    }), d, i && h.createElement(de, {
                        label: o,
                        onClick: m
                    }))
                }));
            fe.displayName = "ModalHeader", fe.defaultProps = {
                closeLabel: "Close",
                closeButton: !1
            };
            var me, ve = fe,
                he = (0, t(78881).Z)("h4"),
                pe = (0, ee.Z)("modal-title", {
                    Component: he
                }),
                ge = ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"],
                Ee = {
                    show: !1,
                    backdrop: !0,
                    keyboard: !0,
                    autoFocus: !0,
                    enforceFocus: !0,
                    restoreFocus: !0,
                    animation: !0,
                    dialogAs: ie
                };

            function ye(e) {
                return h.createElement(Y, (0, a.Z)({}, e, {
                    timeout: null
                }))
            }

            function be(e) {
                return h.createElement(Y, (0, a.Z)({}, e, {
                    timeout: null
                }))
            }
            var Ne = h.forwardRef((function(e, n) {
                var t = e.bsPrefix,
                    o = e.className,
                    i = e.style,
                    E = e.dialogClassName,
                    y = e.contentClassName,
                    b = e.children,
                    N = e.dialogAs,
                    w = e["aria-labelledby"],
                    Z = e.show,
                    C = e.animation,
                    k = e.backdrop,
                    x = e.keyboard,
                    R = e.onEscapeKeyDown,
                    O = e.onShow,
                    S = e.onHide,
                    F = e.container,
                    T = e.autoFocus,
                    A = e.enforceFocus,
                    D = e.restoreFocus,
                    H = e.restoreFocusOptions,
                    M = e.onEntered,
                    P = e.onExit,
                    B = e.onExiting,
                    I = e.onEnter,
                    L = e.onEntering,
                    j = e.onExited,
                    _ = e.backdropClassName,
                    K = e.manager,
                    U = (0, r.Z)(e, ge),
                    V = (0, h.useState)({}),
                    $ = V[0],
                    q = V[1],
                    G = (0, h.useState)(!1),
                    J = G[0],
                    Q = G[1],
                    X = (0, h.useRef)(!1),
                    Y = (0, h.useRef)(!1),
                    ee = (0, h.useRef)(null),
                    ne = (0, m.Z)(),
                    re = ne[0],
                    ae = ne[1],
                    ie = (0, v.Z)(S);
                t = (0, oe.vE)(t, "modal"), (0, h.useImperativeHandle)(n, (function() {
                    return {
                        get _modal() {
                            return re
                        }
                    }
                }), [re]);
                var se = (0, h.useMemo)((function() {
                    return {
                        onHide: ie
                    }
                }), [ie]);

                function le() {
                    return K || (me || (me = new W), me)
                }

                function ce(e) {
                    if (c.Z) {
                        var n = le().isContainerOverflowing(re),
                            t = e.scrollHeight > (0, d.Z)(e).documentElement.clientHeight;
                        q({
                            paddingRight: n && !t ? f() : void 0,
                            paddingLeft: !n && t ? f() : void 0
                        })
                    }
                }
                var de = (0, v.Z)((function() {
                    re && ce(re.dialog)
                }));
                p((function() {
                    (0, u.Z)(window, "resize", de), ee.current && ee.current()
                }));
                var ue = function() {
                        X.current = !0
                    },
                    fe = function(e) {
                        X.current && re && e.target === re.dialog && (Y.current = !0), X.current = !1
                    },
                    ve = function() {
                        Q(!0), ee.current = (0, g.Z)(re.dialog, (function() {
                            Q(!1)
                        }))
                    },
                    he = function(e) {
                        "static" !== k ? Y.current || e.target !== e.currentTarget ? Y.current = !1 : S() : function(e) {
                            e.target === e.currentTarget && ve()
                        }(e)
                    },
                    pe = (0, h.useCallback)((function(e) {
                        return h.createElement("div", (0, a.Z)({}, e, {
                            className: s()(t + "-backdrop", _, !C && "show")
                        }))
                    }), [C, _, t]),
                    Ee = (0, a.Z)({}, i, $);
                C || (Ee.display = "block");
                return h.createElement(te.Provider, {
                    value: se
                }, h.createElement(z, {
                    show: Z,
                    ref: ae,
                    backdrop: k,
                    container: F,
                    keyboard: !0,
                    autoFocus: T,
                    enforceFocus: A,
                    restoreFocus: D,
                    restoreFocusOptions: H,
                    onEscapeKeyDown: function(e) {
                        x || "static" !== k ? x && R && R(e) : (e.preventDefault(), ve())
                    },
                    onShow: O,
                    onHide: S,
                    onEnter: function(e) {
                        e && (e.style.display = "block", ce(e));
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
                        I && I.apply(void 0, [e].concat(t))
                    },
                    onEntering: function(e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
                        L && L.apply(void 0, [e].concat(t)), (0, l.ZP)(window, "resize", de)
                    },
                    onEntered: M,
                    onExit: function(e) {
                        ee.current && ee.current();
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
                        P && P.apply(void 0, [e].concat(t))
                    },
                    onExiting: B,
                    onExited: function(e) {
                        e && (e.style.display = "");
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
                        j && j.apply(void 0, t), (0, u.Z)(window, "resize", de)
                    },
                    manager: le(),
                    containerClassName: t + "-open",
                    transition: C ? ye : void 0,
                    backdropTransition: C ? be : void 0,
                    renderBackdrop: pe,
                    renderDialog: function(e) {
                        return h.createElement("div", (0, a.Z)({
                            role: "dialog"
                        }, e, {
                            style: Ee,
                            className: s()(o, t, J && t + "-static"),
                            onClick: k ? he : void 0,
                            onMouseUp: fe,
                            "aria-labelledby": w
                        }), h.createElement(N, (0, a.Z)({}, U, {
                            onMouseDown: ue,
                            className: E,
                            contentClassName: y
                        }), b))
                    }
                }))
            }));
            Ne.displayName = "Modal", Ne.defaultProps = Ee, Ne.Body = ne, Ne.Header = ve, Ne.Title = pe, Ne.Footer = se, Ne.Dialog = ie, Ne.TRANSITION_DURATION = 300, Ne.BACKDROP_TRANSITION_DURATION = 150;
            var we = Ne
        },
        78881: function(e, n, t) {
            var o = t(22122),
                r = t(67294),
                a = t(69931),
                i = t.n(a);
            n.Z = function(e) {
                return r.forwardRef((function(n, t) {
                    return r.createElement("div", (0, o.Z)({}, n, {
                        ref: t,
                        className: i()(n.className, e)
                    }))
                }))
            }
        }
    }
]);
//# sourceMappingURL=a178838556bf8aee026f563757fda41b3376a954-2f56a0dc131893cead78.js.map