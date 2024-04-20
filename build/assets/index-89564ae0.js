function Df(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Of = { exports: {} },
  Ul = {},
  Af = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
  Nv = Symbol.for("react.portal"),
  Dv = Symbol.for("react.fragment"),
  Lv = Symbol.for("react.strict_mode"),
  Ov = Symbol.for("react.profiler"),
  Av = Symbol.for("react.provider"),
  Iv = Symbol.for("react.context"),
  Fv = Symbol.for("react.forward_ref"),
  zv = Symbol.for("react.suspense"),
  jv = Symbol.for("react.memo"),
  Uv = Symbol.for("react.lazy"),
  Tc = Symbol.iterator;
function Bv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tc && e[Tc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var If = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Ff = Object.assign,
  zf = {};
function Zr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = zf), (this.updater = n || If);
}
Zr.prototype.isReactComponent = {};
Zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jf() {}
jf.prototype = Zr.prototype;
function du(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = zf), (this.updater = n || If);
}
var fu = (du.prototype = new jf());
fu.constructor = du;
Ff(fu, Zr.prototype);
fu.isPureReactComponent = !0;
var Nc = Array.isArray,
  Uf = Object.prototype.hasOwnProperty,
  pu = { current: null },
  Bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Uf.call(t, r) && !Bf.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: si, type: e, key: i, ref: l, props: o, _owner: pu.current };
}
function Wv(e, t) {
  return { $$typeof: si, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === si;
}
function Vv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dc = /\/+/g;
function Sa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Vv("" + e.key) : t.toString(36);
}
function Yi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case si:
          case Nv:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Sa(l, 0) : r),
      Nc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Dc, "$&/") + "/"),
          Yi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (hu(o) &&
            (o = Wv(
              o,
              n +
                (!o.key || (l && l.key === o.key) ? "" : ("" + o.key).replace(Dc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Nc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Sa(i, a);
      l += Yi(i, t, n, s, o);
    }
  else if (((s = Bv(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Sa(i, a++)), (l += Yi(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function $i(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Yi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Hv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  Xi = { transition: null },
  Kv = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: Xi, ReactCurrentOwner: pu };
te.Children = {
  map: $i,
  forEach: function (e, t, n) {
    $i(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $i(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $i(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  }
};
te.Component = Zr;
te.Fragment = Dv;
te.Profiler = Ov;
te.PureComponent = du;
te.StrictMode = Lv;
te.Suspense = zv;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv;
te.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = Ff({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = pu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Uf.call(t, s) &&
        !Bf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: si, type: e.type, key: o, ref: i, props: r, _owner: l };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: Iv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Av, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = Wf;
te.createFactory = function (e) {
  var t = Wf.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: Fv, render: e };
};
te.isValidElement = hu;
te.lazy = function (e) {
  return { $$typeof: Uv, _payload: { _status: -1, _result: e }, _init: Hv };
};
te.memo = function (e, t) {
  return { $$typeof: jv, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = Xi.transition;
  Xi.transition = {};
  try {
    e();
  } finally {
    Xi.transition = t;
  }
};
te.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
te.useContext = function (e) {
  return Ge.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
te.useId = function () {
  return Ge.current.useId();
};
te.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
te.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
te.useRef = function (e) {
  return Ge.current.useRef(e);
};
te.useState = function (e) {
  return Ge.current.useState(e);
};
te.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function () {
  return Ge.current.useTransition();
};
te.version = "18.2.0";
Af.exports = te;
var f = Af.exports;
const Ct = Lf(f),
  Vf = Df({ __proto__: null, default: Ct }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gv = f,
  Qv = Symbol.for("react.element"),
  Yv = Symbol.for("react.fragment"),
  Xv = Object.prototype.hasOwnProperty,
  Zv = Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Xv.call(t, r) && !Jv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Qv, type: e, key: i, ref: l, props: o, _owner: Zv.current };
}
Ul.Fragment = Yv;
Ul.jsx = Hf;
Ul.jsxs = Hf;
Of.exports = Ul;
var _ = Of.exports,
  os = {},
  Kf = { exports: {} },
  ct = {},
  Gf = { exports: {} },
  Qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, M) {
    var I = D.length;
    D.push(M);
    e: for (; 0 < I; ) {
      var B = (I - 1) >>> 1,
        X = D[B];
      if (0 < o(X, M)) (D[B] = M), (D[I] = X), (I = B);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var M = D[0],
      I = D.pop();
    if (I !== M) {
      D[0] = I;
      e: for (var B = 0, X = D.length, ke = X >>> 1; B < ke; ) {
        var ve = 2 * (B + 1) - 1,
          Pe = D[ve],
          ue = ve + 1,
          Le = D[ue];
        if (0 > o(Pe, I))
          ue < X && 0 > o(Le, Pe)
            ? ((D[B] = Le), (D[ue] = I), (B = ue))
            : ((D[B] = Pe), (D[ve] = I), (B = ve));
        else if (ue < X && 0 > o(Le, I)) (D[B] = Le), (D[ue] = I), (B = ue);
        else break e;
      }
    }
    return M;
  }
  function o(D, M) {
    var I = D.sortIndex - M.sortIndex;
    return I !== 0 ? I : D.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    g = !1,
    w = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= D) r(u), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(u);
    }
  }
  function E(D) {
    if (((v = !1), y(D), !w))
      if (n(s) !== null) (w = !0), ie(b);
      else {
        var M = n(u);
        M !== null && j(E, M.startTime - D);
      }
  }
  function b(D, M) {
    (w = !1), v && ((v = !1), m(P), (P = -1)), (g = !0);
    var I = p;
    try {
      for (y(M), d = n(s); d !== null && (!(d.expirationTime > M) || (D && !U())); ) {
        var B = d.callback;
        if (typeof B == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var X = B(d.expirationTime <= M);
          (M = e.unstable_now()),
            typeof X == "function" ? (d.callback = X) : d === n(s) && r(s),
            y(M);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var ke = !0;
      else {
        var ve = n(u);
        ve !== null && j(E, ve.startTime - M), (ke = !1);
      }
      return ke;
    } finally {
      (d = null), (p = I), (g = !1);
    }
  }
  var S = !1,
    $ = null,
    P = -1,
    T = 5,
    O = -1;
  function U() {
    return !(e.unstable_now() - O < T);
  }
  function A() {
    if ($ !== null) {
      var D = e.unstable_now();
      O = D;
      var M = !0;
      try {
        M = $(!0, D);
      } finally {
        M ? J() : ((S = !1), ($ = null));
      }
    } else S = !1;
  }
  var J;
  if (typeof h == "function")
    J = function () {
      h(A);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      Y = H.port2;
    (H.port1.onmessage = A),
      (J = function () {
        Y.postMessage(null);
      });
  } else
    J = function () {
      x(A, 0);
    };
  function ie(D) {
    ($ = D), S || ((S = !0), J());
  }
  function j(D, M) {
    P = x(function () {
      D(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), ie(b));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = p;
      }
      var I = p;
      p = M;
      try {
        return D();
      } finally {
        p = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, M) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var I = p;
      p = D;
      try {
        return M();
      } finally {
        p = I;
      }
    }),
    (e.unstable_scheduleCallback = function (D, M, I) {
      var B = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? B + I : B))
          : (I = B),
        D)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = I + X),
        (D = {
          id: c++,
          callback: M,
          priorityLevel: D,
          startTime: I,
          expirationTime: X,
          sortIndex: -1
        }),
        I > B
          ? ((D.sortIndex = I),
            t(u, D),
            n(s) === null && D === n(u) && (v ? (m(P), (P = -1)) : (v = !0), j(E, I - B)))
          : ((D.sortIndex = X), t(s, D), w || g || ((w = !0), ie(b))),
        D
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (D) {
      var M = p;
      return function () {
        var I = p;
        p = M;
        try {
          return D.apply(this, arguments);
        } finally {
          p = I;
        }
      };
    });
})(Qf);
Gf.exports = Qf;
var qv = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yf = f,
  st = qv;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xf = new Set(),
  Fo = {};
function tr(e, t) {
  jr(e, t), jr(e + "Capture", t);
}
function jr(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) Xf.add(t[e]);
}
var Yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  is = Object.prototype.hasOwnProperty,
  eg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lc = {},
  Oc = {};
function tg(e) {
  return is.call(Oc, e) ? !0 : is.call(Lc, e) ? !1 : eg.test(e) ? (Oc[e] = !0) : ((Lc[e] = !0), !1);
}
function ng(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rg(e, t, n, r) {
  if (t === null || typeof t > "u" || ng(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Fe[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    Fe[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    Fe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mu, vu);
  Fe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gu(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (rg(t, n, o, r) && (n = null),
    r || o === null
      ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nn = Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bi = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  yr = Symbol.for("react.fragment"),
  yu = Symbol.for("react.strict_mode"),
  ls = Symbol.for("react.profiler"),
  Zf = Symbol.for("react.provider"),
  Jf = Symbol.for("react.context"),
  wu = Symbol.for("react.forward_ref"),
  as = Symbol.for("react.suspense"),
  ss = Symbol.for("react.suspense_list"),
  xu = Symbol.for("react.memo"),
  hn = Symbol.for("react.lazy"),
  qf = Symbol.for("react.offscreen"),
  Ac = Symbol.iterator;
function so(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ac && e[Ac]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var we = Object.assign,
  Ea;
function $o(e) {
  if (Ea === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ea = (t && t[1]) || "";
    }
  return (
    `
` +
    Ea +
    e
  );
}
var Ca = !1;
function $a(e, t) {
  if (!e || Ca) return "";
  Ca = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Ca = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $o(e) : "";
}
function og(e) {
  switch (e.tag) {
    case 5:
      return $o(e.type);
    case 16:
      return $o("Lazy");
    case 13:
      return $o("Suspense");
    case 19:
      return $o("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $a(e.type, !1)), e;
    case 11:
      return (e = $a(e.type.render, !1)), e;
    case 1:
      return (e = $a(e.type, !0)), e;
    default:
      return "";
  }
}
function us(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yr:
      return "Fragment";
    case gr:
      return "Portal";
    case ls:
      return "Profiler";
    case yu:
      return "StrictMode";
    case as:
      return "Suspense";
    case ss:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Jf:
        return (e.displayName || "Context") + ".Consumer";
      case Zf:
        return (e._context.displayName || "Context") + ".Provider";
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xu:
        return (t = e.displayName || null), t !== null ? t : us(e.type) || "Memo";
      case hn:
        (t = e._payload), (e = e._init);
        try {
          return us(e(t));
        } catch {}
    }
  return null;
}
function ig(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return us(t);
    case 8:
      return t === yu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ep(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lg(e) {
  var t = ep(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        }
      }
    );
  }
}
function ki(e) {
  e._valueTracker || (e._valueTracker = lg(e));
}
function tp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ep(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function dl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cs(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  });
}
function Ic(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    });
}
function np(e, t) {
  (t = t.checked), t != null && gu(e, "checked", t, !1);
}
function ds(e, t) {
  np(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fs(e, t.type, Rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fs(e, t, n) {
  (t !== "number" || dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bo = Array.isArray;
function Tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ps(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  });
}
function zc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (bo(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function rp(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function op(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? op(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pi,
  ip = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Pi = Pi || document.createElement("div"),
          Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ro = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  ag = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ro).forEach(function (e) {
  ag.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ro[t] = Ro[e]);
  });
});
function lp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ro.hasOwnProperty(e) && Ro[e])
    ? ("" + t).trim()
    : t + "px";
}
function ap(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = lp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var sg = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function ms(e, t) {
  if (t) {
    if (sg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function vs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gs = null;
function Su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ys = null,
  Nr = null,
  Dr = null;
function Uc(e) {
  if ((e = di(e))) {
    if (typeof ys != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Kl(t)), ys(e.stateNode, e.type, t));
  }
}
function sp(e) {
  Nr ? (Dr ? Dr.push(e) : (Dr = [e])) : (Nr = e);
}
function up() {
  if (Nr) {
    var e = Nr,
      t = Dr;
    if (((Dr = Nr = null), Uc(e), t)) for (e = 0; e < t.length; e++) Uc(t[e]);
  }
}
function cp(e, t) {
  return e(t);
}
function dp() {}
var ba = !1;
function fp(e, t, n) {
  if (ba) return e(t, n);
  ba = !0;
  try {
    return cp(e, t, n);
  } finally {
    (ba = !1), (Nr !== null || Dr !== null) && (dp(), up());
  }
}
function jo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var ws = !1;
if (Yt)
  try {
    var uo = {};
    Object.defineProperty(uo, "passive", {
      get: function () {
        ws = !0;
      }
    }),
      window.addEventListener("test", uo, uo),
      window.removeEventListener("test", uo, uo);
  } catch {
    ws = !1;
  }
function ug(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _o = !1,
  fl = null,
  pl = !1,
  xs = null,
  cg = {
    onError: function (e) {
      (_o = !0), (fl = e);
    }
  };
function dg(e, t, n, r, o, i, l, a, s) {
  (_o = !1), (fl = null), ug.apply(cg, arguments);
}
function fg(e, t, n, r, o, i, l, a, s) {
  if ((dg.apply(this, arguments), _o)) {
    if (_o) {
      var u = fl;
      (_o = !1), (fl = null);
    } else throw Error(N(198));
    pl || ((pl = !0), (xs = u));
  }
}
function nr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (nr(e) !== e) throw Error(N(188));
}
function pg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Bc(o), e;
        if (i === r) return Bc(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function hp(e) {
  return (e = pg(e)), e !== null ? mp(e) : null;
}
function mp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vp = st.unstable_scheduleCallback,
  Wc = st.unstable_cancelCallback,
  hg = st.unstable_shouldYield,
  mg = st.unstable_requestPaint,
  $e = st.unstable_now,
  vg = st.unstable_getCurrentPriorityLevel,
  Eu = st.unstable_ImmediatePriority,
  gp = st.unstable_UserBlockingPriority,
  hl = st.unstable_NormalPriority,
  gg = st.unstable_LowPriority,
  yp = st.unstable_IdlePriority,
  Bl = null,
  It = null;
function yg(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : Sg,
  wg = Math.log,
  xg = Math.LN2;
function Sg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wg(e) / xg) | 0)) | 0;
}
var Ri = 64,
  _i = 4194304;
function ko(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = ko(a)) : ((i &= l), i !== 0 && (r = ko(i)));
  } else (l = n & ~o), l !== 0 ? (r = ko(l)) : i !== 0 && (r = ko(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Rt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Eg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Cg(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Rt(i),
      a = 1 << l,
      s = o[l];
    s === -1 ? (!(a & n) || a & r) && (o[l] = Eg(a, t)) : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ss(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wp() {
  var e = Ri;
  return (Ri <<= 1), !(Ri & 4194240) && (Ri = 64), e;
}
function ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ui(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Rt(t)),
    (e[t] = n);
}
function $g(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Rt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Rt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ae = 0;
function xp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sp,
  $u,
  Ep,
  Cp,
  $p,
  Es = !1,
  Mi = [],
  xn = null,
  Sn = null,
  En = null,
  Uo = new Map(),
  Bo = new Map(),
  vn = [],
  bg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Vc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      Uo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bo.delete(t.pointerId);
  }
}
function co(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
      }),
      t !== null && ((t = di(t)), t !== null && $u(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function kg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xn = co(xn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Sn = co(Sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (En = co(En, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Uo.set(i, co(Uo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), Bo.set(i, co(Bo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function bp(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = nr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pp(n)), t !== null)) {
          (e.blockedOn = t),
            $p(e.priority, function () {
              Ep(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gs = r), n.target.dispatchEvent(r), (gs = null);
    } else return (t = di(n)), t !== null && $u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hc(e, t, n) {
  Zi(e) && n.delete(t);
}
function Pg() {
  (Es = !1),
    xn !== null && Zi(xn) && (xn = null),
    Sn !== null && Zi(Sn) && (Sn = null),
    En !== null && Zi(En) && (En = null),
    Uo.forEach(Hc),
    Bo.forEach(Hc);
}
function fo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Es || ((Es = !0), st.unstable_scheduleCallback(st.unstable_NormalPriority, Pg)));
}
function Wo(e) {
  function t(o) {
    return fo(o, e);
  }
  if (0 < Mi.length) {
    fo(Mi[0], e);
    for (var n = 1; n < Mi.length; n++) {
      var r = Mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && fo(xn, e),
      Sn !== null && fo(Sn, e),
      En !== null && fo(En, e),
      Uo.forEach(t),
      Bo.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    bp(n), n.blockedOn === null && vn.shift();
}
var Lr = nn.ReactCurrentBatchConfig,
  vl = !0;
function Rg(e, t, n, r) {
  var o = ae,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (ae = 1), bu(e, t, n, r);
  } finally {
    (ae = o), (Lr.transition = i);
  }
}
function _g(e, t, n, r) {
  var o = ae,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (ae = 4), bu(e, t, n, r);
  } finally {
    (ae = o), (Lr.transition = i);
  }
}
function bu(e, t, n, r) {
  if (vl) {
    var o = Cs(e, t, n, r);
    if (o === null) Aa(e, t, r, gl, n), Vc(e, r);
    else if (kg(o, e, t, n, r)) r.stopPropagation();
    else if ((Vc(e, r), t & 4 && -1 < bg.indexOf(e))) {
      for (; o !== null; ) {
        var i = di(o);
        if ((i !== null && Sp(i), (i = Cs(e, t, n, r)), i === null && Aa(e, t, r, gl, n), i === o))
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Aa(e, t, r, null, n);
  }
}
var gl = null;
function Cs(e, t, n, r) {
  if (((gl = null), (e = Su(r)), (e = jn(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gl = e), null;
}
function kp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vg()) {
        case Eu:
          return 1;
        case gp:
          return 4;
        case hl:
        case gg:
          return 16;
        case yp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  ku = null,
  Ji = null;
function Pp() {
  if (Ji) return Ji;
  var e,
    t = ku,
    n = t.length,
    r,
    o = "value" in yn ? yn.value : yn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Ji = o.slice(e, 1 < r ? 1 - r : void 0));
}
function qi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ti() {
  return !0;
}
function Kc() {
  return !1;
}
function dt(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ti
        : Kc),
      (this.isPropagationStopped = Kc),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ti));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ti));
      },
      persist: function () {},
      isPersistent: Ti
    }),
    t
  );
}
var Jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Pu = dt(Jr),
  ci = we({}, Jr, { view: 0, detail: 0 }),
  Mg = dt(ci),
  Pa,
  Ra,
  po,
  Wl = we({}, ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ru,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== po &&
            (po && e.type === "mousemove"
              ? ((Pa = e.screenX - po.screenX), (Ra = e.screenY - po.screenY))
              : (Ra = Pa = 0),
            (po = e)),
          Pa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ra;
    }
  }),
  Gc = dt(Wl),
  Tg = we({}, Wl, { dataTransfer: 0 }),
  Ng = dt(Tg),
  Dg = we({}, ci, { relatedTarget: 0 }),
  _a = dt(Dg),
  Lg = we({}, Jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Og = dt(Lg),
  Ag = we({}, Jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }),
  Ig = dt(Ag),
  Fg = we({}, Jr, { data: 0 }),
  Qc = dt(Fg),
  zg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  jg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Ug = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1;
}
function Ru() {
  return Bg;
}
var Wg = we({}, ci, {
    key: function (e) {
      if (e.key) {
        var t = zg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ru,
    charCode: function (e) {
      return e.type === "keypress" ? qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    }
  }),
  Vg = dt(Wg),
  Hg = we({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Yc = dt(Hg),
  Kg = we({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru
  }),
  Gg = dt(Kg),
  Qg = we({}, Jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yg = dt(Qg),
  Xg = we({}, Wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zg = dt(Xg),
  Jg = [9, 13, 27, 32],
  _u = Yt && "CompositionEvent" in window,
  Mo = null;
Yt && "documentMode" in document && (Mo = document.documentMode);
var qg = Yt && "TextEvent" in window && !Mo,
  Rp = Yt && (!_u || (Mo && 8 < Mo && 11 >= Mo)),
  Xc = String.fromCharCode(32),
  Zc = !1;
function _p(e, t) {
  switch (e) {
    case "keyup":
      return Jg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var wr = !1;
function ey(e, t) {
  switch (e) {
    case "compositionend":
      return Mp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zc = !0), Xc);
    case "textInput":
      return (e = t.data), e === Xc && Zc ? null : e;
    default:
      return null;
  }
}
function ty(e, t) {
  if (wr)
    return e === "compositionend" || (!_u && _p(e, t))
      ? ((e = Pp()), (Ji = ku = yn = null), (wr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ny = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ny[e.type] : t === "textarea";
}
function Tp(e, t, n, r) {
  sp(r),
    (t = yl(t, "onChange")),
    0 < t.length &&
      ((n = new Pu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var To = null,
  Vo = null;
function ry(e) {
  Bp(e, 0);
}
function Vl(e) {
  var t = Er(e);
  if (tp(t)) return e;
}
function oy(e, t) {
  if (e === "change") return t;
}
var Np = !1;
if (Yt) {
  var Ma;
  if (Yt) {
    var Ta = "oninput" in document;
    if (!Ta) {
      var qc = document.createElement("div");
      qc.setAttribute("oninput", "return;"), (Ta = typeof qc.oninput == "function");
    }
    Ma = Ta;
  } else Ma = !1;
  Np = Ma && (!document.documentMode || 9 < document.documentMode);
}
function ed() {
  To && (To.detachEvent("onpropertychange", Dp), (Vo = To = null));
}
function Dp(e) {
  if (e.propertyName === "value" && Vl(Vo)) {
    var t = [];
    Tp(t, Vo, e, Su(e)), fp(ry, t);
  }
}
function iy(e, t, n) {
  e === "focusin"
    ? (ed(), (To = t), (Vo = n), To.attachEvent("onpropertychange", Dp))
    : e === "focusout" && ed();
}
function ly(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vl(Vo);
}
function ay(e, t) {
  if (e === "click") return Vl(t);
}
function sy(e, t) {
  if (e === "input" || e === "change") return Vl(t);
}
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tt = typeof Object.is == "function" ? Object.is : uy;
function Ho(e, t) {
  if (Tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!is.call(t, o) || !Tt(e[o], t[o])) return !1;
  }
  return !0;
}
function td(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nd(e, t) {
  var n = td(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = td(n);
  }
}
function Lp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Op() {
  for (var e = window, t = dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = dl(e.document);
  }
  return t;
}
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function cy(e) {
  var t = Op(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Lp(n.ownerDocument.documentElement, n)) {
    if (r !== null && Mu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = nd(n, i));
        var l = nd(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var dy = Yt && "documentMode" in document && 11 >= document.documentMode,
  xr = null,
  $s = null,
  No = null,
  bs = !1;
function rd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bs ||
    xr == null ||
    xr !== dl(r) ||
    ((r = xr),
    "selectionStart" in r && Mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (No && Ho(No, r)) ||
      ((No = r),
      (r = yl($s, "onSelect")),
      0 < r.length &&
        ((t = new Pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xr))));
}
function Ni(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sr = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd")
  },
  Na = {},
  Ap = {};
Yt &&
  ((Ap = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sr.animationend.animation,
    delete Sr.animationiteration.animation,
    delete Sr.animationstart.animation),
  "TransitionEvent" in window || delete Sr.transitionend.transition);
function Hl(e) {
  if (Na[e]) return Na[e];
  if (!Sr[e]) return e;
  var t = Sr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ap) return (Na[e] = t[n]);
  return e;
}
var Ip = Hl("animationend"),
  Fp = Hl("animationiteration"),
  zp = Hl("animationstart"),
  jp = Hl("transitionend"),
  Up = new Map(),
  od =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  Up.set(e, t), tr(t, [e]);
}
for (var Da = 0; Da < od.length; Da++) {
  var La = od[Da],
    fy = La.toLowerCase(),
    py = La[0].toUpperCase() + La.slice(1);
  Dn(fy, "on" + py);
}
Dn(Ip, "onAnimationEnd");
Dn(Fp, "onAnimationIteration");
Dn(zp, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(jp, "onTransitionEnd");
jr("onMouseEnter", ["mouseout", "mouseover"]);
jr("onMouseLeave", ["mouseout", "mouseover"]);
jr("onPointerEnter", ["pointerout", "pointerover"]);
jr("onPointerLeave", ["pointerout", "pointerover"]);
tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Po =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));
function id(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), fg(r, t, void 0, e), (e.currentTarget = null);
}
function Bp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          id(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          id(o, a, u), (i = s);
        }
    }
  }
  if (pl) throw ((e = xs), (pl = !1), (xs = null), e);
}
function pe(e, t) {
  var n = t[Ms];
  n === void 0 && (n = t[Ms] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wp(t, e, 2, !1), n.add(r));
}
function Oa(e, t, n) {
  var r = 0;
  t && (r |= 4), Wp(n, e, r, t);
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);
function Ko(e) {
  if (!e[Di]) {
    (e[Di] = !0),
      Xf.forEach(function (n) {
        n !== "selectionchange" && (hy.has(n) || Oa(n, !1, e), Oa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Di] || ((t[Di] = !0), Oa("selectionchange", !1, t));
  }
}
function Wp(e, t, n, r) {
  switch (kp(t)) {
    case 1:
      var o = Rg;
      break;
    case 4:
      o = _g;
      break;
    default:
      o = bu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ws || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Aa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = jn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  fp(function () {
    var u = i,
      c = Su(n),
      d = [];
    e: {
      var p = Up.get(e);
      if (p !== void 0) {
        var g = Pu,
          w = e;
        switch (e) {
          case "keypress":
            if (qi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Vg;
            break;
          case "focusin":
            (w = "focus"), (g = _a);
            break;
          case "focusout":
            (w = "blur"), (g = _a);
            break;
          case "beforeblur":
          case "afterblur":
            g = _a;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Gc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ng;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Gg;
            break;
          case Ip:
          case Fp:
          case zp:
            g = Og;
            break;
          case jp:
            g = Yg;
            break;
          case "scroll":
            g = Mg;
            break;
          case "wheel":
            g = Zg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ig;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Yc;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E), m !== null && ((E = jo(h, m)), E != null && v.push(Go(h, E, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < v.length && ((p = new g(p, w, null, n, c)), d.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p && n !== gs && (w = n.relatedTarget || n.fromElement) && (jn(w) || w[Xt]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? jn(w) : null),
              w !== null && ((x = nr(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = Gc),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Yc), (E = "onPointerLeave"), (m = "onPointerEnter"), (h = "pointer")),
            (x = g == null ? p : Er(g)),
            (y = w == null ? p : Er(w)),
            (p = new v(E, h + "leave", g, n, c)),
            (p.target = x),
            (p.relatedTarget = y),
            (E = null),
            jn(c) === u &&
              ((v = new v(m, h + "enter", w, n, c)),
              (v.target = y),
              (v.relatedTarget = x),
              (E = v)),
            (x = E),
            g && w)
          )
            t: {
              for (v = g, m = w, h = 0, y = v; y; y = pr(y)) h++;
              for (y = 0, E = m; E; E = pr(E)) y++;
              for (; 0 < h - y; ) (v = pr(v)), h--;
              for (; 0 < y - h; ) (m = pr(m)), y--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = pr(v)), (m = pr(m));
              }
              v = null;
            }
          else v = null;
          g !== null && ld(d, p, g, v, !1), w !== null && x !== null && ld(d, x, w, v, !0);
        }
      }
      e: {
        if (
          ((p = u ? Er(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var b = oy;
        else if (Jc(p))
          if (Np) b = sy;
          else {
            b = ly;
            var S = iy;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (b = ay);
        if (b && (b = b(e, u))) {
          Tp(d, b, n, c);
          break e;
        }
        S && S(e, p, u),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            fs(p, "number", p.value);
      }
      switch (((S = u ? Er(u) : window), e)) {
        case "focusin":
          (Jc(S) || S.contentEditable === "true") && ((xr = S), ($s = u), (No = null));
          break;
        case "focusout":
          No = $s = xr = null;
          break;
        case "mousedown":
          bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bs = !1), rd(d, n, c);
          break;
        case "selectionchange":
          if (dy) break;
        case "keydown":
        case "keyup":
          rd(d, n, c);
      }
      var $;
      if (_u)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        wr
          ? _p(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Rp &&
          n.locale !== "ko" &&
          (wr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && wr && ($ = Pp())
            : ((yn = c), (ku = "value" in yn ? yn.value : yn.textContent), (wr = !0))),
        (S = yl(u, P)),
        0 < S.length &&
          ((P = new Qc(P, e, null, n, c)),
          d.push({ event: P, listeners: S }),
          $ ? (P.data = $) : (($ = Mp(n)), $ !== null && (P.data = $)))),
        ($ = qg ? ey(e, n) : ty(e, n)) &&
          ((u = yl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = $)));
    }
    Bp(d, t);
  });
}
function Go(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = jo(e, n)),
      i != null && r.unshift(Go(e, i, o)),
      (i = jo(e, t)),
      i != null && r.push(Go(e, i, o))),
      (e = e.return);
  }
  return r;
}
function pr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ld(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = jo(n, i)), s != null && l.unshift(Go(n, s, a)))
        : o || ((s = jo(n, i)), s != null && l.push(Go(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var my = /\r\n?/g,
  vy = /\u0000|\uFFFD/g;
function ad(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      my,
      `
`
    )
    .replace(vy, "");
}
function Li(e, t, n) {
  if (((t = ad(t)), ad(e) !== t && n)) throw Error(N(425));
}
function wl() {}
var ks = null,
  Ps = null;
function Rs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0,
  gy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sd = typeof Promise == "function" ? Promise : void 0,
  yy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sd < "u"
      ? function (e) {
          return sd.resolve(null).then(e).catch(wy);
        }
      : _s;
function wy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ia(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Wo(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ud(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qr = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + qr,
  Qo = "__reactProps$" + qr,
  Xt = "__reactContainer$" + qr,
  Ms = "__reactEvents$" + qr,
  xy = "__reactListeners$" + qr,
  Sy = "__reactHandles$" + qr;
function jn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xt] || n[Ot])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ud(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = ud(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function di(e) {
  return (
    (e = e[Ot] || e[Xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Kl(e) {
  return e[Qo] || null;
}
var Ts = [],
  Cr = -1;
function Ln(e) {
  return { current: e };
}
function he(e) {
  0 > Cr || ((e.current = Ts[Cr]), (Ts[Cr] = null), Cr--);
}
function de(e, t) {
  Cr++, (Ts[Cr] = e.current), (e.current = t);
}
var _n = {},
  We = Ln(_n),
  Je = Ln(!1),
  Qn = _n;
function Ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function xl() {
  he(Je), he(We);
}
function cd(e, t, n) {
  if (We.current !== _n) throw Error(N(168));
  de(We, t), de(Je, n);
}
function Vp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, ig(e) || "Unknown", o));
  return we({}, n, r);
}
function Sl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Qn = We.current),
    de(We, e),
    de(Je, Je.current),
    !0
  );
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Vp(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(Je),
      he(We),
      de(We, e))
    : he(Je),
    de(Je, n);
}
var Vt = null,
  Gl = !1,
  Fa = !1;
function Hp(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Ey(e) {
  (Gl = !0), Hp(e);
}
function On() {
  if (!Fa && Vt !== null) {
    Fa = !0;
    var e = 0,
      t = ae;
    try {
      var n = Vt;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Vt = null), (Gl = !1);
    } catch (o) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), vp(Eu, On), o);
    } finally {
      (ae = t), (Fa = !1);
    }
  }
  return null;
}
var $r = [],
  br = 0,
  El = null,
  Cl = 0,
  pt = [],
  ht = 0,
  Yn = null,
  Ht = 1,
  Kt = "";
function Fn(e, t) {
  ($r[br++] = Cl), ($r[br++] = El), (El = e), (Cl = t);
}
function Kp(e, t, n) {
  (pt[ht++] = Ht), (pt[ht++] = Kt), (pt[ht++] = Yn), (Yn = e);
  var r = Ht;
  e = Kt;
  var o = 32 - Rt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Rt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ht = (1 << (32 - Rt(t) + o)) | (n << o) | r),
      (Kt = i + e);
  } else (Ht = (1 << i) | (n << o) | r), (Kt = e);
}
function Tu(e) {
  e.return !== null && (Fn(e, 1), Kp(e, 1, 0));
}
function Nu(e) {
  for (; e === El; ) (El = $r[--br]), ($r[br] = null), (Cl = $r[--br]), ($r[br] = null);
  for (; e === Yn; )
    (Yn = pt[--ht]),
      (pt[ht] = null),
      (Kt = pt[--ht]),
      (pt[ht] = null),
      (Ht = pt[--ht]),
      (pt[ht] = null);
}
var lt = null,
  it = null,
  me = !1,
  Pt = null;
function Gp(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (it = Cn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: Ht, overflow: Kt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ds(e) {
  if (me) {
    var t = it;
    if (t) {
      var n = t;
      if (!fd(e, t)) {
        if (Ns(e)) throw Error(N(418));
        t = Cn(n.nextSibling);
        var r = lt;
        t && fd(e, t) ? Gp(r, n) : ((e.flags = (e.flags & -4097) | 2), (me = !1), (lt = e));
      }
    } else {
      if (Ns(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (lt = e);
    }
  }
}
function pd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function Oi(e) {
  if (e !== lt) return !1;
  if (!me) return pd(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Rs(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Ns(e)) throw (Qp(), Error(N(418)));
    for (; t; ) Gp(e, t), (t = Cn(t.nextSibling));
  }
  if ((pd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = lt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Qp() {
  for (var e = it; e; ) e = Cn(e.nextSibling);
}
function Br() {
  (it = lt = null), (me = !1);
}
function Du(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
var Cy = nn.ReactCurrentBatchConfig;
function $t(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $l = Ln(null),
  bl = null,
  kr = null,
  Lu = null;
function Ou() {
  Lu = kr = bl = null;
}
function Au(e) {
  var t = $l.current;
  he($l), (e._currentValue = t);
}
function Ls(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (bl = e),
    (Lu = kr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function gt(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kr === null)) {
      if (bl === null) throw Error(N(308));
      (kr = e), (bl.dependencies = { lanes: 0, firstContext: e });
    } else kr = kr.next = e;
  return t;
}
var Un = null;
function Iu(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function Yp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Iu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Zt(e, r)
  );
}
function Zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mn = !1;
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function Xp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
}
function Gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Zt(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Iu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Zt(e, n)
  );
}
function el(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
  }
}
function hd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var o = e.updateQueue;
  mn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (c = u = s = null), (a = i);
    do {
      var p = a.lane,
        g = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            });
        e: {
          var w = e,
            v = a;
          switch (((p = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                d = w.call(g, d, p);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = v.payload), (p = typeof w == "function" ? w.call(g, d, p) : w), p == null))
                break e;
              d = we({}, d, p);
              break e;
            case 2:
              mn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [a]) : p.push(a));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = g), (s = d)) : (c = c.next = g),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a), (a = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Zn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function md(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function")) throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Zp = new Yf.Component().refs;
function Os(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = kn(e),
      i = Gt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $n(e, i, o)),
      t !== null && (_t(t, e, o, r), el(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = kn(e),
      i = Gt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $n(e, i, o)),
      t !== null && (_t(t, e, o, r), el(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = kn(e),
      o = Gt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $n(e, o, r)),
      t !== null && (_t(t, e, r, n), el(t, e, r));
  }
};
function vd(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ho(n, r) || !Ho(o, i)
      : !0
  );
}
function Jp(e, t, n) {
  var r = !1,
    o = _n,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = gt(i))
      : ((o = qe(t) ? Qn : We.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ur(e, o) : _n)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function gd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function As(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Zp), Fu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = gt(i))
    : ((i = qe(t) ? Qn : We.current), (o.context = Ur(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Os(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && Ql.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ho(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Zp && (a = o.refs = {}), l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Ai(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    ))
  );
}
function yd(e) {
  var t = e._init;
  return t(e._payload);
}
function qp(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = Pn(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, E) {
    return h === null || h.tag !== 6
      ? ((h = Ha(y, m.mode, E)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function s(m, h, y, E) {
    var b = y.type;
    return b === yr
      ? c(m, h, y.props.children, E, y.key)
      : h !== null &&
        (h.elementType === b ||
          (typeof b == "object" && b !== null && b.$$typeof === hn && yd(b) === h.type))
      ? ((E = o(h, y.props)), (E.ref = ho(m, h, y)), (E.return = m), E)
      : ((E = ll(y.type, y.key, y.props, null, m.mode, E)),
        (E.ref = ho(m, h, y)),
        (E.return = m),
        E);
  }
  function u(m, h, y, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Ka(y, m.mode, E)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, E, b) {
    return h === null || h.tag !== 7
      ? ((h = Gn(y, m.mode, E, b)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ha("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case bi:
          return (
            (y = ll(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = ho(m, null, h)),
            (y.return = m),
            y
          );
        case gr:
          return (h = Ka(h, m.mode, y)), (h.return = m), h;
        case hn:
          var E = h._init;
          return d(m, E(h._payload), y);
      }
      if (bo(h) || so(h)) return (h = Gn(h, m.mode, y, null)), (h.return = m), h;
      Ai(m, h);
    }
    return null;
  }
  function p(m, h, y, E) {
    var b = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return b !== null ? null : a(m, h, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case bi:
          return y.key === b ? s(m, h, y, E) : null;
        case gr:
          return y.key === b ? u(m, h, y, E) : null;
        case hn:
          return (b = y._init), p(m, h, b(y._payload), E);
      }
      if (bo(y) || so(y)) return b !== null ? null : c(m, h, y, E, null);
      Ai(m, y);
    }
    return null;
  }
  function g(m, h, y, E, b) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(y) || null), a(h, m, "" + E, b);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case bi:
          return (m = m.get(E.key === null ? y : E.key) || null), s(h, m, E, b);
        case gr:
          return (m = m.get(E.key === null ? y : E.key) || null), u(h, m, E, b);
        case hn:
          var S = E._init;
          return g(m, h, y, S(E._payload), b);
      }
      if (bo(E) || so(E)) return (m = m.get(y) || null), c(h, m, E, b, null);
      Ai(h, E);
    }
    return null;
  }
  function w(m, h, y, E) {
    for (var b = null, S = null, $ = h, P = (h = 0), T = null; $ !== null && P < y.length; P++) {
      $.index > P ? ((T = $), ($ = null)) : (T = $.sibling);
      var O = p(m, $, y[P], E);
      if (O === null) {
        $ === null && ($ = T);
        break;
      }
      e && $ && O.alternate === null && t(m, $),
        (h = i(O, h, P)),
        S === null ? (b = O) : (S.sibling = O),
        (S = O),
        ($ = T);
    }
    if (P === y.length) return n(m, $), me && Fn(m, P), b;
    if ($ === null) {
      for (; P < y.length; P++)
        ($ = d(m, y[P], E)),
          $ !== null && ((h = i($, h, P)), S === null ? (b = $) : (S.sibling = $), (S = $));
      return me && Fn(m, P), b;
    }
    for ($ = r(m, $); P < y.length; P++)
      (T = g($, m, P, y[P], E)),
        T !== null &&
          (e && T.alternate !== null && $.delete(T.key === null ? P : T.key),
          (h = i(T, h, P)),
          S === null ? (b = T) : (S.sibling = T),
          (S = T));
    return (
      e &&
        $.forEach(function (U) {
          return t(m, U);
        }),
      me && Fn(m, P),
      b
    );
  }
  function v(m, h, y, E) {
    var b = so(y);
    if (typeof b != "function") throw Error(N(150));
    if (((y = b.call(y)), y == null)) throw Error(N(151));
    for (
      var S = (b = null), $ = h, P = (h = 0), T = null, O = y.next();
      $ !== null && !O.done;
      P++, O = y.next()
    ) {
      $.index > P ? ((T = $), ($ = null)) : (T = $.sibling);
      var U = p(m, $, O.value, E);
      if (U === null) {
        $ === null && ($ = T);
        break;
      }
      e && $ && U.alternate === null && t(m, $),
        (h = i(U, h, P)),
        S === null ? (b = U) : (S.sibling = U),
        (S = U),
        ($ = T);
    }
    if (O.done) return n(m, $), me && Fn(m, P), b;
    if ($ === null) {
      for (; !O.done; P++, O = y.next())
        (O = d(m, O.value, E)),
          O !== null && ((h = i(O, h, P)), S === null ? (b = O) : (S.sibling = O), (S = O));
      return me && Fn(m, P), b;
    }
    for ($ = r(m, $); !O.done; P++, O = y.next())
      (O = g($, m, P, O.value, E)),
        O !== null &&
          (e && O.alternate !== null && $.delete(O.key === null ? P : O.key),
          (h = i(O, h, P)),
          S === null ? (b = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        $.forEach(function (A) {
          return t(m, A);
        }),
      me && Fn(m, P),
      b
    );
  }
  function x(m, h, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === yr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case bi:
          e: {
            for (var b = y.key, S = h; S !== null; ) {
              if (S.key === b) {
                if (((b = y.type), b === yr)) {
                  if (S.tag === 7) {
                    n(m, S.sibling), (h = o(S, y.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (
                  S.elementType === b ||
                  (typeof b == "object" && b !== null && b.$$typeof === hn && yd(b) === S.type)
                ) {
                  n(m, S.sibling),
                    (h = o(S, y.props)),
                    (h.ref = ho(m, S, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            y.type === yr
              ? ((h = Gn(y.props.children, m.mode, E, y.key)), (h.return = m), (m = h))
              : ((E = ll(y.type, y.key, y.props, null, m.mode, E)),
                (E.ref = ho(m, h, y)),
                (E.return = m),
                (m = E));
          }
          return l(m);
        case gr:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling), (h = o(h, y.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Ka(y, m.mode, E)), (h.return = m), (m = h);
          }
          return l(m);
        case hn:
          return (S = y._init), x(m, h, S(y._payload), E);
      }
      if (bo(y)) return w(m, h, y, E);
      if (so(y)) return v(m, h, y, E);
      Ai(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Ha(y, m.mode, E)), (h.return = m), (m = h)),
        l(m))
      : n(m, h);
  }
  return x;
}
var Wr = qp(!0),
  eh = qp(!1),
  fi = {},
  Ft = Ln(fi),
  Yo = Ln(fi),
  Xo = Ln(fi);
function Bn(e) {
  if (e === fi) throw Error(N(174));
  return e;
}
function zu(e, t) {
  switch ((de(Xo, t), de(Yo, e), de(Ft, fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hs(t, e));
  }
  he(Ft), de(Ft, t);
}
function Vr() {
  he(Ft), he(Yo), he(Xo);
}
function th(e) {
  Bn(Xo.current);
  var t = Bn(Ft.current),
    n = hs(t, e.type);
  t !== n && (de(Yo, e), de(Ft, n));
}
function ju(e) {
  Yo.current === e && (he(Ft), he(Yo));
}
var ge = Ln(0);
function Pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var za = [];
function Uu() {
  for (var e = 0; e < za.length; e++) za[e]._workInProgressVersionPrimary = null;
  za.length = 0;
}
var tl = nn.ReactCurrentDispatcher,
  ja = nn.ReactCurrentBatchConfig,
  Xn = 0,
  ye = null,
  Re = null,
  Ne = null,
  Rl = !1,
  Do = !1,
  Zo = 0,
  $y = 0;
function je() {
  throw Error(N(321));
}
function Bu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Tt(e[n], t[n])) return !1;
  return !0;
}
function Wu(e, t, n, r, o, i) {
  if (
    ((Xn = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? Ry : _y),
    (e = n(r, o)),
    Do)
  ) {
    i = 0;
    do {
      if (((Do = !1), (Zo = 0), 25 <= i)) throw Error(N(301));
      (i += 1), (Ne = Re = null), (t.updateQueue = null), (tl.current = My), (e = n(r, o));
    } while (Do);
  }
  if (
    ((tl.current = _l),
    (t = Re !== null && Re.next !== null),
    (Xn = 0),
    (Ne = Re = ye = null),
    (Rl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Vu() {
  var e = Zo !== 0;
  return (Zo = 0), e;
}
function Lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function yt() {
  if (Re === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Ne === null ? ye.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Re = e);
  else {
    if (e === null) throw Error(N(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }),
      Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function Jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ua(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((Xn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        s === null ? ((a = s = d), (l = r)) : (s = s.next = d), (ye.lanes |= c), (Zn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      Tt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (Zn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ba(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Tt(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function nh() {}
function rh(e, t) {
  var n = ye,
    r = yt(),
    o = t(),
    i = !Tt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    Hu(lh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), qo(9, ih.bind(null, n, r, o, t), void 0, null), De === null))
      throw Error(N(349));
    Xn & 30 || oh(n, t, o);
  }
  return o;
}
function oh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ih(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ah(t) && sh(e);
}
function lh(e, t, n) {
  return n(function () {
    ah(t) && sh(e);
  });
}
function ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function sh(e) {
  var t = Zt(e, 1);
  t !== null && _t(t, e, 1, -1);
}
function wd(e) {
  var t = Lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Py.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function uh() {
  return yt().memoizedState;
}
function nl(e, t, n, r) {
  var o = Lt();
  (ye.flags |= e), (o.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yl(e, t, n, r) {
  var o = yt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((i = l.destroy), r !== null && Bu(r, l.deps))) {
      o.memoizedState = qo(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = qo(1 | t, n, i, r));
}
function xd(e, t) {
  return nl(8390656, 8, e, t);
}
function Hu(e, t) {
  return Yl(2048, 8, e, t);
}
function ch(e, t) {
  return Yl(4, 2, e, t);
}
function dh(e, t) {
  return Yl(4, 4, e, t);
}
function fh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ph(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Yl(4, 4, fh.bind(null, t, e), n);
}
function Ku() {}
function hh(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function mh(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vh(e, t, n) {
  return Xn & 21
    ? (Tt(n, t) || ((n = wp()), (ye.lanes |= n), (Zn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function by(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ja.transition;
  ja.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (ja.transition = r);
  }
}
function gh() {
  return yt().memoizedState;
}
function ky(e, t, n) {
  var r = kn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), yh(e)))
    wh(t, n);
  else if (((n = Yp(e, t, n, r)), n !== null)) {
    var o = Ke();
    _t(n, e, r, o), xh(n, t, r);
  }
}
function Py(e, t, n) {
  var r = kn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yh(e)) wh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Tt(a, l))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), Iu(t)) : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yp(e, t, o, r)), n !== null && ((o = Ke()), _t(n, e, r, o), xh(n, t, r));
  }
}
function yh(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function wh(e, t) {
  Do = Rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function xh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
  }
}
var _l = {
    readContext: gt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1
  },
  Ry = {
    readContext: gt,
    useCallback: function (e, t) {
      return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gt,
    useEffect: xd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), nl(4194308, 4, fh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Lt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = ky.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wd,
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      return (Lt().memoizedState = e);
    },
    useTransition: function () {
      var e = wd(!1),
        t = e[0];
      return (e = by.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = Lt();
      if (me) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(N(349));
        Xn & 30 || oh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xd(lh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qo(9, ih.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Lt(),
        t = De.identifierPrefix;
      if (me) {
        var n = Kt,
          r = Ht;
        (n = (r & ~(1 << (32 - Rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $y++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1
  },
  _y = {
    readContext: gt,
    useCallback: hh,
    useContext: gt,
    useEffect: Hu,
    useImperativeHandle: ph,
    useInsertionEffect: ch,
    useLayoutEffect: dh,
    useMemo: mh,
    useReducer: Ua,
    useRef: uh,
    useState: function () {
      return Ua(Jo);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = yt();
      return vh(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ua(Jo)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: nh,
    useSyncExternalStore: rh,
    useId: gh,
    unstable_isNewReconciler: !1
  },
  My = {
    readContext: gt,
    useCallback: hh,
    useContext: gt,
    useEffect: Hu,
    useImperativeHandle: ph,
    useInsertionEffect: ch,
    useLayoutEffect: dh,
    useMemo: mh,
    useReducer: Ba,
    useRef: uh,
    useState: function () {
      return Ba(Jo);
    },
    useDebugValue: Ku,
    useDeferredValue: function (e) {
      var t = yt();
      return Re === null ? (t.memoizedState = e) : vh(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ba(Jo)[0],
        t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: nh,
    useSyncExternalStore: rh,
    useId: gh,
    unstable_isNewReconciler: !1
  };
function Hr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += og(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Wa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ty = typeof WeakMap == "function" ? WeakMap : Map;
function Sh(e, t, n) {
  (n = Gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tl || ((Tl = !0), (Gs = r)), Is(e, t);
    }),
    n
  );
}
function Eh(e, t, n) {
  (n = Gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Is(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Is(e, t), typeof r != "function" && (bn === null ? (bn = new Set([this])) : bn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    n
  );
}
function Sd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ty();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Hy.bind(null, e, t, n)), t.then(e, e));
}
function Ed(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Gt(-1, 1)), (t.tag = 2), $n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ny = nn.ReactCurrentOwner,
  Ze = !1;
function He(e, t, n, r) {
  t.child = e === null ? eh(t, null, n, r) : Wr(t, e.child, n, r);
}
function $d(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Or(t, o),
    (r = Wu(e, t, n, r, i, o)),
    (n = Vu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Jt(e, t, o))
      : (me && n && Tu(t), (t.flags |= 1), He(e, t, r, o), t.child)
  );
}
function bd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ec(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ch(e, t, i, r, o))
      : ((e = ll(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ho), n(l, r) && e.ref === t.ref))
      return Jt(e, t, o);
  }
  return (t.flags |= 1), (e = Pn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ch(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ho(i, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), Jt(e, t, o);
  }
  return Fs(e, t, n, r, o);
}
function $h(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(Rr, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          de(Rr, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        de(Rr, rt),
        (rt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), de(Rr, rt), (rt |= r);
  return He(e, t, o, n), t.child;
}
function bh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fs(e, t, n, r, o) {
  var i = qe(n) ? Qn : We.current;
  return (
    (i = Ur(t, i)),
    Or(t, o),
    (n = Wu(e, t, n, r, i, o)),
    (r = Vu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Jt(e, t, o))
      : (me && r && Tu(t), (t.flags |= 1), He(e, t, n, o), t.child)
  );
}
function kd(e, t, n, r, o) {
  if (qe(n)) {
    var i = !0;
    Sl(t);
  } else i = !1;
  if ((Or(t, o), t.stateNode === null)) rl(e, t), Jp(t, n, r), As(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = gt(u))
      : ((u = qe(n) ? Qn : We.current), (u = Ur(t, u)));
    var c = n.getDerivedStateFromProps,
      d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && gd(t, l, r, u)),
      (mn = !1);
    var p = t.memoizedState;
    (l.state = p),
      kl(t, r, l, o),
      (s = t.memoizedState),
      a !== r || p !== s || Je.current || mn
        ? (typeof c == "function" && (Os(t, n, c, r), (s = t.memoizedState)),
          (a = mn || vd(t, n, a, r, p, s, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Xp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : $t(t.type, a)),
      (l.props = u),
      (d = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = gt(s))
        : ((s = qe(n) ? Qn : We.current), (s = Ur(t, s)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== d || p !== s) && gd(t, l, r, s)),
      (mn = !1),
      (p = t.memoizedState),
      (l.state = p),
      kl(t, r, l, o);
    var w = t.memoizedState;
    a !== d || p !== w || Je.current || mn
      ? (typeof g == "function" && (Os(t, n, g, r), (w = t.memoizedState)),
        (u = mn || vd(t, n, u, r, p, w, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zs(e, t, n, r, i, o);
}
function zs(e, t, n, r, o, i) {
  bh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && dd(t, n, !1), Jt(e, t, i);
  (r = t.stateNode), (Ny.current = t);
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Wr(t, e.child, null, i)), (t.child = Wr(t, null, a, i)))
      : He(e, t, a, i),
    (t.memoizedState = r.state),
    o && dd(t, n, !0),
    t.child
  );
}
function kh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cd(e, t.context, !1),
    zu(e, t.containerInfo);
}
function Pd(e, t, n, r, o) {
  return Br(), Du(o), (t.flags |= 256), He(e, t, n, r), t.child;
}
var js = { dehydrated: null, treeContext: null, retryLane: 0 };
function Us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    de(ge, o & 1),
    e === null)
  )
    return (
      Ds(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Jl(l, r, 0, null)),
              (e = Gn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Us(n)),
              (t.memoizedState = js),
              e)
            : Gu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Dy(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = Pn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Pn(a, i)) : ((i = Gn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Us(n)
          : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = js),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Pn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (t = Jl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ii(e, t, n, r) {
  return (
    r !== null && Du(r),
    Wr(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wa(Error(N(422)))), Ii(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Jl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Gn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Wr(t, e.child, null, l),
        (t.child.memoizedState = Us(l)),
        (t.memoizedState = js),
        i);
  if (!(t.mode & 1)) return Ii(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = Wa(i, r, void 0)), Ii(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ze || a)) {
    if (((r = De), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Zt(e, o), _t(r, e, o, -1));
    }
    return qu(), (r = Wa(Error(N(421)))), Ii(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Ky.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (it = Cn(o.nextSibling)),
      (lt = t),
      (me = !0),
      (Pt = null),
      e !== null &&
        ((pt[ht++] = Ht),
        (pt[ht++] = Kt),
        (pt[ht++] = Yn),
        (Ht = e.id),
        (Kt = e.overflow),
        (Yn = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ls(e.return, t, n);
}
function Va(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Rh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((He(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rd(e, n, t);
        else if (e.tag === 19) Rd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Pl(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Va(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Pl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Va(t, !0, n, null, i);
        break;
      case "together":
        Va(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Jt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Zn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ly(e, t, n) {
  switch (t.tag) {
    case 3:
      kh(t), Br();
      break;
    case 5:
      th(t);
      break;
    case 1:
      qe(t.type) && Sl(t);
      break;
    case 4:
      zu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      de($l, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ph(e, t, n)
          : (de(ge, ge.current & 1), (e = Jt(e, t, n)), e !== null ? e.sibling : null);
      de(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        de(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $h(e, t, n);
  }
  return Jt(e, t, n);
}
var _h, Bs, Mh, Th;
_h = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bs = function () {};
Mh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Bn(Ft.current);
    var i = null;
    switch (n) {
      case "input":
        (o = cs(e, o)), (r = cs(e, r)), (i = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })), (r = we({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = ps(e, o)), (r = ps(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wl);
    }
    ms(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Fo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && pe("scroll", e), i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Th = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mo(e, t) {
  if (!me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Oy(e, t, n) {
  var r = t.pendingProps;
  switch ((Nu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ue(t), null;
    case 1:
      return qe(t.type) && xl(), Ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vr(),
        he(Je),
        he(We),
        Uu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Pt !== null && (Xs(Pt), (Pt = null)))),
        Bs(e, t),
        Ue(t),
        null
      );
    case 5:
      ju(t);
      var o = Bn(Xo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ue(t), null;
        }
        if (((e = Bn(Ft.current)), Oi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ot] = t), (r[Qo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Po.length; o++) pe(Po[o], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              Ic(r, i), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), pe("invalid", r);
              break;
            case "textarea":
              zc(r, i), pe("invalid", r);
          }
          ms(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Fo.hasOwnProperty(l) && a != null && l === "onScroll" && pe("scroll", r);
            }
          switch (n) {
            case "input":
              ki(r), Fc(r, i, !0);
              break;
            case "textarea":
              ki(r), jc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = wl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = op(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Qo] = r),
            _h(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = vs(n, r)), n)) {
              case "dialog":
                pe("cancel", e), pe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Po.length; o++) pe(Po[o], e);
                o = r;
                break;
              case "source":
                pe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e), pe("load", e), (o = r);
                break;
              case "details":
                pe("toggle", e), (o = r);
                break;
              case "input":
                Ic(e, r), (o = cs(e, r)), pe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  pe("invalid", e);
                break;
              case "textarea":
                zc(e, r), (o = ps(e, r)), pe("invalid", e);
                break;
              default:
                o = r;
            }
            ms(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? ap(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ip(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && zo(e, s)
                    : typeof s == "number" && zo(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Fo.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && pe("scroll", e)
                      : s != null && gu(e, i, s, l));
              }
            switch (n) {
              case "input":
                ki(e), Fc(e, r, !1);
                break;
              case "textarea":
                ki(e), jc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = wl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ue(t), null;
    case 6:
      if (e && t.stateNode != null) Th(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Bn(Xo.current)), Bn(Ft.current), Oi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (i = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return Ue(t), null;
    case 13:
      if (
        (he(ge),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && it !== null && t.mode & 1 && !(t.flags & 128))
          Qp(), Br(), (t.flags |= 98560), (i = !1);
        else if (((i = Oi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(N(317));
            i[Ot] = t;
          } else Br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ue(t), (i = !1);
        } else Pt !== null && (Xs(Pt), (Pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ge.current & 1 ? _e === 0 && (_e = 3) : qu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ue(t),
          null);
    case 4:
      return Vr(), Bs(e, t), e === null && Ko(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return Au(t.type._context), Ue(t), null;
    case 17:
      return qe(t.type) && xl(), Ue(t), null;
    case 19:
      if ((he(ge), (i = t.memoizedState), i === null)) return Ue(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) mo(i, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Pl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return de(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $e() > Kr &&
            ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Pl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !me)
            )
              return Ue(t), null;
          } else
            2 * $e() - i.renderingStartTime > Kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $e()),
          (t.sibling = null),
          (n = ge.current),
          de(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ue(t), null);
    case 22:
    case 23:
      return (
        Ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Ay(e, t) {
  switch ((Nu(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && xl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vr(),
        he(Je),
        he(We),
        Uu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ju(t), null;
    case 13:
      if ((he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Br();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return he(ge), null;
    case 4:
      return Vr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fi = !1,
  Be = !1,
  Iy = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Ws(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var _d = !1;
function Fy(e, t) {
  if (((ks = vl), (e = Op()), Mu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (p = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === o && (a = l),
                p === i && ++c === r && (s = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ps = { focusedElem: e, selectionRange: n }, vl = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    x = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : $t(t.type, v), x);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (E) {
          Se(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (w = _d), (_d = !1), w;
}
function Lo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ws(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Nh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Ot], delete t[Qo], delete t[Ms], delete t[xy], delete t[Sy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Md(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), (e = e.sibling);
}
function Ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ks(e, t, n), e = e.sibling; e !== null; ) Ks(e, t, n), (e = e.sibling);
}
var Ae = null,
  bt = !1;
function un(e, t, n) {
  for (n = n.child; n !== null; ) Lh(e, t, n), (n = n.sibling);
}
function Lh(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(Bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Pr(n, t);
    case 6:
      var r = Ae,
        o = bt;
      (Ae = null),
        un(e, t, n),
        (Ae = r),
        (bt = o),
        Ae !== null &&
          (bt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (bt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8 ? Ia(e.parentNode, n) : e.nodeType === 1 && Ia(e, n),
            Wo(e))
          : Ia(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (o = bt),
        (Ae = n.stateNode.containerInfo),
        (bt = !0),
        un(e, t, n),
        (Ae = r),
        (bt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Be && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && Ws(n, t, l), (o = o.next);
        } while (o !== r);
      }
      un(e, t, n);
      break;
    case 1:
      if (!Be && (Pr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      un(e, t, n);
      break;
    case 21:
      un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), un(e, t, n), (Be = r))
        : un(e, t, n);
      break;
    default:
      un(e, t, n);
  }
}
function Td(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Iy()),
      t.forEach(function (r) {
        var o = Gy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (bt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (bt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (bt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(N(160));
        Lh(i, l, o), (Ae = null), (bt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oh(t, e), (t = t.sibling);
}
function Oh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(t, e), Dt(e), r & 4)) {
        try {
          Lo(3, e, e.return), Xl(3, e);
        } catch (v) {
          Se(e, e.return, v);
        }
        try {
          Lo(5, e, e.return);
        } catch (v) {
          Se(e, e.return, v);
        }
      }
      break;
    case 1:
      Et(t, e), Dt(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if ((Et(t, e), Dt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          zo(o, "");
        } catch (v) {
          Se(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && np(o, i), vs(a, l);
            var u = vs(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                d = s[l + 1];
              c === "style"
                ? ap(o, d)
                : c === "dangerouslySetInnerHTML"
                ? ip(o, d)
                : c === "children"
                ? zo(o, d)
                : gu(o, c, d, u);
            }
            switch (a) {
              case "input":
                ds(o, i);
                break;
              case "textarea":
                rp(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Tr(o, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Tr(o, !!i.multiple, i.defaultValue, !0)
                      : Tr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Qo] = i;
          } catch (v) {
            Se(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Et(t, e), Dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Se(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((Et(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Wo(t.containerInfo);
        } catch (v) {
          Se(e, e.return, v);
        }
      break;
    case 4:
      Et(t, e), Dt(e);
      break;
    case 13:
      Et(t, e),
        Dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Xu = $e())),
        r & 4 && Td(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || c), Et(t, e), (Be = u)) : Et(t, e),
        Dt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((p = F), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lo(4, p, p.return);
                  break;
                case 1:
                  Pr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      Se(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Pr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Dd(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (F = g)) : Dd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (s = d.memoizedProps.style),
                      (l = s != null && s.hasOwnProperty("display") ? s.display : null),
                      (a.style.display = lp("display", l)));
              } catch (v) {
                Se(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                Se(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Et(t, e), Dt(e), r & 4 && Td(e);
      break;
    case 21:
      break;
    default:
      Et(t, e), Dt(e);
  }
}
function Dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (zo(o, ""), (r.flags &= -33));
          var i = Md(e);
          Ks(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Md(e);
          Hs(e, a, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      Se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zy(e, t, n) {
  (F = e), Ah(e);
}
function Ah(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Fi;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Be;
        a = Fi;
        var u = Be;
        if (((Fi = l), (Be = s) && !u))
          for (F = o; F !== null; )
            (l = F),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ld(o)
                : s !== null
                ? ((s.return = l), (F = s))
                : Ld(o);
        for (; i !== null; ) (F = i), Ah(i), (i = i.sibling);
        (F = o), (Fi = a), (Be = u);
      }
      Nd(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Nd(e);
  }
}
function Nd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : $t(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && md(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                md(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Wo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Be || (t.flags & 512 && Vs(t));
      } catch (p) {
        Se(t, t.return, p);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Dd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Ld(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (s) {
            Se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Se(t, o, s);
            }
          }
          var i = t.return;
          try {
            Vs(t);
          } catch (s) {
            Se(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Vs(t);
          } catch (s) {
            Se(t, l, s);
          }
      }
    } catch (s) {
      Se(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var jy = Math.ceil,
  Ml = nn.ReactCurrentDispatcher,
  Qu = nn.ReactCurrentOwner,
  vt = nn.ReactCurrentBatchConfig,
  oe = 0,
  De = null,
  be = null,
  Ie = 0,
  rt = 0,
  Rr = Ln(0),
  _e = 0,
  ei = null,
  Zn = 0,
  Zl = 0,
  Yu = 0,
  Oo = null,
  Xe = null,
  Xu = 0,
  Kr = 1 / 0,
  Wt = null,
  Tl = !1,
  Gs = null,
  bn = null,
  zi = !1,
  wn = null,
  Nl = 0,
  Ao = 0,
  Qs = null,
  ol = -1,
  il = 0;
function Ke() {
  return oe & 6 ? $e() : ol !== -1 ? ol : (ol = $e());
}
function kn(e) {
  return e.mode & 1
    ? oe & 2 && Ie !== 0
      ? Ie & -Ie
      : Cy.transition !== null
      ? (il === 0 && (il = wp()), il)
      : ((e = ae), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kp(e.type))), e)
    : 1;
}
function _t(e, t, n, r) {
  if (50 < Ao) throw ((Ao = 0), (Qs = null), Error(N(185)));
  ui(e, n, r),
    (!(oe & 2) || e !== De) &&
      (e === De && (!(oe & 2) && (Zl |= n), _e === 4 && gn(e, Ie)),
      et(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((Kr = $e() + 500), Gl && On()));
}
function et(e, t) {
  var n = e.callbackNode;
  Cg(e, t);
  var r = ml(e, e === De ? Ie : 0);
  if (r === 0) n !== null && Wc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wc(n), t === 1))
      e.tag === 0 ? Ey(Od.bind(null, e)) : Hp(Od.bind(null, e)),
        yy(function () {
          !(oe & 6) && On();
        }),
        (n = null);
    else {
      switch (xp(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = gp;
          break;
        case 16:
          n = hl;
          break;
        case 536870912:
          n = yp;
          break;
        default:
          n = hl;
      }
      n = Vh(n, Ih.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ih(e, t) {
  if (((ol = -1), (il = 0), oe & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = ml(e, e === De ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
  else {
    t = r;
    var o = oe;
    oe |= 2;
    var i = zh();
    (De !== e || Ie !== t) && ((Wt = null), (Kr = $e() + 500), Kn(e, t));
    do
      try {
        Wy();
        break;
      } catch (a) {
        Fh(e, a);
      }
    while (1);
    Ou(), (Ml.current = i), (oe = o), be !== null ? (t = 0) : ((De = null), (Ie = 0), (t = _e));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Ss(e)), o !== 0 && ((r = o), (t = Ys(e, o)))), t === 1))
      throw ((n = ei), Kn(e, 0), gn(e, r), et(e, $e()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Uy(o) &&
          ((t = Dl(e, r)), t === 2 && ((i = Ss(e)), i !== 0 && ((r = i), (t = Ys(e, i)))), t === 1))
      )
        throw ((n = ei), Kn(e, 0), gn(e, r), et(e, $e()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          zn(e, Xe, Wt);
          break;
        case 3:
          if ((gn(e, r), (r & 130023424) === r && ((t = Xu + 500 - $e()), 10 < t))) {
            if (ml(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = _s(zn.bind(null, e, Xe, Wt), t);
            break;
          }
          zn(e, Xe, Wt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Rt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = $e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _s(zn.bind(null, e, Xe, Wt), r);
            break;
          }
          zn(e, Xe, Wt);
          break;
        case 5:
          zn(e, Xe, Wt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return et(e, $e()), e.callbackNode === n ? Ih.bind(null, e) : null;
}
function Ys(e, t) {
  var n = Oo;
  return (
    e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
    (e = Dl(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && Xs(t)),
    e
  );
}
function Xs(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function Uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Tt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gn(e, t) {
  for (
    t &= ~Yu, t &= ~Zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Od(e) {
  if (oe & 6) throw Error(N(327));
  Ar();
  var t = ml(e, 0);
  if (!(t & 1)) return et(e, $e()), null;
  var n = Dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ss(e);
    r !== 0 && ((t = r), (n = Ys(e, r)));
  }
  if (n === 1) throw ((n = ei), Kn(e, 0), gn(e, t), et(e, $e()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), zn(e, Xe, Wt), et(e, $e()), null
  );
}
function Zu(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((Kr = $e() + 500), Gl && On());
  }
}
function Jn(e) {
  wn !== null && wn.tag === 0 && !(oe & 6) && Ar();
  var t = oe;
  oe |= 1;
  var n = vt.transition,
    r = ae;
  try {
    if (((vt.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (vt.transition = n), (oe = t), !(oe & 6) && On();
  }
}
function Ju() {
  (rt = Rr.current), he(Rr);
}
function Kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gy(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Nu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xl();
          break;
        case 3:
          Vr(), he(Je), he(We), Uu();
          break;
        case 5:
          ju(r);
          break;
        case 4:
          Vr();
          break;
        case 13:
          he(ge);
          break;
        case 19:
          he(ge);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (be = e = Pn(e.current, null)),
    (Ie = rt = t),
    (_e = 0),
    (ei = null),
    (Yu = Zl = Zn = 0),
    (Xe = Oo = null),
    Un !== null)
  ) {
    for (t = 0; t < Un.length; t++)
      if (((n = Un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Un = null;
  }
  return e;
}
function Fh(e, t) {
  do {
    var n = be;
    try {
      if ((Ou(), (tl.current = _l), Rl)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Rl = !1;
      }
      if (
        ((Xn = 0),
        (Ne = Re = ye = null),
        (Do = !1),
        (Zo = 0),
        (Qu.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (ei = t), (be = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = Ie),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Ed(l);
          if (g !== null) {
            (g.flags &= -257), Cd(g, l, a, i, t), g.mode & 1 && Sd(i, u, t), (t = g), (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Sd(i, u, t), qu();
              break e;
            }
            s = Error(N(426));
          }
        } else if (me && a.mode & 1) {
          var x = Ed(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Cd(x, l, a, i, t), Du(Hr(s, a));
            break e;
          }
        }
        (i = s = Hr(s, a)), _e !== 4 && (_e = 2), Oo === null ? (Oo = [i]) : Oo.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Sh(i, s, t);
              hd(i, m);
              break e;
            case 1:
              a = s;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (bn === null || !bn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = Eh(i, a, t);
                hd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Uh(n);
    } catch (b) {
      (t = b), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zh() {
  var e = Ml.current;
  return (Ml.current = _l), e === null ? _l : e;
}
function qu() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    De === null || (!(Zn & 268435455) && !(Zl & 268435455)) || gn(De, Ie);
}
function Dl(e, t) {
  var n = oe;
  oe |= 2;
  var r = zh();
  (De !== e || Ie !== t) && ((Wt = null), Kn(e, t));
  do
    try {
      By();
      break;
    } catch (o) {
      Fh(e, o);
    }
  while (1);
  if ((Ou(), (oe = n), (Ml.current = r), be !== null)) throw Error(N(261));
  return (De = null), (Ie = 0), _e;
}
function By() {
  for (; be !== null; ) jh(be);
}
function Wy() {
  for (; be !== null && !hg(); ) jh(be);
}
function jh(e) {
  var t = Wh(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps), t === null ? Uh(e) : (be = t), (Qu.current = null);
}
function Uh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ay(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (be = null);
        return;
      }
    } else if (((n = Oy(n, t, rt)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function zn(e, t, n) {
  var r = ae,
    o = vt.transition;
  try {
    (vt.transition = null), (ae = 1), Vy(e, t, n, r);
  } finally {
    (vt.transition = o), (ae = r);
  }
  return null;
}
function Vy(e, t, n, r) {
  do Ar();
  while (wn !== null);
  if (oe & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    ($g(e, i),
    e === De && ((be = De = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      Vh(hl, function () {
        return Ar(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = vt.transition), (vt.transition = null);
    var l = ae;
    ae = 1;
    var a = oe;
    (oe |= 4),
      (Qu.current = null),
      Fy(e, n),
      Oh(n, e),
      cy(Ps),
      (vl = !!ks),
      (Ps = ks = null),
      (e.current = n),
      zy(n),
      mg(),
      (oe = a),
      (ae = l),
      (vt.transition = i);
  } else e.current = n;
  if (
    (zi && ((zi = !1), (wn = e), (Nl = o)),
    (i = e.pendingLanes),
    i === 0 && (bn = null),
    yg(n.stateNode),
    et(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Tl) throw ((Tl = !1), (e = Gs), (Gs = null), e);
  return (
    Nl & 1 && e.tag !== 0 && Ar(),
    (i = e.pendingLanes),
    i & 1 ? (e === Qs ? Ao++ : ((Ao = 0), (Qs = e))) : (Ao = 0),
    On(),
    null
  );
}
function Ar() {
  if (wn !== null) {
    var e = xp(Nl),
      t = vt.transition,
      n = ae;
    try {
      if (((vt.transition = null), (ae = 16 > e ? 16 : e), wn === null)) var r = !1;
      else {
        if (((e = wn), (wn = null), (Nl = 0), oe & 6)) throw Error(N(331));
        var o = oe;
        for (oe |= 4, F = e.current; F !== null; ) {
          var i = F,
            l = i.child;
          if (F.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (F = d);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var p = c.sibling,
                        g = c.return;
                      if ((Nh(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (F = p);
                        break;
                      }
                      F = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (F = l);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lo(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (F = m);
                break e;
              }
              F = i.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          l = F;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (F = y);
          else
            e: for (l = h; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl(9, a);
                  }
                } catch (b) {
                  Se(a, a.return, b);
                }
              if (a === l) {
                F = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (F = E);
                break e;
              }
              F = a.return;
            }
        }
        if (((oe = o), On(), It && typeof It.onPostCommitFiberRoot == "function"))
          try {
            It.onPostCommitFiberRoot(Bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (vt.transition = t);
    }
  }
  return !1;
}
function Ad(e, t, n) {
  (t = Hr(n, t)),
    (t = Sh(e, t, 1)),
    (e = $n(e, t, 1)),
    (t = Ke()),
    e !== null && (ui(e, 1, t), et(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Ad(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ad(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r)))
        ) {
          (e = Hr(n, e)),
            (e = Eh(t, e, 1)),
            (t = $n(t, e, 1)),
            (e = Ke()),
            t !== null && (ui(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ie & n) === n &&
      (_e === 4 || (_e === 3 && (Ie & 130023424) === Ie && 500 > $e() - Xu) ? Kn(e, 0) : (Yu |= n)),
    et(e, t);
}
function Bh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304)) : (t = 1));
  var n = Ke();
  (e = Zt(e, t)), e !== null && (ui(e, t, n), et(e, n));
}
function Ky(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bh(e, n);
}
function Gy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Bh(e, n);
}
var Wh;
Wh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), Ly(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), me && t.flags & 1048576 && Kp(t, Cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      rl(e, t), (e = t.pendingProps);
      var o = Ur(t, We.current);
      Or(t, n), (o = Wu(null, t, r, e, o, n));
      var i = Vu();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), Sl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Fu(t),
            (o.updater = Ql),
            (t.stateNode = o),
            (o._reactInternals = t),
            As(t, r, e, n),
            (t = zs(null, t, r, !0, i, n)))
          : ((t.tag = 0), me && i && Tu(t), He(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Yy(r)),
          (e = $t(r, e)),
          o)
        ) {
          case 0:
            t = Fs(null, t, r, e, n);
            break e;
          case 1:
            t = kd(null, t, r, e, n);
            break e;
          case 11:
            t = $d(null, t, r, e, n);
            break e;
          case 14:
            t = bd(null, t, r, $t(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        Fs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        kd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((kh(t), e === null)) throw Error(N(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Xp(e, t), kl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Hr(Error(N(423)), t)), (t = Pd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Hr(Error(N(424)), t)), (t = Pd(e, t, r, n, o));
            break e;
          } else
            for (
              it = Cn(t.stateNode.containerInfo.firstChild),
                lt = t,
                me = !0,
                Pt = null,
                n = eh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Br(), r === o)) {
            t = Jt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        th(t),
        e === null && Ds(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Rs(r, o) ? (l = null) : i !== null && Rs(r, i) && (t.flags |= 32),
        bh(e, t),
        He(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ds(t), null;
    case 13:
      return Ph(e, t, n);
    case 4:
      return (
        zu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Wr(t, null, r, n)) : He(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        $d(e, t, r, o, n)
      );
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          de($l, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Tt(i.value, l)) {
            if (i.children === o.children && !Je.current) {
              t = Jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Gt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ls(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ls(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        He(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (o = gt(o)),
        (r = r(o)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = $t(r, t.pendingProps)), (o = $t(r.type, o)), bd(e, t, r, o, n);
    case 15:
      return Ch(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $t(r, o)),
        rl(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Sl(t)) : (e = !1),
        Or(t, n),
        Jp(t, r, o),
        As(t, r, o, n),
        zs(null, t, r, !0, e, n)
      );
    case 19:
      return Rh(e, t, n);
    case 22:
      return $h(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Vh(e, t) {
  return vp(e, t);
}
function Qy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new Qy(e, t, n, r);
}
function ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yy(e) {
  if (typeof e == "function") return ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === xu) return 14;
  }
  return 2;
}
function Pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ll(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) ec(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case yr:
        return Gn(n.children, o, i, t);
      case yu:
        (l = 8), (o |= 8);
        break;
      case ls:
        return (e = mt(12, n, t, o | 2)), (e.elementType = ls), (e.lanes = i), e;
      case as:
        return (e = mt(13, n, t, o)), (e.elementType = as), (e.lanes = i), e;
      case ss:
        return (e = mt(19, n, t, o)), (e.elementType = ss), (e.lanes = i), e;
      case qf:
        return Jl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zf:
              l = 10;
              break e;
            case Jf:
              l = 9;
              break e;
            case wu:
              l = 11;
              break e;
            case xu:
              l = 14;
              break e;
            case hn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (t = mt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Gn(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function Jl(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)), (e.elementType = qf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function Ha(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function Ka(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  );
}
function Xy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ka(0)),
    (this.expirationTimes = ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ka(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function tc(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new Xy(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Fu(i),
    e
  );
}
function Zy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function Hh(e) {
  if (!e) return _n;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Vp(e, n, t);
  }
  return t;
}
function Kh(e, t, n, r, o, i, l, a, s) {
  return (
    (e = tc(n, r, !0, e, o, i, l, a, s)),
    (e.context = Hh(null)),
    (n = e.current),
    (r = Ke()),
    (o = kn(n)),
    (i = Gt(r, o)),
    (i.callback = t ?? null),
    $n(n, i, o),
    (e.current.lanes = o),
    ui(e, o, r),
    et(e, r),
    e
  );
}
function ql(e, t, n, r) {
  var o = t.current,
    i = Ke(),
    l = kn(o);
  return (
    (n = Hh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Gt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $n(o, t, l)),
    e !== null && (_t(e, o, l, i), el(e, o, l)),
    l
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Id(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nc(e, t) {
  Id(e, t), (e = e.alternate) && Id(e, t);
}
function Jy() {
  return null;
}
var Gh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function rc(e) {
  this._internalRoot = e;
}
ea.prototype.render = rc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ql(e, t, null, null);
};
ea.prototype.unmount = rc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jn(function () {
      ql(null, e, null, null);
    }),
      (t[Xt] = null);
  }
};
function ea(e) {
  this._internalRoot = e;
}
ea.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && bp(e);
  }
};
function oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ta(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fd() {}
function qy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ll(l);
        i.call(u);
      };
    }
    var l = Kh(t, r, e, 0, null, !1, !1, "", Fd);
    return (
      (e._reactRootContainer = l),
      (e[Xt] = l.current),
      Ko(e.nodeType === 8 ? e.parentNode : e),
      Jn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ll(s);
      a.call(u);
    };
  }
  var s = tc(e, 0, !1, null, null, !1, !1, "", Fd);
  return (
    (e._reactRootContainer = s),
    (e[Xt] = s.current),
    Ko(e.nodeType === 8 ? e.parentNode : e),
    Jn(function () {
      ql(t, s, n, r);
    }),
    s
  );
}
function na(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = Ll(l);
        a.call(s);
      };
    }
    ql(t, l, e, o);
  } else l = qy(n, t, e, o, r);
  return Ll(l);
}
Sp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ko(t.pendingLanes);
        n !== 0 && (Cu(t, n | 1), et(t, $e()), !(oe & 6) && ((Kr = $e() + 500), On()));
      }
      break;
    case 13:
      Jn(function () {
        var r = Zt(e, 1);
        if (r !== null) {
          var o = Ke();
          _t(r, e, 1, o);
        }
      }),
        nc(e, 1);
  }
};
$u = function (e) {
  if (e.tag === 13) {
    var t = Zt(e, 134217728);
    if (t !== null) {
      var n = Ke();
      _t(t, e, 134217728, n);
    }
    nc(e, 134217728);
  }
};
Ep = function (e) {
  if (e.tag === 13) {
    var t = kn(e),
      n = Zt(e, t);
    if (n !== null) {
      var r = Ke();
      _t(n, e, t, r);
    }
    nc(e, t);
  }
};
Cp = function () {
  return ae;
};
$p = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
ys = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ds(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Kl(r);
            if (!o) throw Error(N(90));
            tp(r), ds(r, o);
          }
        }
      }
      break;
    case "textarea":
      rp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Tr(e, !!n.multiple, t, !1);
  }
};
cp = Zu;
dp = Jn;
var e0 = { usingClientEntryPoint: !1, Events: [di, Er, Kl, sp, up, Zu] },
  vo = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  },
  t0 = {
    bundleType: vo.bundleType,
    version: vo.version,
    rendererPackageName: vo.rendererPackageName,
    rendererConfig: vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vo.findFiberByHostInstance || Jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ji.isDisabled && ji.supportsFiber)
    try {
      (Bl = ji.inject(t0)), (It = ji);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e0;
ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oc(t)) throw Error(N(200));
  return Zy(e, t, null, n);
};
ct.createRoot = function (e, t) {
  if (!oc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = Gh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = tc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Xt] = t.current),
    Ko(e.nodeType === 8 ? e.parentNode : e),
    new rc(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = hp(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
  return Jn(e);
};
ct.hydrate = function (e, t, n) {
  if (!ta(t)) throw Error(N(200));
  return na(null, e, t, !0, n);
};
ct.hydrateRoot = function (e, t, n) {
  if (!oc(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Gh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Kh(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Xt] = t.current),
    Ko(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ea(t);
};
ct.render = function (e, t, n) {
  if (!ta(t)) throw Error(N(200));
  return na(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function (e) {
  if (!ta(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Jn(function () {
        na(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xt] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = Zu;
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ta(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return na(e, t, n, !1, r);
};
ct.version = "18.2.0-next-9e3b772b8-20220608";
function Qh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qh);
    } catch (e) {
      console.error(e);
    }
}
Qh(), (Kf.exports = ct);
var eo = Kf.exports;
const Yh = Lf(eo),
  n0 = Df({ __proto__: null, default: Yh }, [eo]);
var zd = eo;
(os.createRoot = zd.createRoot), (os.hydrateRoot = zd.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ee() {
  return (
    (Ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ee.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ce || (Ce = {}));
const jd = "popstate";
function r0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: a } = r.location;
    return ti(
      "",
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : qn(o);
  }
  return i0(t, n, null, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Gr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o0() {
  return Math.random().toString(36).substr(2, 8);
}
function Ud(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ti(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ee(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? rn(t) : t,
      { state: n, key: (t && t.key) || r || o0() }
    )
  );
}
function qn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function rn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function i0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = Ce.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), l.replaceState(Ee({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    a = Ce.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), s && s({ action: a, location: v.location, delta: m });
  }
  function p(x, m) {
    a = Ce.Push;
    let h = ti(v.location, x, m);
    n && n(h, x), (u = c() + 1);
    let y = Ud(h, u),
      E = v.createHref(h);
    try {
      l.pushState(y, "", E);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      o.location.assign(E);
    }
    i && s && s({ action: a, location: v.location, delta: 1 });
  }
  function g(x, m) {
    a = Ce.Replace;
    let h = ti(v.location, x, m);
    n && n(h, x), (u = c());
    let y = Ud(h, u),
      E = v.createHref(h);
    l.replaceState(y, "", E), i && s && s({ action: a, location: v.location, delta: 0 });
  }
  function w(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof x == "string" ? x : qn(x);
    return (
      (h = h.replace(/ $/, "%20")),
      ee(m, "No window.location.(origin|href) available to create URL for href: " + h),
      new URL(h, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(x) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(jd, d),
        (s = x),
        () => {
          o.removeEventListener(jd, d), (s = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: w,
    encodeLocation(x) {
      let m = w(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: g,
    go(x) {
      return l.go(x);
    }
  };
  return v;
}
var xe;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(xe || (xe = {}));
const l0 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function a0(e) {
  return e.index === !0;
}
function Zs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, i],
        a = typeof o.id == "string" ? o.id : l.join("-");
      if (
        (ee(o.index !== !0 || !o.children, "Cannot specify children on an index route"),
        ee(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        a0(o))
      ) {
        let s = Ee({}, o, t(o), { id: a });
        return (r[a] = s), s;
      } else {
        let s = Ee({}, o, t(o), { id: a, children: void 0 });
        return (r[a] = s), o.children && (s.children = Zs(o.children, t, l, r)), s;
      }
    })
  );
}
function _r(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? rn(t) : t,
    o = to(r.pathname || "/", n);
  if (o == null) return null;
  let i = Xh(e);
  u0(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let s = S0(o);
    l = y0(i[a], s);
  }
  return l;
}
function s0(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Xh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i
    };
    s.relativePath.startsWith("/") &&
      (ee(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Qt([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ee(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xh(i.children, t, c, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: v0(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let s of Zh(i.path)) o(i, l, s);
    }),
    t
  );
}
function Zh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Zh(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function u0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : g0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const c0 = /^:[\w-]+$/,
  d0 = 3,
  f0 = 2,
  p0 = 1,
  h0 = 10,
  m0 = -2,
  Bd = (e) => e === "*";
function v0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Bd) && (r += m0),
    t && (r += f0),
    n.filter((o) => !Bd(o)).reduce((o, i) => o + (c0.test(i) ? d0 : i === "" ? p0 : h0), r)
  );
}
function g0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function y0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = w0({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Qt([o, c.pathname]),
      pathnameBase: $0(Qt([o, c.pathnameBase])),
      route: d
    }),
      c.pathnameBase !== "/" && (o = Qt([o, c.pathnameBase]));
  }
  return i;
}
function w0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = x0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: p, isOptional: g } = c;
      if (p === "*") {
        let v = a[d] || "";
        l = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[d];
      return g && !w ? (u[p] = void 0) : (u[p] = (w || "").replace(/%2F/g, "/")), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e
  };
}
function x0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function S0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Gr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function to(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function E0(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? rn(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : C0(n, t)) : t, search: b0(r), hash: k0(o) };
}
function C0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ga(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jh(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function ic(e, t) {
  let n = Jh(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function lc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = rn(e))
    : ((o = Ee({}, e)),
      ee(!o.pathname || !o.pathname.includes("?"), Ga("?", "pathname", "search", o)),
      ee(!o.pathname || !o.pathname.includes("#"), Ga("#", "pathname", "hash", o)),
      ee(!o.search || !o.search.includes("#"), Ga("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      o.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let s = E0(o, a),
    u = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Qt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  $0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  b0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  k0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ac {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function qh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const em = ["post", "put", "patch", "delete"],
  P0 = new Set(em),
  R0 = ["get", ...em],
  _0 = new Set(R0),
  M0 = new Set([301, 302, 303, 307, 308]),
  T0 = new Set([307, 308]),
  Qa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  N0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  },
  go = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  tm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  D0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  nm = "remix-router-transitions";
function L0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
    r = !n;
  ee(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    o = (k) => ({ hasErrorBoundary: C(k) });
  } else o = D0;
  let i = {},
    l = Zs(e.routes, o, void 0, i),
    a,
    s = e.basename || "/",
    u = Ee(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1
      },
      e.future
    ),
    c = null,
    d = new Set(),
    p = null,
    g = null,
    w = null,
    v = e.hydrationData != null,
    x = _r(l, e.history.location, s),
    m = null;
  if (x == null) {
    let C = ft(404, { pathname: e.history.location.pathname }),
      { matches: k, route: R } = Xd(l);
    (x = k), (m = { [R.id]: C });
  }
  let h,
    y = x.some((C) => C.route.lazy),
    E = x.some((C) => C.route.loader);
  if (y) h = !1;
  else if (!E) h = !0;
  else if (u.v7_partialHydration) {
    let C = e.hydrationData ? e.hydrationData.loaderData : null,
      k = e.hydrationData ? e.hydrationData.errors : null,
      R = (L) =>
        L.route.loader
          ? L.route.loader.hydrate === !0
            ? !1
            : (C && C[L.route.id] !== void 0) || (k && k[L.route.id] !== void 0)
          : !0;
    if (k) {
      let L = x.findIndex((z) => k[z.route.id] !== void 0);
      h = x.slice(0, L + 1).every(R);
    } else h = x.every(R);
  } else h = e.hydrationData != null;
  let b,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: x,
      initialized: h,
      navigation: Qa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map()
    },
    $ = Ce.Pop,
    P = !1,
    T,
    O = !1,
    U = new Map(),
    A = null,
    J = !1,
    H = !1,
    Y = [],
    ie = [],
    j = new Map(),
    D = 0,
    M = -1,
    I = new Map(),
    B = new Set(),
    X = new Map(),
    ke = new Map(),
    ve = new Set(),
    Pe = new Map(),
    ue = new Map(),
    Le = !1;
  function sr() {
    if (
      ((c = e.history.listen((C) => {
        let { action: k, location: R, delta: L } = C;
        if (Le) {
          Le = !1;
          return;
        }
        Gr(
          ue.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let z = Rc({ currentLocation: S.location, nextLocation: R, historyAction: k });
        if (z && L != null) {
          (Le = !0),
            e.history.go(L * -1),
            Si(z, {
              state: "blocked",
              location: R,
              proceed() {
                Si(z, { state: "proceeding", proceed: void 0, reset: void 0, location: R }),
                  e.history.go(L);
              },
              reset() {
                let q = new Map(S.blockers);
                q.set(z, go), Ve({ blockers: q });
              }
            });
          return;
        }
        return tt(k, R);
      })),
      n)
    ) {
      H0(t, U);
      let C = () => K0(t, U);
      t.addEventListener("pagehide", C), (A = () => t.removeEventListener("pagehide", C));
    }
    return S.initialized || tt(Ce.Pop, S.location, { initialHydration: !0 }), b;
  }
  function ze() {
    c && c(),
      A && A(),
      d.clear(),
      T && T.abort(),
      S.fetchers.forEach((C, k) => xi(k)),
      S.blockers.forEach((C, k) => Pc(k));
  }
  function ur(C) {
    return d.add(C), () => d.delete(C);
  }
  function Ve(C, k) {
    k === void 0 && (k = {}), (S = Ee({}, S, C));
    let R = [],
      L = [];
    u.v7_fetcherPersist &&
      S.fetchers.forEach((z, q) => {
        z.state === "idle" && (ve.has(q) ? L.push(q) : R.push(q));
      }),
      [...d].forEach((z) =>
        z(S, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: k.viewTransitionOpts,
          unstable_flushSync: k.flushSync === !0
        })
      ),
      u.v7_fetcherPersist && (R.forEach((z) => S.fetchers.delete(z)), L.forEach((z) => xi(z)));
  }
  function An(C, k, R) {
    var L, z;
    let { flushSync: q } = R === void 0 ? {} : R,
      K =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        kt(S.navigation.formMethod) &&
        S.navigation.state === "loading" &&
        ((L = C.state) == null ? void 0 : L._isRedirect) !== !0,
      V;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? (V = k.actionData)
        : (V = null)
      : K
      ? (V = S.actionData)
      : (V = null);
    let W = k.loaderData ? Yd(S.loaderData, k.loaderData, k.matches || [], k.errors) : S.loaderData,
      ne = S.blockers;
    ne.size > 0 && ((ne = new Map(ne)), ne.forEach((ce, Oe) => ne.set(Oe, go)));
    let Me =
      P === !0 ||
      (S.navigation.formMethod != null &&
        kt(S.navigation.formMethod) &&
        ((z = C.state) == null ? void 0 : z._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      J ||
        $ === Ce.Pop ||
        ($ === Ce.Push
          ? e.history.push(C, C.state)
          : $ === Ce.Replace && e.history.replace(C, C.state));
    let Z;
    if ($ === Ce.Pop) {
      let ce = U.get(S.location.pathname);
      ce && ce.has(C.pathname)
        ? (Z = { currentLocation: S.location, nextLocation: C })
        : U.has(C.pathname) && (Z = { currentLocation: C, nextLocation: S.location });
    } else if (O) {
      let ce = U.get(S.location.pathname);
      ce ? ce.add(C.pathname) : ((ce = new Set([C.pathname])), U.set(S.location.pathname, ce)),
        (Z = { currentLocation: S.location, nextLocation: C });
    }
    Ve(
      Ee({}, k, {
        actionData: V,
        loaderData: W,
        historyAction: $,
        location: C,
        initialized: !0,
        navigation: Qa,
        revalidation: "idle",
        restoreScrollPosition: Mc(C, k.matches || S.matches),
        preventScrollReset: Me,
        blockers: ne
      }),
      { viewTransitionOpts: Z, flushSync: q === !0 }
    ),
      ($ = Ce.Pop),
      (P = !1),
      (O = !1),
      (J = !1),
      (H = !1),
      (Y = []),
      (ie = []);
  }
  async function yi(C, k) {
    if (typeof C == "number") {
      e.history.go(C);
      return;
    }
    let R = Js(
        S.location,
        S.matches,
        s,
        u.v7_prependBasename,
        C,
        u.v7_relativeSplatPath,
        k == null ? void 0 : k.fromRouteId,
        k == null ? void 0 : k.relative
      ),
      { path: L, submission: z, error: q } = Wd(u.v7_normalizeFormMethod, !1, R, k),
      K = S.location,
      V = ti(S.location, L, k && k.state);
    V = Ee({}, V, e.history.encodeLocation(V));
    let W = k && k.replace != null ? k.replace : void 0,
      ne = Ce.Push;
    W === !0
      ? (ne = Ce.Replace)
      : W === !1 ||
        (z != null &&
          kt(z.formMethod) &&
          z.formAction === S.location.pathname + S.location.search &&
          (ne = Ce.Replace));
    let Me = k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
      Z = (k && k.unstable_flushSync) === !0,
      ce = Rc({ currentLocation: K, nextLocation: V, historyAction: ne });
    if (ce) {
      Si(ce, {
        state: "blocked",
        location: V,
        proceed() {
          Si(ce, { state: "proceeding", proceed: void 0, reset: void 0, location: V }), yi(C, k);
        },
        reset() {
          let Oe = new Map(S.blockers);
          Oe.set(ce, go), Ve({ blockers: Oe });
        }
      });
      return;
    }
    return await tt(ne, V, {
      submission: z,
      pendingError: q,
      preventScrollReset: Me,
      replace: k && k.replace,
      enableViewTransition: k && k.unstable_viewTransition,
      flushSync: Z
    });
  }
  function da() {
    if ((va(), Ve({ revalidation: "loading" }), S.navigation.state !== "submitting")) {
      if (S.navigation.state === "idle") {
        tt(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      tt($ || S.historyAction, S.navigation.location, { overrideNavigation: S.navigation });
    }
  }
  async function tt(C, k, R) {
    T && T.abort(),
      (T = null),
      ($ = C),
      (J = (R && R.startUninterruptedRevalidation) === !0),
      _v(S.location, S.matches),
      (P = (R && R.preventScrollReset) === !0),
      (O = (R && R.enableViewTransition) === !0);
    let L = a || l,
      z = R && R.overrideNavigation,
      q = _r(L, k, s),
      K = (R && R.flushSync) === !0;
    if (!q) {
      let Oe = ft(404, { pathname: k.pathname }),
        { matches: nt, route: Te } = Xd(L);
      ga(), An(k, { matches: nt, loaderData: {}, errors: { [Te.id]: Oe } }, { flushSync: K });
      return;
    }
    if (
      S.initialized &&
      !H &&
      z0(S.location, k) &&
      !(R && R.submission && kt(R.submission.formMethod))
    ) {
      An(k, { matches: q }, { flushSync: K });
      return;
    }
    T = new AbortController();
    let V = wo(e.history, k, T.signal, R && R.submission),
      W,
      ne;
    if (R && R.pendingError) ne = { [Io(q).route.id]: R.pendingError };
    else if (R && R.submission && kt(R.submission.formMethod)) {
      let Oe = await wi(V, k, R.submission, q, { replace: R.replace, flushSync: K });
      if (Oe.shortCircuited) return;
      (W = Oe.pendingActionData),
        (ne = Oe.pendingActionError),
        (z = Ya(k, R.submission)),
        (K = !1),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: Me,
      loaderData: Z,
      errors: ce
    } = await fa(
      V,
      k,
      q,
      z,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      R && R.initialHydration === !0,
      K,
      W,
      ne
    );
    Me ||
      ((T = null),
      An(k, Ee({ matches: q }, W ? { actionData: W } : {}, { loaderData: Z, errors: ce })));
  }
  async function wi(C, k, R, L, z) {
    z === void 0 && (z = {}), va();
    let q = W0(k, R);
    Ve({ navigation: q }, { flushSync: z.flushSync === !0 });
    let K,
      V = eu(L, k);
    if (!V.route.action && !V.route.lazy)
      K = {
        type: xe.error,
        error: ft(405, { method: C.method, pathname: k.pathname, routeId: V.route.id })
      };
    else if (((K = await yo("action", C, V, L, i, o, s, u.v7_relativeSplatPath)), C.signal.aborted))
      return { shortCircuited: !0 };
    if (Vn(K)) {
      let W;
      return (
        z && z.replace != null
          ? (W = z.replace)
          : (W = K.location === S.location.pathname + S.location.search),
        await Nt(S, K, { submission: R, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (Mr(K)) {
      let W = Io(L, V.route.id);
      return (
        (z && z.replace) !== !0 && ($ = Ce.Push),
        { pendingActionData: {}, pendingActionError: { [W.route.id]: K.error } }
      );
    }
    if (Wn(K)) throw ft(400, { type: "defer-action" });
    return { pendingActionData: { [V.route.id]: K.data } };
  }
  async function fa(C, k, R, L, z, q, K, V, W, ne, Me) {
    let Z = L || Ya(k, z),
      ce = z || q || qd(Z),
      Oe = a || l,
      [nt, Te] = Vd(
        e.history,
        S,
        R,
        ce,
        k,
        u.v7_partialHydration && V === !0,
        H,
        Y,
        ie,
        ve,
        X,
        B,
        Oe,
        s,
        ne,
        Me
      );
    if (
      (ga(
        (le) =>
          !(R && R.some((se) => se.route.id === le)) || (nt && nt.some((se) => se.route.id === le))
      ),
      (M = ++D),
      nt.length === 0 && Te.length === 0)
    ) {
      let le = bc();
      return (
        An(
          k,
          Ee(
            { matches: R, loaderData: {}, errors: Me || null },
            ne ? { actionData: ne } : {},
            le ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!J && (!u.v7_partialHydration || !V)) {
      Te.forEach((se) => {
        let Ye = S.fetchers.get(se.key),
          Ci = xo(void 0, Ye ? Ye.data : void 0);
        S.fetchers.set(se.key, Ci);
      });
      let le = ne || S.actionData;
      Ve(
        Ee(
          { navigation: Z },
          le ? (Object.keys(le).length === 0 ? { actionData: null } : { actionData: le }) : {},
          Te.length > 0 ? { fetchers: new Map(S.fetchers) } : {}
        ),
        { flushSync: W }
      );
    }
    Te.forEach((le) => {
      j.has(le.key) && an(le.key), le.controller && j.set(le.key, le.controller);
    });
    let cr = () => Te.forEach((le) => an(le.key));
    T && T.signal.addEventListener("abort", cr);
    let { results: ya, loaderResults: dr, fetcherResults: sn } = await Ec(S.matches, R, nt, Te, C);
    if (C.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", cr), Te.forEach((le) => j.delete(le.key));
    let In = Zd(ya);
    if (In) {
      if (In.idx >= nt.length) {
        let le = Te[In.idx - nt.length].key;
        B.add(le);
      }
      return await Nt(S, In.result, { replace: K }), { shortCircuited: !0 };
    }
    let { loaderData: wa, errors: ao } = Qd(S, R, nt, dr, Me, Te, sn, Pe);
    Pe.forEach((le, se) => {
      le.subscribe((Ye) => {
        (Ye || le.done) && Pe.delete(se);
      });
    }),
      u.v7_partialHydration &&
        V &&
        S.errors &&
        Object.entries(S.errors)
          .filter((le) => {
            let [se] = le;
            return !nt.some((Ye) => Ye.route.id === se);
          })
          .forEach((le) => {
            let [se, Ye] = le;
            ao = Object.assign(ao || {}, { [se]: Ye });
          });
    let xa = bc(),
      fr = kc(M),
      Ei = xa || fr || Te.length > 0;
    return Ee({ loaderData: wa, errors: ao }, Ei ? { fetchers: new Map(S.fetchers) } : {});
  }
  function pa(C, k, R, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(C) && an(C);
    let z = (L && L.unstable_flushSync) === !0,
      q = a || l,
      K = Js(
        S.location,
        S.matches,
        s,
        u.v7_prependBasename,
        R,
        u.v7_relativeSplatPath,
        k,
        L == null ? void 0 : L.relative
      ),
      V = _r(q, K, s);
    if (!V) {
      lo(C, k, ft(404, { pathname: K }), { flushSync: z });
      return;
    }
    let { path: W, submission: ne, error: Me } = Wd(u.v7_normalizeFormMethod, !0, K, L);
    if (Me) {
      lo(C, k, Me, { flushSync: z });
      return;
    }
    let Z = eu(V, W);
    if (((P = (L && L.preventScrollReset) === !0), ne && kt(ne.formMethod))) {
      ha(C, k, W, Z, V, z, ne);
      return;
    }
    X.set(C, { routeId: k, path: W }), ma(C, k, W, Z, V, z, ne);
  }
  async function ha(C, k, R, L, z, q, K) {
    if ((va(), X.delete(C), !L.route.action && !L.route.lazy)) {
      let se = ft(405, { method: K.formMethod, pathname: R, routeId: k });
      lo(C, k, se, { flushSync: q });
      return;
    }
    let V = S.fetchers.get(C);
    ln(C, V0(K, V), { flushSync: q });
    let W = new AbortController(),
      ne = wo(e.history, R, W.signal, K);
    j.set(C, W);
    let Me = D,
      Z = await yo("action", ne, L, z, i, o, s, u.v7_relativeSplatPath);
    if (ne.signal.aborted) {
      j.get(C) === W && j.delete(C);
      return;
    }
    if (u.v7_fetcherPersist && ve.has(C)) {
      if (Vn(Z) || Mr(Z)) {
        ln(C, fn(void 0));
        return;
      }
    } else {
      if (Vn(Z))
        if ((j.delete(C), M > Me)) {
          ln(C, fn(void 0));
          return;
        } else return B.add(C), ln(C, xo(K)), Nt(S, Z, { fetcherSubmission: K });
      if (Mr(Z)) {
        lo(C, k, Z.error);
        return;
      }
    }
    if (Wn(Z)) throw ft(400, { type: "defer-action" });
    let ce = S.navigation.location || S.location,
      Oe = wo(e.history, ce, W.signal),
      nt = a || l,
      Te = S.navigation.state !== "idle" ? _r(nt, S.navigation.location, s) : S.matches;
    ee(Te, "Didn't find any matches after fetcher action");
    let cr = ++D;
    I.set(C, cr);
    let ya = xo(K, Z.data);
    S.fetchers.set(C, ya);
    let [dr, sn] = Vd(
      e.history,
      S,
      Te,
      K,
      ce,
      !1,
      H,
      Y,
      ie,
      ve,
      X,
      B,
      nt,
      s,
      { [L.route.id]: Z.data },
      void 0
    );
    sn
      .filter((se) => se.key !== C)
      .forEach((se) => {
        let Ye = se.key,
          Ci = S.fetchers.get(Ye),
          Tv = xo(void 0, Ci ? Ci.data : void 0);
        S.fetchers.set(Ye, Tv), j.has(Ye) && an(Ye), se.controller && j.set(Ye, se.controller);
      }),
      Ve({ fetchers: new Map(S.fetchers) });
    let In = () => sn.forEach((se) => an(se.key));
    W.signal.addEventListener("abort", In);
    let {
      results: wa,
      loaderResults: ao,
      fetcherResults: xa
    } = await Ec(S.matches, Te, dr, sn, Oe);
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", In),
      I.delete(C),
      j.delete(C),
      sn.forEach((se) => j.delete(se.key));
    let fr = Zd(wa);
    if (fr) {
      if (fr.idx >= dr.length) {
        let se = sn[fr.idx - dr.length].key;
        B.add(se);
      }
      return Nt(S, fr.result);
    }
    let { loaderData: Ei, errors: le } = Qd(S, S.matches, dr, ao, void 0, sn, xa, Pe);
    if (S.fetchers.has(C)) {
      let se = fn(Z.data);
      S.fetchers.set(C, se);
    }
    kc(cr),
      S.navigation.state === "loading" && cr > M
        ? (ee($, "Expected pending action"),
          T && T.abort(),
          An(S.navigation.location, {
            matches: Te,
            loaderData: Ei,
            errors: le,
            fetchers: new Map(S.fetchers)
          }))
        : (Ve({
            errors: le,
            loaderData: Yd(S.loaderData, Ei, Te, le),
            fetchers: new Map(S.fetchers)
          }),
          (H = !1));
  }
  async function ma(C, k, R, L, z, q, K) {
    let V = S.fetchers.get(C);
    ln(C, xo(K, V ? V.data : void 0), { flushSync: q });
    let W = new AbortController(),
      ne = wo(e.history, R, W.signal);
    j.set(C, W);
    let Me = D,
      Z = await yo("loader", ne, L, z, i, o, s, u.v7_relativeSplatPath);
    if (
      (Wn(Z) && (Z = (await im(Z, ne.signal, !0)) || Z),
      j.get(C) === W && j.delete(C),
      !ne.signal.aborted)
    ) {
      if (ve.has(C)) {
        ln(C, fn(void 0));
        return;
      }
      if (Vn(Z))
        if (M > Me) {
          ln(C, fn(void 0));
          return;
        } else {
          B.add(C), await Nt(S, Z);
          return;
        }
      if (Mr(Z)) {
        lo(C, k, Z.error);
        return;
      }
      ee(!Wn(Z), "Unhandled fetcher deferred data"), ln(C, fn(Z.data));
    }
  }
  async function Nt(C, k, R) {
    let { submission: L, fetcherSubmission: z, replace: q } = R === void 0 ? {} : R;
    k.revalidate && (H = !0);
    let K = ti(C.location, k.location, { _isRedirect: !0 });
    if ((ee(K, "Expected a location on the redirect navigation"), n)) {
      let ce = !1;
      if (k.reloadDocument) ce = !0;
      else if (tm.test(k.location)) {
        const Oe = e.history.createURL(k.location);
        ce = Oe.origin !== t.location.origin || to(Oe.pathname, s) == null;
      }
      if (ce) {
        q ? t.location.replace(k.location) : t.location.assign(k.location);
        return;
      }
    }
    T = null;
    let V = q === !0 ? Ce.Replace : Ce.Push,
      { formMethod: W, formAction: ne, formEncType: Me } = C.navigation;
    !L && !z && W && ne && Me && (L = qd(C.navigation));
    let Z = L || z;
    if (T0.has(k.status) && Z && kt(Z.formMethod))
      await tt(V, K, { submission: Ee({}, Z, { formAction: k.location }), preventScrollReset: P });
    else {
      let ce = Ya(K, L);
      await tt(V, K, { overrideNavigation: ce, fetcherSubmission: z, preventScrollReset: P });
    }
  }
  async function Ec(C, k, R, L, z) {
    let q = await Promise.all([
        ...R.map((W) => yo("loader", z, W, k, i, o, s, u.v7_relativeSplatPath)),
        ...L.map((W) =>
          W.matches && W.match && W.controller
            ? yo(
                "loader",
                wo(e.history, W.path, W.controller.signal),
                W.match,
                W.matches,
                i,
                o,
                s,
                u.v7_relativeSplatPath
              )
            : { type: xe.error, error: ft(404, { pathname: W.path }) }
        )
      ]),
      K = q.slice(0, R.length),
      V = q.slice(R.length);
    return (
      await Promise.all([
        Jd(
          C,
          R,
          K,
          K.map(() => z.signal),
          !1,
          S.loaderData
        ),
        Jd(
          C,
          L.map((W) => W.match),
          V,
          L.map((W) => (W.controller ? W.controller.signal : null)),
          !0
        )
      ]),
      { results: q, loaderResults: K, fetcherResults: V }
    );
  }
  function va() {
    (H = !0),
      Y.push(...ga()),
      X.forEach((C, k) => {
        j.has(k) && (ie.push(k), an(k));
      });
  }
  function ln(C, k, R) {
    R === void 0 && (R = {}),
      S.fetchers.set(C, k),
      Ve({ fetchers: new Map(S.fetchers) }, { flushSync: (R && R.flushSync) === !0 });
  }
  function lo(C, k, R, L) {
    L === void 0 && (L = {});
    let z = Io(S.matches, k);
    xi(C),
      Ve(
        { errors: { [z.route.id]: R }, fetchers: new Map(S.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function Cc(C) {
    return (
      u.v7_fetcherPersist && (ke.set(C, (ke.get(C) || 0) + 1), ve.has(C) && ve.delete(C)),
      S.fetchers.get(C) || N0
    );
  }
  function xi(C) {
    let k = S.fetchers.get(C);
    j.has(C) && !(k && k.state === "loading" && I.has(C)) && an(C),
      X.delete(C),
      I.delete(C),
      B.delete(C),
      ve.delete(C),
      S.fetchers.delete(C);
  }
  function kv(C) {
    if (u.v7_fetcherPersist) {
      let k = (ke.get(C) || 0) - 1;
      k <= 0 ? (ke.delete(C), ve.add(C)) : ke.set(C, k);
    } else xi(C);
    Ve({ fetchers: new Map(S.fetchers) });
  }
  function an(C) {
    let k = j.get(C);
    ee(k, "Expected fetch controller: " + C), k.abort(), j.delete(C);
  }
  function $c(C) {
    for (let k of C) {
      let R = Cc(k),
        L = fn(R.data);
      S.fetchers.set(k, L);
    }
  }
  function bc() {
    let C = [],
      k = !1;
    for (let R of B) {
      let L = S.fetchers.get(R);
      ee(L, "Expected fetcher: " + R), L.state === "loading" && (B.delete(R), C.push(R), (k = !0));
    }
    return $c(C), k;
  }
  function kc(C) {
    let k = [];
    for (let [R, L] of I)
      if (L < C) {
        let z = S.fetchers.get(R);
        ee(z, "Expected fetcher: " + R), z.state === "loading" && (an(R), I.delete(R), k.push(R));
      }
    return $c(k), k.length > 0;
  }
  function Pv(C, k) {
    let R = S.blockers.get(C) || go;
    return ue.get(C) !== k && ue.set(C, k), R;
  }
  function Pc(C) {
    S.blockers.delete(C), ue.delete(C);
  }
  function Si(C, k) {
    let R = S.blockers.get(C) || go;
    ee(
      (R.state === "unblocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "blocked") ||
        (R.state === "blocked" && k.state === "proceeding") ||
        (R.state === "blocked" && k.state === "unblocked") ||
        (R.state === "proceeding" && k.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + k.state
    );
    let L = new Map(S.blockers);
    L.set(C, k), Ve({ blockers: L });
  }
  function Rc(C) {
    let { currentLocation: k, nextLocation: R, historyAction: L } = C;
    if (ue.size === 0) return;
    ue.size > 1 && Gr(!1, "A router only supports one blocker at a time");
    let z = Array.from(ue.entries()),
      [q, K] = z[z.length - 1],
      V = S.blockers.get(q);
    if (
      !(V && V.state === "proceeding") &&
      K({ currentLocation: k, nextLocation: R, historyAction: L })
    )
      return q;
  }
  function ga(C) {
    let k = [];
    return (
      Pe.forEach((R, L) => {
        (!C || C(L)) && (R.cancel(), k.push(L), Pe.delete(L));
      }),
      k
    );
  }
  function Rv(C, k, R) {
    if (((p = C), (w = k), (g = R || null), !v && S.navigation === Qa)) {
      v = !0;
      let L = Mc(S.location, S.matches);
      L != null && Ve({ restoreScrollPosition: L });
    }
    return () => {
      (p = null), (w = null), (g = null);
    };
  }
  function _c(C, k) {
    return (
      (g &&
        g(
          C,
          k.map((L) => s0(L, S.loaderData))
        )) ||
      C.key
    );
  }
  function _v(C, k) {
    if (p && w) {
      let R = _c(C, k);
      p[R] = w();
    }
  }
  function Mc(C, k) {
    if (p) {
      let R = _c(C, k),
        L = p[R];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Mv(C) {
    (i = {}), (a = Zs(C, o, void 0, i));
  }
  return (
    (b = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return S;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: sr,
      subscribe: ur,
      enableScrollRestoration: Rv,
      navigate: yi,
      fetch: pa,
      revalidate: da,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: Cc,
      deleteFetcher: kv,
      dispose: ze,
      getBlocker: Pv,
      deleteBlocker: Pc,
      _internalFetchControllers: j,
      _internalActiveDeferreds: Pe,
      _internalSetRoutes: Mv
    }),
    b
  );
}
function O0(e) {
  return (
    e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0))
  );
}
function Js(e, t, n, r, o, i, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let d of t)
      if ((s.push(d), d.route.id === l)) {
        u = d;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = lc(o || ".", ic(s, i), to(e.pathname, n) || e.pathname, a === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !sc(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (c.pathname = c.pathname === "/" ? n : Qt([n, c.pathname])),
    qn(c)
  );
}
function Wd(e, t, n, r) {
  if (!r || !O0(r)) return { path: n };
  if (r.formMethod && !B0(r.formMethod))
    return { path: n, error: ft(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: ft(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    l = e ? i.toUpperCase() : i.toLowerCase(),
    a = om(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!kt(l)) return o();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, w) => {
              let [v, x] = w;
              return (
                "" +
                g +
                v +
                "=" +
                x +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!kt(l)) return o();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0
          }
        };
      } catch {
        return o();
      }
    }
  }
  ee(typeof FormData == "function", "FormData is not available in this environment");
  let s, u;
  if (r.formData) (s = qs(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = qs(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Gd(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Gd(s));
    } catch {
      return o();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0
  };
  if (kt(c.formMethod)) return { path: n, submission: c };
  let d = rn(n);
  return (
    t && d.search && sc(d.search) && s.append("index", ""),
    (d.search = "?" + s),
    { path: qn(d), submission: c }
  );
}
function A0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Vd(e, t, n, r, o, i, l, a, s, u, c, d, p, g, w, v) {
  let x = v ? Object.values(v)[0] : w ? Object.values(w)[0] : void 0,
    m = e.createURL(t.location),
    h = e.createURL(o),
    y = v ? Object.keys(v)[0] : void 0,
    b = A0(n, y).filter(($, P) => {
      let { route: T } = $;
      if (T.lazy) return !0;
      if (T.loader == null) return !1;
      if (i)
        return T.loader.hydrate
          ? !0
          : t.loaderData[T.id] === void 0 && (!t.errors || t.errors[T.id] === void 0);
      if (I0(t.loaderData, t.matches[P], $) || a.some((A) => A === $.route.id)) return !0;
      let O = t.matches[P],
        U = $;
      return Hd(
        $,
        Ee({ currentUrl: m, currentParams: O.params, nextUrl: h, nextParams: U.params }, r, {
          actionResult: x,
          defaultShouldRevalidate:
            l ||
            m.pathname + m.search === h.pathname + h.search ||
            m.search !== h.search ||
            rm(O, U)
        })
      );
    }),
    S = [];
  return (
    c.forEach(($, P) => {
      if (i || !n.some((J) => J.route.id === $.routeId) || u.has(P)) return;
      let T = _r(p, $.path, g);
      if (!T) {
        S.push({
          key: P,
          routeId: $.routeId,
          path: $.path,
          matches: null,
          match: null,
          controller: null
        });
        return;
      }
      let O = t.fetchers.get(P),
        U = eu(T, $.path),
        A = !1;
      d.has(P)
        ? (A = !1)
        : s.includes(P)
        ? (A = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (A = l)
        : (A = Hd(
            U,
            Ee(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params
              },
              r,
              { actionResult: x, defaultShouldRevalidate: l }
            )
          )),
        A &&
          S.push({
            key: P,
            routeId: $.routeId,
            path: $.path,
            matches: T,
            match: U,
            controller: new AbortController()
          });
    }),
    [b, S]
  );
}
function I0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function rm(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Hd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Kd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  ee(o, "No route found in manifest");
  let i = {};
  for (let l in r) {
    let s = o[l] !== void 0 && l !== "hasErrorBoundary";
    Gr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !l0.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, Ee({}, t(o), { lazy: void 0 }));
}
async function yo(e, t, n, r, o, i, l, a, s) {
  s === void 0 && (s = {});
  let u,
    c,
    d,
    p = (v) => {
      let x,
        m = new Promise((h, y) => (x = y));
      return (
        (d = () => x()),
        t.signal.addEventListener("abort", d),
        Promise.race([v({ request: t, params: n.params, context: s.requestContext }), m])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) {
        let x,
          m = await Promise.all([
            p(v).catch((h) => {
              x = h;
            }),
            Kd(n.route, i, o)
          ]);
        if (x) throw x;
        c = m[0];
      } else if ((await Kd(n.route, i, o), (v = n.route[e]), v)) c = await p(v);
      else if (e === "action") {
        let x = new URL(t.url),
          m = x.pathname + x.search;
        throw ft(405, { method: t.method, pathname: m, routeId: n.route.id });
      } else return { type: xe.data, data: void 0 };
    else if (v) c = await p(v);
    else {
      let x = new URL(t.url),
        m = x.pathname + x.search;
      throw ft(404, { pathname: m });
    }
    ee(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
        "function. Please return a value or `null`."
    );
  } catch (v) {
    (u = xe.error), (c = v);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (U0(c)) {
    let v = c.status;
    if (M0.has(v)) {
      let m = c.headers.get("Location");
      if (
        (ee(m, "Redirects returned/thrown from loaders/actions must have a Location header"),
        !tm.test(m))
      )
        m = Js(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, m, a);
      else if (!s.isStaticRequest) {
        let h = new URL(t.url),
          y = m.startsWith("//") ? new URL(h.protocol + m) : new URL(m),
          E = to(y.pathname, l) != null;
        y.origin === h.origin && E && (m = y.pathname + y.search + y.hash);
      }
      if (s.isStaticRequest) throw (c.headers.set("Location", m), c);
      return {
        type: xe.redirect,
        status: v,
        location: m,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    if (s.isRouteRequest) throw { type: u === xe.error ? xe.error : xe.data, response: c };
    let x;
    try {
      let m = c.headers.get("Content-Type");
      m && /\bapplication\/json\b/.test(m)
        ? c.body == null
          ? (x = null)
          : (x = await c.json())
        : (x = await c.text());
    } catch (m) {
      return { type: xe.error, error: m };
    }
    return u === xe.error
      ? { type: u, error: new ac(v, c.statusText, x), headers: c.headers }
      : { type: xe.data, data: x, statusCode: c.status, headers: c.headers };
  }
  if (u === xe.error) return { type: u, error: c };
  if (j0(c)) {
    var g, w;
    return {
      type: xe.deferred,
      deferredData: c,
      statusCode: (g = c.init) == null ? void 0 : g.status,
      headers: ((w = c.init) == null ? void 0 : w.headers) && new Headers(c.init.headers)
    };
  }
  return { type: xe.data, data: c };
}
function wo(e, t, n, r) {
  let o = e.createURL(om(t)).toString(),
    i = { signal: n };
  if (r && kt(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (i.method = l.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })), (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = qs(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function qs(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Gd(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function F0(e, t, n, r, o) {
  let i = {},
    l = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let p = t[d].route.id;
      if ((ee(!Vn(c), "Cannot handle redirect results in processLoaderData"), Mr(c))) {
        let g = Io(e, p),
          w = c.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[g.route.id] == null && (l[g.route.id] = w),
          (i[p] = void 0),
          s || ((s = !0), (a = qh(c.error) ? c.error.status : 500)),
          c.headers && (u[p] = c.headers);
      } else
        Wn(c) ? (o.set(p, c.deferredData), (i[p] = c.deferredData.data)) : (i[p] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !s && (a = c.statusCode),
          c.headers && (u[p] = c.headers);
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function Qd(e, t, n, r, o, i, l, a) {
  let { loaderData: s, errors: u } = F0(t, n, r, o, a);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: p, controller: g } = i[c];
    ee(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
    let w = l[c];
    if (!(g && g.signal.aborted))
      if (Mr(w)) {
        let v = Io(e.matches, p == null ? void 0 : p.route.id);
        (u && u[v.route.id]) || (u = Ee({}, u, { [v.route.id]: w.error })), e.fetchers.delete(d);
      } else if (Vn(w)) ee(!1, "Unhandled fetcher revalidation redirect");
      else if (Wn(w)) ee(!1, "Unhandled fetcher deferred data");
      else {
        let v = fn(w.data);
        e.fetchers.set(d, v);
      }
  }
  return { loaderData: s, errors: u };
}
function Yd(e, t, n, r) {
  let o = Ee({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (o[l] = t[l])
        : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Io(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Xd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function ft(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        o && n && r
          ? (a =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (a = "defer() is not supported in actions")
          : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((l = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        o && n && r
          ? (a =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ac(e || 500, l, new Error(a), !0)
  );
}
function Zd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Vn(n)) return { result: n, idx: t };
  }
}
function om(e) {
  let t = typeof e == "string" ? rn(e) : e;
  return qn(Ee({}, t, { hash: "" }));
}
function z0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Wn(e) {
  return e.type === xe.deferred;
}
function Mr(e) {
  return e.type === xe.error;
}
function Vn(e) {
  return (e && e.type) === xe.redirect;
}
function j0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function U0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function B0(e) {
  return _0.has(e.toLowerCase());
}
function kt(e) {
  return P0.has(e.toLowerCase());
}
async function Jd(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !rm(u, s) && (i && i[s.route.id]) !== void 0;
    if (Wn(a) && (o || c)) {
      let d = r[l];
      ee(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await im(a, d, o).then((p) => {
          p && (n[l] = p || n[l]);
        });
    }
  }
}
async function im(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: xe.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: xe.error, error: o };
      }
    return { type: xe.data, data: e.deferredData.data };
  }
}
function sc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function eu(e, t) {
  let n = typeof t == "string" ? rn(t).search : t.search;
  if (e[e.length - 1].route.index && sc(n || "")) return e[e.length - 1];
  let r = Jh(e);
  return r[r.length - 1];
}
function qd(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: o, formData: i, json: l } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0
      };
  }
}
function Ya(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
      };
}
function W0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function xo(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
      };
}
function V0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function fn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function H0(e, t) {
  try {
    let n = e.sessionStorage.getItem(nm);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function K0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(nm, JSON.stringify(n));
    } catch (r) {
      Gr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ni.apply(this, arguments)
  );
}
const ra = f.createContext(null),
  lm = f.createContext(null),
  rr = f.createContext(null),
  oa = f.createContext(null),
  or = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  am = f.createContext(null);
function G0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pi() || ee(!1);
  let { basename: r, navigator: o } = f.useContext(rr),
    { hash: i, pathname: l, search: a } = um(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Qt([r, l])), o.createHref({ pathname: s, search: a, hash: i })
  );
}
function pi() {
  return f.useContext(oa) != null;
}
function ia() {
  return pi() || ee(!1), f.useContext(oa).location;
}
function sm(e) {
  f.useContext(rr).static || f.useLayoutEffect(e);
}
function Q0() {
  let { isDataRoute: e } = f.useContext(or);
  return e ? l1() : Y0();
}
function Y0() {
  pi() || ee(!1);
  let e = f.useContext(ra),
    { basename: t, future: n, navigator: r } = f.useContext(rr),
    { matches: o } = f.useContext(or),
    { pathname: i } = ia(),
    l = JSON.stringify(ic(o, n.v7_relativeSplatPath)),
    a = f.useRef(!1);
  return (
    sm(() => {
      a.current = !0;
    }),
    f.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = lc(u, JSON.parse(l), i, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Qt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, l, i, e]
    )
  );
}
function um(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = f.useContext(rr),
    { matches: o } = f.useContext(or),
    { pathname: i } = ia(),
    l = JSON.stringify(ic(o, r.v7_relativeSplatPath));
  return f.useMemo(() => lc(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function X0(e, t, n, r) {
  pi() || ee(!1);
  let { navigator: o } = f.useContext(rr),
    { matches: i } = f.useContext(or),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = ia(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? rn(t) : t;
    s === "/" || ((d = x.pathname) != null && d.startsWith(s)) || ee(!1), (c = x);
  } else c = u;
  let p = c.pathname || "/",
    g = p;
  if (s !== "/") {
    let x = s.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let w = _r(e, { pathname: g }),
    v = t1(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Qt([
              s,
              o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? s
                : Qt([
                    s,
                    o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
                  ])
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? f.createElement(
        oa.Provider,
        {
          value: {
            location: ni({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
            navigationType: Ce.Pop
          }
        },
        v
      )
    : v;
}
function Z0() {
  let e = i1(),
    t = qh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("h2", null, "Unexpected Application Error!"),
    f.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? f.createElement("pre", { style: o }, n) : null,
    i
  );
}
const J0 = f.createElement(Z0, null);
class q0 extends f.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          or.Provider,
          { value: this.props.routeContext },
          f.createElement(am.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function e1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = f.useContext(ra);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(or.Provider, { value: t }, r)
  );
}
function t1(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = l.findIndex((d) => d.route.id && (a == null ? void 0 : a[d.route.id]));
    c >= 0 || ee(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let d = l[c];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id)) {
        let { loaderData: p, errors: g } = n,
          w = d.route.loader && p[d.route.id] === void 0 && (!g || g[d.route.id] === void 0);
        if (d.route.lazy || w) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, d, p) => {
    let g,
      w = !1,
      v = null,
      x = null;
    n &&
      ((g = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || J0),
      s &&
        (u < 0 && p === 0
          ? (a1("route-fallback", !1), (w = !0), (x = null))
          : u === p && ((w = !0), (x = d.route.hydrateFallbackElement || null))));
    let m = t.concat(l.slice(0, p + 1)),
      h = () => {
        let y;
        return (
          g
            ? (y = v)
            : w
            ? (y = x)
            : d.route.Component
            ? (y = f.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          f.createElement(e1, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? f.createElement(q0, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 }
        })
      : h();
  }, null);
}
var cm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(cm || {}),
  Ol = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ol || {});
function n1(e) {
  let t = f.useContext(ra);
  return t || ee(!1), t;
}
function r1(e) {
  let t = f.useContext(lm);
  return t || ee(!1), t;
}
function o1(e) {
  let t = f.useContext(or);
  return t || ee(!1), t;
}
function dm(e) {
  let t = o1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function i1() {
  var e;
  let t = f.useContext(am),
    n = r1(Ol.UseRouteError),
    r = dm(Ol.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function l1() {
  let { router: e } = n1(cm.UseNavigateStable),
    t = dm(Ol.UseNavigateStable),
    n = f.useRef(!1);
  return (
    sm(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number" ? e.navigate(o) : e.navigate(o, ni({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const ef = {};
function a1(e, t, n) {
  !t && !ef[e] && (ef[e] = !0);
}
function s1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ce.Pop,
    navigator: i,
    static: l = !1,
    future: a
  } = e;
  pi() && ee(!1);
  let s = t.replace(/^\/*/, "/"),
    u = f.useMemo(
      () => ({ basename: s, navigator: i, static: l, future: ni({ v7_relativeSplatPath: !1 }, a) }),
      [s, a, i, l]
    );
  typeof r == "string" && (r = rn(r));
  let { pathname: c = "/", search: d = "", hash: p = "", state: g = null, key: w = "default" } = r,
    v = f.useMemo(() => {
      let x = to(c, s);
      return x == null
        ? null
        : { location: { pathname: x, search: d, hash: p, state: g, key: w }, navigationType: o };
    }, [s, c, d, p, g, w, o]);
  return v == null
    ? null
    : f.createElement(
        rr.Provider,
        { value: u },
        f.createElement(oa.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function u1(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: f.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: f.createElement(e.HydrateFallback),
        HydrateFallback: void 0
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: f.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ri() {
  return (
    (ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ri.apply(this, arguments)
  );
}
function c1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function d1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function f1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !d1(e);
}
const p1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
  ],
  h1 = "6";
try {
  window.__reactRouterVersion = h1;
} catch {}
function m1(e, t) {
  return L0({
    basename: t == null ? void 0 : t.basename,
    future: ri({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: r0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || v1(),
    routes: e,
    mapRouteProperties: u1,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function v1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ri({}, t, { errors: g1(t.errors) })), t;
}
function g1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new ac(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let l = new i(o.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const y1 = f.createContext({ isTransitioning: !1 }),
  w1 = f.createContext(new Map()),
  x1 = "startTransition",
  tf = Vf[x1],
  S1 = "flushSync",
  nf = n0[S1];
function E1(e) {
  tf ? tf(e) : e();
}
function So(e) {
  nf ? nf(e) : e();
}
class C1 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function $1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = f.useState(n.state),
    [l, a] = f.useState(),
    [s, u] = f.useState({ isTransitioning: !1 }),
    [c, d] = f.useState(),
    [p, g] = f.useState(),
    [w, v] = f.useState(),
    x = f.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = f.useCallback(
      ($) => {
        m ? E1($) : $();
      },
      [m]
    ),
    y = f.useCallback(
      ($, P) => {
        let { deletedFetchers: T, unstable_flushSync: O, unstable_viewTransitionOpts: U } = P;
        T.forEach((J) => x.current.delete(J)),
          $.fetchers.forEach((J, H) => {
            J.data !== void 0 && x.current.set(H, J.data);
          });
        let A = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!U || A) {
          O ? So(() => i($)) : h(() => i($));
          return;
        }
        if (O) {
          So(() => {
            p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: U.currentLocation,
                nextLocation: U.nextLocation
              });
          });
          let J = n.window.document.startViewTransition(() => {
            So(() => i($));
          });
          J.finished.finally(() => {
            So(() => {
              d(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            So(() => g(J));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            v({ state: $, currentLocation: U.currentLocation, nextLocation: U.nextLocation }))
          : (a($),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: U.currentLocation,
              nextLocation: U.nextLocation
            }));
      },
      [n.window, p, c, x, h]
    );
  f.useLayoutEffect(() => n.subscribe(y), [n, y]),
    f.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new C1());
    }, [s]),
    f.useEffect(() => {
      if (c && l && n.window) {
        let $ = l,
          P = c.promise,
          T = n.window.document.startViewTransition(async () => {
            h(() => i($)), await P;
          });
        T.finished.finally(() => {
          d(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(T);
      }
    }, [h, l, c, n.window]),
    f.useEffect(() => {
      c && l && o.location.key === l.location.key && c.resolve();
    }, [c, p, o.location, l]),
    f.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (a(w.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation
        }),
        v(void 0));
    }, [s.isTransitioning, w]),
    f.useEffect(() => {}, []);
  let E = f.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: ($) => n.navigate($),
        push: ($, P, T) =>
          n.navigate($, {
            state: P,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset
          }),
        replace: ($, P, T) =>
          n.navigate($, {
            replace: !0,
            state: P,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset
          })
      }),
      [n]
    ),
    b = n.basename || "/",
    S = f.useMemo(() => ({ router: n, navigator: E, static: !1, basename: b }), [n, E, b]);
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      ra.Provider,
      { value: S },
      f.createElement(
        lm.Provider,
        { value: o },
        f.createElement(
          w1.Provider,
          { value: x.current },
          f.createElement(
            y1.Provider,
            { value: s },
            f.createElement(
              s1,
              {
                basename: b,
                location: o.location,
                navigationType: o.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath }
              },
              o.initialized || n.future.v7_partialHydration
                ? f.createElement(b1, { routes: n.routes, future: n.future, state: o })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function b1(e) {
  let { routes: t, future: n, state: r } = e;
  return X0(t, void 0, r, n);
}
const k1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  P1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R1 = f.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d
      } = t,
      p = c1(t, p1),
      { basename: g } = f.useContext(rr),
      w,
      v = !1;
    if (typeof u == "string" && P1.test(u) && ((w = u), k1))
      try {
        let y = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          b = to(E.pathname, g);
        E.origin === y.origin && b != null ? (u = b + E.search + E.hash) : (v = !0);
      } catch {}
    let x = G0(u, { relative: o }),
      m = _1(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d
      });
    function h(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return f.createElement(
      "a",
      ri({}, p, { href: w || x, onClick: v || i ? r : h, ref: n, target: s })
    );
  });
var rf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(rf || (rf = {}));
var of;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(of || (of = {}));
function _1(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: a
    } = t === void 0 ? {} : t,
    s = Q0(),
    u = ia(),
    c = um(e, { relative: l });
  return f.useCallback(
    (d) => {
      if (f1(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : qn(u) === qn(c);
        s(e, {
          replace: p,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: a
        });
      }
    },
    [u, s, c, r, o, n, e, i, l, a]
  );
}
const M1 = { theme: "system", setTheme: () => null },
  fm = f.createContext(M1);
function T1({ children: e, defaultTheme: t = "system", storageKey: n = "vite-ui-theme", ...r }) {
  const [o, i] = f.useState(() => localStorage.getItem(n) || t);
  f.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const s = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      a.classList.add(s);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const l = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), i(a);
    }
  };
  return _.jsx(fm.Provider, { ...r, value: l, children: e });
}
const N1 = () => {
  const e = f.useContext(fm);
  if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var D1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ir = (e, t) => {
    const n = f.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: a = "",
          children: s,
          ...u
        },
        c
      ) =>
        f.createElement(
          "svg",
          {
            ref: c,
            ...D1,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${L1(e)}`, a].join(" "),
            ...u
          },
          [...t.map(([d, p]) => f.createElement(d, p)), ...(Array.isArray(s) ? s : [s])]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = ir("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = ir("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = ir("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = ir("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = ir("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = ir("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = ir("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    G.apply(this, arguments)
  );
}
function B1(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function la(...e) {
  return (t) => e.forEach((n) => B1(n, t));
}
function ut(...e) {
  return f.useCallback(la(...e), e);
}
const Qr = f.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = f.Children.toArray(n),
    i = o.find(V1);
  if (i) {
    const l = i.props.children,
      a = o.map((s) =>
        s === i
          ? f.Children.count(l) > 1
            ? f.Children.only(null)
            : f.isValidElement(l)
            ? l.props.children
            : null
          : s
      );
    return f.createElement(
      tu,
      G({}, r, { ref: t }),
      f.isValidElement(l) ? f.cloneElement(l, void 0, a) : null
    );
  }
  return f.createElement(tu, G({}, r, { ref: t }), n);
});
Qr.displayName = "Slot";
const tu = f.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return f.isValidElement(n)
    ? f.cloneElement(n, { ...H1(r, n.props), ref: t ? la(t, n.ref) : n.ref })
    : f.Children.count(n) > 1
    ? f.Children.only(null)
    : null;
});
tu.displayName = "SlotClone";
const W1 = ({ children: e }) => f.createElement(f.Fragment, null, e);
function V1(e) {
  return f.isValidElement(e) && e.type === W1;
}
function H1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = pm(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function K1() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = pm(e)) && (r && (r += " "), (r += t));
  return r;
}
const lf = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  af = K1,
  hm = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return af(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const { variants: o, defaultVariants: i } = t,
      l = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const p = lf(c) || lf(d);
        return o[u][p];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, p] = c;
          return p === void 0 || (u[d] = p), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: p, ...g } = c;
              return Object.entries(g).every((w) => {
                let [v, x] = w;
                return Array.isArray(x) ? x.includes({ ...i, ...a }[v]) : { ...i, ...a }[v] === x;
              })
                ? [...u, d, p]
                : u;
            }, []);
    return af(e, l, s, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  };
function mm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = mm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function G1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = mm(e)) && (r && (r += " "), (r += t));
  return r;
}
const uc = "-";
function Q1(e) {
  const t = X1(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(l) {
    const a = l.split(uc);
    return a[0] === "" && a.length !== 1 && a.shift(), vm(a, t) || Y1(l);
  }
  function i(l, a) {
    const s = n[l] || [];
    return a && r[l] ? [...s, ...r[l]] : s;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function vm(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? vm(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(uc);
  return (l = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : l.classGroupId;
}
const sf = /^\[(.+)\]$/;
function Y1(e) {
  if (sf.test(e)) {
    const t = sf.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function X1(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    J1(Object.entries(e.classGroups), n).forEach(([i, l]) => {
      nu(l, r, i, t);
    }),
    r
  );
}
function nu(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : uf(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Z1(o)) {
        nu(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, l]) => {
      nu(l, uf(t, i), n, r);
    });
  });
}
function uf(e, t) {
  let n = e;
  return (
    t.split(uc).forEach((r) => {
      n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Z1(e) {
  return e.isThemeGetter;
}
function J1(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([l, a]) => [t + l, a]))
            : i
        );
        return [n, o];
      })
    : e;
}
function q1(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let l = n.get(i);
      if (l !== void 0) return l;
      if ((l = r.get(i)) !== void 0) return o(i, l), l;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : o(i, l);
    }
  };
}
const gm = "!";
function ew(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (l) {
    const a = [];
    let s = 0,
      u = 0,
      c;
    for (let v = 0; v < l.length; v++) {
      let x = l[v];
      if (s === 0) {
        if (x === r && (n || l.slice(v, v + o) === t)) {
          a.push(l.slice(u, v)), (u = v + o);
          continue;
        }
        if (x === "/") {
          c = v;
          continue;
        }
      }
      x === "[" ? s++ : x === "]" && s--;
    }
    const d = a.length === 0 ? l : l.substring(u),
      p = d.startsWith(gm),
      g = p ? d.substring(1) : d,
      w = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
}
function tw(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function nw(e) {
  return { cache: q1(e.cacheSize), splitModifiers: ew(e), ...Q1(e) };
}
const rw = /\s+/;
function ow(e, t) {
  const { splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
    i = new Set();
  return e
    .trim()
    .split(rw)
    .map((l) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: c
      } = n(l);
      let d = r(c ? u.substring(0, c) : u),
        p = !!c;
      if (!d) {
        if (!c) return { isTailwindClass: !1, originalClassName: l };
        if (((d = r(u)), !d)) return { isTailwindClass: !1, originalClassName: l };
        p = !1;
      }
      const g = tw(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? g + gm : g,
        classGroupId: d,
        originalClassName: l,
        hasPostfixModifier: p
      };
    })
    .reverse()
    .filter((l) => {
      if (!l.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = l,
        c = a + s;
      return i.has(c) ? !1 : (i.add(c), o(s, u).forEach((d) => i.add(a + d)), !0);
    })
    .reverse()
    .map((l) => l.originalClassName)
    .join(" ");
}
function iw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = ym(t)) && (r && (r += " "), (r += n));
  return r;
}
function ym(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = ym(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function lw(e, ...t) {
  let n,
    r,
    o,
    i = l;
  function l(s) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = nw(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const c = ow(s, n);
    return o(s, c), c;
  }
  return function () {
    return i(iw.apply(null, arguments));
  };
}
function fe(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const wm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  aw = /^\d+\/\d+$/,
  sw = new Set(["px", "full", "screen"]),
  uw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  cw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  fw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  pw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Bt(e) {
  return Hn(e) || sw.has(e) || aw.test(e);
}
function cn(e) {
  return no(e, "length", Sw);
}
function Hn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ui(e) {
  return no(e, "number", Hn);
}
function Eo(e) {
  return !!e && Number.isInteger(Number(e));
}
function hw(e) {
  return e.endsWith("%") && Hn(e.slice(0, -1));
}
function Q(e) {
  return wm.test(e);
}
function dn(e) {
  return uw.test(e);
}
const mw = new Set(["length", "size", "percentage"]);
function vw(e) {
  return no(e, mw, xm);
}
function gw(e) {
  return no(e, "position", xm);
}
const yw = new Set(["image", "url"]);
function ww(e) {
  return no(e, yw, Cw);
}
function xw(e) {
  return no(e, "", Ew);
}
function Co() {
  return !0;
}
function no(e, t, n) {
  const r = wm.exec(e);
  return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
}
function Sw(e) {
  return cw.test(e) && !dw.test(e);
}
function xm() {
  return !1;
}
function Ew(e) {
  return fw.test(e);
}
function Cw(e) {
  return pw.test(e);
}
function $w() {
  const e = fe("colors"),
    t = fe("spacing"),
    n = fe("blur"),
    r = fe("brightness"),
    o = fe("borderColor"),
    i = fe("borderRadius"),
    l = fe("borderSpacing"),
    a = fe("borderWidth"),
    s = fe("contrast"),
    u = fe("grayscale"),
    c = fe("hueRotate"),
    d = fe("invert"),
    p = fe("gap"),
    g = fe("gradientColorStops"),
    w = fe("gradientColorStopPositions"),
    v = fe("inset"),
    x = fe("margin"),
    m = fe("opacity"),
    h = fe("padding"),
    y = fe("saturate"),
    E = fe("scale"),
    b = fe("sepia"),
    S = fe("skew"),
    $ = fe("space"),
    P = fe("translate"),
    T = () => ["auto", "contain", "none"],
    O = () => ["auto", "hidden", "clip", "visible", "scroll"],
    U = () => ["auto", Q, t],
    A = () => [Q, t],
    J = () => ["", Bt, cn],
    H = () => ["auto", Hn, Q],
    Y = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top"
    ],
    ie = () => ["solid", "dashed", "dotted", "double", "none"],
    j = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter"
    ],
    D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
    M = () => ["", "0", Q],
    I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
    B = () => [Hn, Ui],
    X = () => [Hn, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Co],
      spacing: [Bt, cn],
      blur: ["none", "", dn, Q],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dn, Q],
      borderSpacing: A(),
      borderWidth: J(),
      contrast: B(),
      grayscale: M(),
      hueRotate: X(),
      invert: M(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hw, cn],
      inset: U(),
      margin: U(),
      opacity: B(),
      padding: A(),
      saturate: B(),
      scale: B(),
      sepia: M(),
      skew: X(),
      space: A(),
      translate: A()
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", Q] }],
      container: ["container"],
      columns: [{ columns: [dn] }],
      "break-after": [{ "break-after": I() }],
      "break-before": [{ "break-before": I() }],
      "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden"
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
      "object-position": [{ object: [...Y(), Q] }],
      overflow: [{ overflow: O() }],
      "overflow-x": [{ "overflow-x": O() }],
      "overflow-y": [{ "overflow-y": O() }],
      overscroll: [{ overscroll: T() }],
      "overscroll-x": [{ "overscroll-x": T() }],
      "overscroll-y": [{ "overscroll-y": T() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Eo, Q] }],
      basis: [{ basis: U() }],
      "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
      grow: [{ grow: M() }],
      shrink: [{ shrink: M() }],
      order: [{ order: ["first", "last", "none", Eo, Q] }],
      "grid-cols": [{ "grid-cols": [Co] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Eo, Q] }, Q] }],
      "col-start": [{ "col-start": H() }],
      "col-end": [{ "col-end": H() }],
      "grid-rows": [{ "grid-rows": [Co] }],
      "row-start-end": [{ row: ["auto", { span: [Eo, Q] }, Q] }],
      "row-start": [{ "row-start": H() }],
      "row-end": [{ "row-end": H() }],
      "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...D()] }],
      "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
      "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
      "align-content": [{ content: ["normal", ...D(), "baseline"] }],
      "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
      "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
      "place-content": [{ "place-content": [...D(), "baseline"] }],
      "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
      "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
      p: [{ p: [h] }],
      px: [{ px: [h] }],
      py: [{ py: [h] }],
      ps: [{ ps: [h] }],
      pe: [{ pe: [h] }],
      pt: [{ pt: [h] }],
      pr: [{ pr: [h] }],
      pb: [{ pb: [h] }],
      pl: [{ pl: [h] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      "space-x": [{ "space-x": [$] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [$] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
      "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
      "max-w": [
        { "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", { screen: [dn] }, dn] }
      ],
      h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", dn, cn] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Ui
          ]
        }
      ],
      "font-family": [{ font: [Co] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q] }],
      "line-clamp": [{ "line-clamp": ["none", Hn, Ui] }],
      leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, Q] }],
      "list-image": [{ "list-image": ["none", Q] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [m] }],
      "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [m] }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", Bt, cn] }],
      "underline-offset": [{ "underline-offset": ["auto", Bt, Q] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: A() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            Q
          ]
        }
      ],
      whitespace: [
        { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", Q] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [m] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Y(), gw] }],
      "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
      "bg-size": [{ bg: ["auto", "cover", "contain", vw] }],
      "bg-image": [
        { bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, ww] }
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [g] }],
      "gradient-via": [{ via: [g] }],
      "gradient-to": [{ to: [g] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [m] }],
      "border-style": [{ border: [...ie(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [m] }],
      "divide-style": [{ divide: ie() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...ie()] }],
      "outline-offset": [{ "outline-offset": [Bt, Q] }],
      "outline-w": [{ outline: [Bt, cn] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: J() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [m] }],
      "ring-offset-w": [{ "ring-offset": [Bt, cn] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", dn, xw] }],
      "shadow-color": [{ shadow: [Co] }],
      opacity: [{ opacity: [m] }],
      "mix-blend": [{ "mix-blend": j() }],
      "bg-blend": [{ "bg-blend": j() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", dn, Q] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [y] }],
      sepia: [{ sepia: [b] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [m] }],
      "backdrop-saturate": [{ "backdrop-saturate": [y] }],
      "backdrop-sepia": [{ "backdrop-sepia": [b] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        { transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q] }
      ],
      duration: [{ duration: X() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
      delay: [{ delay: X() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [E] }],
      "scale-x": [{ "scale-x": [E] }],
      "scale-y": [{ "scale-y": [E] }],
      rotate: [{ rotate: [Eo, Q] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [S] }],
      "skew-y": [{ "skew-y": [S] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            Q
          ]
        }
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            Q
          ]
        }
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": A() }],
      "scroll-mx": [{ "scroll-mx": A() }],
      "scroll-my": [{ "scroll-my": A() }],
      "scroll-ms": [{ "scroll-ms": A() }],
      "scroll-me": [{ "scroll-me": A() }],
      "scroll-mt": [{ "scroll-mt": A() }],
      "scroll-mr": [{ "scroll-mr": A() }],
      "scroll-mb": [{ "scroll-mb": A() }],
      "scroll-ml": [{ "scroll-ml": A() }],
      "scroll-p": [{ "scroll-p": A() }],
      "scroll-px": [{ "scroll-px": A() }],
      "scroll-py": [{ "scroll-py": A() }],
      "scroll-ps": [{ "scroll-ps": A() }],
      "scroll-pe": [{ "scroll-pe": A() }],
      "scroll-pt": [{ "scroll-pt": A() }],
      "scroll-pr": [{ "scroll-pr": A() }],
      "scroll-pb": [{ "scroll-pb": A() }],
      "scroll-pl": [{ "scroll-pl": A() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Q] }],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Bt, cn, Ui] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction"
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl"
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l"
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml"
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl"
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] }
  };
}
const bw = lw($w);
function Ut(...e) {
  return bw(G1(e));
}
const kw = hm(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }
      },
      defaultVariants: { variant: "default", size: "default" }
    }
  ),
  Sm = f.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
    const l = r ? Qr : "button";
    return _.jsx(l, { className: Ut(kw({ variant: t, size: n, className: e })), ref: i, ...o });
  });
Sm.displayName = "Button";
function re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
  };
}
function hi(e, t = []) {
  let n = [];
  function r(i, l) {
    const a = f.createContext(l),
      s = n.length;
    n = [...n, l];
    function u(d) {
      const { scope: p, children: g, ...w } = d,
        v = (p == null ? void 0 : p[e][s]) || a,
        x = f.useMemo(() => w, Object.values(w));
      return f.createElement(v.Provider, { value: x }, g);
    }
    function c(d, p) {
      const g = (p == null ? void 0 : p[e][s]) || a,
        w = f.useContext(g);
      if (w) return w;
      if (l !== void 0) return l;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((l) => f.createContext(l));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || i;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (o.scopeName = e), [r, Pw(o, ...t)];
}
function Pw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const d = s(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function zt(e) {
  const t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Em({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Rw({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    a = zt(n),
    s = f.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [i, e, o, a]
    );
  return [l, s];
}
function Rw({ defaultProp: e, onChange: t }) {
  const n = f.useState(e),
    [r] = n,
    o = f.useRef(r),
    i = zt(t);
  return (
    f.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
const _w = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ],
  xt = _w.reduce((e, t) => {
    const n = f.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        a = i ? Qr : t;
      return (
        f.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        f.createElement(a, G({}, l, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Cm(e, t) {
  e && eo.flushSync(() => e.dispatchEvent(t));
}
function $m(e) {
  const t = e + "CollectionProvider",
    [n, r] = hi(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (g) => {
      const { scope: w, children: v } = g,
        x = Ct.useRef(null),
        m = Ct.useRef(new Map()).current;
      return Ct.createElement(o, { scope: w, itemMap: m, collectionRef: x }, v);
    },
    a = e + "CollectionSlot",
    s = Ct.forwardRef((g, w) => {
      const { scope: v, children: x } = g,
        m = i(a, v),
        h = ut(w, m.collectionRef);
      return Ct.createElement(Qr, { ref: h }, x);
    }),
    u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    d = Ct.forwardRef((g, w) => {
      const { scope: v, children: x, ...m } = g,
        h = Ct.useRef(null),
        y = ut(w, h),
        E = i(u, v);
      return (
        Ct.useEffect(() => (E.itemMap.set(h, { ref: h, ...m }), () => void E.itemMap.delete(h))),
        Ct.createElement(Qr, { [c]: "", ref: y }, x)
      );
    });
  function p(g) {
    const w = i(e + "CollectionConsumer", g);
    return Ct.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const m = Array.from(x.querySelectorAll(`[${c}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, b) => m.indexOf(E.ref.current) - m.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: l, Slot: s, ItemSlot: d }, p, r];
}
const Mw = f.createContext(void 0);
function bm(e) {
  const t = f.useContext(Mw);
  return e || t || "ltr";
}
function Tw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zt(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [n, t]);
}
const ru = "dismissableLayer.update",
  Nw = "dismissableLayer.pointerDownOutside",
  Dw = "dismissableLayer.focusOutside";
let cf;
const Lw = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  Ow = f.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: a,
        onDismiss: s,
        ...u
      } = e,
      c = f.useContext(Lw),
      [d, p] = f.useState(null),
      g =
        (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = f.useState({}),
      v = ut(t, (P) => p(P)),
      x = Array.from(c.layers),
      [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = x.indexOf(m),
      y = d ? x.indexOf(d) : -1,
      E = c.layersWithOutsidePointerEventsDisabled.size > 0,
      b = y >= h,
      S = Aw((P) => {
        const T = P.target,
          O = [...c.branches].some((U) => U.contains(T));
        !b || O || (i == null || i(P), a == null || a(P), P.defaultPrevented || s == null || s());
      }, g),
      $ = Iw((P) => {
        const T = P.target;
        [...c.branches].some((U) => U.contains(T)) ||
          (l == null || l(P), a == null || a(P), P.defaultPrevented || s == null || s());
      }, g);
    return (
      Tw((P) => {
        y === c.layers.size - 1 &&
          (o == null || o(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
      }, g),
      f.useEffect(() => {
        if (d)
          return (
            r &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((cf = g.body.style.pointerEvents), (g.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            df(),
            () => {
              r &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = cf);
            }
          );
      }, [d, g, r, c]),
      f.useEffect(
        () => () => {
          d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), df());
        },
        [d, c]
      ),
      f.useEffect(() => {
        const P = () => w({});
        return document.addEventListener(ru, P), () => document.removeEventListener(ru, P);
      }, []),
      f.createElement(
        xt.div,
        G({}, u, {
          ref: v,
          style: { pointerEvents: E ? (b ? "auto" : "none") : void 0, ...e.style },
          onFocusCapture: re(e.onFocusCapture, $.onFocusCapture),
          onBlurCapture: re(e.onBlurCapture, $.onBlurCapture),
          onPointerDownCapture: re(e.onPointerDownCapture, S.onPointerDownCapture)
        })
      )
    );
  });
function Aw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zt(e),
    r = f.useRef(!1),
    o = f.useRef(() => {});
  return (
    f.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              km(Nw, n, u, { discrete: !0 });
            };
            var s = c;
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = c),
                t.addEventListener("click", o.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Iw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zt(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      const o = (i) => {
        i.target && !r.current && km(Dw, n, { originalEvent: i }, { discrete: !1 });
      };
      return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function df() {
  const e = new CustomEvent(ru);
  document.dispatchEvent(e);
}
function km(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Cm(o, i) : o.dispatchEvent(i);
}
let Xa = 0;
function Fw() {
  f.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : ff()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : ff()
      ),
      Xa++,
      () => {
        Xa === 1 &&
          document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()),
          Xa--;
      }
    );
  }, []);
}
function ff() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const Za = "focusScope.autoFocusOnMount",
  Ja = "focusScope.autoFocusOnUnmount",
  pf = { bubbles: !1, cancelable: !0 },
  zw = f.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e,
      [a, s] = f.useState(null),
      u = zt(o),
      c = zt(i),
      d = f.useRef(null),
      p = ut(t, (v) => s(v)),
      g = f.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    f.useEffect(() => {
      if (r) {
        let h = function (S) {
            if (g.paused || !a) return;
            const $ = S.target;
            a.contains($) ? (d.current = $) : pn(d.current, { select: !0 });
          },
          y = function (S) {
            if (g.paused || !a) return;
            const $ = S.relatedTarget;
            $ !== null && (a.contains($) || pn(d.current, { select: !0 }));
          },
          E = function (S) {
            if (document.activeElement === document.body)
              for (const P of S) P.removedNodes.length > 0 && pn(a);
          };
        var v = h,
          x = y,
          m = E;
        document.addEventListener("focusin", h), document.addEventListener("focusout", y);
        const b = new MutationObserver(E);
        return (
          a && b.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", h),
              document.removeEventListener("focusout", y),
              b.disconnect();
          }
        );
      }
    }, [r, a, g.paused]),
      f.useEffect(() => {
        if (a) {
          mf.add(g);
          const v = document.activeElement;
          if (!a.contains(v)) {
            const m = new CustomEvent(Za, pf);
            a.addEventListener(Za, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (jw(Hw(Pm(a)), { select: !0 }), document.activeElement === v && pn(a));
          }
          return () => {
            a.removeEventListener(Za, u),
              setTimeout(() => {
                const m = new CustomEvent(Ja, pf);
                a.addEventListener(Ja, c),
                  a.dispatchEvent(m),
                  m.defaultPrevented || pn(v ?? document.body, { select: !0 }),
                  a.removeEventListener(Ja, c),
                  mf.remove(g);
              }, 0);
          };
        }
      }, [a, u, c, g]);
    const w = f.useCallback(
      (v) => {
        if ((!n && !r) || g.paused) return;
        const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          m = document.activeElement;
        if (x && m) {
          const h = v.currentTarget,
            [y, E] = Uw(h);
          y && E
            ? !v.shiftKey && m === E
              ? (v.preventDefault(), n && pn(y, { select: !0 }))
              : v.shiftKey && m === y && (v.preventDefault(), n && pn(E, { select: !0 }))
            : m === h && v.preventDefault();
        }
      },
      [n, r, g.paused]
    );
    return f.createElement(xt.div, G({ tabIndex: -1 }, l, { ref: p, onKeyDown: w }));
  });
function jw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((pn(r, { select: t }), document.activeElement !== n)) return;
}
function Uw(e) {
  const t = Pm(e),
    n = hf(t, e),
    r = hf(t.reverse(), e);
  return [n, r];
}
function Pm(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function hf(e, t) {
  for (const n of e) if (!Bw(n, { upTo: t })) return n;
}
function Bw(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ww(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ww(e) && t && e.select();
  }
}
const mf = Vw();
function Vw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = vf(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = vf(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function vf(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hw(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Yr = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {},
  Kw = Vf["useId".toString()] || (() => {});
let Gw = 0;
function ou(e) {
  const [t, n] = f.useState(Kw());
  return (
    Yr(() => {
      e || n((r) => r ?? String(Gw++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Qw = ["top", "right", "bottom", "left"],
  Mn = Math.min,
  ot = Math.max,
  Al = Math.round,
  Bi = Math.floor,
  Tn = (e) => ({ x: e, y: e }),
  Yw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xw = { start: "end", end: "start" };
function iu(e, t, n) {
  return ot(e, Mn(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function en(e) {
  return e.split("-")[0];
}
function ro(e) {
  return e.split("-")[1];
}
function cc(e) {
  return e === "x" ? "y" : "x";
}
function dc(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(en(e)) ? "y" : "x";
}
function fc(e) {
  return cc(oo(e));
}
function Zw(e, t, n) {
  n === void 0 && (n = !1);
  const r = ro(e),
    o = fc(e),
    i = dc(o);
  let l =
    o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Il(l)), [l, Il(l)];
}
function Jw(e) {
  const t = Il(e);
  return [lu(e), t, lu(t)];
}
function lu(e) {
  return e.replace(/start|end/g, (t) => Xw[t]);
}
function qw(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function ex(e, t, n, r) {
  const o = ro(e);
  let i = qw(en(e), n === "start", r);
  return o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(lu)))), i;
}
function Il(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yw[t]);
}
function tx(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Rm(e) {
  return typeof e != "number" ? tx(e) : { top: e, right: e, bottom: e, left: e };
}
function Fl(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
function gf(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = oo(t),
    l = fc(t),
    a = dc(l),
    s = en(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    p = r[a] / 2 - o[a] / 2;
  let g;
  switch (s) {
    case "top":
      g = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: c, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: d };
      break;
    case "left":
      g = { x: r.x - o.width, y: d };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (ro(t)) {
    case "start":
      g[l] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += p * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const nx = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: l } = n,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = gf(u, r, s),
    p = r,
    g = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: x, fn: m } = a[v],
      {
        x: h,
        y,
        data: E,
        reset: b
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: p,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t }
      });
    (c = h ?? c),
      (d = y ?? d),
      (g = { ...g, [x]: { ...g[x], ...E } }),
      b &&
        w <= 50 &&
        (w++,
        typeof b == "object" &&
          (b.placement && (p = b.placement),
          b.rects &&
            (u =
              b.rects === !0
                ? await l.getElementRects({ reference: e, floating: t, strategy: o })
                : b.rects),
          ({ x: c, y: d } = gf(u, p, s))),
        (v = -1));
  }
  return { x: c, y: d, placement: p, strategy: o, middlewareData: g };
};
async function oi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: p = !1,
      padding: g = 0
    } = qt(t, e),
    w = Rm(g),
    x = a[p ? (d === "floating" ? "reference" : "floating") : d],
    m = Fl(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: s
      })
    ),
    h = d === "floating" ? { ...l.floating, x: r, y: o } : l.reference,
    y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = Fl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: h,
            offsetParent: y,
            strategy: s
          })
        : h
    );
  return {
    top: (m.top - b.top + w.top) / E.y,
    bottom: (b.bottom - m.bottom + w.bottom) / E.y,
    left: (m.left - b.left + w.left) / E.x,
    right: (b.right - m.right + w.right) / E.x
  };
}
const rx = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: s } = t,
        { element: u, padding: c = 0 } = qt(e, t) || {};
      if (u == null) return {};
      const d = Rm(c),
        p = { x: n, y: r },
        g = fc(o),
        w = dc(g),
        v = await l.getDimensions(u),
        x = g === "y",
        m = x ? "top" : "left",
        h = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        E = i.reference[w] + i.reference[g] - p[g] - i.floating[w],
        b = p[g] - i.reference[g],
        S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
      let $ = S ? S[y] : 0;
      (!$ || !(await (l.isElement == null ? void 0 : l.isElement(S)))) &&
        ($ = a.floating[y] || i.floating[w]);
      const P = E / 2 - b / 2,
        T = $ / 2 - v[w] / 2 - 1,
        O = Mn(d[m], T),
        U = Mn(d[h], T),
        A = O,
        J = $ - v[w] - U,
        H = $ / 2 - v[w] / 2 + P,
        Y = iu(A, H, J),
        ie =
          !s.arrow &&
          ro(o) != null &&
          H !== Y &&
          i.reference[w] / 2 - (H < A ? O : U) - v[w] / 2 < 0,
        j = ie ? (H < A ? H - A : H - J) : 0;
      return {
        [g]: p[g] + j,
        data: { [g]: Y, centerOffset: H - Y - j, ...(ie && { alignmentOffset: j }) },
        reset: ie
      };
    }
  }),
  ox = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: a,
              platform: s,
              elements: u
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: p,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...x
            } = qt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = en(o),
            h = en(a) === a,
            y = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            E = p || (h || !v ? [Il(a)] : Jw(a));
          !p && w !== "none" && E.push(...ex(a, v, w, y));
          const b = [a, ...E],
            S = await oi(t, x),
            $ = [];
          let P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && $.push(S[m]), d)) {
            const A = Zw(o, l, y);
            $.push(S[A[0]], S[A[1]]);
          }
          if (((P = [...P, { placement: o, overflows: $ }]), !$.every((A) => A <= 0))) {
            var T, O;
            const A = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1,
              J = b[A];
            if (J) return { data: { index: A, overflows: P }, reset: { placement: J } };
            let H =
              (O = P.filter((Y) => Y.overflows[0] <= 0).sort(
                (Y, ie) => Y.overflows[1] - ie.overflows[1]
              )[0]) == null
                ? void 0
                : O.placement;
            if (!H)
              switch (g) {
                case "bestFit": {
                  var U;
                  const Y =
                    (U = P.map((ie) => [
                      ie.placement,
                      ie.overflows.filter((j) => j > 0).reduce((j, D) => j + D, 0)
                    ]).sort((ie, j) => ie[1] - j[1])[0]) == null
                      ? void 0
                      : U[0];
                  Y && (H = Y);
                  break;
                }
                case "initialPlacement":
                  H = a;
                  break;
              }
            if (o !== H) return { reset: { placement: H } };
          }
          return {};
        }
      }
    );
  };
function yf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wf(e) {
  return Qw.some((t) => e[t] >= 0);
}
const ix = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = qt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await oi(t, { ...o, elementContext: "reference" }),
              l = yf(i, n.reference);
            return { data: { referenceHiddenOffsets: l, referenceHidden: wf(l) } };
          }
          case "escaped": {
            const i = await oi(t, { ...o, altBoundary: !0 }),
              l = yf(i, n.floating);
            return { data: { escapedOffsets: l, escaped: wf(l) } };
          }
          default:
            return {};
        }
      }
    }
  );
};
async function lx(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = en(n),
    a = ro(n),
    s = oo(n) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    c = i && s ? -1 : 1,
    d = qt(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: w
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    s ? { x: g * c, y: p * u } : { x: p * u, y: g * c }
  );
}
const ax = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: l, middlewareData: a } = t,
            s = await lx(t, e);
          return l === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
        }
      }
    );
  },
  sx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: m, y: h } = x;
                  return { x: m, y: h };
                }
              },
              ...s
            } = qt(e, t),
            u = { x: n, y: r },
            c = await oi(t, s),
            d = oo(en(o)),
            p = cc(d);
          let g = u[p],
            w = u[d];
          if (i) {
            const x = p === "y" ? "top" : "left",
              m = p === "y" ? "bottom" : "right",
              h = g + c[x],
              y = g - c[m];
            g = iu(h, g, y);
          }
          if (l) {
            const x = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              h = w + c[x],
              y = w - c[m];
            w = iu(h, w, y);
          }
          const v = a.fn({ ...t, [p]: g, [d]: w });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        }
      }
    );
  },
  ux = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: a = 0, mainAxis: s = !0, crossAxis: u = !0 } = qt(e, t),
            c = { x: n, y: r },
            d = oo(o),
            p = cc(d);
          let g = c[p],
            w = c[d];
          const v = qt(a, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (s) {
            const y = p === "y" ? "height" : "width",
              E = i.reference[p] - i.floating[y] + x.mainAxis,
              b = i.reference[p] + i.reference[y] - x.mainAxis;
            g < E ? (g = E) : g > b && (g = b);
          }
          if (u) {
            var m, h;
            const y = p === "y" ? "width" : "height",
              E = ["top", "left"].includes(en(o)),
              b =
                i.reference[d] -
                i.floating[y] +
                ((E && ((m = l.offset) == null ? void 0 : m[d])) || 0) +
                (E ? 0 : x.crossAxis),
              S =
                i.reference[d] +
                i.reference[y] +
                (E ? 0 : ((h = l.offset) == null ? void 0 : h[d]) || 0) -
                (E ? x.crossAxis : 0);
            w < b ? (w = b) : w > S && (w = S);
          }
          return { [p]: g, [d]: w };
        }
      }
    );
  },
  cx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: l = () => {}, ...a } = qt(e, t),
            s = await oi(t, a),
            u = en(n),
            c = ro(n),
            d = oo(n) === "y",
            { width: p, height: g } = r.floating;
          let w, v;
          u === "top" || u === "bottom"
            ? ((w = u),
              (v =
                c === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((v = u), (w = c === "end" ? "top" : "bottom"));
          const x = g - s[w],
            m = p - s[v],
            h = !t.middlewareData.shift;
          let y = x,
            E = m;
          if (d) {
            const S = p - s.left - s.right;
            E = c || h ? Mn(m, S) : S;
          } else {
            const S = g - s.top - s.bottom;
            y = c || h ? Mn(x, S) : S;
          }
          if (h && !c) {
            const S = ot(s.left, 0),
              $ = ot(s.right, 0),
              P = ot(s.top, 0),
              T = ot(s.bottom, 0);
            d
              ? (E = p - 2 * (S !== 0 || $ !== 0 ? S + $ : ot(s.left, s.right)))
              : (y = g - 2 * (P !== 0 || T !== 0 ? P + T : ot(s.top, s.bottom)));
          }
          await l({ ...t, availableWidth: E, availableHeight: y });
          const b = await o.getDimensions(i.floating);
          return p !== b.width || g !== b.height ? { reset: { rects: !0 } } : {};
        }
      }
    );
  };
function Nn(e) {
  return _m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function on(e) {
  var t;
  return (t = (_m(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function _m(e) {
  return e instanceof Node || e instanceof at(e).Node;
}
function tn(e) {
  return e instanceof Element || e instanceof at(e).Element;
}
function jt(e) {
  return e instanceof HTMLElement || e instanceof at(e).HTMLElement;
}
function xf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function mi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = wt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function dx(e) {
  return ["table", "td", "th"].includes(Nn(e));
}
function pc(e) {
  const t = hc(),
    n = wt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r))
  );
}
function fx(e) {
  let t = Xr(e);
  for (; jt(t) && !aa(t); ) {
    if (pc(t)) return t;
    t = Xr(t);
  }
  return null;
}
function hc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function aa(e) {
  return ["html", "body", "#document"].includes(Nn(e));
}
function wt(e) {
  return at(e).getComputedStyle(e);
}
function sa(e) {
  return tn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xr(e) {
  if (Nn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (xf(e) && e.host) || on(e);
  return xf(t) ? t.host : t;
}
function Mm(e) {
  const t = Xr(e);
  return aa(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : jt(t) && mi(t) ? t : Mm(t);
}
function ii(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Mm(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = at(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        mi(o) ? o : [],
        l.frameElement && n ? ii(l.frameElement) : []
      )
    : t.concat(o, ii(o, [], n));
}
function Tm(e) {
  const t = wt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = jt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    a = Al(n) !== i || Al(r) !== l;
  return a && ((n = i), (r = l)), { width: n, height: r, $: a };
}
function mc(e) {
  return tn(e) ? e : e.contextElement;
}
function Ir(e) {
  const t = mc(e);
  if (!jt(t)) return Tn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Tm(t);
  let l = (i ? Al(n.width) : n.width) / r,
    a = (i ? Al(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: l, y: a }
  );
}
const px = Tn(0);
function Nm(e) {
  const t = at(e);
  return !hc() || !t.visualViewport
    ? px
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function hx(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = mc(e);
  let l = Tn(1);
  t && (r ? tn(r) && (l = Ir(r)) : (l = Ir(e)));
  const a = hx(i, n, r) ? Nm(i) : Tn(0);
  let s = (o.left + a.x) / l.x,
    u = (o.top + a.y) / l.y,
    c = o.width / l.x,
    d = o.height / l.y;
  if (i) {
    const p = at(i),
      g = r && tn(r) ? at(r) : r;
    let w = p,
      v = w.frameElement;
    for (; v && r && g !== w; ) {
      const x = Ir(v),
        m = v.getBoundingClientRect(),
        h = wt(v),
        y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * x.x,
        E = m.top + (v.clientTop + parseFloat(h.paddingTop)) * x.y;
      (s *= x.x),
        (u *= x.y),
        (c *= x.x),
        (d *= x.y),
        (s += y),
        (u += E),
        (w = at(v)),
        (v = w.frameElement);
    }
  }
  return Fl({ width: c, height: d, x: s, y: u });
}
const mx = [":popover-open", ":modal"];
function Dm(e) {
  return mx.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vx(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    l = on(r),
    a = t ? Dm(t.floating) : !1;
  if (r === l || (a && i)) return n;
  let s = { scrollLeft: 0, scrollTop: 0 },
    u = Tn(1);
  const c = Tn(0),
    d = jt(r);
  if ((d || (!d && !i)) && ((Nn(r) !== "body" || mi(l)) && (s = sa(r)), jt(r))) {
    const p = er(r);
    (u = Ir(r)), (c.x = p.x + r.clientLeft), (c.y = p.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - s.scrollLeft * u.x + c.x,
    y: n.y * u.y - s.scrollTop * u.y + c.y
  };
}
function gx(e) {
  return Array.from(e.getClientRects());
}
function Lm(e) {
  return er(on(e)).left + sa(e).scrollLeft;
}
function yx(e) {
  const t = on(e),
    n = sa(e),
    r = e.ownerDocument.body,
    o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Lm(e);
  const a = -n.scrollTop;
  return (
    wt(r).direction === "rtl" && (l += ot(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function wx(e, t) {
  const n = at(e),
    r = on(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = hc();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function xx(e, t) {
  const n = er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = jt(e) ? Ir(e) : Tn(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    s = o * i.x,
    u = r * i.y;
  return { width: l, height: a, x: s, y: u };
}
function Sf(e, t, n) {
  let r;
  if (t === "viewport") r = wx(e, n);
  else if (t === "document") r = yx(on(e));
  else if (tn(t)) r = xx(t, n);
  else {
    const o = Nm(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Fl(r);
}
function Om(e, t) {
  const n = Xr(e);
  return n === t || !tn(n) || aa(n) ? !1 : wt(n).position === "fixed" || Om(n, t);
}
function Sx(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ii(e, [], !1).filter((a) => tn(a) && Nn(a) !== "body"),
    o = null;
  const i = wt(e).position === "fixed";
  let l = i ? Xr(e) : e;
  for (; tn(l) && !aa(l); ) {
    const a = wt(l),
      s = pc(l);
    !s && a.position === "fixed" && (o = null),
      (
        i
          ? !s && !o
          : (!s && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ||
            (mi(l) && !s && Om(e, l))
      )
        ? (r = r.filter((c) => c !== l))
        : (o = a),
      (l = Xr(l));
  }
  return t.set(e, r), r;
}
function Ex(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [...(n === "clippingAncestors" ? Sx(t, this._c) : [].concat(n)), r],
    a = l[0],
    s = l.reduce((u, c) => {
      const d = Sf(t, c, o);
      return (
        (u.top = ot(d.top, u.top)),
        (u.right = Mn(d.right, u.right)),
        (u.bottom = Mn(d.bottom, u.bottom)),
        (u.left = ot(d.left, u.left)),
        u
      );
    }, Sf(t, a, o));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}
function Cx(e) {
  const { width: t, height: n } = Tm(e);
  return { width: t, height: n };
}
function $x(e, t, n) {
  const r = jt(t),
    o = on(t),
    i = n === "fixed",
    l = er(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = Tn(0);
  if (r || (!r && !i))
    if (((Nn(t) !== "body" || mi(o)) && (a = sa(t)), r)) {
      const d = er(t, !0, i, t);
      (s.x = d.x + t.clientLeft), (s.y = d.y + t.clientTop);
    } else o && (s.x = Lm(o));
  const u = l.left + a.scrollLeft - s.x,
    c = l.top + a.scrollTop - s.y;
  return { x: u, y: c, width: l.width, height: l.height };
}
function Ef(e, t) {
  return !jt(e) || wt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Am(e, t) {
  const n = at(e);
  if (!jt(e) || Dm(e)) return n;
  let r = Ef(e, t);
  for (; r && dx(r) && wt(r).position === "static"; ) r = Ef(r, t);
  return r && (Nn(r) === "html" || (Nn(r) === "body" && wt(r).position === "static" && !pc(r)))
    ? n
    : r || fx(e) || n;
}
const bx = async function (e) {
  const t = this.getOffsetParent || Am,
    n = this.getDimensions;
  return {
    reference: $x(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, ...(await n(e.floating)) }
  };
};
function kx(e) {
  return wt(e).direction === "rtl";
}
const Px = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vx,
  getDocumentElement: on,
  getClippingRect: Ex,
  getOffsetParent: Am,
  getElementRects: bx,
  getClientRects: gx,
  getDimensions: Cx,
  getScale: Ir,
  isElement: tn,
  isRTL: kx
};
function Rx(e, t) {
  let n = null,
    r;
  const o = on(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: u, top: c, width: d, height: p } = e.getBoundingClientRect();
    if ((a || t(), !d || !p)) return;
    const g = Bi(c),
      w = Bi(o.clientWidth - (u + d)),
      v = Bi(o.clientHeight - (c + p)),
      x = Bi(u),
      h = {
        rootMargin: -g + "px " + -w + "px " + -v + "px " + -x + "px",
        threshold: ot(0, Mn(1, s)) || 1
      };
    let y = !0;
    function E(b) {
      const S = b[0].intersectionRatio;
      if (S !== s) {
        if (!y) return l();
        S
          ? l(!1, S)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(E, { ...h, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, h);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function _x(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1
    } = r,
    u = mc(e),
    c = o || i ? [...(u ? ii(u) : []), ...ii(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }), i && m.addEventListener("resize", n);
  });
  const d = u && a ? Rx(u, n) : null;
  let p = -1,
    g = null;
  l &&
    ((g = new ResizeObserver((m) => {
      let [h] = m;
      h &&
        h.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var y;
          (y = g) == null || y.observe(t);
        }))),
        n();
    })),
    u && !s && g.observe(u),
    g.observe(t));
  let w,
    v = s ? er(e) : null;
  s && x();
  function x() {
    const m = er(e);
    v && (m.x !== v.x || m.y !== v.y || m.width !== v.width || m.height !== v.height) && n(),
      (v = m),
      (w = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((h) => {
        o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
      }),
        d == null || d(),
        (m = g) == null || m.disconnect(),
        (g = null),
        s && cancelAnimationFrame(w);
    }
  );
}
const Mx = sx,
  Tx = ox,
  Nx = cx,
  Dx = ix,
  Cf = rx,
  Lx = ux,
  Ox = (e, t, n) => {
    const r = new Map(),
      o = { platform: Px, ...n },
      i = { ...o.platform, _c: r };
    return nx(e, t, { ...o, platform: i });
  },
  Ax = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Cf({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Cf({ element: r, padding: o }).fn(n)
          : {};
      }
    };
  };
var al = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function zl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!zl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !zl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Im(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $f(e, t) {
  const n = Im(e);
  return Math.round(t * n) / n;
}
function bf(e) {
  const t = f.useRef(e);
  return (
    al(() => {
      t.current = e;
    }),
    t
  );
}
function Ix(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: a = !0,
      whileElementsMounted: s,
      open: u
    } = e,
    [c, d] = f.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1
    }),
    [p, g] = f.useState(r);
  zl(p, r) || g(r);
  const [w, v] = f.useState(null),
    [x, m] = f.useState(null),
    h = f.useCallback((j) => {
      j !== S.current && ((S.current = j), v(j));
    }, []),
    y = f.useCallback((j) => {
      j !== $.current && (($.current = j), m(j));
    }, []),
    E = i || w,
    b = l || x,
    S = f.useRef(null),
    $ = f.useRef(null),
    P = f.useRef(c),
    T = s != null,
    O = bf(s),
    U = bf(o),
    A = f.useCallback(() => {
      if (!S.current || !$.current) return;
      const j = { placement: t, strategy: n, middleware: p };
      U.current && (j.platform = U.current),
        Ox(S.current, $.current, j).then((D) => {
          const M = { ...D, isPositioned: !0 };
          J.current &&
            !zl(P.current, M) &&
            ((P.current = M),
            eo.flushSync(() => {
              d(M);
            }));
        });
    }, [p, t, n, U]);
  al(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((j) => ({ ...j, isPositioned: !1 })));
  }, [u]);
  const J = f.useRef(!1);
  al(
    () => (
      (J.current = !0),
      () => {
        J.current = !1;
      }
    ),
    []
  ),
    al(() => {
      if ((E && (S.current = E), b && ($.current = b), E && b)) {
        if (O.current) return O.current(E, b, A);
        A();
      }
    }, [E, b, A, O, T]);
  const H = f.useMemo(
      () => ({ reference: S, floating: $, setReference: h, setFloating: y }),
      [h, y]
    ),
    Y = f.useMemo(() => ({ reference: E, floating: b }), [E, b]),
    ie = f.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!Y.floating) return j;
      const D = $f(Y.floating, c.x),
        M = $f(Y.floating, c.y);
      return a
        ? {
            ...j,
            transform: "translate(" + D + "px, " + M + "px)",
            ...(Im(Y.floating) >= 1.5 && { willChange: "transform" })
          }
        : { position: n, left: D, top: M };
    }, [n, a, Y.floating, c.x, c.y]);
  return f.useMemo(
    () => ({ ...c, update: A, refs: H, elements: Y, floatingStyles: ie }),
    [c, A, H, Y, ie]
  );
}
function Fx(e) {
  const [t, n] = f.useState(void 0);
  return (
    Yr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, a;
          if ("borderBoxSize" in i) {
            const s = i.borderBoxSize,
              u = Array.isArray(s) ? s[0] : s;
            (l = u.inlineSize), (a = u.blockSize);
          } else (l = e.offsetWidth), (a = e.offsetHeight);
          n({ width: l, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Fm = "Popper",
  [zm, jm] = hi(Fm),
  [zx, Um] = zm(Fm),
  jx = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = f.useState(null);
    return f.createElement(zx, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  Ux = "PopperAnchor",
  Bx = f.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Um(Ux, n),
      l = f.useRef(null),
      a = ut(t, l);
    return (
      f.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : f.createElement(xt.div, G({}, o, { ref: a }))
    );
  }),
  Bm = "PopperContent",
  [Wx, A2] = zm(Bm),
  Vx = f.forwardRef((e, t) => {
    var n, r, o, i, l, a, s, u;
    const {
        __scopePopper: c,
        side: d = "bottom",
        sideOffset: p = 0,
        align: g = "center",
        alignOffset: w = 0,
        arrowPadding: v = 0,
        avoidCollisions: x = !0,
        collisionBoundary: m = [],
        collisionPadding: h = 0,
        sticky: y = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: b = "optimized",
        onPlaced: S,
        ...$
      } = e,
      P = Um(Bm, c),
      [T, O] = f.useState(null),
      U = ut(t, (tt) => O(tt)),
      [A, J] = f.useState(null),
      H = Fx(A),
      Y = (n = H == null ? void 0 : H.width) !== null && n !== void 0 ? n : 0,
      ie = (r = H == null ? void 0 : H.height) !== null && r !== void 0 ? r : 0,
      j = d + (g !== "center" ? "-" + g : ""),
      D = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h },
      M = Array.isArray(m) ? m : [m],
      I = M.length > 0,
      B = { padding: D, boundary: M.filter(Hx), altBoundary: I },
      {
        refs: X,
        floatingStyles: ke,
        placement: ve,
        isPositioned: Pe,
        middlewareData: ue
      } = Ix({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...tt) => _x(...tt, { animationFrame: b === "always" }),
        elements: { reference: P.anchor },
        middleware: [
          ax({ mainAxis: p + ie, alignmentAxis: w }),
          x && Mx({ mainAxis: !0, crossAxis: !1, limiter: y === "partial" ? Lx() : void 0, ...B }),
          x && Tx({ ...B }),
          Nx({
            ...B,
            apply: ({ elements: tt, rects: wi, availableWidth: fa, availableHeight: pa }) => {
              const { width: ha, height: ma } = wi.reference,
                Nt = tt.floating.style;
              Nt.setProperty("--radix-popper-available-width", `${fa}px`),
                Nt.setProperty("--radix-popper-available-height", `${pa}px`),
                Nt.setProperty("--radix-popper-anchor-width", `${ha}px`),
                Nt.setProperty("--radix-popper-anchor-height", `${ma}px`);
            }
          }),
          A && Ax({ element: A, padding: v }),
          Kx({ arrowWidth: Y, arrowHeight: ie }),
          E && Dx({ strategy: "referenceHidden", ...B })
        ]
      }),
      [Le, sr] = Wm(ve),
      ze = zt(S);
    Yr(() => {
      Pe && (ze == null || ze());
    }, [Pe, ze]);
    const ur = (o = ue.arrow) === null || o === void 0 ? void 0 : o.x,
      Ve = (i = ue.arrow) === null || i === void 0 ? void 0 : i.y,
      An = ((l = ue.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !== 0,
      [yi, da] = f.useState();
    return (
      Yr(() => {
        T && da(window.getComputedStyle(T).zIndex);
      }, [T]),
      f.createElement(
        "div",
        {
          ref: X.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...ke,
            transform: Pe ? ke.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: yi,
            "--radix-popper-transform-origin": [
              (a = ue.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (s = ue.transformOrigin) === null || s === void 0 ? void 0 : s.y
            ].join(" ")
          },
          dir: e.dir
        },
        f.createElement(
          Wx,
          {
            scope: c,
            placedSide: Le,
            onArrowChange: J,
            arrowX: ur,
            arrowY: Ve,
            shouldHideArrow: An
          },
          f.createElement(
            xt.div,
            G({ "data-side": Le, "data-align": sr }, $, {
              ref: U,
              style: {
                ...$.style,
                animation: Pe ? void 0 : "none",
                opacity: (u = ue.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
              }
            })
          )
        )
      )
    );
  });
function Hx(e) {
  return e !== null;
}
const Kx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, l;
    const { placement: a, rects: s, middlewareData: u } = t,
      d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0,
      p = d ? 0 : e.arrowWidth,
      g = d ? 0 : e.arrowHeight,
      [w, v] = Wm(a),
      x = { start: "0%", center: "50%", end: "100%" }[v],
      m =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0
          ? r
          : 0) +
        p / 2,
      h =
        ((i = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null && i !== void 0
          ? i
          : 0) +
        g / 2;
    let y = "",
      E = "";
    return (
      w === "bottom"
        ? ((y = d ? x : `${m}px`), (E = `${-g}px`))
        : w === "top"
        ? ((y = d ? x : `${m}px`), (E = `${s.floating.height + g}px`))
        : w === "right"
        ? ((y = `${-g}px`), (E = d ? x : `${h}px`))
        : w === "left" && ((y = `${s.floating.width + g}px`), (E = d ? x : `${h}px`)),
      { data: { x: y, y: E } }
    );
  }
});
function Wm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Gx = jx,
  Qx = Bx,
  Yx = Vx,
  Xx = f.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null || (n = globalThis.document) === null || n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r ? Yh.createPortal(f.createElement(xt.div, G({}, o, { ref: t })), r) : null;
  });
function Zx(e, t) {
  return f.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const vi = (e) => {
  const { present: t, children: n } = e,
    r = Jx(t),
    o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n),
    i = ut(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: i }) : null;
};
vi.displayName = "Presence";
function Jx(e) {
  const [t, n] = f.useState(),
    r = f.useRef({}),
    o = f.useRef(e),
    i = f.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, s] = Zx(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" }
    });
  return (
    f.useEffect(() => {
      const u = Wi(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    Yr(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const p = i.current,
          g = Wi(u);
        e
          ? s("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? s("UNMOUNT")
          : s(c && p !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    Yr(() => {
      if (t) {
        const u = (d) => {
            const g = Wi(r.current).includes(d.animationName);
            d.target === t && g && eo.flushSync(() => s("ANIMATION_END"));
          },
          c = (d) => {
            d.target === t && (i.current = Wi(r.current));
          };
        return (
          t.addEventListener("animationstart", c),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", c),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: f.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, [])
    }
  );
}
function Wi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const qa = "rovingFocusGroup.onEntryFocus",
  qx = { bubbles: !1, cancelable: !0 },
  vc = "RovingFocusGroup",
  [au, Vm, eS] = $m(vc),
  [tS, Hm] = hi(vc, [eS]),
  [nS, rS] = tS(vc),
  oS = f.forwardRef((e, t) =>
    f.createElement(
      au.Provider,
      { scope: e.__scopeRovingFocusGroup },
      f.createElement(
        au.Slot,
        { scope: e.__scopeRovingFocusGroup },
        f.createElement(iS, G({}, e, { ref: t }))
      )
    )
  ),
  iS = f.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: l,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: s,
        onEntryFocus: u,
        ...c
      } = e,
      d = f.useRef(null),
      p = ut(t, d),
      g = bm(i),
      [w = null, v] = Em({ prop: l, defaultProp: a, onChange: s }),
      [x, m] = f.useState(!1),
      h = zt(u),
      y = Vm(n),
      E = f.useRef(!1),
      [b, S] = f.useState(0);
    return (
      f.useEffect(() => {
        const $ = d.current;
        if ($) return $.addEventListener(qa, h), () => $.removeEventListener(qa, h);
      }, [h]),
      f.createElement(
        nS,
        {
          scope: n,
          orientation: r,
          dir: g,
          loop: o,
          currentTabStopId: w,
          onItemFocus: f.useCallback(($) => v($), [v]),
          onItemShiftTab: f.useCallback(() => m(!0), []),
          onFocusableItemAdd: f.useCallback(() => S(($) => $ + 1), []),
          onFocusableItemRemove: f.useCallback(() => S(($) => $ - 1), [])
        },
        f.createElement(
          xt.div,
          G({ tabIndex: x || b === 0 ? -1 : 0, "data-orientation": r }, c, {
            ref: p,
            style: { outline: "none", ...e.style },
            onMouseDown: re(e.onMouseDown, () => {
              E.current = !0;
            }),
            onFocus: re(e.onFocus, ($) => {
              const P = !E.current;
              if ($.target === $.currentTarget && P && !x) {
                const T = new CustomEvent(qa, qx);
                if (($.currentTarget.dispatchEvent(T), !T.defaultPrevented)) {
                  const O = y().filter((Y) => Y.focusable),
                    U = O.find((Y) => Y.active),
                    A = O.find((Y) => Y.id === w),
                    H = [U, A, ...O].filter(Boolean).map((Y) => Y.ref.current);
                  Km(H);
                }
              }
              E.current = !1;
            }),
            onBlur: re(e.onBlur, () => m(!1))
          })
        )
      )
    );
  }),
  lS = "RovingFocusGroupItem",
  aS = f.forwardRef((e, t) => {
    const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: i, ...l } = e,
      a = ou(),
      s = i || a,
      u = rS(lS, n),
      c = u.currentTabStopId === s,
      d = Vm(n),
      { onFocusableItemAdd: p, onFocusableItemRemove: g } = u;
    return (
      f.useEffect(() => {
        if (r) return p(), () => g();
      }, [r, p, g]),
      f.createElement(
        au.ItemSlot,
        { scope: n, id: s, focusable: r, active: o },
        f.createElement(
          xt.span,
          G({ tabIndex: c ? 0 : -1, "data-orientation": u.orientation }, l, {
            ref: t,
            onMouseDown: re(e.onMouseDown, (w) => {
              r ? u.onItemFocus(s) : w.preventDefault();
            }),
            onFocus: re(e.onFocus, () => u.onItemFocus(s)),
            onKeyDown: re(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const v = cS(w, u.orientation, u.dir);
              if (v !== void 0) {
                w.preventDefault();
                let m = d()
                  .filter((h) => h.focusable)
                  .map((h) => h.ref.current);
                if (v === "last") m.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && m.reverse();
                  const h = m.indexOf(w.currentTarget);
                  m = u.loop ? dS(m, h + 1) : m.slice(h + 1);
                }
                setTimeout(() => Km(m));
              }
            })
          })
        )
      )
    );
  }),
  sS = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
function uS(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cS(e, t, n) {
  const r = uS(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return sS[r];
}
function Km(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function dS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const fS = oS,
  pS = aS;
var hS = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  hr = new WeakMap(),
  Vi = new WeakMap(),
  Hi = {},
  es = 0,
  Gm = function (e) {
    return e && (e.host || Gm(e.parentNode));
  },
  mS = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Gm(n);
        return r && e.contains(r)
          ? r
          : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  vS = function (e, t, n, r) {
    var o = mS(t, Array.isArray(e) ? e : [e]);
    Hi[n] || (Hi[n] = new WeakMap());
    var i = Hi[n],
      l = [],
      a = new Set(),
      s = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        s.has(d) ||
        Array.prototype.forEach.call(d.children, function (p) {
          if (a.has(p)) c(p);
          else
            try {
              var g = p.getAttribute(r),
                w = g !== null && g !== "false",
                v = (hr.get(p) || 0) + 1,
                x = (i.get(p) || 0) + 1;
              hr.set(p, v),
                i.set(p, x),
                l.push(p),
                v === 1 && w && Vi.set(p, !0),
                x === 1 && p.setAttribute(n, "true"),
                w || p.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", p, m);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      es++,
      function () {
        l.forEach(function (d) {
          var p = hr.get(d) - 1,
            g = i.get(d) - 1;
          hr.set(d, p),
            i.set(d, g),
            p || (Vi.has(d) || d.removeAttribute(r), Vi.delete(d)),
            g || d.removeAttribute(n);
        }),
          es--,
          es || ((hr = new WeakMap()), (hr = new WeakMap()), (Vi = new WeakMap()), (Hi = {}));
      }
    );
  },
  gS = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || hS(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), vS(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  At = function () {
    return (
      (At =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      At.apply(this, arguments)
    );
  };
function Qm(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function yS(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var sl = "right-scroll-bar-position",
  ul = "width-before-scroll-bar",
  wS = "with-scroll-bars-hidden",
  xS = "--removed-body-scroll-bar-size";
function ts(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function SS(e, t) {
  var n = f.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        }
      }
    };
  })[0];
  return (n.callback = t), n.facade;
}
var ES = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
  kf = new WeakMap();
function CS(e, t) {
  var n = SS(t || null, function (r) {
    return e.forEach(function (o) {
      return ts(o, r);
    });
  });
  return (
    ES(
      function () {
        var r = kf.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            l = n.current;
          o.forEach(function (a) {
            i.has(a) || ts(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || ts(a, l);
            });
        }
        kf.set(n, e);
      },
      [e]
    ),
    n
  );
}
function $S(e) {
  return e;
}
function bS(e, t) {
  t === void 0 && (t = $S);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var l = t(i, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (a) {
              return a !== l;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          }
        };
      },
      assignMedium: function (i) {
        r = !0;
        var l = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (l = n);
        }
        var s = function () {
            var c = l;
            (l = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(s);
          };
        u(),
          (n = {
            push: function (c) {
              l.push(c), u();
            },
            filter: function (c) {
              return (l = l.filter(c)), n;
            }
          });
      }
    };
  return o;
}
function kS(e) {
  e === void 0 && (e = {});
  var t = bS(null);
  return (t.options = At({ async: !0, ssr: !1 }, e)), t;
}
var Ym = function (e) {
  var t = e.sideCar,
    n = Qm(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return f.createElement(r, At({}, n));
};
Ym.isSideCarExport = !0;
function PS(e, t) {
  return e.useMedium(t), Ym;
}
var Xm = kS(),
  ns = function () {},
  ua = f.forwardRef(function (e, t) {
    var n = f.useRef(null),
      r = f.useState({ onScrollCapture: ns, onWheelCapture: ns, onTouchMoveCapture: ns }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      a = e.children,
      s = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      p = e.sideCar,
      g = e.noIsolation,
      w = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      m = x === void 0 ? "div" : x,
      h = Qm(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as"
      ]),
      y = p,
      E = CS([n, t]),
      b = At(At({}, h), o);
    return f.createElement(
      f.Fragment,
      null,
      c &&
        f.createElement(y, {
          sideCar: Xm,
          removeScrollBar: u,
          shards: d,
          noIsolation: g,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n
        }),
      l
        ? f.cloneElement(f.Children.only(a), At(At({}, b), { ref: E }))
        : f.createElement(m, At({}, b, { className: s, ref: E }), a)
    );
  });
ua.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ua.classNames = { fullWidth: ul, zeroRight: sl };
var Pf,
  RS = function () {
    if (Pf) return Pf;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function _S() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = RS();
  return t && e.setAttribute("nonce", t), e;
}
function MS(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function TS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var NS = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = _S()) && (MS(t, n), TS(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      }
    };
  },
  DS = function () {
    var e = NS();
    return function (t, n) {
      f.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Zm = function () {
    var e = DS(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  LS = { left: 0, top: 0, right: 0, gap: 0 },
  rs = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  OS = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [rs(n), rs(r), rs(o)];
  },
  AS = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return LS;
    var t = OS(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  IS = Zm(),
  Fr = "data-scroll-locked",
  FS = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          wS,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Fr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          sl,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ul,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(sl, " .")
        .concat(
          sl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ul, " .")
        .concat(
          ul,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Fr,
          `] {
    `
        )
        .concat(xS, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Rf = function () {
    var e = parseInt(document.body.getAttribute(Fr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  zS = function () {
    f.useEffect(function () {
      return (
        document.body.setAttribute(Fr, (Rf() + 1).toString()),
        function () {
          var e = Rf() - 1;
          e <= 0 ? document.body.removeAttribute(Fr) : document.body.setAttribute(Fr, e.toString());
        }
      );
    }, []);
  },
  jS = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    zS();
    var i = f.useMemo(
      function () {
        return AS(o);
      },
      [o]
    );
    return f.createElement(IS, { styles: FS(i, !t, o, n ? "" : "!important") });
  },
  su = !1;
if (typeof window < "u")
  try {
    var Ki = Object.defineProperty({}, "passive", {
      get: function () {
        return (su = !0), !0;
      }
    });
    window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
  } catch {
    su = !1;
  }
var mr = su ? { passive: !1 } : !1,
  US = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Jm = function (e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !US(e) && n[t] === "visible");
  },
  BS = function (e) {
    return Jm(e, "overflowY");
  },
  WS = function (e) {
    return Jm(e, "overflowX");
  },
  _f = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = qm(e, n);
      if (r) {
        var o = ev(e, n),
          i = o[1],
          l = o[2];
        if (i > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  VS = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  HS = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  qm = function (e, t) {
    return e === "v" ? BS(t) : WS(t);
  },
  ev = function (e, t) {
    return e === "v" ? VS(t) : HS(t);
  },
  KS = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  GS = function (e, t, n, r, o) {
    var i = KS(e, window.getComputedStyle(t).direction),
      l = i * r,
      a = n.target,
      s = t.contains(a),
      u = !1,
      c = l > 0,
      d = 0,
      p = 0;
    do {
      var g = ev(e, a),
        w = g[0],
        v = g[1],
        x = g[2],
        m = v - x - i * w;
      (w || m) && qm(e, a) && ((d += m), (p += w)), (a = a.parentNode);
    } while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
    return (
      ((c && ((o && d === 0) || (!o && l > d))) || (!c && ((o && p === 0) || (!o && -l > p)))) &&
        (u = !0),
      u
    );
  },
  Gi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Mf = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Tf = function (e) {
    return e && "current" in e ? e.current : e;
  },
  QS = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  YS = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  XS = 0,
  vr = [];
function ZS(e) {
  var t = f.useRef([]),
    n = f.useRef([0, 0]),
    r = f.useRef(),
    o = f.useState(XS++)[0],
    i = f.useState(function () {
      return Zm();
    })[0],
    l = f.useRef(e);
  f.useEffect(
    function () {
      l.current = e;
    },
    [e]
  ),
    f.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = yS([e.lockRef.current], (e.shards || []).map(Tf), !0).filter(Boolean);
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = f.useCallback(function (v, x) {
      if ("touches" in v && v.touches.length === 2) return !l.current.allowPinchZoom;
      var m = Gi(v),
        h = n.current,
        y = "deltaX" in v ? v.deltaX : h[0] - m[0],
        E = "deltaY" in v ? v.deltaY : h[1] - m[1],
        b,
        S = v.target,
        $ = Math.abs(y) > Math.abs(E) ? "h" : "v";
      if ("touches" in v && $ === "h" && S.type === "range") return !1;
      var P = _f($, S);
      if (!P) return !0;
      if ((P ? (b = $) : ((b = $ === "v" ? "h" : "v"), (P = _f($, S))), !P)) return !1;
      if ((!r.current && "changedTouches" in v && (y || E) && (r.current = b), !b)) return !0;
      var T = r.current || b;
      return GS(T, x, v, T === "h" ? y : E, !0);
    }, []),
    s = f.useCallback(function (v) {
      var x = v;
      if (!(!vr.length || vr[vr.length - 1] !== i)) {
        var m = "deltaY" in x ? Mf(x) : Gi(x),
          h = t.current.filter(function (b) {
            return b.name === x.type && b.target === x.target && QS(b.delta, m);
          })[0];
        if (h && h.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!h) {
          var y = (l.current.shards || [])
              .map(Tf)
              .filter(Boolean)
              .filter(function (b) {
                return b.contains(x.target);
              }),
            E = y.length > 0 ? a(x, y[0]) : !l.current.noIsolation;
          E && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = f.useCallback(function (v, x, m, h) {
      var y = { name: v, delta: x, target: m, should: h };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== y;
          });
        }, 1);
    }, []),
    c = f.useCallback(function (v) {
      (n.current = Gi(v)), (r.current = void 0);
    }, []),
    d = f.useCallback(function (v) {
      u(v.type, Mf(v), v.target, a(v, e.lockRef.current));
    }, []),
    p = f.useCallback(function (v) {
      u(v.type, Gi(v), v.target, a(v, e.lockRef.current));
    }, []);
  f.useEffect(function () {
    return (
      vr.push(i),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: p }),
      document.addEventListener("wheel", s, mr),
      document.addEventListener("touchmove", s, mr),
      document.addEventListener("touchstart", c, mr),
      function () {
        (vr = vr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", s, mr),
          document.removeEventListener("touchmove", s, mr),
          document.removeEventListener("touchstart", c, mr);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    w = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    w ? f.createElement(i, { styles: YS(o) }) : null,
    g ? f.createElement(jS, { gapMode: "margin" }) : null
  );
}
const JS = PS(Xm, ZS);
var tv = f.forwardRef(function (e, t) {
  return f.createElement(ua, At({}, e, { ref: t, sideCar: JS }));
});
tv.classNames = ua.classNames;
const qS = tv,
  uu = ["Enter", " "],
  eE = ["ArrowDown", "PageUp", "Home"],
  nv = ["ArrowUp", "PageDown", "End"],
  tE = [...eE, ...nv],
  nE = { ltr: [...uu, "ArrowRight"], rtl: [...uu, "ArrowLeft"] },
  rE = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  ca = "Menu",
  [li, oE, iE] = $m(ca),
  [lr, rv] = hi(ca, [iE, jm, Hm]),
  gc = jm(),
  ov = Hm(),
  [lE, ar] = lr(ca),
  [aE, gi] = lr(ca),
  sE = (e) => {
    const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: l = !0 } = e,
      a = gc(t),
      [s, u] = f.useState(null),
      c = f.useRef(!1),
      d = zt(i),
      p = bm(o);
    return (
      f.useEffect(() => {
        const g = () => {
            (c.current = !0),
              document.addEventListener("pointerdown", w, { capture: !0, once: !0 }),
              document.addEventListener("pointermove", w, { capture: !0, once: !0 });
          },
          w = () => (c.current = !1);
        return (
          document.addEventListener("keydown", g, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", g, { capture: !0 }),
              document.removeEventListener("pointerdown", w, { capture: !0 }),
              document.removeEventListener("pointermove", w, { capture: !0 });
          }
        );
      }, []),
      f.createElement(
        Gx,
        a,
        f.createElement(
          lE,
          { scope: t, open: n, onOpenChange: d, content: s, onContentChange: u },
          f.createElement(
            aE,
            {
              scope: t,
              onClose: f.useCallback(() => d(!1), [d]),
              isUsingKeyboardRef: c,
              dir: p,
              modal: l
            },
            r
          )
        )
      )
    );
  },
  iv = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = gc(n);
    return f.createElement(Qx, G({}, o, r, { ref: t }));
  }),
  lv = "MenuPortal",
  [uE, av] = lr(lv, { forceMount: void 0 }),
  cE = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = ar(lv, t);
    return f.createElement(
      uE,
      { scope: t, forceMount: n },
      f.createElement(
        vi,
        { present: n || i.open },
        f.createElement(Xx, { asChild: !0, container: o }, r)
      )
    );
  },
  Mt = "MenuContent",
  [dE, yc] = lr(Mt),
  fE = f.forwardRef((e, t) => {
    const n = av(Mt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ar(Mt, e.__scopeMenu),
      l = gi(Mt, e.__scopeMenu);
    return f.createElement(
      li.Provider,
      { scope: e.__scopeMenu },
      f.createElement(
        vi,
        { present: r || i.open },
        f.createElement(
          li.Slot,
          { scope: e.__scopeMenu },
          l.modal
            ? f.createElement(pE, G({}, o, { ref: t }))
            : f.createElement(hE, G({}, o, { ref: t }))
        )
      )
    );
  }),
  pE = f.forwardRef((e, t) => {
    const n = ar(Mt, e.__scopeMenu),
      r = f.useRef(null),
      o = ut(t, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i) return gS(i);
      }, []),
      f.createElement(
        wc,
        G({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: re(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1
          }),
          onDismiss: () => n.onOpenChange(!1)
        })
      )
    );
  }),
  hE = f.forwardRef((e, t) => {
    const n = ar(Mt, e.__scopeMenu);
    return f.createElement(
      wc,
      G({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
      })
    );
  }),
  wc = f.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: l,
        disableOutsidePointerEvents: a,
        onEntryFocus: s,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: p,
        onDismiss: g,
        disableOutsideScroll: w,
        ...v
      } = e,
      x = ar(Mt, n),
      m = gi(Mt, n),
      h = gc(n),
      y = ov(n),
      E = oE(n),
      [b, S] = f.useState(null),
      $ = f.useRef(null),
      P = ut(t, $, x.onContentChange),
      T = f.useRef(0),
      O = f.useRef(""),
      U = f.useRef(0),
      A = f.useRef(null),
      J = f.useRef("right"),
      H = f.useRef(0),
      Y = w ? qS : f.Fragment,
      ie = w ? { as: Qr, allowPinchZoom: !0 } : void 0,
      j = (M) => {
        var I, B;
        const X = O.current + M,
          ke = E().filter((ze) => !ze.disabled),
          ve = document.activeElement,
          Pe =
            (I = ke.find((ze) => ze.ref.current === ve)) === null || I === void 0
              ? void 0
              : I.textValue,
          ue = ke.map((ze) => ze.textValue),
          Le = ME(ue, X, Pe),
          sr =
            (B = ke.find((ze) => ze.textValue === Le)) === null || B === void 0
              ? void 0
              : B.ref.current;
        (function ze(ur) {
          (O.current = ur),
            window.clearTimeout(T.current),
            ur !== "" && (T.current = window.setTimeout(() => ze(""), 1e3));
        })(X),
          sr && setTimeout(() => sr.focus());
      };
    f.useEffect(() => () => window.clearTimeout(T.current), []), Fw();
    const D = f.useCallback((M) => {
      var I, B;
      return (
        J.current === ((I = A.current) === null || I === void 0 ? void 0 : I.side) &&
        NE(M, (B = A.current) === null || B === void 0 ? void 0 : B.area)
      );
    }, []);
    return f.createElement(
      dE,
      {
        scope: n,
        searchRef: O,
        onItemEnter: f.useCallback(
          (M) => {
            D(M) && M.preventDefault();
          },
          [D]
        ),
        onItemLeave: f.useCallback(
          (M) => {
            var I;
            D(M) || ((I = $.current) === null || I === void 0 || I.focus(), S(null));
          },
          [D]
        ),
        onTriggerLeave: f.useCallback(
          (M) => {
            D(M) && M.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: U,
        onPointerGraceIntentChange: f.useCallback((M) => {
          A.current = M;
        }, [])
      },
      f.createElement(
        Y,
        ie,
        f.createElement(
          zw,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: re(i, (M) => {
              var I;
              M.preventDefault(), (I = $.current) === null || I === void 0 || I.focus();
            }),
            onUnmountAutoFocus: l
          },
          f.createElement(
            Ow,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: d,
              onInteractOutside: p,
              onDismiss: g
            },
            f.createElement(
              fS,
              G({ asChild: !0 }, y, {
                dir: m.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: b,
                onCurrentTabStopIdChange: S,
                onEntryFocus: re(s, (M) => {
                  m.isUsingKeyboardRef.current || M.preventDefault();
                })
              }),
              f.createElement(
                Yx,
                G(
                  {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": fv(x.open),
                    "data-radix-menu-content": "",
                    dir: m.dir
                  },
                  h,
                  v,
                  {
                    ref: P,
                    style: { outline: "none", ...v.style },
                    onKeyDown: re(v.onKeyDown, (M) => {
                      const B = M.target.closest("[data-radix-menu-content]") === M.currentTarget,
                        X = M.ctrlKey || M.altKey || M.metaKey,
                        ke = M.key.length === 1;
                      B && (M.key === "Tab" && M.preventDefault(), !X && ke && j(M.key));
                      const ve = $.current;
                      if (M.target !== ve || !tE.includes(M.key)) return;
                      M.preventDefault();
                      const ue = E()
                        .filter((Le) => !Le.disabled)
                        .map((Le) => Le.ref.current);
                      nv.includes(M.key) && ue.reverse(), RE(ue);
                    }),
                    onBlur: re(e.onBlur, (M) => {
                      M.currentTarget.contains(M.target) ||
                        (window.clearTimeout(T.current), (O.current = ""));
                    }),
                    onPointerMove: re(
                      e.onPointerMove,
                      ai((M) => {
                        const I = M.target,
                          B = H.current !== M.clientX;
                        if (M.currentTarget.contains(I) && B) {
                          const X = M.clientX > H.current ? "right" : "left";
                          (J.current = X), (H.current = M.clientX);
                        }
                      })
                    )
                  }
                )
              )
            )
          )
        )
      )
    );
  }),
  mE = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return f.createElement(xt.div, G({}, r, { ref: t }));
  }),
  cu = "MenuItem",
  Nf = "menu.itemSelect",
  xc = f.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = f.useRef(null),
      l = gi(cu, e.__scopeMenu),
      a = yc(cu, e.__scopeMenu),
      s = ut(t, i),
      u = f.useRef(!1),
      c = () => {
        const d = i.current;
        if (!n && d) {
          const p = new CustomEvent(Nf, { bubbles: !0, cancelable: !0 });
          d.addEventListener(Nf, (g) => (r == null ? void 0 : r(g)), { once: !0 }),
            Cm(d, p),
            p.defaultPrevented ? (u.current = !1) : l.onClose();
        }
      };
    return f.createElement(
      sv,
      G({}, o, {
        ref: s,
        disabled: n,
        onClick: re(e.onClick, c),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), (u.current = !0);
        },
        onPointerUp: re(e.onPointerUp, (d) => {
          var p;
          u.current || (p = d.currentTarget) === null || p === void 0 || p.click();
        }),
        onKeyDown: re(e.onKeyDown, (d) => {
          const p = a.searchRef.current !== "";
          n ||
            (p && d.key === " ") ||
            (uu.includes(d.key) && (d.currentTarget.click(), d.preventDefault()));
        })
      })
    );
  }),
  sv = f.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      l = yc(cu, n),
      a = ov(n),
      s = f.useRef(null),
      u = ut(t, s),
      [c, d] = f.useState(!1),
      [p, g] = f.useState("");
    return (
      f.useEffect(() => {
        const w = s.current;
        if (w) {
          var v;
          g(((v = w.textContent) !== null && v !== void 0 ? v : "").trim());
        }
      }, [i.children]),
      f.createElement(
        li.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? p },
        f.createElement(
          pS,
          G({ asChild: !0 }, a, { focusable: !r }),
          f.createElement(
            xt.div,
            G(
              {
                role: "menuitem",
                "data-highlighted": c ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0
              },
              i,
              {
                ref: u,
                onPointerMove: re(
                  e.onPointerMove,
                  ai((w) => {
                    r
                      ? l.onItemLeave(w)
                      : (l.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus());
                  })
                ),
                onPointerLeave: re(
                  e.onPointerLeave,
                  ai((w) => l.onItemLeave(w))
                ),
                onFocus: re(e.onFocus, () => d(!0)),
                onBlur: re(e.onBlur, () => d(!1))
              }
            )
          )
        )
      )
    );
  }),
  vE = f.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return f.createElement(
      cv,
      { scope: e.__scopeMenu, checked: n },
      f.createElement(
        xc,
        G({ role: "menuitemcheckbox", "aria-checked": jl(n) ? "mixed" : n }, o, {
          ref: t,
          "data-state": Sc(n),
          onSelect: re(o.onSelect, () => (r == null ? void 0 : r(jl(n) ? !0 : !n)), {
            checkForDefaultPrevented: !1
          })
        })
      )
    );
  }),
  gE = "MenuRadioGroup",
  [I2, yE] = lr(gE, { value: void 0, onValueChange: () => {} }),
  wE = "MenuRadioItem",
  xE = f.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = yE(wE, e.__scopeMenu),
      i = n === o.value;
    return f.createElement(
      cv,
      { scope: e.__scopeMenu, checked: i },
      f.createElement(
        xc,
        G({ role: "menuitemradio", "aria-checked": i }, r, {
          ref: t,
          "data-state": Sc(i),
          onSelect: re(
            r.onSelect,
            () => {
              var l;
              return (l = o.onValueChange) === null || l === void 0 ? void 0 : l.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          )
        })
      )
    );
  }),
  uv = "MenuItemIndicator",
  [cv, SE] = lr(uv, { checked: !1 }),
  EE = f.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = SE(uv, n);
    return f.createElement(
      vi,
      { present: r || jl(i.checked) || i.checked === !0 },
      f.createElement(xt.span, G({}, o, { ref: t, "data-state": Sc(i.checked) }))
    );
  }),
  CE = f.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return f.createElement(
      xt.div,
      G({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: t })
    );
  }),
  $E = "MenuSub",
  [F2, dv] = lr($E),
  Qi = "MenuSubTrigger",
  bE = f.forwardRef((e, t) => {
    const n = ar(Qi, e.__scopeMenu),
      r = gi(Qi, e.__scopeMenu),
      o = dv(Qi, e.__scopeMenu),
      i = yc(Qi, e.__scopeMenu),
      l = f.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: s } = i,
      u = { __scopeMenu: e.__scopeMenu },
      c = f.useCallback(() => {
        l.current && window.clearTimeout(l.current), (l.current = null);
      }, []);
    return (
      f.useEffect(() => c, [c]),
      f.useEffect(() => {
        const d = a.current;
        return () => {
          window.clearTimeout(d), s(null);
        };
      }, [a, s]),
      f.createElement(
        iv,
        G({ asChild: !0 }, u),
        f.createElement(
          sv,
          G(
            {
              id: o.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": n.open,
              "aria-controls": o.contentId,
              "data-state": fv(n.open)
            },
            e,
            {
              ref: la(t, o.onTriggerChange),
              onClick: (d) => {
                var p;
                (p = e.onClick) === null || p === void 0 || p.call(e, d),
                  !(e.disabled || d.defaultPrevented) &&
                    (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: re(
                e.onPointerMove,
                ai((d) => {
                  i.onItemEnter(d),
                    !d.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !l.current &&
                      (i.onPointerGraceIntentChange(null),
                      (l.current = window.setTimeout(() => {
                        n.onOpenChange(!0), c();
                      }, 100)));
                })
              ),
              onPointerLeave: re(
                e.onPointerLeave,
                ai((d) => {
                  var p;
                  c();
                  const g =
                    (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
                  if (g) {
                    var w;
                    const v = (w = n.content) === null || w === void 0 ? void 0 : w.dataset.side,
                      x = v === "right",
                      m = x ? -5 : 5,
                      h = g[x ? "left" : "right"],
                      y = g[x ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                      area: [
                        { x: d.clientX + m, y: d.clientY },
                        { x: h, y: g.top },
                        { x: y, y: g.top },
                        { x: y, y: g.bottom },
                        { x: h, y: g.bottom }
                      ],
                      side: v
                    }),
                      window.clearTimeout(a.current),
                      (a.current = window.setTimeout(
                        () => i.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((i.onTriggerLeave(d), d.defaultPrevented)) return;
                    i.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: re(e.onKeyDown, (d) => {
                const p = i.searchRef.current !== "";
                if (!(e.disabled || (p && d.key === " ")) && nE[r.dir].includes(d.key)) {
                  var g;
                  n.onOpenChange(!0),
                    (g = n.content) === null || g === void 0 || g.focus(),
                    d.preventDefault();
                }
              })
            }
          )
        )
      )
    );
  }),
  kE = "MenuSubContent",
  PE = f.forwardRef((e, t) => {
    const n = av(Mt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ar(Mt, e.__scopeMenu),
      l = gi(Mt, e.__scopeMenu),
      a = dv(kE, e.__scopeMenu),
      s = f.useRef(null),
      u = ut(t, s);
    return f.createElement(
      li.Provider,
      { scope: e.__scopeMenu },
      f.createElement(
        vi,
        { present: r || i.open },
        f.createElement(
          li.Slot,
          { scope: e.__scopeMenu },
          f.createElement(
            wc,
            G({ id: a.contentId, "aria-labelledby": a.triggerId }, o, {
              ref: u,
              align: "start",
              side: l.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (c) => {
                var d;
                l.isUsingKeyboardRef.current &&
                  ((d = s.current) === null || d === void 0 || d.focus()),
                  c.preventDefault();
              },
              onCloseAutoFocus: (c) => c.preventDefault(),
              onFocusOutside: re(e.onFocusOutside, (c) => {
                c.target !== a.trigger && i.onOpenChange(!1);
              }),
              onEscapeKeyDown: re(e.onEscapeKeyDown, (c) => {
                l.onClose(), c.preventDefault();
              }),
              onKeyDown: re(e.onKeyDown, (c) => {
                const d = c.currentTarget.contains(c.target),
                  p = rE[l.dir].includes(c.key);
                if (d && p) {
                  var g;
                  i.onOpenChange(!1),
                    (g = a.trigger) === null || g === void 0 || g.focus(),
                    c.preventDefault();
                }
              })
            })
          )
        )
      )
    );
  });
function fv(e) {
  return e ? "open" : "closed";
}
function jl(e) {
  return e === "indeterminate";
}
function Sc(e) {
  return jl(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function RE(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _E(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function ME(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let l = _E(e, Math.max(i, 0));
  o.length === 1 && (l = l.filter((u) => u !== n));
  const s = l.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return s !== n ? s : void 0;
}
function TE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const a = t[i].x,
      s = t[i].y,
      u = t[l].x,
      c = t[l].y;
    s > r != c > r && n < ((u - a) * (r - s)) / (c - s) + a && (o = !o);
  }
  return o;
}
function NE(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return TE(n, t);
}
function ai(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const DE = sE,
  LE = iv,
  OE = cE,
  AE = fE,
  IE = mE,
  FE = xc,
  zE = vE,
  jE = xE,
  UE = EE,
  BE = CE,
  WE = bE,
  VE = PE,
  pv = "DropdownMenu",
  [HE, z2] = hi(pv, [rv]),
  St = rv(),
  [KE, hv] = HE(pv),
  GE = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: l,
        modal: a = !0
      } = e,
      s = St(t),
      u = f.useRef(null),
      [c = !1, d] = Em({ prop: o, defaultProp: i, onChange: l });
    return f.createElement(
      KE,
      {
        scope: t,
        triggerId: ou(),
        triggerRef: u,
        contentId: ou(),
        open: c,
        onOpenChange: d,
        onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
        modal: a
      },
      f.createElement(DE, G({}, s, { open: c, onOpenChange: d, dir: r, modal: a }), n)
    );
  },
  QE = "DropdownMenuTrigger",
  YE = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = hv(QE, n),
      l = St(n);
    return f.createElement(
      LE,
      G({ asChild: !0 }, l),
      f.createElement(
        xt.button,
        G(
          {
            type: "button",
            id: i.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": i.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r
          },
          o,
          {
            ref: la(t, i.triggerRef),
            onPointerDown: re(e.onPointerDown, (a) => {
              !r &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (i.onOpenToggle(), i.open || a.preventDefault());
            }),
            onKeyDown: re(e.onKeyDown, (a) => {
              r ||
                (["Enter", " "].includes(a.key) && i.onOpenToggle(),
                a.key === "ArrowDown" && i.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
            })
          }
        )
      )
    );
  }),
  XE = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = St(t);
    return f.createElement(OE, G({}, r, n));
  },
  ZE = "DropdownMenuContent",
  JE = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = hv(ZE, n),
      i = St(n),
      l = f.useRef(!1);
    return f.createElement(
      AE,
      G({ id: o.contentId, "aria-labelledby": o.triggerId }, i, r, {
        ref: t,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (a) => {
          var s;
          l.current || (s = o.triggerRef.current) === null || s === void 0 || s.focus(),
            (l.current = !1),
            a.preventDefault();
        }),
        onInteractOutside: re(e.onInteractOutside, (a) => {
          const s = a.detail.originalEvent,
            u = s.button === 0 && s.ctrlKey === !0,
            c = s.button === 2 || u;
          (!o.modal || c) && (l.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      })
    );
  }),
  qE = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(IE, G({}, o, r, { ref: t }));
  }),
  e2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(FE, G({}, o, r, { ref: t }));
  }),
  t2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(zE, G({}, o, r, { ref: t }));
  }),
  n2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(jE, G({}, o, r, { ref: t }));
  }),
  r2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(UE, G({}, o, r, { ref: t }));
  }),
  o2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(BE, G({}, o, r, { ref: t }));
  }),
  i2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(WE, G({}, o, r, { ref: t }));
  }),
  l2 = f.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = St(n);
    return f.createElement(
      VE,
      G({}, o, r, {
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      })
    );
  }),
  a2 = GE,
  s2 = YE,
  u2 = XE,
  mv = JE,
  vv = qE,
  gv = e2,
  yv = t2,
  wv = n2,
  xv = r2,
  Sv = o2,
  Ev = i2,
  Cv = l2,
  c2 = a2,
  d2 = s2,
  f2 = f.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    _.jsxs(Ev, {
      ref: o,
      className: Ut(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, _.jsx(I1, { className: "ml-auto h-4 w-4" })]
    })
  );
f2.displayName = Ev.displayName;
const p2 = f.forwardRef(({ className: e, ...t }, n) =>
  _.jsx(Cv, {
    ref: n,
    className: Ut(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  })
);
p2.displayName = Cv.displayName;
const $v = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  _.jsx(u2, {
    children: _.jsx(mv, {
      ref: r,
      sideOffset: t,
      className: Ut(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    })
  })
);
$v.displayName = mv.displayName;
const cl = f.forwardRef(({ className: e, inset: t, ...n }, r) =>
  _.jsx(gv, {
    ref: r,
    className: Ut(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  })
);
cl.displayName = gv.displayName;
const h2 = f.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  _.jsxs(yv, {
    ref: o,
    className: Ut(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      _.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: _.jsx(xv, { children: _.jsx(A1, { className: "h-4 w-4" }) })
      }),
      t
    ]
  })
);
h2.displayName = yv.displayName;
const m2 = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  _.jsxs(wv, {
    ref: r,
    className: Ut(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      _.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: _.jsx(xv, { children: _.jsx(F1, { className: "h-2 w-2 fill-current" }) })
      }),
      t
    ]
  })
);
m2.displayName = wv.displayName;
const v2 = f.forwardRef(({ className: e, inset: t, ...n }, r) =>
  _.jsx(vv, { ref: r, className: Ut("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...n })
);
v2.displayName = vv.displayName;
const g2 = f.forwardRef(({ className: e, ...t }, n) =>
  _.jsx(Sv, { ref: n, className: Ut("-mx-1 my-1 h-px bg-muted", e), ...t })
);
g2.displayName = Sv.displayName;
function y2() {
  const { setTheme: e } = N1();
  return _.jsxs(c2, {
    children: [
      _.jsx(d2, {
        asChild: !0,
        children: _.jsxs(Sm, {
          variant: "outline",
          size: "icon",
          children: [
            _.jsx(U1, {
              className:
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }),
            _.jsx(j1, {
              className:
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }),
            _.jsx("span", { className: "sr-only", children: "Toggle theme" })
          ]
        })
      }),
      _.jsxs($v, {
        align: "end",
        children: [
          _.jsx(cl, { onClick: () => e("light"), children: "Light" }),
          _.jsx(cl, { onClick: () => e("dark"), children: "Dark" }),
          _.jsx(cl, { onClick: () => e("system"), children: "System" })
        ]
      })
    ]
  });
}
function w2() {
  return _.jsxs("header", {
    className: "w-100 h-auto flex flex-row justify-between items-center pt-8 p-4",
    children: [
      _.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          _.jsx("h1", { className: "text-xl font-bold font-platypi", children: "Arthur Broudoux" }),
          _.jsx("span", { className: "text-ms font-normal", children: "Web Developper" })
        ]
      }),
      _.jsxs("ul", {
        className: "flex flex-row items-center gap-2 h-full",
        children: [
          _.jsx("li", {
            className: "p-2 hover:bg-primary-foreground focus:bg-primary-foreground rounded",
            children: _.jsx("a", {
              href: "https://github.com/abroudoux",
              target: "_blank",
              children: _.jsx(z1, { size: 18 })
            })
          }),
          _.jsx("li", { children: _.jsx(y2, {}) })
        ]
      })
    ]
  });
}
const io = (e) =>
    _.jsxs("section", {
      className: "w-100 p-4 flex flex-col items-start my-6",
      children: [
        _.jsx("h2", {
          className: "text-lg font-semibold mb-6 italic font-platypi",
          children: e.title
        }),
        e.content
      ]
    }),
  zr = ({ text: e, icon: t }) =>
    _.jsxs("span", {
      className:
        "text-primary bg-slate-800 p-1 rounded hover:bg-slate-700 transition-colors font-space",
      children: [t, " ", e]
    });
function x2() {
  const e = _.jsxs("div", {
    className: "text-ms font-normal mb-3 leading-8",
    children: [
      _.jsxs("p", {
        className: "mb-3",
        children: [
          "I'm a student in web development at ",
          _.jsx(zr, { icon: "📚", text: "Epitech" }),
          " in Rennes. I'm passionate about new technologies and programming. I'm also aware of the importance of the ",
          _.jsx(zr, { icon: "👤", text: "user experience" }),
          " and the design of an application. I'm always looking for new challenges and I'm motivated to learn new technologies by contributing to public projets."
        ]
      }),
      _.jsxs("p", {
        children: [
          "I'm looking for an Internship in web development from January 2024 near to",
          " ",
          _.jsx(zr, { icon: "📍", text: "Rennes" }),
          ". I'm conviced that I can bring a lot to a new company and I'm motivated to face new challenges."
        ]
      })
    ]
  });
  return _.jsx(io, { title: "about", content: e });
}
const S2 = [
    {
      id: 0,
      title: "highlights.io",
      description: "Keep your discoveries of the past year at one place",
      technos: ["Adonis", "TypeScript", "React", "TailwindCSS"],
      repository: "https://github.com/abroudoux/highlights.io.git",
      status: "WIP"
    },
    {
      id: 1,
      title: "notion-to-spotify",
      description: "From a Notion list launch randomly an album on Spotify",
      technos: ["JavaScript", "Notion API"],
      repository: "https://github.com/abroudoux/notion-to-spotify-cli.git",
      status: "v1"
    },
    {
      id: 2,
      title: "tailwindcss-breakpoints-indicators",
      description: "NPM package to display TailwindCSS breakpoints",
      technos: ["JavaScript", "NPM Package"],
      repository: "https://github.com/abroudoux/tailwindcss-breakpoints-indicators.git",
      status: "v1"
    },
    {
      id: 3,
      title: "spotify-autopush",
      description: "Display on your Github profile the last album you listened",
      technos: ["Python", "Spotify API", "Github API"],
      repository: "https://github.com/abroudoux/spotify-autopush.git",
      status: "finished"
    }
  ],
  E2 = hm(
    "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground border-primary border-[1px]",
          finished: "border-green-500 text-green-500",
          current: "border-orange-500 text-orange-500"
        }
      },
      defaultVariants: { variant: "default" }
    }
  );
function bv({ className: e, variant: t, ...n }) {
  return _.jsx("div", { className: Ut(E2({ variant: t }), e), ...n });
}
const C2 = (e) =>
  _.jsx("li", {
    className: "group",
    children: _.jsxs("a", {
      href: e.repository,
      target: "_blank",
      className:
        "w-full p-6 rounded-lg border-border border-2 hover:border-3 flex-row-center-between group-hover:border-primary transition-colors",
      children: [
        _.jsxs("div", {
          className: "flex-col-start-start gap-2 w-5/6 h-full",
          children: [
            _.jsxs("h3", {
              className: "text-md inline",
              children: [
                e.title,
                " ",
                _.jsx("span", { children: _.jsx(bv, { variant: "secondary", children: e.status }) })
              ]
            }),
            _.jsx("p", {
              className: "text-ms font-normal text-muted-foreground",
              children: e.description
            })
          ]
        }),
        _.jsx("div", {
          className: "h-full flex-col-center-center w-1/6 group-hover:p-2",
          children: _.jsx(O1, { size: 24 })
        })
      ]
    })
  });
function $2() {
  const e = _.jsx("ul", {
    className: "flex flex-col gap-5 w-full",
    children: S2.map((t) => _.jsx(C2, { ...t }))
  });
  return _.jsx(io, { title: "projects", content: e });
}
const b2 = [
  {
    id: 0,
    name: "Internship Web Developer",
    company: "Coquille Consulting",
    description:
      "As a web developer intern, I am in charge of the development of the company's websites. I'm in charge of the creation of the different themes and the development of the back-end part of the websites. I also work on the company's internal tools.",
    date: "sep. 2023 - aug. 2024",
    technos: ["PHP (Symfony)", "JavaScript", "VueJs", "SCSS"],
    siteUrl: "https://coquille.fr/"
  },
  {
    id: 1,
    name: "Internship Web Developer",
    company: "Krakn Behavioural",
    description:
      "My role as a web developper intern was to develop the company's website. I was also in charge of the development of a specific website for the company which was used for the company's internal use during meetings and presentations.",
    date: "apr. 2023 - june 2023",
    technos: ["React", "SCSS", "TypeScript", "Webflow"],
    siteUrl: "https://www.krakn.fr/"
  }
];
function k2() {
  const e = _.jsx("ul", {
    className: "flex flex-col gap-8",
    children: b2.map((t) =>
      _.jsxs(
        "li",
        {
          className: "flex flex-col gap-4",
          children: [
            _.jsxs("a", {
              className: "text-ms underline font-semibold",
              href: t.siteUrl,
              target: "_blank",
              children: [t.name, " - ", t.company]
            }),
            _.jsx("span", {
              className: "text-secondary-foreground text-xs font-light",
              children: t.date
            }),
            _.jsx("p", {
              className: "text-muted-foreground font-normal text-ms",
              children: t.description
            }),
            _.jsx("ul", {
              className: "flex flex-row items-center gap-1",
              children: t.technos.map((n) => _.jsx(bv, { children: n }, n))
            })
          ]
        },
        t.id
      )
    )
  });
  return _.jsx(io, { title: "experiences", content: e });
}
const P2 = [
  {
    id: 0,
    title: "MSC Pro - Cloud",
    description: "Join the Pre MSC program from September 2024",
    establishment: "Epitech Rennes",
    date: "2024 - 2027"
  },
  {
    id: 1,
    title: "Bachelor Développeur Web",
    description: "Discovey of web development, webdesign, SEO and UI/UX design",
    establishment: "My Digital School Angers",
    date: "2022 - 2024"
  },
  {
    id: 2,
    title: "Bac Général",
    description:
      "Economics and Social Sciences, English Contempary World, Mathematics. Mention well.",
    establishment: "Lycée Bellevue Le Mans",
    date: "2019 - 2022"
  }
];
function R2() {
  const e = _.jsx("ul", {
    className: "flex flex-col gap-8",
    children: P2.map((t) =>
      _.jsxs(
        "li",
        {
          className: "flex flex-col gap-4",
          children: [
            _.jsxs("h3", {
              className: "text-lg font-semibold",
              children: [
                t.title,
                " ",
                _.jsxs("span", {
                  className: "text-muted-foreground font-normal no-underline",
                  children: ["- ", t.establishment]
                })
              ]
            }),
            _.jsx("span", {
              className: "text-secondary-foreground text-xs font-light",
              children: t.date
            }),
            _.jsx("p", {
              className: "text-muted-foreground font-normal text-ms",
              children: t.description
            })
          ]
        },
        t.id
      )
    )
  });
  return _.jsx(io, { title: "education", content: e });
}
const _2 = [
  {
    id: 0,
    name: "frontend",
    technos: ["JavaScript", "TypeScript", "React", "TailwindCSS", "SCSS"]
  },
  {
    id: 1,
    name: "backend & databases",
    technos: ["Node", "PHP", "Python", "Go", "PostgreSQL", "MongoDB"]
  },
  { id: 2, name: "tools & design", technos: ["git", "Postman", "Figma"] },
  { id: 3, name: "in progress", technos: ["Rust", "Java", "Docker"] }
];
function M2() {
  const e = _.jsx("ul", {
    className: "flex flex-col gap-4",
    children: _2.map((t) =>
      _.jsxs(
        "li",
        {
          className: "flex flex-col gap-2",
          children: [
            _.jsx("h3", { className: "text-ms underline font-semibold", children: t.name }),
            _.jsx("p", {
              className: "text-muted-foreground font-normal text-ms",
              children: t.technos.join(", ")
            })
          ]
        },
        t.id
      )
    )
  });
  return _.jsx(io, { title: "skills", content: e });
}
const T2 = "/assets/cv-arthur-broudoux-2024-533cd01a.pdf";
function N2() {
  const e = _.jsxs("p", {
    className: "text-ms font-normal mb-3 text-muted-foreground leading-8",
    children: [
      "Let's work together ! You can contact me by",
      " ",
      _.jsx("a", {
        href: "mailto:arthur.broudoux@gmail.com",
        className: "text-primary font-semibold",
        children: _.jsx(zr, { text: "mail", icon: "📫" })
      }),
      " ",
      "or via",
      " ",
      _.jsx("a", {
        href: "https://www.linkedin.com/in/abroudoux/",
        target: "_blank",
        className: "text-primary font-semibold",
        children: _.jsx(zr, { text: "Linkedin", icon: "💼" })
      }),
      ". You can also check my",
      " ",
      _.jsx("a", {
        href: T2,
        className: "text-primary font-semibold",
        target: "_blank",
        children: _.jsx(zr, { text: "Curriculum Vitae", icon: "📃" })
      }),
      "."
    ]
  });
  return _.jsx(io, { title: "contact", content: e });
}
function D2() {
  return _.jsxs("div", {
    className: "w-full max-w-3xl p-2",
    children: [
      _.jsx(w2, {}),
      _.jsx(x2, {}),
      _.jsx($2, {}),
      _.jsx(k2, {}),
      _.jsx(R2, {}),
      _.jsx(M2, {}),
      _.jsx(N2, {})
    ]
  });
}
function L2() {
  return _.jsxs(R1, {
    className: "flex-col-center-center h-screen w-full gap-6",
    to: "/",
    children: [
      _.jsx("h1", { className: "text-8xl", children: "404" }),
      _.jsx("h2", { className: "text-3xl", children: "Page not found" }),
      _.jsx("p", { className: "text-lg", children: "Click to go back to the main page" })
    ]
  });
}
const O2 = m1([{ path: "/", element: _.jsx(D2, {}), errorElement: _.jsx(L2, {}) }]);
os.createRoot(document.getElementById("root")).render(
  _.jsx(T1, {
    defaultTheme: "dark",
    storageKey: "vite-ui-theme",
    children: _.jsx($1, { router: O2 })
  })
);
