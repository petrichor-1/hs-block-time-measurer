/**
 * Hopscotch Technologies
 * Webplayer v2.2.3 - 2023/03/23 (production)
 */
let PETRICHOR_BLOCK_PERFORMANCE_STATS = {} //PETRICHOR-MOD start
function petrichorSummarizeEvents(events, sortByKey, shouldSortDescending) {
	sortByKey = sortByKey || "totalExecutionTime"
	if (shouldSortDescending === undefined)
		shouldSortDescending = true
	let summarizedBlocks = []
	for (const petrichorId in events) {
		if (Object.hasOwnProperty.call(events, petrichorId)) {
			const performanceEventsSummary = events[petrichorId];
			const summarizedBlock = {
				petrichorId: petrichorId,
				executionCount: performanceEventsSummary.executionCount,
				maximumExecutionTime: performanceEventsSummary.maxTime,
				minimumExecutionTime: performanceEventsSummary.minTime,
				totalExecutionTime: performanceEventsSummary.totalTime,
				averageExecutionTime: performanceEventsSummary.totalTime/performanceEventsSummary.executionCount
			}
			summarizedBlocks.push(summarizedBlock)
		}
	}
	return summarizedBlocks.sort((a,b) => {
		return (b[sortByKey] - a[sortByKey]) * (shouldSortDescending ? 1 : -1)
	})
}
let PETRICHOR_SCRIPT_PERFORMANCE_EVENTS = {}
let PETRICHOR_PARAMETER_PERFORMANCE_EVENTS = {}
//PETRICHOR-MOD end
console.log("Webplayer v2.2.3 - 2023/03/23 (production)");
! function(e) {
    var t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 50)
}([function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "__extends", (function() {
        return n
    })), r.d(t, "__assign", (function() {
        return o
    })), r.d(t, "__rest", (function() {
        return a
    })), r.d(t, "__decorate", (function() {
        return s
    })), r.d(t, "__param", (function() {
        return c
    })), r.d(t, "__metadata", (function() {
        return u
    })), r.d(t, "__awaiter", (function() {
        return l
    })), r.d(t, "__generator", (function() {
        return h
    })), r.d(t, "__createBinding", (function() {
        return p
    })), r.d(t, "__exportStar", (function() {
        return d
    })), r.d(t, "__values", (function() {
        return S
    })), r.d(t, "__read", (function() {
        return f
    })), r.d(t, "__spread", (function() {
        return g
    })), r.d(t, "__spreadArrays", (function() {
        return y
    })), r.d(t, "__spreadArray", (function() {
        return v
    })), r.d(t, "__await", (function() {
        return m
    })), r.d(t, "__asyncGenerator", (function() {
        return T
    })), r.d(t, "__asyncDelegator", (function() {
        return b
    })), r.d(t, "__asyncValues", (function() {
        return E
    })), r.d(t, "__makeTemplateObject", (function() {
        return H
    })), r.d(t, "__importStar", (function() {
        return w
    })), r.d(t, "__importDefault", (function() {
        return _
    })), r.d(t, "__classPrivateFieldGet", (function() {
        return C
    })), r.d(t, "__classPrivateFieldSet", (function() {
        return x
    }));
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var i = function(e, t) {
        return (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, t)
    };

    function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };

    function a(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
        }
        return r
    }

    function s(e, t, r, i) {
        var n, o = arguments.length,
            a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
        else
            for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
        return o > 3 && a && Object.defineProperty(t, r, a), a
    }

    function c(e, t) {
        return function(r, i) {
            t(r, i, e)
        }
    }

    function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function l(e, t, r, i) {
        return new(r || (r = Promise))((function(n, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }))
    }

    function h(e, t) {
        var r, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = a.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
    var p = Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
    };

    function d(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || p(t, e, r)
    }

    function S(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function f(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    }

    function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
        return e
    }

    function y() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var i = Array(e),
            n = 0;
        for (t = 0; t < r; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, n++) i[n] = o[a];
        return i
    }

    function v(e, t, r) {
        if (r || 2 === arguments.length)
            for (var i, n = 0, o = t.length; n < o; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    }

    function m(e) {
        return this instanceof m ? (this.v = e, this) : new m(e)
    }

    function T(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i, n = r.apply(e, t || []),
            o = [];
        return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
            return this
        }, i;

        function a(e) {
            n[e] && (i[e] = function(t) {
                return new Promise((function(r, i) {
                    o.push([e, t, r, i]) > 1 || s(e, t)
                }))
            })
        }

        function s(e, t) {
            try {
                (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(o[0][2], r)
            } catch (e) {
                l(o[0][3], e)
            }
            var r
        }

        function c(e) {
            s("next", e)
        }

        function u(e) {
            s("throw", e)
        }

        function l(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
    }

    function b(e) {
        var t, r;
        return t = {}, i("next"), i("throw", (function(e) {
            throw e
        })), i("return"), t[Symbol.iterator] = function() {
            return this
        }, t;

        function i(i, n) {
            t[i] = e[i] ? function(t) {
                return (r = !r) ? {
                    value: m(e[i](t)),
                    done: "return" === i
                } : n ? n(t) : t
            } : n
        }
    }

    function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = S(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function i(r) {
            t[r] = e[r] && function(t) {
                return new Promise((function(i, n) {
                    (function(e, t, r, i) {
                        Promise.resolve(i).then((function(t) {
                            e({
                                value: t,
                                done: r
                            })
                        }), t)
                    })(i, n, (t = e[r](t)).done, t.value)
                }))
            }
        }
    }

    function H(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }
    var O = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    };

    function w(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && p(t, e, r);
        return O(t, e), t
    }

    function _(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function C(e, t, r, i) {
        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e)
    }

    function x(e, t, r, i, n) {
        if ("m" === i) throw new TypeError("Private method is not writable");
        if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === i ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
    }
}, function(e, t, r) {
    "use strict";
    var i, n;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.blockTypeForLegacyEventType = t.HSEventType = t.HSBlockType = void 0,
        function(e) {
            e[e.WaitTilTimestamp = 19] = "WaitTilTimestamp", e[e.WaitUntilInputIsDone = 20] = "WaitUntilInputIsDone", e[e.None = 22] = "None", e[e.Move = 23] = "Move", e[e.Rotate = 24] = "Rotate", e[e.ChangeX = 27] = "ChangeX", e[e.ChangeY = 28] = "ChangeY", e[e.Scale = 29] = "Scale", e[e.Clear = 30] = "Clear", e[e.SetTrailWidth = 31] = "SetTrailWidth", e[e.SetTrailColor = 32] = "SetTrailColor", e[e.ChangeCostume = 33] = "ChangeCostume", e[e.ChangeSpeed = 34] = "ChangeSpeed", e[e.Wait = 35] = "Wait", e[e.SetOpacity = 36] = "SetOpacity", e[e.PenDown = 37] = "PenDown", e[e.PenUp = 38] = "PenUp", e[e.SetHeading = 39] = "SetHeading", e[e.SetText = 40] = "SetText", e[e.SetPosition = 41] = "SetPosition", e[e.SendToBack = 42] = "SendToBack", e[e.BringToFront = 43] = "BringToFront", e[e.ChangeVariable = 44] = "ChangeVariable", e[e.SetVariable = 45] = "SetVariable", e[e.MoveWithTrail = 46] = "MoveWithTrail", e[e.SetInvisibility = 47] = "SetInvisibility", e[e.Grow = 48] = "Grow", e[e.Shrink = 49] = "Shrink", e[e.Flip = 50] = "Flip", e[e.SetSize = 51] = "SetSize", e[e.PlaySound = 52] = "PlaySound", e[e.MakeAClone = 53] = "MakeAClone", e[e.SetColor = 54] = "SetColor", e[e.Destroy = 55] = "Destroy", e[e.SetImage = 56] = "SetImage", e[e.SetWidthAndHeight = 57] = "SetWidthAndHeight", e[e.SetZIndex = 58] = "SetZIndex", e[e.SetOriginXY = 59] = "SetOriginXY", e[e.SetCenterXY = 60] = "SetCenterXY", e[e.WaitSeconds = 61] = "WaitSeconds", e[e.PlaySoundSeconds = 62] = "PlaySoundSeconds", e[e.SaveInput = 63] = "SaveInput", e[e.SetTextToInput = 64] = "SetTextToInput", e[e.PlayNote = 65] = "PlayNote", e[e.SetTempo = 66] = "SetTempo", e[e.SetInstrument = 67] = "SetInstrument", e[e.OpenProject = 68] = "OpenProject", e[e.Comment = 69] = "Comment", e[e.SetBackground = 70] = "SetBackground", e[e.SetTrailCap = 71] = "SetTrailCap", e[e.ShowPopup = 72] = "ShowPopup", e[e.SetTrailOpacity = 73] = "SetTrailOpacity", e[e.LeaveATrail = 26] = "LeaveATrail", e[e.Repeat = 120] = "Repeat", e[e.RepeatForever = 121] = "RepeatForever", e[e.CheckOnceIf = 122] = "CheckOnceIf", e[e.Ability = 123] = "Ability", e[e.CheckIfElse = 124] = "CheckIfElse", e[e.ChangeScene = 125] = "ChangeScene", e[e.BroadcastMessage = 126] = "BroadcastMessage", e[e.RequestSeeds = 127] = "RequestSeeds", e[e.Random = 233] = "Random", e[e.XPos = 234] = "XPos", e[e.YPos = 235] = "YPos", e[e.Random110 = 236] = "Random110", e[e.Random1100 = 237] = "Random1100", e[e.Random11000 = 238] = "Random11000", e[e.Variable = 239] = "Variable", e[e.ConditionalOperatorEquals = 1e3] = "ConditionalOperatorEquals", e[e.ConditionalOperatorNotEquals = 1001] = "ConditionalOperatorNotEquals", e[e.ConditionalOperatorLessThan = 1002] = "ConditionalOperatorLessThan", e[e.ConditionalOperatorGreaterThan = 1003] = "ConditionalOperatorGreaterThan", e[e.ConditionalOperatorAnd = 1004] = "ConditionalOperatorAnd", e[e.ConditionalOperatorOr = 1005] = "ConditionalOperatorOr", e[e.ConditionalOperatorGreaterThanOrEqualTo = 1006] = "ConditionalOperatorGreaterThanOrEqualTo", e[e.ConditionalOperatorLessThanOrEqualTo = 1007] = "ConditionalOperatorLessThanOrEqualTo", e[e.ConditionalOperatorMatches = 1008] = "ConditionalOperatorMatches", e[e.ConditionalOperatorNot = 1009] = "ConditionalOperatorNot", e[e.ConditionalOperatorIsFlipped = 1010] = "ConditionalOperatorIsFlipped", e[e.HS_END_OF_CONDITIONAL_OPERATORS = 1011] = "HS_END_OF_CONDITIONAL_OPERATORS", e[e.TraitRotation = 2e3] = "TraitRotation", e[e.TraitXPosition = 2001] = "TraitXPosition", e[e.TraitYPosition = 2002] = "TraitYPosition", e[e.TraitInvisibility = 2003] = "TraitInvisibility", e[e.TraitSize = 2004] = "TraitSize", e[e.TraitSpeed = 2005] = "TraitSpeed", e[e.TraitCloneIndex = 2006] = "TraitCloneIndex", e[e.TraitTotalClones = 2007] = "TraitTotalClones", e[e.TraitWidth = 2008] = "TraitWidth", e[e.TraitHeight = 2009] = "TraitHeight", e[e.TraitZIndex = 2010] = "TraitZIndex", e[e.TraitOriginX = 2011] = "TraitOriginX", e[e.TraitOriginY = 2012] = "TraitOriginY", e[e.TraitCenterX = 2013] = "TraitCenterX", e[e.TraitCenterY = 2014] = "TraitCenterY", e[e.TraitText = 2015] = "TraitText", e[e.TraitTempo = 2016] = "TraitTempo", e[e.TraitInstrument = 2017] = "TraitInstrument", e[e.TraitObjectName = 2018] = "TraitObjectName", e[e.HS_END_OF_OBJECT_TRAITS = 2019] = "HS_END_OF_OBJECT_TRAITS", e[e.TraitUsername = 2500] = "TraitUsername", e[e.TraitTime = 2501] = "TraitTime", e[e.TraitYear = 2502] = "TraitYear", e[e.TraitMonth = 2503] = "TraitMonth", e[e.TraitDay = 2504] = "TraitDay", e[e.TraitHour = 2505] = "TraitHour", e[e.TraitMinute = 2506] = "TraitMinute", e[e.TraitSecond = 2507] = "TraitSecond", e[e.HS_END_OF_USER_TRAITS = 2508] = "HS_END_OF_USER_TRAITS", e[e.StageTraitWidth = 3e3] = "StageTraitWidth", e[e.StageTraitHeight = 3001] = "StageTraitHeight", e[e.StageTraitTiltUp = 3002] = "StageTraitTiltUp", e[e.StageTraitTiltDown = 3003] = "StageTraitTiltDown", e[e.StageTraitTiltLeft = 3004] = "StageTraitTiltLeft", e[e.StageTraitTiltRight = 3005] = "StageTraitTiltRight", e[e.StageTraitLastTouchX = 3006] = "StageTraitLastTouchX", e[e.StageTraitLastTouchY = 3007] = "StageTraitLastTouchY", e[e.StageTraitTotalObjects = 3008] = "StageTraitTotalObjects", e[e.HS_END_OF_STAGE_TRAITS = 3009] = "HS_END_OF_STAGE_TRAITS", e[e.MathOperatorAdd = 4e3] = "MathOperatorAdd", e[e.MathOperatorSubtract = 4001] = "MathOperatorSubtract", e[e.MathOperatorMultiply = 4002] = "MathOperatorMultiply", e[e.MathOperatorDivide = 4003] = "MathOperatorDivide", e[e.MathOperatorRandom = 4004] = "MathOperatorRandom", e[e.MathOperatorPower = 4005] = "MathOperatorPower", e[e.MathOperatorSquareRoot = 4006] = "MathOperatorSquareRoot", e[e.MathOperatorSine = 4007] = "MathOperatorSine", e[e.MathOperatorCosine = 4008] = "MathOperatorCosine", e[e.MathOperatorRound = 4009] = "MathOperatorRound", e[e.MathOperatorAbs = 4010] = "MathOperatorAbs", e[e.MathOperatorModulo = 4011] = "MathOperatorModulo", e[e.MathOperatorTangent = 4012] = "MathOperatorTangent", e[e.MathOperatorInverseSine = 4013] = "MathOperatorInverseSine", e[e.MathOperatorInverseCosine = 4014] = "MathOperatorInverseCosine", e[e.MathOperatorInverseTangent = 4015] = "MathOperatorInverseTangent", e[e.MathOperatorMaximum = 4016] = "MathOperatorMaximum", e[e.MathOperatorMinimum = 4017] = "MathOperatorMinimum", e[e.MathOperatorFloor = 4018] = "MathOperatorFloor", e[e.MathOperatorCeiling = 4019] = "MathOperatorCeiling", e[e.HS_END_OF_MATH_OPERATORS = 4020] = "HS_END_OF_MATH_OPERATORS", e[e.ColorOperatorRandom = 5e3] = "ColorOperatorRandom", e[e.ColorOperatorRGB = 5001] = "ColorOperatorRGB", e[e.ColorOperatorHSB = 5002] = "ColorOperatorHSB", e[e.HS_END_OF_COLOR_OPERATORS = 5003] = "HS_END_OF_COLOR_OPERATORS", e[e.Rule = 6e3] = "Rule", e[e.RulePreview = 6001] = "RulePreview", e[e.EventOperatorStart = 7e3] = "EventOperatorStart", e[e.EventOperatorTap = 7001] = "EventOperatorTap", e[e.EventOperatorIsTouching = 7002] = "EventOperatorIsTouching", e[e.EventOperatorHold = 7003] = "EventOperatorHold", e[e.EventOperatorTiltRight = 7004] = "EventOperatorTiltRight", e[e.EventOperatorTiltLeft = 7005] = "EventOperatorTiltLeft", e[e.EventOperatorTiltUp = 7006] = "EventOperatorTiltUp", e[e.EventOperatorTiltDown = 7007] = "EventOperatorTiltDown", e[e.EventOperatorLoudNoise = 7008] = "EventOperatorLoudNoise", e[e.EventOperatorShake = 7009] = "EventOperatorShake", e[e.EventOperatorBump = 7010] = "EventOperatorBump", e[e.EventOperatorSwipeRight = 7011] = "EventOperatorSwipeRight", e[e.EventOperatorSwipeLeft = 7012] = "EventOperatorSwipeLeft", e[e.EventOperatorSwipeUp = 7013] = "EventOperatorSwipeUp", e[e.EventOperatorSwipeDown = 7014] = "EventOperatorSwipeDown", e[e.EventOperatorEnterTheWorld = 7015] = "EventOperatorEnterTheWorld", e[e.EventOperatorTiltRightEditor = 7016] = "EventOperatorTiltRightEditor", e[e.EventOperatorTiltLeftEditor = 7017] = "EventOperatorTiltLeftEditor", e[e.EventOperatorTiltUpEditor = 7018] = "EventOperatorTiltUpEditor", e[e.EventOperatorTiltDownEditor = 7019] = "EventOperatorTiltDownEditor", e[e.EventOperatorNotPressed = 7020] = "EventOperatorNotPressed", e[e.EventOperatorGamePlaying = 7021] = "EventOperatorGamePlaying", e[e.EventOperatorTouchEnds = 7022] = "EventOperatorTouchEnds", e[e.EventOperatorHearMessage = 7023] = "EventOperatorHearMessage", e[e.EventOperatorMessageMatches = 7024] = "EventOperatorMessageMatches", e[e.EventOperatorIsNotTouching = 7025] = "EventOperatorIsNotTouching", e[e.HS_END_OF_EVENT_OPERATORS = 7026] = "HS_END_OF_EVENT_OPERATORS", e[e.Object = 8e3] = "Object", e[e.AnyObject = 8001] = "AnyObject", e[e.ScreenEdge = 8002] = "ScreenEdge", e[e.Game = 8003] = "Game", e[e.Self = 8004] = "Self", e[e.OriginalObject = 8005] = "OriginalObject", e[e.Local = 8006] = "Local", e[e.User = 8007] = "User", e[e.Product = 8008] = "Product", e[e.Scoped = 8009] = "Scoped", e[e.HS_END_OF_EVENT_PARAMETER_BLOCKS = 8010] = "HS_END_OF_EVENT_PARAMETER_BLOCKS", e[e.TextOperatorCharAtIndex = 9e3] = "TextOperatorCharAtIndex", e[e.TextOperatorCharsInRange = 9001] = "TextOperatorCharsInRange", e[e.TextOperatorLength = 9002] = "TextOperatorLength", e[e.TextOperatorJoin = 9003] = "TextOperatorJoin", e[e.HS_END_OF_TEXT_OPERATOR_BLOCKS = 9004] = "HS_END_OF_TEXT_OPERATOR_BLOCKS", e[e.SceneReferenceBlock = 1e4] = "SceneReferenceBlock", e[e.PreviousSceneParameter = 10001] = "PreviousSceneParameter", e[e.NextSceneParameter = 10002] = "NextSceneParameter", e[e.HS_END_OF_SCENE_REFERENCE_BLOCKS = 10003] = "HS_END_OF_SCENE_REFERENCE_BLOCKS"
        }(i = t.HSBlockType || (t.HSBlockType = {})),
        function(e) {
            e[e.HSEventOnStart = 1239] = "HSEventOnStart", e[e.HSEventTouchedObject = 1240] = "HSEventTouchedObject", e[e.HSEventTapStage = 1241] = "HSEventTapStage", e[e.HSEventShake = 1242] = "HSEventShake", e[e.HSEventTiltRight = 1243] = "HSEventTiltRight", e[e.HSEventTiltLeft = 1244] = "HSEventTiltLeft", e[e.HSEventTiltDown = 1245] = "HSEventTiltDown", e[e.HSEventTiltUp = 1246] = "HSEventTiltUp", e[e.HSEventLoudNoise = 1247] = "HSEventLoudNoise", e[e.HSEventCollision = 1248] = "HSEventCollision", e[e.HSEventHeldObject = 1249] = "HSEventHeldObject", e[e.HSEventEnteredWorld = 1250] = "HSEventEnteredWorld"
        }(n = t.HSEventType || (t.HSEventType = {})), t.blockTypeForLegacyEventType = function(e) {
            switch (e) {
                case n.HSEventOnStart:
                    return i.EventOperatorStart;
                case n.HSEventShake:
                    return i.EventOperatorShake;
                case n.HSEventTiltUp:
                    return i.EventOperatorTiltUp;
                case n.HSEventTiltDown:
                    return i.EventOperatorTiltDown;
                case n.HSEventTiltRight:
                    return i.EventOperatorTiltRight;
                case n.HSEventTiltLeft:
                    return i.EventOperatorTiltLeft;
                case n.HSEventTapStage:
                case n.HSEventTouchedObject:
                    return i.EventOperatorTap;
                case n.HSEventLoudNoise:
                    return i.EventOperatorLoudNoise;
                case n.HSEventCollision:
                    return i.EventOperatorIsTouching;
                case n.HSEventHeldObject:
                    return i.EventOperatorHold;
                case n.HSEventEnteredWorld:
                    return i.EventOperatorEnterTheWorld
            }
            return i.EventOperatorStart
        }, window.HSBlockType = i, window.HSEventType = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkMatches = t.radiansToDegrees = t.degreesToRadians = t.getImageFromUri = t.exitFullscreen = t.hs_directionForMagnitudeAndPlane = t.hs_direction = t.hs_magnitude = t.hs_plane = t.HSDirection = t.HSMagnitude = t.HSPlane = t.benchmarkEnd = t.benchmarkStart = t.findLast = t.variance = t.mean = t.clamp = t.log = t.requestTextureFromApp = t.appRequestCache = t.appRequestCallbacks = t.onlyEmoji = t.hasEmoji = t.generateUUID = t.HSApp = t.isIOSApp = t.iOSApp = t.iOS = t.emoji = t.parseInstrumentName = t.MAX_FLOAT = void 0;
    var i = r(20);

    function n() {
        return t.iOSApp || !!window.HS_IS_IOS_APP
    }
    t.MAX_FLOAT = 34028234663852886e22, t.parseInstrumentName = function(e) {
        return "strings" === e && (e = "cello"), e.toLocaleLowerCase().replace(" ", "")
    }, t.emoji = window.emoji, t.emoji.basePath = "https://d2j12ek52gvmx9.cloudfront.net/emojis", t.iOS = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), t.iOSApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), t.isIOSApp = n;
    var o = function() {
        function e() {}
        return e.forceIOSApp = function(e) {
            t.iOSApp = e
        }, e.initUserVariables = function(t, r) {
            n() || 0 === t.length || 0 === r.length || (e.userVarID = e.userVarPrefix + t + "_" + r, e.initialUserVariables = JSON.parse(localStorage.getItem(e.userVarID) || "{}"))
        }, e.storeUserVar = function(t, r) {
            n() || (e.initialUserVariables[t] = r, localStorage.setItem(e.userVarID, JSON.stringify(e.initialUserVariables)))
        }, e.sendToApp = function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            e.instance.sendToApp.apply(e.instance, t)
        }, e.addResetCallback = function(t, r) {
            e.resetCallback[t] = r
        }, e.prototype.sendToApp = function(e, t, r) {
            var i;
            void 0 === r && (r = "hopscotch");
            var n = window.webkit;
            n && n.messageHandlers && n.messageHandlers[r].postMessage(((i = {})[e] = t, i))
        }, e.reset = function() {
            for (var t in i.HSAccelerometerManager.clear(), e.appCallbacks = {}, e.resetCallback) e.resetCallback.hasOwnProperty(t) && e.resetCallback[t]()
        }, e.readFromAppOnce = function(t, r) {
            e.appCallbacks[t] = r
        }, e.readFromAppEternal = function(t, r) {
            e.eternalCallbacks.push(t), e.appCallbacks[t] = r
        }, e.executeCallback = function(t, r) {
            e.appCallbacks[t] && (e.appCallbacks[t](r), -1 === e.eternalCallbacks.indexOf(t) && delete e.appCallbacks[t])
        }, e.instance = new e, e.isRunning = !0, e.initialUserVariables = {}, e.userVarPrefix = "user_var_", e.eternalCallbacks = [], e.appCallbacks = {}, e.resetCallback = {}, e
    }();

    function a(e) {
        return null != e && "" !== e && (/[\uD800-\uDBFF\uDC00-\uDFFF]/.test(e) || RegExp("" + t.emoji.regex.source).test(e))
    }

    function s(e) {
        return null != e && "" !== e && RegExp("^(" + t.emoji.regex.source + ")+$").test(e)
    }
    t.HSApp = o, t.generateUUID = function() {
        var e = (new Date).getTime(),
            t = "undefined" != typeof performance && performance.now && 1e3 * performance.now() || 0;
        return "xxxxxxxx".replace(/[xy]/g, (function(r) {
            var i = 16 * Math.random();
            return e > 0 ? (i = (e + i) % 16 | 0, e = Math.floor(e / 16)) : (i = (t + i) % 16 | 0, t = Math.floor(t / 16)), ("x" === r ? i : 3 & i | 8).toString(16)
        }))
    }, t.hasEmoji = a, t.onlyEmoji = s;
    var c = 0;

    function u(e, r) {
        var i = JSON.stringify(e),
            n = t.appRequestCache.get(i);
        if (null != r && (null == n ? void 0 : n.updatedDate) === r) return n.promise;
        var o = c++,
            a = {
                updatedDate: r || 0,
                promise: new Promise((function(r) {
                    t.appRequestCallbacks[o] = r, window.webkit.messageHandlers.renderer.postMessage(Object.assign({}, e, {
                        replyTo: "appRequestCallbacks[" + o + "]"
                    }))
                })).then((function(e) {
                    return delete t.appRequestCallbacks[o], e
                }))
            };
        return t.appRequestCache.set(i, a), t.appRequestCache.get(i).promise
    }

    function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        o.sendToApp("log", Array.prototype.join.call(arguments, " "))
    }

    function h(e, t, r) {
        var i = Math.max(t, e);
        return Math.min(i, r)
    }

    function p(e) {
        return e.reduce((function(e, t) {
            return e + t
        }), 0) / e.length
    }

    function d(e) {
        var t = p(e);
        return e.reduce((function(e, r) {
            return e + Math.pow(r - t, 2)
        }), 0) / e.length
    }

    function S(e, t) {
        for (var r = e.length - 1; r >= 0; r--)
            if (t(e[r], r, e)) return e[r]
    }
    t.appRequestCallbacks = {}, t.appRequestCache = new Map, t.requestTextureFromApp = u, t.log = l, t.clamp = h, t.mean = p, t.variance = d, t.findLast = S;
    var f, g, y, v = [],
        m = 0;

    function T() {
        m = performance.now()
    }

    function b() {
        var e = performance.now();
        if (v.length >= 100) {
            for (var t = 0, r = 0; r < v.length; r++) t += v[r];
            var i = document.getElementById("time").innerText;
            i.length > 130 && (i = i.substring(50, 130));
            var n = Math.round(t / v.length * 1e3) / 1e3;
            document.getElementById("time").innerText = i + " " + n + "ms", v = []
        }
        var o = e - m;
        v.push(o)
    }

    function E(e, t) {
        return Math.abs(e) >= Math.abs(t) ? f.horizontal : f.vertical
    }

    function H(e, t) {
        return Math.abs(e) < t ? g.none : e > 0 ? g.positive : g.negative
    }

    function O(e, t, r) {
        var i, n = E(e, t);
        switch (n) {
            case f.horizontal:
                i = H(e, r);
                break;
            case f.vertical:
                i = H(t, r)
        }
        return w(i, n)
    }

    function w(e, t) {
        return e === g.positive && t === f.horizontal ? y.right : e === g.positive && t === f.vertical ? y.up : e === g.negative && t === f.horizontal ? y.left : e === g.negative && t === f.vertical ? y.down : null
    }

    function _() {}

    function C(e) {
        var t = new Image;
        return e.startsWith("data:") || (t.crossOrigin = "Anonymous"), new Promise((function(r, i) {
            t.onload = function() {
                return r(t)
            }, t.onerror = i, t.src = e.replace(/-?200d/g, "")
        }))
    }

    function x(e) {
        return e * Math.PI / 180
    }

    function k(e) {
        return e / Math.PI * 180
    }
    t.benchmarkStart = T, t.benchmarkEnd = b,
        function(e) {
            e[e.horizontal = 0] = "horizontal", e[e.vertical = 1] = "vertical"
        }(f = t.HSPlane || (t.HSPlane = {})),
        function(e) {
            e[e.positive = 0] = "positive", e[e.negative = 1] = "negative", e[e.none = 2] = "none"
        }(g = t.HSMagnitude || (t.HSMagnitude = {})),
        function(e) {
            e[e.up = 0] = "up", e[e.down = 1] = "down", e[e.left = 2] = "left", e[e.right = 3] = "right"
        }(y = t.HSDirection || (t.HSDirection = {})), t.hs_plane = E, t.hs_magnitude = H, t.hs_direction = O, t.hs_directionForMagnitudeAndPlane = w, t.exitFullscreen = _, t.getImageFromUri = C, t.degreesToRadians = x, t.radiansToDegrees = k, Array.prototype.remove = function(e) {
            var t = this.indexOf(e);
            void 0 !== t && this.splice(t, 1)
        }, t.checkMatches = function(e, t) {
            return function(e, t) {
                try {
                    return new RegExp(e, t)
                } catch (t) {
                    return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                }
            }(t, "gi").test(e)
        }, window.isIOSApp = n, window.HSPlane = f, window.HSMagnitude = g, window.HSDirection = y, window.hasEmoji = a, window.onlyEmoji = s, window.requestTextureFromApp = u, window.log = l, window.clamp = h, window.mean = p, window.variance = d, window.findLast = S, window.benchmarkStart = T, window.benchmarkEnd = b, window.hs_plane = E, window.hs_magnitude = H, window.hs_direction = O, window.hs_directionForMagnitudeAndPlane = w, window.exitFullscreen = _, window.getImageFromUri = C, window.degreesToRadians = x, window.radiansToDegrees = k, window.HSApp = o, window.appRequestCallbacks = t.appRequestCallbacks, window.MAX_FLOAT = t.MAX_FLOAT
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVariable = t.HSStageVariable = void 0;
    var i = r(0),
        n = r(8),
        o = r(12),
        a = r(23),
        s = r(10),
        c = r(1),
        u = r(2),
        l = r(33),
        h = function(e) {
            function t(t, r, i, o, a, s) {
                var u = e.call(this, c.HSBlockType.Variable, r, a.findWithObjectID(n.HSObject.key, o), [], a, s) || this;
                return u.name = t, u.blockType = r, u.objectID = i, u.associatedObjectID = o, u
            }
            return i.__extends(t, e), t.prototype.computedValue = function(e) {
                if (this.blockType === c.HSBlockType.Product) return u.HSApp.initialUserVariables["_hs_product_" + this.objectID] || "0";
                var t = this._object(e);
                return t && t[this.name] || 0
            }, t.prototype.computedNumberValue = function(e) {
                return t.parseNumberFrom(this.computedValue(e))
            }, t.prototype.setValue = function(e, t) {
                this._object(t)[this.name] = e, this.storeUserValueIfNeeded(e.toString())
            }, t.prototype.storeUserValueIfNeeded = function(e) {
                this.blockType === c.HSBlockType.User && (u.isIOSApp() ? u.HSApp.sendToApp("setVariable", JSON.stringify({
                    variableValue: e,
                    variableName: this.name.replace("_hs_", ""),
                    variableID: this.objectID
                })) : u.HSApp.storeUserVar(this.objectID, e))
            }, t.prototype._object = function(e) {
                var r;
                return this.blockType === c.HSBlockType.Game ? t.globalScope : this.blockType === c.HSBlockType.User ? t.userGlobalScope : this.blockType === c.HSBlockType.Object && this.object ? null === (r = this.object) || void 0 === r ? void 0 : r.allStageObjects()[0] : this.blockType === c.HSBlockType.OriginalObject ? e.parentObject.originalObject : e.parentObject
            }, t.parseValue = function(e, t) {
                var r = parseFloat(e);
                return isNaN(r) || !/^\-?[0-9]+(e\+?[0-9]+)?(\.[0-9]+(e[\+\-]?[0-9]+)?)?$/.test(e) ? null == e ? 0 : e : (function(e) {
                    return e >= -u.MAX_FLOAT && e <= u.MAX_FLOAT
                }(r) || (r = r < 0 ? -u.MAX_FLOAT : u.MAX_FLOAT), Number.isInteger(r) || t ? r : Math.round(1e6 * r) / 1e6)
            }, t.parseNumberFrom = function(e) {
                var r = t.parseValue(e, !0);
                return "string" == typeof r ? 0 : r
            }, t.prototype.getPublicName = function() {
                return this.name.replace("_hs_", "")
            }, t.globalScope = {}, t.userGlobalScope = {}, t
        }(l.HSStageParameterBlock);
    t.HSStageVariable = h;
    var p = function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.type = c.HSBlockType.Variable, r
        }
        return i.__extends(t, e), t.prototype.stageParameterBlock = function(e) {
            return new h(this.name, this.blockType, this.objectID, this.associatedObjectID, this.context, e)
        }, t.prototype.parseJSON = function(t) {
            void 0 === t && (t = {}), e.prototype.parseJSON.call(this, t), this.blockType = t.type, this.associatedObjectID = t.object, this.type = c.HSBlockType.Variable, this.objectID = t[o.VARIABLE_KEY];
            var r = this.context.findWithObjectID(a.HSVariablePrototype.key, this.objectID);
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
            this.name = "_hs_" + r.name, this.blockType === c.HSBlockType.User && (h.userGlobalScope[this.name] = r.initialValue)
        }, t.key = "HSVariable", t
    }(s.HSParameterBlock);
    t.HSVariable = p, window.HSVariable = p, window.HSStageVariable = h
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageScene = void 0;
    var i = r(0),
        n = r(2),
        o = r(20),
        a = r(8),
        s = r(69),
        c = r(71),
        u = r(1),
        l = r(7),
        h = r(24),
        p = function(e) {
            function t(r, i, n, o) {
                var a = e.call(this, null) || this;
                return a.stageObjects = r, a.name = i, a.id = n, a.context = o, a.renderList = new c.HSLinkedList, a.pointers = [], a.currentlyPressedObjects = [], a.tickCount = 0, a.nextEvents = new Set, a.currentEvents = new Set, a.activator = new s.HSRuleActivator(a), a.container = new PIXI.Container, a.stageObjects.forEach((function(e) {
                    a.bindStageObject(e)
                })), a.lastTouchX = t.stageWidth / 2, a.lastTouchY = t.stageHeight / 2, a
            }
            return i.__extends(t, e), t.prototype.queueEventMessage = function(e) {
                this.nextEvents.add(e)
            }, t.prototype.swapEventMessageQueue = function() {
                var e = this.currentEvents;
                e.clear(), this.currentEvents = this.nextEvents, this.nextEvents = e
            }, t.prototype.bindStageObject = function(e) {
                e.bringToFrontFunction = this.bringToFront.bind(this), e.sendToBackFunction = this.sendToBack.bind(this), e.cloneFunction = this.clone.bind(this), e.destroyFunction = this.activator.addToDestroyQueue.bind(this.activator), e.broadcastMessageFunction = this.queueEventMessage.bind(this), this.renderList.push(e)
            }, t.prototype.animationTick = function(e) {
                var r = this;
                t.dirtySort && (t.dirtySort = !1, this.sortRenderList()), this.container.removeChildren(), this.renderList.forEach((function(e) {
                    e.update(), e.view.sprite && r.container.addChild(e.view.sprite)
                })), this.collisionTest(e), this.activateRules(), this.executeRules(), this.activator.cleanDestroyQueue(), this.swapEventMessageQueue(), this.tickCount++
            }, t.prototype.collisionTest = function(e) {
                if (e) {
                    e.tick(this.renderList), e.numberOfPixelCollisions = 0;
                    var t = this.activator.allPossibleCollisionPairs();
                    t.forEach((function(t) {
                        return t.update(e)
                    })), this.activator.currentCollisions = t.filter((function(e) {
                        return e.isTouching()
                    })), this.activator.bumpingCollisions = this.activator.currentCollisions.filter((function(e) {
                        return e.isBumping()
                    }))
                }
            }, t.prototype.activateRules = function() {
                var e = this;
                this.touchIsDown && this.currentlyPressedObjects.forEach((function(t) {
                    e.activator.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorHold, t)
                })), this.context.hasAccelerometerEvent() && (this.activateTiltRules(), this.activateShakeRules()), this.context.hasNoiseEvent() && this.activateNoiseRules(), this.activateAllNotPressedRules(), this.activateEventMessageRules(), this.activator.activateCurrentCollisionRules()
            }, t.prototype.activateEventMessageRules = function() {
                var e = this;
                this.activator.allStageRulesForEventType(u.HSBlockType.EventOperatorHearMessage).forEach((function(t) {
                    e.currentEvents.forEach(t.activateIfEqualsEventMessage)
                })), this.activator.allStageRulesForEventType(u.HSBlockType.EventOperatorMessageMatches).forEach((function(t) {
                    e.currentEvents.forEach(t.activateIfMatchesEventMessage)
                }))
            }, t.prototype.activateAllNotPressedRules = function() {
                var e = this;
                this.activator.allStageRulesForEventType(u.HSBlockType.EventOperatorNotPressed).forEach((function(t) {
                    t.activateIfNotPressed(e)
                }))
            }, t.prototype.executeRules = function() {
                this.activator.executeAllActiveRules()
            }, t.prototype.receiveClickEvent = function(e, t) {
                this.setTouchPosition(e, t);
                var r = e.point,
                    i = r.x,
                    n = r.y,
                    o = this.stageObjectsToReceiveTouchInRange(i, n, t);
                this.activator.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorTap, o), this.activator.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorHold, o);
                var a = this.indexOfPointer(e.id);
                this.currentlyPressedObjects[a] = o
            }, t.prototype.addPointer = function(e) {
                var t = this.indexOfPointer(e.id);
                if (-1 !== t) return this.pointers[t];
                var r = this.getPointerData(e);
                return this.pointers.push(r), r
            }, t.prototype.receiveTouchDownEvent = function(e, t) {
                this.setTouchPosition(e, t)
            }, t.prototype.receiveTouchMoveEvent = function(e, t) {
                this.touchIsDown && (this.setTouchPosition(e, t), this.calculateSwipeEvents(this.getPointerFrom(e.id), t))
            }, t.prototype.receiveTouchUpEvent = function(e, t) {
                var r = this.indexOfPointer(e.id);
                this.removePointer(e.id), this.currentlyPressedObjects.splice(r, 1), this.activator.activateAllRulesForEventType(u.HSBlockType.EventOperatorTouchEnds)
            }, t.prototype.getPointerData = function(e) {
                var t = e.point,
                    r = t.x,
                    i = t.y;
                return {
                    id: e.id,
                    downX: r,
                    downY: i,
                    lastX: r,
                    lastY: i
                }
            }, t.prototype.removePointer = function(e) {
                var t = this.indexOfPointer(e); - 1 !== t && this.pointers.splice(t, 1)
            }, t.prototype.indexOfPointer = function(e) {
                for (var t = 0; t < this.pointers.length; t++)
                    if (this.pointers[t].id === e) return t;
                return -1
            }, t.prototype.getPointerFrom = function(e) {
                var t = this.indexOfPointer(e);
                return -1 !== t ? this.pointers[t] : null
            }, t.prototype.calculateSwipeEvents = function(e, t) {
                var r = this.horizontalSwipeForPoint(e),
                    i = this.verticalSwipeForPoint(e),
                    n = this.directionForSwipe(r, i);
                if (n) {
                    var o = this.stageObjectsToReceiveTouchInRange(e.downX, e.downY, t);
                    this.activator.activateAllRulesForEventWithObjects(n, o), e.downX = null, e.downY = null
                }
            }, t.prototype.directionForSwipe = function(e, t) {
                switch (n.hs_direction(e, t, 10)) {
                    case n.HSDirection.up:
                        return u.HSBlockType.EventOperatorSwipeUp;
                    case n.HSDirection.down:
                        return u.HSBlockType.EventOperatorSwipeDown;
                    case n.HSDirection.left:
                        return u.HSBlockType.EventOperatorSwipeLeft;
                    case n.HSDirection.right:
                        return u.HSBlockType.EventOperatorSwipeRight;
                    default:
                        return null
                }
            }, t.prototype.horizontalSwipeForPoint = function(e) {
                return e.downX ? e.lastX - e.downX : 0
            }, t.prototype.verticalSwipeForPoint = function(e) {
                return e.downY ? e.lastY - e.downY : 0
            }, t.prototype.setTouchPosition = function(e, t) {
                var r = this.getPointerFrom(e.id) || this.addPointer(e),
                    i = e.point,
                    n = i.x,
                    o = i.y;
                return r.lastX = n, r.lastY = o, this.isTheLastPointer(e.id) && (this.lastTouchX = n, this.lastTouchY = o), r
            }, t.prototype.isTheLastPointer = function(e) {
                return this.indexOfPointer(e) === this.pointers.length - 1
            }, t.prototype.firstStageObjectWithinRange = function(e, t, r) {
                var i = Array.from(this.renderList).filter((function(i) {
                    return r.hitTest(i, e, t)
                }));
                return i.length > 0 ? i.sort((function(e, t) {
                    return e.zIndex - t.zIndex
                }))[i.length - 1] : null
            }, t.prototype.stageObjectsToReceiveTouchInRange = function(e, t, r) {
                var i = this.firstStageObjectWithinRange(e, t, r);
                return i ? [i, null] : [null]
            }, t.prototype.bringToFront = function(e) {
                var t;
                this.renderList.forEach((function(e) {
                    (!t || e.zIndex > t) && (t = e.zIndex)
                })), e.zIndex = t + 1, this.sortRenderList()
            }, t.prototype.sendToBack = function(e) {
                var t;
                this.renderList.forEach((function(e) {
                    (!t || e.zIndex < t) && (t = e.zIndex)
                })), e.zIndex = t - 1, this.sortRenderList()
            }, t.prototype.sortRenderList = function() {
                this.renderList.setNewOrder((function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        var r = e.zIndex || 0;
                        t[r] || (t[r] = []), t[r].push(e)
                    })), (t = t.filter((function(e) {
                        return !!e
                    }))).forEach((function(e) {
                        e.sort((function(e, t) {
                            return e.createOrder - t.createOrder
                        }))
                    })), t.reduce((function(e, t) {
                        return e.concat(t)
                    }), [])
                }))
            }, t.prototype.break = function() {
                this.stageObjects.forEach((function(e) {
                    return e.break()
                }))
            }, t.prototype.destroy = function(e) {
                this.stageObjects.remove(e), e.destroy(), this.renderList.remove(e), this.context.findWithObjectID(a.HSObject.key, e.objectID).removeStageObject(e)
            }, t.prototype.clone = function(e, r) {
                var i = this;
                if (void 0 === r && (r = 1), !(this.stageObjects.length >= t.MAX_CLONES)) {
                    r = Math.min(t.MAX_CLONES - this.stageObjects.length, r);
                    for (var n = this.context.findWithObjectID(a.HSObject.key, e.objectID), o = 0; o < r; o++) {
                        var s = e.deepCopy();
                        s.creationTick = this.tickCount, n.addStageObject(s), s.relatedCollisionRules = e.relatedCollisionRules, this.stageObjects.push(s), this.bindStageObject(s);
                        var c = s.ruleGroups;
                        this.activator.addCollisionPairsForStageObject(s), c.forEach((function(e) {
                            i.activator.cacheRulesForStageObject(e), e.activateAllStageRulesForEventType(u.HSBlockType.EventOperatorEnterTheWorld)
                        }))
                    }
                }
            }, t.prototype.activateTiltRules = function() {
                var e;
                switch (o.HSAccelerometerManager.tiltDirection()) {
                    case n.HSDirection.up:
                        e = u.HSBlockType.EventOperatorTiltUp;
                        break;
                    case n.HSDirection.down:
                        e = u.HSBlockType.EventOperatorTiltDown;
                        break;
                    case n.HSDirection.left:
                        e = u.HSBlockType.EventOperatorTiltLeft;
                        break;
                    case n.HSDirection.right:
                        e = u.HSBlockType.EventOperatorTiltRight;
                        break;
                    default:
                        e = u.HSBlockType.None
                }
                this.activator.activateAllRulesForEventType(e)
            }, t.prototype.activateShakeRules = function() {
                o.HSAccelerometerManager.isShaking() && this.activator.activateAllRulesForEventType(u.HSBlockType.EventOperatorShake)
            }, t.prototype.activateNoiseRules = function() {
                h.HSSoundManager.sharedInstance.microphoneManager.hasLoudNoise() && this.activator.activateAllRulesForEventType(u.HSBlockType.EventOperatorLoudNoise)
            }, Object.defineProperty(t.prototype, "touchIsDown", {
                get: function() {
                    return 0 !== this.pointers.length
                },
                enumerable: !1,
                configurable: !0
            }), t.dirtySort = !1, t.promptsToExecute = [], t.stageHeight = 768, t.stageWidth = 1024, t.MAX_CLONES = 4096, t
        }(l.HSStageObjectBase);
    t.HSStageScene = p, window.HSStageScene = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSLineCap = t.HSColor = void 0;
    var i = r(84),
        n = function() {
            function e() {}
            return e.textColor = function() {
                return e.rgbTextColor
            }, e.randomColor = function() {
                var t = e.RGBAColors.length,
                    r = Math.floor(Math.random() * (t - 1));
                return e.RGBAColors[r]
            }, e.rgb = function(e, t, r) {
                return "rgb(" + Math.round(e) + ", " + Math.round(t) + ", " + Math.round(r) + ")"
            }, e.hexColor = function(e) {
                return new i.TinyColor(e).toHex()
            }, e.hexToTint = function(t) {
                return void 0 === this._colorMap.get(t) && this._colorMap.set(t, parseInt(e.hexColor(t), 16)), this._colorMap.get(t)
            }, e.hsb = function(t, r, i) {
                return e.convertHSBStringToRGBAString("HSB(" + t + ", " + r + "%, " + i + "%)")
            }, e.rgbStringFromHSBString = function(t) {
                var r = e.hsbRGBAColorMaps[t];
                return r || (r = e.convertHSBStringToRGBAString(t)), r
            }, e.hsbStringFromRgbString = function(e) {
                var t = new i.TinyColor(e).toHsv();
                return "HSB(" + Math.round(t.h) + "," + Math.round(100 * t.s) + "," + Math.round(100 * t.v) + ")"
            }, e.rgbStringFromNumericColor = function(t) {
                var r = parseFloat(t);
                if (!isNaN(r)) {
                    var i = Math.abs(Math.round(r) % e.RGBAColors.length);
                    return e.RGBAColors[i]
                }
                return null
            }, e.convertHSBStringToTinyColor = function(e) {
                var t = e.replace("B", "V");
                return new i.TinyColor(t)
            }, e.convertHSBStringToRGBAString = function(e) {
                return this.convertHSBStringToTinyColor(e).toRgbString()
            }, e.RGBAColors = ["rgb(100, 48, 112)", "rgb(134, 77, 209)", "rgb(168, 177, 255)", "rgb(215, 163, 227)", "rgb(255, 179, 207)", "rgb(232, 84, 96)", "rgb(214, 24, 100)", "rgb(212, 8, 29)", "rgb(255, 119, 0)", "rgb(250, 204, 0)", "rgb(255, 233, 38)", "rgb(159, 245, 165)", "rgb(134, 196, 63)", "rgb(64, 143, 50)", "rgb(86, 214, 186)", "rgb(140, 219, 255)", "rgb(10, 169, 209)", "rgb(39, 138, 219)", "rgb(29, 60, 117)", "rgb(77, 77, 77)", "rgb(51, 41, 50)", "rgb(122, 67, 29)", "rgb(204, 204, 204)", "rgb(255, 255, 255)", "rgb(250,220,186)", "rgb(225,187,146)", "rgb(192,143,101)", "rgb(156,100,57)", "rgb(89,69,56)"], e.hsbRGBAColorMaps = {
                "HSB(289,57,44)": "rgb(100, 48, 112)",
                "HSB(266,63,82)": "rgb(134, 77, 209)",
                "HSB(234,34,100)": "rgb(168, 177, 255)",
                "HSB(289,28,89)": "rgb(215, 163, 227)",
                "HSB(338,30,100)": "rgb(255, 179, 207)",
                "HSB(355,64,91)": "rgb(232, 84, 96)",
                "HSB(336,89,84)": "rgb(214, 24, 100)",
                "HSB(354,96,83)": "rgb(212, 8, 29)",
                "HSB(28,100,100)": "rgb(255, 119, 0)",
                "HSB(49,100,98)": "rgb(250, 204, 0)",
                "HSB(54,85,100)": "rgb(255, 233, 38)",
                "HSB(124,35,96)": "rgb(159, 245, 165)",
                "HSB(88,68,77)": "rgb(134, 196, 63)",
                "HSB(111,65,56)": "rgb(64, 143, 50)",
                "HSB(167,60,84)": "rgb(86, 214, 186)",
                "HSB(199,45,100)": "rgb(140, 219, 255)",
                "HSB(192,95,82)": "rgb(10, 169, 209)",
                "HSB(207,82,86)": "rgb(39, 138, 219)",
                "HSB(219,75,46)": "rgb(29, 60, 117)",
                "HSB(0,0,30)": "rgb(77, 77, 77)",
                "HSB(306,20,20)": "rgb(51, 41, 50)",
                "HSB(24,76,48)": "rgb(122, 67, 29)",
                "HSB(0,0,80)": "rgb(204, 204, 204)",
                "HSB(0,0,100)": "rgb(255, 255, 255)",
                "HSB(32,26,98)": "rgb(250,220,186)",
                "HSB(31,35,88)": "rgb(225,187,146)",
                "HSB(28,47,75)": "rgb(192,143,101)",
                "HSB(26,63,61)": "rgb(156,100,57)",
                "HSB(24,37,35)": "rgb(89,69,56)"
            }, e.rgbWhiteColor = "rgb(255, 255, 255)", e.rgbTextColor = "rgb(0,0,0)", e._colorMap = new Map, e
        }();
    t.HSColor = n;
    var o = function() {
        function e() {}
        return e.lineCapFromString = function(e) {
            switch (e) {
                case "round":
                case "square":
                case "butt":
                    return e
            }
            return "round"
        }, e
    }();
    t.HSLineCap = o, window.HSColor = n, window.HSLineCap = o
}, function(e, t, r) {
    "use strict";
    var i;

    function n(e) {
        return e >= i.roundedSquareFullSize && e < i.HS_END_OF_FULL_SIZE_SHAPES
    }
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hsIsFullSizeShape = t.hsIsShapeType = t.HSObjectType = void 0,
        function(e) {
            e[e.monkey = 0] = "monkey", e[e.text = 1] = "text", e[e.octopus = 2] = "octopus", e[e.gorilla = 3] = "gorilla", e[e.cupcake = 4] = "cupcake", e[e.bear = 5] = "bear", e[e.dino = 6] = "dino", e[e.frog = 7] = "frog", e[e.greenman = 8] = "greenman", e[e.mustache = 9] = "mustache", e[e.spacepod = 10] = "spacepod", e[e.zombieBear = 11] = "zombieBear", e[e.ghoulopus = 12] = "ghoulopus", e[e.bats = 13] = "bats", e[e.frankenrilla = 14] = "frankenrilla", e[e.jodyWitch = 15] = "jodyWitch", e[e.cauldron = 16] = "cauldron", e[e.pumpkin = 17] = "pumpkin", e[e.broom = 18] = "broom", e[e.lantern = 19] = "lantern", e[e.parrotFlying = 20] = "parrotFlying", e[e.mandrill = 21] = "mandrill", e[e.mosquito = 22] = "mosquito", e[e.missChief = 23] = "missChief", e[e.venus = 24] = "venus", e[e.jeepers = 25] = "jeepers", e[e.banyan = 26] = "banyan", e[e.stargirl = 27] = "stargirl", e[e.astro = 28] = "astro", e[e.chillanna = 29] = "chillanna", e[e.robo = 30] = "robo", e[e.raccoon = 31] = "raccoon", e[e.bird = 32] = "bird", e[e.HS_END_OF_CHARACTERS = 33] = "HS_END_OF_CHARACTERS", e[e.square = 34] = "square", e[e.circle = 35] = "circle", e[e.hexagon = 36] = "hexagon", e[e.triangle = 37] = "triangle", e[e.rightTriangle = 38] = "rightTriangle", e[e.rectangle = 39] = "rectangle", e[e.heart = 40] = "heart", e[e.star = 41] = "star", e[e.arch = 42] = "arch", e[e.parallelogram = 43] = "parallelogram", e[e.squiggle = 44] = "squiggle", e[e.donut = 45] = "donut", e[e.tetrisZ = 46] = "tetrisZ", e[e.tetrisT = 47] = "tetrisT", e[e.tetrisL = 48] = "tetrisL", e[e.corner = 49] = "corner", e[e.flower = 50] = "flower", e[e.threeProngedBoomerang = 51] = "threeProngedBoomerang", e[e.squishedBox = 52] = "squishedBox", e[e.bead = 53] = "bead", e[e.chevron = 54] = "chevron", e[e.xShape = 55] = "xShape", e[e.tetrisLine = 56] = "tetrisLine", e[e.HS_END_OF_SHAPES = 57] = "HS_END_OF_SHAPES", e[e.toucan = 58] = "toucan", e[e.anteater = 59] = "anteater", e[e.crocodile = 60] = "crocodile", e[e.sloth = 61] = "sloth", e[e.iguana = 62] = "iguana", e[e.hut = 63] = "hut", e[e.penguin = 64] = "penguin", e[e.winterQueen = 65] = "winterQueen", e[e.shyYeti = 66] = "shyYeti", e[e.deer = 67] = "deer", e[e.elf = 68] = "elf", e[e.snowGlobe = 69] = "snowGlobe", e[e.polarbear = 70] = "polarbear", e[e.sleigh = 71] = "sleigh", e[e.mistletoe = 72] = "mistletoe", e[e.snowMan = 73] = "snowMan", e[e.snowflake = 74] = "snowflake", e[e.roundedSquareFullSize = 100] = "roundedSquareFullSize", e[e.squareFullSize = 101] = "squareFullSize", e[e.circleFullSize = 102] = "circleFullSize", e[e.hexagonFullSize = 103] = "hexagonFullSize", e[e.triangleFullSize = 104] = "triangleFullSize", e[e.rightTriangleFullSize = 105] = "rightTriangleFullSize", e[e.rectangleFullSize = 106] = "rectangleFullSize", e[e.heartFullSize = 107] = "heartFullSize", e[e.starFullSize = 108] = "starFullSize", e[e.archFullSize = 109] = "archFullSize", e[e.parallelogramTallFullSize = 110] = "parallelogramTallFullSize", e[e.squiggleFullSize = 111] = "squiggleFullSize", e[e.donutFullSize = 112] = "donutFullSize", e[e.tetrisZFullSize = 113] = "tetrisZFullSize", e[e.tetrisTFullSize = 114] = "tetrisTFullSize", e[e.tetrisLFullSize = 115] = "tetrisLFullSize", e[e.cornerFullSize = 116] = "cornerFullSize", e[e.flowerFullSize = 117] = "flowerFullSize", e[e.fanbladeFullSize = 118] = "fanbladeFullSize", e[e.squishedBoxFullSize = 119] = "squishedBoxFullSize", e[e.roundedRightTriangleFullSize = 120] = "roundedRightTriangleFullSize", e[e.arrowRoundedFullSize = 121] = "arrowRoundedFullSize", e[e.beadFullSize = 122] = "beadFullSize", e[e.parallelogramWideFullSize = 123] = "parallelogramWideFullSize", e[e.chevronFullSize = 124] = "chevronFullSize", e[e.xFullSize = 125] = "xFullSize", e[e.tetrisLineFullSize = 126] = "tetrisLineFullSize", e[e.hexagonV3 = 150] = "hexagonV3", e[e.triangleV3 = 151] = "triangleV3", e[e.rectangleV3 = 152] = "rectangleV3", e[e.heartV3 = 153] = "heartV3", e[e.starV3 = 154] = "starV3", e[e.archV3 = 155] = "archV3", e[e.squiggleV3 = 156] = "squiggleV3", e[e.tetrisZV3 = 157] = "tetrisZV3", e[e.tetrisTV3 = 158] = "tetrisTV3", e[e.tetrisLV3 = 159] = "tetrisLV3", e[e.fanbladeV3 = 160] = "fanbladeV3", e[e.arrowRoundedV3 = 161] = "arrowRoundedV3", e[e.beadV3 = 162] = "beadV3", e[e.parallelogramWideV3 = 163] = "parallelogramWideV3", e[e.chevronV3 = 164] = "chevronV3", e[e.HS_END_OF_FULL_SIZE_SHAPES = 165] = "HS_END_OF_FULL_SIZE_SHAPES", e[e.HS_NUMBER_OF_OBJECTS = 166] = "HS_NUMBER_OF_OBJECTS", e[e.image = 2e3] = "image", e[e.HS_START_OF_CHARACTERS2 = 3e3] = "HS_START_OF_CHARACTERS2", e[e.crocodileJaws = 3001] = "crocodileJaws", e[e.lanternFullSize = 3002] = "lanternFullSize", e[e.HS_END_OF_CHARACTERS2 = 3003] = "HS_END_OF_CHARACTERS2", e[e.nil = 1e4] = "nil", e[e.edgeOfScreen = 3e4] = "edgeOfScreen"
        }(i = t.HSObjectType || (t.HSObjectType = {})), t.hsIsShapeType = function(e) {
            var t = n(e);
            return e > i.HS_END_OF_CHARACTERS && e < i.HS_END_OF_SHAPES || t
        }, t.hsIsFullSizeShape = n, window.HSObjectType = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageObjectBase = void 0;
    var i = r(11),
        n = function() {
            function e(e) {
                this._parentNode = e, this.description = this.constructor.name
            }
            return e.prototype.parentNode = function() {
                return this._parentNode
            }, e.prototype.scopeMode = function() {
                return i.ScopeMode.Parent
            }, e.prototype.updateParentNode = function(e) {
                this._parentNode = e
            }, e.prototype.isDynamicRoot = function() {
                if (void 0 === this._dynamicRoot) switch (this.scopeMode()) {
                    case i.ScopeMode.Parent:
                    case i.ScopeMode.Own:
                        this._dynamicRoot = !!this.parentNode() && this.parentNode().isDynamicRoot();
                        break;
                    case i.ScopeMode.Root:
                        this._dynamicRoot = !1;
                        break;
                    case i.ScopeMode.DynamicRoot:
                        this._dynamicRoot = !0
                }
                return this._dynamicRoot
            }, e.prototype.expectedCurrentObject = function() {
                switch (this.scopeMode()) {
                    case i.ScopeMode.Parent:
                    case i.ScopeMode.Own:
                        return this.parentNode();
                    case i.ScopeMode.Root:
                    case i.ScopeMode.DynamicRoot:
                        return this
                }
            }, e.prototype.environment = function() {
                this.expectedCurrentObject();
                return this._environment || (this._environment = i.HSEnvironment.environmentForNode(this)), this._environment
            }, e.key = "HSStageObjectBase", e
        }();
    t.HSStageObjectBase = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSObject = t.IMAGE_ID_KEY = t.TYPE_KEY = t.NAME_KEY = t.TEXT_KEY = t.Y_POSITION_KEY = t.X_POSITION_KEY = t.OBJECT_ID_KEY = void 0;
    var i = r(0),
        n = r(9),
        o = r(15),
        a = r(16),
        s = r(29),
        c = r(6),
        u = r(3),
        l = r(1),
        h = r(42);
    t.OBJECT_ID_KEY = "objectID", t.X_POSITION_KEY = "xPosition", t.Y_POSITION_KEY = "yPosition", t.TEXT_KEY = "text", t.NAME_KEY = "name", t.TYPE_KEY = "type", t.IMAGE_ID_KEY = "customObjectID";
    var p = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = [], t.script = null, t.heading = 0, t.customObject = null, t.willChangeCostume = !1, t.customRules = [], t.headingInDegrees = 0, t._stageObjects = [], t
        }
        return i.__extends(r, e), r.prototype.stageObject = function() {
            var e, t = new a.HSStageObject(this.x, this.y, this.text, this.name, this.type, this.context.baseObjectScale, this.context.fontSize, this.objectID, this.fileName(), this.willChangeCostume, this.width, this.height, this.headingInDegrees);
            t.variables = this.stageVariables(t), this.latestCloneIndex = 0;
            var r = new h.HSStageRuleGroup(t, t, !0),
                i = this.rules.reduce((function(e, t) {
                    return t ? e.concat(t.stageRules(r)) : e
                }), []);
            r.addRules(i), r.setScript(null === (e = this.script) || void 0 === e ? void 0 : e.stageScript(t));
            var n = this.customRules.map((function(e) {
                var r = new h.HSStageRuleGroup(t, t);
                return r.customRule = e.stageCustomRule(r), r.customRule.parameters = e.parameters.map((function(e) {
                    return e.stageParameter(r.parentObject)
                })), r.populateEnvironment(), r
            }));
            return t.ruleGroups = [r].concat(n), this._stageObjects = [t], this.type === c.HSObjectType.text && (t.setText(this.text, "rgb(0,0,0)"), t.setWidth(t.width() * this.resizeScale), t.setHeight(t.height() * this.resizeScale)), t
        }, r.prototype.stageVariables = function(e) {
            return this.context.findAllForClassName(u.HSVariable.key).map((function(t) {
                return t.stageParameterBlock(e)
            })).filter((function(e) {
                return e.objectReferenceType == l.HSBlockType.Self
            }))
        }, r.prototype.parseJSON = function(e) {
			this.petrichorId = e.petrichorId //PETRICHOR-MOD
            void 0 === e && (e = {}), this.x = parseFloat(e[t.X_POSITION_KEY]), this.y = parseFloat(e[t.Y_POSITION_KEY]), this.text = e[t.TEXT_KEY], this.type = e[t.TYPE_KEY], this.name = e[t.NAME_KEY], this.width = parseFloat(e.width), this.height = parseFloat(e.height), this.resizeScale = parseFloat(e.resizeScale), this.headingInDegrees = parseFloat(e.rotation) || 0, this.objectID = e[t.OBJECT_ID_KEY], this.customObject = o.HSProjectContext.customObjectMap.get(e[t.IMAGE_ID_KEY]), this.customObject && s.HSImageTextureFactory.instance.prefetchImage(this.customObject)
        }, r.prototype.fileName = function() {
            if (this.customObject) return this.customObject.fileName
        }, r.prototype.addRule = function(e) {
            this.rules.push(e)
        }, r.prototype.allStageObjects = function() {
            return this._stageObjects
        }, r.prototype.addStageObject = function(e) {
            this.latestCloneIndex++, this.allStageObjects().push(e), e.cloneIndex = this.latestCloneIndex
        }, r.prototype.removeStageObject = function(e) {
            this._stageObjects.remove(e)
        }, r.prototype.canChangeCostume = function() {
            return this.type !== c.HSObjectType.text && (!c.hsIsShapeType(this.type) && this.type <= c.HSObjectType.HS_NUMBER_OF_OBJECTS)
        }, r.key = "HSObject", r
    }(n.HSManagedObject);
    t.HSObject = p, window.HSObject = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSManagedObject = void 0;
    var i = function() {
        function e(e) {
            this.context = e, this.description = this.constructor.name, e.insertObject(this)
        }
        return e.key = "HSManagedObject", e
    }();
    t.HSManagedObject = i, window.HSManagedObject = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSParameterBlock = t.TRAIT_TYPE_KEY = t.TRAIT_ID_KEY = t.TRAIT_OBJECT_ID_KEY = void 0;
    var i = r(0),
        n = r(18),
        o = r(8),
        a = r(33);
    t.TRAIT_OBJECT_ID_KEY = "HSTraitObjectIDKey", t.TRAIT_ID_KEY = "HSTraitIDKey", t.TRAIT_TYPE_KEY = "HSTraitTypeKey";
    var s = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(r, e), r.prototype.parseJSON = function(r) {
			this.petrichorId = r.petrichorId //PETRICHOR-MOD start
			// if (!this.petrichorId)
			// 	debugger //PETRICHOR-MOD end
            void 0 === r && (r = {}), e.prototype.parseJSON.call(this, r), r[t.TRAIT_ID_KEY] && this.parseTrait(r)
        }, r.prototype.stageParameterBlock = function(e) {
            var t = this.parameters.map((function(t) {
                return t.stageParameter(e)
            }));
            let result = new a.HSStageParameterBlock(this.type, this.objectReferenceType, this.object, t, this.context, e, this.sceneID) //PETRICHOR-MOD start
			result.petrichorId = this.petrichorId
			return result //PETRICHOR-MOD end
        }, r.prototype.parseTrait = function(e) {
			this.petrichorId = e.petrichorId //PETRICHOR-MOD
            this.object = this.context.findWithObjectID(o.HSObject.key, e[t.TRAIT_OBJECT_ID_KEY]), this.objectID = e[t.TRAIT_ID_KEY], this.type = e[t.TRAIT_TYPE_KEY], this.objectReferenceType = e.HSTraitObjectParameterTypeKey
        }, r.key = "HSParameterBlock", r
    }(n.HSBlock);
    t.HSParameterBlock = s, window.HSParameterBlock = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSEnvironment = t.ScopeMode = void 0;
    var i, n = r(0);
    ! function(e) {
        e[e.DynamicRoot = 0] = "DynamicRoot", e[e.Root = 1] = "Root", e[e.Own = 2] = "Own", e[e.Parent = 3] = "Parent"
    }(i = t.ScopeMode || (t.ScopeMode = {}));
    var o = function() {
        function e(e) {
            void 0 === e && (e = null), this.parentEnv = e, this.map = new Map
        }
        return e.environmentForNode = function(t) {
            var r, n, o;
            switch (t.scopeMode()) {
                case i.Parent:
                    return null !== (n = null === (r = t.parentNode()) || void 0 === r ? void 0 : r.environment()) && void 0 !== n ? n : new e(null);
                case i.Own:
                    return new e(null === (o = t.parentNode()) || void 0 === o ? void 0 : o.environment());
                case i.Root:
                case i.DynamicRoot:
                    return new e(null)
            }
        }, e.prototype.mapChain = function() {
            var e;
            return n.__spread([this.map], (null === (e = this.parentEnv) || void 0 === e ? void 0 : e.mapChain()) || [])
        }, e.prototype.get = function(e) {
            var t;
            return null === (t = this.mapChain().find((function(t) {
                return t.has(e)
            }))) || void 0 === t ? void 0 : t.get(e)
        }, e.prototype.set = function(e, t) {
            (this.mapChain().find((function(t) {
                return t.has(e)
            })) || this.map).set(e, t)
        }, e.prototype.replace = function(e) {
            return this.map = new Map(e.map), this
        }, e.prototype.clear = function() {
            this.map.clear()
        }, e
    }();
    t.HSEnvironment = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSParameter = t.ID_KEY = t.PARAMETER_TYPE_KEY = t.VARIABLE_KEY = t.CHILD_BLOCK_KEY = t.VALUE_KEY = void 0;
    var i = r(0),
        n = r(9),
        o = r(15),
        a = r(13),
        s = r(3),
        c = r(31),
        u = r(23),
        l = r(32),
        h = r(10),
        p = r(29),
        d = r(22),
        S = r(1),
        f = r(66),
        g = r(41);
    t.VALUE_KEY = "value", t.CHILD_BLOCK_KEY = "datum", t.VARIABLE_KEY = "variable", t.PARAMETER_TYPE_KEY = "type", t.ID_KEY = "id";
    var y = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(r, e), r.prototype.stageParameter = function(e) {
            let result = new c.HSStageParameter(this.value, e, this.stageParameterBlock(e), this.key) //PETRICHOR-MOD start
			result.petrichorId = this.petrichorId
			return result //PETRICHOR-MOD end
        }, r.prototype.stageParameterBlock = function(e) {
            let result = this.childBlock ? this.childBlock.stageParameterBlock(e) : null //PETRICHOR-MOD start
			if (result)
				result.petrichorId = this.petrichorId
			return result //PETRICHOR-MOD end
        }, r.prototype.parseJSON = function(e) {
			this.petrichorId = e.petrichorId //PETRICHOR-MOD
            if (void 0 === e && (e = {}), this.key = e.key, this.value = e[t.VALUE_KEY], this.type = e[t.PARAMETER_TYPE_KEY], this.type === d.HSParameterType.Object && e[t.CHILD_BLOCK_KEY]) {
                var r = e[t.CHILD_BLOCK_KEY];
                if (r.customObject) {
                    var i = o.HSProjectContext.customObjectMap.get(r.customObject);
                    this.childBlock = i, p.HSImageTextureFactory.instance.prefetchImage(i)
                }
                this.value = r.text ? r.text : r.type
            } else if (e[t.CHILD_BLOCK_KEY] && e[t.CHILD_BLOCK_KEY].type == S.HSBlockType.Scoped) {
                var n = new f.HSLocalVariable(this.context);
                n.parentNode = this, n.parseJSON(e[t.CHILD_BLOCK_KEY]), this.childBlock = n
            } else if (e[t.CHILD_BLOCK_KEY] && e[t.CHILD_BLOCK_KEY].variable) this.setChildBlockToVariableIfPossible(e[t.CHILD_BLOCK_KEY]);
            else if (e[t.CHILD_BLOCK_KEY] && e[t.CHILD_BLOCK_KEY].blockType > S.HSBlockType.HS_END_OF_TEXT_OPERATOR_BLOCKS && e[t.CHILD_BLOCK_KEY].blockType < S.HSBlockType.HS_END_OF_SCENE_REFERENCE_BLOCKS) this.setChildBlockToSceneReferenceBlockIfPossible(e[t.CHILD_BLOCK_KEY]);
            else if (e[t.CHILD_BLOCK_KEY]) {
                var a = new h.HSParameterBlock(this.context);
                a.parentNode = this, a.parseJSON(e[t.CHILD_BLOCK_KEY]), this.childBlock = a
            } else e[t.VARIABLE_KEY] && (this.setChildBlockToVariableIfPossible(e), this.setChildBlockToTraitIfPossible(e), this.setChildBlockToEventParameterIfPossible(e))
        }, r.prototype.toString = function() {
            return a.SourceFormatter.paramToSrc(this)
        }, r.prototype.setChildBlockToVariableIfPossible = function(e) {
            var r = e[t.VARIABLE_KEY];
            if (this.context.findWithObjectID(u.HSVariablePrototype.key, r)) {
                var i = new s.HSVariable(this.context);
                i.parseJSON(e), this.childBlock = i
            }
        }, r.prototype.setChildBlockToTraitIfPossible = function(e) {
            var r = e[t.VARIABLE_KEY],
                i = this.context.findWithObjectID(h.HSParameterBlock.key, r);
            i && (this.childBlock = i)
        }, r.prototype.setChildBlockToEventParameterIfPossible = function(e) {
            var r = e[t.VARIABLE_KEY],
                i = this.context.findWithObjectID(l.HSEventParameterBlock.key, r);
            i && (this.childBlock = i)
        }, r.prototype.setChildBlockToSceneReferenceBlockIfPossible = function(e) {
            var r = e[t.ID_KEY],
                i = this.context.findWithObjectID(g.HSSceneReferenceBlock.key, r);
            i && (this.childBlock = i)
        }, r.key = "HSParameter", r
    }(n.HSManagedObject);
    t.HSParameter = y, window.HSParameter = y, window.VALUE_KEY = t.VALUE_KEY, window.CHILD_BLOCK_KEY = t.CHILD_BLOCK_KEY, window.VARIABLE_KEY = t.VARIABLE_KEY, window.PARAMETER_TYPE_KEY = t.PARAMETER_TYPE_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SourceFormatter = void 0;
    var i = r(1),
        n = r(22),
        o = function() {
            function e() {}
            return e.blocksToSrc = function(e) {
                return null == e ? void 0 : e.join(", ")
            }, e.blockToSrc = function(e) {
                var t;
                return i.HSBlockType[e.type] + "(" + (null === (t = e.parameters) || void 0 === t ? void 0 : t.join(", ")) + ")"
            }, e.paramToSrc = function(e) {
                return n.HSParameterType[e.type] + ": " + e.value
            }, e.stageParamToSrc = function(e, t) {
                return e + (t ? "...\n" + t.toString() : "")
            }, e.stageControlToSrc = function(e) {
                var t = i.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")";
                return e.scripts.length > 0 && (t += " { ", t += e.scripts.map((function(e) {
                    return e.toString()
                })).join(" } ")), t
            }, e.stageMethodToSrc = function(e) {
                return i.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")"
            }, e.executableToSrc = function(e) {
                return "NOW {" + e.blocksToExecuteNow.map((function(e) {
                    return e.toString()
                })).join(", ") + "}; LATER {" + e.blocksToExecuteLater.map((function(e) {
                    return e.toString()
                })).join(", ") + "}"
            }, e
        }();
    t.SourceFormatter = o, window.SourceFormatter = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSRule = t.SCRIPT_ID_KEY = void 0;
    var i = r(0),
        n = r(8),
        o = r(15),
        a = r(12),
        s = r(18),
        c = r(10),
        u = r(74),
        l = r(32),
        h = r(1),
        p = r(22);
    t.SCRIPT_ID_KEY = "abilityID";
    var d = function(e) {
        function r(t) {
            var r = e.call(this, t) || this;
            return r.type = h.HSBlockType.Rule, r
        }
        return i.__extends(r, e), r.prototype.stageRule = function(e, t) {
            var r = new u.HSStageRule(this.childBlock().stageParameterBlock(e), e, t);
			r.petrichorId = this.petrichorId //PETRICHOR-MOD
			r.stageScript = this.script.stageScript(r) //PETRICHOR-MOD
			r.stageScript.petrichorId = this.petrichorId //PETRICHOR-MOD
            return r //PETRICHOR-MOD
        }, r.prototype.stageRules = function(e, t) {
            return [this.stageRule(e, t)]
        }, r.prototype.parseJSON = function(r) {
            if (void 0 === r && (r = {}), this.context.version < o.HSProjectVersion.CUSTOM_WHENS) this.parseLowerThanCustomWhensJSON(r);
            else {
                var i = this.context.findWithObjectID("HSScript", r[t.SCRIPT_ID_KEY]);
				this.petrichorId = r.petrichorId
                i ? (e.prototype.parseJSON.call(this, r), this.childBlock() ? (this.objectID = r.id, this.script = i) : this.context.deleteObject(this)) : this.context.deleteObject(this)
            }
        }, r.prototype.parseLowerThanCustomWhensJSON = function(r) {
            void 0 === r && (r = {});
            var i = this.context.findWithObjectID("HSScript", r[t.SCRIPT_ID_KEY]),
                a = this.context.findWithObjectID("HSObject", r[n.OBJECT_ID_KEY]);
            a && i ? (this.context.version < o.HSProjectVersion.V14 && this.parseLowerThanV14JSON(r, a), e.prototype.parseJSON.call(this, r), this.childBlock() ? (this.script = i, a.willChangeCostume = a.canChangeCostume() && i.containsChangeCostume(), a.addRule(this)) : this.context.deleteObject(this)) : this.context.deleteObject(this)
        }, r.prototype.parseLowerThanV14JSON = function(e, t) {
            var r = e.eventType,
                i = h.blockTypeForLegacyEventType(r),
                n = new c.HSParameterBlock(this.context);
            n.type = i;
            var o = new a.HSParameter(this.context);
            switch (this.parameters = [o], o.childBlock = n, i) {
                case h.HSBlockType.EventOperatorTap:
                case h.HSBlockType.EventOperatorHold:
                    this.addObjectToEventOperator(n, t);
                    break;
                case h.HSBlockType.EventOperatorBump:
                case h.HSBlockType.EventOperatorIsTouching:
                case h.HSBlockType.EventOperatorIsNotTouching:
                    this.addObjectsToBumps(n, t, e)
            }
        }, r.prototype.addObjectToEventOperator = function(e, t) {
            var r = new l.HSEventParameterBlock(this.context);
            r.object = t;
            var i = new a.HSParameter(this.context);
            i.type = p.HSParameterType.HSObject, i.childBlock = r, e.parameters = [i]
        }, r.prototype.addObjectsToBumps = function(e, t, r) {
            var i = new l.HSEventParameterBlock(this.context);
            i.object = t;
            var n = new l.HSEventParameterBlock(this.context);
            n.object = this.context.findWithObjectID("HSObject", r.collisionReceiverObject);
            var o = new a.HSParameter(this.context);
            o.type = p.HSParameterType.HSObject, o.childBlock = i;
            var s = new a.HSParameter(this.context);
            s.type = p.HSParameterType.HSObject, s.childBlock = n, e.parameters = [o, s]
        }, r.prototype.firstObject = function() {
            return this.childBlock() && this.childBlock().parameters.length > 0 ? this.childBlock().parameters[0].childBlock.object : null
        }, r.prototype.firstParam = function() {
            return this.parameters[0]
        }, r.prototype.childBlock = function() {
            return this.firstParam().childBlock
        }, r.prototype.eventType = function() {
            return this.childBlock().type
        }, r.prototype.eventParameterBlocks = function() {
            var e = [];
            return this.childBlock() && this.childBlock().parameters.forEach((function(t) {
                t.childBlock && e.push(t.childBlock)
            })), e
        }, r.prototype.paramsBlock = function() {
            if (this.childBlock().parameters[0]) return this.childBlock().parameters[0].childBlock
        }, r.prototype.matchesEvent = function(e) {
            return this.childBlock().type === e
        }, r.key = "HSRule", r
    }(s.HSBlock);
    t.HSRule = d, window.HSRule = d, window.SCRIPT_ID_KEY = t.SCRIPT_ID_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProjectContext = t.HSProjectVersion = t.ACTIVE_SCENE_KEY = t.STAGE_SIZE = t.FONT_SIZE_KEY = t.SCALE_KEY = t.CUSTOM_OBJECTS_KEY = t.VERSION_KEY = void 0;
    var i = r(0),
        n = r(27),
        o = r(4),
        a = r(14),
        s = r(12),
        c = r(10),
        u = r(76),
        l = r(22),
        h = r(1),
        p = r(2),
        d = r(16);
    t.VERSION_KEY = "version", t.CUSTOM_OBJECTS_KEY = "customObjects", t.SCALE_KEY = "baseObjectScale", t.FONT_SIZE_KEY = "fontSize", t.STAGE_SIZE = "stageSize", t.ACTIVE_SCENE_KEY = "activeSceneIndex";
    var S, f = ["ocarina", "piano", "vibraphone", "guitar", "cello", "8bit", "choir"];
    ! function(e) {
        e[e.V13 = 13] = "V13", e[e.V14 = 14] = "V14", e[e.V15 = 15] = "V15", e[e.V16 = 16] = "V16", e[e.V17 = 17] = "V17", e[e.V18 = 18] = "V18", e[e.V19 = 19] = "V19", e[e.V24 = 24] = "V24", e[e.WEBPLAYER_IN_APP = 25] = "WEBPLAYER_IN_APP", e[e.ADD_SELF = 26] = "ADD_SELF", e[e.CUSTOM_WHENS = 28] = "CUSTOM_WHENS"
    }(S = t.HSProjectVersion || (t.HSProjectVersion = {}));
    var g = function() {
        function e() {
            this.projectObjects = {}, this.version = S.CUSTOM_WHENS, this.baseObjectScale = 1, this.fontSize = 80, this.activeSceneIndex = 0, this.alreadyDownloadedInstruments = [], this._hasAccelerometerEvent = null, this._hasAccelerometerTrait = null, this._hasNoiseEvent = null
        }
        return e.prototype.findAllForClassName = function(e) {
            return this.projectObjects[e] ? this.projectObjects[e] : []
        }, e.prototype.findWithObjectID = function(e, t) {
            return this.findAllForClassName(e).find((function(e) {
                return e.objectID === t
            }))
        }, e.prototype.insertObject = function(e) {
            var t = Object.getPrototypeOf(e).constructor.key;
            this.projectObjects[t] ? this.projectObjects[t].push(e) : this.projectObjects[t] = [e]
        }, e.prototype.deleteObject = function(e) {
            var t = Object.getPrototypeOf(e).constructor.key,
                r = this.projectObjects[t].indexOf(e);
            r > -1 && this.projectObjects[t].splice(r, 1)
        }, e.prototype.parseJSON = function(r) {
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
            if (void 0 === r && (r = {}), this.version = r[t.VERSION_KEY] || S.V14, this.baseObjectScale = r[t.SCALE_KEY] || 1, this.fontSize = r[t.FONT_SIZE_KEY] || 80, this.activeSceneIndex = r[t.ACTIVE_SCENE_KEY] || 0, n.HSEmojiTextNode.WIDTH = this.fontSize / 2, n.HSEmojiTextNode.HEIGHT = this.fontSize / 2, n.HSTextNode.LINE_HEIGHT = this.fontSize < 80 ? 49 : 55, this.version >= S.V19) {
                var i = r[t.STAGE_SIZE];
                i && (o.HSStageScene.stageWidth = i.width, o.HSStageScene.stageHeight = i.height, n.HSTextNode.MAX_LINE_WIDTH = Math.min(600, i.width))
            }
            Array.isArray(r[t.CUSTOM_OBJECTS_KEY]) && r[t.CUSTOM_OBJECTS_KEY].forEach((function(t) {
                var r = new u.HSCustomObject(t.fileName, t.size.width, t.size.height, t.updatedDate);
                e.customObjectMap.set(t.id, r)
            }))
        }, e.prototype.allSoundNames = function() {
            this.alreadyDownloadedInstruments.length = 0;
            for (var e = this.findAllForClassName(s.HSParameter.key), t = [], r = 0; r < e.length; r++) {
                var i = e[r];
                switch (i.type) {
                    case l.HSParameterType.Sound:
                        -1 === t.indexOf(i.value) && t.push(i.value);
                        break;
                    case l.HSParameterType.MusicNote:
                        t = t.concat(this.allMusicNotesFor());
                        break;
                    case l.HSParameterType.Instrument:
                        t = t.concat(this.allMusicNotesFor(i.value))
                }
            }
            return t
        }, e.prototype.allMusicNotesFor = function(e) {
            return void 0 === e && (e = d.DEFAULT_INSTRUMENT), e = p.parseInstrumentName(e), this.alreadyDownloadedInstruments.includes(e) || !f.includes(e) ? [] : (this.alreadyDownloadedInstruments.push(e), i.__spread(Array(37).keys()).map((function(t) {
                return e + "/" + (t + 48) + ".wav"
            })))
        }, e.prototype.hasAccelerometerEvent = function() {
            if (null != this._hasAccelerometerEvent) return this._hasAccelerometerEvent;
            for (var e = this.findAllForClassName(a.HSRule.key), t = 0; t < e.length; t++) switch (e[t].eventType()) {
                case h.HSBlockType.EventOperatorTiltUp:
                case h.HSBlockType.EventOperatorTiltDown:
                case h.HSBlockType.EventOperatorTiltLeft:
                case h.HSBlockType.EventOperatorTiltRight:
                case h.HSBlockType.EventOperatorShake:
                    return this.preventDefaultKeys(), this._hasAccelerometerEvent = !0
            }
            return !1
        }, e.prototype.preventDefaultKeys = function() {
            var e = PIXI.keyboard.Key,
                t = PIXI.keyboardManager;
            t.setPreventDefault(e.SPACE), t.setPreventDefault(e.RIGHT), t.setPreventDefault(e.LEFT), t.setPreventDefault(e.UP), t.setPreventDefault(e.DOWN)
        }, e.prototype.hasAccelerometerTrait = function() {
            if (null != this._hasAccelerometerTrait) return this._hasAccelerometerTrait;
            for (var e = this.findAllForClassName(c.HSParameterBlock.key), t = 0; t < e.length; t++) switch (e[t].type) {
                case h.HSBlockType.StageTraitTiltUp:
                case h.HSBlockType.StageTraitTiltDown:
                case h.HSBlockType.StageTraitTiltLeft:
                case h.HSBlockType.StageTraitTiltRight:
                    return this._hasAccelerometerEvent = !0
            }
            return !1
        }, e.prototype.hasNoiseEvent = function() {
            if (null != this._hasNoiseEvent) return this._hasNoiseEvent;
            for (var e = this.findAllForClassName(a.HSRule.key), t = 0; t < e.length; t++) switch (e[t].eventType()) {
                case h.HSBlockType.EventOperatorLoudNoise:
                    return this._hasNoiseEvent = !0
            }
            return !1
        }, e.customObjectMap = new Map, e
    }();
    t.HSProjectContext = g, window.HSProjectVersion = S, window.HSProjectContext = g, window.VERSION_KEY = t.VERSION_KEY, window.CUSTOM_OBJECTS_KEY = t.CUSTOM_OBJECTS_KEY, window.SCALE_KEY = t.SCALE_KEY, window.FONT_SIZE_KEY = t.FONT_SIZE_KEY, window.STAGE_SIZE = t.STAGE_SIZE, window.ACTIVE_SCENE_KEY = t.ACTIVE_SCENE_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageObject = t.DEFAULT_INSTRUMENT = t.DEFAULT_TEMPO = t.DEBUG_DRAW_BOUNDING_BOXES = t.EDGE_OF_SCREEN_OBJECT_ID = t.BASE_STEP_SIZE = t.BASE_SPEED = void 0;
    var i = r(0),
        n = r(36),
        o = r(28),
        a = r(4),
        s = r(37),
        c = r(27),
        u = r(54),
        l = r(55),
        h = r(6),
        p = r(60),
        d = r(5),
        S = r(21),
        f = r(11),
        g = r(7);
    t.BASE_SPEED = 400, t.BASE_STEP_SIZE = 10, t.EDGE_OF_SCREEN_OBJECT_ID = "zzzEdge", t.DEBUG_DRAW_BOUNDING_BOXES = !1, t.DEFAULT_TEMPO = 120, t.DEFAULT_INSTRUMENT = "piano";
    var y = function(e) {
        function r(i, o, a, u, p, d, S, f, g, y, v, m, T) {
            void 0 === v && (v = 1), void 0 === m && (m = 1), void 0 === T && (T = 0);
            var b = e.call(this, null) || this;
            return b.x = i, b.y = o, b.text = a, b.name = u, b.type = p, b.baseObjectScale = d, b.fontSize = S, b.objectID = f, b.imageName = g, b.willChangeCostume = y, b.originalWidth = v, b.originalHeight = m, b.headingInDegrees = T, b.createOrder = -1, b._animationNumber = 0, b.sizePercentWidth = 100, b.sizePercentHeight = 100, b.speed = t.BASE_SPEED, b.tempo = t.DEFAULT_TEMPO, b.instrument = t.DEFAULT_INSTRUMENT, b.invisibilityPercent = 0, b.isFlipped = !1, b.drawingRadius = null, b.drawingColor = null, b.drawingCap = "round", b.drawingOpacityPercent = 100, b.penDown = !1, b.shouldClear = !1, b.shouldSetBackground = !1, b.creationTick = null, b.relatedCollisionRules = new Set, b.collisionImageFactory = new l.HSCollisionImageFactory, b.cloneIndex = 0, b.zIndex = 0, b.isAlive = !0, b.variables = [], b.ruleGroups = [], b.resetTextSize = function() {
                var e = c.HSTextNode.fromString(b.text),
                    t = b.view.canvas;
                if (t) {
                    if (e) {
                        var r = e.flow(t.getContext("2d"), c.HSTextNode.MAX_LINE_WIDTH),
                            i = r.width,
                            n = r.height;
                        b.originalWidth = i, b.originalHeight = n, b.collisionObject = null
                    }
                } else b.view.onTextureBuild = b.resetTextSize
            }, r.initEdges(), b.originalObject = b, b.createOrder = ++r.OBJECTS_CREATED, b.color = b.colorForType(p), b.stageObjectID = r.uniqueIdCounter++, b.type === h.HSObjectType.text ? b.text = a : b.text = null, b.pathDrawer = new n.HSPathDrawer(b.currentPoint()), b.view = new s.HSView(b.viewProps()), b
        }
        return i.__extends(r, e), r.prototype.mainRuleGroup = function() {
            return this.ruleGroups[0]
        }, r.prototype.scopeMode = function() {
            return f.ScopeMode.DynamicRoot
        }, r.prototype.allPossibleCollisionPairs = function() {
            return this.ruleGroups.flatMap((function(e) {
                return e.allPossibleCollisionPairs()
            }))
        }, r.initEdges = function() {
            r.initiatedEdgeOfScreen || (r.initiatedEdgeOfScreen = !0, r.edgeOfScreenObject = new r(0, 0, "", "", h.HSObjectType.edgeOfScreen, 1, 80, t.EDGE_OF_SCREEN_OBJECT_ID, null, !1))
        }, r.prototype.executeScripts = function() {
            this.ruleGroups.forEach((function(e) {
                return e.executeScript()
            })), this.ruleGroups.forEach((function(e) {
                return e.populateEnvironment()
            }))
        }, r.prototype.setWidth = function(e) {
            0 === e && (e = .01), e && (this.sizePercentWidth = e / this.originalWidth * (1 / this.baseScale()) * 100)
        }, r.prototype.setHeight = function(e) {
            0 === e && (e = .01), e && (this.sizePercentHeight = e / this.originalHeight * (1 / this.baseScale()) * 100)
        }, r.prototype.width = function() {
            return this.view.textureExists ? this.view.width() : Math.round(this.originalWidth * this.baseScale())
        }, r.prototype.height = function() {
            return this.view.textureExists ? this.view.height() : Math.round(this.originalHeight * this.baseScale())
        }, r.prototype.colorForType = function(e) {
            return this.type === h.HSObjectType.text || this.isShape() ? d.HSColor.rgbTextColor : d.HSColor.rgbWhiteColor
        }, r.prototype.baseScale = function() {
            return this.isFullSizeShape() ? .5 : 1
        }, r.prototype.isFullSizeShape = function() {
            return h.hsIsFullSizeShape(this.type)
        }, r.prototype.isShape = function() {
            return h.hsIsShapeType(this.type)
        }, r.prototype.update = function() {
            this.isAlive && this.view.update(this.viewProps())
        }, r.prototype.viewProps = function() {
            return {
                type: this.type,
                text: this.text,
                color: this.color,
                x: this.x,
                y: this.y,
                headingInRadians: this.headingInRadians(),
                sizePercentWidth: this.sizePercentWidth,
                sizePercentHeight: this.sizePercentHeight,
                fontSize: this.fontSize,
                opacity: this.opacity(),
                isFlipped: this.isFlipped,
                animationNumber: this.animationNumber(),
                willChangeCostume: this.willChangeCostume,
                imageName: this.imageName,
                baseObjectScale: this.baseScale(),
                stageHeight: a.HSStageScene.stageHeight,
                originalHeight: this.originalHeight,
                originalWidth: this.originalWidth
            }
        }, r.prototype.imageForCollision = function() {
            return this.collisionImageFactory.image(this.view.imageSource())
        }, r.prototype.boundingBox = function() {
            this._boundingBox || (this._boundingBox = new u.HSBoundingBox);
            var e = this.view.bounds();
            return this._boundingBox.update(this.x, this.y, e.width / 2, e.height / 2), this._boundingBox
        }, r.prototype.drawPath = function(e) {
            this.pathDrawer.drawDiff(e)
        }, r.prototype.isBlankTextObject = function() {
            return this.type === h.HSObjectType.text && !this.shouldDrawText()
        }, r.prototype.shouldDrawText = function() {
            return o.HSTokenizer.hasDrawableTokens(this.text)
        }, r.prototype.canDrawCharacter = function() {
            return this.type !== h.HSObjectType.text
        }, r.prototype.canDrawImage = function() {
            return !!this.imageName
        }, r.prototype.opacity = function() {
            return .01 * Math.max(100 - this.invisibilityPercent, 0)
        }, r.prototype.clear = function() {
            this.shouldClear = !0
        }, r.prototype.setBackground = function(e) {
            this.backgroundColor = e, this.shouldSetBackground = !0
        }, r.prototype.maxStepSize = function() {
            var e = this.speed / t.BASE_SPEED * t.BASE_STEP_SIZE;
            return Math.abs(e) >= 1 ? e : Math.sign(e)
        }, r.prototype.headingInRadians = function() {
            return this.headingInDegrees * Math.PI / 180
        }, r.prototype.changeXBy = function(e) {
            this.x += e, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown)
        }, r.prototype.changeYBy = function(e) {
            this.y += e, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown)
        }, r.prototype.setPosition = function(e, t) {
            this.x = e, this.y = t, this.pathDrawer.addPoint(this.currentPoint(), this.penDown)
        }, r.prototype.setOrigin = function(e, t) {
            this.setPosition(e + .5 * this.width(), t + .5 * this.height())
        }, r.prototype.rotateBy = function(e) {
            this.headingInDegrees = r.normalizeHeading(this.headingInDegrees + e * this.multiplier())
        }, r.prototype.moveBy = function(e) {
            this.x += this.multiplier() * Math.cos(this.headingInRadians()) * e, this.y += this.multiplier() * Math.sin(this.headingInRadians()) * e, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown)
        }, r.prototype.setText = function(e, t) {
            this.text = e, this.color = t, this.type = h.HSObjectType.text, this.resetTextSize()
        }, r.prototype.setCharacter = function(e) {
            this.type = e, this.color = this.colorForType(e), this._animationNumber = 0, this.text = null, this.imageName = null, p.HSOBJECT_SIZES[e] && (this.originalWidth = p.HSOBJECT_SIZES[e].width, this.originalHeight = p.HSOBJECT_SIZES[e].height)
        }, r.prototype.setImage = function(e) {
            this.type = h.HSObjectType.image, this.color = this.colorForType(h.HSObjectType.image), this._animationNumber = 0, this.text = null, e && (this.imageName = e.fileName, this.originalWidth = e.width, this.originalHeight = e.height)
        }, r.prototype.changePose = function() {
            this.isShape() || this._animationNumber++
        }, r.prototype.animationNumber = function() {
            return this._animationNumber % 4
        }, r.prototype.bringToFront = function() {
            this.bringToFrontFunction(this)
        }, r.prototype.sendToBack = function() {
            this.sendToBackFunction(this)
        }, r.prototype.clone = function(e) {
            this.cloneFunction(this, e)
        }, r.prototype.addToDestroyQueue = function() {
            this.isAlive = !1, this.destroyFunction(this)
        }, r.prototype.queueEventMessage = function(e) {
            this.broadcastMessageFunction(e)
        }, r.prototype.destroy = function() {
            this.view = null, this.ruleGroups = []
        }, r.prototype.isInvisible = function() {
            return this.invisibilityPercent >= 100
        }, r.prototype.deepCopy = function() {
            var e = this,
                t = new r(this.x, this.y, this.text, this.name, this.type, this.baseObjectScale, this.fontSize, this.objectID, this.imageName, this.willChangeCostume, this.originalWidth, this.originalHeight);
            return t.color = this.color, t.originalObject = this.originalObject, t.sizePercentHeight = this.sizePercentHeight, t.sizePercentWidth = this.sizePercentWidth, t.isFlipped = this.isFlipped, t.headingInDegrees = this.headingInDegrees, t.speed = this.speed, t.invisibilityPercent = this.invisibilityPercent, t._animationNumber = this._animationNumber, t.tempo = this.tempo, t.instrument = this.instrument, t.zIndex = this.zIndex, t.ruleGroups = this.ruleGroups.map((function(e) {
                return e.deepCopy(t, t)
            })), t.variables = this.variables, this.variables.forEach((function(r) {
                var i = r.computedStringValue(e.mainRuleGroup());
                r.setValue(i, t.mainRuleGroup())
            })), t
        }, r.prototype.break = function() {
            this.ruleGroups.forEach((function(e) {
                return e.break()
            }))
        }, r.normalizeHeading = function(e) {
            return (e % 360 + 360) % 360
        }, r.prototype.currentPoint = function() {
            return new n.HSLinePoint(new S.Vec2(this.x, this.y), this.drawingRadius, {
                lineColor: this.drawingColor,
                lineCap: this.drawingCap,
                lineAlpha: this.drawingOpacityPercent / 100
            })
        }, r.prototype.moveToWithinBoundary = function() {
            this.x = Math.min(this.x, a.HSStageScene.stageWidth), this.x = Math.max(this.x, 0), this.y = Math.min(this.y, a.HSStageScene.stageHeight), this.y = Math.max(this.y, 0)
        }, r.prototype.multiplier = function() {
            return this.isFlipped ? -1 : 1
        }, Object.defineProperty(r.prototype, "originX", {
            get: function() {
                return this.x - .5 * this.width()
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(r.prototype, "originY", {
            get: function() {
                return this.y - .5 * this.height()
            },
            enumerable: !1,
            configurable: !0
        }), r.OBJECTS_CREATED = 0, r.uniqueIdCounter = 0, r.initiatedEdgeOfScreen = !1, r
    }(g.HSStageObjectBase);
    t.HSStageObject = y, window.HSStageObject = y, window.BASE_SPEED = t.BASE_SPEED, window.BASE_STEP_SIZE = t.BASE_STEP_SIZE, window.EDGE_OF_SCREEN_OBJECT_ID = t.EDGE_OF_SCREEN_OBJECT_ID, window.DEBUG_DRAW_BOUNDING_BOXES = t.DEBUG_DRAW_BOUNDING_BOXES, window.DEFAULT_TEMPO = t.DEFAULT_TEMPO, window.DEFAULT_INSTRUMENT = t.DEFAULT_INSTRUMENT
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageProject = void 0;
    var i = r(1),
        n = function() {
            function e(t, r, i) {
                this.stageScenes = t, this.version = i, this.shouldResetSceneVisuals = !1, this.activeStageScene = this.stageScenes[r || 0], e.sharedInstance = this
            }
            return e.prototype.changeScene = function(e) {
                e && (this.shouldResetSceneVisuals = !0, this.activeStageScene = e, this.activeStageScene.activator.activateAllRulesForEventType(i.HSBlockType.EventOperatorStart))
            }, e.prototype.activateAllRulesForEventType = function(e) {
                this.activeStageScene.activator.activateAllRulesForEventType(e)
            }, e.prototype.executeAllActiveRules = function() {
                this.activeStageScene.activator.executeAllActiveRules()
            }, e.prototype.animationTick = function(e, t) {
                this.activeStageScene.animationTick(e), this.shouldResetSceneVisuals && (t.drawingContext.clear(), t.backgroundContext.clear(), this.shouldResetSceneVisuals = !1)
            }, e.prototype.receiveClickEvent = function(e, t) {
                this.activeStageScene.receiveClickEvent(e, t)
            }, e.prototype.receiveTouchDownEvent = function(e, t) {
                this.activeStageScene.receiveTouchDownEvent(e, t)
            }, e.prototype.receiveTouchMoveEvent = function(e, t) {
                this.activeStageScene.receiveTouchMoveEvent(e, t)
            }, e.prototype.receiveTouchUpEvent = function(e, t) {
                this.activeStageScene.receiveTouchUpEvent(e, t)
            }, e
        }();
    t.HSStageProject = n, window.HSStageProject = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSBlock = t.HSBlockClass = t.PARAMS_KEY = t.PARAMETERS_KEY = t.BLOCK_TYPE_KEY = void 0;
    var i, n = r(0),
        o = r(9),
        a = r(12),
        s = r(13),
        c = r(1);
    t.BLOCK_TYPE_KEY = "type", t.PARAMETERS_KEY = "parameters", t.PARAMS_KEY = "params",
        function(e) {
            e[e.Method = 0] = "Method", e[e.Control = 1] = "Control", e[e.ConditionalControl = 2] = "ConditionalControl", e[e.Variable = 3] = "Variable"
        }(i = t.HSBlockClass || (t.HSBlockClass = {}));
    var u = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.parameters = [], t.isControl = !1, t
        }
        return n.__extends(r, e), r.prototype.parseJSON = function(e) {
            var r = this;
            void 0 === e && (e = {}), this.type = this.type || parseInt(e[t.BLOCK_TYPE_KEY]), (e[t.PARAMETERS_KEY] || e[t.PARAMS_KEY] || []).forEach((function(e) {
                var t = new a.HSParameter(r.context);
                t.parentNode = r, t.parseJSON(e), r.parameters.push(t)
            }))
			this.petrichorId = e["petrichorId"] //PETRICHOR-MOD
        }, r.prototype.stageParameters = function(e) {
            return this.parameters.map((function(t) {
                return t.stageParameter(e)
            }))
        }, r.prototype.toString = function() {
            return s.SourceFormatter.blockToSrc(this)
        }, r.blockClassForDict = function(e) {
            switch (void 0 === e && (e = {}), e[t.BLOCK_TYPE_KEY]) {
                case c.HSBlockType.Repeat:
                case c.HSBlockType.LeaveATrail:
                case c.HSBlockType.RepeatForever:
                case c.HSBlockType.Ability:
                    return i.Control;
                case c.HSBlockType.CheckOnceIf:
                case c.HSBlockType.CheckIfElse:
                    return i.ConditionalControl
            }
            return i.Method
        }, r.key = "HSBlock", r
    }(o.HSManagedObject);
    t.HSBlock = u, window.HSBlockClass = i, window.HSBlock = u, window.BLOCK_TYPE_KEY = t.BLOCK_TYPE_KEY, window.PARAMETERS_KEY = t.PARAMETERS_KEY, window.PARAMS_KEY = t.PARAMS_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMain = t.getCurrentPlayerName = t.hsCanLoadEmojis = t.main = void 0;
    var i = r(15),
        n = r(20),
        o = r(2),
        a = r(77),
        s = r(4),
        c = r(16),
        u = r(24),
        l = r(25),
        h = r(30),
        p = r(1),
        d = r(21);
    r(82), r(83);
    var S = r(40);

    function f(e) {
        var t = new XMLHttpRequest;
        t.open("GET", "https://d2j12ek52gvmx9.cloudfront.net/emojis/d83d-de0e.png", !0), t.onreadystatechange = function() {
            4 === t.readyState && e(200 === t.status)
        }, t.onerror = function() {
            e(!1)
        }, t.send(null)
    }

    function g() {
        var e;
        return ((null === (e = window.ACCOUNT) || void 0 === e ? void 0 : e.user) || {}).nickname || "PETRICHOR-MOD" //PETRICHOR-MOD
    }
    window.addEventListener("load", (function() {
        for (var e = document.querySelectorAll("hopscotch-player"), r = e.length; --r >= 0;) window.main = t.main = new y(e[r]), window.addEventListener("resize", (function() {
            return o.HSApp.sendToApp("resize", "true")
        }))
    })), t.hsCanLoadEmojis = f, window.addEventListener("error", (function(e) {
        if (!o.isIOSApp()) return !1;
        var r = t.main.projectData.uuid;
        return console.error("ERROR", e, "uuid", r), o.HSApp.sendToApp("error", JSON.stringify(e) + ";uuid: " + r), !1
    })), t.getCurrentPlayerName = g;
    var y = function() {
        function e(t) {
            this.root = t, this.context = new i.HSProjectContext, this.isMaximized = !1, this.hasDrawn = !1, this.setiOSStageSizeIfNecessary();
            var r = document.getElementById("project_data"),
                n = t.dataset.projectJson || r && r.getAttribute("data");
            n && (this.load(JSON.parse(n)), o.HSApp.sendToApp("playerState", "loaded")), this.setSizeFromDataAttrs(), this.background = this.createCanvas("background"), this.drawing = this.createCanvas("drawing"), this.screenshot = this.createCanvas("screenshot"), this.foreground = this.createCanvas("foreground"), window.gliEmbedDebug ? this.renderer = new PIXI.WebGLRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                transparent: !0,
                view: this.foreground
            }) : this.renderer = PIXI.autoDetectRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.foreground
            }), this.screenshotRenderer = new PIXI.CanvasRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.screenshot
            });
            var a = document.getElementById("play_container");
            a && (a.style.width = "100%", a.style.height = "100%");
            try {
                this.visualContext = new h.HSVisualContext(this.background, this.drawing)
            } catch (e) {
                console.log("No gl found in this context: ", e)
            }
        }
        return e.prototype.setSizeFromDataAttrs = function() {
            this.resizeRoot(+this.root.getAttribute("width"), +this.root.getAttribute("height"))
        }, e.prototype.createCanvas = function(e) {
            var t = document.createElement("canvas");
            return t.setAttribute("name", e), t.style.background = "transparent", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%", this.root.appendChild(t), t
        }, e.prototype.toggleFullscreen = function() {
            this.isFullscreen() ? this.exitFullscreen() : this.enterFullscreen(window.innerWidth, window.innerHeight)
        }, e.prototype.isFullscreen = function() {
            return !!document.fullscreenElement || (!!document.webkitFullscreenElement || (!!document.mozFullScreenElement || (!!document.msFullScreenElement || this.isMaximized)))
        }, e.prototype.enterFullscreen = function(e, t) {
            S.CollisionManagerDebug.ENABLED || this.enterFullscreenAction(this.root, e, t)
        }, e.prototype.enterFullscreenAction = function(e, t, r) {
            var i = t || window.innerWidth,
                n = r || window.innerHeight;
            this.resizeRoot(i, n);
            var o = e.parentElement;
            if (o.requestFullscreen) o.requestFullscreen();
            else if (o.mozRequestFullScreen) o.mozRequestFullScreen();
            else if (o.webkitRequestFullscreen) o.webkitRequestFullscreen();
            else if (o.msRequestFullscreen) o.parent.msRequestFullscreen();
            else {
                this.isMaximized = !0, this.resizeRoot(i, n), this.root.style.position = "absolute", this.centerOnScreen(i, n);
                for (var a = 0; a < document.body.children.length; a++) document.body.children[a].style.visibility = "hidden";
                document.body.style.backgroundColor = "black", this.root.style.visibility = "visible", document.dispatchEvent(new Event("fullscreenchange"))
            }
        }, e.prototype.exitFullscreen = function() {
            if (this.setSizeFromDataAttrs(), document.exitFullscreen) document.exitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else {
                this.isMaximized = !1, this.root.style.position = "", this.root.style.top = "", this.root.style.left = "";
                for (var e = 0; e < document.body.children.length; e++) document.body.children[e].style.visibility = "";
                document.body.style.backgroundColor = "", this.root.style.visibility = "", document.dispatchEvent(new Event("fullscreenchange"))
            }
        }, e.prototype.resizeRoot = function(e, t) {
            void 0 === e && (e = this._oldWidth), void 0 === t && (t = this._oldHeight), this._oldWidth = e, this._oldHeight = t;
            var r = s.HSStageScene.stageWidth,
                i = s.HSStageScene.stageHeight;
            e || t ? e && !t ? t = e * i / r : !e && t && (e = t * r / i) : (e = window.innerWidth - 20, t = window.innerHeight - 250), r > i ? this.resizeRootLandscape(e, t, r, i) : this.resizeRootPortrait(e, t, r, i)
        }, e.prototype.resizeRootLandscape = function(t, r, i, n) {
            var o = Math.min(r / n, t / i),
                a = Math.max(Math.floor(i * o), e.MIN_STAGE_WIDTH),
                s = a * (n / i);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(s) + "px", this.isMaximized && this.centerOnScreen(t, r)
        }, e.prototype.resizeRootPortrait = function(e, t, r, i) {
            var n = Math.min(t / i, e / r),
                o = Math.floor(i * n),
                a = o * (r / i);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(o) + "px", this.isMaximized && this.centerOnScreen(e, t)
        }, e.prototype.centerOnScreen = function(e, r) {
            var i = e || window.innerWidth,
                n = r || window.innerHeight;
            this.root.style.top = Math.floor((n - t.main.root.offsetHeight) / 2) + "px", this.root.style.left = Math.floor((i - t.main.root.offsetWidth) / 2) + "px"
        }, e.prototype.load = function(e) {
            this.projectData = e, o.HSApp.initUserVariables(this.uuid, this.editedAt), this.context = new i.HSProjectContext, this.project = new l.HSProject(this.context, e), u.HSSoundManager.sharedInstance = new u.HSSoundManager(this.context.allSoundNames(), this.context.hasNoiseEvent())
        }, e.prototype.mute = function() {
            u.HSSoundManager.sharedInstance.mute()
        }, e.prototype.unmute = function() {
            u.HSSoundManager.sharedInstance.unmute()
        }, e.prototype.isMuted = function() {
            return u.HSSoundManager.sharedInstance.isMuted
        }, e.prototype.setiOSStageSizeIfNecessary = function() {
            if ("container" === this.root.getAttribute("stage-size")) {
                var e = this.root.getBoundingClientRect();
                s.HSStageScene.stageWidth = e.width, s.HSStageScene.stageHeight = e.height
            }
        }, e.prototype.willPlay = function(e) {
            var t;
            window.project_error && (window.project_error.style.display = "none"), e && this.load(e), s.HSStageScene.promptsToExecute = [], o.isIOSApp() || null === (t = document.querySelector("div.hs-popup")) || void 0 === t || t.remove(), this.stageProject = this.project.buildStageProject(), this.stageProject.stageScenes.flatMap((function(e) {
                return e.stageObjects
            })).forEach((function(e) {
                return e.executeScripts()
            })), this.stageProject.activateAllRulesForEventType(p.HSBlockType.EventOperatorStart), this.stageProject.executeAllActiveRules(), this.hasDrawn || this.prepareForFirstPlay(), this.registerEventCallbacks()
        }, e.prototype.prepareForFirstPlay = function() {
            var e = this,
                t = [],
                r = this.renderer;
            this.stageProject.activeStageScene.stageObjects.forEach((function(e) {
                var i = e.view.buildAllTextures().then((function(e) {
                    for (var t = 0; t < e.length; t++) r.bindTexture && r.bindTexture(e[t])
                }));
                t.push(i)
            })), Promise.all(t).then((function() {
                e.hasDrawn = !0, o.HSApp.sendToApp("playerState", "ready")
            })).catch((function(e) {
                setTimeout((function() {
                    throw "error building initial textures " + JSON.stringify(e)
                }))
            }))
        }, e.prototype.startProject = function() {
            o.HSApp.reset(), this.stageProject.shouldResetSceneVisuals = !0, this.animationTick()
        }, e.prototype.play = function(t) {
            var r = this;
            f((function(i) {
                i || (e.HS_EMOJI_HOST = location.protocol + "//d2j12ek52gvmx9.cloudfront.net/emojis"), r.resetStage(), r.willPlay(t), r.startProject()
            }))
        }, e.prototype.resetStage = function() {
            this.animationFrameReq && (this.visualContext.drawingContext.clear(), window.cancelAnimationFrame(this.animationFrameReq), this.animationFrameReq = null)
        }, e.prototype.renderFrameForBackgroundAndDrawing = function() {
            var e = this;
            if (c.DEBUG_DRAW_BOUNDING_BOXES) {
                var t = this.drawing;
                this.visualContext.drawingContext.dwContext.clearRect(0, 0, t.width, t.height)
            }
            this.stageProject.activeStageScene.stageObjects.forEach((function(t) {
                t.shouldSetBackground && (e.visualContext.backgroundContext.setBackground(t.backgroundColor), t.shouldSetBackground = !1), t.shouldClear && (e.visualContext.drawingContext.clear(), t.shouldClear = !1), t.drawPath(e.visualContext.drawingContext)
            }))
        }, e.prototype.registerEventCallbacks = function() {
            var e = this;
            (this.project.context.hasAccelerometerEvent() || this.project.context.hasAccelerometerTrait()) && n.HSAccelerometerManager.startAccelerometerUpdates(), this.listeners && this.listeners.unregister(), this.listeners = a.UIRegisterEventCallbacks(this.root, {
                pointerDown: function(t) {
                    e.stageProject && (e.stageProject.receiveClickEvent(t, e.visualContext.collisionContext), e.stageProject.receiveTouchDownEvent(t, e.visualContext.collisionContext))
                },
                pointerUp: function(t) {
                    e.stageProject && e.stageProject.receiveTouchUpEvent(t, e.visualContext.collisionContext)
                },
                pointerDrag: function(t) {
                    e.stageProject && e.stageProject.receiveTouchMoveEvent(t, e.visualContext.collisionContext)
                },
                pointerCancel: function(t) {
                    e.stageProject && e.stageProject.receiveTouchUpEvent(t, e.visualContext.collisionContext)
                }
            })
        }, e.prototype.animationTick = function() {
            this.stageProject.animationTick(this.visualContext.collisionContext, this.visualContext), this.renderer.render(this.stageProject.activeStageScene.container), this.renderFrameForBackgroundAndDrawing(), this.showPrompts(), this.requestNextFrame(), this.updateAndCleanKeyboardEvents()
        }, e.prototype.updateAndCleanKeyboardEvents = function() {
            PIXI.keyboardManager.update(.0166)
        }, e.prototype.showPrompts = function() {
            var e = s.HSStageScene.promptsToExecute[0];
            null == e || e.execute(), (null == e ? void 0 : e.isDone) && s.HSStageScene.promptsToExecute.shift()
        }, e.prototype.requestNextFrame = function() {
            var e = this;
            this.animationFrameReq = window.setTimeout((function(petrichorWasHer) {
                o.HSApp.isRunning ? e.animationTick() : e.requestNextFrame()
            }), 0)
        }, e.prototype.takeScreenshot = function() {
            this.screenshotRenderer.render(this.stageProject.activeStageScene.container), this.screenshot.style.zIndex = "99999", this.foreground.style.opacity = "0", this.screenshot.style.opacity = "1", setTimeout(o.HSApp.sendToApp.bind(void 0, "screenshot", "done"), 400)
        }, e.prototype.releaseScreenshot = function() {
            this.screenshot.style.zIndex = "-99999", this.foreground.style.opacity = "1", this.screenshot.style.opacity = "0"
        }, Object.defineProperty(e.prototype, "uuid", {
            get: function() {
                return this.projectData.uuid || ""
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "editedAt", {
            get: function() {
                return this.projectData.edited_at || ""
            },
            enumerable: !1,
            configurable: !0
        }), e.HS_EMOJI_HOST = "", e.currentPlayerName = g(), e.MIN_STAGE_WIDTH = 210, e.dpi = Math.min(window.devicePixelRatio/2, 2), e //PETRICHOR-MOD
    }();
    t.HSMain = y, window.HSMain = y, window.Vec2 = d.Vec2
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSAccelerometerManager = void 0;
    var i = r(2),
        n = function() {
            function e() {}
            return e.accelerometerFromIOSApp = function(e, t) {
                this.listener(e), this.isShakingFromApp = t
            }, e.listener = function(e) {
                var t = e.accelerationIncludingGravity,
                    r = Math.hypot(t.x, t.y, t.z) || 9.8,
                    n = Math.round(100 * t.x / r),
                    o = Math.round(100 * t.y / r),
                    a = window.orientation;
                null == a || -90 === a ? (this.tiltUp = n, this.tiltRight = o) : 90 === a ? (this.tiltUp = -n, this.tiltRight = -o) : 0 === a ? (this.tiltUp = -o, this.tiltRight = n) : (this.tiltUp = o, this.tiltRight = -n), i.isIOSApp() || this.updateShakeData(e.acceleration.x, e.acceleration.y, e.acceleration.z)
            }, e.startAccelerometerUpdates = function() {
                "DeviceMotionEvent" in window && !this.isListening && ("function" == typeof DeviceMotionEvent.requestPermission ? this.enableIOS13Accelerometer() : this.enableAccelerometer())
            }, e.checkIfNeedsToOverrideKeyboardTilt = function() {
                var e = this;
                window.addEventListener("devicemotion", (function(t) {
                    e.shouldOverrideKeyboard || (e.shouldOverrideKeyboard = !!(t.rotationRate.alpha || t.rotationRate.beta || t.rotationRate.gamma))
                }))
            }, e.enableIOS13Accelerometer = function() {
                this.isListening || i.isIOSApp() || window.addEventListener("touchend", e.deviceRequestPermissionIOS13)
            }, e.enableAccelerometer = function() {
                this.isListening || (this.isListening = !0, window.addEventListener("devicemotion", this.listener.bind(this), !1))
            }, e.tiltUsingKeyboardIfNecessary = function() {
                this.tiltHorizontalUsingKeyboard(3), this.tiltVerticalUsingKeyboard(3)
            }, e.tiltHorizontalUsingKeyboard = function(e) {
                var t = PIXI.keyboard.Key,
                    r = this.keyDownTime(e, t.LEFT, t.RIGHT);
                null !== r && (this.tiltHorizontalKeyCount = this.tiltHorizontalKeyCount + r, this.keyboardTitlLeft = -1 * Math.floor(this.tiltHorizontalKeyCount), this.keyboardTitlRight = Math.floor(this.tiltHorizontalKeyCount))
            }, e.keyDownTime = function(e, t, r) {
                var i = PIXI.keyboardManager;
                return i.isPressed(t) ? -1 : i.isDown(t) ? -1 * Math.min(e, i.downTime(t)) : i.isPressed(r) ? 1 : i.isDown(r) ? Math.min(e, i.downTime(r)) : null
            }, e.tiltVerticalUsingKeyboard = function(e) {
                var t = PIXI.keyboard.Key,
                    r = this.keyDownTime(e, t.UP, t.DOWN);
                null !== r && (this.tiltVerticalKeyCount = this.tiltVerticalKeyCount + r, this.keyboardTitlUp = -1 * Math.floor(this.tiltVerticalKeyCount), this.keyboardTitlDown = Math.floor(this.tiltVerticalKeyCount))
            }, e.tiltDirection = function() {
                if (this.tiltUsingKeyboardIfNecessary(), !this.tiltRight || !this.tiltUp) return null;
                return i.hs_direction(this.tiltRight, this.tiltUp, 30)
            }, e.updateShakeData = function(t, r, i) {
                this.xAccelerations.push(t), this.yAccelerations.push(r), this.zAccelerations.push(i), this.xAccelerations.length > e.SHAKE_MEMORY_COUNT && this.xAccelerations.shift(), this.yAccelerations.length > e.SHAKE_MEMORY_COUNT && this.yAccelerations.shift(), this.zAccelerations.length > e.SHAKE_MEMORY_COUNT && this.zAccelerations.shift()
            }, e.isShaking = function() {
                return !!this.wasSpaceKeyPressed || (i.isIOSApp() ? this.isShakingFromApp : [this.xAccelerations, this.yAccelerations, this.zAccelerations].some((function(t) {
                    return Math.abs(i.mean(t)) < e.SUDDEN_ACCEL_THRESHOLD && i.variance(t) > e.SHAKE_SENSITIVITY
                })))
            }, e.clear = function() {
                e.tiltUp = 0, e.keyboardTitlUp = 0, e.tiltDown = 0, e.keyboardTitlDown = 0, e.tiltLeft = 0, e.keyboardTitlLeft = 0, e.tiltRight = 0, e.keyboardTitlRight = 0, e.tiltHorizontalKeyCount = 0, e.tiltVerticalKeyCount = 0
            }, Object.defineProperty(e, "wasSpaceKeyPressed", {
                get: function() {
                    if (this.shouldOverrideKeyboard) return !1;
                    var e = PIXI.keyboard.Key;
                    return PIXI.keyboardManager.isPressed(e.SPACE)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "tiltUp", {
                get: function() {
                    return this.shouldOverrideKeyboard ? this._tiltUp : o(this._tiltUp, this.keyboardTitlUp)
                },
                set: function(e) {
                    this._tiltUp = e, this._tiltDown = -e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "tiltDown", {
                get: function() {
                    return this.shouldOverrideKeyboard ? this._tiltDown : o(this._tiltDown, this.keyboardTitlDown)
                },
                set: function(e) {
                    this._tiltDown = e, this._tiltUp = -e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "tiltLeft", {
                get: function() {
                    return this.shouldOverrideKeyboard ? this._tiltLeft : o(this._tiltLeft, this.keyboardTitlLeft)
                },
                set: function(e) {
                    this._tiltLeft = e, this._tiltRight = -e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e, "tiltRight", {
                get: function() {
                    return this.shouldOverrideKeyboard ? this._tiltRight : o(this._tiltRight, this.keyboardTitlRight)
                },
                set: function(e) {
                    this._tiltRight = e, this._tiltLeft = -e
                },
                enumerable: !1,
                configurable: !0
            }), e.shouldOverrideKeyboard = !1, e.isListening = !1, e.isShakingFromApp = !1, e._tiltUp = 0, e._tiltDown = 0, e._tiltLeft = 0, e._tiltRight = 0, e.deviceRequestPermissionIOS13 = function() {
                DeviceMotionEvent.requestPermission().then((function(t) {
                    "granted" === t && (e.enableAccelerometer(), window.removeEventListener("touchend", e.deviceRequestPermissionIOS13))
                })).catch(console.error)
            }, e.tiltHorizontalKeyCount = 0, e.tiltVerticalKeyCount = 0, e.keyboardTitlUp = 0, e.keyboardTitlDown = 0, e.keyboardTitlLeft = 0, e.keyboardTitlRight = 0, e.xAccelerations = [], e.yAccelerations = [], e.zAccelerations = [], e.SHAKE_MEMORY_COUNT = 10, e.SHAKE_SENSITIVITY = 60, e.SUDDEN_ACCEL_THRESHOLD = 2, e
        }();

    function o(e, t) {
        var r = e + t,
            i = a(r + 100, 400) - 200 < 0 ? 1 : -1;
        return (a(r + 100, 200) - 100) * i
    }

    function a(e, t) {
        return (e % t + t) % t
    }
    t.HSAccelerometerManager = n, window.HSAccelerometerManager = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Vec2 = void 0;
    var i = Float32Array || Array,
        n = function() {
            function e(e, t) {
                void 0 === e && (e = 0), void 0 === t && (t = 0), this.inner = new i(2), this.inner[0] = e, this.inner[1] = t
            }
            return Object.defineProperty(e.prototype, 0, {
                get: function() {
                    return this.inner[0]
                },
                set: function(e) {
                    this.inner[0] = e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, 1, {
                get: function() {
                    return this.inner[1]
                },
                set: function(e) {
                    this.inner[1] = e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this.inner[0]
                },
                set: function(e) {
                    this.inner[0] = e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this.inner[1]
                },
                set: function(e) {
                    this.inner[1] = e
                },
                enumerable: !1,
                configurable: !0
            }), e.subtract = function(e, t, r) {
                return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e
            }, e.prototype.subtract = function(t, r) {
                return this.inner = e.subtract(this.inner, t.inner, r.inner), this
            }, e.len = function(e) {
                var t = e[0],
                    r = e[1];
                return Math.sqrt(t * t + r * r)
            }, e.prototype.len = function() {
                return e.len(this.inner)
            }, e.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1]
            }, e.prototype.dot = function(t) {
                return e.dot(this.inner, t.inner)
            }, e.prototype.toString = function() {
                return "Vec2(" + this.inner[0] + ", " + this.inner[1] + ")"
            }, e
        }();
    t.Vec2 = n
}, function(e, t, r) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HSParameterType = void 0,
        function(e) {
            e[e.Default = 42] = "Default", e[e.LineWidth = 43] = "LineWidth", e[e.LineColor = 44] = "LineColor", e[e.RandomLow = 45] = "RandomLow", e[e.RandomHigh = 46] = "RandomHigh", e[e.Variable = 47] = "Variable", e[e.VariableValue = 48] = "VariableValue", e[e.Conditional = 49] = "Conditional", e[e.HSObject = 50] = "HSObject", e[e.Sound = 51] = "Sound", e[e.Event = 52] = "Event", e[e.SetText = 53] = "SetText", e[e.Object = 54] = "Object", e[e.TextOnly = 55] = "TextOnly", e[e.Scene = 56] = "Scene", e[e.MultiPurposeNumberDefault = 57] = "MultiPurposeNumberDefault", e[e.Product = 58] = "Product", e[e.Rhythm = 59] = "Rhythm", e[e.MusicNote = 60] = "MusicNote", e[e.Instrument = 61] = "Instrument"
        }(i = t.HSParameterType || (t.HSParameterType = {})), window.HSParameterType = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVariablePrototype = t.OBJECT_ID_STRING_KEY = void 0;
    var i = r(0),
        n = r(9),
        o = r(1),
        a = r(2),
        s = r(3);
    t.OBJECT_ID_STRING_KEY = "objectIdString";
    var c = function(e) {
        function r(t) {
            return e.call(this, t) || this
        }
        return i.__extends(r, e), r.prototype.parseJSON = function(e) {
			this.petrichorId = e.petrichorId //PETRICHOR-MOD
            void 0 === e && (e = {}), this.objectID = e[t.OBJECT_ID_STRING_KEY], this.name = e.name, this.type = e.type || o.HSBlockType.Object, this.initialValue = this.getInitialValue()
        }, r.prototype.getInitialValue = function() {
            return this.type !== o.HSBlockType.User ? "0" : s.HSStageVariable.parseValue(a.HSApp.initialUserVariables[this.objectID], !0) || "0"
        }, r.key = "HSVariablePrototype", r
    }(n.HSManagedObject);
    t.HSVariablePrototype = c, window.HSVariablePrototype = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSSoundManager = t.AudioContext = void 0;
    var i = r(72),
        n = r(73);
    t.AudioContext = window.AudioContext || window.webkitAudioContext;
    var o = function() {
        function e(t, r) {
            var o = this;
            this.sounds = {}, this.context = e.audioContext, this.isMuted = !1, t.forEach((function(e) {
                var t = e.split("."),
                    r = t[0],
                    n = t[1] || "mp3";
                o.sounds[r] = new i.HSSound(r, o.context, n)
            })), e.hasUnlockListener || (e.hasUnlockListener = !0, this.unlockListener = function() {
                var e = o.context.createBufferSource();
                e.buffer = o.context.createBuffer(1, 1, 22050), e.connect(o.context.destination), e.start(0), window.removeEventListener("touchstart", o.unlockListener), window.removeEventListener("touchend", o.unlockListener), window.removeEventListener("mousedown", o.unlockListener)
            }, window.addEventListener("touchstart", this.unlockListener), window.addEventListener("touchend", this.unlockListener), window.addEventListener("mousedown", this.unlockListener)), this.microphoneManager = new n.HSMicrophoneManager(this.context, r)
        }
        return e.prototype.play = function(e) {
            this.sounds[e] && !this.isMuted && this.sounds[e].play()
        }, e.prototype.playNote = function(e, t) {
            var r = t + "/" + e;
            this.sounds[r] && !this.isMuted && this.sounds[r].play()
        }, e.prototype.mute = function() {
            this.isMuted || Object.values(this.sounds).forEach((function(e) {
                return e.stop()
            })), this.isMuted = !0
        }, e.prototype.unmute = function() {
            this.isMuted = !1
        }, e.audioContext = new t.AudioContext, e.hasUnlockListener = !1, e
    }();
    t.HSSoundManager = o, window.HSSoundManager = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProject = t.SCENES_REFERENCES_KEY = t.SCENES_KEY = t.SCRIPTS_KEY = t.EVENT_PARAMETERS_KEY = t.TRAITS_KEY = t.VARIABLES_KEY = t.CUSTOM_RULE_INSTANCES_KEY = t.CUSTOM_RULES_KEY = t.RULES_KEY = t.OBJECTS_KEY = void 0;
    var i = r(0),
        n = r(9),
        o = r(8),
        a = r(43),
        s = r(14),
        c = r(26),
        u = r(23),
        l = r(32),
        h = r(10),
        p = r(48),
        d = r(17),
        S = r(3),
        f = r(49),
        g = r(81),
        y = r(41);
    t.OBJECTS_KEY = "objects", t.RULES_KEY = "rules", t.CUSTOM_RULES_KEY = "customRules", t.CUSTOM_RULE_INSTANCES_KEY = "customRuleInstances", t.VARIABLES_KEY = "variables", t.TRAITS_KEY = "traits", t.EVENT_PARAMETERS_KEY = "eventParameters", t.SCRIPTS_KEY = "abilities", t.SCENES_KEY = "scenes", t.SCENES_REFERENCES_KEY = "sceneReferences";
    var v = function(e) {
        function r(r, i) {
            void 0 === i && (i = {});
            var n = e.call(this, r) || this;
            return g.preprocess_json_for_2_0(i), n.context.parseJSON(i), n.parseObjectDictionaries(i[t.OBJECTS_KEY], i[t.SCENES_KEY]), n.parseVariableDictionaries(i[t.VARIABLES_KEY]), n.parseTraitsDictionaries(i[t.TRAITS_KEY]), n.parseEventParameters(i[t.EVENT_PARAMETERS_KEY]), n.parseSceneReferenceDictionaries(i[t.SCENES_REFERENCES_KEY]), n.parseScriptDictionaries(i[t.SCRIPTS_KEY]), n.parseRulesDictionaries(i[t.RULES_KEY]), n.importCustomRules(i[t.CUSTOM_RULES_KEY]), n.importCustomRuleInstances(i[t.CUSTOM_RULE_INSTANCES_KEY]), n.importRulesToCustomRules(i[t.CUSTOM_RULES_KEY]), n.addRulesToObjects(i[t.OBJECTS_KEY]), n.addScriptToObjects(i[t.OBJECTS_KEY]), n.addScriptToCustomRules(i[t.CUSTOM_RULES_KEY]), n.parseScenesDictionaries(i[t.SCENES_KEY]), n.addParentRelations(), n
        }
        return i.__extends(r, e), r.prototype.buildStageProject = function() {
            S.HSStageVariable.globalScope = {};
            var e = this.scenes.map((function(e) {
                return e.stageScene()
            }));
            return new d.HSStageProject(e, this.context.activeSceneIndex, this.context.version)
        }, r.prototype.addParentRelations = function() {
            var e, t, r, n, o, a, c, u, l, h, d, S, f = [],
                g = function(e) {
                    f.push.apply(f, i.__spread(e.objects)), e.objects.forEach((function(t) {
                        return t.parentNode = e
                    }))
                };
            try {
                for (var y = i.__values(this.scenes), v = y.next(); !v.done; v = y.next()) {
                    g(v.value)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    v && !v.done && (t = y.return) && t.call(y)
                } finally {
                    if (e) throw e.error
                }
            }
            var m = [],
                T = function(e) {
                    var t = e.rules.filter((function(e) {
                        return e instanceof s.HSRule
                    }));
                    m.push.apply(m, i.__spread(t)), t.forEach((function(t) {
                        return t.parentNode = e
                    }))
                };
            try {
                for (var b = i.__values(f), E = b.next(); !E.done; E = b.next()) {
                    T(P = E.value)
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    E && !E.done && (n = b.return) && n.call(b)
                } finally {
                    if (r) throw r.error
                }
            }
            var H = this.context.findAllForClassName(p.HSCustomRule.key),
                O = function(e) {
                    m.push.apply(m, i.__spread(e.rules)), e.rules.forEach((function(t) {
                        return t.parentNode = e
                    }))
                };
            try {
                for (var w = i.__values(H), _ = w.next(); !_.done; _ = w.next()) {
                    O(M = _.value)
                }
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    _ && !_.done && (a = w.return) && a.call(w)
                } finally {
                    if (o) throw o.error
                }
            }
            try {
                for (var C = i.__values(m), x = C.next(); !x.done; x = C.next()) {
                    var k = x.value;
                    k.script && (k.script.parentNode = k)
                }
            } catch (e) {
                c = {
                    error: e
                }
            } finally {
                try {
                    x && !x.done && (u = C.return) && u.call(C)
                } finally {
                    if (c) throw c.error
                }
            }
            try {
                for (var B = i.__values(f), I = B.next(); !I.done; I = B.next()) {
                    var P;
                    (P = I.value).script && (P.script.parentNode = P)
                }
            } catch (e) {
                l = {
                    error: e
                }
            } finally {
                try {
                    I && !I.done && (h = B.return) && h.call(B)
                } finally {
                    if (l) throw l.error
                }
            }
            try {
                for (var R = i.__values(H), j = R.next(); !j.done; j = R.next()) {
                    var M;
                    (M = j.value).script && (M.script.parentNode = M)
                }
            } catch (e) {
                d = {
                    error: e
                }
            } finally {
                try {
                    j && !j.done && (S = R.return) && S.call(R)
                } finally {
                    if (d) throw d.error
                }
            }
        }, r.prototype.parseEventParameters = function(e) {
            var t = this;
            void 0 === e && (e = []), e && e.forEach((function(e, r, i) {
                new l.HSEventParameterBlock(t.context).parseJSON(e)
            }))
        }, r.prototype.parseVariableDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach((function(e, r, i) {
                    new u.HSVariablePrototype(t).parseJSON(e)
                }))
            }
        }, r.prototype.parseTraitsDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach((function(e, r, i) {
                    new h.HSParameterBlock(t).parseJSON(e)
                }))
            }
        }, r.prototype.parseObjectDictionaries = function(e, r) {
            void 0 === e && (e = []), void 0 === r && (r = []);
            var i = [];
            r.length && (i = r.map((function(e) {
                return null === e[t.OBJECTS_KEY] ? [] : e[t.OBJECTS_KEY]
            })).reduce((function(e, t) {
                return e.concat(t)
            })));
            var n = this.context;
            e.forEach((function(e, t, a) {
                r.length > 0 && !i.includes(e.objectID) || new o.HSObject(n).parseJSON(e)
            }))
        }, r.prototype.parseSceneReferenceDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach((function(e, r, i) {
                    new y.HSSceneReferenceBlock(t).parseJSON(e)
                }))
            }
        }, r.prototype.addRulesToObjects = function(e) {
            var t, r;
            void 0 === e && (e = []);
            var n = this.context,
                a = function(e) {
                    var t = n.findWithObjectID(o.HSObject.key, e.objectID);
                    if (!e.rules || !t || !t.rules) return "continue";
                    var r = t.canChangeCostume(),
                        i = !1,
                        a = e.rules.map((function(e) {
                            var t = n.findWithObjectID(s.HSRule.key, e);
                            return !i && r && t && t.script.containsChangeCostume() && (i = !0), t
                        })),
                        c = e.rules.map((function(e) {
                            return n.findWithObjectID(f.HSCustomRuleInstance.key, e)
                        }));
                    t.rules = a.filter((function(e) {
                        return !!e
                    })), t.customRules = c.filter((function(e) {
                        return !!e
                    })), t.willChangeCostume = i
                };
            try {
                for (var c = i.__values(e), u = c.next(); !u.done; u = c.next()) {
                    a(u.value)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    u && !u.done && (r = c.return) && r.call(c)
                } finally {
                    if (t) throw t.error
                }
            }
        }, r.prototype.addScriptToObjects = function(e) {
            var t, r;
            void 0 === e && (e = []);
            var n = this.context;
            try {
                for (var a = i.__values(e), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value,
                        l = n.findWithObjectID(o.HSObject.key, u.objectID);
                    if (l && u.abilityID) {
                        var h = u.abilityID,
                            p = n.findWithObjectID(c.HSScript.key, h);
                        p && (l.script = p)
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (r = a.return) && r.call(a)
                } finally {
                    if (t) throw t.error
                }
            }
        }, r.prototype.addScriptToCustomRules = function(e) {
            var t, r;
            void 0 === e && (e = []);
            var n = this.context;
            try {
                for (var o = i.__values(e), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value,
                        u = n.findWithObjectID(p.HSCustomRule.key, s.id);
                    if (u && s.abilityID) {
                        var l = s.abilityID,
                            h = n.findWithObjectID(c.HSScript.key, l);
                        h && (u.script = h)
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
        }, r.prototype.importCustomRules = function(e) {
            if (void 0 === e && (e = []), e instanceof Array) {
                var t = this.context;
                e.forEach((function(e, r, i) {
                    new p.HSCustomRule(t).parseJSON(e)
                }))
            }
        }, r.prototype.importCustomRuleInstances = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e instanceof Array && e.forEach((function(e, r, i) {
                new f.HSCustomRuleInstance(t).parseJSON(e)
            }))
        }, r.prototype.importRulesToCustomRules = function(e) {
            if (void 0 === e && (e = []), e instanceof Array) {
                var t = this.context;
                e.forEach((function(e, r, i) {
                    t.findWithObjectID(p.HSCustomRule.key, e.id).addRulesFromJSON(e)
                }))
            }
        }, r.prototype.parseScriptDictionaries = function(e) {
            void 0 === e && (e = []);
            for (var t = [], r = 0; r < e.length; r++) {
                var i = new c.HSScript(this.context);
                t.push(i), i.addObjectIDFromJSON(e[r])
            }
            for (r = 0; r < t.length; r++) {
                (i = t[r]).parseJSON(e[r])
            }
        }, r.prototype.parseRulesDictionaries = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e.forEach((function(e, r, i) {
                new s.HSRule(t).parseJSON(e)
            }))
        }, r.prototype.parseScenesDictionaries = function(e) {
            if (void 0 === e && (e = []), e.length > 0) {
                var t = this.context;
                this.scenes = e.map((function(e) {
                    var r = new a.HSScene(t);
                    return r.parseJSON(e), r
                }))
            } else {
                var r = new a.HSScene(this.context);
                r.parseJSON(), this.scenes = [r]
            }
        }, r
    }(n.HSManagedObject);
    t.HSProject = v, window.HSProject = v, window.OBJECTS_KEY = t.OBJECTS_KEY, window.RULES_KEY = t.RULES_KEY, window.VARIABLES_KEY = t.VARIABLES_KEY, window.TRAITS_KEY = t.TRAITS_KEY, window.EVENT_PARAMETERS_KEY = t.EVENT_PARAMETERS_KEY, window.SCRIPTS_KEY = t.SCRIPTS_KEY, window.SCENES_KEY = t.SCENES_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSScript = t.BLOCKS_KEY = void 0;
    var i = r(0),
        n = r(9),
        o = r(44),
        a = r(14),
        s = r(18),
        c = r(35),
        u = r(79),
        l = r(47),
        h = r(1);
    t.BLOCKS_KEY = "blocks";
    var p = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.blocks = [], t
        }
        return i.__extends(r, e), r.prototype.addObjectIDFromJSON = function(e) {
            void 0 === e && (e = {}), this.objectID = e[a.SCRIPT_ID_KEY]
        }, r.prototype.stageScript = function(e) {
            return new u.HSStageScript(e, this)
        }, r.prototype.stageBlocks = function(e) {
            return this.blocks.map((function(t) {
                return t.stageBlock(e)
            }))
        }, r.prototype.isImmediatelyRecursive = function() {
            return this.blocks.length > 0 && this.blocks[0].scripts && this.blocks[0].scripts[0] === this || !this.firstMethod(0)
        }, r.prototype.firstMethod = function(e) {
            if (e > 30) return null;
            var t = this.blocks[0];
            return t ? t.isControl ? t.scripts[0] ? t.scripts[0].firstMethod(e + 1) : null : t : this
        }, r.prototype.containsChangeCostume = function(e) {
            void 0 === e && (e = {});
            for (var t = 0; t < this.blocks.length; t++) {
                var r = this.blocks[t];
                if (r.type === h.HSBlockType.ChangeCostume) return !0;
                var i = r;
                if (i.scripts)
                    for (var n = 0; n < i.scripts.length; n++) {
                        var o = i.scripts[n],
                            a = o.objectID;
                        if (!e[a] && (e[a] = !0, o.containsChangeCostume(e))) return !0
                    }
            }
            return !1
        }, r.prototype.parseJSON = function(e) {
            var r = this;
			this.petrichorId = e.petrichorId //PETRICHOR-MOD
            void 0 === e && (e = {}), (e[t.BLOCKS_KEY] || []).forEach((function(e) {
                var t;
                switch (s.HSBlock.blockClassForDict(e)) {
                    case s.HSBlockClass.Control:
                        t = new c.HSControlBlock(r.context);
                        break;
                    case s.HSBlockClass.Method:
                        t = new l.HSMethodBlock(r.context);
                        break;
                    case s.HSBlockClass.ConditionalControl:
                        t = new o.HSConditionalControl(r.context)
                }
                t.parentNode = r, t.parseJSON(e), r.blocks.push(t)
            }))
        }, r.key = "HSScript", r
    }(n.HSManagedObject);
    t.HSScript = p, window.HSScript = p, window.BLOCKS_KEY = t.BLOCKS_KEY
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSGeometricShapeTextNode = t.HSEmojiTextNode = t.HSTextNode = t.HSTextJustify = t.HSLineBox = void 0;
    var i, n = r(0),
        o = r(2),
        a = r(19),
        s = r(28),
        c = r(5),
        u = function() {
            this.width = 0
        };
    t.HSLineBox = u,
        function(e) {
            e[e.center = 1] = "center", e[e.left = 2] = "left"
        }(i = t.HSTextJustify || (t.HSTextJustify = {}));
    var l = function() {
        function e(e, t) {
            return this.text = e, this.kind = t, t === s.HSTextNodeKind.emoji ? new h(e) : t === s.HSTextNodeKind.geometricShape ? new p(e) : void 0
        }
        return e.prototype.prevWhitespace = function() {
            return this.kind === s.HSTextNodeKind.whitespace ? this : this.kind !== s.HSTextNodeKind.newline && this.prev ? this.prev.prevWhitespace() : null
        }, e.prototype.tail = function() {
            return this.next ? this.next.tail() : this
        }, e.concat = function(e, t) {
            if (e) {
                var r = e.tail();
                r.next = t, t && (t.prev = r)
            }
            return e || t
        }, e.prototype.concat = function(t) {
            return e.concat(this, t)
        }, e.prototype.replace = function(e) {
            e.prev = this.prev, e.prev && (e.prev.next = e);
            var t = e.tail();
            return t.next = this.next, t.next && (t.next.prev = t), e
        }, e.prototype.flow = function(t, r, n) {
            n = n || i.center;
            var o = this,
                a = {
                    width: 0,
                    height: 0
                };

            function c() {
                var r = o.x + o.measure(t).width,
                    i = o.y + e.LINE_HEIGHT;
                a = {
                    width: Math.max(r, a.width),
                    height: i
                }, o = o.next
            }
            for (; o;) {
                var l = o.measure(t);
                if (o.prev) {
                    var h = o.prev.measure(t).width;
                    o.x = o.prev.x + h, o.y = o.prev.y, o.lineBox = o.prev.lineBox
                } else o.x = 0, o.y = 0, o.lineBox = new u;
                if (o.lineBox.width = o.x + l.width, o.kind === s.HSTextNodeKind.newline) o.y += e.LINE_HEIGHT, o.x = 0, o.lineBox = new u, c();
                else if (o.x + l.width > r) {
                    var p = o.prevWhitespace();
                    if (p) {
                        var d = new e("\n", s.HSTextNodeKind.newline);
                        o = p.replace(d)
                    } else o = o.replace(o.forceLineBreak(t, r))
                } else c()
            }
            return n === i.center && this.center(a), a
        }, e.prototype.center = function(e) {
            this.x += (e.width - this.lineBox.width) / 2, this.next && this.next.center(e)
        }, e.prototype.measure = function(e) {
            return this.kind === s.HSTextNodeKind.newline ? {
                width: 0
            } : e.measureText(this.text)
        }, e.prototype.allNodes = function() {
            return (this.next ? this.next.allNodes() : []).concat(this)
        }, e.prototype.draw = function(e) {
            return Promise.all(this.allNodes().map((function(t) {
                return t.drawNode(e)
            })))
        }, e.prototype.drawNode = function(e) {
            return e.fillText(this.text, this.x, this.y), null
        }, e.prototype.forceLineBreak = function(t, r) {
            for (var i = "", n = this.text, o = 0; o !== n.length; ++o) {
                var a = i + n[o];
                if (t.measureText(a).width > r) {
                    var c = e.parse(i).head,
                        u = new e("\n", s.HSTextNodeKind.newline);
                    c.concat(u);
                    var l = new e(this.text.substr(i.length), this.kind);
                    return u.concat(l), c
                }
                i = a
            }
            return this
        }, e.prototype.toString = function() {
            return this.text + (this.next ? this.next.toString() : "")
        }, e.fromString = function(t) {
            return e.parse(t).head
        }, e.parse = function(t) {
            var r, i;
            return s.HSTokenizer.tokenize(t).forEach((function(t) {
                var n = new e(t.text, t.kind);
                e.concat(r, n), r = n, i || (i = r)
            })), {
                head: i,
                tail: r
            }
        }, e.MAX_LINE_WIDTH = 600, e.LINE_HEIGHT = 55, e
    }();
    t.HSTextNode = l;
    var h = function(e) {
        function t(t) {
            var r = e.call(this, t, null) || this;
            return r.kind = s.HSTextNodeKind.emoji, r
        }
        return n.__extends(t, e), t.prototype.drawNode = function(r) {
            var i = this;
            return t.getImage({
                text: this.text,
                color: c.HSColor.hsbStringFromRgbString(r.fillStyle)
            }).then((function(e) {
                var n = o.isIOSApp() ? e.width : t.WIDTH,
                    a = o.isIOSApp() ? e.height : t.HEIGHT;
                r.drawImage(e, i.x, i.y, n, a)
            })).catch((function(t) {
                return e.prototype.drawNode.call(i, r)
            }))
        }, t.getImageInfo = function(e) {
            return o.isIOSApp() ? o.requestTextureFromApp({
                type: "emoji",
                props: e
            }).then((function(e) {
                return {
                    dataURI: e.dataURI,
                    scaleFactor: window.devicePixelRatio
                }
            })) : Promise.resolve({
                dataURI: o.emoji.getImage(e.text),
                scaleFactor: 1
            })
        }, t.getImage = function(e) {
            return this.getImageInfo(e).then((function(e) {
                var t = e.dataURI;
                return a.HSMain.HS_EMOJI_HOST && (t = t.replace("/assets", a.HSMain.HS_EMOJI_HOST)), o.getImageFromUri(t).then((function(t) {
                    return t.width /= e.scaleFactor, t.height /= e.scaleFactor, t
                }))
            }))
        }, t.prototype.measure = function(e) {
            return {
                width: t.WIDTH
            }
        }, t.prototype.forceLineBreak = function(e, r) {
            var i = l.fromString("\n"),
                n = new t(this.text);
            return i.concat(n), i
        }, t.HEIGHT = 40, t.WIDTH = 40, t
    }(l);
    t.HSEmojiTextNode = h;
    var p = function(e) {
        function t(t) {
            var r = e.call(this, t, null) || this;
            return r.kind = s.HSTextNodeKind.geometricShape, r.kind = s.HSTextNodeKind.geometricShape, r
        }
        return n.__extends(t, e), t.prototype.drawNode = function(e) {
            var r = e.font,
                i = +e.font.match(/^\d*/),
                n = Math.round(i * this.getScaleFactor()),
                o = this.measure(e).width;
            e.font = n + "px " + t.FONT_FAMILIES.join(", ");
            var a = e.measureText(this.text).width;
            return e.fillText(this.text, this.x + (o - a) / 2, this.y + o - a + 1.5), e.font = r, Promise.resolve(null)
        }, t.prototype.getScaleFactor = function() {
            return "■" === this.text ? .85 : .81
        }, t.prototype.measure = function(e) {
            var r = e.font,
                i = +e.font.match(/^\d*/);
            e.font = i + "px " + t.FONT_FAMILIES.join(", ");
            var n = e.measureText(this.text);
            return e.font = r, n
        }, t.FONT_FAMILIES = ["Avenir-Book", "STIXGeneral", "sans-serif"], t
    }(l);
    t.HSGeometricShapeTextNode = p, window.HSLineBox = u, window.HSTextJustify = i, window.HSTextNode = l, window.HSEmojiTextNode = h, window.HSGeometricShapeTextNode = p
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTokenizer = t.HSToken = t.HSTextNodeKind = void 0;
    var i, n = r(2);
    ! function(e) {
        e[e.text = 0] = "text", e[e.whitespace = 1] = "whitespace", e[e.newline = 2] = "newline", e[e.emoji = 3] = "emoji", e[e.geometricShape = 4] = "geometricShape"
    }(i = t.HSTextNodeKind || (t.HSTextNodeKind = {}));
    var o = function(e, t) {
        this.text = e, this.kind = t
    };
    t.HSToken = o;
    var a = function() {
        function e() {}
        return e.hasDrawableTokens = function(t) {
            return null != t && /\S/.test(t) && !e.ONLY_VARIATION_SELECTORS.test(t)
        }, e.tokenize = function(t) {
            if (this.tokenizedStringsCache.has(t)) return this.tokenizedStringsCache.get(t);
            var r, a = [],
                s = 0,
                c = null;
            for (r = 0; r < t.length; r++)
                if (" " === t[r] || "\t" === t[r]) c !== i.whitespace && (r > s && a.push(new o(t.substring(s, r), c)), s = r, c = i.whitespace);
                else if ("\n" === t[r]) r > s && c !== i.whitespace && a.push(new o(t.substring(s, r), c)), s = r, c = i.newline;
            else if (e.ZERO_WIDTH_JOINER.test(t[r]) && c === i.emoji) {
                if (r += 1, this.isEmojiStartIndex(t, r)) {
                    var u = t.slice(r, r + 5).match(n.emoji.regex);
                    u && u[0] && (r += u[0].length - 1)
                }
            } else if (e.ONLY_VARIATION_SELECTORS.test(t[r]) && c !== i.text) {
                if (r > s) {
                    var l = r;
                    c === i.emoji && (l = r + 1), a.push(new o(t.substring(s, l), c))
                }
                s = r + 1, c = null
            } else if (this.isEmojiStartIndex(t, r)) {
                r > s && a.push(new o(t.substring(s, r), c)), s = r, c = i.emoji;
                var h = 5;
                this.isUnicodeEmojiStartIndex(t, r) && (h = 2);
                var p = t.slice(r, r + h),
                    d = e.emojiMatch(p);
                if (d) r += p.indexOf(d[0]) + (d[0].length - 1)
            } else !n.iOS && e.GEOMETRIC_SHAPES.test(t[r]) ? (r > s && a.push(new o(t.substring(s, r), c)), s = r, c = i.geometricShape) : c !== i.text && (r > s && a.push(new o(t.substring(s, r), c)), s = r, c = i.text);
            return r > s && null !== c && a.push(new o(t.substring(s, r), c)), this.clearTokenCacheIfNecessary(), this.tokenizedStringsCache.set(t, a), a
        }, e.clearTokenCacheIfNecessary = function() {
            this.tokenizedStringsCache.size > 30 && this.tokenizedStringsCache.delete(this.tokenizedStringsCache.keys().next().value)
        }, e.isEmojiStartIndex = function(t, r) {
            var i = t.slice(r, r + 5);
            return e.startsWithEmojiRegex.test(i) || e.secondCharIsSurrogate.test(i)
        }, e.isUnicodeEmojiStartIndex = function(t, r) {
            var i = t.slice(r, r + 5);
            return !(e.startsWithEmojiRegex.test(i) || e.fitzRegex.test(i))
        }, e.emojiMatch = function(t) {
            return t.match(n.emoji.regex) || t.match(e.secondCharIsSurrogate)
        }, e.rangeOfFirstEmojiStartingAtIndex = function(e, t) {
            var r = e.slice(t, t + 7).match(/[\ufe00-\ufe0f\u200d\u2640]$/);
            return 0 === r.length ? t : e.indexOf(r[0]) + 1
        }, e.ONLY_VARIATION_SELECTORS = /^[\ufe00-\ufe0f]*$/, e.ZERO_WIDTH_JOINER = /[\u200d]/, e.GEOMETRIC_SHAPES = /[\u25A0-\u25CF\u25E0-\u25E1\u25E6-\u25FF]/, e.tokenizedStringsCache = new Map, e.highSurrogates = "\ud800-\udbff", e.lowSurrogates = String.fromCharCode(56320) + "-" + String.fromCharCode(57343), e.surrogateRegex = RegExp("[" + e.lowSurrogates + e.highSurrogates + "]"), e.secondCharIsSurrogate = RegExp("^.[" + e.lowSurrogates + "]"), e.startsWithEmojiRegex = RegExp("^" + n.emoji.regex.source), e.fitzpatricks = String.fromCharCode(55356) + "[" + String.fromCharCode(57088) + "-" + String.fromCharCode(57343) + "]", e.fitzRegex = RegExp("" + e.fitzpatricks), e
    }();
    t.HSTokenizer = a, window.HSTextNodeKind = i, window.HSToken = o, window.HSTokenizer = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSImageTextureFactory = void 0;
    var i = r(2),
        n = function() {
            function e() {
                this.prefetchedImageCache = new Map
            }
            return e.prototype.build = function(e, t) {
                var r, i = null === (r = this.prefetchedImageCache.get(t.imageName)) || void 0 === r ? void 0 : r.promise;
                return i ? i.then((function(e) {
                    return PIXI.Texture.from(e)
                })) : Promise.reject(null)
            }, e.prototype.buildAll = function(e, t) {
                return this.build(e, t).then((function(e) {
                    return [e]
                }))
            }, e.prototype.prefetchImage = function(e) {
                var t = this;
                if (e) {
                    var r = e.fileName,
                        n = this.prefetchedImageCache.get(r);
                    if (null == e.updatedDate || (null == n ? void 0 : n.updatedDate) !== e.updatedDate) {
                        var o = this.getImageUrl(e).then(i.getImageFromUri).then((function(r) {
                            return t.resizeImage(r, e.width, e.height)
                        }));
                        this.prefetchedImageCache.set(r, {
                            updatedDate: e.updatedDate,
                            promise: o
                        })
                    }
                }
            }, e.prototype.resizeImage = function(e, t, r) {
                return e.width = t, e.height = r, Promise.resolve(e)
            }, e.prototype.getImageUrl = function(e) {
                var t = e.fileName,
                    r = e.updatedDate;
                return (Object.prototype.hasOwnProperty.call(window, "BASE_IMAGE_URL") ? this.getImageUrlFromBaseUrl : this.getImageUrlFromApp)(t, r)
            }, e.prototype.getImageUrlFromBaseUrl = function(e, t) {
                var r = BASE_IMAGE_URL + e,
                    i = -1 !== r.indexOf("?") ? "&" : "?";
                return Promise.resolve(r + i + "cache=" + t)
            }, e.prototype.getImageUrlFromApp = function(e, t) {
                return i.requestTextureFromApp({
                    fileName: e
                }, t).then((function(e) {
                    return e.dataURI
                }))
            }, e.instance = new e, e
        }();
    t.HSImageTextureFactory = n, window.HSImageTextureFactory = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVisualContext = void 0;
    var i = r(56),
        n = r(38),
        o = r(59),
        a = function() {
            function e(e, t) {
                this.backgroundCanvas = e, this.drawingCanvas = t, this.backgroundContext = new o.HopscotchBackgroundContext(e, this), this.drawingContext = new n.HopscotchDrawingContext(t, this), this.collisionContext = new i.HSCollisionContext
            }
            return e.collisionResolution = 64, e
        }();
    t.HSVisualContext = a, window.HSVisualContext = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageParameter = void 0;
    var i = r(0),
        n = r(3),
        o = r(13),
        a = r(6),
        s = r(1),
        c = r(5),
        u = r(7),
        l = r(17),
        h = function(e) {
            function t(t, r, i, n) {
                void 0 === i && (i = null);
                var o = e.call(this, r) || this;
                return o.value = t, o.childBlock = i, o.key = n, o
            }
            return i.__extends(t, e), t.prototype.variable = function() {
                return this.childBlock && this.childBlock.type === s.HSBlockType.Variable ? this.childBlock : null
            }, t.prototype.localVariable = function() {
                return this.childBlock && this.childBlock.type == s.HSBlockType.Scoped ? this.childBlock : null
            }, t.prototype.computedStringValue = function(e) {
                return this.childBlock ? this.childBlock.computedStringValue(e) : this.value
            }, t.prototype.computedRoundedStringValue = function(e) {
                return this.childBlock ? this.childBlock.computedRoundedStringValue(e) : n.HSStageVariable.parseValue(this.value, !1).toString()
            }, t.prototype.computedObjectType = function() {
                return this.childBlock ? a.HSObjectType.image : "string" == typeof this.value ? a.HSObjectType.text : this.value
            }, t.prototype.isSet = function(e) {
                return null !== this.value || null != this.childBlockValue(e)
            }, t.prototype.computedBooleanValue = function(e) {
                var t = this.computedValue(e);
                return "0" !== t && !!t
            }, t.prototype.computedRhythmValue = function(e) {
                var t, r = e.parentObject,
                    i = 4 * (60 / (r.tempo ? +r.tempo : 120) * 1e3);
                return null !== (t = +this.computedNumberValue(e) * i) && void 0 !== t ? t : 0
            }, t.prototype.computedValue = function(e) {
                var t = this.childBlockValue(e);
                return null != t ? t : n.HSStageVariable.parseValue(this.value, !1)
            }, t.prototype.computedNumberValue = function(e) {
                return n.HSStageVariable.parseNumberFrom(this.computedValue(e))
            }, t.prototype.computedColorString = function(e) {
                return this.childBlock ? this.childBlock.computedColorString(e) : c.HSColor.rgbStringFromHSBString(this.computedStringValue(e))
            }, t.prototype.computedLineCap = function(e) {
                if (this.childBlock) return this.childBlock.computedLineCap(e);
                var t = this.computedStringValue(e).toLowerCase();
                return c.HSLineCap.lineCapFromString(t)
            }, t.prototype.computedSceneValue = function(e) {
                var t, r;
                if (null == (t = this.childBlock ? this.childBlock.computedSceneValue(e) : this.computedStringValue(e))) return null;
                if ((r = l.HSStageProject.sharedInstance.stageScenes.find((function(e) {
                        return e.id === t
                    }))) || (r = l.HSStageProject.sharedInstance.stageScenes.find((function(e) {
                        return e.name === t
                    }))), !r) {
                    var i = parseInt(t);
                    Number.isNaN(i) || (r = l.HSStageProject.sharedInstance.stageScenes[i])
                }
                return r || null
            }, t.prototype.toString = function() {
                return o.SourceFormatter.stageParamToSrc(this.value, this.childBlock)
            }, t.prototype.childBlockValue = function(e) {
				const startTime = performance.now() //PETRICHOR-MOD start
                const result = this.childBlock ? this.childBlock.computedValue(e) : null
				const endTime = performance.now()
				if (this.petrichorId) {
					let current = PETRICHOR_PARAMETER_PERFORMANCE_EVENTS[this.petrichorId] || {maxTime: -Infinity, minTime: Infinity, totalTime: 0, executionCount: 0}
					current.executionCount++
                    const executionTime = endTime-startTime
                    current.totalTime += executionTime
                    current.maxTime = Math.max(current.maxTime, executionTime)
                    current.minTime = Math.min(current.minTIme, executionTime)
					PETRICHOR_PARAMETER_PERFORMANCE_EVENTS[this.petrichorId] = current
				}
				return result //PETRICHOR-MOD end
            }, t
        }(u.HSStageObjectBase);
    t.HSStageParameter = h, window.HSStageParameter = h
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSEventParameterBlock = t.EVENT_PARAMETER_OBJECT_KEY = t.EVENT_PARAMETER_TYPE_KEY = t.EVENT_PARAMETER_OBJECT_ID_KEY = void 0;
    var i = r(0),
        n = r(8),
        o = r(10);
    t.EVENT_PARAMETER_OBJECT_ID_KEY = "id", t.EVENT_PARAMETER_TYPE_KEY = "blockType", t.EVENT_PARAMETER_OBJECT_KEY = "objectID";
    var a = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(r, e), r.prototype.parseJSON = function(r) {
            void 0 === r && (r = {}), e.prototype.parseJSON.call(this, r), this.objectID = r[t.EVENT_PARAMETER_OBJECT_ID_KEY], this.type = r[t.EVENT_PARAMETER_TYPE_KEY];
            var i = this.context.findWithObjectID(n.HSObject.key, r[t.EVENT_PARAMETER_OBJECT_KEY]);
            this.object = i
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
        }, r.key = "HSEventParameterBlock", r
    }(o.HSParameterBlock);
    t.HSEventParameterBlock = a, window.HSEventParameterBlock = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageParameterBlock = void 0;
    var i = r(0),
        n = r(16),
        o = r(15),
        a = r(1),
        s = r(3),
        c = r(7),
        u = r(8),
        l = r(17),
        h = r(61),
        p = r(62),
        d = r(63),
        S = r(64),
        f = r(65),
        g = function(e) {
            function t(t, r, i, n, o, a, s) {
                void 0 === s && (s = null);
                var c = e.call(this, a) || this;
                return c.type = t, c.objectReferenceType = r, c.object = i, c.parameters = n, c.context = o, c.sceneID = s, c.mathCalculator = new h.HSMathCalculator, c.traitCalculator = new p.HSTraitCalculator, c.conditionalCalculator = new d.HSConditionalCalculator, c.linePropertiesParser = new S.LinePropertiesParser, c.textCalculator = new f.HSTextCalculator, c
            }
            return i.__extends(t, e), t.prototype.matchesStageObject = function(e, t) {
                var r = this.stageObjects(t),
                    i = r[0];
                if (!i && !e) return !0;
                var n = this.childParameterBlocks() && this.childParameterBlocks().length > 0 && this.childParameterBlocks()[0].type === a.HSBlockType.AnyObject;
                return this.context.version < o.HSProjectVersion.ADD_SELF && !n ? i && e && i.objectID === e.objectID : r.includes(e)
            }, t.prototype.stageObjects = function(e) {
                return this.type === a.HSBlockType.Self ? [e.parentObject] : this.usesOriginalObject() ? [e.parentObject.originalObject] : this.object ? this.object.allStageObjects() : this.type === a.HSBlockType.ScreenEdge ? [n.HSStageObject.edgeOfScreenObject] : this.type === a.HSBlockType.AnyObject ? l.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.type >= a.HSBlockType.TraitRotation && this.type < a.HSBlockType.HS_END_OF_OBJECT_TRAITS ? [e.parentObject] : this.childParameterBlocks().reduce((function(t, r) {
                    return t.concat(r.stageObjects(e))
                }), [])
            }, t.prototype.childParameterBlocks = function() {
                return this.parameters.filter((function(e) {
                    return null != e.childBlock
                })).map((function(e) {
                    return e.childBlock
                }))
            }, t.prototype.parameterBlockStringValues = function(e) {
                return this.parameters.map((function(t) {
                    return function(e, t) {
                        var r, i = (null === (r = e.childBlock) || void 0 === r ? void 0 : r.computedValue(t)) || e.value || "";
                        return s.HSStageVariable.parseValue(i, !0).toString()
                    }(t, e)
                }))
            }, t.prototype.matchesObject = function(e) {
                return this.object ? this.object === e : !e
            }, t.prototype.typeOfCalculation = function() {
                if (this.type >= a.HSBlockType.ConditionalOperatorEquals && this.type < a.HSBlockType.HS_END_OF_CONDITIONAL_OPERATORS) return "conditional";
                if (this.type > a.HSBlockType.HS_END_OF_CONDITIONAL_OPERATORS && this.type < a.HSBlockType.HS_END_OF_STAGE_TRAITS) return "trait";
                if (this.type > a.HSBlockType.HS_END_OF_STAGE_TRAITS && this.type < a.HSBlockType.HS_END_OF_MATH_OPERATORS) return "math";
                if (this.type > a.HSBlockType.HS_END_OF_MATH_OPERATORS && this.type < a.HSBlockType.HS_END_OF_COLOR_OPERATORS) return "color";
                if (this.type > a.HSBlockType.HS_END_OF_EVENT_PARAMETER_BLOCKS && this.type < a.HSBlockType.HS_END_OF_TEXT_OPERATOR_BLOCKS) return "text";
                switch (this.type) {
                    case a.HSBlockType.Random110:
                    case a.HSBlockType.Random1100:
                    case a.HSBlockType.Random11000:
                    case a.HSBlockType.Random:
                        return "math";
                    default:
                        return null
                }
            }, t.prototype.computedValue = function(e) {
                var t;
                switch (this.typeOfCalculation()) {
                    case "math":
                        var r = [this.firstParamValue(e), this.secondParamValue(e)];
                        return this.mathCalculator.computedValue(this.type, r);
                    case "trait":
                        var i = this.stageObjects(e)[0],
                            n = null !== (t = null == i ? void 0 : i.objectID) && void 0 !== t ? t : "",
                            o = this.context.findWithObjectID(u.HSObject.key, n);
                        return this.traitCalculator.computedValue(this.type, i, o);
                    case "conditional":
                        return this.computedBooleanValue(e) ? 1 : 0;
                    case "color":
                        return this.colorStringFromColorType(e);
                    case "text":
                        var a = String(this.firstParamStringValue(e)),
                            s = this.secondParamNumberValue(e),
                            c = this.endIndexValue(e),
                            l = String(this.secondParamStringValue(e));
                        return this.textCalculator.computedValue(this.type, a, s, c, l);
                    default:
                        return null
                }
            }, t.prototype.computedColorString = function(e) {
                switch (this.typeOfCalculation()) {
                    case "color":
                        return this.colorStringFromColorType(e);
                    default:
                        return this.linePropertiesParser.colorStringFromNumber(this.computedValue(e))
                }
            }, t.prototype.computedLineCap = function(e) {
                var t = this.computedStringValue(e).toLowerCase();
                return this.linePropertiesParser.lineCapFromString(t)
            }, t.prototype.computedSceneValue = function(e) {
                var t = l.HSStageProject.sharedInstance.stageScenes.indexOf(l.HSStageProject.sharedInstance.activeStageScene);
                switch (this.type) {
                    case a.HSBlockType.SceneReferenceBlock:
                        return this.sceneID;
                    case a.HSBlockType.PreviousSceneParameter:
                        return t > 0 ? l.HSStageProject.sharedInstance.stageScenes[t - 1].id : null;
                    case a.HSBlockType.NextSceneParameter:
                        return t < l.HSStageProject.sharedInstance.stageScenes.length - 1 ? l.HSStageProject.sharedInstance.stageScenes[t + 1].id : null;
                    default:
                        return this.computedStringValue(e)
                }
            }, t.prototype.colorStringFromColorType = function(e) {
                var t, r, i = null !== (r = null === (t = this.parameters) || void 0 === t ? void 0 : t.map((function(t) {
                    return t.computedValue(e)
                }))) && void 0 !== r ? r : [];
                return this.linePropertiesParser.computedColorString(this.type, i)
            }, t.prototype.computedStringValue = function(e) {
                var t = this.computedValue(e);
                return null == t ? "0" : t.toString()
            }, t.prototype.computedRoundedStringValue = function(e) {
                var t = this.computedValue(e),
                    r = s.HSStageVariable.parseValue(t, !1);
                return "number" == typeof r && (r = Math.round(1e6 * r) / 1e6), r.toString()
            }, t.prototype.computedBooleanValue = function(e) {
                var t = this.firstParamValue(e),
                    r = this.secondParamValue(e);
                return this.conditionalCalculator.computedBooleanValue(this.type, t, r, e.parentObject)
            }, t.prototype.usesOriginalObject = function() {
                return this.type === a.HSBlockType.OriginalObject || this.objectReferenceType === a.HSBlockType.OriginalObject
            }, t.prototype.firstParamValue = function(e) {
                return this.parameters.length > 0 ? this.parameters[0].computedValue(e) : 0
            }, t.prototype.firstParamStringValue = function(e) {
                return this.parameters.length > 0 ? this.parameters[0].computedStringValue(e) : ""
            }, t.prototype.secondParamValue = function(e) {
                return this.parameters.length >= 2 ? this.parameters[1].computedValue(e) : 0
            }, t.prototype.secondParamNumberValue = function(e) {
                return s.HSStageVariable.parseNumberFrom(this.secondParamValue(e))
            }, t.prototype.secondParamStringValue = function(e) {
                return this.parameters.length >= 2 ? this.parameters[1].computedStringValue(e) : ""
            }, t.prototype.endIndexValue = function(e) {
                return this.parameters.length < 3 ? 0 : this.parameters[2].computedNumberValue(e)
            }, t
        }(c.HSStageObjectBase);
    t.HSStageParameterBlock = g, window.HSStageParameterBlock = g
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSExecutable = void 0;
    var i = r(0),
        n = r(13),
        o = r(17),
        a = r(24),
        s = r(78),
        c = r(1),
        u = r(2),
        l = function() {
            function e(e, t, r) {
                void 0 === r && (r = !1), this.blocksToExecuteNow = e, this.blocksToExecuteLater = t, this.isImmediate = r
            }
            return e.prototype.newWithNewBlocksToExecuteLater = function(t) {
                return new e(this.blocksToExecuteNow, t)
            }, e.prototype.execute = function(e) {
                var t = this;
                this.blocksToExecuteNow.forEach((function(r) {
                    return t.executeBlock(r, e)
                }))
            }, e.prototype.toString = function() {
                return n.SourceFormatter.executableToSrc(this)
            }, e.prototype.executeBlock = function(e, t) {
				const startTime = performance.now() //PETRICHOR-MOD
                var r, n, l = t.parentObject,
                    h = e.parameters;
                switch (e.type) {
                    case c.HSBlockType.PlaySoundSeconds:
                    case c.HSBlockType.PlaySound:
                        r = a.HSSoundManager.sharedInstance, n = h[0].computedStringValue(t), r.play(n);
                        break;
                    case c.HSBlockType.MakeAClone:
                        var p = 1;
                        h[0] && (p = h[0].computedNumberValue(t)), l.clone(p);
                        break;
                    case c.HSBlockType.Destroy:
                        l.addToDestroyQueue();
                        break;
                    case c.HSBlockType.ChangeX:
                    case c.HSBlockType.ChangeY:
                    case c.HSBlockType.Move:
                    case c.HSBlockType.Rotate:
                        var d = l.x,
                            S = l.y,
                            f = l.headingInDegrees;
                        t.executeBlock(e), l.x === d && l.y === S && l.headingInDegrees === f && this.blocksToExecuteLater.shift();
                        break;
                    case c.HSBlockType.ChangeScene:
                        o.HSStageProject.sharedInstance.changeScene(h[0].computedSceneValue(t));
                        break;
                    case c.HSBlockType.BroadcastMessage:
                        var g = h[0].computedStringValue(t);
                        g && l.queueEventMessage(g);
                        break;
                    case c.HSBlockType.RequestSeeds:
                        ! function(e, t) {
                            var r = i.__read(e, 2),
                                n = r[0],
                                o = r[1].variable();
                            if (!o || 1 === o.computedNumberValue(t)) return;
                            var a = o.getPublicName();
                            if (!a) return;
                            var s = Math.max(0, Math.floor(n.computedNumberValue(t)));
                            ! function(e, t, r) {
                                if (!u.isIOSApp()) return void(confirm('This project is using a feature only available in the Hopscotch iOS App. Tap "OK" to download it!') && window.open("https://apps.apple.com/us/app/hopscotch-make-games/id617098629", "_self"));
                                u.HSApp.sendToApp("product:purchase", JSON.stringify({
                                    variableID: e,
                                    variableName: t,
                                    seeds: r
                                }))
                            }(o.objectID, a, s)
                        }(h, t);
                        break;
                    case c.HSBlockType.OpenProject:
                        var y = h[0].computedStringValue(t);
                        new s.HSProjectOpener(y).open();
                    default:
                        t.executeBlock(e)
                }
				const endTime = performance.now()
				if (e.petrichorId) { //PETRICHOR-MOD start
					let current = PETRICHOR_BLOCK_PERFORMANCE_STATS[e.petrichorId] || {maxTime: -Infinity, minTime: Infinity, totalTime: 0, executionCount: 0}
					current.executionCount++
                    const executionTime = endTime-startTime
                    current.totalTime += executionTime
                    current.maxTime = Math.max(current.maxTime, executionTime)
                    current.minTime = Math.min(current.minTIme, executionTime)
					PETRICHOR_BLOCK_PERFORMANCE_STATS[e.petrichorId] = current
				} //PETRICHOR-MOD end
            }, e
        }();
    t.HSExecutable = l, window.HSExecutable = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSControlBlock = t.CONTROL_SCRIPT_KEY = void 0;
    var i = r(0),
        n = r(14),
        o = r(18),
        a = r(26),
        s = r(45);
    t.CONTROL_SCRIPT_KEY = "controlScript";
    var c = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.scripts = [], t.isControl = !0, t
        }
        return i.__extends(r, e), r.prototype.stageBlock = function(e) {
            var t = new s.HSStageControl(this.type, this.stageParameters(e), e),
                r = (this.scripts[0] || new a.HSScript(this.context)).stageScript(t);
            return t.scripts = [r], t
        }, r.prototype.parseJSON = function(r) {
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
            void 0 === r && (r = {}), e.prototype.parseJSON.call(this, r);
            var i = (r[t.CONTROL_SCRIPT_KEY] || [])[n.SCRIPT_ID_KEY] || "",
                o = this.context.findWithObjectID("HSScript", i);
            o && (o.parentNode = this), this.scripts.push(o || new a.HSScript(this.context))
        }, r.key = "HSControlBlock", r
    }(o.HSBlock);
    t.HSControlBlock = c, window.HSControlBlock = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSPathDrawer = t.HSLinePoint = void 0;
    var i = r(2),
        n = function() {
            function e(t, r, n) {
                this.point = t, this.radius = r, this.lineReference = n, this.point.x = i.clamp(t.x, -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE), this.point.y = i.clamp(t.y, -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE);
                var o = Math.ceil(2 * r) / 2;
                this.radius = o < 0 ? .5 : i.clamp(o, 0, e.MAX_POINT_VALUE)
            }
            return e.prototype.clone = function() {
                return new e(this.point, this.radius, this.lineReference)
            }, e.MAX_POINT_VALUE = 1e4, e
        }();
    t.HSLinePoint = n;
    var o = function() {
        function e(e) {
            this.currentPoint = e, this.shouldDraw = !1
        }
        return e.prototype.drawDiff = function(e) {
            this.shouldDrawPath() && (this.currentPoint.radius && e.drawLine(this.previousPointWithRadiusAndColor(), this.currentPoint), this.shouldDraw = !1)
        }, e.prototype.shouldDrawPath = function() {
            return this.shouldDraw && this.currentPoint && this.previousPoint
        }, e.prototype.previousPointWithRadiusAndColor = function() {
            var e = this.previousPoint.clone();
            return e.lineReference = this.currentPoint.lineReference, e.radius = this.currentPoint.radius, e
        }, e.prototype.addPoint = function(e, t) {
            t ? (this.shouldDraw = !0, this.previousPoint = this.currentPoint, this.currentPoint = e) : (this.currentPoint = e, this.shouldDraw = !1)
        }, e
    }();
    t.HSPathDrawer = o, window.HSLinePoint = n, window.HSPathDrawer = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSView = void 0;
    var i = r(28),
        n = r(2),
        o = r(52),
        a = r(29),
        s = r(53),
        c = r(6),
        u = r(5),
        l = function() {
            function e(e) {
                this.props = e, this.sprite = new PIXI.Sprite, this.canvas = null, this.textureExists = !1, this.onTextureBuild = null, this.buildTexture(), this.update(this.props)
            }
            return e.prototype.factory = function() {
                return this.shouldDrawText() ? o.HSTextTextureFactory.instance : this.canDrawImage() ? a.HSImageTextureFactory.instance : s.HSCharacterTextureFactory.instance
            }, e.prototype.imageSource = function() {
                return this.sprite ? this.sprite.texture.baseTexture.source : null
            }, e.prototype.bounds = function() {
                if (this.sprite) return this.sprite.getBounds()
            }, e.prototype.width = function() {
                return this.sprite.texture.baseTexture.width * this.sprite.scale.x
            }, e.prototype.height = function() {
                return this.sprite.texture.baseTexture.height * this.sprite.scale.y
            }, e.prototype.shouldDrawText = function() {
                return i.HSTokenizer.hasDrawableTokens(this.props.text)
            }, e.prototype.canDrawImage = function() {
                return !!this.props.imageName
            }, e.prototype.buildTexture = function() {
                var e = this;
                this.createCanvasIfNeeded();
                var t = this;
                return this.hasEmoji = !!this.shouldDrawText() && n.hasEmoji(this.props.text), this.factory().build(this.canvas, this.props).then((function(r) {
                    return r === t.sprite.texture || (r.baseTexture === t.sprite.texture.baseTexture && t.sprite.texture.destroy(), e.shouldDrawText() && r.update(), t.sprite.texture = r, t.sprite.anchor.x = .5, t.sprite.anchor.y = .5, t.originalWidth = t.sprite.texture.baseTexture.width, t.originalHeight = t.sprite.texture.baseTexture.height, t.textureExists = !0, t.onBuildCallback()), r
                })).catch((function(e) {
                    n.log("error in building texture", e, t.props)
                }))
            }, e.prototype.onBuildCallback = function() {
                var e = this.onTextureBuild;
                this.onTextureBuild = null, e && e()
            }, e.prototype.createCanvasIfNeeded = function() {
                this.canvas || this.shouldDrawText() && (this.canvas = document.createElement("canvas"))
            }, e.prototype.buildAllTextures = function() {
                return this.factory().buildAll(this.canvas, this.props)
            }, e.prototype.getOriginalScale = function(e, t, r) {
                return isNaN(e) ? r === c.HSObjectType.text ? 1 / o.HSTextTextureFactory.scaleUp() : 1 : e / t
            }, e.prototype.getSpriteScale = function(e, t, r, i, n, o) {
                void 0 === o && (o = !1);
                var a = this.getOriginalScale(t, e, n),
                    s = r * i * .01 * this.scaleForObjectType(n),
                    c = Math.abs(s),
                    u = s / c,
                    l = Math.min(c, 1024) * u * a;
                return Math.round(e * l) / e * (o ? -1 : 1)
            }, e.prototype.update = function(e) {
                var t = this.props;
                if (this.props = e, this.needsNewTexture(t) && this.buildTexture(), this.textureExists) {
                    var r = this.sprite.texture.baseTexture.width,
                        i = this.sprite.texture.baseTexture.height;
                    this.sprite.scale.x = this.getSpriteScale(r, e.originalWidth, e.baseObjectScale, e.sizePercentWidth, this.props.type, e.isFlipped), this.sprite.scale.y = this.getSpriteScale(i, e.originalHeight, e.baseObjectScale, e.sizePercentHeight, this.props.type, !1), this.sprite.position.x = Math.round(e.x), this.sprite.position.y = Math.round(e.stageHeight - e.y), this.sprite.alpha = e.opacity, this.sprite.rotation = -1 * e.headingInRadians;
                    var n = e.color;
                    this.hasEmoji && (n = u.HSColor.rgbWhiteColor), this.sprite.tint = u.HSColor.hexToTint(n)
                }
            }, e.prototype.needsNewTexture = function(e) {
                return e.text !== this.props.text || this.quantizedScaleY(e) !== this.quantizedScaleY(this.props) || this.quantizedScaleX(e) !== this.quantizedScaleX(this.props) || e.animationNumber !== this.props.animationNumber || e.type !== this.props.type || e.imageName !== this.props.imageName || e.color !== this.props.color && !n.onlyEmoji(e.text) && n.hasEmoji(e.text)
            }, e.prototype.quantizedScaleY = function(e) {
                var t = e.sizePercentHeight || 100;
                return Math.ceil(.01 * t)
            }, e.prototype.quantizedScaleX = function(e) {
                var t = e.sizePercentWidth || 100;
                return Math.ceil(.01 * t)
            }, e.prototype.scaleForObjectType = function(e) {
                return e === c.HSObjectType.hexagon ? 1.05 : 1
            }, e.xmlSerializer = new XMLSerializer, e.svgCache = {}, e
        }();
    t.HSView = l, window.HSView = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HopscotchDrawingContext = void 0;
    var i = r(4),
        n = r(19),
        o = function() {
            function e(e, t) {
                this.drawingCanvas = e, this.visualContext = t, this.dwContext = this.layerFromCanvas2d(e), this.clear()
            }
            return e.prototype.layerFromCanvas2d = function(e) {
                var t = this.canvasWidth(),
                    r = this.canvasHeight();
                e.width = t, e.height = r;
                var i = e.getContext("2d");
                return i && (i.translate(0, r), i.scale(n.HSMain.dpi, -1 * n.HSMain.dpi)), i
            }, e.prototype.canvasWidth = function() {
                return i.HSStageScene.stageWidth * n.HSMain.dpi
            }, e.prototype.canvasHeight = function() {
                return i.HSStageScene.stageHeight * n.HSMain.dpi
            }, e.prototype.clear = function() {
                this.dwContext && this.dwContext.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height)
            }, e.prototype.drawLine = function(e, t) {
                var r = this.dwContext;
                if (r.beginPath(), r.moveTo.apply(r, [e.point.x, e.point.y]), e.point.x === t.point.x && e.point.y === t.point.y) switch (r.fillStyle = t.lineReference.lineColor, r.globalAlpha = t.lineReference.lineAlpha, t.lineReference.lineCap) {
                    case "square":
                        r.fillRect(t.point.x - t.radius, t.point.y - t.radius, 2 * t.radius, 2 * t.radius);
                        break;
                    case "butt":
                        break;
                    case "round":
                        r.arc(t.point.x, t.point.y, t.radius, 0, 2 * Math.PI), r.fill()
                } else r.globalAlpha = t.lineReference.lineAlpha, r.lineWidth = 2 * t.radius, r.lineCap = t.lineReference.lineCap, r.strokeStyle = t.lineReference.lineColor, r.fillStyle = t.lineReference.lineColor, r.lineTo.apply(r, [t.point.x, t.point.y]), r.stroke();
                r.globalAlpha = 1
            }, e.MAX_TEXTURE_SIDE_LENGTH = 1024, e
        }();
    t.HopscotchDrawingContext = o, window.HopscotchDrawingContext = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionManager = void 0;
    var i = r(6),
        n = r(57),
        o = r(58),
        a = r(40),
        s = function() {
            function e() {
                this.cache = {}, this.tempRect = new PIXI.Rectangle, this.currentTime = Date.now(), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.ctx.imageSmoothingEnabled = !1, this.debug = new a.CollisionManagerDebug
            }
            return e.prototype.tick = function(e) {
                this.currentTime = Date.now(), this.cleanCache(), this.debug.draw(e, this.getCollisionObjectFrom.bind(this))
            }, e.prototype.collisionId = function(e) {
                var t;
                return e.type === i.HSObjectType.text ? "text_" + e.text : null === (t = e.view.sprite.texture.baseTexture.imageUrl) || void 0 === t ? void 0 : t.replace(/hsScale=\".\"/g, "")
            }, e.prototype.collisionInfo = function(e) {
                var t = this.collisionId(e);
                if (!t) return null;
                if (this.cache[t]) return this.cache[t];
                var r = e.view.sprite,
                    i = r.texture.baseTexture,
                    n = i.source,
                    o = i.width,
                    a = i.height;
                if (!n || !o || !a) return null;
                var s = r.texture.baseTexture.resolution;
                this.canvas.width = o, this.canvas.height = a, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(n, 0, 0, o * s, a * s, 0, 0, o, a);
                var c = this.createCollisionInfo();
                return c ? (this.cache[t] = c, c) : null
            }, e.prototype.createCollisionInfo = function() {
                for (var t = this.canvas.width, r = this.canvas.height, i = this.ctx.getImageData(0, 0, t, r).data, o = Number.MAX_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, u = e.PIXEL_OFFSET, l = new Uint8ClampedArray(t * r / u | 0), h = 3; h < i.length; h += 4 * u) {
                    var p = h / 4 | 0;
                    if (0 !== i[h]) {
                        l[p / u | 0] = 255;
                        var d = p % t,
                            S = p / t | 0;
                        d < o && (o = d), d > s && (s = d), S < a && (a = S), S > c && (c = S)
                    }
                }
                var f = new n.CollisionInfo(l, 0 | t, 0 | r, 0 | o, 0 | a, 0 | s, 0 | c);
                return f.isEmpty() ? null : f
            }, e.prototype.cleanCache = function() {
                for (var e in this.cache) this.cache[e].readyToDrop(this.currentTime) && delete this.cache[e]
            }, e.prototype.createCollisionObject = function(e) {
                var t = this.collisionInfo(e);
                if (t) {
                    t.updateDropTime(this.currentTime);
                    var r = e.view.sprite,
                        i = new o.CollisionObject(r, t);
                    return e.collisionObject = i, i
                }
            }, e.prototype.areSpritesLoaded = function(e, t) {
                return e.view.sprite.texture.baseTexture.hasLoaded && t.view.sprite.texture.baseTexture.hasLoaded
            }, e.prototype.getCollisionObjectFrom = function(e) {
                return e.collisionObject && this.cache[this.collisionId(e)] ? (e.collisionObject.info.updateDropTime(this.currentTime), e.collisionObject) : this.createCollisionObject(e)
            }, e.prototype.existsCollisionBetweenStageObjects = function(e, t) {
                if (!this.areSpritesLoaded(e, t)) return !1;
                var r = this.getCollisionObjectFrom(e),
                    i = this.getCollisionObjectFrom(t);
                return !(!r || !i) && this.existsCollisionBetween(r, i)
            }, e.prototype.existsCollisionBetween = function(e, t) {
                return e !== t && (!! function(e, t) {
                    return c(e.sprite.getBounds(), t.sprite.getBounds())
                }(e, t) && (!! function(e, t) {
                    return c(e.getMaskBounds(), t.getMaskBounds())
                }(e, t) && this.existsMaskCollision(e, t)))
            }, e.prototype.existsMaskCollision = function(e, t) {
                var r, i, n, o, s, c, u, l = e.getMaskBounds(),
                    h = t.getMaskBounds(),
                    p = (r = l, i = h, n = this.tempRect, o = Math.max(r.x, i.x), s = Math.max(r.y, i.y), c = Math.min(r.x + r.width, i.x + i.width), u = Math.min(r.y + r.height, i.y + i.height), n.x = o, n.y = s, n.width = c - o, n.height = u - s, n),
                    d = 0 | p.x,
                    S = 0 | p.y,
                    f = d + p.width | 0,
                    g = S + p.height | 0;
                return a.CollisionManagerDebug.ENABLED ? this.debug.checkCollision(e, t, d, S, f, g) : !!this.intersectionCoverMoreThan(.5, p, l, h) || this.checkCollision(e, t, d, S, f, g)
            }, e.prototype.intersectionCoverMoreThan = function(e, t, r, i) {
                var n = t.width * t.height,
                    o = r.width * r.height * e,
                    a = i.width * i.height * e;
                return o > a ? n > o : n > a
            }, e.prototype.checkCollision = function(e, t, r, i, n, o) {
                for (var a = r; a < n; a++)
                    for (var s = i; s < o; s++)
                        if (e.hit(a, s) && t.hit(a, s)) return !0;
                return !1
            }, e.PIXEL_OFFSET = 2, e
        }();

    function c(e, t) {
        return !(e.x >= t.x + t.width || t.x >= e.x + e.width) && !(e.y >= t.y + t.height || t.y >= e.y + e.height)
    }
    t.CollisionManager = s, window.CollisionManager = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionManagerDebug = void 0;
    var i = function() {
        function e() {
            if (e.ENABLED) {
                this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d");
                var t = document.getElementsByName("foreground")[0];
                this.canvas.width = t.width / window.devicePixelRatio, this.canvas.height = t.height / window.devicePixelRatio, this.canvas.style.position = "absolute", this.canvas.style.top = "0px", this.canvas.style.left = "0px", this.canvas.style.pointerEvents = "none", this.canvas.style.width = "100%", this.canvas.style.height = "100%", document.body.getElementsByTagName("hopscotch-player")[0].append(this.canvas)
            }
        }
        return e.prototype.draw = function(t, r) {
            var i = this;
            e.ENABLED && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), t.forEach((function(e) {
                if (e.view.sprite.texture.baseTexture.hasLoaded) {
                    var t = r(e);
                    t && i.drawCollisionObject(t)
                }
            })))
        }, e.prototype.drawCollisionObject = function(t) {
            var r, i, o;
            e.ENABLED && (r = t, i = this.ctx, n((o = r.sprite.getBounds()).x, o.y, o.width, o.height, "#ffff00", i), function(e, t) {
                var r = e.getMaskBounds();
                n(r.x, r.y, r.width, r.height, "#ff0000", t)
            }(t, this.ctx), function(e, t) {
                t.fillStyle = "#0000ff", t.beginPath();
                for (var r = e.sprite.getBounds(), i = r.left; i < r.right; i++)
                    for (var n = r.top; n < r.bottom; n++) {
                        e.hit(i, n) && t.rect(i, n, 1, 1)
                    }
                t.fill(), t.closePath()
            }(t, this.ctx))
        }, e.prototype.checkCollision = function(t, r, i, o, a, s) {
            return !!e.ENABLED && (n(i, o, a - i, s - o, "#0000ff", this.ctx), function(e, t, r, i, n, o, a) {
                var s = !1;
                e.fillStyle = "#00ff00", e.beginPath();
                for (var c = i; c < o; c++)
                    for (var u = n; u < a; u++) {
                        t.hit(c, u) && r.hit(c, u) && (s = !0, e.rect(c, u, 1, 1))
                    }
                return e.fill(), e.closePath(), s
            }(this.ctx, t, r, i, o, a, s))
        }, e.ENABLED = !1, e
    }();

    function n(e, t, r, i, n, o) {
        o.beginPath(), o.globalAlpha = .5, o.lineWidth = 2, o.strokeStyle = n, o.rect(e, t, r, i), o.stroke(), o.globalAlpha = 1, o.closePath()
    }
    t.CollisionManagerDebug = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSSceneReferenceBlock = t.SCENE_REFERENCE_SCENE_KEY = t.SCENE_REFERENCE_TYPE_KEY = t.SCENE_REFERENCE_ID_KEY = void 0;
    var i = r(0),
        n = r(10);
    t.SCENE_REFERENCE_ID_KEY = "id", t.SCENE_REFERENCE_TYPE_KEY = "blockType", t.SCENE_REFERENCE_SCENE_KEY = "scene";
    var o = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(r, e), r.prototype.parseJSON = function(r) {
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
            void 0 === r && (r = {}), e.prototype.parseJSON.call(this, r), this.objectID = r[t.SCENE_REFERENCE_ID_KEY], this.type = r[t.SCENE_REFERENCE_TYPE_KEY], this.sceneID = r[t.SCENE_REFERENCE_SCENE_KEY]
        }, r.key = "HSSceneReferenceBlock", r
    }(n.HSParameterBlock);
    t.HSSceneReferenceBlock = o, window.HSSceneReferenceBlock = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageRuleGroup = void 0;
    var i = r(0),
        n = r(1),
        o = r(11),
        a = r(6),
        s = r(2),
        c = r(5),
        u = r(16),
        l = r(7),
        h = r(68),
        p = r(4),
        d = function(e) {
            function t(t, r, i) {
                void 0 === i && (i = !1);
                var n = e.call(this, t) || this;
                return n.parentObject = r, n.isBase = i, n._rules = [], n
            }
            return i.__extends(t, e), t.prototype.scopeMode = function() {
                return this.isBase ? o.ScopeMode.Parent : o.ScopeMode.DynamicRoot
            }, t.prototype.populateEnvironment = function(e) {
                var t, r, n, o = this,
                    a = (null === (n = this.customRule) || void 0 === n || n.name, e || this);
                if (this.customRule) {
                    try {
                        for (var s = i.__values(this.customRule.parameters), c = s.next(); !c.done; c = s.next()) {
                            var u = c.value;
                            this.environment().set(u.key, u.computedStringValue(a))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    a = this, this.customRuleGroups().forEach((function(e) {
                        e.populateEnvironment(o)
                    }))
                }
            }, t.prototype.deepCopy = function(e, r) {
                var i, n, o = new t(e, r);
                o.addRules(this.rules().map((function(e) {
                    return e.deepCopy(o)
                }))), o.setScript(null === (i = this.script()) || void 0 === i ? void 0 : i.deepCopy(o)), o.customRule = null === (n = this.customRule) || void 0 === n ? void 0 : n.deepCopy(o);
                var a = this.environment();
                return o.environment().replace(a), o
            }, t.prototype.setScript = function(e) {
                this._script = e
            }, t.prototype.addRules = function(e) {
                this._rules = this.rules().concat(e)
            }, t.prototype.rules = function() {
                return this._rules.length > 0 ? this._rules : []
            }, t.prototype.customRuleGroups = function() {
                var e;
                return (null === (e = this.customRule) || void 0 === e ? void 0 : e.ruleGroups) || []
            }, t.prototype.allRulesIncludingNested = function() {
                var e = this.customRuleGroups().flatMap((function(e) {
                    return e.allRulesIncludingNested()
                }));
                return this.rules().concat(e)
            }, t.prototype.script = function() {
                return this._script
            }, t.prototype.executeScript = function() {
                var e;
                null === (e = this.script()) || void 0 === e || e.execute(this), this.customRuleGroups().forEach((function(e) {
                    return e.executeScript()
                }))
            }, t.prototype.activateAllStageRulesForEventType = function(e, t) {
                this.allStageRulesForEventTypeAndObject(e, t).forEach((function(e) {
                    return e.activate()
                })), this.customRuleGroups().forEach((function(r) {
                    return r.activateAllStageRulesForEventType(e, t)
                }))
            }, t.prototype.allStageRulesForEventTypeAndObject = function(e, t) {
                return this.allStageRulesForEventType(e).filter((function(e) {
                    return e.matchesFirstObject(t)
                }))
            }, t.prototype.allStageRulesForEventType = function(e) {
                return this.rules().filter((function(t) {
                    return t.matchesEvent(e)
                }))
            }, t.prototype.allPossibleCollisionPairs = function() {
                var e = this.allStageRulesForEventType(n.HSBlockType.EventOperatorIsTouching),
                    t = this.allStageRulesForEventType(n.HSBlockType.EventOperatorIsNotTouching),
                    r = this.allStageRulesForEventType(n.HSBlockType.EventOperatorBump),
                    i = e.concat(t).concat(r).reduce((function(e, t) {
                        return e.concat(t.collisionPairs())
                    }), []),
                    o = this.customRuleGroups().flatMap((function(e) {
                        return e.allPossibleCollisionPairs()
                    })).filter((function(e) {
                        return !!e
                    }));
                return i.concat(o)
            }, t.prototype.executeActiveRules = function() {
                for (var e = this.rules(), t = e.length, r = 0; r !== t; ++r) e[r].conditionIsTrue(this) && (e[r].hasBlocksToExecute() || (e[r].isActive = !1), e[r].activate()), e[r].execute(this);
                this.customRuleGroups().forEach((function(e) {
                    return e.executeActiveRules()
                }))
            }, t.prototype.break = function() {
                this.rules().forEach((function(e) {
                    return e.break()
                })), this.customRuleGroups().forEach((function(e) {
                    return e.break()
                }))
            }, t.prototype.maxStepSize = function() {
                return this.parentObject.maxStepSize()
            }, t.prototype.executeBlock = function(e) {
                var t, r, i, o, l, d, S, f = e.firstIntegerValue(this),
                    g = e.parameters,
                    y = this.parentObject;
                switch (e.type) {
                    case n.HSBlockType.Move:
                        y.moveBy(f);
                        break;
                    case n.HSBlockType.SetPosition:
                        y.setPosition(g[0].computedNumberValue(this), g[1].computedNumberValue(this));
                        break;
                    case n.HSBlockType.SetSize:
                        if (null === (t = g[0]) || void 0 === t ? void 0 : t.isSet(this)) {
                            var v = null === (r = g[0]) || void 0 === r ? void 0 : r.computedValue(this);
                            "number" == typeof v && (y.sizePercentWidth = v, y.sizePercentHeight = v)
                        }
                        break;
                    case n.HSBlockType.Grow:
                        i = Math.max(100 + f, 0), y.sizePercentWidth *= .01 * i, y.sizePercentHeight *= .01 * i;
                        break;
                    case n.HSBlockType.Scale:
                        y.sizePercentWidth *= .01 * f, y.sizePercentHeight *= .01 * f;
                        break;
                    case n.HSBlockType.Shrink:
                        i = Math.max(100 - f, 0), o = y.sizePercentWidth * i * .01, y.sizePercentWidth = Math.max(o, 1e-7), o = y.sizePercentHeight * i * .01, y.sizePercentHeight = Math.max(o, 1e-7);
                        break;
                    case n.HSBlockType.SetHeading:
                        y.headingInDegrees = u.HSStageObject.normalizeHeading(f);
                        break;
                    case n.HSBlockType.ChangeX:
                        y.changeXBy(f);
                        break;
                    case n.HSBlockType.ChangeY:
                        y.changeYBy(f);
                        break;
                    case n.HSBlockType.Rotate:
                        y.rotateBy(f);
                        break;
                    case n.HSBlockType.ChangeSpeed:
                        y.speed = f;
                        break;
                    case n.HSBlockType.SetInvisibility:
                        y.invisibilityPercent = f;
                        break;
                    case n.HSBlockType.Flip:
                        y.isFlipped = !y.isFlipped;
                        break;
                    case n.HSBlockType.SetTrailColor:
                        y.drawingColor = g[0].computedColorString(this);
                        break;
                    case n.HSBlockType.SetTrailWidth:
                        y.drawingRadius = f / 2;
                        break;
                    case n.HSBlockType.SetTrailCap:
                        y.drawingCap = g[0].computedLineCap(this);
                        break;
                    case n.HSBlockType.SetTrailOpacity:
                        y.drawingOpacityPercent = f;
                        break;
                    case n.HSBlockType.Clear:
                        y.clear();
                        break;
                    case n.HSBlockType.PenDown:
                        y.penDown = !0;
                        break;
                    case n.HSBlockType.PenUp:
                        y.penDown = !1;
                        break;
                    case n.HSBlockType.ChangeCostume:
                        y.changePose();
                        break;
                    case n.HSBlockType.SetText:
                        S = c.HSColor.rgbTextColor, g.length >= 2 && (S = g[1].computedColorString(this)), y.setText(g[0].computedRoundedStringValue(this), S);
                        break;
                    case n.HSBlockType.SetTextToInput:
                        p.HSStageScene.promptsToExecute.push(new h.HSStagePrompt(this, e));
                        break;
                    case n.HSBlockType.SetVariable:
                        (l = g[0].variable()) && l.setValue(g[1].computedStringValue(this), this), (d = g[0].localVariable()) && d.setValue(g[1].computedStringValue(this));
                        break;
                    case n.HSBlockType.SaveInput:
                    case n.HSBlockType.ShowPopup:
                        p.HSStageScene.promptsToExecute.push(new h.HSStagePrompt(this, e));
                        break;
                    case n.HSBlockType.ChangeVariable:
                        l = g[0].variable(), d = g[0].localVariable();
                        var m = l || d;
                        if (m) {
                            var T = m.computedNumberValue(this) + g[1].computedNumberValue(this);
                            m.setValue(T, this)
                        }
                        break;
                    case n.HSBlockType.BringToFront:
                        y.bringToFront();
                        break;
                    case n.HSBlockType.SendToBack:
                        y.sendToBack();
                        break;
                    case n.HSBlockType.SetImage:
                        g[0].computedObjectType() === a.HSObjectType.text ? y.setText(g[0].value, c.HSColor.rgbTextColor) : g[0].computedObjectType() === a.HSObjectType.image ? y.setImage(g[0].childBlock) : y.setCharacter(g[0].computedObjectType());
                        break;
                    case n.HSBlockType.SetColor:
                        y.color = g[0].computedColorString(this);
                        break;
                    case n.HSBlockType.SetWidthAndHeight:
                        g[0].isSet(this) && y.setWidth(g[0].computedNumberValue(this)), g[1].isSet(this) && y.setHeight(g[1].computedNumberValue(this));
                        break;
                    case n.HSBlockType.SetZIndex:
                        var b = g[0].computedNumberValue(this);
                        b !== y.zIndex && (y.zIndex = b, p.HSStageScene.dirtySort = !0);
                        break;
                    case n.HSBlockType.SetBackground:
                        y.setBackground(g[0].computedColorString(this));
                        break;
                    case n.HSBlockType.SetOriginXY:
                        y.setOrigin(g[0].computedNumberValue(this), g[1].computedNumberValue(this));
                        break;
                    case n.HSBlockType.SetCenterXY:
                        y.setPosition(g[0].computedNumberValue(this), g[1].computedNumberValue(this));
                        break;
                    case n.HSBlockType.SetTempo:
                        y.tempo = f;
                        break;
                    case n.HSBlockType.SetInstrument:
                        y.instrument = s.parseInstrumentName(g[0].computedStringValue(this)) || u.DEFAULT_INSTRUMENT
                }
            }, t
        }(l.HSStageObjectBase);
    t.HSStageRuleGroup = d
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSScene = void 0;
    var i = r(0),
        n = r(9),
        o = r(4),
        a = r(8),
        s = r(25),
        c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.objects = [], t
            }
            return i.__extends(t, e), t.prototype.parseJSON = function(e) {
                var t = this;
				this.petrichorId = e.petrichorId //PETRICHOR-MOD
                void 0 === e && (e = {}), e[s.OBJECTS_KEY] && e[s.OBJECTS_KEY].length > 0 ? this.objects = e[s.OBJECTS_KEY].map((function(e) {
                    return t.context.findWithObjectID(a.HSObject.key, e)
                })) : e[s.OBJECTS_KEY] && 0 === e[s.OBJECTS_KEY].length ? this.objects = [] : this.objects = this.context.findAllForClassName(a.HSObject.key), this.name = e.name, this.objectID = e.id
            }, t.prototype.stageScene = function() {
                var e = this.objects.map((function(e) {
                    return e.stageObject()
                }));
                return new o.HSStageScene(e, this.name, this.objectID, this.context)
            }, t.key = "HSScene", t
        }(n.HSManagedObject);
    t.HSScene = c, window.HSScene = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSConditionalControl = t.FALSE_SCRIPT_KEY = void 0;
    var i = r(0),
        n = r(14),
        o = r(45),
        a = r(35),
        s = r(26);
    t.FALSE_SCRIPT_KEY = "controlFalseScript";
    var c = function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i.__extends(r, e), r.prototype.parseJSON = function(r) {
			this.petrichorId = r.petrichorId //PETRICHOR-MOD
            void 0 === r && (r = {}), e.prototype.parseJSON.call(this, r);
            var i = (r[t.FALSE_SCRIPT_KEY] || [])[n.SCRIPT_ID_KEY] || "",
                o = this.context.findWithObjectID("HSScript", i);
            o && (o.parentNode = this), this.scripts.push(o || new s.HSScript(this.context))
        }, r.prototype.stageBlock = function(e) {
            var t = new o.HSStageControl(this.type, this.stageParameters(e), e),
                r = this.trueScript().stageScript(t),
                i = this.falseScript().stageScript(t);
            return t.scripts = [r, i], t
        }, r.prototype.trueScript = function() {
            return this.scripts[0]
        }, r.prototype.falseScript = function() {
            return this.scripts[1]
        }, r.key = "HSConditionalControl", r
    }(a.HSControlBlock);
    t.HSConditionalControl = c, window.HSConditionalControl = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageControl = void 0;
    var i = r(0),
        n = r(34),
        o = r(13),
        a = r(46),
        s = r(31),
        c = r(1),
        u = r(7),
        l = r(11),
        h = function(e) {
            function t(t, r, i) {
                void 0 === r && (r = []);
                var n = e.call(this, i) || this;
                return n.type = t, n.parameters = r, n.isImmediate = !1, n.isControl = !0, n
            }
            return i.__extends(t, e), t.prototype.scopeMode = function() {
                switch (this.type) {
                    case c.HSBlockType.Ability:
                        return l.ScopeMode.Root;
                    case c.HSBlockType.Repeat:
                    case c.HSBlockType.RepeatForever:
                    case c.HSBlockType.CheckOnceIf:
                    case c.HSBlockType.CheckIfElse:
                    case c.HSBlockType.LeaveATrail:
                        return l.ScopeMode.Own;
                    default:
                        return l.ScopeMode.Parent
                }
            }, t.prototype.integerValue = function(e) {
                switch (this.type) {
                    case c.HSBlockType.Repeat:
                        return Math.round(this.firstIntegerValue(e));
                    case c.HSBlockType.RepeatForever:
                        return 1 / 0;
                    default:
                        return 0
                }
            }, t.prototype.script = function(e) {
                switch (this.type) {
                    case c.HSBlockType.CheckOnceIf:
                    case c.HSBlockType.CheckIfElse:
                        return this.parameters[0].computedBooleanValue(e) ? this.trueScript() : this.falseScript();
                    default:
                        return this.trueScript()
                }
            }, t.prototype.trueScript = function() {
                return this.scripts[0]
            }, t.prototype.falseScript = function() {
                return this.scripts[1]
            }, t.prototype.toString = function() {
                return o.SourceFormatter.stageControlToSrc(this)
            }, t.prototype.firstIntegerValue = function(e) {
                var t;
                return (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.computedNumberValue(e)) || 0
            }, t.prototype.executableForStepSize = function(e, t) {
                switch (this.type) {
                    case c.HSBlockType.Repeat:
                    case c.HSBlockType.RepeatForever:
                        return this.executableForRepeat(e, t);
                    case c.HSBlockType.LeaveATrail:
                        return this.executableForLeaveATrail(e, t);
                    case c.HSBlockType.CheckOnceIf:
                    case c.HSBlockType.CheckIfElse:
                        return this.scripts[0].isImmediatelyRecursive() ? new n.HSExecutable([], []) : this.script(t).executableForStepSize(e, t);
                    case c.HSBlockType.Ability:
                        if (this.scripts[0].isImmediatelyRecursive()) return new n.HSExecutable([], []);
                        var r = this.script(t);
                        return this.parameters.forEach((function(e) {
                            var i;
                            return null === (i = r.environment()) || void 0 === i ? void 0 : i.set(e.key, e.computedStringValue(t))
                        })), r.executableForStepSize(e, t)
                }
            }, t.prototype.executableForRepeat = function(e, t) {
                switch (this.integerValue(t)) {
                    case 0:
                        return new n.HSExecutable([], []);
                    case 1:
                        return this.script(t).executableForStepSize(e, t);
                    default:
                        return this.executableWithRepeatOnTheEnd(e, t)
                }
            }, t.prototype.executableForLeaveATrail = function(e, t) {
                var r = this.script(t).executableForStepSize(e, t),
                    i = [new a.HSStageMethod(c.HSBlockType.PenDown, [], this)];
                this.parameters[0] && i.push(new a.HSStageMethod(c.HSBlockType.SetTrailColor, [this.parameters[0]], this)), this.parameters[1] && i.push(new a.HSStageMethod(c.HSBlockType.SetTrailWidth, [this.parameters[1]], this));
                var o = new a.HSStageMethod(c.HSBlockType.PenUp, [], this);
                return new n.HSExecutable(i.concat(r.blocksToExecuteNow), r.blocksToExecuteLater.concat(o))
            }, t.prototype.executableWithRepeatOnTheEnd = function(e, r) {
                var i = this.script(r).executableForStepSize(e, r),
                    n = this.integerValue(r) - 1,
                    o = new s.HSStageParameter("" + n, this.parentNode()),
                    a = new t(this.type, [o], this.parentNode());
                this.scripts.forEach((function(e) {
                    return e.updateParentNode(a)
                })), a.scripts = this.scripts;
                var c = i.blocksToExecuteLater;
                return c.push(a), i.newWithNewBlocksToExecuteLater(c)
            }, t
        }(u.HSStageObjectBase);
    t.HSStageControl = h, window.HSStageControl = h
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageMethod = void 0;
    var i = r(0),
        n = r(24),
        o = r(34),
        a = r(13),
        s = r(31),
        c = r(1),
        u = r(4),
        l = r(2),
        h = function(e) {
            function t(t, r, i) {
                void 0 === r && (r = []);
                var n = e.call(this, i) || this;
                return n.type = t, n.parameters = r, n.isControl = !1, n.id = "", n.isImmediate = [c.HSBlockType.PenDown, c.HSBlockType.SetTrailColor, c.HSBlockType.SetTrailWidth, c.HSBlockType.SetTrailCap, c.HSBlockType.PenUp, c.HSBlockType.SetVariable, c.HSBlockType.ChangeVariable, c.HSBlockType.Comment].includes(t), n
            }
            return i.__extends(t, e), t.prototype.isOverStepSize = function(e, t) {
                return this.usesStepSize() && Math.abs(this.firstIntegerValue(t)) > e
            }, t.prototype.isWaitBlock = function() {
                return this.type === c.HSBlockType.Wait || this.type === c.HSBlockType.WaitSeconds
            }, t.prototype.isFinishedTimestampBlock = function(e) {
                return this.type === c.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) <= Date.now()
            }, t.prototype.isUnfinishedTimestampBlock = function(e) {
                return this.type === c.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) > Date.now()
            }, t.prototype.usesStepSize = function() {
                return -1 !== [c.HSBlockType.ChangeX, c.HSBlockType.ChangeY, c.HSBlockType.Move, c.HSBlockType.Rotate].indexOf(this.type)
            }, t.prototype.firstIntegerValue = function(e) {
                var t;
                return (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.computedNumberValue(e)) || 0
            }, t.prototype.calculateValueMinusOneStep = function(e, t) {
                return this.isOverStepSize(e, t) ? this.signOfFirstValue(t) * (Math.abs(this.firstIntegerValue(t)) - Math.abs(e)) : 0
            }, t.prototype.executableForStepSize = function(e, t, r) {
                return this.isWaitBlock() ? this.waitTilMillisecondsForWait(t).executableForStepSize(e, t, r) : this.type == c.HSBlockType.PlayNote ? this.playNoteAndReturnWaitTime(e, t, r) : new o.HSExecutable(this.blocksToExecuteNow(e, t), this.blocksToExecuteLater(e, t))
            }, t.prototype.playNoteAndReturnWaitTime = function(e, r, i) {
                var o = r.parentObject,
                    a = n.HSSoundManager.sharedInstance,
                    u = this.parameters[0].computedStringValue(r);
                return a.playNote(u, o.instrument), new t(c.HSBlockType.Wait, [new s.HSStageParameter(this.parameters[1].computedRhythmValue(r) + "", this.parentNode())], this.parentNode()).waitTilMillisecondsForWait(r).executableForStepSize(e, r, i)
            }, t.prototype.waitTilMillisecondsForWait = function(e) {
                var r = this.getWaitMilliseconds(e),
                    i = Date.now() + r;
                return new t(c.HSBlockType.WaitTilTimestamp, [new s.HSStageParameter(i + "", this.parentNode())], this.parentNode())
            }, t.prototype.getWaitMilliseconds = function(e) {
                if (!this.isWaitBlock()) return 0;
                var t = this.firstIntegerValue(e);
                return this.type === c.HSBlockType.WaitSeconds ? 1e3 * t : t
            }, t.prototype.blocksToExecuteNow = function(e, r) {
                if (this.type === c.HSBlockType.WaitTilTimestamp) return [];
                if (!this.isOverStepSize(e, r)) return [this];
                var i = new s.HSStageParameter("" + e * this.signOfFirstValue(r), this.parentNode());
                return [new t(this.type, [i], this.parentNode())]
            }, t.prototype.toString = function() {
                return a.SourceFormatter.stageMethodToSrc(this)
            }, t.prototype.signOfFirstValue = function(e) {
                var t = this.firstIntegerValue(e);
                return t / Math.abs(t)
            }, t.prototype.isPromptDone = function() {
                var e, t = (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.value) || "-1",
                    r = u.HSStageScene.promptsToExecute.find((function(e) {
                        return e.id === t
                    }));
                return null == r ? void 0 : r.isDone
            }, t.prototype.blocksToExecuteLater = function(e, r) {
                switch (this.type) {
                    case c.HSBlockType.WaitTilTimestamp:
                        return this.firstIntegerValue(r) > Date.now() ? [this] : [];
                    case c.HSBlockType.ChangeX:
                    case c.HSBlockType.Ability:
                    case c.HSBlockType.ChangeY:
                    case c.HSBlockType.AnyObject:
                    case c.HSBlockType.Move:
                    case c.HSBlockType.Rotate:
                        var i = this.calculateValueMinusOneStep(e, r),
                            n = new s.HSStageParameter("" + i, this.parentNode());
                        return [new t(this.type, [n], this.parentNode())];
                    case c.HSBlockType.WaitUntilInputIsDone:
                        return this.isPromptDone() ? [] : [this];
                    case c.HSBlockType.SaveInput:
                    case c.HSBlockType.SetTextToInput:
                    case c.HSBlockType.ShowPopup:
                        return "" === this.id && (this.id = l.generateUUID()), [new t(c.HSBlockType.WaitUntilInputIsDone, [new s.HSStageParameter(this.id, this.parentNode())], this.parentNode())];
                    case c.HSBlockType.PlaySound:
                        return [new t(c.HSBlockType.Wait, [new s.HSStageParameter(this.parameters[1].computedValue(r) + "", this.parentNode())], this.parentNode())];
                    case c.HSBlockType.PlayNote:
                        return [new t(c.HSBlockType.Wait, [new s.HSStageParameter(this.parameters[1].computedRhythmValue(r) + "", this.parentNode())], this.parentNode())];
                    case c.HSBlockType.PlaySoundSeconds:
                        return [new t(c.HSBlockType.WaitSeconds, [new s.HSStageParameter(this.parameters[1].computedValue(r) + "", this.parentNode())], this.parentNode())];
                    default:
                        return []
                }
            }, t
        }(r(7).HSStageObjectBase);
    t.HSStageMethod = h, window.HSStageMethod = h
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMethodBlock = void 0;
    var i = r(0),
        n = r(46),
        o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.stageBlock = function(e) {
                let result = new n.HSStageMethod(this.type, this.stageParameters(e), e) //PETRICHOR-MOD
				result.petrichorId = this.petrichorId //PETRICHOR-MOD
				return result //PETRICHOR-MOD
            }, t.key = "HSMethodBlock", t
        }(r(18).HSBlock);
    t.HSMethodBlock = o, window.HSMethodBlock = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCustomRule = void 0;
    var i = r(0),
        n = r(49),
        o = r(9),
        a = r(14),
        s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rules = [], t.customRules = [], t.script = null, t
            }
            return i.__extends(t, e), t.prototype.parseJSON = function(e) {
				this.petrichorId = e.petrichorId //PETRICHOR-MOD
                void 0 === e && (e = {}), this.name = e.name, this.objectID = e.id, this.addRulesFromJSON(e)
            }, t.prototype.addRulesFromJSON = function(e) {
                void 0 === e && (e = {});
                var t = this.context,
                    r = [],
                    i = [];
                e.rules.forEach((function(e) {
                    var o = t.findWithObjectID(a.HSRule.key, e);
                    o && r.push(o);
                    var s = t.findWithObjectID(n.HSCustomRuleInstance.key, e);
                    s && i.push(s)
                })), this.rules = r, this.customRules = i
            }, t.key = "HSCustomRule", t
        }(o.HSManagedObject);
    t.HSCustomRule = s, window.HSCustomRule = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCustomRuleInstance = void 0;
    var i = r(0),
        n = r(80),
        o = r(42),
        a = r(18),
        s = r(48),
        c = r(9),
        u = r(12),
        l = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.parameters = [], t
            }
            return i.__extends(t, e), t.prototype.parseJSON = function(e) {
				this.petrichorId = e.petrichorId //PETRICHOR-MOD
                var t = this;
                void 0 === e && (e = {}), this.objectID = e.id;
                var r = e.customRuleID;
                this.customRule = this.context.findWithObjectID(s.HSCustomRule.key, r), (e[a.PARAMETERS_KEY] || []).forEach((function(e) {
                    var r = new u.HSParameter(t.context);
                    r.parentNode = t.parentNode, r.parseJSON(e), t.parameters.push(r)
                }))
            }, t.prototype.name = function() {
                var e;
                return null === (e = this.customRule) || void 0 === e ? void 0 : e.name
            }, t.prototype.script = function() {
                var e;
                return null === (e = this.customRule) || void 0 === e ? void 0 : e.script
            }, t.prototype.rules = function() {
                var e;
                return (null === (e = this.customRule) || void 0 === e ? void 0 : e.rules) || []
            }, t.prototype.customRules = function() {
                var e;
                return (null === (e = this.customRule) || void 0 === e ? void 0 : e.customRules) || []
            }, t.prototype.stageCustomRule = function(e) {
                var t = this.parameters.map((function(t) {
                        return t.stageParameter(e)
                    })),
                    r = new n.HSStageCustomRule(e, this.name());
                return r.ruleGroups = this.stageRuleGroups(e, r), r.parameters = t, r
            }, t.prototype.stageRuleGroups = function(e, t) {
                var r = [this.baseRuleGroup(e, t)],
                    i = this.objectID,
                    n = this.customRules().map((function(t) {
                        if (t.objectID != i) {
                            var r = new o.HSStageRuleGroup(e, e.parentObject, !0);
                            return r.customRule = t.stageCustomRule(r), r
                        }
                    })).filter((function(e) {
                        return !!e
                    }));
                return r.concat(n)
            }, t.prototype.baseRuleGroup = function(e, t) {
                var r, i = new o.HSStageRuleGroup(e, e.parentObject, !0);
                return i.addRules(this.stageRules(i, t)), i.setScript(null === (r = this.script()) || void 0 === r ? void 0 : r.stageScript(i)), i
            }, t.prototype.stageRules = function(e, t) {
                var r = this;
                return this.rules().reduce((function(i, n) {
                    if (n === r) return i;
                    var o = n.stageRules(e, t);
                    return i.concat(o)
                }), [])
            }, t.key = "HSCustomRuleInstance", t
        }(c.HSManagedObject);
    t.HSCustomRuleInstance = l, window.HSCustomRuleInstance = l
}, function(e, t, r) {
    r(51), e.exports = r(19)
}, function(e, t, r) {
    ! function e(t, r, i) {
        function n(a, s) {
            if (!r[a]) {
                if (!t[a]) {
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = r[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, (function(e) {
                    var r = t[a][1][e];
                    return n(r || e)
                }), u, u.exports, e, t, r, i)
            }
            return r[a].exports
        }
        for (var o = !1, a = 0; a < i.length; a++) n(i[a]);
        return n
    }({
        1: [function(e, t, r) {
            (function(t) {
                var i = e("path");

                function n(e) {
                    e = e.replace(/[\ufe00-\ufe0f]/g, "");
                    for (var t = [], i = 0; i < e.length; i++) t.push(("0000" + e.charCodeAt(i).toString(16)).slice(-4));
                    return r.basePath.replace(/\/$/, "") + "/" + t.join("-") + ".png"
                }
                r.imageDir = i.join(t, "images"), r.basePath = r.imageDir, r.regex = e("./regex"), r.nativeSupport = function() {
                    if ("undefined" == typeof document) return !1;
                    var e = document.createElement("canvas");
                    if (!e.getContext) return !1;
                    var t = e.getContext("2d");
                    return t.textBaseline = "top", t.font = "32px sans-serif", t.fillText("😃", 0, 0), 0 !== t.getImageData(16, 16, 1, 1).data[0]
                }();
                var o = new RegExp("^(" + r.regex.toString().slice(1, -2) + ")$");
                r.getImage = function(e) {
                    return o.test(e) ? n(e) : null
                }, r.replace = function(e) {
                    return e = "" + e, r.nativeSupport ? e : e.replace(r.regex, (function(e) {
                        return '<img class="emoji" src="' + n(e) + '" alt="' + e + '">'
                    }))
                }
            }).call(this, "/")
        }, {
            "./regex": 3,
            path: 4
        }],
        2: [function(e, t, r) {
            window.emoji = window.emoji || e("./index.js")
        }, {
            "./index.js": 1
        }],
        3: [function(e, t, r) {
            t.exports = /(\uD83C[\uDDE6-\uDDFF])?(\u00a9|\u00ae|[\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2640\u2642\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303d\u3297\u3299]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?(\ud83c[\udffb-\udfff])?(\u200d(\u00a9|\u00ae|\u2695\uFE0F|\uD83C\uDF93|\uD83C\uDFEB|\u2696\uFE0F|\uD83C\uDF3E|\uD83C\uDF73|\uD83D\uDD27|\uD83C\uDFED|\uD83D\uDCBC|\uD83D\uDD2C|\uD83D\uDCBB|\uD83C\uDFA4|\uD83C\uDFA8|\u2708\uFE0F|\uD83D\uDE80|\uD83D\uDC8B|\uD83D\uDE92|\u2764\uFE0F|\uD83D\uDC66|\uD83D\uDC67|\uD83D\uDC68|\uD83D\uDC69|\uD83D\uDC6A|\uD83D\uDC91|\u2640|\u2642|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?)*/g
        }, {}],
        4: [function(e, t, r) {
            (function(e) {
                function t(e, t) {
                    for (var r = 0, i = e.length - 1; i >= 0; i--) {
                        var n = e[i];
                        "." === n ? e.splice(i, 1) : ".." === n ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--)
                    }
                    if (t)
                        for (; r--; r) e.unshift("..");
                    return e
                }
                var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    n = function(e) {
                        return i.exec(e).slice(1)
                    };

                function o(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var r = [], i = 0; i < e.length; i++) t(e[i], i, e) && r.push(e[i]);
                    return r
                }
                r.resolve = function() {
                    for (var r = "", i = !1, n = arguments.length - 1; n >= -1 && !i; n--) {
                        var a = n >= 0 ? arguments[n] : e.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (r = a + "/" + r, i = "/" === a.charAt(0))
                    }
                    return (i ? "/" : "") + (r = t(o(r.split("/"), (function(e) {
                        return !!e
                    })), !i).join("/")) || "."
                }, r.normalize = function(e) {
                    var i = r.isAbsolute(e),
                        n = "/" === a(e, -1);
                    return (e = t(o(e.split("/"), (function(e) {
                        return !!e
                    })), !i).join("/")) || i || (e = "."), e && n && (e += "/"), (i ? "/" : "") + e
                }, r.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, r.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return r.normalize(o(e, (function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    })).join("/"))
                }, r.relative = function(e, t) {
                    function i(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                        return t > r ? [] : e.slice(t, r - t + 1)
                    }
                    e = r.resolve(e).substr(1), t = r.resolve(t).substr(1);
                    for (var n = i(e.split("/")), o = i(t.split("/")), a = Math.min(n.length, o.length), s = a, c = 0; c < a; c++)
                        if (n[c] !== o[c]) {
                            s = c;
                            break
                        } var u = [];
                    for (c = s; c < n.length; c++) u.push("..");
                    return (u = u.concat(o.slice(s))).join("/")
                }, r.sep = "/", r.delimiter = ":", r.dirname = function(e) {
                    var t = n(e),
                        r = t[0],
                        i = t[1];
                    return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
                }, r.basename = function(e, t) {
                    var r = n(e)[2];
                    return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r
                }, r.extname = function(e) {
                    return n(e)[3]
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, r) {
                    return e.substr(t, r)
                } : function(e, t, r) {
                    return t < 0 && (t = e.length + t), e.substr(t, r)
                }
            }).call(this, e("_process"))
        }, {
            _process: 5
        }],
        5: [function(e, t, r) {
            var i, n = t.exports = {},
                o = [],
                a = !1,
                s = -1;

            function c() {
                a = !1, i.length ? o = i.concat(o) : s = -1, o.length && u()
            }

            function u() {
                if (!a) {
                    var e = setTimeout(c);
                    a = !0;
                    for (var t = o.length; t;) {
                        for (i = o, o = []; ++s < t;) i && i[s].run();
                        s = -1, t = o.length
                    }
                    i = null, a = !1, clearTimeout(e)
                }
            }

            function l(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                o.push(new l(e, t)), 1 !== o.length || a || setTimeout(u, 0)
            }, l.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, n.removeAllListeners = h, n.emit = h, n.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            }
        }, {}]
    }, {}, [2])
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTextTextureFactory = void 0;
    var i = r(27),
        n = r(38),
        o = r(2),
        a = r(5),
        s = function() {
            function e() {}
            return e.setFont = function(t, r) {
                t.font = r / 2 + "px " + e.FONT_FAMILIES.join(", "), t.textAlign = "left", t.textBaseline = "top"
            }, e.prototype.key = function(e) {
                return JSON.stringify({
                    text: e.text,
                    color: e.color
                })
            }, e.prototype.buildAll = function(e, t) {
                return this.build(e, t).then((function(e) {
                    return [e]
                })).catch((function(e) {
                    return []
                }))
            }, e.prototype.build = function(e, t) {
                var r = i.HSTextNode.fromString(t.text);
                if (!r) return Promise.reject(null);
                if (!(e = this.canvas(e, t, r))) return Promise.reject(null);
                var n = e.getContext("2d");
                return r.draw(n).then((function(t) {
                    return PIXI.Texture.fromCanvas(e)
                }))
            }, e.scaleUp = function() {
                return n.HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH / i.HSTextNode.MAX_LINE_WIDTH
            }, e.prototype.canvas = function(t, r, n) {
                var s = t.getContext("2d");
                e.setFont(s, r.fontSize);
                var c = r.text,
                    u = a.HSColor.rgbWhiteColor;
                o.hasEmoji(c) && (u = r.color);
                var l = n.flow(s, i.HSTextNode.MAX_LINE_WIDTH);
                if (0 === l.width || 0 === l.height) return null;
                var h = r.sizePercentWidth / 100 || 1,
                    p = r.sizePercentHeight / 100 || 1,
                    d = e.scaleUp(),
                    S = Math.min(l.width * d * h, 4096),
                    f = Math.min(l.height * d * p, 4096);
                return t.width = S, t.height = f, e.setFont(s, r.fontSize), s.scale(S / l.width, f / l.height), s.fillStyle = a.HSColor.rgbStringFromHSBString(u), t
            }, e.FONT_FAMILIES = ["Avenir-Book", "Hiragino Sans", "sans-serif", "AppleSymbols"], e.instance = new e, e.textureCache = {}, e
        }();
    t.HSTextTextureFactory = s, window.HSTextTextureFactory = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCharacterTextureFactory = void 0;
    var i = r(37),
        n = r(6),
        o = r(5),
        a = function() {
            function e() {}
            return e.prototype.build = function(e, t) {
                return Promise.resolve(this._build(t))
            }, e.prototype._build = function(e) {
                var t = document.getElementById(this.imageID(e)),
                    r = this.quantizedScale(t, e),
                    i = this.svgString(t, e),
                    n = PIXI.Texture.fromImage(i, !1, PIXI.SCALE_MODES.LINEAR, r);
                return n.baseTexture.resolution = r, n
            }, e.prototype.quantizedScale = function(e, t) {
                var r = 1,
                    i = Math.max(t.originalWidth, t.originalHeight);
                if (e) {
                    var n = parseFloat(e.getAttribute("width")) || t.originalWidth,
                        o = parseFloat(e.getAttribute("height")) || t.originalHeight;
                    i = Math.max(n, o), r = Math.max(t.originalWidth / n, t.originalHeight / o)
                }
                var a = Math.abs(t.sizePercentWidth),
                    s = Math.abs(t.sizePercentHeight),
                    c = Math.max(a, s),
                    u = i * Math.max(Math.ceil(.01 * c), 1) * r,
                    l = Math.round(Math.max(u / 100, 1) * t.baseObjectScale);
                u < 100 ? l = 1 : u < 150 && (l = 2);
                var h = Math.floor(1024 / i);
                return Math.min(l, h)
            }, e.prototype.buildAll = function(e, t) {
                for (var r = [], i = t.willChangeCostume ? 4 : 1, n = 0; n < i; n++) t.animationNumber = n, r.push(this._build(t));
                return Promise.resolve(r)
            }, e.prototype.imageID = function(e) {
                var t = e.type || 0,
                    r = n.HSObjectType[t];
                return r[0].toUpperCase() + r.slice(1) + e.animationNumber + ".svg"
            }, e.prototype.svgString = function(e, t) {
                var r = "";
                if (e) {
                    e.style.fill = o.HSColor.rgbWhiteColor;
                    var n = this.quantizedScale(e, t);
                    e.setAttribute("hsScale", "" + n), r = i.HSView.xmlSerializer.serializeToString(e)
                }
                return "data:image/svg+xml;charset=utf8," + r
            }, e.instance = new e, e
        }();
    t.HSCharacterTextureFactory = a, window.HSCharacterTextureFactory = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSBoundingBox = void 0;
    var i = r(36),
        n = r(5),
        o = r(21),
        a = function() {
            function e(e, t, r, i) {
                void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.centerX = e, this.centerY = t, this.halfWidth = r, this.halfHeight = i, this.vertices = [new o.Vec2, new o.Vec2, new o.Vec2, new o.Vec2], this.update(e, t, r, i)
            }
            return e.prototype.update = function(e, t, r, i) {
                this.halfWidth = r, this.halfHeight = i, this.centerX = e, this.centerY = t, this.vertices[0].x = e - this.halfWidth, this.vertices[0].y = t - this.halfHeight, this.vertices[1].x = e + this.halfWidth, this.vertices[1].y = t - this.halfHeight, this.vertices[2].x = e + this.halfWidth, this.vertices[2].y = t + this.halfHeight, this.vertices[3].x = e - this.halfWidth, this.vertices[3].y = t + this.halfHeight
            }, e.prototype.width = function() {
                return 2 * this.halfWidth
            }, e.prototype.height = function() {
                return 2 * this.halfHeight
            }, e.prototype.minX = function() {
                return this.vertices[0].x
            }, e.prototype.minY = function() {
                return this.vertices[0].y
            }, e.prototype.maxX = function() {
                return this.vertices[2].x
            }, e.prototype.maxY = function() {
                return this.vertices[2].y
            }, e.prototype.draw = function(e) {
                var t = n.HSColor.rgb(0, 0, 0),
                    r = this.vertices.map((function(e) {
                        return new i.HSLinePoint(e, 1, {
                            lineColor: t,
                            lineCap: "round",
                            lineAlpha: 1
                        })
                    }));
                r.forEach((function(t, i) {
                    e.drawLine(t, r[(i + 1) % r.length])
                }))
            }, e.prototype.containsPoint = function(e, t) {
                this.pointTestVecs || (this.pointTestVecs = [new o.Vec2, new o.Vec2, new o.Vec2]);
                var r = new o.Vec2(e, t),
                    i = this.vertices[0],
                    n = this.vertices[1],
                    a = this.vertices[3],
                    s = this.pointTestVecs[0].subtract(n, i),
                    c = this.pointTestVecs[1].subtract(a, i),
                    u = this.pointTestVecs[2].subtract(r, i),
                    l = u.dot(s) / s.len(),
                    h = u.dot(c) / c.len();
                return l > 0 && l < s.len() && h > 0 && h < c.len()
            }, e.prototype.area = function() {
                return this.width() * this.height()
            }, e.prototype.overlapsWithOtherBoundingBox = function(e) {
                return this.maxX() > e.minX() && this.minX() < e.maxX() && this.maxY() > e.minY() && this.minY() < e.maxY()
            }, e.prototype.intersectionRectWithOtherBoundingBox = function(t) {
                if (this.surroundingBox || (this.surroundingBox = new e), !this.overlapsWithOtherBoundingBox(t)) return e.zero;
                var r = this.minX(),
                    i = this.minY(),
                    n = this.maxX(),
                    o = this.maxY(),
                    a = t.minX(),
                    s = t.minY(),
                    c = t.maxX(),
                    u = t.maxY(),
                    l = Math.max(r, a),
                    h = Math.max(i, s),
                    p = Math.min(n, c),
                    d = Math.min(o, u),
                    S = .5 * (l + p),
                    f = .5 * (h + d),
                    g = .5 * (p - l),
                    y = .5 * (d - h);
                return this.surroundingBox.update(S, f, g, y), this.surroundingBox
            }, e.zero = new e, e
        }();
    t.HSBoundingBox = a, window.HSBoundingBox = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionImageFactory = void 0;
    var i = r(30);
    HTMLCanvasElement.prototype.unscaledWidth = function() {
        return this.width
    }, HTMLCanvasElement.prototype.unscaledHeight = function() {
        return this.height
    }, HTMLImageElement.prototype.unscaledWidth = function() {
        return this.naturalWidth
    }, HTMLImageElement.prototype.unscaledHeight = function() {
        return this.naturalHeight
    };
    var n = function() {
        function e() {}
        return e.prototype.image = function(e) {
            if (this._image) return this._image;
            if (!e) return null;
            var t = document.createElement("canvas"),
                r = t.getContext("2d"),
                n = e.unscaledWidth(),
                o = e.unscaledHeight(),
                a = i.HSVisualContext.collisionResolution,
                s = this.getScaledImageDimensions({
                    width: n,
                    height: o
                }, Math.pow(a, 2)),
                c = s.width,
                u = s.height;
            return t.width = c, t.height = u, r.drawImage(e, 0, 0, n, o, 0, 0, c, u), this._image = t, t
        }, e.prototype.getScaledImageDimensions = function(e, t) {
            var r = Math.max(Math.sqrt(e.width * e.height / t), 1);
            return {
                width: Math.round(e.width / r),
                height: Math.round(e.height / r)
            }
        }, e
    }();
    t.HSCollisionImageFactory = n, window.HSCollisionImageFactory = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionContext = t.makeDebugCanvas = void 0;
    var i = r(4),
        n = r(30),
        o = r(6),
        a = r(39);
    t.makeDebugCanvas = function(e, t) {
        var r = document.createElement("canvas");
        return r.style.position = "fixed", r.style.top = e + "px", r.style.left = t + "px", r.style.border = "1px solid blue", r.style.zIndex = "99999", document.body.appendChild(r), r.width = n.HSVisualContext.collisionResolution, r.height = n.HSVisualContext.collisionResolution, r
    };
    var s = function() {
        function e() {
            this.numberOfPixelCollisions = 0, this.manager = new a.CollisionManager, this.canvas1 = document.createElement("canvas"), this.canvas2 = document.createElement("canvas")
        }
        return e.prototype.hitTest = function(e, t, r) {
            if (e.isInvisible()) return !1;
            var i = this.boundingBoxForObject(e);
            if (i.containsPoint(t, r)) {
                if (e.type === o.HSObjectType.text) return !0;
                var n = this.generatePixelTestData(this.canvas1, e, i, i),
                    a = n.width / (i.maxX() - i.minX()),
                    s = n.height / (i.maxY() - i.minY()),
                    c = (t - i.minX()) * a,
                    u = n.height - (r - i.minY()) * s;
                return t = Math.round(c), r = Math.round(u), this.pixelCoordinateHasAlpha(t, r, n)
            }
            return !1
        }, e.prototype.tick = function(e) {
            this.manager.tick(Array.from(e))
        }, e.prototype.collisionTest = function(e, t) {
            return t.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(e) : e.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(t) : this.objectsAreColliding(e, t)
        }, e.prototype.objectsAreColliding = function(e, t) {
            return this.manager.existsCollisionBetweenStageObjects(e, t)
        }, e.prototype.objectIsTouchingEdgeOfScreen = function(e) {
            var t = this.boundingBoxForObject(e);
            if (0 === t.area()) return !1;
            var r = t.centerX,
                n = t.centerY;
            return r <= 0 || r >= i.HSStageScene.stageWidth || n <= 0 || n >= i.HSStageScene.stageHeight
        }, e.prototype.pixelCoordinateHasAlpha = function(e, t, r) {
            var i = 4 * (t * r.width + e) + 3;
            return r.data[i] > 0
        }, e.prototype.boundingBoxForObject = function(e) {
            return e.boundingBox()
        }, e.prototype.generatePixelTestData = function(e, t, r, i) {
            var n = (e = this.prepareCanvasForPixelTest(e, t, r, i)).getContext("2d"),
                o = e.width / r.width(),
                a = e.height / r.height(),
                s = Math.round((i.minX() - r.minX()) * o),
                c = Math.round((r.maxY() - i.maxY()) * a),
                u = Math.max(Math.ceil((i.maxX() - i.minX()) * o), 1),
                l = Math.max(Math.ceil((i.maxY() - i.minY()) * a), 1);
            return n.getImageData(s, c, u, l)
        }, e.prototype.prepareCanvasForPixelTest = function(e, t, r, i) {
            var n = t.imageForCollision();
            if (!n) return e;
            var o = function(e, t, r) {
                var i = Math.cos(r),
                    n = Math.sin(r);
                return n < 0 && (n = -n), i < 0 && (i = -i), {
                    width: t * n + e * i,
                    height: t * i + e * n
                }
            }(Math.ceil(n.width * r.halfWidth / r.halfWidth), Math.ceil(n.height * r.halfHeight / r.halfHeight), t.headingInRadians());
            e.width = Math.ceil(o.width), e.height = Math.ceil(o.height);
            var a = e.getContext("2d");
            a.imageSmoothingEnabled = !1, a.oImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.clearRect(0, 0, e.width, e.height);
            var s = e.width / 2,
                c = e.height / 2;
            return a.translate(s, c), a.rotate(-t.headingInRadians()), t.isFlipped && a.scale(-1, 1), n.width * n.height == 0 || (a.drawImage(n, -n.width / 2, -n.height / 2), a.setTransform(1, 0, 0, 1, 0, 0)), e
        }, e.PIXEL_TESTING_THRESHOLD = 10, e
    }();
    t.HSCollisionContext = s, window.HSCollisionContext = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionInfo = void 0;
    var i = r(39),
        n = function() {
            function e(e, t, r, i, n, o, a) {
                this.mask = e, this.width = t, this.height = r, this.minX = i, this.minY = n, this.maxX = o, this.maxY = a, this.lastUse = Date.now()
            }
            return e.prototype.updateDropTime = function(e) {
                this.lastUse = e
            }, e.prototype.isEmpty = function() {
                return this.minX < 0 || this.minY < 0
            }, e.prototype.readyToDrop = function(t) {
                return t - this.lastUse > e.DROP_TIME
            }, e.prototype.hit = function(e, t) {
                return !(e < 0 || e >= this.width) && (!(t < 0 || t >= this.height) && (e = e / i.CollisionManager.PIXEL_OFFSET | 0, t = t / i.CollisionManager.PIXEL_OFFSET | 0, 0 !== this.mask[t * this.width + e]))
            }, e.DROP_TIME = 1e4, e
        }();
    t.CollisionInfo = n, window.CollisionInfo = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionObject = void 0;
    var i = function() {
        function e(e, t) {
            this.sprite = e, this.info = t, this.localTempPoint = new PIXI.Point, this.outputPoints = [new PIXI.Point, new PIXI.Point, new PIXI.Point, new PIXI.Point], this.tempPoints = [new PIXI.Point, new PIXI.Point, new PIXI.Point, new PIXI.Point], this.tempRect = new PIXI.Rectangle, this.outputPoint = new PIXI.Point
        }
        return e.prototype.hit = function(e, t) {
            this.outputPoint.set(e, t);
            var r = this.sprite.toLocal(this.outputPoint, this.sprite.parent, this.localTempPoint);
            return r.x += (1 - this.sprite.anchor.x) * (this.sprite.width / Math.abs(this.sprite.scale.x)), r.y += (1 - this.sprite.anchor.y) * (this.sprite.height / this.sprite.scale.y), this.info.hit(r.x, r.y)
        }, e.prototype.getMaskBounds = function() {
            var e = this.sprite.getLocalBounds(),
                t = e.left + this.info.minX,
                r = e.top + this.info.minY,
                i = e.right - (this.info.width - this.info.maxX),
                n = e.bottom - (this.info.height - this.info.maxY);
            this.tempPoints[0].set(t, r), this.tempPoints[1].set(i, r), this.tempPoints[2].set(i, n), this.tempPoints[3].set(t, n);
            var o = [this.sprite.toGlobal(this.tempPoints[0], this.outputPoints[0]), this.sprite.toGlobal(this.tempPoints[1], this.outputPoints[1]), this.sprite.toGlobal(this.tempPoints[2], this.outputPoints[2]), this.sprite.toGlobal(this.tempPoints[3], this.outputPoints[3])],
                a = Number.MAX_SAFE_INTEGER,
                s = Number.MAX_SAFE_INTEGER,
                c = Number.MIN_SAFE_INTEGER,
                u = Number.MIN_SAFE_INTEGER;
            o.forEach((function(e) {
                var t = e.x,
                    r = e.y;
                t < a && (a = t), t > c && (c = t), r < s && (s = r), r > u && (u = r)
            }));
            var l = c - a,
                h = u - s;
            return this.tempRect.x = a, this.tempRect.y = s, this.tempRect.width = l, this.tempRect.height = h, this.tempRect
        }, e
    }();
    t.CollisionObject = i, window.CollisionObject = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HopscotchBackgroundContext = void 0;
    var i = r(4),
        n = r(19),
        o = function() {
            function e(e, t) {
                this.bgCanvas = e, this.visualContext = t, this.bgContext = this.layerFromCanvas2d(e), this.clear()
            }
            return e.prototype.layerFromCanvas2d = function(e) {
                var t = this.canvasWidth(),
                    r = this.canvasHeight();
                e.width = t, e.height = r;
                var i = e.getContext("2d");
                return i && (i.translate(0, r), i.scale(n.HSMain.dpi, -1 * n.HSMain.dpi)), i
            }, e.prototype.canvasWidth = function() {
                return i.HSStageScene.stageWidth * n.HSMain.dpi
            }, e.prototype.canvasHeight = function() {
                return i.HSStageScene.stageHeight * n.HSMain.dpi
            }, e.prototype.setBackground = function(e) {
                this.bgContext && (this.bgContext.fillStyle = e, this.bgContext.fillRect(0, 0, this.bgCanvas.width, this.bgCanvas.height))
            }, e.prototype.clear = function() {
                this.setBackground("white")
            }, e
        }();
    t.HopscotchBackgroundContext = o, window.HopscotchDrawingContext = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSOBJECT_SIZES = void 0;
    var i = r(6);
    t.HSOBJECT_SIZES = {}, t.HSOBJECT_SIZES[i.HSObjectType.text] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.monkey] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.octopus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.gorilla] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.cupcake] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.bear] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.dino] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.frog] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.greenman] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.mustache] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.spacepod] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.zombieBear] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.ghoulopus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.bats] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.frankenrilla] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.jodyWitch] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.cauldron] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.pumpkin] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.broom] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.lantern] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.parrotFlying] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.mandrill] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.mosquito] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.missChief] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.venus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.jeepers] = {
        width: 390,
        height: 390
    }, t.HSOBJECT_SIZES[i.HSObjectType.banyan] = {
        width: 600,
        height: 600
    }, t.HSOBJECT_SIZES[i.HSObjectType.stargirl] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[i.HSObjectType.astro] = {
        width: 187.5,
        height: 187.5
    }, t.HSOBJECT_SIZES[i.HSObjectType.chillanna] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[i.HSObjectType.robo] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.raccoon] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[i.HSObjectType.bird] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.square] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.circle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.hexagon] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.triangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.rightTriangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.rectangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.heart] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.star] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.arch] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.parallelogram] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.squiggle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.donut] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisZ] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisT] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisL] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.corner] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.flower] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.threeProngedBoomerang] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.squishedBox] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.bead] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.chevron] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.xShape] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisLine] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.toucan] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.anteater] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.crocodile] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.sloth] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.iguana] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.hut] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.penguin] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.winterQueen] = {
        width: 225,
        height: 225
    }, t.HSOBJECT_SIZES[i.HSObjectType.shyYeti] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[i.HSObjectType.deer] = {
        width: 255,
        height: 255
    }, t.HSOBJECT_SIZES[i.HSObjectType.elf] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.snowGlobe] = {
        width: 450,
        height: 450
    }, t.HSOBJECT_SIZES[i.HSObjectType.polarbear] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[i.HSObjectType.sleigh] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[i.HSObjectType.mistletoe] = {
        width: 129,
        height: 129
    }, t.HSOBJECT_SIZES[i.HSObjectType.snowMan] = {
        width: 225,
        height: 225
    }, t.HSOBJECT_SIZES[i.HSObjectType.snowflake] = {
        width: 45,
        height: 45
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisTFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.rectangleFullSize] = {
        width: 150,
        height: 112.5
    }, t.HSOBJECT_SIZES[i.HSObjectType.archFullSize] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[i.HSObjectType.rightTriangleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisLFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.roundedSquareFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.roundedRightTriangleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.squishedBoxFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.starFullSize] = {
        width: 150,
        height: 142.66
    }, t.HSOBJECT_SIZES[i.HSObjectType.parallelogramTallFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.arrowRoundedFullSize] = {
        width: 106.07,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.hexagonFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[i.HSObjectType.squiggleFullSize] = {
        width: 150,
        height: 69.64
    }, t.HSOBJECT_SIZES[i.HSObjectType.squareFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.chevronFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[i.HSObjectType.flowerFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.heartFullSize] = {
        width: 150,
        height: 126.77
    }, t.HSOBJECT_SIZES[i.HSObjectType.parallelogramWideFullSize] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[i.HSObjectType.beadFullSize] = {
        width: 150,
        height: 76.95
    }, t.HSOBJECT_SIZES[i.HSObjectType.triangleFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[i.HSObjectType.xFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.donutFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisZFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisLineFullSize] = {
        width: 200,
        height: 50
    }, t.HSOBJECT_SIZES[i.HSObjectType.fanbladeFullSize] = {
        width: 150,
        height: 137.26
    }, t.HSOBJECT_SIZES[i.HSObjectType.cornerFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.circleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisTV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.rectangleV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.archV3] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisLV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.starV3] = {
        width: 150,
        height: 143
    }, t.HSOBJECT_SIZES[i.HSObjectType.arrowRoundedV3] = {
        width: 106,
        height: 150
    }, t.HSOBJECT_SIZES[i.HSObjectType.hexagonV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[i.HSObjectType.squiggleV3] = {
        width: 150,
        height: 70
    }, t.HSOBJECT_SIZES[i.HSObjectType.chevronV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[i.HSObjectType.heartV3] = {
        width: 150,
        height: 127
    }, t.HSOBJECT_SIZES[i.HSObjectType.parallelogramWideV3] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[i.HSObjectType.beadV3] = {
        width: 150,
        height: 77
    }, t.HSOBJECT_SIZES[i.HSObjectType.triangleV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[i.HSObjectType.tetrisZV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[i.HSObjectType.fanbladeV3] = {
        width: 150,
        height: 137
    }, t.HSOBJECT_SIZES[i.HSObjectType.crocodileJaws] = {
        width: 288,
        height: 164
    }, t.HSOBJECT_SIZES[i.HSObjectType.lanternFullSize] = {
        width: 48,
        height: 84
    }, window.HSOBJECT_SIZES = t.HSOBJECT_SIZES
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMathCalculator = void 0;
    var i = r(1),
        n = r(3),
        o = r(2),
        a = function() {
            function e() {}
            return e.prototype.computedValue = function(e, t) {
                var r = t[0],
                    a = t[1];
                switch (r = n.HSStageVariable.parseValue(r, !0), a = n.HSStageVariable.parseValue(a, !0), e) {
                    case i.HSBlockType.Random110:
                        return Math.floor(-8 * Math.random()) + 10;
                    case i.HSBlockType.Random1100:
                        return Math.floor(-98 * Math.random()) + 100;
                    case i.HSBlockType.Random11000:
                        return Math.floor(-998 * Math.random()) + 1e3;
                    case i.HSBlockType.MathOperatorRandom:
                    case i.HSBlockType.Random:
                        var s = Math.max(r, a),
                            c = Math.min(r, a);
                        return Math.floor(Math.random() * (s - c + 1)) + c;
                    case i.HSBlockType.MathOperatorAdd:
                        return r = n.HSStageVariable.parseValue(r, !1), a = n.HSStageVariable.parseValue(a, !1), "number" == typeof r && "number" == typeof a ? r + a : ("number" == typeof r && (r = Math.round(1e6 * r) / 1e6), "number" == typeof a && (a = Math.round(1e6 * a) / 1e6), (r = r.toString()) + (a = a.toString()));
                    case i.HSBlockType.MathOperatorSubtract:
                        return r - a;
                    case i.HSBlockType.MathOperatorMultiply:
                        return r * a;
                    case i.HSBlockType.MathOperatorDivide:
                        return 0 === a ? 0 : r / a;
                    case i.HSBlockType.MathOperatorSine:
                        return Math.sin(o.degreesToRadians(r));
                    case i.HSBlockType.MathOperatorCosine:
                        return Math.cos(o.degreesToRadians(r));
                    case i.HSBlockType.MathOperatorTangent:
                        return Math.tan(o.degreesToRadians(r));
                    case i.HSBlockType.MathOperatorInverseSine:
                        return o.radiansToDegrees(Math.asin(r) || 0);
                    case i.HSBlockType.MathOperatorInverseCosine:
                        return o.radiansToDegrees(Math.acos(r) || 0);
                    case i.HSBlockType.MathOperatorInverseTangent:
                        return o.radiansToDegrees(Math.atan(r) || 0);
                    case i.HSBlockType.MathOperatorMaximum:
                        var u = a;
                        if ("string" == typeof r || "string" == typeof u) {
                            var l = r.toString(),
                                h = u.toString();
                            return l.localeCompare(h) >= 0 ? l : h
                        }
                        return Math.max(r, a);
                    case i.HSBlockType.MathOperatorMinimum:
                        var p = a;
                        if ("string" == typeof r || "string" == typeof p) {
                            l = r.toString(), h = p.toString();
                            return l.localeCompare(h) <= 0 ? l : h
                        }
                        return Math.min(r, a);
                    case i.HSBlockType.MathOperatorSquareRoot:
                        return Math.sqrt(r);
                    case i.HSBlockType.MathOperatorPower:
                        return Math.pow(r, a);
                    case i.HSBlockType.MathOperatorFloor:
                        return Math.floor(r);
                    case i.HSBlockType.MathOperatorCeiling:
                        return Math.ceil(r);
                    case i.HSBlockType.MathOperatorRound:
                        return Math.round(r);
                    case i.HSBlockType.MathOperatorAbs:
                        return Math.abs(r);
                    case i.HSBlockType.MathOperatorModulo:
                        return 0 === a ? 0 : r % a;
                    default:
                        return null
                }
            }, e
        }();
    t.HSMathCalculator = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTraitCalculator = void 0;
    var i = r(20),
        n = r(19),
        o = r(1),
        a = r(3),
        s = r(16),
        c = r(17),
        u = r(4),
        l = function() {
            function e() {}
            return e.prototype.computedValue = function(e, t, r) {
                switch (e) {
                    case o.HSBlockType.TraitXPosition:
                        return Math.round((null == t ? void 0 : t.x) || 0);
                    case o.HSBlockType.TraitYPosition:
                        return Math.round((null == t ? void 0 : t.y) || 0);
                    case o.HSBlockType.TraitWidth:
                        return (null == t ? void 0 : t.width()) || 0;
                    case o.HSBlockType.TraitHeight:
                        return (null == t ? void 0 : t.height()) || 0;
                    case o.HSBlockType.TraitZIndex:
                        return (null == t ? void 0 : t.zIndex) || 0;
                    case o.HSBlockType.TraitOriginX:
                        return Math.round((null == t ? void 0 : t.originX) || 0);
                    case o.HSBlockType.TraitOriginY:
                        return Math.round((null == t ? void 0 : t.originY) || 0);
                    case o.HSBlockType.TraitCenterX:
                        return Math.round((null == t ? void 0 : t.x) || 0);
                    case o.HSBlockType.TraitCenterY:
                        return Math.round((null == t ? void 0 : t.y) || 0);
                    case o.HSBlockType.TraitRotation:
                        return (null == t ? void 0 : t.headingInDegrees) || 0;
                    case o.HSBlockType.TraitUsername:
                        return n.HSMain.currentPlayerName;
                    case o.HSBlockType.TraitObjectName:
                        return (null == t ? void 0 : t.name) || "";
                    case o.HSBlockType.TraitTime:
                        return Date.now();
                    case o.HSBlockType.TraitYear:
                        return (new Date).getFullYear();
                    case o.HSBlockType.TraitMonth:
                        return (new Date).getMonth() + 1;
                    case o.HSBlockType.TraitDay:
                        return (new Date).getDate();
                    case o.HSBlockType.TraitHour:
                        return (new Date).getHours();
                    case o.HSBlockType.TraitMinute:
                        return (new Date).getMinutes();
                    case o.HSBlockType.TraitSecond:
                        return (new Date).getSeconds();
                    case o.HSBlockType.TraitSpeed:
                        return (null == t ? void 0 : t.speed) || 0;
                    case o.HSBlockType.TraitCloneIndex:
                        return (null == t ? void 0 : t.cloneIndex) || 0;
                    case o.HSBlockType.TraitText:
                        var l = (null == t ? void 0 : t.text) || "";
                        return a.HSStageVariable.parseValue(l, !1).toString();
                    case o.HSBlockType.TraitTotalClones:
                        return r.allStageObjects().length;
                    case o.HSBlockType.StageTraitTotalObjects:
                        return c.HSStageProject.sharedInstance.activeStageScene.stageObjects.length;
                    case o.HSBlockType.TraitInvisibility:
                        return (null == t ? void 0 : t.invisibilityPercent) || 0;
                    case o.HSBlockType.TraitSize:
                        return this.computedSizePercent(t);
                    case o.HSBlockType.StageTraitLastTouchX:
                        return c.HSStageProject.sharedInstance.activeStageScene.lastTouchX;
                    case o.HSBlockType.StageTraitLastTouchY:
                        return c.HSStageProject.sharedInstance.activeStageScene.lastTouchY;
                    case o.HSBlockType.StageTraitTiltUp:
                        return i.HSAccelerometerManager.tiltUp;
                    case o.HSBlockType.StageTraitTiltDown:
                        return i.HSAccelerometerManager.tiltDown;
                    case o.HSBlockType.StageTraitTiltLeft:
                        return i.HSAccelerometerManager.tiltLeft;
                    case o.HSBlockType.StageTraitTiltRight:
                        return i.HSAccelerometerManager.tiltRight;
                    case o.HSBlockType.StageTraitWidth:
                        return u.HSStageScene.stageWidth;
                    case o.HSBlockType.StageTraitHeight:
                        return u.HSStageScene.stageHeight;
                    case o.HSBlockType.EventOperatorGamePlaying:
                        return 1;
                    case o.HSBlockType.TraitTempo:
                        return (null == t ? void 0 : t.tempo) || s.DEFAULT_TEMPO;
                    case o.HSBlockType.TraitInstrument:
                        return (null == t ? void 0 : t.instrument) || s.DEFAULT_INSTRUMENT;
                    default:
                        return null
                }
            }, e.prototype.computedSizePercent = function(e) {
                switch (this.whichSizeShouldIUse(e)) {
                    case "minimum":
                        return Math.min(e.sizePercentHeight, e.sizePercentWidth);
                    case "height":
                        return e.sizePercentHeight;
                    case "width":
                        return e.sizePercentWidth
                }
            }, e.prototype.whichSizeShouldIUse = function(e) {
                var t = Math.abs(e.sizePercentHeight),
                    r = Math.abs(e.sizePercentWidth);
                return t === r ? "minimum" : t > r ? "height" : "width"
            }, e
        }();
    t.HSTraitCalculator = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSConditionalCalculator = void 0;
    var i = r(1),
        n = r(3),
        o = r(2),
        a = function() {
            function e() {}
            return e.prototype.computedBooleanValue = function(e, t, r, a) {
                switch (t = n.HSStageVariable.parseValue(t, !0), r = n.HSStageVariable.parseValue(r, !0), e) {
                    case i.HSBlockType.ConditionalOperatorMatches:
                        return o.checkMatches(String(t), String(r));
                    case i.HSBlockType.ConditionalOperatorEquals:
                        return s(t, r);
                    case i.HSBlockType.ConditionalOperatorLessThan:
                        return c(t, r) && !s(t, r);
                    case i.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
                        return s(t, r) || c(t, r);
                    case i.HSBlockType.ConditionalOperatorGreaterThan:
                        return u(t, r) && !s(t, r);
                    case i.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
                        return s(t, r) || u(t, r);
                    case i.HSBlockType.ConditionalOperatorNotEquals:
                        return !s(t, r);
                    case i.HSBlockType.ConditionalOperatorAnd:
                        return !(!n.HSStageVariable.parseNumberFrom(t) || !n.HSStageVariable.parseNumberFrom(r));
                    case i.HSBlockType.ConditionalOperatorOr:
                        return !(!n.HSStageVariable.parseNumberFrom(t) && !n.HSStageVariable.parseNumberFrom(r));
                    case i.HSBlockType.EventOperatorGamePlaying:
                        return !0;
                    case i.HSBlockType.ConditionalOperatorIsFlipped:
                        return a.isFlipped;
                    case i.HSBlockType.ConditionalOperatorNot:
                        return !n.HSStageVariable.parseNumberFrom(t);
                    default:
                        return !1
                }
            }, e
        }();

    function s(e, t) {
        if ("number" == typeof e && "number" == typeof t) {
            var r = e,
                i = t;
            return Math.abs(r - i) <= Number.EPSILON
        }
        return e.toString() === t.toString()
    }

    function c(e, t) {
        if ("number" == typeof e && "number" == typeof t) return e < t;
        var r = e.toString(),
            i = t.toString();
        return -1 === r.localeCompare(i)
    }

    function u(e, t) {
        if ("number" == typeof e && "number" == typeof t) return e > t;
        var r = e.toString(),
            i = t.toString();
        return 1 === r.localeCompare(i)
    }
    t.HSConditionalCalculator = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LinePropertiesParser = void 0;
    var i = r(1),
        n = r(5),
        o = function() {
            function e() {}
            return e.prototype.computedColorString = function(e, t) {
                switch (e) {
                    case i.HSBlockType.ColorOperatorRandom:
                        return n.HSColor.randomColor();
                    case i.HSBlockType.ColorOperatorRGB:
                        return n.HSColor.rgb(t[0] % 256, t[1] % 256, t[2] % 256);
                    case i.HSBlockType.ColorOperatorHSB:
                        return n.HSColor.hsb(t[0] % 361, t[1] % 101, t[2] % 101);
                    default:
                        return n.HSColor.rgbTextColor
                }
            }, e.prototype.colorStringFromNumber = function(e) {
                var t, r = String(e);
                return null !== (t = n.HSColor.rgbStringFromNumericColor(r)) && void 0 !== t ? t : r
            }, e.prototype.lineCapFromString = function(e) {
                return n.HSLineCap.lineCapFromString(e)
            }, e
        }();
    t.LinePropertiesParser = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTextCalculator = void 0;
    var i = r(1),
        n = function() {
            function e() {}
            return e.prototype.computedValue = function(e, t, r, n, o) {
                switch (void 0 === o && (o = ""), e) {
                    case i.HSBlockType.TextOperatorCharAtIndex:
                        return t[r] || "";
                    case i.HSBlockType.TextOperatorCharsInRange:
                        return t.slice(r, n);
                    case i.HSBlockType.TextOperatorLength:
                        return (null == t ? void 0 : t.length) || 0;
                    case i.HSBlockType.TextOperatorJoin:
                        return t.concat(o);
                    default:
                        return null
                }
            }, e
        }();
    t.HSTextCalculator = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSLocalVariable = void 0;
    var i = r(0),
        n = r(23),
        o = r(12),
        a = r(10),
        s = r(67),
        c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.parseJSON = function(t) {
				this.petrichorId = t.petrichorId //PETRICHOR-MOD
                void 0 === t && (t = {}), e.prototype.parseJSON.call(this, t), this.name = t.name, this.name || (this.name = this.context.findWithObjectID(n.HSVariablePrototype.key, t[o.VARIABLE_KEY]).name)
            }, t.prototype.stageParameterBlock = function(e) {
                return new s.HSStageLocalVariable(this.name, e)
            }, t
        }(a.HSParameterBlock);
    t.HSLocalVariable = c, window.HSLocalVariable = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageLocalVariable = void 0;
    var i = r(0),
        n = r(1),
        o = r(3),
        a = function(e) {
            function t(t, r) {
                var i = e.call(this, n.HSBlockType.Scoped, n.HSBlockType.Variable, null, null, null, r) || this;
                return i.name = t, i
            }
            return i.__extends(t, e), t.prototype.setValue = function(e) {
                this.environment().set(this.name, e)
            }, t.prototype.computedValue = function() {
                return this.environment().get(this.name) || 0
            }, t.prototype.computedNumberValue = function() {
                return o.HSStageVariable.parseNumberFrom(this.computedValue())
            }, t
        }(r(33).HSStageParameterBlock);
    t.HSStageLocalVariable = a
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MessageView = t.PromptView = t.HSStagePrompt = void 0;
    var i = r(3),
        n = r(1),
        o = r(5),
        a = r(2),
        s = function() {
            function e(t, r) {
                var i, o;
                switch (this.ruleGroup = t, this.isOnScreen = !1, e.enableAntiSpam(), this.type = r.type, this.id = r.id, this.parameters = r.parameters, r.type) {
                    case n.HSBlockType.SaveInput:
                    case n.HSBlockType.SetTextToInput:
                        this.promptText = (null === (i = r.parameters[1]) || void 0 === i ? void 0 : i.computedStringValue(t)) || "Type here", this.view = new u(this.promptText);
                        break;
                    case n.HSBlockType.ShowPopup:
                        this.promptText = (null === (o = r.parameters[0]) || void 0 === o ? void 0 : o.computedStringValue(t)) || "", this.view = new l(this.promptText)
                }
            }
            return e.enableAntiSpam = function() {
                null === e.antiSpam && (e.antiSpam = new h)
            }, e.prototype.execute = function() {
                this.displayIfNeeded(), this.checkValue()
            }, e.prototype.checkSpam = function(e) {
                this.antiSpam.check(e)
            }, e.prototype.checkValue = function() {
                var e;
                if (!this.doesNotNeedToBeChecked()) switch (this.checkSpam(this.view.isSpam), this.type) {
                    case n.HSBlockType.SaveInput:
                        var t = this.parameters[0],
                            r = null == t ? void 0 : t.variable(),
                            a = null == t ? void 0 : t.localVariable();
                        if (!r && !a) return;
                        r && r.setValue(this.view.value, this.ruleGroup), a && a.setValue(this.view.value);
                        break;
                    case n.HSBlockType.SetTextToInput:
                        var s = (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.computedColorString(this.ruleGroup)) || o.HSColor.rgbTextColor;
                        this.ruleGroup.parentObject.setText(i.HSStageVariable.parseValue(this.view.value, !1).toString(), s)
                }
            }, e.prototype.displayIfNeeded = function() {
                this.needsToBeDisplayed() && (this.isOnScreen = !0, this.view.show(e.antiSpam.askIfNextIsSpam))
            }, e.prototype.doesNotNeedToBeChecked = function() {
                return this.isOnScreen && !this.view.isDone
            }, e.prototype.needsToBeDisplayed = function() {
                var e, t, r = this.type === n.HSBlockType.SaveInput && ((null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.variable()) || (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.localVariable())),
                    i = this.type === n.HSBlockType.SetTextToInput,
                    o = this.type === n.HSBlockType.ShowPopup;
                return !this.isSpam && !this.isOnScreen && (r || i || o) && !this.isDone
            }, Object.defineProperty(e.prototype, "isDone", {
                get: function() {
                    return this.view.isDone
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "antiSpam", {
                get: function() {
                    return e.antiSpam
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isSpam", {
                get: function() {
                    return this.antiSpam.dontShowPrompts
                },
                enumerable: !1,
                configurable: !0
            }), e.antiSpam = null, e
        }();

    function c(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
    }
    t.HSStagePrompt = s;
    var u = function() {
        function e(e) {
            void 0 === e && (e = "Type here"), this.text = e, this.isSpam = !1, this.isDone = !1, this.appValue = "", this.createHTMLView(e)
        }
        return e.prototype.createHTMLView = function(e) {
            var t = this;
            if (!a.isIOSApp()) {
                var r = document.createElement("div");
                r.id = "hs_parent_div" + a.generateUUID(), r.classList.add("hs-popup"), c(r.style, {
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, 20%)",
                    overflow: "hidden",
                    padding: "10px 20px 10px 20px",
                    borderRadius: "16px",
                    background: "white",
                    boxShadow: "2px 2px 8px 2px rgba(158, 158, 158, 0.47)",
                    zIndex: "9",
                    fontSize: "100%",
                    minWidth: "min(35%, 320px)"
                }), this.div = r;
                var i = document.createElement("p");
                c(i.style, {
                    fontSize: "1em",
                    "word-break": "break-word",
                    fontFamily: "Avenir, sans-serif",
                    fontWeight: "normal",
                    color: "#000000c2",
                    margin: "10px 0px",
                    textAlign: "center"
                }), i.innerText = e, this.div.appendChild(i);
                var n = document.createElement("input");
                c(n.style, {
                    width: "100%",
                    height: "50px",
                    type: "text",
                    fontSize: "1.8em",
                    fontFamily: "Avenir, sans-serif",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "8px",
                    borderImage: "none",
                    outline: "none",
                    padding: "10px",
                    color: "#000000de"
                }), n.autofocus = !0, this.input = n, this.div.appendChild(n);
                var o = document.createElement("a");
                c(o.style, {
                    fontFamily: "Avenir, sans-serif",
                    display: "block",
                    position: "relative",
                    textAlign: "center",
                    padding: "10px",
                    background: "#1dd8be",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.8em",
                    borderRadius: "19px",
                    width: "100px",
                    margin: "10px auto -1px",
                    cursor: "pointer",
                    userSelect: "none",
                    webkitUserSelect: "none"
                }), o.innerText = "OK";
                var s = p() ? "touchstart" : "click";
                o.addEventListener(s, (function() {
                    u(t)
                })), n.addEventListener(s, (function(e) {
                    return n.focus()
                })), n.addEventListener("keyup", (function(e) {
                    13 === e.keyCode && (e.preventDefault(), u(t))
                })), this.btn = o, this.div.appendChild(o)
            }

            function u(e) {
                e.isDone = !0, e.hide()
            }
        }, e.prototype.show = function(e) {
            this.showAppPromptIfNecessary(e), this.showBrowserPromptIfNecessary()
        }, e.prototype.showBrowserPromptIfNecessary = function() {
            a.isIOSApp() || (document.body.appendChild(this.div), this.input.value = "", this.input.focus())
        }, e.prototype.showAppPromptIfNecessary = function(e) {
            var t = this;
            a.isIOSApp() && (a.HSApp.sendToApp("input_prompt" + (e ? ":spam" : ""), this.text), a.HSApp.readFromAppOnce("input_prompt", (function(e) {
                t.readInputFromIOSApp(e, !1)
            })), e && a.HSApp.readFromAppOnce("input_prompt:spam", (function(e) {
                t.readInputFromIOSApp(e, !0)
            })))
        }, e.prototype.readInputFromIOSApp = function(e, t) {
            this.appValue = e, this.isDone = !0, this.isSpam = t
        }, e.prototype.hide = function() {
            a.isIOSApp() || this.div.remove()
        }, e.prototype.isFilled = function() {
            return "" !== this.value
        }, Object.defineProperty(e.prototype, "value", {
            get: function() {
                return a.isIOSApp() ? this.appValue : this.input.value
            },
            enumerable: !1,
            configurable: !0
        }), e
    }();
    t.PromptView = u;
    var l = function() {
        function e(e) {
            void 0 === e && (e = ""), this.text = e, this.isSpam = !1, this.isDone = !1, this.createHTMLView(e)
        }
        return e.prototype.createHTMLView = function(e) {
            var t = this,
                r = document.createElement("div");
            r.id = "hs_parent_div" + a.generateUUID(), r.classList.add("hs-popup"), c(r.style, {
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 20%)",
                overflow: "hidden",
                padding: "10px 20px 10px 20px",
                borderRadius: "16px",
                background: "white",
                boxShadow: "2px 2px 8px 2px rgba(158, 158, 158, 0.47)",
                zIndex: "9",
                fontSize: "100%",
                minWidth: "min(35%, 320px)"
            }), this.div = r;
            var i = document.createElement("p");
            c(i.style, {
                fontSize: "2em",
                fontFamily: "Avenir, sans-serif",
                fontWeight: "normal",
                color: "#000000c2",
                margin: "10px 0px",
                textAlign: "center",
                overflowY: "scroll",
                maxHeight: "8em",
                userSelect: "text",
                webkitUserSelect: "text"
            }), i.innerText = e, this.div.appendChild(i);
            var n = document.createElement("a");
            c(n.style, {
                fontFamily: "Avenir, sans-serif",
                display: "block",
                position: "relative",
                textAlign: "center",
                padding: "10px",
                background: "#1dd8be",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.8em",
                borderRadius: "19px",
                width: "100px",
                margin: "10px auto -1px",
                cursor: "pointer",
                userSelect: "none",
                webkitUserSelect: "none"
            }), n.innerText = "OK";
            var o = p() ? "touchstart" : "click";
            n.addEventListener(o, (function(e) {
                var r;
                (r = t).isDone = !0, r.hide(), e.preventDefault(), e.stopImmediatePropagation()
            }), {
                capture: !0,
                once: !0
            }), this.btn = n, this.div.appendChild(n)
        }, e.prototype.showBrowserPromptIfNecessary = function() {
            a.isIOSApp() || document.body.appendChild(this.div)
        }, e.prototype.show = function(e) {
            this.showAppPromptIfNecessary(e), this.showBrowserPromptIfNecessary()
        }, e.prototype.hide = function() {
            this.div.remove()
        }, Object.defineProperty(e.prototype, "value", {
            get: function() {
                return ""
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.showAppPromptIfNecessary = function(e) {
            var t = this;
            a.isIOSApp() && (a.HSApp.sendToApp("message_prompt" + (e ? ":spam" : ""), this.text), a.HSApp.readFromAppOnce("message_prompt", (function(e) {
                t.readInputFromIOSApp(!1)
            })), e && a.HSApp.readFromAppOnce("message_prompt:spam", (function(e) {
                t.readInputFromIOSApp(!0)
            })))
        }, e.prototype.readInputFromIOSApp = function(e) {
            this.isDone = !0, this.isSpam = e
        }, e
    }();
    t.MessageView = l;
    var h = function() {
        function e() {
            var e = this;
            this.minTimeBeforeSpam = 1600, this.timeBeforeCheck = 2200, this.count = 0, this.lastTime = 0, this.elapsed = 0, this.askIfNextIsSpam = !1, this.dontShowPrompts = !1, this.reset = function() {
                e.count = 0, e.elapsed = 0, e.lastTime = 0, e.askIfNextIsSpam = !1, e.dontShowPrompts = !1
            }, a.HSApp.addResetCallback("antispam", this.reset)
        }
        return e.prototype.check = function(e) {
            e && (this.dontShowPrompts = !0), this.checkElapsedTime(), this.lastTime = Date.now(), this.askIfNextIsSpam = this.askUserIfNextIsSpam()
        }, e.prototype.checkElapsedTime = function() {
            if (0 !== this.lastTime) {
                var e = this.lastTime,
                    t = Date.now() - e;
                this.elapsed += t, this.count += 1
            }
        }, e.prototype.askUserIfNextIsSpam = function() {
            if (this.elapsed <= this.timeBeforeCheck) return !1;
            var e = this.elapsed,
                t = this.count;
            return this.elapsed = 0, this.count = 0, e / t <= this.minTimeBeforeSpam
        }, e
    }();

    function p() {
        return "ontouchstart" in document.documentElement
    }
    window.HSStagePrompt = s, window.PromptView = u
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSRuleActivator = void 0;
    var i = r(70),
        n = r(1),
        o = function() {
            function e(e) {
                this.scene = e, this.currentCollisions = new i.HSCollisionPairCollection([]), this._stageRuleGroupCache = new Set, this._stageRulesCache = null, this._objectsToDestroy = []
            }
            return e.prototype.stageObjects = function() {
                return this.scene.stageObjects
            }, e.prototype.stageRuleGroups = function() {
                return this.stageObjects().flatMap((function(e) {
                    return e.ruleGroups
                }))
            }, e.prototype.addToDestroyQueue = function(e) {
                this._objectsToDestroy.push(e)
            }, e.prototype.cleanDestroyQueue = function() {
                for (var e; e = this._objectsToDestroy.pop();) this.destroy(e)
            }, e.prototype.destroy = function(e) {
                var t = this;
                this._removeRulesForObject(e), e.ruleGroups.forEach((function(e) {
                    return t._stageRuleGroupCache.delete(e)
                })), this._collisionPairs = null, this.scene.destroy(e)
            }, e.prototype._removeRulesForObject = function(e) {
                var t = this.stageRulesCache();
                for (var r in t) 0 !== t[r].length && (t[r] = t[r].filter((function(t) {
                    return !t.isCurrentObject(e)
                })))
            }, e.prototype.activateAllRulesForEventType = function(e) {
                this.stageRuleGroups().forEach((function(t) {
                    return t.activateAllStageRulesForEventType(e)
                }))
            }, e.prototype.allPossibleCollisionPairs = function() {
                var e = this;
                return this._collisionPairs || (this._collisionPairs = new i.HSCollisionPairCollection, this.stageObjects().forEach((function(t) {
                    return e.addCollisionPairsForStageObject(t)
                }))), this._collisionPairs
            }, e.prototype.addCollisionPairsForStageObject = function(e) {
                if (this._collisionPairs) {
                    var t = Array.from(e.relatedCollisionRules).map((function(e) {
                        return e.collisionPairs()
                    })).reduce((function(e, t) {
                        return e.concat(t)
                    }), []).filter((function(e) {
                        var t = e.stageObject1,
                            r = e.stageObject2;
                        return t && t.isAlive && r && r.isAlive
                    }));
                    this._collisionPairs.add(t), this._collisionPairs.add(e.allPossibleCollisionPairs())
                }
            }, e.prototype.allStageRulesForEventType = function(e) {
                var t = this,
                    r = this.stageRulesCache();
                return this.stageRuleGroups().filter((function(e) {
                    return !t._stageRuleGroupCache.has(e)
                })).forEach((function(e) {
                    t.cacheRulesForStageObject(e)
                })), r[e]
            }, e.prototype.stageRulesCache = function() {
                if (this._stageRulesCache) return this._stageRulesCache;
                this._stageRulesCache = {};
                for (var e = Object.keys(n.HSBlockType).filter((function(e) {
                        return "string" == typeof e
                    })), t = 0; t < e.length; t++) this._stageRulesCache[e[t]] = [];
                return this._stageRulesCache
            }, e.prototype.cacheRulesForStageObject = function(e) {
                var t = this.stageRulesCache(),
                    r = e.allRulesIncludingNested();
                this._stageRuleGroupCache.add(e), r.forEach((function(e) {
                    return t[e.eventType()].push(e)
                }))
            }, e.prototype.activateCurrentCollisionRules = function() {
                var e = this;
                this.allTouchingRules().forEach((function(t) {
                    t.collisionPairs().find((function(t) {
                        return e.currentCollisions.contains(t)
                    })) && t.activate()
                })), this.allNotTouchingRules().forEach((function(t) {
                    t.collisionPairs().find((function(t) {
                        return e.currentCollisions.contains(t)
                    })) || t.activate()
                })), this.allBumpRules().forEach((function(t) {
                    e.bumpingCollisions.intersects(t.collisionPairs()) && t.activate()
                }))
            }, e.prototype.allNotTouchingRules = function() {
                return this.allStageRulesForEventType(n.HSBlockType.EventOperatorIsNotTouching)
            }, e.prototype.allTouchingRules = function() {
                return this.allStageRulesForEventType(n.HSBlockType.EventOperatorIsTouching)
            }, e.prototype.allBumpRules = function() {
                return this.allStageRulesForEventType(n.HSBlockType.EventOperatorBump)
            }, e.prototype.executeAllActiveRules = function() {
                for (var e = this.stageRuleGroups(), t = e.length, r = 0; r < t; ++r) void 0 !== e[r] && e[r].executeActiveRules()
            }, e.prototype.activateAllRulesForEventWithObjects = function(e, t) {
                var r = this.allStageRulesForEventType(e);
                t.forEach((function(e) {
                    r.forEach((function(t) {
                        t.activateIfMatchesFirstObject(e)
                    }))
                }))
            }, e
        }();
    t.HSRuleActivator = o, window.HSRuleActivator = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionPairCollection = void 0;
    var i = function() {
        function e(e) {
            void 0 === e && (e = []), this.pairMap = new Map, this.add(e)
        }
        return e.prototype.add = function(e) {
            var t = this;
            e.forEach((function(e) {
                return t.addOne(e)
            }))
        }, e.prototype.filter = function(t) {
            return new e(this.toArray().filter(t))
        }, e.prototype.contains = function(e) {
            return this.pairMap.has(e.uniqueKey)
        }, e.prototype.without = function(e) {
            return this.filter((function(t) {
                return !e.contains(t)
            }))
        }, e.prototype.addOne = function(e) {
            this.pairMap.set(e.uniqueKey, e)
        }, e.prototype.toArray = function() {
            return Array.from(this.pairMap.values())
        }, e.prototype.intersects = function(e) {
            var t = this;
            return e.some((function(e) {
                return t.contains(e)
            }))
        }, e.prototype.copy = function() {
            return new e(Array.from(this))
        }, e.prototype.forEach = function(e) {
            return this.pairMap.forEach((function(t) {
                return e(t)
            }))
        }, e.prototype[Symbol.iterator] = function() {
            return this.pairMap.values()
        }, e.prototype.length = function() {
            return this.pairMap.size
        }, e
    }();
    t.HSCollisionPairCollection = i, window.HSCollisionPairCollection = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSLinkedListIterator = t.HSLinkedListNode = t.HSLinkedList = void 0;
    var i = function() {
        function e() {
            this.nodeMap = new Map, this.headNode = new n, this.length = 0, this.headNode.next = this.headNode, this.headNode.previous = this.headNode
        }
        return e.prototype.setNewOrder = function(e) {
            var t = this,
                r = e(Array.from(this.nodeMap.keys()));
            r.forEach((function(e) {
                return t.remove(e)
            })), r.forEach((function(e) {
                return t.push(e)
            }))
        }, e.prototype.push = function(e) {
            if (!this.includes(e)) {
                var t = new n(e);
                t.next = this.headNode, t.previous = this.headNode.previous, t.previous.next = t, this.headNode.previous = t, this.nodeMap.set(e, t), this.length++
            }
        }, e.prototype.unshift = function(e) {
            if (!this.includes(e)) {
                var t = new n(e);
                t.next = this.headNode.next, t.previous = this.headNode, t.next.previous = t, this.headNode.next = t, this.nodeMap.set(e, t), this.length++
            }
        }, e.prototype.remove = function(e) {
            var t = this.nodeMap.get(e);
            t && (t.previous.next = t.next, t.next.previous = t.previous, this.nodeMap.delete(e), this.length--)
        }, e.prototype.includes = function(e) {
            return this.nodeMap.has(e)
        }, e.prototype[Symbol.iterator] = function() {
            return new o(this.headNode)
        }, e.prototype.getReverseIterator = function() {
            return new o(this.headNode, !0)
        }, e.prototype.forEach = function(e) {
            var t = this,
                r = 0;
            this[Symbol.iterator]().forEach((function(i) {
                return e(i, r++, t)
            }))
        }, e.prototype.forEachRight = function(e) {
            var t = this,
                r = this.length - 1;
            this.getReverseIterator().forEach((function(i) {
                return e(i, r--, t)
            }))
        }, e.prototype.find = function(e) {
            var t = this,
                r = 0;
            return this[Symbol.iterator]().find((function(i) {
                return e(i, r++, t)
            }))
        }, e.prototype.findLast = function(e) {
            var t = this,
                r = this.length - 1;
            return this.getReverseIterator().find((function(i) {
                return e(i, r--, t)
            }))
        }, e
    }();
    t.HSLinkedList = i;
    var n = function(e) {
        void 0 === e && (e = null), this.value = e, this.next = this, this.previous = this
    };
    t.HSLinkedListNode = n;
    var o = function() {
        function e(e, t) {
            void 0 === t && (t = !1), this.headNode = e, this.isReversed = t, this.currentNode = e
        }
        return e.prototype.next = function() {
            var e = this.isReversed ? this.currentNode.previous : this.currentNode.next;
            return e !== this.headNode ? (this.currentNode = e, {
                value: this.currentNode.value,
                done: !1
            }) : {
                value: void 0,
                done: !0
            }
        }, e.prototype.forEach = function(e) {
            for (var t = this.next(); !t.done;) e(t.value), t = this.next()
        }, e.prototype.find = function(e) {
            for (var t = this.next(); !t.done;) {
                if (e(t.value)) return t.value;
                t = this.next()
            }
        }, e.prototype[Symbol.iterator] = function() {
            return this
        }, e
    }();
    t.HSLinkedListIterator = o, window.HSLinkedList = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSSound = void 0;
    var i = r(2),
        n = function() {
            function e(t, r, i) {
                var n = this;
                void 0 === i && (i = "mp3"), this.name = t, this.context = r, this.extension = i, this.sources = new Set, e.soundCache.has(t) || e.soundCache.set(t, new Promise((function(e, t) {
                    var r = new XMLHttpRequest;
                    r.open("GET", n.url(), !0), r.responseType = "arraybuffer", r.onload = function() {
                        r.status >= 200 && r.status < 300 ? n.context.decodeAudioData(r.response, e, (function() {})) : t(r)
                    }, r.onerror = t, r.send()
                }))), e.soundCache.get(t).then((function(e) {
                    return n.buffer = e
                }))
            }
            return e.prototype.play = function() {
                var e = this;
                if (i.isIOSApp()) i.HSApp.sendToApp("sound", this.name);
                else if (this.buffer) {
                    var t = this.context.createBufferSource();
                    t.buffer = this.buffer, t.connect(this.context.destination), t.start(0), this.sources.add(t), t.onended = function() {
                        return e.sources.delete(t)
                    }
                }
            }, e.prototype.stop = function() {
                this.sources.forEach((function(e) {
                    return e.stop()
                })), this.sources.clear()
            }, e.prototype.url = function() {
                return "https://d2jeqdlsh5ay24.cloudfront.net/" + this.name + "." + this.extension
            }, e.soundCache = new Map, e
        }();
    t.HSSound = n, window.HSSound = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMicrophoneManager = void 0;
    var i = r(0),
        n = r(2),
        o = function() {
            function e(e, t) {
                var r, o = this;
                this.volumeCallback = function() {
                    return !1
                }, n.isIOSApp() || t && (null === (r = navigator.mediaDevices) || void 0 === r || r.getUserMedia({
                    audio: !0
                }).then((function(t) {
                    var r = e.createMediaStreamSource(t),
                        n = e.createAnalyser();
                    n.fftSize = 512, n.minDecibels = -127, n.maxDecibels = 0, n.smoothingTimeConstant = .4, r.connect(n);
                    var a = new Uint8Array(n.frequencyBinCount);
                    o.volumeCallback = function() {
                        var e, t;
                        n.getByteFrequencyData(a);
                        var r = 0;
                        try {
                            for (var o = i.__values(a), s = o.next(); !s.done; s = o.next()) {
                                r += s.value
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (t = o.return) && t.call(o)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return 100 * (r / a.length) / 127 > 45
                    }
                })).catch((function(e) {
                    console.log("Could not access the microphone. ", e)
                })))
            }
            return e.prototype.hasLoudNoise = function() {
                return !n.isIOSApp() && this.volumeCallback()
            }, e
        }();
    t.HSMicrophoneManager = o, window.HSMicrophoneManager = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageRule = void 0;
    var i = r(0),
        n = r(17),
        o = r(75),
        a = r(1),
        s = r(2),
        c = r(7),
        u = r(11),
        l = function(e) {
            function t(t, r, i) {
                var n = e.call(this, r) || this;
                return n.eventBlock = t, n.ruleGroup = r, n.parentCustomRule = i, n.isActive = !1, n._collisionPairs = [], n.numFirstParamObjects = 0, n.numSecondParamObjects = 0, n.activateIfEqualsEventMessage = function(e) {
                    var t;
                    e.trim() === (null === (t = n.eventBlock.parameterBlockStringValues(n.ruleGroup)[0]) || void 0 === t ? void 0 : t.trim()) && n.activate()
                }, n.activateIfMatchesEventMessage = function(e) {
                    var t, r = e.trim(),
                        i = null === (t = n.eventBlock.parameterBlockStringValues(n.ruleGroup)[0]) || void 0 === t ? void 0 : t.trim();
                    s.checkMatches(r, i) && n.activate()
                }, n
            }
            return i.__extends(t, e), t.prototype.scopeMode = function() {
                return u.ScopeMode.Own
            }, t.prototype.reset = function() {
                var e;
                null === (e = this.environment()) || void 0 === e || e.clear(), this.stageScript.reset()
            }, t.prototype.activate = function() {
                this.isActive || (this.reset(), this.isActive = !0)
            }, t.prototype.activateIfMatchesFirstObject = function(e) {
                this.matchesFirstObject(e) && this.activate()
            }, t.prototype.activateIfNotPressed = function(e) {
                this.isPressed(e) || this.activate()
            }, t.prototype.isPressed = function(e) {
                var t = this;
                return e.currentlyPressedObjects.some((function(e) {
                    return t.matchesATap(e)
                }))
            }, t.prototype.matchesATap = function(e) {
                var t = this;
                return e.some((function(e) {
                    return t.matchesFirstObject(e)
                }))
            }, t.prototype.break = function() {
                this.isActive = !1, this.reset()
            }, t.prototype.collisionPairs = function() {
                var e = this,
                    t = this.eventBlock.childParameterBlocks()[0],
                    r = this.eventBlock.childParameterBlocks()[1],
                    i = this.stageObjectsForParameter(t),
                    n = this.stageObjectsForParameter(r);
                if (this._collisionPairs && this.numFirstParamObjects === i.length && this.numSecondParamObjects === n.length) return this._collisionPairs;
                var a = i.slice(this.numFirstParamObjects),
                    s = n.slice(this.numSecondParamObjects),
                    c = i.slice(0, this.numFirstParamObjects);
                return a.forEach((function(t) {
                    n.filter((function(e) {
                        return e !== t
                    })).forEach((function(r) {
                        e._collisionPairs.push(new o.HSCollisionPair(t, r)), t.relatedCollisionRules.add(e), r.relatedCollisionRules.add(e)
                    }))
                })), c.forEach((function(t) {
                    s.filter((function(e) {
                        return e !== t
                    })).forEach((function(r) {
                        e._collisionPairs.push(new o.HSCollisionPair(t, r))
                    }))
                })), this.numFirstParamObjects = i.length, this.numSecondParamObjects = n.length, this._collisionPairs
            }, t.prototype.stageObjectsForParameter = function(e) {
                try {
                    return e.type === a.HSBlockType.AnyObject ? n.HSStageProject.sharedInstance.activeStageScene.stageObjects : e.stageObjects(this.ruleGroup)
                } catch (e) {}
                return []
            }, t.prototype.eventType = function() {
                return this.eventBlock.type
            }, t.prototype.matchesEvent = function(e) {
                return this.eventType() === e
            }, t.prototype.matchesFirstObject = function(e) {
                return this.eventBlock.matchesStageObject(e, this.ruleGroup)
            }, t.prototype.execute = function(e) {
                this.isExecutable() ? (this.stageScript.isImmediate && (this.isActive = !1), this.stageScript.execute(e)) : this.isActive = !1
            }, t.prototype.isExecutable = function() {
                return this.isValid() && this.isActive && this.hasBlocksToExecute()
            }, t.prototype.hasBlocksToExecute = function() {
                return this.stageScript.blocks().length > 0
            }, t.prototype.isValid = function() {
                return null != this.stageScript
            }, t.prototype.conditionIsTrue = function(e) {
                return this.eventBlock.computedBooleanValue(e)
            }, t.prototype.deepCopy = function(e) {
                var r = new t(this.eventBlock, e, this.parentCustomRule);
                return r.stageScript = this.stageScript.deepCopy(r), r
            }, t.prototype.isCurrentObject = function(e) {
                return this.ruleGroup.parentObject === e
            }, t
        }(c.HSStageObjectBase);
    t.HSStageRule = l, window.HSStageRule = l
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionPair = void 0;
    var i = function() {
        function e(e, t) {
            this.isOverlapping = !1, this.wasOverlapping = !1;
            var r = this.getSortedPair(e, t);
            this.stageObject1 = r[0], this.stageObject2 = r[1], this.uniqueKey = this.stageObject1.stageObjectID + "_" + this.stageObject2.stageObjectID
        }
        return e.prototype.getSortedPair = function(e, t) {
            return e.stageObjectID < t.stageObjectID ? [e, t] : [t, e]
        }, e.prototype.collisionTest = function(e) {
            return !!this.canCollide() && e.collisionTest(this.stageObject1, this.stageObject2)
        }, e.prototype.isVisible = function() {
            return !this.stageObject1.isInvisible() && !this.stageObject2.isInvisible()
        }, e.prototype.canCollide = function() {
            return this.isVisible() && this.isAlive()
        }, e.prototype.isAlive = function() {
            return this.stageObject1.isAlive && this.stageObject2.isAlive
        }, e.prototype.update = function(e) {
            this.wasOverlapping = this.isOverlapping, this.isOverlapping = this.collisionTest(e)
        }, e.prototype.isTouching = function() {
            return this.isOverlapping
        }, e.prototype.isBumping = function() {
            return this.isTouching() && !this.wasOverlapping
        }, e
    }();
    t.HSCollisionPair = i, window.HSCollisionPair = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCustomObject = void 0;
    var i = function() {
        function e(e, t, r, i) {
            this.fileName = e, this.width = t, this.height = r, this.updatedDate = 0, i && (this.updatedDate = new Date(i).getTime())
        }
        return e.prototype.computedValue = function() {
            return 0
        }, e.prototype.stageParameterBlock = function(e) {
            return this
        }, e
    }();
    t.HSCustomObject = i, window.HSCustomObject = i
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UIRegisterEventCallbacks = t.UIEventListener = t.UIEventListeners = t.UIPointerEvent = void 0;
    var i = r(4),
        n = r(21),
        o = function(e, t, r) {
            void 0 === r && (r = 0), this.id = r, this.id = r;
            var o = e.target,
                a = o.clientWidth,
                s = o.clientHeight;
            this.point = new n.Vec2(t[0] * i.HSStageScene.stageWidth / a, i.HSStageScene.stageHeight - t[1] * i.HSStageScene.stageHeight / s)
        };
    t.UIPointerEvent = o;
    var a = function() {
        function e(e) {
            this.listeners = e
        }
        return e.prototype.unregister = function() {
            this.listeners.forEach((function(e) {
                return e.unregister()
            }))
        }, e
    }();
    t.UIEventListeners = a;
    var s = function() {
        function e(e, t, r) {
            this.element = e, this.eventType = t, this.callback = r, e.addEventListener(t, r)
        }
        return e.prototype.unregister = function() {
            this.element.removeEventListener(this.eventType, this.callback)
        }, e
    }();
    t.UIEventListener = s, t.UIRegisterEventCallbacks = function(e, t) {
        function r(e, t, r) {
            return new s(e, t, (function(e) {
                e.preventDefault(), r(e)
            }))
        }

        function i(e, t, i) {
            return r(e, t, (function(e) {
                var t = [e.offsetX, e.offsetY],
                    r = new o(e, t);
                i(r)
            }))
        }

        function n(e, t, i) {
            return r(e, t, (function(e) {
                return function(e, t) {
                    var r = e.target.getBoundingClientRect();
                    Array.from(e.changedTouches).forEach((function(e) {
                        t(new o(e, [e.clientX - r.left, e.clientY - r.top], e.identifier))
                    }))
                }(e, i)
            }))
        }
        var c = !1;
        return new a([i(e, "mousedown", (function(e) {
            c && t.pointerUp(e), c = !0, t.pointerDown(e)
        })), i(e, "mousemove", (function(e) {
            c && t.pointerDrag(e)
        })), i(window, "mouseup", (function(e) {
            t.pointerUp(e), c = !1
        })), n(e, "touchstart", t.pointerDown), n(e, "touchmove", t.pointerDrag), n(window, "touchend", t.pointerUp), n(window, "touchcancel", t.pointerCancel)])
    }, window.UIPointerEvent = o, window.UIEventListeners = a, window.UIEventListener = s
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProjectOpener = void 0;
    var i = r(2),
        n = function() {
            function e(e) {
                this.projectIdentifier = e
            }
            return e.prototype.open = function() {
                if (i.isIOSApp()) i.HSApp.sendToApp("openProject", this.projectIdentifier);
                else {
                    var e = function(e) {
                            var t = document.getElementById("page-info"),
                                r = window.location.href;
                            try {
                                r = JSON.parse(t.dataset.api).endpoint
                            } finally {
                                return new URL(e, r).toString()
                            }
                        }("/api/v2/links"),
                        t = {
                            source: window.location.href,
                            target: this.projectIdentifier
                        },
                        r = new XMLHttpRequest;
                    r.open("PUT", e, !0), r.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), r.onreadystatechange = function() {
                        if (4 === r.readyState && 200 === r.status) {
                            var e = JSON.parse(r.responseText).target_uuid,
                                t = (/\/e\//.test(window.location.href) ? "/e/" : "/p/") + e + "?play=1";
                            window.location.href = new URL(t, window.location.href).toString()
                        }
                    }, r.send(JSON.stringify(t))
                }
            }, e
        }();
    t.HSProjectOpener = n, window.HSProjectOpener = n
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageScript = void 0;
    var i = r(0),
        n = r(34),
        o = r(13),
        a = r(7),
        s = r(11),
        c = function(e) {
            function t(t, r) {
                var i, n = e.call(this, t) || this;
                return n.script = r, null === (i = n.environment()) || void 0 === i || i.clear(), n
            }
            return i.__extends(t, e), t.prototype.scopeMode = function() {
                return s.ScopeMode.Parent
            }, t.prototype.reset = function() {
                var e;
                null === (e = this.environment()) || void 0 === e || e.clear(), this._blocks = i.__spread(this.script.stageBlocks(this.parentNode())), this.isImmediate = this.blocks().every((function(e) {
                    return e.isImmediate
                }))
            }, t.prototype.blocks = function() {
                return this._blocks || (this._blocks = i.__spread(this.script.stageBlocks(this.parentNode()))), this._blocks
            }, t.prototype.execute = function(e) {
				const startTime = performance.now() //PETRICHOR-MOD
                var t = this.executableForStepSize(e.maxStepSize(), e);
                t.execute(e), this._blocks = t.blocksToExecuteLater, this.isImmediate = this._blocks.every((function(e) {
                    return e.isImmediate
                })), t.isImmediate && this.execute(e)
				const endTime = performance.now() //PETRICHOR-MOD start
				const id = this.petrichorId || this.script.objectID
				if (id) {
					let current = PETRICHOR_SCRIPT_PERFORMANCE_EVENTS[id] || {maxTime: -Infinity, minTime: Infinity, totalTime: 0, executionCount: 0}
					current.executionCount++
                    const executionTime = endTime-startTime
                    current.totalTime += executionTime
                    current.maxTime = Math.max(current.maxTime, executionTime)
                    current.minTime = Math.min(current.minTIme, executionTime)
					PETRICHOR_SCRIPT_PERFORMANCE_EVENTS[id] = current
				} else {debugger}//PETRICHOR-MOD end 
            }, t.prototype.isImmediatelyRecursive = function() {
                return this.script.isImmediatelyRecursive()
            }, t.prototype.executableForStepSize = function(e, t) {
                if (!this.blocks().length) return new n.HSExecutable([], []);
                var r = this.blocks().slice().reverse(),
                    i = r.pop(),
                    o = i.executableForStepSize(e, t, this);
                return new n.HSExecutable(o.blocksToExecuteNow, o.blocksToExecuteLater.concat(r.reverse()), i.isImmediate)
            }, t.prototype.deepCopy = function(e) {
                return new t(e, this.script)
            }, t.prototype.toString = function() {
                return o.SourceFormatter.blocksToSrc(this._blocks)
            }, t
        }(a.HSStageObjectBase);
    t.HSStageScript = c, window.HSStageScript = c
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageCustomRule = void 0;
    var i = r(0),
        n = r(11),
        o = function(e) {
            function t(t, r) {
                var i = e.call(this, t) || this;
                return i.name = r, i.ruleGroups = [], i.parameters = [], i
            }
            return i.__extends(t, e), t.prototype.scopeMode = function() {
                return n.ScopeMode.DynamicRoot
            }, t.prototype.baseRuleGroup = function() {
                return this.ruleGroups[0]
            }, t.prototype.script = function() {
                var e;
                return null === (e = this.ruleGroups[0]) || void 0 === e ? void 0 : e.script()
            }, t.prototype.rules = function() {
                return this.ruleGroups.flatMap((function(e) {
                    return e.rules()
                }))
            }, t.prototype.deepCopy = function(e) {
                var r = this,
                    i = new t(e, this.name);
                return i.ruleGroups = this.ruleGroups.map((function(t) {
                    return t.deepCopy(r, e.parentObject)
                })), i
            }, t
        }(r(7).HSStageObjectBase);
    t.HSStageCustomRule = o
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.preprocess_json_for_2_0 = void 0;
    var i = r(2),
        n = r(25);

    function o(e) {
        var t, r;
        if (e[n.CUSTOM_RULES_KEY] && !e[n.CUSTOM_RULE_INSTANCES_KEY]) {
            var o = null === (t = e[n.CUSTOM_RULES_KEY]) || void 0 === t ? void 0 : t.map((function(e) {
                    return e.id
                })),
                a = [];
            null === (r = e[n.OBJECTS_KEY]) || void 0 === r || r.forEach((function(e) {
                var t, r = [];
                null === (t = e.rules) || void 0 === t || t.forEach((function(e) {
                    if (o.includes(e)) {
                        var t = (n = e, {
                            id: i.generateUUID(),
                            customRuleID: n
                        });
                        a.push(t), r.push(t.id)
                    } else r.push(e);
                    var n
                })), e.rules = r
            })), e[n.CUSTOM_RULE_INSTANCES_KEY] = a
        }
    }
    t.preprocess_json_for_2_0 = o, window.preprocess_json_for_2_0 = o
}, function(e, t) {
    ! function(e) {
        var t = {};

        function r(i) {
            if (t[i]) return t[i].exports;
            var n = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        r.m = e, r.c = t, r.d = function(e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) r.d(i, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return i
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 3)
    }([function(e, t) {
        e.exports = PIXI
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(2),
            n = function() {
                function e(e, t) {
                    this.key = e, this.manager = t, this.isPressed = !1, this.isDown = !1, this.isReleased = !1, this.ctrl = !1, this.shift = !1, this.alt = !1
                }
                return e.prototype.update = function() {
                    this.isDown = this.manager.isDown(this.key), this.isPressed = this.manager.isPressed(this.key), this.isReleased = this.manager.isReleased(this.key), this.ctrl = this.manager.isDown(i.default.CTRL), this.shift = this.manager.isDown(i.default.SHIFT), this.alt = this.manager.isDown(i.default.ALT)
                }, e.prototype.remove = function() {
                    this.manager.removeHotKey(this.key)
                }, e
            }();
        t.default = n
    }, function(e, t, r) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.BACKSPACE = 8] = "BACKSPACE", e[e.TAB = 9] = "TAB", e[e.ENTER = 13] = "ENTER", e[e.SHIFT = 16] = "SHIFT", e[e.PAUSE = 19] = "PAUSE", e[e.CTRL = 17] = "CTRL", e[e.ALT = 18] = "ALT", e[e.CAPS_LOCK = 20] = "CAPS_LOCK", e[e.ESCAPE = 27] = "ESCAPE", e[e.SPACE = 32] = "SPACE", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", e[e.DOWN = 40] = "DOWN", e[e.PRINT_SCREEN = 44] = "PRINT_SCREEN", e[e.INSERT = 45] = "INSERT", e[e.DELETE = 46] = "DELETE", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.CMD = 91] = "CMD", e[e.CMD_RIGHT = 93] = "CMD_RIGHT", e[e.NUM_0 = 96] = "NUM_0", e[e.NUM_1 = 97] = "NUM_1", e[e.NUM_2 = 98] = "NUM_2", e[e.NUM_3 = 99] = "NUM_3", e[e.NUM_4 = 100] = "NUM_4", e[e.NUM_5 = 101] = "NUM_5", e[e.NUM_6 = 102] = "NUM_6", e[e.NUM_7 = 103] = "NUM_7", e[e.NUM_8 = 104] = "NUM_8", e[e.NUM_9 = 105] = "NUM_9", e[e.MULTIPLY = 106] = "MULTIPLY", e[e.ADD = 107] = "ADD", e[e.SUBTRACT = 109] = "SUBTRACT", e[e.DECIMAL_POINT = 110] = "DECIMAL_POINT", e[e.DIVIDE = 111] = "DIVIDE", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.NUM_LOCK = 144] = "NUM_LOCK", e[e.SCROLL_LOCK = 145] = "SCROLL_LOCK", e[e.SEMI_COLON = 186] = "SEMI_COLON", e[e.EQUAL = 187] = "EQUAL", e[e.COMMA = 188] = "COMMA", e[e.DASH = 189] = "DASH", e[e.PERIOD = 190] = "PERIOD", e[e.FORWARD_SLASH = 191] = "FORWARD_SLASH", e[e.OPEN_BRACKET = 219] = "OPEN_BRACKET", e[e.BACK_SLASH = 220] = "BACK_SLASH", e[e.CLOSE_BRACKET = 221] = "CLOSE_BRACKET", e[e.SINGLE_QUOTE = 222] = "SINGLE_QUOTE"
            }(i || (i = {})), t.default = i
    }, function(e, t, r) {
        e.exports = r(4)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
            n = r(5),
            o = r(1),
            a = r(2),
            s = {
                KeyboardManager: n.default,
                Key: a.default,
                HotKey: o.default
            },
            c = i;
        if (!c.keyboard) {
            var u = new n.default;
            u.enable(), c.keyboard = s, c.keyboardManager = u
        }
        t.default = s
    }, function(e, t, r) {
        "use strict";
        var i, n = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        }, function(e, t) {
            function r() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(0),
            a = r(1),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.isEnabled = !1, t.pressedKeys = [], t.releasedKeys = [], t.downKeys = {}, t.hotKeys = [], t.preventDefaultKeys = [], t
                }
                return n(t, e), t.prototype.enable = function() {
                    this.isEnabled || (this.isEnabled = !0, this._enableEvents())
                }, t.prototype._enableEvents = function() {
                    window.addEventListener("keydown", this._onKeyDown.bind(this), !0), window.addEventListener("keyup", this._onKeyUp.bind(this), !0)
                }, t.prototype.disable = function() {
                    this.isEnabled && (this.isEnabled = !1, this._disableEvents())
                }, t.prototype._disableEvents = function() {
                    window.removeEventListener("keydown", this._onKeyDown, !0), window.removeEventListener("keyup", this._onKeyUp, !0)
                }, t.prototype.setPreventDefault = function(e, t) {
                    if (void 0 === t && (t = !0), i = e, "[object Array]" === Object.prototype.toString.call(i))
                        for (var r = 0; r < e.length; r++) this.preventDefaultKeys[e[r]] = t;
                    else this.preventDefaultKeys[e] = t;
                    var i
                }, t.prototype._onKeyDown = function(e) {
                    var t = e.which || e.keyCode;
                    this.preventDefaultKeys[t] && e.preventDefault(), this.isDown(t) || (this.downKeys[t] = 0, this.pressedKeys[t] = !0, this.emit("pressed", t))
                }, t.prototype._onKeyUp = function(e) {
                    var t = e.which || e.keyCode;
                    this.preventDefaultKeys[t] && e.preventDefault(), this.isDown(t) && (this.pressedKeys[t] = !1, this.releasedKeys[t] = !0, delete this.downKeys[t], this.emit("released", t))
                }, t.prototype.downTime = function(e) {
                    return this.downKeys[e] || 0
                }, t.prototype.isDown = function(e) {
                    return this.downKeys.hasOwnProperty(e)
                }, t.prototype.isPressed = function(e) {
                    return !!this.pressedKeys[e]
                }, t.prototype.isReleased = function(e) {
                    return !!this.releasedKeys[e]
                }, t.prototype.update = function(e) {
                    for (var t in void 0 === e && (e = 0), this.hotKeys.forEach((function(e) {
                            return e.update()
                        })), this.downKeys) this.downKeys.hasOwnProperty(t) && (this.downKeys[t] += e, this.emit("down", t));
                    this.pressedKeys.length = 0, this.releasedKeys.length = 0
                }, t.prototype.getHotKey = function(e) {
                    var t = this.hotKeys[e] || new a.default(e, this);
                    return this.hotKeys[e] = t, t
                }, t.prototype.removeHotKey = function(e) {
                    this.hotKeys[e] && delete this.hotKeys[e]
                }, t
            }(o.utils.EventEmitter);
        t.default = s
    }])
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSManagedObjectFactory = void 0;
    var i = r(15),
        n = r(44),
        o = r(43),
        a = r(26),
        s = r(14),
        c = r(8),
        u = r(35),
        l = r(25),
        h = r(12),
        p = r(10),
        d = r(47),
        S = r(6),
        f = r(1),
        g = r(3),
        y = function() {
            function e() {
                this.context = new i.HSProjectContext, this.scene = this.buildScene(), this.project = new l.HSProject(this.context), this.project.scenes = [this.scene]
            }
            return e.prototype.buildDemoScene = function() {
                this.buildObject(S.HSObjectType.octopus, "", 400, 200);
                for (var e = this.buildObject(S.HSObjectType.chillanna, "", 400, 350), t = "Hello World \n", r = 0; r < 100; r++) t += "😈";
                return this.buildObject(S.HSObjectType.text, t, 350, 200), this.buildOnStartRule(e), this.scene.parseJSON(), this.scene
            }, e.prototype.buildScene = function() {
                var e = new o.HSScene(this.context);
                return e.parseJSON({}), e
            }, e.prototype.buildObject = function(e, t, r, i) {
                void 0 === e && (e = S.HSObjectType.monkey), void 0 === t && (t = ""), void 0 === r && (r = 750), void 0 === i && (i = 500);
                var n = new c.HSObject(this.scene.context);
                return n.type = e, n.text = t, n.x = r, n.y = i, n.objectID = Math.floor(Math.random() * Math.pow(2, 32)).toString(16), n
            }, e.prototype.buildObjectWithRule = function() {
                var e = this.buildObject();
                this.buildOnStartRule(e);
                return e
            }, e.prototype.buildOnStartRule = function(e, t) {
                var r = this.context;
                t || (t = this.buildScript()), e || (e = this.buildObject(S.HSObjectType.monkey));
                var i = new s.HSRule(r);
                i.script = t, e.addRule(i);
                var n = new h.HSParameter(r),
                    o = new p.HSParameterBlock(r);
                return o.type = f.HSBlockType.EventOperatorStart, n.childBlock = o, i.parameters = [n], i.parameters[0].childBlock.parameters[0] = new h.HSParameter(i.context), i.parameters[0].childBlock.parameters[0].childBlock = new p.HSParameterBlock(i.context), i
            }, e.prototype.buildTapRule = function(e, t) {
                return this.buildRule(f.HSBlockType.EventOperatorTap, e, t)
            }, e.prototype.buildRule = function(e, t, r) {
                var i = this.context;
                r || (r = this.buildScript()), t || (t = this.buildObject(S.HSObjectType.monkey));
                var n = new s.HSRule(i);
                n.script = r, t.addRule(n);
                var o = new h.HSParameter(i),
                    a = new p.HSParameterBlock(i);
                return a.type = e, o.childBlock = a, n.parameters = [o], n
            }, e.prototype.buildScript = function() {
                return this.buildScript3()
            }, e.prototype.buildRecursiveScript = function() {
                var e = new a.HSScript(this.context);
                return e.blocks = [this.buildControlBlock(f.HSBlockType.Ability, [""], e)], e
            }, e.prototype.buildEmptyScript = function() {
                var e = new a.HSScript(this.context);
                return e.blocks = [], e
            }, e.prototype.buildScript3 = function() {
                var e = this.context,
                    t = new a.HSScript(e);
                return t.blocks = [this.buildControlBlock(f.HSBlockType.Repeat, ["100"], this.buildScript4())], t
            }, e.prototype.buildScript4 = function() {
                var e = this.context,
                    t = new a.HSScript(e);
                return t.blocks = [this.buildMethodBlock(f.HSBlockType.SetInvisibility, ["90"]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, ["1600"]), this.buildMethodBlock(f.HSBlockType.SetTrailColor, ["HSB(74, 100, 100)"]), this.buildMethodBlock(f.HSBlockType.SetTrailWidth, ["30"]), this.buildMethodBlock(f.HSBlockType.PenDown, []), this.buildMethodBlock(f.HSBlockType.Move, ["200"]), this.buildMethodBlock(f.HSBlockType.PenUp, []), this.buildMethodBlock(f.HSBlockType.Rotate, ["135"]), this.buildMethodBlock(f.HSBlockType.Move, ["200"]), this.buildMethodBlock(f.HSBlockType.Rotate, ["145"])], t
            }, e.prototype.buildScript2 = function() {
                var e = this.context,
                    t = new a.HSScript(e);
                return t.blocks = [this.buildMethodBlock(f.HSBlockType.ChangeSpeed, ["1000"]), this.buildMethodBlock(f.HSBlockType.Move, ["100"]), this.buildMethodBlock(f.HSBlockType.Rotate, ["30"]), this.buildMethodBlock(f.HSBlockType.Move, ["150"]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, ["100"]), this.buildMethodBlock(f.HSBlockType.Rotate, ["60"]), this.buildMethodBlock(f.HSBlockType.Move, ["200"])], t
            }, e.prototype.buildScript1 = function() {
                var e = this.context,
                    t = new a.HSScript(e);
                return t.blocks = [this.buildMethodBlock(f.HSBlockType.Grow, ["200"]), this.buildMethodBlock(f.HSBlockType.Shrink, ["50"])], t
            }, e.prototype.buildScript0 = function() {
                for (var e = this.context, t = new a.HSScript(e), r = [this.buildMethodBlock(f.HSBlockType.SetPosition, ["200", "200"])], i = 0; i < 50; i++) r.push(this.buildMethodBlock(f.HSBlockType.Move, ["200"]));
                return r.push(this.buildMethodBlock(f.HSBlockType.SetSize, ["200"])), t.blocks = r, t
            }, e.prototype.buildMethodBlock = function(e, t) {
                void 0 === e && (e = f.HSBlockType.Move), void 0 === t && (t = []);
                this.context;
                var r = this.parametersFromValues(t),
                    i = new d.HSMethodBlock(this.context);
                return i.type = e, i.parameters = r, i
            }, e.prototype.parametersFromValues = function(e) {
                var t = this,
                    r = [];
                return e.forEach((function(e, i, n) {
                    var o = new h.HSParameter(t.context);
                    e instanceof g.HSVariable ? o.childBlock = e : o.value = e, r.push(o)
                })), r
            }, e.prototype.buildControlBlock = function(e, t, r) {
                void 0 === e && (e = f.HSBlockType.Repeat), void 0 === t && (t = []), r || (r = this.buildScript1());
                var i = this.parametersFromValues(t),
                    n = new u.HSControlBlock(this.context);
                return n.type = e, n.parameters = i, n.scripts = [r], n
            }, e.prototype.buildConditionalControlBlock = function(e, t, r) {
                void 0 === e && (e = f.HSBlockType.CheckOnceIf), void 0 === t && (t = []), r || (r = this.buildScript1());
                var i = this.parametersFromValues(t),
                    o = new n.HSConditionalControl(this.context);
                return o.type = e, o.parameters = i, o.scripts = [r], o
            }, e
        }();
    t.HSManagedObjectFactory = y, window.HSManagedObjectFactory = y
}, function(e, t, r) {
    "use strict";

    function i(e, t) {
        (function(e) {
            return "string" == typeof e && e.includes(".") && 1 === parseFloat(e)
        })(e) && (e = "100%");
        var r = function(e) {
            return "string" == typeof e && e.includes("%")
        }(e);
        return e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t))
    }

    function n(e) {
        return Math.min(1, Math.max(0, e))
    }

    function o(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
    }

    function a(e) {
        return e <= 1 ? 100 * Number(e) + "%" : e
    }

    function s(e) {
        return 1 === e.length ? "0" + e : String(e)
    }

    function c(e, t, r) {
        e = i(e, 255), t = i(t, 255), r = i(r, 255);
        var n = Math.max(e, t, r),
            o = Math.min(e, t, r),
            a = 0,
            s = 0,
            c = (n + o) / 2;
        if (n === o) s = 0, a = 0;
        else {
            var u = n - o;
            switch (s = c > .5 ? u / (2 - n - o) : u / (n + o), n) {
                case e:
                    a = (t - r) / u + (t < r ? 6 : 0);
                    break;
                case t:
                    a = (r - e) / u + 2;
                    break;
                case r:
                    a = (e - t) / u + 4
            }
            a /= 6
        }
        return {
            h: a,
            s: s,
            l: c
        }
    }

    function u(e, t, r) {
        e = i(e, 255), t = i(t, 255), r = i(r, 255);
        var n = Math.max(e, t, r),
            o = Math.min(e, t, r),
            a = 0,
            s = n,
            c = n - o,
            u = 0 === n ? 0 : c / n;
        if (n === o) a = 0;
        else {
            switch (n) {
                case e:
                    a = (t - r) / c + (t < r ? 6 : 0);
                    break;
                case t:
                    a = (r - e) / c + 2;
                    break;
                case r:
                    a = (e - t) / c + 4
            }
            a /= 6
        }
        return {
            h: a,
            s: u,
            v: s
        }
    }

    function l(e, t, r, i) {
        var n = [s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(r).toString(16))];
        return i && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
    }

    function h(e, t, r, i) {
        return [s(p(i)), s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(r).toString(16))].join("")
    }

    function p(e) {
        return Math.round(255 * parseFloat(e)).toString(16)
    }

    function d(e) {
        return S(e) / 255
    }

    function S(e) {
        return parseInt(e, 16)
    }
    r.r(t);
    var f = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };

    function g(e) {
        var t, r, n, s = {
                r: 0,
                g: 0,
                b: 0
            },
            c = 1,
            u = null,
            l = null,
            h = null,
            p = !1,
            d = !1;
        return "string" == typeof e && (e = b(e)), "object" == typeof e && (E(e.r) && E(e.g) && E(e.b) ? (t = e.r, r = e.g, n = e.b, s = {
            r: 255 * i(t, 255),
            g: 255 * i(r, 255),
            b: 255 * i(n, 255)
        }, p = !0, d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : E(e.h) && E(e.s) && E(e.v) ? (u = a(e.s), l = a(e.v), s = function(e, t, r) {
            e = 6 * i(e, 360), t = i(t, 100), r = i(r, 100);
            var n = Math.floor(e),
                o = e - n,
                a = r * (1 - t),
                s = r * (1 - o * t),
                c = r * (1 - (1 - o) * t),
                u = n % 6;
            return {
                r: 255 * [r, s, a, a, c, r][u],
                g: 255 * [c, r, r, s, a, a][u],
                b: 255 * [a, a, c, r, r, s][u]
            }
        }(e.h, u, l), p = !0, d = "hsv") : E(e.h) && E(e.s) && E(e.l) && (u = a(e.s), h = a(e.l), s = function(e, t, r) {
            var n, o, a;

            function s(e, t, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * r * (t - e) : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }
            if (e = i(e, 360), t = i(t, 100), r = i(r, 100), 0 === t) o = r, a = r, n = r;
            else {
                var c = r < .5 ? r * (1 + t) : r + t - r * t,
                    u = 2 * r - c;
                n = s(u, c, e + 1 / 3), o = s(u, c, e), a = s(u, c, e - 1 / 3)
            }
            return {
                r: 255 * n,
                g: 255 * o,
                b: 255 * a
            }
        }(e.h, u, h), p = !0, d = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (c = e.a)), c = o(c), {
            ok: p,
            format: e.format || d,
            r: Math.min(255, Math.max(s.r, 0)),
            g: Math.min(255, Math.max(s.g, 0)),
            b: Math.min(255, Math.max(s.b, 0)),
            a: c
        }
    }
    var y = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
        v = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?",
        m = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?",
        T = {
            CSS_UNIT: new RegExp(y),
            rgb: new RegExp("rgb" + v),
            rgba: new RegExp("rgba" + m),
            hsl: new RegExp("hsl" + v),
            hsla: new RegExp("hsla" + m),
            hsv: new RegExp("hsv" + v),
            hsva: new RegExp("hsva" + m),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };

    function b(e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (f[e]) e = f[e], t = !0;
        else if ("transparent" === e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var r = T.rgb.exec(e);
        return r ? {
            r: r[1],
            g: r[2],
            b: r[3]
        } : (r = T.rgba.exec(e)) ? {
            r: r[1],
            g: r[2],
            b: r[3],
            a: r[4]
        } : (r = T.hsl.exec(e)) ? {
            h: r[1],
            s: r[2],
            l: r[3]
        } : (r = T.hsla.exec(e)) ? {
            h: r[1],
            s: r[2],
            l: r[3],
            a: r[4]
        } : (r = T.hsv.exec(e)) ? {
            h: r[1],
            s: r[2],
            v: r[3]
        } : (r = T.hsva.exec(e)) ? {
            h: r[1],
            s: r[2],
            v: r[3],
            a: r[4]
        } : (r = T.hex8.exec(e)) ? {
            r: S(r[1]),
            g: S(r[2]),
            b: S(r[3]),
            a: d(r[4]),
            format: t ? "name" : "hex8"
        } : (r = T.hex6.exec(e)) ? {
            r: S(r[1]),
            g: S(r[2]),
            b: S(r[3]),
            format: t ? "name" : "hex"
        } : (r = T.hex4.exec(e)) ? {
            r: S(r[1] + r[1]),
            g: S(r[2] + r[2]),
            b: S(r[3] + r[3]),
            a: d(r[4] + r[4]),
            format: t ? "name" : "hex8"
        } : !!(r = T.hex3.exec(e)) && {
            r: S(r[1] + r[1]),
            g: S(r[2] + r[2]),
            b: S(r[3] + r[3]),
            format: t ? "name" : "hex"
        }
    }

    function E(e) {
        return Boolean(T.CSS_UNIT.exec(String(e)))
    }
    var H = function() {
        function e(t, r) {
            if (void 0 === t && (t = ""), void 0 === r && (r = {}), t instanceof e) return t;
            this.originalInput = t;
            var i = g(t);
            this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = r.format || i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok
        }
        return e.prototype.isDark = function() {
            return this.getBrightness() < 128
        }, e.prototype.isLight = function() {
            return !this.isDark()
        }, e.prototype.getBrightness = function() {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
        }, e.prototype.getLuminance = function() {
            var e = this.toRgb(),
                t = e.r / 255,
                r = e.g / 255,
                i = e.b / 255;
            return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .0722 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4))
        }, e.prototype.getAlpha = function() {
            return this.a
        }, e.prototype.setAlpha = function(e) {
            return this.a = o(e), this.roundA = Math.round(100 * this.a) / 100, this
        }, e.prototype.toHsv = function() {
            var e = u(this.r, this.g, this.b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this.a
            }
        }, e.prototype.toHsvString = function() {
            var e = u(this.r, this.g, this.b),
                t = Math.round(360 * e.h),
                r = Math.round(100 * e.s),
                i = Math.round(100 * e.v);
            return 1 === this.a ? "hsv(" + t + ", " + r + "%, " + i + "%)" : "hsva(" + t + ", " + r + "%, " + i + "%, " + this.roundA + ")"
        }, e.prototype.toHsl = function() {
            var e = c(this.r, this.g, this.b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this.a
            }
        }, e.prototype.toHslString = function() {
            var e = c(this.r, this.g, this.b),
                t = Math.round(360 * e.h),
                r = Math.round(100 * e.s),
                i = Math.round(100 * e.l);
            return 1 === this.a ? "hsl(" + t + ", " + r + "%, " + i + "%)" : "hsla(" + t + ", " + r + "%, " + i + "%, " + this.roundA + ")"
        }, e.prototype.toHex = function(e) {
            return void 0 === e && (e = !1), l(this.r, this.g, this.b, e)
        }, e.prototype.toHexString = function(e) {
            return void 0 === e && (e = !1), "#" + this.toHex(e)
        }, e.prototype.toHex8 = function(e) {
            return void 0 === e && (e = !1),
                function(e, t, r, i, n) {
                    var o = [s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(r).toString(16)), s(p(i))];
                    return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) && o[3].charAt(0) === o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("")
                }(this.r, this.g, this.b, this.a, e)
        }, e.prototype.toHex8String = function(e) {
            return void 0 === e && (e = !1), "#" + this.toHex8(e)
        }, e.prototype.toRgb = function() {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            }
        }, e.prototype.toRgbString = function() {
            var e = Math.round(this.r),
                t = Math.round(this.g),
                r = Math.round(this.b);
            return 1 === this.a ? "rgb(" + e + ", " + t + ", " + r + ")" : "rgba(" + e + ", " + t + ", " + r + ", " + this.roundA + ")"
        }, e.prototype.toPercentageRgb = function() {
            var e = function(e) {
                return Math.round(100 * i(e, 255)) + "%"
            };
            return {
                r: e(this.r),
                g: e(this.g),
                b: e(this.b),
                a: this.a
            }
        }, e.prototype.toPercentageRgbString = function() {
            var e = function(e) {
                return Math.round(100 * i(e, 255))
            };
            return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")"
        }, e.prototype.toName = function() {
            if (0 === this.a) return "transparent";
            if (this.a < 1) return !1;
            for (var e = "#" + l(this.r, this.g, this.b, !1), t = 0, r = Object.keys(f); t < r.length; t++) {
                var i = r[t];
                if (f[i] === e) return i
            }
            return !1
        }, e.prototype.toString = function(e) {
            var t = Boolean(e);
            e = e || this.format;
            var r = !1,
                i = this.a < 1 && this.a >= 0;
            return t || !i || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (r = this.toRgbString()), "prgb" === e && (r = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (r = this.toHexString()), "hex3" === e && (r = this.toHexString(!0)), "hex4" === e && (r = this.toHex8String(!0)), "hex8" === e && (r = this.toHex8String()), "name" === e && (r = this.toName()), "hsl" === e && (r = this.toHslString()), "hsv" === e && (r = this.toHsvString()), r || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString()
        }, e.prototype.clone = function() {
            return new e(this.toString())
        }, e.prototype.lighten = function(t) {
            void 0 === t && (t = 10);
            var r = this.toHsl();
            return r.l += t / 100, r.l = n(r.l), new e(r)
        }, e.prototype.brighten = function(t) {
            void 0 === t && (t = 10);
            var r = this.toRgb();
            return r.r = Math.max(0, Math.min(255, r.r - Math.round(-t / 100 * 255))), r.g = Math.max(0, Math.min(255, r.g - Math.round(-t / 100 * 255))), r.b = Math.max(0, Math.min(255, r.b - Math.round(-t / 100 * 255))), new e(r)
        }, e.prototype.darken = function(t) {
            void 0 === t && (t = 10);
            var r = this.toHsl();
            return r.l -= t / 100, r.l = n(r.l), new e(r)
        }, e.prototype.tint = function(e) {
            return void 0 === e && (e = 10), this.mix("white", e)
        }, e.prototype.shade = function(e) {
            return void 0 === e && (e = 10), this.mix("black", e)
        }, e.prototype.desaturate = function(t) {
            void 0 === t && (t = 10);
            var r = this.toHsl();
            return r.s -= t / 100, r.s = n(r.s), new e(r)
        }, e.prototype.saturate = function(t) {
            void 0 === t && (t = 10);
            var r = this.toHsl();
            return r.s += t / 100, r.s = n(r.s), new e(r)
        }, e.prototype.greyscale = function() {
            return this.desaturate(100)
        }, e.prototype.spin = function(t) {
            var r = this.toHsl(),
                i = (r.h + t) % 360;
            return r.h = i < 0 ? 360 + i : i, new e(r)
        }, e.prototype.mix = function(t, r) {
            void 0 === r && (r = 50);
            var i = this.toRgb(),
                n = new e(t).toRgb(),
                o = r / 100;
            return new e({
                r: (n.r - i.r) * o + i.r,
                g: (n.g - i.g) * o + i.g,
                b: (n.b - i.b) * o + i.b,
                a: (n.a - i.a) * o + i.a
            })
        }, e.prototype.analogous = function(t, r) {
            void 0 === t && (t = 6), void 0 === r && (r = 30);
            var i = this.toHsl(),
                n = 360 / r,
                o = [this];
            for (i.h = (i.h - (n * t >> 1) + 720) % 360; --t;) i.h = (i.h + n) % 360, o.push(new e(i));
            return o
        }, e.prototype.complement = function() {
            var t = this.toHsl();
            return t.h = (t.h + 180) % 360, new e(t)
        }, e.prototype.monochromatic = function(t) {
            void 0 === t && (t = 6);
            for (var r = this.toHsv(), i = r.h, n = r.s, o = r.v, a = [], s = 1 / t; t--;) a.push(new e({
                h: i,
                s: n,
                v: o
            })), o = (o + s) % 1;
            return a
        }, e.prototype.splitcomplement = function() {
            var t = this.toHsl(),
                r = t.h;
            return [this, new e({
                h: (r + 72) % 360,
                s: t.s,
                l: t.l
            }), new e({
                h: (r + 216) % 360,
                s: t.s,
                l: t.l
            })]
        }, e.prototype.triad = function() {
            return this.polyad(3)
        }, e.prototype.tetrad = function() {
            return this.polyad(4)
        }, e.prototype.polyad = function(t) {
            for (var r = this.toHsl(), i = r.h, n = [this], o = 360 / t, a = 1; a < t; a++) n.push(new e({
                h: (i + a * o) % 360,
                s: r.s,
                l: r.l
            }));
            return n
        }, e.prototype.equals = function(t) {
            return this.toRgbString() === new e(t).toRgbString()
        }, e
    }();

    function O(e, t) {
        return void 0 === e && (e = ""), void 0 === t && (t = {}), new H(e, t)
    }

    function w(e, t) {
        var r = new H(e),
            i = new H(t);
        return (Math.max(r.getLuminance(), i.getLuminance()) + .05) / (Math.min(r.getLuminance(), i.getLuminance()) + .05)
    }

    function _(e, t, r) {
        void 0 === r && (r = {
            level: "AA",
            size: "small"
        });
        var i = w(e, t);
        switch ((r.level || "AA") + (r.size || "small")) {
            case "AAsmall":
            case "AAAlarge":
                return i >= 4.5;
            case "AAlarge":
                return i >= 3;
            case "AAAsmall":
                return i >= 7;
            default:
                return !1
        }
    }

    function C(e, t, r) {
        void 0 === r && (r = {
            includeFallbackColors: !1,
            level: "AA",
            size: "small"
        });
        for (var i = null, n = 0, o = r.includeFallbackColors, a = r.level, s = r.size, c = 0, u = t; c < u.length; c++) {
            var l = u[c],
                h = w(e, l);
            h > n && (n = h, i = new H(l))
        }
        return _(e, i, {
            level: a,
            size: s
        }) || !o ? i : (r.includeFallbackColors = !1, C(e, ["#fff", "#000"], r))
    }

    function x(e, t) {
        var r = new H(e),
            i = "#" + h(r.r, r.g, r.b, r.a),
            n = i,
            o = r.gradientType ? "GradientType = 1, " : "";
        if (t) {
            var a = new H(t);
            n = "#" + h(a.r, a.g, a.b, a.a)
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + i + ",endColorstr=" + n + ")"
    }

    function k(e, t) {
        var r = {
            r: a(e.r),
            g: a(e.g),
            b: a(e.b)
        };
        return void 0 !== e.a && (r.a = Number(e.a)), new H(r, t)
    }

    function B() {
        return new H({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        })
    }

    function I(e) {
        if (void 0 === e && (e = {}), void 0 !== e.count && null !== e.count) {
            var t = e.count,
                r = [];
            for (e.count = void 0; t > r.length;) e.count = null, e.seed && (e.seed += 1), r.push(I(e));
            return e.count = t, r
        }
        var i = function(e, t) {
                var r = R(function(e) {
                    var t = parseInt(e, 10);
                    if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
                    if ("string" == typeof e) {
                        var r = M.find((function(t) {
                            return t.name === e
                        }));
                        if (r) {
                            var i = j(r);
                            if (i.hueRange) return i.hueRange
                        }
                        var n = new H(e);
                        if (n.isValid) {
                            var o = n.toHsv().h;
                            return [o, o]
                        }
                    }
                    return [0, 360]
                }(e), t);
                r < 0 && (r = 360 + r);
                return r
            }(e.hue, e.seed),
            n = function(e, t) {
                if ("monochrome" === t.hue) return 0;
                if ("random" === t.luminosity) return R([0, 100], t.seed);
                var r = P(e).saturationRange,
                    i = r[0],
                    n = r[1];
                switch (t.luminosity) {
                    case "bright":
                        i = 55;
                        break;
                    case "dark":
                        i = n - 10;
                        break;
                    case "light":
                        n = 55
                }
                return R([i, n], t.seed)
            }(i, e),
            o = {
                h: i,
                s: n,
                v: function(e, t, r) {
                    var i = function(e, t) {
                            for (var r = P(e).lowerBounds, i = 0; i < r.length - 1; i++) {
                                var n = r[i][0],
                                    o = r[i][1],
                                    a = r[i + 1][0],
                                    s = r[i + 1][1];
                                if (t >= n && t <= a) {
                                    var c = (s - o) / (a - n);
                                    return c * t + (o - c * n)
                                }
                            }
                            return 0
                        }(e, t),
                        n = 100;
                    switch (r.luminosity) {
                        case "dark":
                            n = i + 20;
                            break;
                        case "light":
                            i = (n + i) / 2;
                            break;
                        case "random":
                            i = 0, n = 100
                    }
                    return R([i, n], r.seed)
                }(i, n, e)
            };
        return void 0 !== e.alpha && (o.a = e.alpha), new H(o)
    }

    function P(e) {
        e >= 334 && e <= 360 && (e -= 360);
        for (var t = 0, r = M; t < r.length; t++) {
            var i = j(r[t]);
            if (i.hueRange && e >= i.hueRange[0] && e <= i.hueRange[1]) return i
        }
        throw Error("Color not found")
    }

    function R(e, t) {
        if (void 0 === t) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
        var r = e[1] || 1,
            i = e[0] || 0,
            n = (t = (9301 * t + 49297) % 233280) / 233280;
        return Math.floor(i + n * (r - i))
    }

    function j(e) {
        var t = e.lowerBounds[0][0],
            r = e.lowerBounds[e.lowerBounds.length - 1][0],
            i = e.lowerBounds[e.lowerBounds.length - 1][1],
            n = e.lowerBounds[0][1];
        return {
            name: e.name,
            hueRange: e.hueRange,
            lowerBounds: e.lowerBounds,
            saturationRange: [t, r],
            brightnessRange: [i, n]
        }
    }
    var M = [{
        name: "monochrome",
        hueRange: null,
        lowerBounds: [
            [0, 0],
            [100, 0]
        ]
    }, {
        name: "red",
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50]
        ]
    }, {
        name: "orange",
        hueRange: [19, 46],
        lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70]
        ]
    }, {
        name: "yellow",
        hueRange: [47, 62],
        lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75]
        ]
    }, {
        name: "green",
        hueRange: [63, 178],
        lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40]
        ]
    }, {
        name: "blue",
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35]
        ]
    }, {
        name: "purple",
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42]
        ]
    }, {
        name: "pink",
        hueRange: [283, 334],
        lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73]
        ]
    }];
    r.d(t, "TinyColor", (function() {
        return H
    })), r.d(t, "tinycolor", (function() {
        return O
    })), r.d(t, "names", (function() {
        return f
    })), r.d(t, "readability", (function() {
        return w
    })), r.d(t, "isReadable", (function() {
        return _
    })), r.d(t, "mostReadable", (function() {
        return C
    })), r.d(t, "toMsFilter", (function() {
        return x
    })), r.d(t, "fromRatio", (function() {
        return k
    })), r.d(t, "legacyRandom", (function() {
        return B
    })), r.d(t, "inputToRGB", (function() {
        return g
    })), r.d(t, "stringInputToObject", (function() {
        return b
    })), r.d(t, "isValidCSSUnit", (function() {
        return E
    })), r.d(t, "random", (function() {
        return I
    })), r.d(t, "bounds", (function() {
        return M
    }));
    t.default = O
}]);