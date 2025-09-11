function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l2 = Symbol.for("react.element"), n2 = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q2 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t2 = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x2 = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z2 = Symbol.iterator;
  function A2(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = z2 && a2[z2] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C2 = Object.assign, D2 = {};
  function E2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  E2.prototype.isReactComponent = {};
  E2.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F2() {
  }
  F2.prototype = E2.prototype;
  function G2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  var H2 = G2.prototype = new F2();
  H2.constructor = G2;
  C2(H2, E2.prototype);
  H2.isPureReactComponent = true;
  var I2 = Array.isArray, J2 = Object.prototype.hasOwnProperty, K2 = { current: null }, L2 = { key: true, ref: true, __self: true, __source: true };
  function M2(a2, b2, e2) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e2;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l2, type: a2, key: k2, ref: h2, props: c2, _owner: K2.current };
  }
  function N2(a2, b2) {
    return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O2(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P2 = /\/+/g;
  function Q2(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R2(a2, b2, e2, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2) a2 = null;
    var h2 = false;
    if (null === a2) h2 = true;
    else switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l2:
          case n2:
            h2 = true;
        }
    }
    if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q2(h2, 0) : d2, I2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P2, "$&/") + "/"), R2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O2(c2) && (c2 = N2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q2(k2, g2);
      h2 += R2(k2, b2, e2, f2, c2);
    }
    else if (f2 = A2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q2(k2, g2++), h2 += R2(k2, b2, e2, f2, c2);
    else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S2(a2, b2, e2) {
    if (null == a2) return a2;
    var d2 = [], c2 = 0;
    R2(a2, d2, "", "", function(a3) {
      return b2.call(e2, a3, c2++);
    });
    return d2;
  }
  function T2(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status) return a2._result.default;
    throw a2._result;
  }
  var U2 = { current: null }, V2 = { transition: null }, W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
  function X2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S2, forEach: function(a2, b2, e2) {
    S2(a2, function() {
      b2.apply(this, arguments);
    }, e2);
  }, count: function(a2) {
    var b2 = 0;
    S2(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S2(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E2;
  react_production_min.Fragment = p2;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G2;
  react_production_min.StrictMode = q2;
  react_production_min.Suspense = w2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
  react_production_min.act = X2;
  react_production_min.cloneElement = function(a2, b2, e2) {
    if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
      for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e2;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t2, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M2;
  react_production_min.createFactory = function(a2) {
    var b2 = M2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v2, render: a2 };
  };
  react_production_min.isValidElement = O2;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x2, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V2.transition;
    V2.transition = {};
    try {
      a2();
    } finally {
      V2.transition = b2;
    }
  };
  react_production_min.unstable_act = X2;
  react_production_min.useCallback = function(a2, b2) {
    return U2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e2) {
    return U2.current.useImperativeHandle(a2, b2, e2);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e2) {
    return U2.current.useReducer(a2, b2, e2);
  };
  react_production_min.useRef = function(a2) {
    return U2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e2) {
    return U2.current.useSyncExternalStore(a2, b2, e2);
  };
  react_production_min.useTransition = function() {
    return U2.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f2 = requireReact(), k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
  function q2(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k2, type: c2, key: e2, ref: h2, props: d2, _owner: n2.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q2;
  reactJsxRuntime_production_min.jsxs = q2;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const o$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else break a;
      }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length) return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else break a;
        }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r, b2);
        else break;
        b2 = h2(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2) if (null !== h2(r)) A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e2 = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r) && k2(r);
            G2(b2);
          } else k2(r);
          v2 = h2(r);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p2(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2)) return true;
    if (ja.call(la, a2)) return false;
    if (ka.test(a2)) return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v2(a2, b2, c2, d2, e2, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e2;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z2[b2] = new v2(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z2[a2] = new v2(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z2[a2] = new v2(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z2[a2] = new v2(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z2[b2] = new v2(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
    if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A2 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2) return null;
    if ("function" === typeof a2) return a2.displayName || a2.name || null;
    if ("string" === typeof a2) return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2) switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
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
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e2 = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2) return false;
    var b2 = a2._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2) return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
    } else a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
      for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e2 = 0; e2 < a2.length; e2++) {
        if (a2[e2].value === c2) {
          a2[e2].selected = true;
          d2 && (a2[e2].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
    return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p2(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p2(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = (function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e2);
      });
    } : a2;
  })(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
      for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
  }
  var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p2(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb) throw Error(p2(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib) return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
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
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
    if (a2) return null;
    if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
  function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2) throw Error(p2(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2) throw Error(p2(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e2 = c2.return;
      if (null === e2) break;
      var f2 = e2.alternate;
      if (null === f2) {
        d2 = e2.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e2.child === f2.child) {
        for (f2 = e2.child; f2; ) {
          if (f2 === c2) return Xb(e2), a2;
          if (f2 === d2) return Xb(e2), b2;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c2.return !== d2.return) c2 = e2, d2 = f2;
      else {
        for (var g2 = false, h2 = e2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e2;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e2;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) throw Error(p2(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p2(190));
    }
    if (3 !== c2.tag) throw Error(p2(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2) return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
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
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e2;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
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
        return b2 + 5e3;
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
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
      } else k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e2 = 31 - oc(c2), f2 = 1 << e2;
      b2[e2] = 0;
      d2[e2] = -1;
      a2[e2] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e2 = 1 << d2;
      e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e2;
    }
  }
  var C2 = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e2, f2) {
    if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e2) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
      case "pointerover":
        var f2 = e2.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
        return true;
      case "gotpointercapture":
        return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn) return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e2 = Yc(a2, b2, c2, d2);
      if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
      else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e2; ) {
          var f2 = Cb(e2);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id, c2);
          if (f2 === e2) break;
          e2 = f2;
        }
        null !== e2 && d2.stopPropagation();
      } else hd(a2, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d2) {
    id = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2) return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
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
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
    return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e2, f2, g2) {
      this._reactName = b3;
      this._targetInst = e2;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A2(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2) return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A2({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
  }, Nd = {
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
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A2({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A2({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae2 = ia && "CompositionEvent" in window, be2 = null;
  ia && "documentMode" in document && (be2 = document.documentMode);
  var ce2 = ia && "TextEvent" in window && !be2, de2 = ia && (!ae2 || be2 && 8 < be2 && 11 >= be2), ee2 = String.fromCharCode(32), fe2 = false;
  function ge2(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he2(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie2 = false;
  function je2(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he2(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe2 = true;
        return ee2;
      case "textInput":
        return a2 = b2.data, a2 === ee2 && fe2 ? null : a2;
      default:
        return null;
    }
  }
  function ke2(a2, b2) {
    if (ie2) return "compositionend" === a2 || !ae2 && ge2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de2 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le2[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne2(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe2(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe2 = null, qe2 = null;
  function re2(a2) {
    se2(a2, 0);
  }
  function te2(a2) {
    var b2 = ue2(a2);
    if (Wa(b2)) return a2;
  }
  function ve2(a2, b2) {
    if ("change" === a2) return b2;
  }
  var we2 = false;
  if (ia) {
    var xe2;
    if (ia) {
      var ye2 = "oninput" in document;
      if (!ye2) {
        var ze2 = document.createElement("div");
        ze2.setAttribute("oninput", "return;");
        ye2 = "function" === typeof ze2.oninput;
      }
      xe2 = ye2;
    } else xe2 = false;
    we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae2() {
    pe2 && (pe2.detachEvent("onpropertychange", Be2), qe2 = pe2 = null);
  }
  function Be2(a2) {
    if ("value" === a2.propertyName && te2(qe2)) {
      var b2 = [];
      ne2(b2, qe2, a2, xb(a2));
      Jb(re2, b2);
    }
  }
  function Ce2(a2, b2, c2) {
    "focusin" === a2 ? (Ae2(), pe2 = b2, qe2 = c2, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a2 && Ae2();
  }
  function De2(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te2(qe2);
  }
  function Ee2(a2, b2) {
    if ("click" === a2) return te2(b2);
  }
  function Fe2(a2, b2) {
    if ("input" === a2 || "change" === a2) return te2(b2);
  }
  function Ge2(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He2 = "function" === typeof Object.is ? Object.is : Ge2;
  function Ie2(a2, b2) {
    if (He2(a2, b2)) return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      if (!ja.call(b2, e2) || !He2(a2[e2], b2[e2])) return false;
    }
    return true;
  }
  function Je2(a2) {
    for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
    return a2;
  }
  function Ke2(a2, b2) {
    var c2 = Je2(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je2(c2);
    }
  }
  function Le2(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le2(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me2() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a2 = b2.contentWindow;
      else break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe2(a2) {
    var b2 = Me2(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le2(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne2(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
          !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
          e2 = Ke2(c2, f2);
          var g2 = Ke2(
            c2,
            d2
          );
          e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe2 = null, Re2 = null, Se2 = null, Te2 = false;
  function Ue2(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te2 || null == Qe2 || Qe2 !== Xa(d2) || (d2 = Qe2, "selectionStart" in d2 && Ne2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Ie2(Se2, d2) || (Se2 = d2, d2 = oe2(Re2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe2)));
  }
  function Ve2(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") }, Xe2 = {}, Ye2 = {};
  ia && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
  function Ze2(a2) {
    if (Xe2[a2]) return Xe2[a2];
    if (!We2[a2]) return a2;
    var b2 = We2[a2], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye2) return Xe2[a2] = b2[c2];
    return a2;
  }
  var $e2 = Ze2("animationend"), af = Ze2("animationiteration"), bf = Ze2("animationstart"), cf = Ze2("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e2, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se2(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e2 = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D2(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e2 = ed;
        break;
      case 4:
        e2 = gd;
        break;
      default:
        e2 = fd;
    }
    c2 = e2.bind(null, b2, c2, a2);
    e2 = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
    d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e2) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h2 = d2.stateNode.containerInfo;
        if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
          }
          g2 = g2.return;
        }
        for (; null !== h2; ) {
          g2 = Wc(h2);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h2 = h2.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e3 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e2:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
          if (k3 || h3) {
            h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
            } else k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue2(k3);
              u2 = null == n2 ? h3 : ue2(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e3);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2) b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue2(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve2;
          else if (me2(h3)) if (we2) na = Fe2;
          else {
            na = De2;
            var xa = Ce2;
          }
          else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee2);
          if (na && (na = na(a2, d3))) {
            ne2(g3, na, c2, e3);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue2(d3) : window;
        switch (a2) {
          case "focusin":
            if (me2(xa) || "true" === xa.contentEditable) Qe2 = xa, Re2 = d3, Se2 = null;
            break;
          case "focusout":
            Se2 = Re2 = Qe2 = null;
            break;
          case "mousedown":
            Te2 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te2 = false;
            Ue2(g3, c2, e3);
            break;
          case "selectionchange":
            if (Pe2) break;
          case "keydown":
          case "keyup":
            Ue2(g3, c2, e3);
        }
        var $a;
        if (ae2) b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie2 ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de2 && "ko" !== c2.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa = oe2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
        if ($a = ce2 ? je2(a2, c2) : ke2(a2, c2)) d3 = oe2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
      }
      se2(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe2(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e2 = a2, f2 = e2.stateNode;
      5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2) return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e2) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2) throw Error(p2(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e2 = c2.nextSibling;
      a2.removeChild(c2);
      if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e2;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a2;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2) return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of]) return c2;
          a2 = Mf(a2);
        }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue2(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
    throw Error(p2(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E2(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G2(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e2 = {}, f2;
    for (f2 in c2) e2[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
    return e2;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E2(Wf);
    E2(H2);
  }
  function ag(a2, b2, c2) {
    if (H2.current !== Vf) throw Error(p2(168));
    G2(H2, b2);
    G2(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e2 in d2) if (!(e2 in b2)) throw Error(p2(108, Ra(a2) || "Unknown", e2));
    return A2({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H2.current;
    G2(H2, a2);
    G2(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2) throw Error(p2(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
    G2(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C2;
      try {
        var c2 = eg;
        for (C2 = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e2) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
      } finally {
        C2 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e2 = 32 - oc(d2) - 1;
    d2 &= ~(1 << e2);
    c2 += 1;
    var f2 = 32 - oc(b2) + e2;
    if (30 < f2) {
      var g2 = e2 - e2 % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e2 -= g2;
      rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
      sg = f2 + a2;
    } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I2 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I2) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2)) throw Error(p2(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
        }
      } else {
        if (Dg(a2)) throw Error(p2(418));
        a2.flags = a2.flags & -4097 | 2;
        I2 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg) return false;
    if (!I2) return Fg(a2), I2 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2)) throw Hg(), Error(p2(418));
      for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2) throw Error(p2(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I2 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p2(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p2(147, a2));
        var e2 = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a3) {
          var b3 = e2.refs;
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2) throw Error(p2(284));
      if (!c2._owner) throw Error(p2(290, a2));
    }
    return a2;
  }
  function Mg(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function Ng(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function Og(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e2(a3, b3) {
      a3 = Pg(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = Lg(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
        Mg(a3, b3);
      }
      return null;
    }
    function r(a3, b3, c3, d3) {
      var e3 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e3 = c3._init, r(
              a3,
              b3,
              e3(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
        Mg(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e3) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e3);
        }
        if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n2(e3, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r(e3, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e3, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length) return c2(e3, u2), I2 && tg(e3, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I2 && tg(e3, w2);
        return l3;
      }
      for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function t2(e3, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3) throw Error(p2(150));
      h3 = l3.call(h3);
      if (null == h3) throw Error(p2(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r(e3, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e3, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done) return c2(
        e3,
        m3
      ), I2 && tg(e3, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I2 && tg(e3, w2);
        return l3;
      }
      for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props);
                    d3.ref = Lg(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
                else b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3)) return n2(a3, d3, f3, h3);
        if (Ka(f3)) return t2(a3, d3, f3, h3);
        Mg(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a2) {
    var b2 = Wg.current;
    E2(Wg);
    a2._currentValue = b2;
  }
  function bh(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2) break;
      a2 = a2.return;
    }
  }
  function ch(a2, b2) {
    Xg = a2;
    Zg = Yg = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
  }
  function eh(a2) {
    var b2 = a2._currentValue;
    if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p2(308));
      Yg = a2;
      Xg.dependencies = { lanes: 0, firstContext: a2 };
    } else Yg = Yg.next = a2;
    return b2;
  }
  var fh = null;
  function gh(a2) {
    null === fh ? fh = [a2] : fh.push(a2);
  }
  function hh(a2, b2, c2, d2) {
    var e2 = b2.interleaved;
    null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
    b2.interleaved = c2;
    return ih(a2, d2);
  }
  function ih(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function mh(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K2 & 2)) {
      var e2 = d2.pending;
      null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
      d2.pending = b2;
      return ih(a2, c2);
    }
    e2 = d2.interleaved;
    null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
    d2.interleaved = b2;
    return ih(a2, c2);
  }
  function oh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function ph(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e2 = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
      } else e2 = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a2, b2, c2, d2) {
    var e2 = a2.updateQueue;
    jh = false;
    var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
    if (null !== h2) {
      e2.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e2.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r = h2.lane, y2 = h2.eventTime;
        if ((d2 & r) === r) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h2;
            r = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r = "function" === typeof n2 ? n2.call(y2, q2, r) : n2;
                if (null === r || void 0 === r) break a;
                q2 = A2({}, q2, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r = e2.effects, null === r ? e2.effects = [h2] : r.push(h2));
        } else y2 = { eventTime: y2, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r;
        h2 = h2.next;
        if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
        else r = h2, h2 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e2.baseState = k2;
      e2.firstBaseUpdate = l2;
      e2.lastBaseUpdate = m2;
      b2 = e2.shared.interleaved;
      if (null !== b2) {
        e2 = b2;
        do
          g2 |= e2.lane, e2 = e2.next;
        while (e2 !== b2);
      } else null === f2 && (e2.shared.lanes = 0);
      rh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function sh(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2) throw Error(p2(191, e2));
        e2.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a2) {
    if (a2 === th) throw Error(p2(174));
    return a2;
  }
  function yh(a2, b2) {
    G2(wh, b2);
    G2(vh, a2);
    G2(uh, th);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E2(uh);
    G2(uh, b2);
  }
  function zh() {
    E2(uh);
    E2(vh);
    E2(wh);
  }
  function Ah(a2) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G2(vh, a2), G2(uh, c2));
  }
  function Bh(a2) {
    vh.current === a2 && (E2(uh), E2(vh));
  }
  var L2 = Uf(0);
  function Ch(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M2 = null, N2 = null, O2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P2() {
    throw Error(p2(321));
  }
  function Mh(a2, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He2(a2[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a2, b2, c2, d2, e2, f2) {
    Hh = f2;
    M2 = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
    a2 = c2(d2, e2);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p2(301));
        f2 += 1;
        O2 = N2 = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a2 = c2(d2, e2);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N2 && null !== N2.next;
    Hh = 0;
    O2 = N2 = M2 = null;
    Ih = false;
    if (b2) throw Error(p2(300));
    return a2;
  }
  function Sh() {
    var a2 = 0 !== Kh;
    Kh = 0;
    return a2;
  }
  function Th() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    return O2;
  }
  function Uh() {
    if (null === N2) {
      var a2 = M2.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else a2 = N2.next;
    var b2 = null === O2 ? M2.memoizedState : O2.next;
    if (null !== b2) O2 = b2, N2 = a2;
    else {
      if (null === a2) throw Error(p2(310));
      N2 = a2;
      a2 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
      null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    }
    return O2;
  }
  function Vh(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function Wh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = N2, e2 = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e2) {
        var g2 = e2.next;
        e2.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e2 = f2;
      c2.pending = null;
    }
    if (null !== e2) {
      f2 = e2.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          M2.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He2(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e2 = a2;
      do
        f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
      while (e2 !== a2);
    } else null === e2 && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
    if (null !== e2) {
      c2.pending = null;
      var g2 = e2 = e2.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e2);
      He2(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a2, b2) {
    var c2 = M2, d2 = Uh(), e2 = b2(), f2 = !He2(d2.memoizedState, e2);
    f2 && (d2.memoizedState = e2, dh = true);
    d2 = d2.queue;
    $h(ai.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== O2 && O2.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(c2, b2, e2);
    }
    return e2;
  }
  function di(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function ci(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei(b2) && fi(a2);
  }
  function ai(a2, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a2);
    });
  }
  function ei(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He2(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi(a2) {
    var b2 = ih(a2, 1);
    null !== b2 && gi(b2, a2, 1, -1);
  }
  function hi(a2) {
    var b2 = Th();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ii.bind(null, M2, a2);
    return [b2.memoizedState, a2];
  }
  function bi(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a2, b2, c2, d2) {
    var e2 = Th();
    M2.flags |= a2;
    e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li(a2, b2, c2, d2) {
    var e2 = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N2) {
      var g2 = N2.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e2.memoizedState = bi(b2, c2, f2, d2);
        return;
      }
    }
    M2.flags |= a2;
    e2.memoizedState = bi(1 | b2, c2, f2, d2);
  }
  function mi(a2, b2) {
    return ki(8390656, 8, a2, b2);
  }
  function $h(a2, b2) {
    return li(2048, 8, a2, b2);
  }
  function ni(a2, b2) {
    return li(4, 2, a2, b2);
  }
  function oi(a2, b2) {
    return li(4, 4, a2, b2);
  }
  function pi(a2, b2) {
    if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
  }
  function qi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return li(4, 4, pi.bind(null, b2, a2), c2);
  }
  function ri() {
  }
  function si(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ti(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ui(a2, b2, c2) {
    if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
    He2(c2, b2) || (c2 = yc(), M2.lanes |= c2, rh |= c2, a2.baseState = true);
    return b2;
  }
  function vi(a2, b2) {
    var c2 = C2;
    C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C2 = c2, Gh.transition = d2;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a2, b2, c2) {
    var d2 = yi(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, c2);
    else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
      var e2 = R2();
      gi(c2, a2, d2, e2);
      Bi(c2, b2, d2);
    }
  }
  function ii(a2, b2, c2) {
    var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, e2);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He2(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a2, b2, e2, d2);
      null !== c2 && (e2 = R2(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
    }
  }
  function zi(a2) {
    var b2 = a2.alternate;
    return a2 === M2 || null !== b2 && b2 === M2;
  }
  function Ai(a2, b2) {
    Jh = Ih = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Bi(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
    Th().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ki(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ki(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = xi.bind(null, M2, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = Th();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
    return Th().memoizedState = a2;
  }, useTransition: function() {
    var a2 = hi(false), b2 = a2[0];
    a2 = vi.bind(null, a2[1]);
    Th().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = M2, e2 = Th();
    if (I2) {
      if (void 0 === c2) throw Error(p2(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(d2, b2, c2);
    }
    e2.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e2.queue = f2;
    mi(ai.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = Th(), b2 = Q2.identifierPrefix;
    if (I2) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a2) {
      var b2 = Uh();
      return ui(b2, N2.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a2, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a2) {
    var b2 = Uh();
    return null === N2 ? b2.memoizedState = a2 : ui(b2, N2.memoizedState, a2);
  }, useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A2({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A2({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi(a2), f2 = mh(d2, e2);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi(a2), f2 = mh(d2, e2);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = R2(), d2 = yi(a2), e2 = mh(c2, d2);
    e2.tag = 2;
    void 0 !== b2 && null !== b2 && (e2.callback = b2);
    b2 = nh(a2, e2, d2);
    null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
  } };
  function Fi(a2, b2, c2, d2, e2, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie2(c2, d2) || !Ie2(e2, f2) : true;
  }
  function Gi(a2, b2, c2) {
    var d2 = false, e2 = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a2, b2, c2, d2) {
    var e2 = a2.stateNode;
    e2.props = c2;
    e2.state = a2.memoizedState;
    e2.refs = {};
    kh(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e2.context = Yf(a2, f2));
    e2.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
    "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
  }
  function Ji(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e2 = c2;
    } catch (f2) {
      e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e2, digest: null };
  }
  function Ki(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d2);
      Li(a2, b2);
    };
    return c2;
  }
  function Qi(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e2 = b2.value;
      c2.payload = function() {
        return d2(e2);
      };
      c2.callback = function() {
        Li(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a2, b2);
      "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Mi();
      var e2 = /* @__PURE__ */ new Set();
      d2.set(b2, e2);
    } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
    e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Ui(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Vi(a2, b2, c2, d2, e2) {
    if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e2;
    return a2;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a2, b2, c2, d2) {
    b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
  }
  function Yi(a2, b2, c2, d2, e2) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e2);
    d2 = Nh(a2, b2, c2, d2, f2, e2);
    c2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
    I2 && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, d2, e2);
    return b2.child;
  }
  function $i(a2, b2, c2, d2, e2) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
      a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e2)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie2;
      if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
    }
    b2.flags |= 1;
    a2 = Pg(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function bj(a2, b2, c2, d2, e2) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie2(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
      else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
    }
    return cj(a2, b2, c2, d2, e2);
  }
  function dj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G2(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(ej, fj), fj |= d2;
    Xi(a2, b2, e2, c2);
    return b2.child;
  }
  function gj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a2, b2, c2, d2, e2) {
    var f2 = Zf(c2) ? Xf : H2.current;
    f2 = Yf(b2, f2);
    ch(b2, e2);
    c2 = Nh(a2, b2, c2, d2, f2, e2);
    d2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
    I2 && d2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, c2, e2);
    return b2.child;
  }
  function hj(a2, b2, c2, d2, e2) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e2);
    if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
      jh = false;
      var r = b2.memoizedState;
      g2.state = r;
      qh(b2, d2, g2, e2);
      k2 = b2.memoizedState;
      h2 !== d2 || r !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r !== k2) && Hi(b2, g2, d2, k2);
      jh = false;
      r = b2.memoizedState;
      g2.state = r;
      qh(b2, d2, g2, e2);
      var n2 = b2.memoizedState;
      h2 !== q2 || r !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a2, b2, c2, d2, f2, e2);
  }
  function jj(a2, b2, c2, d2, e2, f2) {
    gj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
    d2 = b2.stateNode;
    Wi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e2 && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    yh(a2, b2.containerInfo);
  }
  function lj(a2, b2, c2, d2, e2) {
    Ig();
    Jg(e2);
    b2.flags |= 256;
    Xi(a2, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function oj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = L2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
    if (h2) f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
    G2(L2, e2 & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
    }
    e2 = a2.memoizedState;
    if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e2 = a2.child;
      h2 = e2.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
      null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a2, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function sj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a2.child, null, c2);
    a2 = qj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function rj(a2, b2, c2, d2, e2, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p2(422))), sj(a2, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e2 = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
      f2 = Tg(f2, e2, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
    if ("$!" === e2.data) {
      d2 = e2.nextSibling && e2.nextSibling.dataset;
      if (d2) var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p2(419));
      d2 = Ki(f2, d2, void 0);
      return sj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (dh || h2) {
      d2 = Q2;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e2 = 2;
            break;
          case 16:
            e2 = 8;
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
            e2 = 32;
            break;
          case 536870912:
            e2 = 268435456;
            break;
          default:
            e2 = 0;
        }
        e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
        0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
      }
      tj();
      d2 = Ki(Error(p2(421)));
      return sj(a2, b2, g2, d2);
    }
    if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e2.nextSibling);
    xg = b2;
    I2 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a2.return, b2, c2);
  }
  function wj(a2, b2, c2, d2, e2) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
  }
  function xj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
    Xi(a2, b2, d2.children, c2);
    d2 = L2.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
        if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
        else if (19 === a2.tag) vj(a2, c2, b2);
        else if (null !== a2.child) {
          a2.child.return = a2;
          a2 = a2.child;
          continue;
        }
        if (a2 === b2) break a;
        for (; null === a2.sibling; ) {
          if (null === a2.return || a2.return === b2) break a;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        a2 = a2.sibling;
      }
      d2 &= 1;
    }
    G2(L2, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        wj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Ch(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a2 && b2.child !== a2.child) throw Error(p2(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Pg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e2 = b2.memoizedProps.value;
        G2(Wg, d2._currentValue);
        d2._currentValue = e2;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G2(L2, L2.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
          G2(L2, L2.current & 1);
          a2 = Zi(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G2(L2, L2.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2) return xj(a2, b2, c2);
          b2.flags |= 128;
        }
        e2 = b2.memoizedState;
        null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
        G2(L2, L2.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a2, b2, c2);
    }
    return Zi(a2, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a2, b2, c2, d2) {
    var e2 = a2.memoizedProps;
    if (e2 !== d2) {
      a2 = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e2 = Ya(a2, e2);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e2 = A2({}, e2, { value: void 0 });
          d2 = A2({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e2 = gb(a2, e2);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
        var h2 = e2[l2];
        for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e2 ? e2[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
          for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a2, b2) {
    if (!I2) switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
  }
  function S2(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
    else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Ej(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
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
        return S2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E2(Wf);
        E2(H2);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a2, b2);
        S2(b2);
        return null;
      case 5:
        Bh(b2);
        var e2 = xh(wh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p2(166));
            S2(b2);
            return null;
          }
          a2 = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D2("cancel", d2);
                D2("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", d2);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d2);
                break;
              case "source":
                D2("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D2(
                  "error",
                  d2
                );
                D2("load", d2);
                break;
              case "details":
                D2("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D2("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D2("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D2("invalid", d2);
            }
            ub(c2, f2);
            e2 = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D2("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e2;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            zj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D2("cancel", a2);
                  D2("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  D2("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D2(
                    "error",
                    a2
                  );
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  D2("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  D2("invalid", a2);
                  break;
                case "option":
                  e2 = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = A2({}, d2, { value: void 0 });
                  D2("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  D2("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              ub(c2, e2);
              h2 = e2;
              for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e2.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S2(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p2(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2) switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S2(b2);
        return null;
      case 13:
        E2(L2);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2) throw Error(p2(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p2(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S2(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S2(b2);
        return null;
      case 4:
        return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S2(b2), null;
      case 10:
        return ah(b2.type._context), S2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 19:
        E2(L2);
        f2 = b2.memoizedState;
        if (null === f2) return S2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
            g2 = Ch(a2);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
              G2(L2, L2.current & 1 | 2);
              return b2.child;
            }
            a2 = a2.sibling;
          }
          null !== f2.tail && B2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a2 = Ch(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I2) return S2(b2), null;
          } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B2(), b2.sibling = null, c2 = L2.current, G2(L2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S2(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b2.tag));
  }
  function Ij(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return zh(), E2(Wf), E2(H2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E2(L2);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate) throw Error(p2(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E2(L2), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V2 = null;
  function Lj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W2(a2, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W2(a2, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a2, b2) {
    Cf = dd;
    a2 = Me2();
    if (Ne2(a2)) {
      if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
              q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
              3 === q2.nodeType && (g2 += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a2) break b;
              r === c2 && ++l2 === e2 && (h2 = g2);
              r === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r;
              r = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V2 = b2; null !== V2; ) if (b2 = V2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V2 = a2;
    else for (; null !== V2; ) {
      b2 = V2;
      try {
        var n2 = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n2) {
              var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p2(163));
        }
      } catch (F2) {
        W2(b2, b2.return, F2);
      }
      a2 = b2.sibling;
      if (null !== a2) {
        a2.return = b2.return;
        V2 = a2;
        break;
      }
      V2 = b2.return;
    }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e2 = d2 = d2.next;
      do {
        if ((e2.tag & a2) === a2) {
          var f2 = e2.destroy;
          e2.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e2 = e2.next;
      } while (e2 !== d2);
    }
  }
  function Qj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Sj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Sj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Tj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Uj(a2) {
    a: for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Tj(a2.return)) return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2) continue a;
        if (null === a2.child || 4 === a2.tag) continue a;
        else a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2)) return a2.stateNode;
    }
  }
  function Vj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
  }
  var X2 = null, Xj = false;
  function Yj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
  }
  function Zj(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
    switch (c2.tag) {
      case 5:
        U2 || Lj(c2, b2);
      case 6:
        var d2 = X2, e2 = Xj;
        X2 = null;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
        break;
      case 4:
        d2 = X2;
        e2 = Xj;
        X2 = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e2 = d2 = d2.next;
          do {
            var f2 = e2, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e2 = e2.next;
          } while (e2 !== d2);
        }
        Yj(a2, b2, c2);
        break;
      case 1:
        if (!U2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W2(c2, b2, h2);
        }
        Yj(a2, b2, c2);
        break;
      case 21:
        Yj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U2 = (d2 = U2) || null !== c2.memoizedState, Yj(a2, b2, c2), U2 = d2) : Yj(a2, b2, c2);
        break;
      default:
        Yj(a2, b2, c2);
    }
  }
  function ak(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a: for (; null !== h2; ) {
          switch (h2.tag) {
            case 5:
              X2 = h2.stateNode;
              Xj = false;
              break a;
            case 3:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h2 = h2.return;
        }
        if (null === X2) throw Error(p2(160));
        Zj(f2, g2, e2);
        X2 = null;
        Xj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W2(e2, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
  }
  function dk(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          try {
            Pj(3, a2, a2.return), Qj(3, a2);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
          try {
            Pj(5, a2, a2.return);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a2.flags & 32) {
          var e2 = a2.stateNode;
          try {
            ob(e2, "");
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2) try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          if (null === a2.stateNode) throw Error(p2(162));
          e2 = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e2.nodeValue = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W2(a2, a2.return, t2);
        }
        break;
      case 4:
        ck(b2, a2);
        ek(a2);
        break;
      case 13:
        ck(b2, a2);
        ek(a2);
        e2 = a2.child;
        e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
        d2 & 4 && ak(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U2 = (l2 = U2) || m2, ck(b2, a2), U2 = l2) : ck(b2, a2);
        ek(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V2 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V2 = m2; null !== V2; ) {
              r = V2;
              y2 = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n2 = r.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r;
                    c2 = r.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W2(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r, V2 = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W2(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a2);
        ek(a2);
        d2 & 4 && ak(a2);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a2
        ), ek(a2);
    }
  }
  function ek(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p2(160));
        }
        switch (d2.tag) {
          case 5:
            var e2 = d2.stateNode;
            d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
            var f2 = Uj(a2);
            Wj(a2, f2, e2);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
            Vj(a2, h2, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W2(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function hk(a2, b2, c2) {
    V2 = a2;
    ik(a2);
  }
  function ik(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V2; ) {
      var e2 = V2, f2 = e2.child;
      if (22 === e2.tag && d2) {
        var g2 = null !== e2.memoizedState || Jj;
        if (!g2) {
          var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U2;
          h2 = Jj;
          var l2 = U2;
          Jj = g2;
          if ((U2 = k2) && !l2) for (V2 = e2; null !== V2; ) g2 = V2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V2 = k2) : jk(e2);
          for (; null !== f2; ) V2 = f2, ik(f2), f2 = f2.sibling;
          V2 = e2;
          Jj = h2;
          U2 = l2;
        }
        kk(a2);
      } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a2);
    }
  }
  function kk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U2) if (null === c2) d2.componentDidMount();
              else {
                var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
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
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
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
              throw Error(p2(163));
          }
          U2 || b2.flags & 512 && Rj(b2);
        } catch (r) {
          W2(b2, b2.return, r);
        }
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function gk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function jk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W2(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e2 = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W2(b2, e2, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, g2, k2);
            }
        }
      } catch (k2) {
        W2(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V2 = h2;
        break;
      }
      V2 = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K2 = 0, Q2 = null, Y2 = null, Z2 = 0, fj = 0, ej = Uf(0), T2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R2() {
    return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
  }
  function yi(a2) {
    if (0 === (a2.mode & 1)) return 1;
    if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a2 = C2;
    if (0 !== a2) return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function gi(a2, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
    Ac(a2, c2, d2);
    if (0 === (K2 & 2) || a2 !== Q2) a2 === Q2 && (0 === (K2 & 2) && (qk |= c2), 4 === T2 && Ck(a2, Z2)), Dk(a2, d2), 1 === c2 && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B2() + 500, fg && jg());
  }
  function Dk(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        0 === (K2 & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Gk(a2, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K2 & 6)) throw Error(p2(327));
    var c2 = a2.callbackNode;
    if (Hk() && a2.callbackNode !== c2) return null;
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
    else {
      b2 = d2;
      var e2 = K2;
      K2 |= 2;
      var f2 = Jk();
      if (Q2 !== a2 || Z2 !== b2) uk = null, Gj = B2() + 500, Kk(a2, b2);
      do
        try {
          Lk();
          break;
        } catch (h2) {
          Mk(a2, h2);
        }
      while (1);
      $g();
      mk.current = f2;
      K2 = e2;
      null !== Y2 ? b2 = 0 : (Q2 = null, Z2 = 0, b2 = T2);
    }
    if (0 !== b2) {
      2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
      if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
      if (6 === b2) Ck(a2, d2);
      else {
        e2 = a2.current.alternate;
        if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
        a2.finishedWork = e2;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a2, tk, uk);
            break;
          case 3:
            Ck(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B2(), 10 < b2)) {
              if (0 !== uc(a2, 0)) break;
              e2 = a2.suspendedLanes;
              if ((e2 & d2) !== d2) {
                R2();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 4:
            Ck(a2, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a2.eventTimes;
            for (e2 = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e2 && (e2 = g2);
              d2 &= ~f2;
            }
            d2 = e2;
            d2 = B2() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 5:
            Pk(a2, tk, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a2, B2());
    return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
  }
  function Nk(a2, b2) {
    var c2 = sk;
    a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
    a2 = Ik(a2, b2);
    2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a2;
  }
  function Fj(a2) {
    null === tk ? tk = a2 : tk.push.apply(tk, a2);
  }
  function Ok(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He2(f2(), e2)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a2) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a2, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a2) {
    if (0 !== (K2 & 6)) throw Error(p2(327));
    Hk();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1)) return Dk(a2, B2()), null;
    var c2 = Ik(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B2()), c2;
    if (6 === c2) throw Error(p2(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Pk(a2, tk, uk);
    Dk(a2, B2());
    return null;
  }
  function Qk(a2, b2) {
    var c2 = K2;
    K2 |= 1;
    try {
      return a2(b2);
    } finally {
      K2 = c2, 0 === K2 && (Gj = B2() + 500, fg && jg());
    }
  }
  function Rk(a2) {
    null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
    var b2 = K2;
    K2 |= 1;
    var c2 = ok.transition, d2 = C2;
    try {
      if (ok.transition = null, C2 = 1, a2) return a2();
    } finally {
      C2 = d2, ok.transition = c2, K2 = b2, 0 === (K2 & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E2(ej);
  }
  function Kk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y2) for (c2 = Y2.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H2);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L2);
          break;
        case 19:
          E2(L2);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q2 = a2;
    Y2 = a2 = Pg(a2.current, null);
    Z2 = fj = b2;
    T2 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a2;
  }
  function Mk(a2, b2) {
    do {
      var c2 = Y2;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M2.memoizedState; null !== d2; ) {
            var e2 = d2.queue;
            null !== e2 && (e2.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O2 = N2 = M2 = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T2 = 1;
          pk = b2;
          Y2 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z2;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r = m2.alternate;
              r ? (m2.updateQueue = r.updateQueue, m2.memoizedState = r.memoizedState, m2.lanes = r.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I2 && h2.mode & 1) {
            var J2 = Ui(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g2, h2, f2, b2);
              Jg(Ji(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h2);
          4 !== T2 && (T2 = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi(f2, h2, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a2 = mk.current;
    mk.current = Rh;
    return null === a2 ? Rh : a2;
  }
  function tj() {
    if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
    null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
  }
  function Ik(a2, b2) {
    var c2 = K2;
    K2 |= 2;
    var d2 = Jk();
    if (Q2 !== a2 || Z2 !== b2) uk = null, Kk(a2, b2);
    do
      try {
        Tk();
        break;
      } catch (e2) {
        Mk(a2, e2);
      }
    while (1);
    $g();
    K2 = c2;
    mk.current = d2;
    if (null !== Y2) throw Error(p2(261));
    Q2 = null;
    Z2 = 0;
    return T2;
  }
  function Tk() {
    for (; null !== Y2; ) Uk(Y2);
  }
  function Lk() {
    for (; null !== Y2 && !cc(); ) Uk(Y2);
  }
  function Uk(a2) {
    var b2 = Vk(a2.alternate, a2, fj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Sk(a2) : Y2 = b2;
    nk.current = null;
  }
  function Sk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y2 = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y2 = c2;
          return;
        }
        if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T2 = 6;
          Y2 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y2 = b2;
        return;
      }
      Y2 = b2 = a2;
    } while (null !== b2);
    0 === T2 && (T2 = 5);
  }
  function Pk(a2, b2, c2) {
    var d2 = C2, e2 = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a2, b2, c2, d2);
    } finally {
      ok.transition = e2, C2 = d2;
    }
    return null;
  }
  function Wk(a2, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K2 & 6)) throw Error(p2(327));
    c2 = a2.finishedWork;
    var e2 = a2.finishedLanes;
    if (null === c2) return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current) throw Error(p2(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === Q2 && (Y2 = Q2 = null, Z2 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C2;
      C2 = 1;
      var h2 = K2;
      K2 |= 4;
      nk.current = null;
      Oj(a2, c2);
      dk(c2, a2);
      Oe2(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      hk(c2);
      dc();
      K2 = h2;
      C2 = g2;
      ok.transition = f2;
    } else a2.current = c2;
    vk && (vk = false, wk = a2, xk = e2);
    f2 = a2.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a2, B2());
    if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
    if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
    0 !== (xk & 1) && 0 !== a2.tag && Hk();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a2 = Dc(xk), b2 = ok.transition, c2 = C2;
      try {
        ok.transition = null;
        C2 = 16 > a2 ? 16 : a2;
        if (null === wk) var d2 = false;
        else {
          a2 = wk;
          wk = null;
          xk = 0;
          if (0 !== (K2 & 6)) throw Error(p2(331));
          var e2 = K2;
          K2 |= 4;
          for (V2 = a2.current; null !== V2; ) {
            var f2 = V2, g2 = f2.child;
            if (0 !== (V2.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V2 = l2; null !== V2; ) {
                    var m2 = V2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V2 = q2;
                    else for (; null !== V2; ) {
                      m2 = V2;
                      var r = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V2 = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y2;
                        V2 = r;
                        break;
                      }
                      V2 = y2;
                    }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V2 = g2;
            else b: for (; null !== V2; ) {
              f2 = V2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V2 = x2;
                break b;
              }
              V2 = f2.return;
            }
          }
          var w2 = a2.current;
          for (V2 = w2; null !== V2; ) {
            g2 = V2;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V2 = u2;
            else b: for (g2 = w2; null !== V2; ) {
              h2 = V2;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h2);
                }
              } catch (na) {
                W2(h2, h2.return, na);
              }
              if (h2 === g2) {
                V2 = null;
                break b;
              }
              var F2 = h2.sibling;
              if (null !== F2) {
                F2.return = h2.return;
                V2 = F2;
                break b;
              }
              V2 = h2.return;
            }
          }
          K2 = e2;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C2 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a2, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a2, b2, 1);
    a2 = nh(a2, b2, 1);
    b2 = R2();
    null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
  }
  function W2(a2, b2, c2) {
    if (3 === a2.tag) Xk(a2, a2, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
          a2 = Ji(c2, a2);
          a2 = Qi(b2, a2, 1);
          b2 = nh(b2, a2, 1);
          a2 = R2();
          null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R2();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    Q2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a2, 0) : rk |= c2);
    Dk(a2, b2);
  }
  function Yk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R2();
    a2 = ih(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
  }
  function uj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a2, c2);
  }
  function bk(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e2 = a2.memoizedState;
        null !== e2 && (c2 = e2.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a2, c2);
  }
  var Vk;
  Vk = function(a2, b2, c2) {
    if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
      dh = 0 !== (a2.flags & 131072) ? true : false;
    }
    else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a2, b2);
        a2 = b2.pendingProps;
        var e2 = Yf(b2, H2.current);
        ch(b2, c2);
        e2 = Nh(null, b2, d2, a2, e2, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a2, b2);
          a2 = b2.pendingProps;
          e2 = d2._init;
          d2 = e2(d2._payload);
          b2.type = d2;
          e2 = b2.tag = Zk(d2);
          a2 = Ci(d2, a2);
          switch (e2) {
            case 0:
              b2 = cj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
              break a;
          }
          throw Error(p2(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b2, d2, e2, c2);
      case 1:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b2, d2, e2, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a2) throw Error(p2(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e2 = f2.element;
          lh(a2, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ji(Error(p2(423)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ji(Error(p2(424)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e2) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
            Xi(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return oj(a2, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b2, d2, e2, c2);
      case 7:
        return Xi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e2 = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e2.value;
          G2(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He2(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g2 = f2.child;
              for (var k2 = h2.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h2.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p2(341));
              g2.lanes |= c2;
              h2 = g2.alternate;
              null !== h2 && (h2.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi(a2, b2, e2.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b2, d2, e2, c2);
      case 15:
        return bj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
      case 19:
        return xj(a2, b2, c2);
      case 22:
        return dj(a2, b2, c2);
    }
    throw Error(p2(156, b2.tag));
  };
  function Fk(a2, b2) {
    return ac(a2, b2);
  }
  function $k(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new $k(a2, b2, c2, d2);
  }
  function aj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function Zk(a2) {
    if ("function" === typeof a2) return aj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da) return 11;
      if (a2 === Ga) return 14;
    }
    return 2;
  }
  function Pg(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function Rg(a2, b2, c2, d2, e2, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2) aj(a2) && (g2 = 1);
    else if ("string" === typeof a2) g2 = 5;
    else a: switch (a2) {
      case ya:
        return Tg(c2.children, e2, f2, b2);
      case za:
        g2 = 8;
        e2 |= 8;
        break;
      case Aa:
        return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
      case Ea:
        return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
      case Fa:
        return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
      case Ia:
        return pj(c2, e2, f2, b2);
      default:
        if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
    }
    b2 = Bg(g2, c2, b2, e2);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function pj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function Qg(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function Sg(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function al(a2, b2, c2, d2, e2) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e2;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = new al(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a2;
  }
  function cl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function dl(a2) {
    if (!a2) return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p2(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p2(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2)) return bg(a2, c2, b2);
    }
    return b2;
  }
  function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
    a2.context = dl(null);
    c2 = a2.current;
    d2 = R2();
    e2 = yi(c2);
    f2 = mh(d2, e2);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e2);
    a2.current.lanes = e2;
    Ac(a2, e2, d2);
    Dk(a2, d2);
    return a2;
  }
  function fl(a2, b2, c2, d2) {
    var e2 = b2.current, f2 = R2(), g2 = yi(e2);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = nh(e2, b2, g2);
    null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
    return g2;
  }
  function gl(a2) {
    a2 = a2.current;
    if (!a2.child) return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function hl(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a2, b2) {
    hl(a2, b2);
    (a2 = a2.alternate) && hl(a2, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ll(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.render = ll.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p2(409));
    fl(a2, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Rk(function() {
        fl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function nl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function pl() {
  }
  function ql(a2, b2, c2, d2, e2) {
    if (e2) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = gl(g2);
          f2.call(a3);
        };
      }
      var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Rk();
      return g2;
    }
    for (; e2 = a2.lastChild; ) a2.removeChild(e2);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = gl(k2);
        h2.call(a3);
      };
    }
    var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a2, b2, c2, d2, e2) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e2) {
        var h2 = e2;
        e2 = function() {
          var a3 = gl(g2);
          h2.call(a3);
        };
      }
      fl(b2, g2, a2, e2);
    } else g2 = ql(c2, b2, a2, e2, d2);
    return gl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a2, 1);
          if (null !== b3) {
            var c3 = R2();
            gi(b3, a2, 1, c3);
          }
        }), il(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = ih(a2, 134217728);
      if (null !== b2) {
        var c2 = R2();
        gi(b2, a2, 134217728, c2);
      }
      il(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = yi(a2), c2 = ih(a2, b2);
      if (null !== c2) {
        var d2 = R2();
        gi(c2, a2, b2, d2);
      }
      il(a2, b2);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a2, b2) {
    var c2 = C2;
    try {
      return C2 = a2, b2();
    } finally {
      C2 = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e2 = Db(d2);
              if (!e2) throw Error(p2(90));
              Wa(d2);
              bb(d2, e2);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p2(200));
    return cl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!nl(a2)) throw Error(p2(299));
    var c2 = false, d2 = "", e2 = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
    b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2) return null;
    if (1 === a2.nodeType) return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render) throw Error(p2(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p2(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Rk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!nl(a2)) throw Error(p2(405));
    var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e2
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!ol(a2)) throw Error(p2(40));
    return a2._reactRootContainer ? (Rk(function() {
      rl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!ol(c2)) throw Error(p2(200));
    if (null == a2 || void 0 === a2._reactInternals) throw Error(p2(38));
    return rl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m2 = requireReactDom();
  {
    client.createRoot = m2.createRoot;
    client.hydrateRoot = m2.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var PopStateEventType = "popstate";
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to2) {
    return typeof to2 === "string" ? to2 : createPath(to2);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to2, state = null, key) {
  let location = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to2 === "string" ? parsePath(to2) : to2,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to2 && to2.key || key || createKey()
  };
  return location;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to2, state) {
    action = "PUSH";
    let location = createLocation(history.location, to2, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to2, state) {
    action = "REPLACE";
    let location = createLocation(history.location, to2, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to2) {
    return createBrowserURLImpl(to2);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to2) {
      return createHref2(window2, to2);
    },
    createURL,
    encodeLocation(to2) {
      let url = createURL(to2);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
function createBrowserURLImpl(to2, isAbsolute = false) {
  let base = "http://localhost";
  if (typeof window !== "undefined") {
    base = window.location.origin !== "null" ? window.location.origin : window.location.href;
  }
  invariant(base, "No window.location.(origin|href) available to create URL");
  let href = typeof to2 === "string" ? to2 : createPath(to2);
  href = href.replace(/ $/, "%20");
  if (!isAbsolute && href.startsWith("//")) {
    href = base + href;
  }
  return new URL(href, base);
}
function matchRoutes(routes2, locationArg, basename = "/") {
  return matchRoutesImpl(routes2, locationArg, basename, false);
}
function matchRoutesImpl(routes2, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i2],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches = [], parentsMeta = [], parentPath = "", _hasParentOptionalSegments = false) {
  let flattenRoute = (route, index, hasParentOptionalSegments = _hasParentOptionalSegments, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      if (!meta.relativePath.startsWith(parentPath) && hasParentOptionalSegments) {
        return;
      }
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(
        route.children,
        branches,
        routesMeta,
        path,
        hasParentOptionalSegments
      );
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index) => {
    var _a;
    if (route.path === "" || !((_a = route.path) == null ? void 0 : _a.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, true, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(
      a2.routesMeta.map((meta) => meta.childrenIndex),
      b2.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_2, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to2, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to2;
  if (typeof toArg === "string") {
    to2 = parsePath(toArg);
  } else {
    to2 = { ...toArg };
    invariant(
      !to2.pathname || !to2.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to2)
    );
    invariant(
      !to2.pathname || !to2.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to2)
    );
    invariant(
      !to2.search || !to2.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to2)
    );
  }
  let isEmptyPath = toArg === "" || to2.pathname === "";
  let toPathname = isEmptyPath ? "/" : to2.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
new Set(validRequestMethodsArr);
var DataRouterContext = reactExports.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = reactExports.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
reactExports.createContext(false);
var ViewTransitionContext = reactExports.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = reactExports.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = reactExports.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = reactExports.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = reactExports.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = reactExports.createContext(null);
RouteErrorContext.displayName = "RouteError";
function useHref(to2, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to2, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return reactExports.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    (to2, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to2 === "number") {
        navigator2.go(to2);
        return;
      }
      let path = resolveTo(
        to2,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
reactExports.createContext(null);
function useResolvedPath(to2, { relative } = {}) {
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return reactExports.useMemo(
    () => resolveTo(
      to2,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to2, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes2, locationArg) {
  return useRoutesImpl(routes2, locationArg);
}
function useRoutesImpl(routes2, locationArg, dataRouterState, unstable_onError, future) {
  var _a;
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches: parentMatches } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || ((_a = parsedLocationArg.pathname) == null ? void 0 : _a.startsWith(parentPathnameBase)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes2, { pathname: remainingPathname });
  {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    unstable_onError,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP"
          /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.unstable_onError) {
      this.props.unstable_onError(error, errorInfo);
    } else {
      console.error(
        "React Router caught the following error during render",
        error
      );
    }
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ reactExports.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, unstable_onError = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match = renderedMatches[i2];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight(
    (outlet, match, index) => {
      let error;
      let shouldRenderHydrateFallback = false;
      let errorElement = null;
      let hydrateFallbackElement = null;
      if (dataRouterState) {
        error = errors && match.route.id ? errors[match.route.id] : void 0;
        errorElement = match.route.errorElement || defaultErrorElement;
        if (renderFallback) {
          if (fallbackIndex < 0 && index === 0) {
            warningOnce(
              "route-fallback",
              false,
              "No `HydrateFallback` element provided to render during initial hydration"
            );
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = null;
          } else if (fallbackIndex === index) {
            shouldRenderHydrateFallback = true;
            hydrateFallbackElement = match.route.hydrateFallbackElement || null;
          }
        }
      }
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => {
        let children;
        if (error) {
          children = errorElement;
        } else if (shouldRenderHydrateFallback) {
          children = hydrateFallbackElement;
        } else if (match.route.Component) {
          children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
        } else if (match.route.element) {
          children = match.route.element;
        } else {
          children = outlet;
        }
        return /* @__PURE__ */ reactExports.createElement(
          RenderedRoute,
          {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          }
        );
      };
      return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(
        RenderErrorBoundary,
        {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: { outlet: null, matches: matches2, isDataRoute: true },
          unstable_onError
        }
      ) : getChildren();
    },
    null
  );
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useRouteError() {
  var _a;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return (_a = state.errors) == null ? void 0 : _a[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    async (to2, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to2 === "number") {
        router.navigate(to2);
      } else {
        await router.navigate(to2, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
reactExports.memo(DataRoutes);
function DataRoutes({
  routes: routes2,
  future,
  state,
  unstable_onError
}) {
  return useRoutesImpl(routes2, void 0, state, unstable_onError, future);
}
function Route(props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes2 = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes2.push.apply(
        routes2,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes2.push(route);
  });
  return routes2;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e2) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function singleFetchUrl(reqUrl, basename, extension) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = `_root.${extension}`;
  } else if (basename && stripBasename(url.pathname, basename) === "/") {
    url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
  }
  return url;
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    void 0) ;
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _a;
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_a = currentMatches[index].route.path) == null ? void 0 : _a.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      var _a;
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: ((_a = currentMatches[0]) == null ? void 0 : _a.params) || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.clientActionModule) {
        hrefs = hrefs.concat(route.clientActionModule);
      }
      if (route.clientLoaderModule) {
        hrefs = hrefs.concat(route.clientLoaderModule);
      }
      if (includeHydrateFallback && route.hydrateFallbackModule) {
        hrefs = hrefs.concat(route.hydrateFallbackModule);
      }
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function useDataRouterContext2() {
  let context = reactExports.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = reactExports.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = reactExports.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = reactExports.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = reactExports.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  reactExports.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({ page, ...linkProps }) {
  let { router } = useDataRouterContext2();
  let matches = reactExports.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, { page, matches, ...linkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = reactExports.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m2) => {
      var _a;
      let manifestRoute = manifest.routes[m2.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && ((_a = routeModules[m2.route.id]) == null ? void 0 : _a.shouldRevalidate)) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m2.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page, basename, "data");
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    basename,
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = reactExports.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ reactExports.createElement("link", { key, nonce: linkProps.nonce, ...link })
  )));
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = // @ts-expect-error
    "7.8.2";
  }
} catch (e2) {
}
function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let setState = reactExports.useCallback(
    (newState) => {
      reactExports.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = reactExports.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to: to2,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = reactExports.useContext(NavigationContext);
    let isAbsolute = typeof to2 === "string" && ABSOLUTE_URL_REGEX2.test(to2);
    let absoluteHref;
    let isExternal = false;
    if (typeof to2 === "string" && isAbsolute) {
      absoluteHref = to2;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to2 = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e2) {
          warning(
            false,
            `<Link to="${to2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href = useHref(to2, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to2, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ reactExports.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, link, /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = reactExports.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to: to2,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to2, { relative: rest.relative });
    let location = useLocation();
    let routerState = reactExports.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = reactExports.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ reactExports.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to: to2,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = reactExports.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ reactExports.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useLinkClickHandler(to2, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to2, { relative });
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to2, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to2,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = reactExports.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return reactExports.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = reactExports.useContext(NavigationContext);
  let routeContext = reactExports.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to2, { relative } = {}) {
  let vtContext = reactExports.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to2, { relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
var reactDomExports = requireReactDom();
const M$4 = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
const A$3 = {
  AdminLayout: "subtle",
  // Professional admin interfaces
  PageLayout: "clean",
  // Clean public websites
  AuthLayout: "clean",
  // Focused authentication
  PopupLayout: "clean",
  // Clean extensions
  BlankLayout: "clean",
  // Simple pages
  Header: "clean",
  // Clean headers
  Footer: "contrast",
  // Bold footers
  AdminSidebar: "subtle",
  // Subtle sidebars
  AdminHeader: "clean",
  // Clean admin headers
  PopupHeader: "brand"
  // Branded popup headers
}, I$8 = {
  clean: "bg-background text-foreground border-border",
  subtle: "bg-muted/30 text-foreground border-border/50",
  brand: "bg-primary text-primary-foreground border-primary/20",
  contrast: "bg-foreground text-background border-foreground/20"
  // Automatically flips with mode
}, m$3 = [
  "base",
  // Clean default - showcases base system (DEFAULT)
  "elegant",
  // Minimal blue - clean & professional 
  "metro",
  // Dark teal - admin dashboards
  "studio",
  // Designer grays - creative tools
  "vivid"
  // Premium cursive - luxury/creative portfolios
], p$2 = reactExports.createContext(void 0);
function P$6(t2, n2, a2, i2 = false, c2 = "uikit-theme") {
  if (typeof window > "u")
    return { theme: t2, mode: n2 };
  if (i2)
    return console.log(`🎨 Config priority: ${t2} (${n2} mode)`), { theme: t2, mode: n2 };
  if (c2 === null) {
    if (a2) {
      const o2 = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference (no storage): ${t2} (${o2} mode)`), { theme: t2, mode: o2 };
    }
    return console.log(`🎨 Props only (no storage): ${t2} (${n2} mode)`), { theme: t2, mode: n2 };
  }
  try {
    const r = localStorage.getItem(c2);
    if (r) {
      const o2 = JSON.parse(r);
      if (m$3.includes(o2.theme) && ["light", "dark"].includes(o2.mode))
        return console.log(`🎨 Restored from storage: ${o2.theme} (${o2.mode} mode)`), o2;
    }
    if (a2) {
      const d2 = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      return console.log(`🎨 System preference: ${t2} (${d2} mode)`), { theme: t2, mode: d2 };
    }
    return console.log(`🎨 Props fallback: ${t2} (${n2} mode)`), { theme: t2, mode: n2 };
  } catch (r) {
    return console.warn("Failed to load theme preferences, using defaults:", r), { theme: t2, mode: n2 };
  }
}
function g$5(t2, n2) {
  if (typeof window > "u") return;
  const a2 = document.documentElement;
  a2.classList.remove("light", "dark"), m$3.forEach((i2) => {
    a2.classList.remove(`theme-${i2}`);
  }), a2.classList.add(n2), a2.classList.add(`theme-${t2}`);
}
function H$8({
  children: t2,
  theme: n2 = "base",
  mode: a2 = "light",
  detectSystem: i2 = true,
  forceConfig: c2 = false,
  // 🔧 NEW: Force config over storage
  storageKey: r = "uikit-theme"
  // 🔧 NEW: Configurable storage key
}) {
  const [o2, d2] = reactExports.useState(() => {
    const e2 = P$6(n2, a2, i2, c2, r);
    return g$5(e2.theme, e2.mode), e2;
  });
  reactExports.useEffect(() => {
    if (typeof window > "u") return;
    const { theme: e2, mode: s2 } = o2;
    if (g$5(e2, s2), r && !c2)
      try {
        localStorage.setItem(r, JSON.stringify({ theme: e2, mode: s2 }));
      } catch (l2) {
        console.warn("Failed to save theme preferences:", l2);
      }
    console.log(`🎨 Applied theme: ${e2} (${s2} mode)`);
  }, [o2, r, c2]), reactExports.useEffect(() => {
    if (!i2 || typeof window > "u") return;
    const e2 = window.matchMedia("(prefers-color-scheme: dark)"), s2 = (l2) => {
      if (!c2)
        try {
          (r ? localStorage.getItem(r) : null) || d2((y2) => ({
            ...y2,
            mode: l2.matches ? "dark" : "light"
          }));
        } catch (h2) {
          console.warn("Failed to handle system preference change:", h2);
        }
    };
    return e2.addEventListener("change", s2), () => e2.removeEventListener("change", s2);
  }, [i2, c2, r]);
  const f2 = (e2) => {
    if (!m$3.includes(e2)) {
      console.warn(`Invalid theme: ${e2}. Available themes:`, m$3);
      return;
    }
    d2((s2) => ({ ...s2, theme: e2 }));
  }, b2 = (e2) => {
    if (e2 !== "light" && e2 !== "dark") {
      console.warn(`Invalid mode: ${e2}. Expected 'light' or 'dark'.`);
      return;
    }
    d2((s2) => ({ ...s2, mode: e2 }));
  }, k2 = () => {
    d2((e2) => ({
      ...e2,
      mode: e2.mode === "light" ? "dark" : "light"
    }));
  }, v2 = (e2) => I$8[e2], $2 = (e2) => A$3[e2] || "clean", w2 = {
    theme: o2.theme,
    mode: o2.mode,
    availableThemes: m$3,
    setTheme: f2,
    setMode: b2,
    toggleMode: k2,
    getToneClasses: v2,
    getDefaultTone: $2
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(p$2.Provider, { value: w2, children: t2 });
}
function N$5() {
  const t2 = reactExports.useContext(p$2);
  if (!t2)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t2;
}
function Y$6(e2) {
  var r, t2, o2 = "";
  if (typeof e2 == "string" || typeof e2 == "number") o2 += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var l2 = e2.length;
    for (r = 0; r < l2; r++) e2[r] && (t2 = Y$6(e2[r])) && (o2 && (o2 += " "), o2 += t2);
  } else for (t2 in e2) e2[t2] && (o2 && (o2 += " "), o2 += t2);
  return o2;
}
function ne$4() {
  for (var e2, r, t2 = 0, o2 = "", l2 = arguments.length; t2 < l2; t2++) (e2 = arguments[t2]) && (r = Y$6(e2)) && (o2 && (o2 += " "), o2 += r);
  return o2;
}
const B$7 = "-", se$3 = (e2) => {
  const r = ie$3(e2), {
    conflictingClassGroups: t2,
    conflictingClassGroupModifiers: o2
  } = e2;
  return {
    getClassGroupId: (a2) => {
      const s2 = a2.split(B$7);
      return s2[0] === "" && s2.length !== 1 && s2.shift(), D$3(s2, r) || le$4(a2);
    },
    getConflictingClassGroupIds: (a2, s2) => {
      const u2 = t2[a2] || [];
      return s2 && o2[a2] ? [...u2, ...o2[a2]] : u2;
    }
  };
}, D$3 = (e2, r) => {
  var _a;
  if (e2.length === 0)
    return r.classGroupId;
  const t2 = e2[0], o2 = r.nextPart.get(t2), l2 = o2 ? D$3(e2.slice(1), o2) : void 0;
  if (l2)
    return l2;
  if (r.validators.length === 0)
    return;
  const n2 = e2.join(B$7);
  return (_a = r.validators.find(({
    validator: a2
  }) => a2(n2))) == null ? void 0 : _a.classGroupId;
}, K$5 = /^\[(.+)\]$/, le$4 = (e2) => {
  if (K$5.test(e2)) {
    const r = K$5.exec(e2)[1], t2 = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t2)
      return "arbitrary.." + t2;
  }
}, ie$3 = (e2) => {
  const {
    theme: r,
    prefix: t2
  } = e2, o2 = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ce$4(Object.entries(e2.classGroups), t2).forEach(([n2, a2]) => {
    $$4(a2, o2, n2, r);
  }), o2;
}, $$4 = (e2, r, t2, o2) => {
  e2.forEach((l2) => {
    if (typeof l2 == "string") {
      const n2 = l2 === "" ? r : Q$4(r, l2);
      n2.classGroupId = t2;
      return;
    }
    if (typeof l2 == "function") {
      if (ae$4(l2)) {
        $$4(l2(o2), r, t2, o2);
        return;
      }
      r.validators.push({
        validator: l2,
        classGroupId: t2
      });
      return;
    }
    Object.entries(l2).forEach(([n2, a2]) => {
      $$4(a2, Q$4(r, n2), t2, o2);
    });
  });
}, Q$4 = (e2, r) => {
  let t2 = e2;
  return r.split(B$7).forEach((o2) => {
    t2.nextPart.has(o2) || t2.nextPart.set(o2, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t2 = t2.nextPart.get(o2);
  }), t2;
}, ae$4 = (e2) => e2.isThemeGetter, ce$4 = (e2, r) => r ? e2.map(([t2, o2]) => {
  const l2 = o2.map((n2) => typeof n2 == "string" ? r + n2 : typeof n2 == "object" ? Object.fromEntries(Object.entries(n2).map(([a2, s2]) => [r + a2, s2])) : n2);
  return [t2, l2];
}) : e2, de$4 = (e2) => {
  if (e2 < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map();
  const l2 = (n2, a2) => {
    t2.set(n2, a2), r++, r > e2 && (r = 0, o2 = t2, t2 = /* @__PURE__ */ new Map());
  };
  return {
    get(n2) {
      let a2 = t2.get(n2);
      if (a2 !== void 0)
        return a2;
      if ((a2 = o2.get(n2)) !== void 0)
        return l2(n2, a2), a2;
    },
    set(n2, a2) {
      t2.has(n2) ? t2.set(n2, a2) : l2(n2, a2);
    }
  };
}, ee$6 = "!", pe$3 = (e2) => {
  const {
    separator: r,
    experimentalParseClassName: t2
  } = e2, o2 = r.length === 1, l2 = r[0], n2 = r.length, a2 = (s2) => {
    const u2 = [];
    let g2 = 0, m2 = 0, y2;
    for (let p2 = 0; p2 < s2.length; p2++) {
      let f2 = s2[p2];
      if (g2 === 0) {
        if (f2 === l2 && (o2 || s2.slice(p2, p2 + n2) === r)) {
          u2.push(s2.slice(m2, p2)), m2 = p2 + n2;
          continue;
        }
        if (f2 === "/") {
          y2 = p2;
          continue;
        }
      }
      f2 === "[" ? g2++ : f2 === "]" && g2--;
    }
    const x2 = u2.length === 0 ? s2 : s2.substring(m2), v2 = x2.startsWith(ee$6), w2 = v2 ? x2.substring(1) : x2, b2 = y2 && y2 > m2 ? y2 - m2 : void 0;
    return {
      modifiers: u2,
      hasImportantModifier: v2,
      baseClassName: w2,
      maybePostfixModifierPosition: b2
    };
  };
  return t2 ? (s2) => t2({
    className: s2,
    parseClassName: a2
  }) : a2;
}, ue$4 = (e2) => {
  if (e2.length <= 1)
    return e2;
  const r = [];
  let t2 = [];
  return e2.forEach((o2) => {
    o2[0] === "[" ? (r.push(...t2.sort(), o2), t2 = []) : t2.push(o2);
  }), r.push(...t2.sort()), r;
}, be$4 = (e2) => ({
  cache: de$4(e2.cacheSize),
  parseClassName: pe$3(e2),
  ...se$3(e2)
}), ge$1 = /\s+/, fe$3 = (e2, r) => {
  const {
    parseClassName: t2,
    getClassGroupId: o2,
    getConflictingClassGroupIds: l2
  } = r, n2 = [], a2 = e2.trim().split(ge$1);
  let s2 = "";
  for (let u2 = a2.length - 1; u2 >= 0; u2 -= 1) {
    const g2 = a2[u2], {
      modifiers: m2,
      hasImportantModifier: y2,
      baseClassName: x2,
      maybePostfixModifierPosition: v2
    } = t2(g2);
    let w2 = !!v2, b2 = o2(w2 ? x2.substring(0, v2) : x2);
    if (!b2) {
      if (!w2) {
        s2 = g2 + (s2.length > 0 ? " " + s2 : s2);
        continue;
      }
      if (b2 = o2(x2), !b2) {
        s2 = g2 + (s2.length > 0 ? " " + s2 : s2);
        continue;
      }
      w2 = false;
    }
    const p2 = ue$4(m2).join(":"), f2 = y2 ? p2 + ee$6 : p2, h2 = f2 + b2;
    if (n2.includes(h2))
      continue;
    n2.push(h2);
    const R2 = l2(b2, w2);
    for (let S2 = 0; S2 < R2.length; ++S2) {
      const N2 = R2[S2];
      n2.push(f2 + N2);
    }
    s2 = g2 + (s2.length > 0 ? " " + s2 : s2);
  }
  return s2;
};
function me$1() {
  let e2 = 0, r, t2, o2 = "";
  for (; e2 < arguments.length; )
    (r = arguments[e2++]) && (t2 = re$3(r)) && (o2 && (o2 += " "), o2 += t2);
  return o2;
}
const re$3 = (e2) => {
  if (typeof e2 == "string")
    return e2;
  let r, t2 = "";
  for (let o2 = 0; o2 < e2.length; o2++)
    e2[o2] && (r = re$3(e2[o2])) && (t2 && (t2 += " "), t2 += r);
  return t2;
};
function he$1(e2, ...r) {
  let t2, o2, l2, n2 = a2;
  function a2(u2) {
    const g2 = r.reduce((m2, y2) => y2(m2), e2());
    return t2 = be$4(g2), o2 = t2.cache.get, l2 = t2.cache.set, n2 = s2, s2(u2);
  }
  function s2(u2) {
    const g2 = o2(u2);
    if (g2)
      return g2;
    const m2 = fe$3(u2, t2);
    return l2(u2, m2), m2;
  }
  return function() {
    return n2(me$1.apply(null, arguments));
  };
}
const c$7 = (e2) => {
  const r = (t2) => t2[e2] || [];
  return r.isThemeGetter = true, r;
}, te$5 = /^\[(?:([a-z-]+):)?(.+)\]$/i, ye$3 = /^\d+\/\d+$/, xe$3 = /* @__PURE__ */ new Set(["px", "full", "screen"]), we$3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ve$2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ke$3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ce$3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ze$3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, C$7 = (e2) => M$3(e2) || xe$3.has(e2) || ye$3.test(e2), z$6 = (e2) => G$4(e2, "length", je$3), M$3 = (e2) => !!e2 && !Number.isNaN(Number(e2)), _$4 = (e2) => G$4(e2, "number", M$3), I$7 = (e2) => !!e2 && Number.isInteger(Number(e2)), Ae$2 = (e2) => e2.endsWith("%") && M$3(e2.slice(0, -1)), i$2 = (e2) => te$5.test(e2), A$2 = (e2) => we$3.test(e2), Se$2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Me$2 = (e2) => G$4(e2, Se$2, oe$4), Ge$3 = (e2) => G$4(e2, "position", oe$4), Re$2 = /* @__PURE__ */ new Set(["image", "url"]), Pe$3 = (e2) => G$4(e2, Re$2, Ee$3), Ie$4 = (e2) => G$4(e2, "", Ne$2), j$6 = () => true, G$4 = (e2, r, t2) => {
  const o2 = te$5.exec(e2);
  return o2 ? o2[1] ? typeof r == "string" ? o2[1] === r : r.has(o2[1]) : t2(o2[2]) : false;
}, je$3 = (e2) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ve$2.test(e2) && !ke$3.test(e2)
), oe$4 = () => false, Ne$2 = (e2) => Ce$3.test(e2), Ee$3 = (e2) => ze$3.test(e2), Te$3 = () => {
  const e2 = c$7("colors"), r = c$7("spacing"), t2 = c$7("blur"), o2 = c$7("brightness"), l2 = c$7("borderColor"), n2 = c$7("borderRadius"), a2 = c$7("borderSpacing"), s2 = c$7("borderWidth"), u2 = c$7("contrast"), g2 = c$7("grayscale"), m2 = c$7("hueRotate"), y2 = c$7("invert"), x2 = c$7("gap"), v2 = c$7("gradientColorStops"), w2 = c$7("gradientColorStopPositions"), b2 = c$7("inset"), p2 = c$7("margin"), f2 = c$7("opacity"), h2 = c$7("padding"), R2 = c$7("saturate"), S2 = c$7("scale"), N2 = c$7("sepia"), U2 = c$7("skew"), F2 = c$7("space"), q2 = c$7("translate"), L2 = () => ["auto", "contain", "none"], W2 = () => ["auto", "hidden", "clip", "visible", "scroll"], V2 = () => ["auto", i$2, r], d2 = () => [i$2, r], J2 = () => ["", C$7, z$6], E2 = () => ["auto", M$3, i$2], X2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T2 = () => ["solid", "dashed", "dotted", "double", "none"], Z2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P2 = () => ["", "0", i$2], H2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k2 = () => [M$3, i$2];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [j$6],
      spacing: [C$7, z$6],
      blur: ["none", "", A$2, i$2],
      brightness: k2(),
      borderColor: [e2],
      borderRadius: ["none", "", "full", A$2, i$2],
      borderSpacing: d2(),
      borderWidth: J2(),
      contrast: k2(),
      grayscale: P2(),
      hueRotate: k2(),
      invert: P2(),
      gap: d2(),
      gradientColorStops: [e2],
      gradientColorStopPositions: [Ae$2, z$6],
      inset: V2(),
      margin: V2(),
      opacity: k2(),
      padding: d2(),
      saturate: k2(),
      scale: k2(),
      sepia: P2(),
      skew: k2(),
      space: d2(),
      translate: d2()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", i$2]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [A$2]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H2()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H2()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...X2(), i$2]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W2()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W2()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W2()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L2()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L2()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L2()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b2]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b2]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b2]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b2]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b2]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b2]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b2]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b2]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b2]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", I$7, i$2]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V2()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", i$2]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P2()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P2()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", I$7, i$2]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [j$6]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", I$7, i$2]
        }, i$2]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E2()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E2()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [j$6]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [I$7, i$2]
        }, i$2]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E2()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E2()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", i$2]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", i$2]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x2]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x2]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x2]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...O2()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O2(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...O2(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [h2]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h2]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h2]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h2]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h2]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h2]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h2]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h2]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h2]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p2]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p2]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p2]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p2]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p2]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p2]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p2]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p2]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p2]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F2]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [F2]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", i$2, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [i$2, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [i$2, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [A$2]
        }, A$2]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [i$2, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [i$2, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [i$2, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [i$2, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", A$2, z$6]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _$4]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [j$6]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", i$2]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", M$3, _$4]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C$7, i$2]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", i$2]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", i$2]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e2]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [f2]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e2]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [f2]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...T2(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", C$7, z$6]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", C$7, i$2]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e2]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: d2()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", i$2]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", i$2]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [f2]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...X2(), Ge$3]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Me$2]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Pe$3]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e2]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [w2]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w2]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w2]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v2]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v2]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v2]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n2]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n2]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n2]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n2]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n2]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n2]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n2]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n2]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n2]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n2]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n2]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n2]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n2]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n2]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n2]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s2]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s2]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s2]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s2]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s2]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s2]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s2]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s2]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s2]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [f2]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...T2(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s2]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s2]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [f2]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: T2()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l2]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l2]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l2]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [l2]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [l2]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l2]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l2]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l2]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l2]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l2]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...T2()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [C$7, i$2]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [C$7, z$6]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e2]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: J2()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e2]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [f2]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [C$7, z$6]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e2]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", A$2, Ie$4]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [j$6]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [f2]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z2(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z2()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t2]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o2]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u2]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", A$2, i$2]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g2]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m2]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [y2]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [R2]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N2]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t2]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o2]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u2]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g2]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m2]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [y2]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [f2]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R2]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N2]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a2]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a2]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a2]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", i$2]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: k2()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", i$2]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: k2()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", i$2]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S2]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S2]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S2]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [I$7, i$2]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [q2]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [q2]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [U2]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [U2]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", i$2]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e2]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", i$2]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e2]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": d2()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": d2()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": d2()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": d2()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": d2()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": d2()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": d2()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": d2()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": d2()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": d2()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": d2()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": d2()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": d2()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": d2()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": d2()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": d2()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": d2()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": d2()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", i$2]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e2, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [C$7, z$6, _$4]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e2, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
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
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Le$4 = /* @__PURE__ */ he$1(Te$3);
function We$3(...e2) {
  return Le$4(ne$4(e2));
}
const m$2 = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2, y$5 = ne$4, j$5 = (e2, l2) => (n2) => {
  var u2;
  if ((l2 == null ? void 0 : l2.variants) == null) return y$5(e2, n2 == null ? void 0 : n2.class, n2 == null ? void 0 : n2.className);
  const { variants: r, defaultVariants: d2 } = l2, V2 = Object.keys(r).map((t2) => {
    const a2 = n2 == null ? void 0 : n2[t2], s2 = d2 == null ? void 0 : d2[t2];
    if (a2 === null) return null;
    const i2 = m$2(a2) || m$2(s2);
    return r[t2][i2];
  }), v2 = n2 && Object.entries(n2).reduce((t2, a2) => {
    let [s2, i2] = a2;
    return i2 === void 0 || (t2[s2] = i2), t2;
  }, {}), N2 = l2 == null || (u2 = l2.compoundVariants) === null || u2 === void 0 ? void 0 : u2.reduce((t2, a2) => {
    let { class: s2, className: i2, ...f2 } = a2;
    return Object.entries(f2).every((C2) => {
      let [c2, o2] = C2;
      return Array.isArray(o2) ? o2.includes({
        ...d2,
        ...v2
      }[c2]) : {
        ...d2,
        ...v2
      }[c2] === o2;
    }) ? [
      ...t2,
      s2,
      i2
    ] : t2;
  }, []);
  return y$5(e2, V2, N2, n2 == null ? void 0 : n2.class, n2 == null ? void 0 : n2.className);
};
function d$3(e2, n2) {
  if (typeof e2 == "function")
    return e2(n2);
  e2 != null && (e2.current = n2);
}
function m$1(...e2) {
  return (n2) => {
    let r = false;
    const o2 = e2.map((t2) => {
      const l2 = d$3(t2, n2);
      return !r && typeof l2 == "function" && (r = true), l2;
    });
    if (r)
      return () => {
        for (let t2 = 0; t2 < o2.length; t2++) {
          const l2 = o2[t2];
          typeof l2 == "function" ? l2() : d$3(e2[t2], null);
        }
      };
  };
}
function x$5(...e2) {
  return reactExports.useCallback(m$1(...e2), e2);
}
// @__NO_SIDE_EFFECTS__
function C$6(e2) {
  const n2 = /* @__PURE__ */ b$5(e2), r = reactExports.forwardRef((o2, t2) => {
    const { children: l2, ...a2 } = o2, s2 = reactExports.Children.toArray(l2), c2 = s2.find(E$2);
    if (c2) {
      const u2 = c2.props.children, S2 = s2.map((p2) => p2 === c2 ? reactExports.Children.count(u2) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(u2) ? u2.props.children : null : p2);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(n2, { ...a2, ref: t2, children: reactExports.isValidElement(u2) ? reactExports.cloneElement(u2, void 0, S2) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(n2, { ...a2, ref: t2, children: l2 });
  });
  return r.displayName = `${e2}.Slot`, r;
}
var I$6 = /* @__PURE__ */ C$6("Slot");
// @__NO_SIDE_EFFECTS__
function b$5(e2) {
  const n2 = reactExports.forwardRef((r, o2) => {
    const { children: t2, ...l2 } = r;
    if (reactExports.isValidElement(t2)) {
      const a2 = h$4(t2), s2 = R$7(l2, t2.props);
      return t2.type !== reactExports.Fragment && (s2.ref = o2 ? m$1(o2, a2) : a2), reactExports.cloneElement(t2, s2);
    }
    return reactExports.Children.count(t2) > 1 ? reactExports.Children.only(null) : null;
  });
  return n2.displayName = `${e2}.SlotClone`, n2;
}
var y$4 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function V$4(e2) {
  const n2 = ({ children: r }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: r });
  return n2.displayName = `${e2}.Slottable`, n2.__radixId = y$4, n2;
}
function E$2(e2) {
  return reactExports.isValidElement(e2) && typeof e2.type == "function" && "__radixId" in e2.type && e2.type.__radixId === y$4;
}
function R$7(e2, n2) {
  const r = { ...n2 };
  for (const o2 in n2) {
    const t2 = e2[o2], l2 = n2[o2];
    /^on[A-Z]/.test(o2) ? t2 && l2 ? r[o2] = (...s2) => {
      const c2 = l2(...s2);
      return t2(...s2), c2;
    } : t2 && (r[o2] = t2) : o2 === "style" ? r[o2] = { ...t2, ...l2 } : o2 === "className" && (r[o2] = [t2, l2].filter(Boolean).join(" "));
  }
  return { ...e2, ...r };
}
function h$4(e2) {
  var _a, _b;
  let n2 = (_a = Object.getOwnPropertyDescriptor(e2.props, "ref")) == null ? void 0 : _a.get, r = n2 && "isReactWarning" in n2 && n2.isReactWarning;
  return r ? e2.ref : (n2 = (_b = Object.getOwnPropertyDescriptor(e2, "ref")) == null ? void 0 : _b.get, r = n2 && "isReactWarning" in n2 && n2.isReactWarning, r ? e2.props.ref : e2.props.ref || e2.ref);
}
const c$6 = j$5(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-6",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function b$4({
  className: e2,
  variant: r,
  size: t2,
  asChild: i2 = false,
  ...n2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    i2 ? I$6 : "button",
    {
      "data-slot": "button",
      className: We$3(c$6({ variant: r, size: t2, className: e2 })),
      ...n2
    }
  );
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p$1 = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), c$5 = (...r) => r.filter((e2, t2, o2) => !!e2 && e2.trim() !== "" && o2.indexOf(e2) === t2).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var f$2 = {
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
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g$4 = reactExports.forwardRef(
  ({
    color: r = "currentColor",
    size: e2 = 24,
    strokeWidth: t2 = 2,
    absoluteStrokeWidth: o2,
    className: s2 = "",
    children: n2,
    iconNode: u2,
    ...l2
  }, m2) => reactExports.createElement(
    "svg",
    {
      ref: m2,
      ...f$2,
      width: e2,
      height: e2,
      stroke: r,
      strokeWidth: o2 ? Number(t2) * 24 / Number(e2) : t2,
      className: c$5("lucide", s2),
      ...l2
    },
    [
      ...u2.map(([d2, w2]) => reactExports.createElement(d2, w2)),
      ...Array.isArray(n2) ? n2 : [n2]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C$5 = (r, e2) => {
  const t2 = reactExports.forwardRef(
    ({ className: o2, ...s2 }, n2) => reactExports.createElement(g$4, {
      ref: n2,
      iconNode: e2,
      className: c$5(`lucide-${p$1(r)}`, o2),
      ...s2
    })
  );
  return t2.displayName = `${r}`, t2;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n$5 = C$5("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c$4 = C$5("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n$4 = C$5("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const H$7 = reactExports.createContext({
  tone: "clean",
  size: "xl"
}), G$3 = j$5(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      tone: {
        clean: [
          "bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60",
          "text-foreground"
        ],
        subtle: [
          "bg-muted/50 backdrop-blur-sm border-border/30",
          "text-foreground"
        ],
        brand: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        contrast: [
          "bg-zinc-900 border-zinc-700/40",
          "text-zinc-100"
        ]
      },
      position: {
        sticky: "sticky top-0",
        fixed: "fixed top-0 left-0 right-0",
        relative: "relative"
      }
    },
    defaultVariants: {
      tone: "clean",
      position: "sticky"
    }
  }
), J$4 = j$5(
  "mx-auto flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "max-w-2xl h-12 px-4",
        md: "max-w-4xl h-14 px-4 sm:px-6",
        lg: "max-w-6xl h-16 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl h-16 px-4 sm:px-6 lg:px-8",
        full: "max-w-full h-16 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
), L$6 = reactExports.forwardRef(({
  className: c2,
  tone: s2 = "clean",
  size: d2 = "xl",
  position: u2 = "sticky",
  children: h2,
  ...b2
}, a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(H$7.Provider, { value: { tone: s2, size: d2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "header",
  {
    ref: a2,
    className: We$3(G$3({ tone: s2, position: u2 }), c2),
    ...b2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(J$4({ size: d2 })), children: h2 })
  }
) }));
L$6.displayName = "Header";
const O$4 = reactExports.forwardRef(({
  className: c2,
  children: s2,
  ...d2
}, u2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref: u2,
    className: We$3("flex items-center flex-shrink-0", c2),
    ...d2,
    children: s2
  }
));
O$4.displayName = "HeaderLogo";
const D$2 = reactExports.forwardRef(({
  navigation: c2 = [],
  currentPath: s2 = "",
  onNavigate: d2,
  className: u2,
  ...h2
}, b2) => {
  const [a2, y2] = reactExports.useState(false), [z2, v2] = reactExports.useState(/* @__PURE__ */ new Set()), [w2, f2] = reactExports.useState(null), [x2, A2] = reactExports.useState(false), { tone: M2 } = reactExports.useContext(H$7);
  reactExports.useEffect(() => {
    A2(true);
  }, []), reactExports.useEffect(() => {
    if (!x2) return;
    const e2 = () => {
      window.innerWidth >= 768 && (y2(false), v2(/* @__PURE__ */ new Set()));
    };
    return window.addEventListener("resize", e2), () => window.removeEventListener("resize", e2);
  }, [x2]), reactExports.useEffect(() => {
    if (x2)
      return a2 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
        document.body.style.overflow = "unset";
      };
  }, [a2, x2]), reactExports.useEffect(() => {
    const e2 = () => f2(null);
    if (w2 !== null)
      return document.addEventListener("click", e2), () => document.removeEventListener("click", e2);
  }, [w2]);
  const j2 = (e2) => {
    const t2 = new Set(z2);
    t2.has(e2) ? t2.delete(e2) : t2.add(e2), v2(t2);
  }, g2 = (e2) => {
    y2(false), v2(/* @__PURE__ */ new Set()), f2(null), e2.href && d2 ? d2(e2.href, e2) : e2.onClick && e2.onClick();
  }, V2 = (e2 = false) => {
    const t2 = "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md flex items-center gap-2";
    switch (M2) {
      case "subtle":
        return We$3(
          t2,
          "cursor-pointer",
          e2 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60"
          // ← CHANGED
        );
      case "brand":
        return We$3(
          t2,
          "cursor-pointer",
          e2 ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
        );
      case "contrast":
        return We$3(
          t2,
          "cursor-pointer",
          e2 ? "bg-muted text-foreground shadow-sm" : "text-muted-background/50 dark:text-muted-foreground hover:text-foreground hover:bg-muted/50"
          // ← CHANGED
        );
      default:
        return We$3(
          t2,
          "cursor-pointer",
          e2 ? "bg-muted text-foreground shadow-sm" : "text-foreground hover:text-foreground hover:bg-muted/50"
        );
    }
  }, B2 = (e2 = false) => We$3(
    "w-full flex items-center px-3 py-2 text-left transition-colors duration-200 rounded-lg",
    e2 ? "bg-secondary text-secondary-foreground" : "text-foreground hover:text-foreground hover:bg-muted"
  ), R2 = () => {
    switch (M2) {
      case "subtle":
        return "text-muted-foreground hover:text-foreground hover:bg-muted/50";
      case "brand":
        return "text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10";
      case "contrast":
        return "text-foreground hover:text-foreground hover:bg-muted/50";
      default:
        return "text-foreground hover:text-foreground hover:bg-muted/50";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center ml-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: We$3("hidden md:flex items-center space-x-1", u2), ref: b2, ...h2, children: c2.map((e2) => {
      var _a;
      const t2 = e2.items && e2.items.length > 0, i2 = w2 === e2.key, k2 = e2.href ? s2 === e2.href : e2.isActive;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: We$3(V2(k2), e2.className),
            onClick: (o2) => {
              o2.stopPropagation(), t2 ? f2(i2 ? null : e2.key) : (f2(null), g2(e2));
            },
            children: [
              e2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(e2.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e2.label }),
              t2 && /* @__PURE__ */ jsxRuntimeExports.jsx(n$5, { className: We$3(
                "h-3 w-3 transition-transform duration-200",
                i2 && "rotate-180"
              ) })
            ]
          }
        ),
        t2 && i2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg z-50 mt-1",
            onClick: (o2) => o2.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1", children: (_a = e2.items) == null ? void 0 : _a.map((o2) => {
              const N2 = o2.href ? s2 === o2.href : o2.isActive;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: We$3(
                    "w-full px-3 py-2 text-left text-sm transition-colors flex items-center gap-2",
                    "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none",
                    N2 ? "bg-muted text-foreground font-medium" : "text-foreground"
                  ),
                  onClick: () => {
                    f2(null), g2(o2);
                  },
                  children: [
                    o2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(o2.icon, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o2.label }),
                    o2.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded", children: o2.badge })
                  ]
                },
                o2.key
              );
            }) })
          }
        )
      ] }, e2.key);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      b$4,
      {
        variant: "ghost",
        size: "icon",
        className: We$3("md:hidden", R2()),
        onClick: () => y2(!a2),
        "aria-label": a2 ? "Close menu" : "Open menu",
        children: a2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(c$4, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(n$4, { className: "h-5 w-5" })
      }
    ),
    a2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 space-y-2", children: c2.map((e2) => {
      var _a;
      const t2 = e2.items && e2.items.length > 0, i2 = z2.has(e2.key), k2 = e2.href ? s2 === e2.href : e2.isActive;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: We$3(B2(k2), e2.className),
            onClick: () => t2 ? j2(e2.key) : g2(e2),
            children: [
              e2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(e2.icon, { className: "h-4 w-4 mr-3 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: e2.label }),
              e2.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded mr-2", children: e2.badge }),
              t2 && /* @__PURE__ */ jsxRuntimeExports.jsx(n$5, { className: We$3(
                "h-4 w-4 transition-transform duration-200 flex-shrink-0",
                i2 && "rotate-180"
              ) })
            ]
          }
        ),
        t2 && i2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-6 space-y-1 border-l border-border/30 pl-4", children: (_a = e2.items) == null ? void 0 : _a.map((o2) => {
          const N2 = o2.href ? s2 === o2.href : o2.isActive;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: We$3(
                "w-full flex items-center px-3 py-2 text-left transition-colors rounded-lg",
                N2 ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              ),
              onClick: () => g2(o2),
              children: [
                o2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(o2.icon, { className: "h-3 w-3 mr-3 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm", children: o2.label }),
                o2.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded", children: o2.badge })
              ]
            },
            o2.key
          );
        }) })
      ] }, e2.key);
    }) }) }) })
  ] });
});
D$2.displayName = "HeaderNav";
const I$5 = Object.assign(L$6, {
  Logo: O$4,
  Nav: D$2
});
var u$2 = [
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
  "select",
  "span",
  "svg",
  "ul"
], h$3 = u$2.reduce((t2, i2) => {
  const o2 = /* @__PURE__ */ C$6(`Primitive.${i2}`), r = reactExports.forwardRef((e2, s2) => {
    const { asChild: a2, ...m2 } = e2, n2 = a2 ? o2 : i2;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(n2, { ...m2, ref: s2 });
  });
  return r.displayName = `Primitive.${i2}`, { ...t2, [i2]: r };
}, {});
function w$3(t2, i2) {
  t2 && reactDomExports.flushSync(() => t2.dispatchEvent(i2));
}
var v$1 = "Separator", n$3 = "horizontal", f$1 = ["horizontal", "vertical"], l$1 = reactExports.forwardRef((r, o2) => {
  const { decorative: t2, orientation: a2 = n$3, ...s2 } = r, i2 = u$1(a2) ? a2 : n$3, c2 = t2 ? { role: "none" } : { "aria-orientation": i2 === "vertical" ? i2 : void 0, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    h$3.div,
    {
      "data-orientation": i2,
      ...c2,
      ...s2,
      ref: o2
    }
  );
});
l$1.displayName = v$1;
function u$1(r) {
  return f$1.includes(r);
}
var h$2 = l$1;
function R$6({
  className: r,
  orientation: o2 = "horizontal",
  decorative: t2 = true,
  ...a2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    h$2,
    {
      "data-slot": "separator",
      decorative: t2,
      orientation: o2,
      className: We$3(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        r
      ),
      ...a2
    }
  );
}
const y$3 = reactExports.createContext({
  tone: "contrast",
  size: "xl"
}), T$2 = j$5(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      tone: {
        clean: "bg-background/80 backdrop-blur-sm border-border/40 text-foreground",
        subtle: "bg-muted/50 backdrop-blur-sm border-border/30 text-foreground",
        brand: "bg-primary border-primary-foreground/20 text-primary-foreground",
        contrast: "bg-zinc-900 border-zinc-700/40 text-zinc-100"
      },
      position: {
        sticky: "sticky bottom-0 z-30",
        fixed: "fixed bottom-0 left-0 right-0 z-30",
        relative: "relative"
      }
    },
    defaultVariants: {
      tone: "contrast",
      position: "relative"
    }
  }
), L$5 = j$5(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl py-4 px-4",
        md: "max-w-4xl py-5 px-4 sm:px-6",
        lg: "max-w-6xl py-6 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl py-6 px-4 sm:px-6 lg:px-8",
        full: "max-w-full py-8 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
), F$4 = reactExports.forwardRef(({
  className: g2,
  tone: c2 = "contrast",
  size: n2 = "xl",
  position: m2 = "relative",
  navigation: l2 = [],
  currentPath: d2 = "",
  onNavigate: s2,
  children: u2,
  ...h2
}, a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(y$3.Provider, { value: { tone: c2, size: n2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "footer",
  {
    ref: a2,
    className: We$3(T$2({ tone: c2, position: m2 }), g2),
    ...h2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: We$3(L$5({ size: n2 })), children: [
      l2.length > 0 && !u2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        z$5,
        {
          navigation: l2,
          currentPath: d2,
          onNavigate: s2
        }
      ),
      u2
    ] })
  }
) }));
F$4.displayName = "Footer";
const z$5 = reactExports.forwardRef(({
  className: g2,
  navigation: c2 = [],
  currentPath: n2 = "",
  onNavigate: m2,
  logo: l2,
  social: d2,
  copyright: s2,
  ...u2
}, h2) => {
  const { tone: a2 } = reactExports.useContext(y$3), N2 = (r) => {
    r.href && m2 ? m2(r.href, r) : r.onClick && r.onClick();
  }, b2 = (r = false) => {
    const f2 = "text-sm transition-colors cursor-pointer";
    switch (a2) {
      case "subtle":
        return We$3(f2, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
      case "brand":
        return We$3(f2, r ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground");
      case "contrast":
        return We$3(f2, r ? "text-zinc-100" : "text-zinc-300 hover:text-zinc-100");
      default:
        return We$3(f2, r ? "text-foreground" : "text-muted-foreground hover:text-foreground");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: h2,
      className: We$3("space-y-4", g2),
      ...u2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          l2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: l2 }),
          c2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap items-center justify-center gap-6", children: c2.map((r) => {
            const f2 = r.href ? n2 === r.href : r.isActive;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => N2(r),
                className: We$3(b2(f2), r.className),
                children: r.label
              },
              r.key
            );
          }) }),
          d2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: d2 })
        ] }),
        s2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(R$6, { className: We$3(
            a2 === "brand" && "bg-primary-foreground/20",
            a2 === "contrast" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: We$3(
            "text-sm",
            a2 === "contrast" && "text-zinc-400",
            a2 === "brand" && "text-primary-foreground/80",
            (a2 === "clean" || a2 === "subtle") && "text-muted-foreground"
          ), children: s2 }) })
        ] })
      ]
    }
  );
});
z$5.displayName = "FooterBasic";
const S$2 = reactExports.forwardRef(({
  className: g2,
  brand: c2,
  columns: n2 = [],
  newsletter: m2,
  social: l2,
  legal: d2 = [],
  currentPath: s2 = "",
  onNavigate: u2,
  copyright: h2,
  ...a2
}, N2) => {
  const { tone: b2 } = reactExports.useContext(y$3), r = (o2) => {
    o2.href && u2 ? u2(o2.href, o2) : o2.onClick && o2.onClick();
  }, p2 = (() => {
    switch (b2) {
      case "subtle":
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
      case "brand":
        return {
          heading: "text-primary-foreground",
          text: "text-primary-foreground/70",
          link: "text-primary-foreground/70 hover:text-primary-foreground"
        };
      case "contrast":
        return {
          heading: "text-zinc-100",
          text: "text-zinc-300",
          link: "text-zinc-300 hover:text-zinc-100"
        };
      default:
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
    }
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: N2,
      className: We$3("space-y-8", g2),
      ...a2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 grid-cols-1 md:grid-cols-6 lg:grid-cols-6", children: [
          c2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
            " ",
            c2
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4", children: n2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(
            "grid gap-6",
            // No columns: hidden
            n2.length === 0 && "hidden",
            // 1 column: single column
            n2.length === 1 && "grid-cols-1",
            // 2 columns: responsive 1→2
            n2.length === 2 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
            // 3 columns: responsive 1→2→3
            n2.length === 3 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3",
            // 4+ columns: responsive 1→2→4
            n2.length >= 4 && "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          ), children: n2.slice(0, 4).map((o2) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: We$3("text-sm font-semibold", p2.heading), children: o2.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: (_a = o2.items) == null ? void 0 : _a.map((x2) => {
                const A2 = x2.href ? s2 === x2.href : x2.isActive;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => r(x2),
                    className: We$3(
                      "text-sm transition-colors cursor-pointer block",
                      A2 ? p2.heading : p2.link,
                      x2.className
                    ),
                    children: x2.label
                  }
                ) }, x2.key);
              }) })
            ] }, o2.key);
          }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(R$6, { className: We$3(
            b2 === "brand" && "bg-primary-foreground/20",
            b2 === "contrast" && "bg-zinc-700"
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            h2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: We$3("text-sm", p2.text), children: h2 }),
            d2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: d2.map((o2) => {
              const x2 = o2.href ? s2 === o2.href : o2.isActive;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => r(o2),
                  className: We$3(
                    "text-sm transition-colors cursor-pointer",
                    x2 ? p2.heading : p2.link,
                    o2.className
                  ),
                  children: o2.label
                },
                o2.key
              );
            }) }),
            l2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: l2 })
          ] })
        ] })
      ]
    }
  );
});
S$2.displayName = "FooterAdvanced";
const j$4 = reactExports.forwardRef(({
  className: g2,
  links: c2 = [],
  ...n2
}, m2) => {
  const { tone: l2 } = reactExports.useContext(y$3), d2 = () => {
    switch (l2) {
      case "subtle":
        return "text-muted-foreground hover:text-foreground hover:bg-background/50";
      case "brand":
        return "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10";
      case "contrast":
        return "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: m2,
      className: We$3("flex items-center gap-1", g2),
      ...n2,
      children: c2.map((s2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        b$4,
        {
          variant: "ghost",
          size: "icon",
          className: We$3("h-8 w-8 cursor-pointer", d2(), s2.className),
          onClick: s2.onClick,
          title: s2.label,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(s2.icon, { className: "h-4 w-4" })
        },
        s2.key
      ))
    }
  );
});
j$4.displayName = "FooterSocial";
const H$6 = Object.assign(F$4, {
  Basic: z$5,
  Advanced: S$2,
  Social: j$4
});
const d$2 = j$5(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function b$3({
  className: r,
  variant: e2,
  asChild: t2 = false,
  ...i2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    t2 ? I$6 : "span",
    {
      "data-slot": "badge",
      className: We$3(d$2({ variant: e2 }), r),
      ...i2
    }
  );
}
function c$3(a2, [t2, n2]) {
  return Math.min(n2, Math.max(t2, a2));
}
var a = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
function w$2(e2, r, { checkForDefaultPrevented: t2 = true } = {}) {
  return function(o2) {
    if (e2 == null ? void 0 : e2(o2), t2 === false || !o2.defaultPrevented)
      return r == null ? void 0 : r(o2);
  };
}
var v = o$1[" useInsertionEffect ".trim().toString()] || a;
function S$1({
  prop: e2,
  defaultProp: r,
  onChange: t2 = () => {
  },
  caller: l2
}) {
  const [o2, u2, i2] = R$5({
    defaultProp: r,
    onChange: t2
  }), c2 = e2 !== void 0, a2 = c2 ? e2 : o2;
  {
    const s2 = reactExports.useRef(e2 !== void 0);
    reactExports.useEffect(() => {
      const f2 = s2.current;
      f2 !== c2 && console.warn(
        `${l2} is changing from ${f2 ? "controlled" : "uncontrolled"} to ${c2 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), s2.current = c2;
    }, [c2, l2]);
  }
  const d2 = reactExports.useCallback(
    (s2) => {
      var _a;
      if (c2) {
        const f2 = E$1(s2) ? s2(e2) : s2;
        f2 !== e2 && ((_a = i2.current) == null ? void 0 : _a.call(i2, f2));
      } else
        u2(s2);
    },
    [c2, e2, u2, i2]
  );
  return [a2, d2];
}
function R$5({
  defaultProp: e2,
  onChange: r
}) {
  const [t2, l2] = reactExports.useState(e2), o2 = reactExports.useRef(t2), u2 = reactExports.useRef(r);
  return v(() => {
    u2.current = r;
  }, [r]), reactExports.useEffect(() => {
    var _a;
    o2.current !== t2 && ((_a = u2.current) == null ? void 0 : _a.call(u2, t2), o2.current = t2);
  }, [t2, o2]), [t2, l2, u2];
}
function E$1(e2) {
  return typeof e2 == "function";
}
function w$1(t2, c2 = []) {
  let n2 = [];
  function p2(r, e2) {
    const o2 = reactExports.createContext(e2), s2 = n2.length;
    n2 = [...n2, e2];
    const d2 = (x2) => {
      var _a;
      const { scope: m2, children: v2, ...a2 } = x2, S2 = ((_a = m2 == null ? void 0 : m2[t2]) == null ? void 0 : _a[s2]) || o2, h2 = reactExports.useMemo(() => a2, Object.values(a2));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(S2.Provider, { value: h2, children: v2 });
    };
    d2.displayName = r + "Provider";
    function f2(x2, m2) {
      var _a;
      const v2 = ((_a = m2 == null ? void 0 : m2[t2]) == null ? void 0 : _a[s2]) || o2, a2 = reactExports.useContext(v2);
      if (a2) return a2;
      if (e2 !== void 0) return e2;
      throw new Error(`\`${x2}\` must be used within \`${r}\``);
    }
    return [d2, f2];
  }
  const i2 = () => {
    const r = n2.map((e2) => reactExports.createContext(e2));
    return function(o2) {
      const s2 = (o2 == null ? void 0 : o2[t2]) || r;
      return reactExports.useMemo(
        () => ({ [`__scope${t2}`]: { ...o2, [t2]: s2 } }),
        [o2, s2]
      );
    };
  };
  return i2.scopeName = t2, [p2, P$5(i2, ...c2)];
}
function P$5(...t2) {
  const c2 = t2[0];
  if (t2.length === 1) return c2;
  const n2 = () => {
    const p2 = t2.map((i2) => ({
      useScope: i2(),
      scopeName: i2.scopeName
    }));
    return function(r) {
      const e2 = p2.reduce((o2, { useScope: s2, scopeName: d2 }) => {
        const x2 = s2(r)[`__scope${d2}`];
        return { ...o2, ...x2 };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${c2.scopeName}`]: e2 }), [e2]);
    };
  };
  return n2.scopeName = c2.scopeName, n2;
}
function b$2(l2) {
  const i2 = l2 + "CollectionProvider", [N2, _2] = w$1(i2), [v2, f2] = N2(
    i2,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), p2 = (c2) => {
    const { scope: e2, children: s2 } = c2, t2 = React.useRef(null), o2 = React.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(v2, { scope: e2, itemMap: o2, collectionRef: t2, children: s2 });
  };
  p2.displayName = i2;
  const m2 = l2 + "CollectionSlot", E2 = /* @__PURE__ */ C$6(m2), C2 = React.forwardRef(
    (c2, e2) => {
      const { scope: s2, children: t2 } = c2, o2 = f2(m2, s2), n2 = x$5(e2, o2.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(E2, { ref: n2, children: t2 });
    }
  );
  C2.displayName = m2;
  const u2 = l2 + "CollectionItemSlot", R2 = "data-radix-collection-item", T2 = /* @__PURE__ */ C$6(u2), I2 = React.forwardRef(
    (c2, e2) => {
      const { scope: s2, children: t2, ...o2 } = c2, n2 = React.useRef(null), x2 = x$5(e2, n2), a2 = f2(u2, s2);
      return React.useEffect(() => (a2.itemMap.set(n2, { ref: n2, ...o2 }), () => void a2.itemMap.delete(n2))), /* @__PURE__ */ jsxRuntimeExports.jsx(T2, { [R2]: "", ref: x2, children: t2 });
    }
  );
  I2.displayName = u2;
  function O2(c2) {
    const e2 = f2(l2 + "CollectionConsumer", c2);
    return React.useCallback(() => {
      const t2 = e2.collectionRef.current;
      if (!t2) return [];
      const o2 = Array.from(t2.querySelectorAll(`[${R2}]`));
      return Array.from(e2.itemMap.values()).sort(
        (a2, y2) => o2.indexOf(a2.ref.current) - o2.indexOf(y2.ref.current)
      );
    }, [e2.collectionRef, e2.itemMap]);
  }
  return [
    { Provider: p2, Slot: C2, ItemSlot: I2 },
    O2,
    _2
  ];
}
var P$4 = reactExports.createContext(void 0);
function j$3(l2) {
  const i2 = reactExports.useContext(P$4);
  return l2 || i2 || "ltr";
}
function c$2(r) {
  const t2 = reactExports.useRef(r);
  return reactExports.useEffect(() => {
    t2.current = r;
  }), reactExports.useMemo(() => (...u2) => {
    var _a;
    return (_a = t2.current) == null ? void 0 : _a.call(t2, ...u2);
  }, []);
}
function z$4(n2, e2 = globalThis == null ? void 0 : globalThis.document) {
  const t2 = c$2(n2);
  reactExports.useEffect(() => {
    const o2 = (s2) => {
      s2.key === "Escape" && t2(s2);
    };
    return e2.addEventListener("keydown", o2, { capture: true }), () => e2.removeEventListener("keydown", o2, { capture: true });
  }, [t2, e2]);
}
var H$5 = "DismissableLayer", y$2 = "dismissableLayer.update", K$4 = "dismissableLayer.pointerDownOutside", j$2 = "dismissableLayer.focusOutside", R$4, B$6 = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), X$5 = reactExports.forwardRef(
  (n2, e2) => {
    const {
      disableOutsidePointerEvents: t2 = false,
      onEscapeKeyDown: o2,
      onPointerDownOutside: s2,
      onFocusOutside: a2,
      onInteractOutside: d2,
      onDismiss: l2,
      ...E2
    } = n2, c2 = reactExports.useContext(B$6), [u2, F2] = reactExports.useState(null), f2 = (u2 == null ? void 0 : u2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, I2] = reactExports.useState({}), S2 = x$5(e2, (i2) => F2(i2)), D2 = Array.from(c2.layers), [A2] = [...c2.layersWithOutsidePointerEventsDisabled].slice(-1), N2 = D2.indexOf(A2), O2 = u2 ? D2.indexOf(u2) : -1, W2 = c2.layersWithOutsidePointerEventsDisabled.size > 0, L2 = O2 >= N2, _2 = G$2((i2) => {
      const v2 = i2.target, w2 = [...c2.branches].some((m2) => m2.contains(v2));
      !L2 || w2 || (s2 == null ? void 0 : s2(i2), d2 == null ? void 0 : d2(i2), i2.defaultPrevented || (l2 == null ? void 0 : l2()));
    }, f2), C2 = J$3((i2) => {
      const v2 = i2.target;
      [...c2.branches].some((m2) => m2.contains(v2)) || (a2 == null ? void 0 : a2(i2), d2 == null ? void 0 : d2(i2), i2.defaultPrevented || (l2 == null ? void 0 : l2()));
    }, f2);
    return z$4((i2) => {
      O2 === c2.layers.size - 1 && (o2 == null ? void 0 : o2(i2), !i2.defaultPrevented && l2 && (i2.preventDefault(), l2()));
    }, f2), reactExports.useEffect(() => {
      if (u2)
        return t2 && (c2.layersWithOutsidePointerEventsDisabled.size === 0 && (R$4 = f2.body.style.pointerEvents, f2.body.style.pointerEvents = "none"), c2.layersWithOutsidePointerEventsDisabled.add(u2)), c2.layers.add(u2), g$3(), () => {
          t2 && c2.layersWithOutsidePointerEventsDisabled.size === 1 && (f2.body.style.pointerEvents = R$4);
        };
    }, [u2, f2, t2, c2]), reactExports.useEffect(() => () => {
      u2 && (c2.layers.delete(u2), c2.layersWithOutsidePointerEventsDisabled.delete(u2), g$3());
    }, [u2, c2]), reactExports.useEffect(() => {
      const i2 = () => I2({});
      return document.addEventListener(y$2, i2), () => document.removeEventListener(y$2, i2);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.div,
      {
        ...E2,
        ref: S2,
        style: {
          pointerEvents: W2 ? L2 ? "auto" : "none" : void 0,
          ...n2.style
        },
        onFocusCapture: w$2(n2.onFocusCapture, C2.onFocusCapture),
        onBlurCapture: w$2(n2.onBlurCapture, C2.onBlurCapture),
        onPointerDownCapture: w$2(
          n2.onPointerDownCapture,
          _2.onPointerDownCapture
        )
      }
    );
  }
);
X$5.displayName = H$5;
var Y$5 = "DismissableLayerBranch", q$5 = reactExports.forwardRef((n2, e2) => {
  const t2 = reactExports.useContext(B$6), o2 = reactExports.useRef(null), s2 = x$5(e2, o2);
  return reactExports.useEffect(() => {
    const a2 = o2.current;
    if (a2)
      return t2.branches.add(a2), () => {
        t2.branches.delete(a2);
      };
  }, [t2.branches]), /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { ...n2, ref: s2 });
});
q$5.displayName = Y$5;
function G$2(n2, e2 = globalThis == null ? void 0 : globalThis.document) {
  const t2 = c$2(n2), o2 = reactExports.useRef(false), s2 = reactExports.useRef(() => {
  });
  return reactExports.useEffect(() => {
    const a2 = (l2) => {
      if (l2.target && !o2.current) {
        let E2 = function() {
          x$4(
            K$4,
            t2,
            c2,
            { discrete: true }
          );
        };
        const c2 = { originalEvent: l2 };
        l2.pointerType === "touch" ? (e2.removeEventListener("click", s2.current), s2.current = E2, e2.addEventListener("click", s2.current, { once: true })) : E2();
      } else
        e2.removeEventListener("click", s2.current);
      o2.current = false;
    }, d2 = window.setTimeout(() => {
      e2.addEventListener("pointerdown", a2);
    }, 0);
    return () => {
      window.clearTimeout(d2), e2.removeEventListener("pointerdown", a2), e2.removeEventListener("click", s2.current);
    };
  }, [e2, t2]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o2.current = true
  };
}
function J$3(n2, e2 = globalThis == null ? void 0 : globalThis.document) {
  const t2 = c$2(n2), o2 = reactExports.useRef(false);
  return reactExports.useEffect(() => {
    const s2 = (a2) => {
      a2.target && !o2.current && x$4(j$2, t2, { originalEvent: a2 }, {
        discrete: false
      });
    };
    return e2.addEventListener("focusin", s2), () => e2.removeEventListener("focusin", s2);
  }, [e2, t2]), {
    onFocusCapture: () => o2.current = true,
    onBlurCapture: () => o2.current = false
  };
}
function g$3() {
  const n2 = new CustomEvent(y$2);
  document.dispatchEvent(n2);
}
function x$4(n2, e2, t2, { discrete: o2 }) {
  const s2 = t2.originalEvent.target, a2 = new CustomEvent(n2, { bubbles: false, cancelable: true, detail: t2 });
  e2 && s2.addEventListener(n2, e2, { once: true }), o2 ? w$3(s2, a2) : s2.dispatchEvent(a2);
}
var Q$3 = "Portal", V$3 = reactExports.forwardRef((n2, e2) => {
  var _a;
  const { container: t2, ...o2 } = n2, [s2, a$1] = reactExports.useState(false);
  a(() => a$1(true), []);
  const d2 = t2 || s2 && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return d2 ? M$4.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { ...o2, ref: e2 }), d2) : null;
});
V$3.displayName = Q$3;
var U$2 = 0;
function gt$1() {
  reactExports.useEffect(() => {
    const e2 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e2[0] ?? Z$2()), document.body.insertAdjacentElement("beforeend", e2[1] ?? Z$2()), U$2++, () => {
      U$2 === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t2) => t2.remove()), U$2--;
    };
  }, []);
}
function Z$2() {
  const e2 = document.createElement("span");
  return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.outline = "none", e2.style.opacity = "0", e2.style.position = "fixed", e2.style.pointerEvents = "none", e2;
}
var _$3 = "focusScope.autoFocusOnMount", j$1 = "focusScope.autoFocusOnUnmount", q$4 = { bubbles: false, cancelable: true }, ye$2 = "FocusScope", be$3 = reactExports.forwardRef((e2, t2) => {
  const {
    loop: n2 = false,
    trapped: r = false,
    onMountAutoFocus: c2,
    onUnmountAutoFocus: i2,
    ...s2
  } = e2, [a2, S2] = reactExports.useState(null), b2 = c$2(c2), g2 = c$2(i2), f2 = reactExports.useRef(null), v2 = x$5(t2, (o2) => S2(o2)), h2 = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (r) {
      let o2 = function(p2) {
        if (h2.paused || !a2) return;
        const y2 = p2.target;
        a2.contains(y2) ? f2.current = y2 : k$2(f2.current, { select: true });
      }, l2 = function(p2) {
        if (h2.paused || !a2) return;
        const y2 = p2.relatedTarget;
        y2 !== null && (a2.contains(y2) || k$2(f2.current, { select: true }));
      }, d2 = function(p2) {
        if (document.activeElement === document.body)
          for (const E2 of p2)
            E2.removedNodes.length > 0 && k$2(a2);
      };
      document.addEventListener("focusin", o2), document.addEventListener("focusout", l2);
      const m2 = new MutationObserver(d2);
      return a2 && m2.observe(a2, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", o2), document.removeEventListener("focusout", l2), m2.disconnect();
      };
    }
  }, [r, a2, h2.paused]), reactExports.useEffect(() => {
    if (a2) {
      $$3.add(h2);
      const o2 = document.activeElement;
      if (!a2.contains(o2)) {
        const d2 = new CustomEvent(_$3, q$4);
        a2.addEventListener(_$3, b2), a2.dispatchEvent(d2), d2.defaultPrevented || (Ee$2(ke$2(oe$3(a2)), { select: true }), document.activeElement === o2 && k$2(a2));
      }
      return () => {
        a2.removeEventListener(_$3, b2), setTimeout(() => {
          const d2 = new CustomEvent(j$1, q$4);
          a2.addEventListener(j$1, g2), a2.dispatchEvent(d2), d2.defaultPrevented || k$2(o2 ?? document.body, { select: true }), a2.removeEventListener(j$1, g2), $$3.remove(h2);
        }, 0);
      };
    }
  }, [a2, b2, g2, h2]);
  const w2 = reactExports.useCallback(
    (o2) => {
      if (!n2 && !r || h2.paused) return;
      const l2 = o2.key === "Tab" && !o2.altKey && !o2.ctrlKey && !o2.metaKey, d2 = document.activeElement;
      if (l2 && d2) {
        const m2 = o2.currentTarget, [p2, y2] = Se$1(m2);
        p2 && y2 ? !o2.shiftKey && d2 === y2 ? (o2.preventDefault(), n2 && k$2(p2, { select: true })) : o2.shiftKey && d2 === p2 && (o2.preventDefault(), n2 && k$2(y2, { select: true })) : d2 === m2 && o2.preventDefault();
      }
    },
    [n2, r, h2.paused]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { tabIndex: -1, ...s2, ref: v2, onKeyDown: w2 });
});
be$3.displayName = ye$2;
function Ee$2(e2, { select: t2 = false } = {}) {
  const n2 = document.activeElement;
  for (const r of e2)
    if (k$2(r, { select: t2 }), document.activeElement !== n2) return;
}
function Se$1(e2) {
  const t2 = oe$3(e2), n2 = Q$2(t2, e2), r = Q$2(t2.reverse(), e2);
  return [n2, r];
}
function oe$3(e2) {
  const t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const c2 = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || c2 ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function Q$2(e2, t2) {
  for (const n2 of e2)
    if (!we$2(n2, { upTo: t2 })) return n2;
}
function we$2(e2, { upTo: t2 }) {
  if (getComputedStyle(e2).visibility === "hidden") return true;
  for (; e2; ) {
    if (t2 !== void 0 && e2 === t2) return false;
    if (getComputedStyle(e2).display === "none") return true;
    e2 = e2.parentElement;
  }
  return false;
}
function Ce$2(e2) {
  return e2 instanceof HTMLInputElement && "select" in e2;
}
function k$2(e2, { select: t2 = false } = {}) {
  if (e2 && e2.focus) {
    const n2 = document.activeElement;
    e2.focus({ preventScroll: true }), e2 !== n2 && Ce$2(e2) && t2 && e2.select();
  }
}
var $$3 = Re$1();
function Re$1() {
  let e2 = [];
  return {
    add(t2) {
      const n2 = e2[0];
      t2 !== n2 && (n2 == null ? void 0 : n2.pause()), e2 = J$2(e2, t2), e2.unshift(t2);
    },
    remove(t2) {
      var _a;
      e2 = J$2(e2, t2), (_a = e2[0]) == null ? void 0 : _a.resume();
    }
  };
}
function J$2(e2, t2) {
  const n2 = [...e2], r = n2.indexOf(t2);
  return r !== -1 && n2.splice(r, 1), n2;
}
function ke$2(e2) {
  return e2.filter((t2) => t2.tagName !== "A");
}
var Ae$1 = function(e2) {
  if (typeof document > "u")
    return null;
  var t2 = Array.isArray(e2) ? e2[0] : e2;
  return t2.ownerDocument.body;
}, T$1 = /* @__PURE__ */ new WeakMap(), O$3 = /* @__PURE__ */ new WeakMap(), L$4 = {}, K$3 = 0, ce$3 = function(e2) {
  return e2 && (e2.host || ce$3(e2.parentNode));
}, Te$2 = function(e2, t2) {
  return t2.map(function(n2) {
    if (e2.contains(n2))
      return n2;
    var r = ce$3(n2);
    return r && e2.contains(r) ? r : (console.error("aria-hidden", n2, "in not contained inside", e2, ". Doing nothing"), null);
  }).filter(function(n2) {
    return !!n2;
  });
}, Ne$1 = function(e2, t2, n2, r) {
  var c2 = Te$2(t2, Array.isArray(e2) ? e2 : [e2]);
  L$4[n2] || (L$4[n2] = /* @__PURE__ */ new WeakMap());
  var i2 = L$4[n2], s2 = [], a2 = /* @__PURE__ */ new Set(), S2 = new Set(c2), b2 = function(f2) {
    !f2 || a2.has(f2) || (a2.add(f2), b2(f2.parentNode));
  };
  c2.forEach(b2);
  var g2 = function(f2) {
    !f2 || S2.has(f2) || Array.prototype.forEach.call(f2.children, function(v2) {
      if (a2.has(v2))
        g2(v2);
      else
        try {
          var h2 = v2.getAttribute(r), w2 = h2 !== null && h2 !== "false", o2 = (T$1.get(v2) || 0) + 1, l2 = (i2.get(v2) || 0) + 1;
          T$1.set(v2, o2), i2.set(v2, l2), s2.push(v2), o2 === 1 && w2 && O$3.set(v2, true), l2 === 1 && v2.setAttribute(n2, "true"), w2 || v2.setAttribute(r, "true");
        } catch (d2) {
          console.error("aria-hidden: cannot operate on ", v2, d2);
        }
    });
  };
  return g2(t2), a2.clear(), K$3++, function() {
    s2.forEach(function(f2) {
      var v2 = T$1.get(f2) - 1, h2 = i2.get(f2) - 1;
      T$1.set(f2, v2), i2.set(f2, h2), v2 || (O$3.has(f2) || f2.removeAttribute(r), O$3.delete(f2)), h2 || f2.removeAttribute(n2);
    }), K$3--, K$3 || (T$1 = /* @__PURE__ */ new WeakMap(), T$1 = /* @__PURE__ */ new WeakMap(), O$3 = /* @__PURE__ */ new WeakMap(), L$4 = {});
  };
}, yt$1 = function(e2, t2, n2) {
  n2 === void 0 && (n2 = "data-aria-hidden");
  var r = Array.from(Array.isArray(e2) ? e2 : [e2]), c2 = Ae$1(e2);
  return c2 ? (r.push.apply(r, Array.from(c2.querySelectorAll("[aria-live], script"))), Ne$1(r, c2, n2, "aria-hidden")) : function() {
    return null;
  };
}, C$4 = function() {
  return C$4 = Object.assign || function(t2) {
    for (var n2, r = 1, c2 = arguments.length; r < c2; r++) {
      n2 = arguments[r];
      for (var i2 in n2) Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
    }
    return t2;
  }, C$4.apply(this, arguments);
};
function ue$3(e2, t2) {
  var n2 = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t2.indexOf(r) < 0 && (n2[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c2 = 0, r = Object.getOwnPropertySymbols(e2); c2 < r.length; c2++)
      t2.indexOf(r[c2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[c2]) && (n2[r[c2]] = e2[r[c2]]);
  return n2;
}
function Me$1(e2, t2, n2) {
  for (var r = 0, c2 = t2.length, i2; r < c2; r++)
    (i2 || !(r in t2)) && (i2 || (i2 = Array.prototype.slice.call(t2, 0, r)), i2[r] = t2[r]);
  return e2.concat(i2 || Array.prototype.slice.call(t2));
}
var W$1 = "right-scroll-bar-position", B$5 = "width-before-scroll-bar", Fe$3 = "with-scroll-bars-hidden", Pe$2 = "--removed-body-scroll-bar-size";
function H$4(e2, t2) {
  return typeof e2 == "function" ? e2(t2) : e2 && (e2.current = t2), e2;
}
function Oe$2(e2, t2) {
  var n2 = reactExports.useState(function() {
    return {
      // value
      value: e2,
      // last callback
      callback: t2,
      // "memoized" public interface
      facade: {
        get current() {
          return n2.value;
        },
        set current(r) {
          var c2 = n2.value;
          c2 !== r && (n2.value = r, n2.callback(r, c2));
        }
      }
    };
  })[0];
  return n2.callback = t2, n2.facade;
}
var Le$3 = typeof window < "u" ? reactExports.useLayoutEffect : reactExports.useEffect, ee$5 = /* @__PURE__ */ new WeakMap();
function Ie$3(e2, t2) {
  var n2 = Oe$2(null, function(r) {
    return e2.forEach(function(c2) {
      return H$4(c2, r);
    });
  });
  return Le$3(function() {
    var r = ee$5.get(n2);
    if (r) {
      var c2 = new Set(r), i2 = new Set(e2), s2 = n2.current;
      c2.forEach(function(a2) {
        i2.has(a2) || H$4(a2, null);
      }), i2.forEach(function(a2) {
        c2.has(a2) || H$4(a2, s2);
      });
    }
    ee$5.set(n2, e2);
  }, [e2]), n2;
}
function xe$2(e2) {
  return e2;
}
function We$2(e2, t2) {
  t2 === void 0 && (t2 = xe$2);
  var n2 = [], r = false, c2 = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n2.length ? n2[n2.length - 1] : e2;
    },
    useMedium: function(i2) {
      var s2 = t2(i2, r);
      return n2.push(s2), function() {
        n2 = n2.filter(function(a2) {
          return a2 !== s2;
        });
      };
    },
    assignSyncMedium: function(i2) {
      for (r = true; n2.length; ) {
        var s2 = n2;
        n2 = [], s2.forEach(i2);
      }
      n2 = {
        push: function(a2) {
          return i2(a2);
        },
        filter: function() {
          return n2;
        }
      };
    },
    assignMedium: function(i2) {
      r = true;
      var s2 = [];
      if (n2.length) {
        var a2 = n2;
        n2 = [], a2.forEach(i2), s2 = n2;
      }
      var S2 = function() {
        var g2 = s2;
        s2 = [], g2.forEach(i2);
      }, b2 = function() {
        return Promise.resolve().then(S2);
      };
      b2(), n2 = {
        push: function(g2) {
          s2.push(g2), b2();
        },
        filter: function(g2) {
          return s2 = s2.filter(g2), n2;
        }
      };
    }
  };
  return c2;
}
function Be$3(e2) {
  e2 === void 0 && (e2 = {});
  var t2 = We$2(null);
  return t2.options = C$4({ async: true, ssr: false }, e2), t2;
}
var ie$2 = function(e2) {
  var t2 = e2.sideCar, n2 = ue$3(e2, ["sideCar"]);
  if (!t2)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t2.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return reactExports.createElement(r, C$4({}, n2));
};
ie$2.isSideCarExport = true;
function De$3(e2, t2) {
  return e2.useMedium(t2), ie$2;
}
var le$3 = Be$3(), V$2 = function() {
}, D$1 = reactExports.forwardRef(function(e2, t2) {
  var n2 = reactExports.useRef(null), r = reactExports.useState({
    onScrollCapture: V$2,
    onWheelCapture: V$2,
    onTouchMoveCapture: V$2
  }), c2 = r[0], i2 = r[1], s2 = e2.forwardProps, a2 = e2.children, S2 = e2.className, b2 = e2.removeScrollBar, g2 = e2.enabled, f2 = e2.shards, v2 = e2.sideCar, h2 = e2.noRelative, w2 = e2.noIsolation, o2 = e2.inert, l2 = e2.allowPinchZoom, d2 = e2.as, m2 = d2 === void 0 ? "div" : d2, p2 = e2.gapMode, y2 = ue$3(e2, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E2 = v2, A2 = Ie$3([n2, t2]), R2 = C$4(C$4({}, y2), c2);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    g2 && reactExports.createElement(E2, { sideCar: le$3, removeScrollBar: b2, shards: f2, noRelative: h2, noIsolation: w2, inert: o2, setCallbacks: i2, allowPinchZoom: !!l2, lockRef: n2, gapMode: p2 }),
    s2 ? reactExports.cloneElement(reactExports.Children.only(a2), C$4(C$4({}, R2), { ref: A2 })) : reactExports.createElement(m2, C$4({}, R2, { className: S2, ref: A2 }), a2)
  );
});
D$1.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
D$1.classNames = {
  fullWidth: B$5,
  zeroRight: W$1
};
var Ue$3 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _e$2() {
  if (!document)
    return null;
  var e2 = document.createElement("style");
  e2.type = "text/css";
  var t2 = Ue$3();
  return t2 && e2.setAttribute("nonce", t2), e2;
}
function je$2(e2, t2) {
  e2.styleSheet ? e2.styleSheet.cssText = t2 : e2.appendChild(document.createTextNode(t2));
}
function Ke$2(e2) {
  var t2 = document.head || document.getElementsByTagName("head")[0];
  t2.appendChild(e2);
}
var He$2 = function() {
  var e2 = 0, t2 = null;
  return {
    add: function(n2) {
      e2 == 0 && (t2 = _e$2()) && (je$2(t2, n2), Ke$2(t2)), e2++;
    },
    remove: function() {
      e2--, !e2 && t2 && (t2.parentNode && t2.parentNode.removeChild(t2), t2 = null);
    }
  };
}, Ve$2 = function() {
  var e2 = He$2();
  return function(t2, n2) {
    reactExports.useEffect(function() {
      return e2.add(t2), function() {
        e2.remove();
      };
    }, [t2 && n2]);
  };
}, se$2 = function() {
  var e2 = Ve$2(), t2 = function(n2) {
    var r = n2.styles, c2 = n2.dynamic;
    return e2(r, c2), null;
  };
  return t2;
}, Xe$2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, X$4 = function(e2) {
  return parseInt(e2 || "", 10) || 0;
}, Ye$2 = function(e2) {
  var t2 = window.getComputedStyle(document.body), n2 = t2[e2 === "padding" ? "paddingLeft" : "marginLeft"], r = t2[e2 === "padding" ? "paddingTop" : "marginTop"], c2 = t2[e2 === "padding" ? "paddingRight" : "marginRight"];
  return [X$4(n2), X$4(r), X$4(c2)];
}, Ge$2 = function(e2) {
  if (e2 === void 0 && (e2 = "margin"), typeof window > "u")
    return Xe$2;
  var t2 = Ye$2(e2), n2 = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t2[0],
    top: t2[1],
    right: t2[2],
    gap: Math.max(0, r - n2 + t2[2] - t2[0])
  };
}, ze$2 = se$2(), F$3 = "data-scroll-locked", Ze$2 = function(e2, t2, n2, r) {
  var c2 = e2.left, i2 = e2.top, s2 = e2.right, a2 = e2.gap;
  return n2 === void 0 && (n2 = "margin"), `
  .`.concat(Fe$3, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a2, "px ").concat(r, `;
  }
  body[`).concat(F$3, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t2 && "position: relative ".concat(r, ";"),
    n2 === "margin" && `
    padding-left: `.concat(c2, `px;
    padding-top: `).concat(i2, `px;
    padding-right: `).concat(s2, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a2, "px ").concat(r, `;
    `),
    n2 === "padding" && "padding-right: ".concat(a2, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(W$1, ` {
    right: `).concat(a2, "px ").concat(r, `;
  }
  
  .`).concat(B$5, ` {
    margin-right: `).concat(a2, "px ").concat(r, `;
  }
  
  .`).concat(W$1, " .").concat(W$1, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(B$5, " .").concat(B$5, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(F$3, `] {
    `).concat(Pe$2, ": ").concat(a2, `px;
  }
`);
}, te$4 = function() {
  var e2 = parseInt(document.body.getAttribute(F$3) || "0", 10);
  return isFinite(e2) ? e2 : 0;
}, qe$2 = function() {
  reactExports.useEffect(function() {
    return document.body.setAttribute(F$3, (te$4() + 1).toString()), function() {
      var e2 = te$4() - 1;
      e2 <= 0 ? document.body.removeAttribute(F$3) : document.body.setAttribute(F$3, e2.toString());
    };
  }, []);
}, Qe$2 = function(e2) {
  var t2 = e2.noRelative, n2 = e2.noImportant, r = e2.gapMode, c2 = r === void 0 ? "margin" : r;
  qe$2();
  var i2 = reactExports.useMemo(function() {
    return Ge$2(c2);
  }, [c2]);
  return reactExports.createElement(ze$2, { styles: Ze$2(i2, !t2, c2, n2 ? "" : "!important") });
}, Y$4 = false;
if (typeof window < "u")
  try {
    var I$4 = Object.defineProperty({}, "passive", {
      get: function() {
        return Y$4 = true, true;
      }
    });
    window.addEventListener("test", I$4, I$4), window.removeEventListener("test", I$4, I$4);
  } catch {
    Y$4 = false;
  }
var N$4 = Y$4 ? { passive: false } : false, $e$3 = function(e2) {
  return e2.tagName === "TEXTAREA";
}, fe$2 = function(e2, t2) {
  if (!(e2 instanceof Element))
    return false;
  var n2 = window.getComputedStyle(e2);
  return (
    // not-not-scrollable
    n2[t2] !== "hidden" && // contains scroll inside self
    !(n2.overflowY === n2.overflowX && !$e$3(e2) && n2[t2] === "visible")
  );
}, Je$2 = function(e2) {
  return fe$2(e2, "overflowY");
}, et$2 = function(e2) {
  return fe$2(e2, "overflowX");
}, ne$3 = function(e2, t2) {
  var n2 = t2.ownerDocument, r = t2;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var c2 = de$3(e2, r);
    if (c2) {
      var i2 = ve$1(e2, r), s2 = i2[1], a2 = i2[2];
      if (s2 > a2)
        return true;
    }
    r = r.parentNode;
  } while (r && r !== n2.body);
  return false;
}, tt$2 = function(e2) {
  var t2 = e2.scrollTop, n2 = e2.scrollHeight, r = e2.clientHeight;
  return [
    t2,
    n2,
    r
  ];
}, nt$1 = function(e2) {
  var t2 = e2.scrollLeft, n2 = e2.scrollWidth, r = e2.clientWidth;
  return [
    t2,
    n2,
    r
  ];
}, de$3 = function(e2, t2) {
  return e2 === "v" ? Je$2(t2) : et$2(t2);
}, ve$1 = function(e2, t2) {
  return e2 === "v" ? tt$2(t2) : nt$1(t2);
}, rt$2 = function(e2, t2) {
  return e2 === "h" && t2 === "rtl" ? -1 : 1;
}, at$2 = function(e2, t2, n2, r, c2) {
  var i2 = rt$2(e2, window.getComputedStyle(t2).direction), s2 = i2 * r, a2 = n2.target, S2 = t2.contains(a2), b2 = false, g2 = s2 > 0, f2 = 0, v2 = 0;
  do {
    if (!a2)
      break;
    var h2 = ve$1(e2, a2), w2 = h2[0], o2 = h2[1], l2 = h2[2], d2 = o2 - l2 - i2 * w2;
    (w2 || d2) && de$3(e2, a2) && (f2 += d2, v2 += w2);
    var m2 = a2.parentNode;
    a2 = m2 && m2.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m2.host : m2;
  } while (
    // portaled content
    !S2 && a2 !== document.body || // self content
    S2 && (t2.contains(a2) || t2 === a2)
  );
  return (g2 && Math.abs(f2) < 1 || !g2 && Math.abs(v2) < 1) && (b2 = true), b2;
}, x$3 = function(e2) {
  return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
}, re$2 = function(e2) {
  return [e2.deltaX, e2.deltaY];
}, ae$3 = function(e2) {
  return e2 && "current" in e2 ? e2.current : e2;
}, ot$2 = function(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}, ct$1 = function(e2) {
  return `
  .block-interactivity-`.concat(e2, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e2, ` {pointer-events: all;}
`);
}, ut$1 = 0, M$2 = [];
function it$1(e2) {
  var t2 = reactExports.useRef([]), n2 = reactExports.useRef([0, 0]), r = reactExports.useRef(), c2 = reactExports.useState(ut$1++)[0], i2 = reactExports.useState(se$2)[0], s2 = reactExports.useRef(e2);
  reactExports.useEffect(function() {
    s2.current = e2;
  }, [e2]), reactExports.useEffect(function() {
    if (e2.inert) {
      document.body.classList.add("block-interactivity-".concat(c2));
      var o2 = Me$1([e2.lockRef.current], (e2.shards || []).map(ae$3)).filter(Boolean);
      return o2.forEach(function(l2) {
        return l2.classList.add("allow-interactivity-".concat(c2));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c2)), o2.forEach(function(l2) {
          return l2.classList.remove("allow-interactivity-".concat(c2));
        });
      };
    }
  }, [e2.inert, e2.lockRef.current, e2.shards]);
  var a2 = reactExports.useCallback(function(o2, l2) {
    if ("touches" in o2 && o2.touches.length === 2 || o2.type === "wheel" && o2.ctrlKey)
      return !s2.current.allowPinchZoom;
    var d2 = x$3(o2), m2 = n2.current, p2 = "deltaX" in o2 ? o2.deltaX : m2[0] - d2[0], y2 = "deltaY" in o2 ? o2.deltaY : m2[1] - d2[1], E2, A2 = o2.target, R2 = Math.abs(p2) > Math.abs(y2) ? "h" : "v";
    if ("touches" in o2 && R2 === "h" && A2.type === "range")
      return false;
    var P2 = ne$3(R2, A2);
    if (!P2)
      return true;
    if (P2 ? E2 = R2 : (E2 = R2 === "v" ? "h" : "v", P2 = ne$3(R2, A2)), !P2)
      return false;
    if (!r.current && "changedTouches" in o2 && (p2 || y2) && (r.current = E2), !E2)
      return true;
    var G2 = r.current || E2;
    return at$2(G2, l2, o2, G2 === "h" ? p2 : y2);
  }, []), S2 = reactExports.useCallback(function(o2) {
    var l2 = o2;
    if (!(!M$2.length || M$2[M$2.length - 1] !== i2)) {
      var d2 = "deltaY" in l2 ? re$2(l2) : x$3(l2), m2 = t2.current.filter(function(E2) {
        return E2.name === l2.type && (E2.target === l2.target || l2.target === E2.shadowParent) && ot$2(E2.delta, d2);
      })[0];
      if (m2 && m2.should) {
        l2.cancelable && l2.preventDefault();
        return;
      }
      if (!m2) {
        var p2 = (s2.current.shards || []).map(ae$3).filter(Boolean).filter(function(E2) {
          return E2.contains(l2.target);
        }), y2 = p2.length > 0 ? a2(l2, p2[0]) : !s2.current.noIsolation;
        y2 && l2.cancelable && l2.preventDefault();
      }
    }
  }, []), b2 = reactExports.useCallback(function(o2, l2, d2, m2) {
    var p2 = { name: o2, delta: l2, target: d2, should: m2, shadowParent: lt$1(d2) };
    t2.current.push(p2), setTimeout(function() {
      t2.current = t2.current.filter(function(y2) {
        return y2 !== p2;
      });
    }, 1);
  }, []), g2 = reactExports.useCallback(function(o2) {
    n2.current = x$3(o2), r.current = void 0;
  }, []), f2 = reactExports.useCallback(function(o2) {
    b2(o2.type, re$2(o2), o2.target, a2(o2, e2.lockRef.current));
  }, []), v2 = reactExports.useCallback(function(o2) {
    b2(o2.type, x$3(o2), o2.target, a2(o2, e2.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    return M$2.push(i2), e2.setCallbacks({
      onScrollCapture: f2,
      onWheelCapture: f2,
      onTouchMoveCapture: v2
    }), document.addEventListener("wheel", S2, N$4), document.addEventListener("touchmove", S2, N$4), document.addEventListener("touchstart", g2, N$4), function() {
      M$2 = M$2.filter(function(o2) {
        return o2 !== i2;
      }), document.removeEventListener("wheel", S2, N$4), document.removeEventListener("touchmove", S2, N$4), document.removeEventListener("touchstart", g2, N$4);
    };
  }, []);
  var h2 = e2.removeScrollBar, w2 = e2.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    w2 ? reactExports.createElement(i2, { styles: ct$1(c2) }) : null,
    h2 ? reactExports.createElement(Qe$2, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null
  );
}
function lt$1(e2) {
  for (var t2 = null; e2 !== null; )
    e2 instanceof ShadowRoot && (t2 = e2.host, e2 = e2.host), e2 = e2.parentNode;
  return t2;
}
const st$1 = De$3(le$3, it$1);
var ft$1 = reactExports.forwardRef(function(e2, t2) {
  return reactExports.createElement(D$1, C$4({}, e2, { ref: t2, sideCar: st$1 }));
});
ft$1.classNames = D$1.classNames;
var s$2 = o$1[" useId ".trim().toString()] || (() => {
}), i$1 = 0;
function c$1(t2) {
  const [r, u2] = reactExports.useState(s$2());
  return a(() => {
    u2((a2) => a2 ?? String(i$1++));
  }, [t2]), t2 || (r ? `radix-${r}` : "");
}
function n$2(r) {
  const [d2, e2] = reactExports.useState(void 0);
  return a(() => {
    if (r) {
      e2({ width: r.offsetWidth, height: r.offsetHeight });
      const f2 = new ResizeObserver((i2) => {
        if (!Array.isArray(i2) || !i2.length)
          return;
        const b2 = i2[0];
        let o2, t2;
        if ("borderBoxSize" in b2) {
          const s2 = b2.borderBoxSize, u2 = Array.isArray(s2) ? s2[0] : s2;
          o2 = u2.inlineSize, t2 = u2.blockSize;
        } else
          o2 = r.offsetWidth, t2 = r.offsetHeight;
        e2({ width: o2, height: t2 });
      });
      return f2.observe(r, { box: "border-box" }), () => f2.unobserve(r);
    } else
      e2(void 0);
  }, [r]), d2;
}
const Se = ["top", "right", "bottom", "left"], Z$1 = Math.min, W = Math.max, at$1 = Math.round, ct = Math.floor, I$3 = (t2) => ({
  x: t2,
  y: t2
}), Ee$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Le$2 = {
  start: "end",
  end: "start"
};
function yt(t2, e2, n2) {
  return W(t2, Z$1(e2, n2));
}
function q$3(t2, e2) {
  return typeof t2 == "function" ? t2(e2) : t2;
}
function U$1(t2) {
  return t2.split("-")[0];
}
function tt$1(t2) {
  return t2.split("-")[1];
}
function Rt$1(t2) {
  return t2 === "x" ? "y" : "x";
}
function Ct(t2) {
  return t2 === "y" ? "height" : "width";
}
const De$2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function z$3(t2) {
  return De$2.has(U$1(t2)) ? "y" : "x";
}
function Pt$1(t2) {
  return Rt$1(z$3(t2));
}
function Me(t2, e2, n2) {
  n2 === void 0 && (n2 = false);
  const o2 = tt$1(t2), r = Pt$1(t2), i2 = Ct(r);
  let s2 = r === "x" ? o2 === (n2 ? "end" : "start") ? "right" : "left" : o2 === "start" ? "bottom" : "top";
  return e2.reference[i2] > e2.floating[i2] && (s2 = ft(s2)), [s2, ft(s2)];
}
function Te$1(t2) {
  const e2 = ft(t2);
  return [vt(t2), e2, vt(e2)];
}
function vt(t2) {
  return t2.replace(/start|end/g, (e2) => Le$2[e2]);
}
const kt$1 = ["left", "right"], Ft$1 = ["right", "left"], $e$2 = ["top", "bottom"], ke$1 = ["bottom", "top"];
function Fe$2(t2, e2, n2) {
  switch (t2) {
    case "top":
    case "bottom":
      return n2 ? e2 ? Ft$1 : kt$1 : e2 ? kt$1 : Ft$1;
    case "left":
    case "right":
      return e2 ? $e$2 : ke$1;
    default:
      return [];
  }
}
function Ne(t2, e2, n2, o2) {
  const r = tt$1(t2);
  let i2 = Fe$2(U$1(t2), n2 === "start", o2);
  return r && (i2 = i2.map((s2) => s2 + "-" + r), e2 && (i2 = i2.concat(i2.map(vt)))), i2;
}
function ft(t2) {
  return t2.replace(/left|right|bottom|top/g, (e2) => Ee$1[e2]);
}
function We$1(t2) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t2
  };
}
function jt$1(t2) {
  return typeof t2 != "number" ? We$1(t2) : {
    top: t2,
    right: t2,
    bottom: t2,
    left: t2
  };
}
function ut(t2) {
  const {
    x: e2,
    y: n2,
    width: o2,
    height: r
  } = t2;
  return {
    width: o2,
    height: r,
    top: n2,
    left: e2,
    right: e2 + o2,
    bottom: n2 + r,
    x: e2,
    y: n2
  };
}
function Nt$1(t2, e2, n2) {
  let {
    reference: o2,
    floating: r
  } = t2;
  const i2 = z$3(e2), s2 = Pt$1(e2), c2 = Ct(s2), l2 = U$1(e2), a2 = i2 === "y", f2 = o2.x + o2.width / 2 - r.width / 2, u2 = o2.y + o2.height / 2 - r.height / 2, p2 = o2[c2] / 2 - r[c2] / 2;
  let d2;
  switch (l2) {
    case "top":
      d2 = {
        x: f2,
        y: o2.y - r.height
      };
      break;
    case "bottom":
      d2 = {
        x: f2,
        y: o2.y + o2.height
      };
      break;
    case "right":
      d2 = {
        x: o2.x + o2.width,
        y: u2
      };
      break;
    case "left":
      d2 = {
        x: o2.x - r.width,
        y: u2
      };
      break;
    default:
      d2 = {
        x: o2.x,
        y: o2.y
      };
  }
  switch (tt$1(e2)) {
    case "start":
      d2[s2] -= p2 * (n2 && a2 ? -1 : 1);
      break;
    case "end":
      d2[s2] += p2 * (n2 && a2 ? -1 : 1);
      break;
  }
  return d2;
}
const He$1 = async (t2, e2, n2) => {
  const {
    placement: o2 = "bottom",
    strategy: r = "absolute",
    middleware: i2 = [],
    platform: s2
  } = n2, c2 = i2.filter(Boolean), l2 = await (s2.isRTL == null ? void 0 : s2.isRTL(e2));
  let a2 = await s2.getElementRects({
    reference: t2,
    floating: e2,
    strategy: r
  }), {
    x: f2,
    y: u2
  } = Nt$1(a2, o2, l2), p2 = o2, d2 = {}, m2 = 0;
  for (let h2 = 0; h2 < c2.length; h2++) {
    const {
      name: w2,
      fn: g2
    } = c2[h2], {
      x: x2,
      y: b2,
      data: y2,
      reset: v2
    } = await g2({
      x: f2,
      y: u2,
      initialPlacement: o2,
      placement: p2,
      strategy: r,
      middlewareData: d2,
      rects: a2,
      platform: s2,
      elements: {
        reference: t2,
        floating: e2
      }
    });
    f2 = x2 ?? f2, u2 = b2 ?? u2, d2 = {
      ...d2,
      [w2]: {
        ...d2[w2],
        ...y2
      }
    }, v2 && m2 <= 50 && (m2++, typeof v2 == "object" && (v2.placement && (p2 = v2.placement), v2.rects && (a2 = v2.rects === true ? await s2.getElementRects({
      reference: t2,
      floating: e2,
      strategy: r
    }) : v2.rects), {
      x: f2,
      y: u2
    } = Nt$1(a2, p2, l2)), h2 = -1);
  }
  return {
    x: f2,
    y: u2,
    placement: p2,
    strategy: r,
    middlewareData: d2
  };
};
async function ot$1(t2, e2) {
  var n2;
  e2 === void 0 && (e2 = {});
  const {
    x: o2,
    y: r,
    platform: i2,
    rects: s2,
    elements: c2,
    strategy: l2
  } = t2, {
    boundary: a2 = "clippingAncestors",
    rootBoundary: f2 = "viewport",
    elementContext: u2 = "floating",
    altBoundary: p2 = false,
    padding: d2 = 0
  } = q$3(e2, t2), m2 = jt$1(d2), w2 = c2[p2 ? u2 === "floating" ? "reference" : "floating" : u2], g2 = ut(await i2.getClippingRect({
    element: (n2 = await (i2.isElement == null ? void 0 : i2.isElement(w2))) == null || n2 ? w2 : w2.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(c2.floating)),
    boundary: a2,
    rootBoundary: f2,
    strategy: l2
  })), x2 = u2 === "floating" ? {
    x: o2,
    y: r,
    width: s2.floating.width,
    height: s2.floating.height
  } : s2.reference, b2 = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(c2.floating)), y2 = await (i2.isElement == null ? void 0 : i2.isElement(b2)) ? await (i2.getScale == null ? void 0 : i2.getScale(b2)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v2 = ut(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c2,
    rect: x2,
    offsetParent: b2,
    strategy: l2
  }) : x2);
  return {
    top: (g2.top - v2.top + m2.top) / y2.y,
    bottom: (v2.bottom - g2.bottom + m2.bottom) / y2.y,
    left: (g2.left - v2.left + m2.left) / y2.x,
    right: (v2.right - g2.right + m2.right) / y2.x
  };
}
const _e$1 = (t2) => ({
  name: "arrow",
  options: t2,
  async fn(e2) {
    const {
      x: n2,
      y: o2,
      placement: r,
      rects: i2,
      platform: s2,
      elements: c2,
      middlewareData: l2
    } = e2, {
      element: a2,
      padding: f2 = 0
    } = q$3(t2, e2) || {};
    if (a2 == null)
      return {};
    const u2 = jt$1(f2), p2 = {
      x: n2,
      y: o2
    }, d2 = Pt$1(r), m2 = Ct(d2), h2 = await s2.getDimensions(a2), w2 = d2 === "y", g2 = w2 ? "top" : "left", x2 = w2 ? "bottom" : "right", b2 = w2 ? "clientHeight" : "clientWidth", y2 = i2.reference[m2] + i2.reference[d2] - p2[d2] - i2.floating[m2], v2 = p2[d2] - i2.reference[d2], P2 = await (s2.getOffsetParent == null ? void 0 : s2.getOffsetParent(a2));
    let C2 = P2 ? P2[b2] : 0;
    (!C2 || !await (s2.isElement == null ? void 0 : s2.isElement(P2))) && (C2 = c2.floating[b2] || i2.floating[m2]);
    const M2 = y2 / 2 - v2 / 2, F2 = C2 / 2 - h2[m2] / 2 - 1, D2 = Z$1(u2[g2], F2), $2 = Z$1(u2[x2], F2), k2 = D2, S2 = C2 - h2[m2] - $2, O2 = C2 / 2 - h2[m2] / 2 + M2, N2 = yt(k2, O2, S2), E2 = !l2.arrow && tt$1(r) != null && O2 !== N2 && i2.reference[m2] / 2 - (O2 < k2 ? D2 : $2) - h2[m2] / 2 < 0, L2 = E2 ? O2 < k2 ? O2 - k2 : O2 - S2 : 0;
    return {
      [d2]: p2[d2] + L2,
      data: {
        [d2]: N2,
        centerOffset: O2 - N2 - L2,
        ...E2 && {
          alignmentOffset: L2
        }
      },
      reset: E2
    };
  }
}), Be$2 = function(t2) {
  return t2 === void 0 && (t2 = {}), {
    name: "flip",
    options: t2,
    async fn(e2) {
      var n2, o2;
      const {
        placement: r,
        middlewareData: i2,
        rects: s2,
        initialPlacement: c2,
        platform: l2,
        elements: a2
      } = e2, {
        mainAxis: f2 = true,
        crossAxis: u2 = true,
        fallbackPlacements: p2,
        fallbackStrategy: d2 = "bestFit",
        fallbackAxisSideDirection: m2 = "none",
        flipAlignment: h2 = true,
        ...w2
      } = q$3(t2, e2);
      if ((n2 = i2.arrow) != null && n2.alignmentOffset)
        return {};
      const g2 = U$1(r), x2 = z$3(c2), b2 = U$1(c2) === c2, y2 = await (l2.isRTL == null ? void 0 : l2.isRTL(a2.floating)), v2 = p2 || (b2 || !h2 ? [ft(c2)] : Te$1(c2)), P2 = m2 !== "none";
      !p2 && P2 && v2.push(...Ne(c2, h2, m2, y2));
      const C2 = [c2, ...v2], M2 = await ot$1(e2, w2), F2 = [];
      let D2 = ((o2 = i2.flip) == null ? void 0 : o2.overflows) || [];
      if (f2 && F2.push(M2[g2]), u2) {
        const O2 = Me(r, s2, y2);
        F2.push(M2[O2[0]], M2[O2[1]]);
      }
      if (D2 = [...D2, {
        placement: r,
        overflows: F2
      }], !F2.every((O2) => O2 <= 0)) {
        var $2, k2;
        const O2 = ((($2 = i2.flip) == null ? void 0 : $2.index) || 0) + 1, N2 = C2[O2];
        if (N2 && (!(u2 === "alignment" ? x2 !== z$3(N2) : false) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D2.every((A2) => z$3(A2.placement) === x2 ? A2.overflows[0] > 0 : true)))
          return {
            data: {
              index: O2,
              overflows: D2
            },
            reset: {
              placement: N2
            }
          };
        let E2 = (k2 = D2.filter((L2) => L2.overflows[0] <= 0).sort((L2, A2) => L2.overflows[1] - A2.overflows[1])[0]) == null ? void 0 : k2.placement;
        if (!E2)
          switch (d2) {
            case "bestFit": {
              var S2;
              const L2 = (S2 = D2.filter((A2) => {
                if (P2) {
                  const T2 = z$3(A2.placement);
                  return T2 === x2 || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T2 === "y";
                }
                return true;
              }).map((A2) => [A2.placement, A2.overflows.filter((T2) => T2 > 0).reduce((T2, V2) => T2 + V2, 0)]).sort((A2, T2) => A2[1] - T2[1])[0]) == null ? void 0 : S2[0];
              L2 && (E2 = L2);
              break;
            }
            case "initialPlacement":
              E2 = c2;
              break;
          }
        if (r !== E2)
          return {
            reset: {
              placement: E2
            }
          };
      }
      return {};
    }
  };
};
function Wt$1(t2, e2) {
  return {
    top: t2.top - e2.height,
    right: t2.right - e2.width,
    bottom: t2.bottom - e2.height,
    left: t2.left - e2.width
  };
}
function Ht$1(t2) {
  return Se.some((e2) => t2[e2] >= 0);
}
const Ve$1 = function(t2) {
  return t2 === void 0 && (t2 = {}), {
    name: "hide",
    options: t2,
    async fn(e2) {
      const {
        rects: n2
      } = e2, {
        strategy: o2 = "referenceHidden",
        ...r
      } = q$3(t2, e2);
      switch (o2) {
        case "referenceHidden": {
          const i2 = await ot$1(e2, {
            ...r,
            elementContext: "reference"
          }), s2 = Wt$1(i2, n2.reference);
          return {
            data: {
              referenceHiddenOffsets: s2,
              referenceHidden: Ht$1(s2)
            }
          };
        }
        case "escaped": {
          const i2 = await ot$1(e2, {
            ...r,
            altBoundary: true
          }), s2 = Wt$1(i2, n2.floating);
          return {
            data: {
              escapedOffsets: s2,
              escaped: Ht$1(s2)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qt$1 = /* @__PURE__ */ new Set(["left", "top"]);
async function ze$1(t2, e2) {
  const {
    placement: n2,
    platform: o2,
    elements: r
  } = t2, i2 = await (o2.isRTL == null ? void 0 : o2.isRTL(r.floating)), s2 = U$1(n2), c2 = tt$1(n2), l2 = z$3(n2) === "y", a2 = qt$1.has(s2) ? -1 : 1, f2 = i2 && l2 ? -1 : 1, u2 = q$3(e2, t2);
  let {
    mainAxis: p2,
    crossAxis: d2,
    alignmentAxis: m2
  } = typeof u2 == "number" ? {
    mainAxis: u2,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u2.mainAxis || 0,
    crossAxis: u2.crossAxis || 0,
    alignmentAxis: u2.alignmentAxis
  };
  return c2 && typeof m2 == "number" && (d2 = c2 === "end" ? m2 * -1 : m2), l2 ? {
    x: d2 * f2,
    y: p2 * a2
  } : {
    x: p2 * a2,
    y: d2 * f2
  };
}
const Ie$2 = function(t2) {
  return t2 === void 0 && (t2 = 0), {
    name: "offset",
    options: t2,
    async fn(e2) {
      var n2, o2;
      const {
        x: r,
        y: i2,
        placement: s2,
        middlewareData: c2
      } = e2, l2 = await ze$1(e2, t2);
      return s2 === ((n2 = c2.offset) == null ? void 0 : n2.placement) && (o2 = c2.arrow) != null && o2.alignmentOffset ? {} : {
        x: r + l2.x,
        y: i2 + l2.y,
        data: {
          ...l2,
          placement: s2
        }
      };
    }
  };
}, Xe$1 = function(t2) {
  return t2 === void 0 && (t2 = {}), {
    name: "shift",
    options: t2,
    async fn(e2) {
      const {
        x: n2,
        y: o2,
        placement: r
      } = e2, {
        mainAxis: i2 = true,
        crossAxis: s2 = false,
        limiter: c2 = {
          fn: (w2) => {
            let {
              x: g2,
              y: x2
            } = w2;
            return {
              x: g2,
              y: x2
            };
          }
        },
        ...l2
      } = q$3(t2, e2), a2 = {
        x: n2,
        y: o2
      }, f2 = await ot$1(e2, l2), u2 = z$3(U$1(r)), p2 = Rt$1(u2);
      let d2 = a2[p2], m2 = a2[u2];
      if (i2) {
        const w2 = p2 === "y" ? "top" : "left", g2 = p2 === "y" ? "bottom" : "right", x2 = d2 + f2[w2], b2 = d2 - f2[g2];
        d2 = yt(x2, d2, b2);
      }
      if (s2) {
        const w2 = u2 === "y" ? "top" : "left", g2 = u2 === "y" ? "bottom" : "right", x2 = m2 + f2[w2], b2 = m2 - f2[g2];
        m2 = yt(x2, m2, b2);
      }
      const h2 = c2.fn({
        ...e2,
        [p2]: d2,
        [u2]: m2
      });
      return {
        ...h2,
        data: {
          x: h2.x - n2,
          y: h2.y - o2,
          enabled: {
            [p2]: i2,
            [u2]: s2
          }
        }
      };
    }
  };
}, Ye$1 = function(t2) {
  return t2 === void 0 && (t2 = {}), {
    options: t2,
    fn(e2) {
      const {
        x: n2,
        y: o2,
        placement: r,
        rects: i2,
        middlewareData: s2
      } = e2, {
        offset: c2 = 0,
        mainAxis: l2 = true,
        crossAxis: a2 = true
      } = q$3(t2, e2), f2 = {
        x: n2,
        y: o2
      }, u2 = z$3(r), p2 = Rt$1(u2);
      let d2 = f2[p2], m2 = f2[u2];
      const h2 = q$3(c2, e2), w2 = typeof h2 == "number" ? {
        mainAxis: h2,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h2
      };
      if (l2) {
        const b2 = p2 === "y" ? "height" : "width", y2 = i2.reference[p2] - i2.floating[b2] + w2.mainAxis, v2 = i2.reference[p2] + i2.reference[b2] - w2.mainAxis;
        d2 < y2 ? d2 = y2 : d2 > v2 && (d2 = v2);
      }
      if (a2) {
        var g2, x2;
        const b2 = p2 === "y" ? "width" : "height", y2 = qt$1.has(U$1(r)), v2 = i2.reference[u2] - i2.floating[b2] + (y2 && ((g2 = s2.offset) == null ? void 0 : g2[u2]) || 0) + (y2 ? 0 : w2.crossAxis), P2 = i2.reference[u2] + i2.reference[b2] + (y2 ? 0 : ((x2 = s2.offset) == null ? void 0 : x2[u2]) || 0) - (y2 ? w2.crossAxis : 0);
        m2 < v2 ? m2 = v2 : m2 > P2 && (m2 = P2);
      }
      return {
        [p2]: d2,
        [u2]: m2
      };
    }
  };
}, je$1 = function(t2) {
  return t2 === void 0 && (t2 = {}), {
    name: "size",
    options: t2,
    async fn(e2) {
      var n2, o2;
      const {
        placement: r,
        rects: i2,
        platform: s2,
        elements: c2
      } = e2, {
        apply: l2 = () => {
        },
        ...a2
      } = q$3(t2, e2), f2 = await ot$1(e2, a2), u2 = U$1(r), p2 = tt$1(r), d2 = z$3(r) === "y", {
        width: m2,
        height: h2
      } = i2.floating;
      let w2, g2;
      u2 === "top" || u2 === "bottom" ? (w2 = u2, g2 = p2 === (await (s2.isRTL == null ? void 0 : s2.isRTL(c2.floating)) ? "start" : "end") ? "left" : "right") : (g2 = u2, w2 = p2 === "end" ? "top" : "bottom");
      const x2 = h2 - f2.top - f2.bottom, b2 = m2 - f2.left - f2.right, y2 = Z$1(h2 - f2[w2], x2), v2 = Z$1(m2 - f2[g2], b2), P2 = !e2.middlewareData.shift;
      let C2 = y2, M2 = v2;
      if ((n2 = e2.middlewareData.shift) != null && n2.enabled.x && (M2 = b2), (o2 = e2.middlewareData.shift) != null && o2.enabled.y && (C2 = x2), P2 && !p2) {
        const D2 = W(f2.left, 0), $2 = W(f2.right, 0), k2 = W(f2.top, 0), S2 = W(f2.bottom, 0);
        d2 ? M2 = m2 - 2 * (D2 !== 0 || $2 !== 0 ? D2 + $2 : W(f2.left, f2.right)) : C2 = h2 - 2 * (k2 !== 0 || S2 !== 0 ? k2 + S2 : W(f2.top, f2.bottom));
      }
      await l2({
        ...e2,
        availableWidth: M2,
        availableHeight: C2
      });
      const F2 = await s2.getDimensions(c2.floating);
      return m2 !== F2.width || h2 !== F2.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function mt() {
  return typeof window < "u";
}
function et$1(t2) {
  return Ut$1(t2) ? (t2.nodeName || "").toLowerCase() : "#document";
}
function H$3(t2) {
  var e2;
  return (t2 == null || (e2 = t2.ownerDocument) == null ? void 0 : e2.defaultView) || window;
}
function Y$3(t2) {
  var e2;
  return (e2 = (Ut$1(t2) ? t2.ownerDocument : t2.document) || window.document) == null ? void 0 : e2.documentElement;
}
function Ut$1(t2) {
  return mt() ? t2 instanceof Node || t2 instanceof H$3(t2).Node : false;
}
function _$2(t2) {
  return mt() ? t2 instanceof Element || t2 instanceof H$3(t2).Element : false;
}
function X$3(t2) {
  return mt() ? t2 instanceof HTMLElement || t2 instanceof H$3(t2).HTMLElement : false;
}
function _t$1(t2) {
  return !mt() || typeof ShadowRoot > "u" ? false : t2 instanceof ShadowRoot || t2 instanceof H$3(t2).ShadowRoot;
}
const qe$1 = /* @__PURE__ */ new Set(["inline", "contents"]);
function it(t2) {
  const {
    overflow: e2,
    overflowX: n2,
    overflowY: o2,
    display: r
  } = B$4(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + o2 + n2) && !qe$1.has(r);
}
const Ue$2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ze$1(t2) {
  return Ue$2.has(et$1(t2));
}
const Ke$1 = [":popover-open", ":modal"];
function pt(t2) {
  return Ke$1.some((e2) => {
    try {
      return t2.matches(e2);
    } catch {
      return false;
    }
  });
}
const Ge$1 = ["transform", "translate", "scale", "rotate", "perspective"], Je$1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Qe$1 = ["paint", "layout", "strict", "content"];
function Ot$1(t2) {
  const e2 = St(), n2 = _$2(t2) ? B$4(t2) : t2;
  return Ge$1.some((o2) => n2[o2] ? n2[o2] !== "none" : false) || (n2.containerType ? n2.containerType !== "normal" : false) || !e2 && (n2.backdropFilter ? n2.backdropFilter !== "none" : false) || !e2 && (n2.filter ? n2.filter !== "none" : false) || Je$1.some((o2) => (n2.willChange || "").includes(o2)) || Qe$1.some((o2) => (n2.contain || "").includes(o2));
}
function tn(t2) {
  let e2 = K$2(t2);
  for (; X$3(e2) && !Q$1(e2); ) {
    if (Ot$1(e2))
      return e2;
    if (pt(e2))
      return null;
    e2 = K$2(e2);
  }
  return null;
}
function St() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const en = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Q$1(t2) {
  return en.has(et$1(t2));
}
function B$4(t2) {
  return H$3(t2).getComputedStyle(t2);
}
function ht(t2) {
  return _$2(t2) ? {
    scrollLeft: t2.scrollLeft,
    scrollTop: t2.scrollTop
  } : {
    scrollLeft: t2.scrollX,
    scrollTop: t2.scrollY
  };
}
function K$2(t2) {
  if (et$1(t2) === "html")
    return t2;
  const e2 = (
    // Step into the shadow DOM of the parent of a slotted node.
    t2.assignedSlot || // DOM Element detected.
    t2.parentNode || // ShadowRoot detected.
    _t$1(t2) && t2.host || // Fallback.
    Y$3(t2)
  );
  return _t$1(e2) ? e2.host : e2;
}
function Zt$1(t2) {
  const e2 = K$2(t2);
  return Q$1(e2) ? t2.ownerDocument ? t2.ownerDocument.body : t2.body : X$3(e2) && it(e2) ? e2 : Zt$1(e2);
}
function rt$1(t2, e2, n2) {
  var o2;
  e2 === void 0 && (e2 = []), n2 === void 0 && (n2 = true);
  const r = Zt$1(t2), i2 = r === ((o2 = t2.ownerDocument) == null ? void 0 : o2.body), s2 = H$3(r);
  if (i2) {
    const c2 = bt(s2);
    return e2.concat(s2, s2.visualViewport || [], it(r) ? r : [], c2 && n2 ? rt$1(c2) : []);
  }
  return e2.concat(r, rt$1(r, [], n2));
}
function bt(t2) {
  return t2.parent && Object.getPrototypeOf(t2.parent) ? t2.frameElement : null;
}
function Kt$1(t2) {
  const e2 = B$4(t2);
  let n2 = parseFloat(e2.width) || 0, o2 = parseFloat(e2.height) || 0;
  const r = X$3(t2), i2 = r ? t2.offsetWidth : n2, s2 = r ? t2.offsetHeight : o2, c2 = at$1(n2) !== i2 || at$1(o2) !== s2;
  return c2 && (n2 = i2, o2 = s2), {
    width: n2,
    height: o2,
    $: c2
  };
}
function Et$1(t2) {
  return _$2(t2) ? t2 : t2.contextElement;
}
function J$1(t2) {
  const e2 = Et$1(t2);
  if (!X$3(e2))
    return I$3(1);
  const n2 = e2.getBoundingClientRect(), {
    width: o2,
    height: r,
    $: i2
  } = Kt$1(e2);
  let s2 = (i2 ? at$1(n2.width) : n2.width) / o2, c2 = (i2 ? at$1(n2.height) : n2.height) / r;
  return (!s2 || !Number.isFinite(s2)) && (s2 = 1), (!c2 || !Number.isFinite(c2)) && (c2 = 1), {
    x: s2,
    y: c2
  };
}
const nn = /* @__PURE__ */ I$3(0);
function Gt$1(t2) {
  const e2 = H$3(t2);
  return !St() || !e2.visualViewport ? nn : {
    x: e2.visualViewport.offsetLeft,
    y: e2.visualViewport.offsetTop
  };
}
function on(t2, e2, n2) {
  return e2 === void 0 && (e2 = false), !n2 || e2 && n2 !== H$3(t2) ? false : e2;
}
function G$1(t2, e2, n2, o2) {
  e2 === void 0 && (e2 = false), n2 === void 0 && (n2 = false);
  const r = t2.getBoundingClientRect(), i2 = Et$1(t2);
  let s2 = I$3(1);
  e2 && (o2 ? _$2(o2) && (s2 = J$1(o2)) : s2 = J$1(t2));
  const c2 = on(i2, n2, o2) ? Gt$1(i2) : I$3(0);
  let l2 = (r.left + c2.x) / s2.x, a2 = (r.top + c2.y) / s2.y, f2 = r.width / s2.x, u2 = r.height / s2.y;
  if (i2) {
    const p2 = H$3(i2), d2 = o2 && _$2(o2) ? H$3(o2) : o2;
    let m2 = p2, h2 = bt(m2);
    for (; h2 && o2 && d2 !== m2; ) {
      const w2 = J$1(h2), g2 = h2.getBoundingClientRect(), x2 = B$4(h2), b2 = g2.left + (h2.clientLeft + parseFloat(x2.paddingLeft)) * w2.x, y2 = g2.top + (h2.clientTop + parseFloat(x2.paddingTop)) * w2.y;
      l2 *= w2.x, a2 *= w2.y, f2 *= w2.x, u2 *= w2.y, l2 += b2, a2 += y2, m2 = H$3(h2), h2 = bt(m2);
    }
  }
  return ut({
    width: f2,
    height: u2,
    x: l2,
    y: a2
  });
}
function gt(t2, e2) {
  const n2 = ht(t2).scrollLeft;
  return e2 ? e2.left + n2 : G$1(Y$3(t2)).left + n2;
}
function Jt$1(t2, e2) {
  const n2 = t2.getBoundingClientRect(), o2 = n2.left + e2.scrollLeft - gt(t2, n2), r = n2.top + e2.scrollTop;
  return {
    x: o2,
    y: r
  };
}
function rn(t2) {
  let {
    elements: e2,
    rect: n2,
    offsetParent: o2,
    strategy: r
  } = t2;
  const i2 = r === "fixed", s2 = Y$3(o2), c2 = e2 ? pt(e2.floating) : false;
  if (o2 === s2 || c2 && i2)
    return n2;
  let l2 = {
    scrollLeft: 0,
    scrollTop: 0
  }, a2 = I$3(1);
  const f2 = I$3(0), u2 = X$3(o2);
  if ((u2 || !u2 && !i2) && ((et$1(o2) !== "body" || it(s2)) && (l2 = ht(o2)), X$3(o2))) {
    const d2 = G$1(o2);
    a2 = J$1(o2), f2.x = d2.x + o2.clientLeft, f2.y = d2.y + o2.clientTop;
  }
  const p2 = s2 && !u2 && !i2 ? Jt$1(s2, l2) : I$3(0);
  return {
    width: n2.width * a2.x,
    height: n2.height * a2.y,
    x: n2.x * a2.x - l2.scrollLeft * a2.x + f2.x + p2.x,
    y: n2.y * a2.y - l2.scrollTop * a2.y + f2.y + p2.y
  };
}
function sn(t2) {
  return Array.from(t2.getClientRects());
}
function cn(t2) {
  const e2 = Y$3(t2), n2 = ht(t2), o2 = t2.ownerDocument.body, r = W(e2.scrollWidth, e2.clientWidth, o2.scrollWidth, o2.clientWidth), i2 = W(e2.scrollHeight, e2.clientHeight, o2.scrollHeight, o2.clientHeight);
  let s2 = -n2.scrollLeft + gt(t2);
  const c2 = -n2.scrollTop;
  return B$4(o2).direction === "rtl" && (s2 += W(e2.clientWidth, o2.clientWidth) - r), {
    width: r,
    height: i2,
    x: s2,
    y: c2
  };
}
const Bt$1 = 25;
function ln(t2, e2) {
  const n2 = H$3(t2), o2 = Y$3(t2), r = n2.visualViewport;
  let i2 = o2.clientWidth, s2 = o2.clientHeight, c2 = 0, l2 = 0;
  if (r) {
    i2 = r.width, s2 = r.height;
    const f2 = St();
    (!f2 || f2 && e2 === "fixed") && (c2 = r.offsetLeft, l2 = r.offsetTop);
  }
  const a2 = gt(o2);
  if (a2 <= 0) {
    const f2 = o2.ownerDocument, u2 = f2.body, p2 = getComputedStyle(u2), d2 = f2.compatMode === "CSS1Compat" && parseFloat(p2.marginLeft) + parseFloat(p2.marginRight) || 0, m2 = Math.abs(o2.clientWidth - u2.clientWidth - d2);
    m2 <= Bt$1 && (i2 -= m2);
  } else a2 <= Bt$1 && (i2 += a2);
  return {
    width: i2,
    height: s2,
    x: c2,
    y: l2
  };
}
const an = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function fn(t2, e2) {
  const n2 = G$1(t2, true, e2 === "fixed"), o2 = n2.top + t2.clientTop, r = n2.left + t2.clientLeft, i2 = X$3(t2) ? J$1(t2) : I$3(1), s2 = t2.clientWidth * i2.x, c2 = t2.clientHeight * i2.y, l2 = r * i2.x, a2 = o2 * i2.y;
  return {
    width: s2,
    height: c2,
    x: l2,
    y: a2
  };
}
function Vt$1(t2, e2, n2) {
  let o2;
  if (e2 === "viewport")
    o2 = ln(t2, n2);
  else if (e2 === "document")
    o2 = cn(Y$3(t2));
  else if (_$2(e2))
    o2 = fn(e2, n2);
  else {
    const r = Gt$1(t2);
    o2 = {
      x: e2.x - r.x,
      y: e2.y - r.y,
      width: e2.width,
      height: e2.height
    };
  }
  return ut(o2);
}
function Qt$1(t2, e2) {
  const n2 = K$2(t2);
  return n2 === e2 || !_$2(n2) || Q$1(n2) ? false : B$4(n2).position === "fixed" || Qt$1(n2, e2);
}
function un(t2, e2) {
  const n2 = e2.get(t2);
  if (n2)
    return n2;
  let o2 = rt$1(t2, [], false).filter((c2) => _$2(c2) && et$1(c2) !== "body"), r = null;
  const i2 = B$4(t2).position === "fixed";
  let s2 = i2 ? K$2(t2) : t2;
  for (; _$2(s2) && !Q$1(s2); ) {
    const c2 = B$4(s2), l2 = Ot$1(s2);
    !l2 && c2.position === "fixed" && (r = null), (i2 ? !l2 && !r : !l2 && c2.position === "static" && !!r && an.has(r.position) || it(s2) && !l2 && Qt$1(t2, s2)) ? o2 = o2.filter((f2) => f2 !== s2) : r = c2, s2 = K$2(s2);
  }
  return e2.set(t2, o2), o2;
}
function dn(t2) {
  let {
    element: e2,
    boundary: n2,
    rootBoundary: o2,
    strategy: r
  } = t2;
  const s2 = [...n2 === "clippingAncestors" ? pt(e2) ? [] : un(e2, this._c) : [].concat(n2), o2], c2 = s2[0], l2 = s2.reduce((a2, f2) => {
    const u2 = Vt$1(e2, f2, r);
    return a2.top = W(u2.top, a2.top), a2.right = Z$1(u2.right, a2.right), a2.bottom = Z$1(u2.bottom, a2.bottom), a2.left = W(u2.left, a2.left), a2;
  }, Vt$1(e2, c2, r));
  return {
    width: l2.right - l2.left,
    height: l2.bottom - l2.top,
    x: l2.left,
    y: l2.top
  };
}
function mn(t2) {
  const {
    width: e2,
    height: n2
  } = Kt$1(t2);
  return {
    width: e2,
    height: n2
  };
}
function pn(t2, e2, n2) {
  const o2 = X$3(e2), r = Y$3(e2), i2 = n2 === "fixed", s2 = G$1(t2, true, i2, e2);
  let c2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l2 = I$3(0);
  function a2() {
    l2.x = gt(r);
  }
  if (o2 || !o2 && !i2)
    if ((et$1(e2) !== "body" || it(r)) && (c2 = ht(e2)), o2) {
      const d2 = G$1(e2, true, i2, e2);
      l2.x = d2.x + e2.clientLeft, l2.y = d2.y + e2.clientTop;
    } else r && a2();
  i2 && !o2 && r && a2();
  const f2 = r && !o2 && !i2 ? Jt$1(r, c2) : I$3(0), u2 = s2.left + c2.scrollLeft - l2.x - f2.x, p2 = s2.top + c2.scrollTop - l2.y - f2.y;
  return {
    x: u2,
    y: p2,
    width: s2.width,
    height: s2.height
  };
}
function wt(t2) {
  return B$4(t2).position === "static";
}
function zt$1(t2, e2) {
  if (!X$3(t2) || B$4(t2).position === "fixed")
    return null;
  if (e2)
    return e2(t2);
  let n2 = t2.offsetParent;
  return Y$3(t2) === n2 && (n2 = n2.ownerDocument.body), n2;
}
function te$3(t2, e2) {
  const n2 = H$3(t2);
  if (pt(t2))
    return n2;
  if (!X$3(t2)) {
    let r = K$2(t2);
    for (; r && !Q$1(r); ) {
      if (_$2(r) && !wt(r))
        return r;
      r = K$2(r);
    }
    return n2;
  }
  let o2 = zt$1(t2, e2);
  for (; o2 && Ze$1(o2) && wt(o2); )
    o2 = zt$1(o2, e2);
  return o2 && Q$1(o2) && wt(o2) && !Ot$1(o2) ? n2 : o2 || tn(t2) || n2;
}
const hn = async function(t2) {
  const e2 = this.getOffsetParent || te$3, n2 = this.getDimensions, o2 = await n2(t2.floating);
  return {
    reference: pn(t2.reference, await e2(t2.floating), t2.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o2.width,
      height: o2.height
    }
  };
};
function gn(t2) {
  return B$4(t2).direction === "rtl";
}
const wn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rn,
  getDocumentElement: Y$3,
  getClippingRect: dn,
  getOffsetParent: te$3,
  getElementRects: hn,
  getClientRects: sn,
  getDimensions: mn,
  getScale: J$1,
  isElement: _$2,
  isRTL: gn
};
function ee$4(t2, e2) {
  return t2.x === e2.x && t2.y === e2.y && t2.width === e2.width && t2.height === e2.height;
}
function xn(t2, e2) {
  let n2 = null, o2;
  const r = Y$3(t2);
  function i2() {
    var c2;
    clearTimeout(o2), (c2 = n2) == null || c2.disconnect(), n2 = null;
  }
  function s2(c2, l2) {
    c2 === void 0 && (c2 = false), l2 === void 0 && (l2 = 1), i2();
    const a2 = t2.getBoundingClientRect(), {
      left: f2,
      top: u2,
      width: p2,
      height: d2
    } = a2;
    if (c2 || e2(), !p2 || !d2)
      return;
    const m2 = ct(u2), h2 = ct(r.clientWidth - (f2 + p2)), w2 = ct(r.clientHeight - (u2 + d2)), g2 = ct(f2), b2 = {
      rootMargin: -m2 + "px " + -h2 + "px " + -w2 + "px " + -g2 + "px",
      threshold: W(0, Z$1(1, l2)) || 1
    };
    let y2 = true;
    function v2(P2) {
      const C2 = P2[0].intersectionRatio;
      if (C2 !== l2) {
        if (!y2)
          return s2();
        C2 ? s2(false, C2) : o2 = setTimeout(() => {
          s2(false, 1e-7);
        }, 1e3);
      }
      C2 === 1 && !ee$4(a2, t2.getBoundingClientRect()) && s2(), y2 = false;
    }
    try {
      n2 = new IntersectionObserver(v2, {
        ...b2,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n2 = new IntersectionObserver(v2, b2);
    }
    n2.observe(t2);
  }
  return s2(true), i2;
}
function yn(t2, e2, n2, o2) {
  o2 === void 0 && (o2 = {});
  const {
    ancestorScroll: r = true,
    ancestorResize: i2 = true,
    elementResize: s2 = typeof ResizeObserver == "function",
    layoutShift: c2 = typeof IntersectionObserver == "function",
    animationFrame: l2 = false
  } = o2, a2 = Et$1(t2), f2 = r || i2 ? [...a2 ? rt$1(a2) : [], ...rt$1(e2)] : [];
  f2.forEach((g2) => {
    r && g2.addEventListener("scroll", n2, {
      passive: true
    }), i2 && g2.addEventListener("resize", n2);
  });
  const u2 = a2 && c2 ? xn(a2, n2) : null;
  let p2 = -1, d2 = null;
  s2 && (d2 = new ResizeObserver((g2) => {
    let [x2] = g2;
    x2 && x2.target === a2 && d2 && (d2.unobserve(e2), cancelAnimationFrame(p2), p2 = requestAnimationFrame(() => {
      var b2;
      (b2 = d2) == null || b2.observe(e2);
    })), n2();
  }), a2 && !l2 && d2.observe(a2), d2.observe(e2));
  let m2, h2 = l2 ? G$1(t2) : null;
  l2 && w2();
  function w2() {
    const g2 = G$1(t2);
    h2 && !ee$4(h2, g2) && n2(), h2 = g2, m2 = requestAnimationFrame(w2);
  }
  return n2(), () => {
    var g2;
    f2.forEach((x2) => {
      r && x2.removeEventListener("scroll", n2), i2 && x2.removeEventListener("resize", n2);
    }), u2 == null ? void 0 : u2(), (g2 = d2) == null || g2.disconnect(), d2 = null, l2 && cancelAnimationFrame(m2);
  };
}
const vn = Ie$2, bn = Xe$1, An = Be$2, Rn = je$1, Cn = Ve$1, It = _e$1, Pn = Ye$1, On = (t2, e2, n2) => {
  const o2 = /* @__PURE__ */ new Map(), r = {
    platform: wn,
    ...n2
  }, i2 = {
    ...r.platform,
    _c: o2
  };
  return He$1(t2, e2, {
    ...r,
    platform: i2
  });
};
var Sn = typeof document < "u", En = function() {
}, lt = Sn ? reactExports.useLayoutEffect : En;
function dt(t2, e2) {
  if (t2 === e2)
    return true;
  if (typeof t2 != typeof e2)
    return false;
  if (typeof t2 == "function" && t2.toString() === e2.toString())
    return true;
  let n2, o2, r;
  if (t2 && e2 && typeof t2 == "object") {
    if (Array.isArray(t2)) {
      if (n2 = t2.length, n2 !== e2.length) return false;
      for (o2 = n2; o2-- !== 0; )
        if (!dt(t2[o2], e2[o2]))
          return false;
      return true;
    }
    if (r = Object.keys(t2), n2 = r.length, n2 !== Object.keys(e2).length)
      return false;
    for (o2 = n2; o2-- !== 0; )
      if (!{}.hasOwnProperty.call(e2, r[o2]))
        return false;
    for (o2 = n2; o2-- !== 0; ) {
      const i2 = r[o2];
      if (!(i2 === "_owner" && t2.$$typeof) && !dt(t2[i2], e2[i2]))
        return false;
    }
    return true;
  }
  return t2 !== t2 && e2 !== e2;
}
function ne$2(t2) {
  return typeof window > "u" ? 1 : (t2.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xt$1(t2, e2) {
  const n2 = ne$2(t2);
  return Math.round(e2 * n2) / n2;
}
function xt(t2) {
  const e2 = reactExports.useRef(t2);
  return lt(() => {
    e2.current = t2;
  }), e2;
}
function Ln(t2) {
  t2 === void 0 && (t2 = {});
  const {
    placement: e2 = "bottom",
    strategy: n2 = "absolute",
    middleware: o2 = [],
    platform: r,
    elements: {
      reference: i2,
      floating: s2
    } = {},
    transform: c2 = true,
    whileElementsMounted: l2,
    open: a2
  } = t2, [f2, u2] = reactExports.useState({
    x: 0,
    y: 0,
    strategy: n2,
    placement: e2,
    middlewareData: {},
    isPositioned: false
  }), [p2, d2] = reactExports.useState(o2);
  dt(p2, o2) || d2(o2);
  const [m2, h2] = reactExports.useState(null), [w2, g2] = reactExports.useState(null), x2 = reactExports.useCallback((A2) => {
    A2 !== P2.current && (P2.current = A2, h2(A2));
  }, []), b2 = reactExports.useCallback((A2) => {
    A2 !== C2.current && (C2.current = A2, g2(A2));
  }, []), y2 = i2 || m2, v2 = s2 || w2, P2 = reactExports.useRef(null), C2 = reactExports.useRef(null), M2 = reactExports.useRef(f2), F2 = l2 != null, D2 = xt(l2), $2 = xt(r), k2 = xt(a2), S2 = reactExports.useCallback(() => {
    if (!P2.current || !C2.current)
      return;
    const A2 = {
      placement: e2,
      strategy: n2,
      middleware: p2
    };
    $2.current && (A2.platform = $2.current), On(P2.current, C2.current, A2).then((T2) => {
      const V2 = {
        ...T2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k2.current !== false
      };
      O2.current && !dt(M2.current, V2) && (M2.current = V2, reactDomExports.flushSync(() => {
        u2(V2);
      }));
    });
  }, [p2, e2, n2, $2, k2]);
  lt(() => {
    a2 === false && M2.current.isPositioned && (M2.current.isPositioned = false, u2((A2) => ({
      ...A2,
      isPositioned: false
    })));
  }, [a2]);
  const O2 = reactExports.useRef(false);
  lt(() => (O2.current = true, () => {
    O2.current = false;
  }), []), lt(() => {
    if (y2 && (P2.current = y2), v2 && (C2.current = v2), y2 && v2) {
      if (D2.current)
        return D2.current(y2, v2, S2);
      S2();
    }
  }, [y2, v2, S2, D2, F2]);
  const N2 = reactExports.useMemo(() => ({
    reference: P2,
    floating: C2,
    setReference: x2,
    setFloating: b2
  }), [x2, b2]), E2 = reactExports.useMemo(() => ({
    reference: y2,
    floating: v2
  }), [y2, v2]), L2 = reactExports.useMemo(() => {
    const A2 = {
      position: n2,
      left: 0,
      top: 0
    };
    if (!E2.floating)
      return A2;
    const T2 = Xt$1(E2.floating, f2.x), V2 = Xt$1(E2.floating, f2.y);
    return c2 ? {
      ...A2,
      transform: "translate(" + T2 + "px, " + V2 + "px)",
      ...ne$2(E2.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n2,
      left: T2,
      top: V2
    };
  }, [n2, c2, E2.floating, f2.x, f2.y]);
  return reactExports.useMemo(() => ({
    ...f2,
    update: S2,
    refs: N2,
    elements: E2,
    floatingStyles: L2
  }), [f2, S2, N2, E2, L2]);
}
const Dn = (t2) => {
  function e2(n2) {
    return {}.hasOwnProperty.call(n2, "current");
  }
  return {
    name: "arrow",
    options: t2,
    fn(n2) {
      const {
        element: o2,
        padding: r
      } = typeof t2 == "function" ? t2(n2) : t2;
      return o2 && e2(o2) ? o2.current != null ? It({
        element: o2.current,
        padding: r
      }).fn(n2) : {} : o2 ? It({
        element: o2,
        padding: r
      }).fn(n2) : {};
    }
  };
}, Mn = (t2, e2) => ({
  ...vn(t2),
  options: [t2, e2]
}), Tn = (t2, e2) => ({
  ...bn(t2),
  options: [t2, e2]
}), $n = (t2, e2) => ({
  ...Pn(t2),
  options: [t2, e2]
}), kn = (t2, e2) => ({
  ...An(t2),
  options: [t2, e2]
}), Fn = (t2, e2) => ({
  ...Rn(t2),
  options: [t2, e2]
}), Nn = (t2, e2) => ({
  ...Cn(t2),
  options: [t2, e2]
}), Wn = (t2, e2) => ({
  ...Dn(t2),
  options: [t2, e2]
});
var Hn = "Arrow", oe$2 = reactExports.forwardRef((t2, e2) => {
  const { children: n2, width: o2 = 10, height: r = 5, ...i2 } = t2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    h$3.svg,
    {
      ...i2,
      ref: e2,
      width: o2,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t2.asChild ? n2 : /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
oe$2.displayName = Hn;
var _n = oe$2, Lt$1 = "Popper", [re$1, to] = w$1(Lt$1), [Bn, ie$1] = re$1(Lt$1), se$1 = (t2) => {
  const { __scopePopper: e2, children: n2 } = t2, [o2, r] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Bn, { scope: e2, anchor: o2, onAnchorChange: r, children: n2 });
};
se$1.displayName = Lt$1;
var ce$2 = "PopperAnchor", le$2 = reactExports.forwardRef(
  (t2, e2) => {
    const { __scopePopper: n2, virtualRef: o2, ...r } = t2, i2 = ie$1(ce$2, n2), s2 = reactExports.useRef(null), c2 = x$5(e2, s2), l2 = reactExports.useRef(null);
    return reactExports.useEffect(() => {
      const a2 = l2.current;
      l2.current = (o2 == null ? void 0 : o2.current) || s2.current, a2 !== l2.current && i2.onAnchorChange(l2.current);
    }), o2 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { ...r, ref: c2 });
  }
);
le$2.displayName = ce$2;
var Dt$1 = "PopperContent", [Vn, zn] = re$1(Dt$1), ae$2 = reactExports.forwardRef(
  (t2, e2) => {
    var _a, _b, _c, _d, _e2, _f;
    const {
      __scopePopper: n2,
      side: o2 = "bottom",
      sideOffset: r = 0,
      align: i2 = "center",
      alignOffset: s2 = 0,
      arrowPadding: c2 = 0,
      avoidCollisions: l2 = true,
      collisionBoundary: a$1 = [],
      collisionPadding: f2 = 0,
      sticky: u2 = "partial",
      hideWhenDetached: p2 = false,
      updatePositionStrategy: d2 = "optimized",
      onPlaced: m2,
      ...h2
    } = t2, w2 = ie$1(Dt$1, n2), [g2, x2] = reactExports.useState(null), b2 = x$5(e2, (nt2) => x2(nt2)), [y2, v2] = reactExports.useState(null), P2 = n$2(y2), C2 = (P2 == null ? void 0 : P2.width) ?? 0, M2 = (P2 == null ? void 0 : P2.height) ?? 0, F2 = o2 + (i2 !== "center" ? "-" + i2 : ""), D2 = typeof f2 == "number" ? f2 : { top: 0, right: 0, bottom: 0, left: 0, ...f2 }, $2 = Array.isArray(a$1) ? a$1 : [a$1], k2 = $2.length > 0, S2 = {
      padding: D2,
      boundary: $2.filter(Xn),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k2
    }, { refs: O2, floatingStyles: N2, placement: E2, isPositioned: L2, middlewareData: A2 } = Ln({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F2,
      whileElementsMounted: (...nt2) => yn(...nt2, {
        animationFrame: d2 === "always"
      }),
      elements: {
        reference: w2.anchor
      },
      middleware: [
        Mn({ mainAxis: r + M2, alignmentAxis: s2 }),
        l2 && Tn({
          mainAxis: true,
          crossAxis: false,
          limiter: u2 === "partial" ? $n() : void 0,
          ...S2
        }),
        l2 && kn({ ...S2 }),
        Fn({
          ...S2,
          apply: ({ elements: nt2, rects: Tt, availableWidth: xe2, availableHeight: ye2 }) => {
            const { width: ve2, height: be2 } = Tt.reference, st2 = nt2.floating.style;
            st2.setProperty("--radix-popper-available-width", `${xe2}px`), st2.setProperty("--radix-popper-available-height", `${ye2}px`), st2.setProperty("--radix-popper-anchor-width", `${ve2}px`), st2.setProperty("--radix-popper-anchor-height", `${be2}px`);
          }
        }),
        y2 && Wn({ element: y2, padding: c2 }),
        Yn({ arrowWidth: C2, arrowHeight: M2 }),
        p2 && Nn({ strategy: "referenceHidden", ...S2 })
      ]
    }), [T2, V2] = de$2(E2), Mt2 = c$2(m2);
    a(() => {
      L2 && (Mt2 == null ? void 0 : Mt2());
    }, [L2, Mt2]);
    const me2 = (_a = A2.arrow) == null ? void 0 : _a.x, pe2 = (_b = A2.arrow) == null ? void 0 : _b.y, he2 = ((_c = A2.arrow) == null ? void 0 : _c.centerOffset) !== 0, [ge2, we2] = reactExports.useState();
    return a(() => {
      g2 && we2(window.getComputedStyle(g2).zIndex);
    }, [g2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: O2.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...N2,
          transform: L2 ? N2.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge2,
          "--radix-popper-transform-origin": [
            (_d = A2.transformOrigin) == null ? void 0 : _d.x,
            (_e2 = A2.transformOrigin) == null ? void 0 : _e2.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_f = A2.hide) == null ? void 0 : _f.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t2.dir,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Vn,
          {
            scope: n2,
            placedSide: T2,
            onArrowChange: v2,
            arrowX: me2,
            arrowY: pe2,
            shouldHideArrow: he2,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              h$3.div,
              {
                "data-side": T2,
                "data-align": V2,
                ...h2,
                ref: b2,
                style: {
                  ...h2.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L2 ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ae$2.displayName = Dt$1;
var fe$1 = "PopperArrow", In = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ue$2 = reactExports.forwardRef(function(e2, n2) {
  const { __scopePopper: o2, ...r } = e2, i2 = zn(fe$1, o2), s2 = In[i2.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        ref: i2.onArrowChange,
        style: {
          position: "absolute",
          left: i2.arrowX,
          top: i2.arrowY,
          [s2]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i2.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i2.placedSide],
          visibility: i2.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          _n,
          {
            ...r,
            ref: n2,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ue$2.displayName = fe$1;
function Xn(t2) {
  return t2 !== null;
}
var Yn = (t2) => ({
  name: "transformOrigin",
  options: t2,
  fn(e2) {
    var _a, _b, _c;
    const { placement: n2, rects: o2, middlewareData: r } = e2, s2 = ((_a = r.arrow) == null ? void 0 : _a.centerOffset) !== 0, c2 = s2 ? 0 : t2.arrowWidth, l2 = s2 ? 0 : t2.arrowHeight, [a2, f2] = de$2(n2), u2 = { start: "0%", center: "50%", end: "100%" }[f2], p2 = (((_b = r.arrow) == null ? void 0 : _b.x) ?? 0) + c2 / 2, d2 = (((_c = r.arrow) == null ? void 0 : _c.y) ?? 0) + l2 / 2;
    let m2 = "", h2 = "";
    return a2 === "bottom" ? (m2 = s2 ? u2 : `${p2}px`, h2 = `${-l2}px`) : a2 === "top" ? (m2 = s2 ? u2 : `${p2}px`, h2 = `${o2.floating.height + l2}px`) : a2 === "right" ? (m2 = `${-l2}px`, h2 = s2 ? u2 : `${d2}px`) : a2 === "left" && (m2 = `${o2.floating.width + l2}px`, h2 = s2 ? u2 : `${d2}px`), { data: { x: m2, y: h2 } };
  }
});
function de$2(t2) {
  const [e2, n2 = "center"] = t2.split("-");
  return [e2, n2];
}
var eo = se$1, no$1 = le$2, oo$1 = ae$2, ro$1 = ue$2;
function t(r) {
  const e2 = reactExports.useRef({ value: r, previous: r });
  return reactExports.useMemo(() => (e2.current.value !== r && (e2.current.previous = e2.current.value, e2.current.value = r), e2.current.previous), [r]);
}
var d$1 = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), s$1 = "VisuallyHidden", e = reactExports.forwardRef(
  (r, a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    h$3.span,
    {
      ...r,
      ref: a2,
      style: { ...d$1, ...r.style }
    }
  )
);
e.displayName = s$1;
var n$1 = e;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o = C$5("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = C$5("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
var Nt = [" ", "Enter", "ArrowUp", "ArrowDown"], Rt = [" ", "Enter"], ee$3 = "Select", [de$1, ue$1, _t] = b$2(ee$3), [ne$1, Eo] = w$1(ee$3, [
  _t,
  to
]), pe$2 = to(), [Et, Y$2] = ne$1(ee$3), [Mt, At] = ne$1(ee$3), Ae = (t2) => {
  const {
    __scopeSelect: o2,
    children: e2,
    open: c2,
    defaultOpen: l2,
    onOpenChange: u2,
    value: r,
    defaultValue: a2,
    onValueChange: i2,
    dir: f2,
    name: g2,
    autoComplete: x2,
    disabled: N2,
    required: b2,
    form: y2
  } = t2, d2 = pe$2(o2), [h2, S2] = reactExports.useState(null), [m2, v2] = reactExports.useState(null), [W2, A2] = reactExports.useState(false), re2 = j$3(f2), [R2, D2] = S$1({
    prop: c2,
    defaultProp: l2 ?? false,
    onChange: u2,
    caller: ee$3
  }), [z2, X2] = S$1({
    prop: r,
    defaultProp: a2,
    onChange: i2,
    caller: ee$3
  }), B2 = reactExports.useRef(null), V2 = h2 ? y2 || !!h2.closest("form") : true, [K2, H2] = reactExports.useState(/* @__PURE__ */ new Set()), U2 = Array.from(K2).map((_2) => _2.props.value).join(";");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(eo, { ...d2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Et,
    {
      required: b2,
      scope: o2,
      trigger: h2,
      onTriggerChange: S2,
      valueNode: m2,
      onValueNodeChange: v2,
      valueNodeHasChildren: W2,
      onValueNodeHasChildrenChange: A2,
      contentId: c$1(),
      value: z2,
      onValueChange: X2,
      open: R2,
      onOpenChange: D2,
      dir: re2,
      triggerPointerDownPosRef: B2,
      disabled: N2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(de$1.Provider, { scope: o2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Mt,
          {
            scope: t2.__scopeSelect,
            onNativeOptionAdd: reactExports.useCallback((_2) => {
              H2((L2) => new Set(L2).add(_2));
            }, []),
            onNativeOptionRemove: reactExports.useCallback((_2) => {
              H2((L2) => {
                const F2 = new Set(L2);
                return F2.delete(_2), F2;
              });
            }, []),
            children: e2
          }
        ) }),
        V2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          nt,
          {
            "aria-hidden": true,
            required: b2,
            tabIndex: -1,
            name: g2,
            autoComplete: x2,
            value: z2,
            onChange: (_2) => X2(_2.target.value),
            disabled: N2,
            form: y2,
            children: [
              z2 === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "" }) : null,
              Array.from(K2)
            ]
          },
          U2
        ) : null
      ]
    }
  ) });
};
Ae.displayName = ee$3;
var Oe$1 = "SelectTrigger", De$1 = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, disabled: c2 = false, ...l2 } = t2, u2 = pe$2(e2), r = Y$2(Oe$1, e2), a2 = r.disabled || c2, i2 = x$5(o2, r.onTriggerChange), f2 = ue$1(e2), g2 = reactExports.useRef("touch"), [x2, N2, b2] = st((d2) => {
      const h2 = f2().filter((v2) => !v2.disabled), S2 = h2.find((v2) => v2.value === r.value), m2 = at(h2, d2, S2);
      m2 !== void 0 && r.onValueChange(m2.value);
    }), y2 = (d2) => {
      a2 || (r.onOpenChange(true), b2()), d2 && (r.triggerPointerDownPosRef.current = {
        x: Math.round(d2.pageX),
        y: Math.round(d2.pageY)
      });
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(no$1, { asChild: true, ...u2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": r.contentId,
        "aria-expanded": r.open,
        "aria-required": r.required,
        "aria-autocomplete": "none",
        dir: r.dir,
        "data-state": r.open ? "open" : "closed",
        disabled: a2,
        "data-disabled": a2 ? "" : void 0,
        "data-placeholder": rt(r.value) ? "" : void 0,
        ...l2,
        ref: i2,
        onClick: w$2(l2.onClick, (d2) => {
          d2.currentTarget.focus(), g2.current !== "mouse" && y2(d2);
        }),
        onPointerDown: w$2(l2.onPointerDown, (d2) => {
          g2.current = d2.pointerType;
          const h2 = d2.target;
          h2.hasPointerCapture(d2.pointerId) && h2.releasePointerCapture(d2.pointerId), d2.button === 0 && d2.ctrlKey === false && d2.pointerType === "mouse" && (y2(d2), d2.preventDefault());
        }),
        onKeyDown: w$2(l2.onKeyDown, (d2) => {
          const h2 = x2.current !== "";
          !(d2.ctrlKey || d2.altKey || d2.metaKey) && d2.key.length === 1 && N2(d2.key), !(h2 && d2.key === " ") && Nt.includes(d2.key) && (y2(), d2.preventDefault());
        })
      }
    ) });
  }
);
De$1.displayName = Oe$1;
var Le$1 = "SelectValue", ke = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, className: c2, style: l2, children: u2, placeholder: r = "", ...a$1 } = t2, i2 = Y$2(Le$1, e2), { onValueNodeHasChildrenChange: f2 } = i2, g2 = u2 !== void 0, x2 = x$5(o2, i2.onValueNodeChange);
    return a(() => {
      f2(g2);
    }, [f2, g2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.span,
      {
        ...a$1,
        ref: x2,
        style: { pointerEvents: "none" },
        children: rt(i2.value) ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: r }) : u2
      }
    );
  }
);
ke.displayName = Le$1;
var Ot = "SelectIcon", Be$1 = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, children: c2, ...l2 } = t2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.span, { "aria-hidden": true, ...l2, ref: o2, children: c2 || "▼" });
  }
);
Be$1.displayName = Ot;
var Dt = "SelectPortal", Ve = (t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(V$3, { asChild: true, ...t2 });
Ve.displayName = Dt;
var te$2 = "SelectContent", He = reactExports.forwardRef(
  (t2, o2) => {
    const e2 = Y$2(te$2, t2.__scopeSelect), [c2, l2] = reactExports.useState();
    if (a(() => {
      l2(new DocumentFragment());
    }, []), !e2.open) {
      const u2 = c2;
      return u2 ? reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ue$1, { scope: t2.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx(de$1.Slot, { scope: t2.__scopeSelect, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t2.children }) }) }),
        u2
      ) : null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Fe$1, { ...t2, ref: o2 });
  }
);
He.displayName = te$2;
var O$2 = 10, [Ue$1, q$2] = ne$1(te$2), Lt = "SelectContentImpl", kt = /* @__PURE__ */ C$6("SelectContent.RemoveScroll"), Fe$1 = reactExports.forwardRef(
  (t2, o2) => {
    const {
      __scopeSelect: e2,
      position: c2 = "item-aligned",
      onCloseAutoFocus: l2,
      onEscapeKeyDown: u2,
      onPointerDownOutside: r,
      //
      // PopperContent props
      side: a2,
      sideOffset: i2,
      align: f2,
      alignOffset: g2,
      arrowPadding: x2,
      collisionBoundary: N2,
      collisionPadding: b2,
      sticky: y2,
      hideWhenDetached: d2,
      avoidCollisions: h2,
      //
      ...S2
    } = t2, m2 = Y$2(te$2, e2), [v2, W2] = reactExports.useState(null), [A2, re2] = reactExports.useState(null), R2 = x$5(o2, (p2) => W2(p2)), [D2, z2] = reactExports.useState(null), [X2, B2] = reactExports.useState(
      null
    ), V2 = ue$1(e2), [K2, H2] = reactExports.useState(false), U2 = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (v2) return yt$1(v2);
    }, [v2]), gt$1();
    const _2 = reactExports.useCallback(
      (p2) => {
        const [I2, ...E2] = V2().map((T2) => T2.ref.current), [w2] = E2.slice(-1), C2 = document.activeElement;
        for (const T2 of p2)
          if (T2 === C2 || (T2 == null ? void 0 : T2.scrollIntoView({ block: "nearest" }), T2 === I2 && A2 && (A2.scrollTop = 0), T2 === w2 && A2 && (A2.scrollTop = A2.scrollHeight), T2 == null ? void 0 : T2.focus(), document.activeElement !== C2)) return;
      },
      [V2, A2]
    ), L2 = reactExports.useCallback(
      () => _2([D2, v2]),
      [_2, D2, v2]
    );
    reactExports.useEffect(() => {
      K2 && L2();
    }, [K2, L2]);
    const { onOpenChange: F2, triggerPointerDownPosRef: $2 } = m2;
    reactExports.useEffect(() => {
      if (v2) {
        let p2 = { x: 0, y: 0 };
        const I2 = (w2) => {
          var _a, _b;
          p2 = {
            x: Math.abs(Math.round(w2.pageX) - (((_a = $2.current) == null ? void 0 : _a.x) ?? 0)),
            y: Math.abs(Math.round(w2.pageY) - (((_b = $2.current) == null ? void 0 : _b.y) ?? 0))
          };
        }, E2 = (w2) => {
          p2.x <= 10 && p2.y <= 10 ? w2.preventDefault() : v2.contains(w2.target) || F2(false), document.removeEventListener("pointermove", I2), $2.current = null;
        };
        return $2.current !== null && (document.addEventListener("pointermove", I2), document.addEventListener("pointerup", E2, { capture: true, once: true })), () => {
          document.removeEventListener("pointermove", I2), document.removeEventListener("pointerup", E2, { capture: true });
        };
      }
    }, [v2, F2, $2]), reactExports.useEffect(() => {
      const p2 = () => F2(false);
      return window.addEventListener("blur", p2), window.addEventListener("resize", p2), () => {
        window.removeEventListener("blur", p2), window.removeEventListener("resize", p2);
      };
    }, [F2]);
    const [fe2, le2] = st((p2) => {
      const I2 = V2().filter((C2) => !C2.disabled), E2 = I2.find((C2) => C2.ref.current === document.activeElement), w2 = at(I2, p2, E2);
      w2 && setTimeout(() => w2.ref.current.focus());
    }), me2 = reactExports.useCallback(
      (p2, I2, E2) => {
        const w2 = !U2.current && !E2;
        (m2.value !== void 0 && m2.value === I2 || w2) && (z2(p2), w2 && (U2.current = true));
      },
      [m2.value]
    ), he2 = reactExports.useCallback(() => v2 == null ? void 0 : v2.focus(), [v2]), oe2 = reactExports.useCallback(
      (p2, I2, E2) => {
        const w2 = !U2.current && !E2;
        (m2.value !== void 0 && m2.value === I2 || w2) && B2(p2);
      },
      [m2.value]
    ), ce2 = c2 === "popper" ? we$1 : We, se2 = ce2 === we$1 ? {
      side: a2,
      sideOffset: i2,
      align: f2,
      alignOffset: g2,
      arrowPadding: x2,
      collisionBoundary: N2,
      collisionPadding: b2,
      sticky: y2,
      hideWhenDetached: d2,
      avoidCollisions: h2
    } : {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue$1,
      {
        scope: e2,
        content: v2,
        viewport: A2,
        onViewportChange: re2,
        itemRefCallback: me2,
        selectedItem: D2,
        onItemLeave: he2,
        itemTextRefCallback: oe2,
        focusSelectedItem: L2,
        selectedItemText: X2,
        position: c2,
        isPositioned: K2,
        searchRef: fe2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ft$1, { as: kt, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          be$3,
          {
            asChild: true,
            trapped: m2.open,
            onMountAutoFocus: (p2) => {
              p2.preventDefault();
            },
            onUnmountAutoFocus: w$2(l2, (p2) => {
              var _a;
              (_a = m2.trigger) == null ? void 0 : _a.focus({ preventScroll: true }), p2.preventDefault();
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              X$5,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown: u2,
                onPointerDownOutside: r,
                onFocusOutside: (p2) => p2.preventDefault(),
                onDismiss: () => m2.onOpenChange(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ce2,
                  {
                    role: "listbox",
                    id: m2.contentId,
                    "data-state": m2.open ? "open" : "closed",
                    dir: m2.dir,
                    onContextMenu: (p2) => p2.preventDefault(),
                    ...S2,
                    ...se2,
                    onPlaced: () => H2(true),
                    ref: R2,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S2.style
                    },
                    onKeyDown: w$2(S2.onKeyDown, (p2) => {
                      const I2 = p2.ctrlKey || p2.altKey || p2.metaKey;
                      if (p2.key === "Tab" && p2.preventDefault(), !I2 && p2.key.length === 1 && le2(p2.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p2.key)) {
                        let w2 = V2().filter((C2) => !C2.disabled).map((C2) => C2.ref.current);
                        if (["ArrowUp", "End"].includes(p2.key) && (w2 = w2.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p2.key)) {
                          const C2 = p2.target, T2 = w2.indexOf(C2);
                          w2 = w2.slice(T2 + 1);
                        }
                        setTimeout(() => _2(w2)), p2.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Fe$1.displayName = Lt;
var Bt = "SelectItemAlignedPosition", We = reactExports.forwardRef((t2, o2) => {
  const { __scopeSelect: e2, onPlaced: c2, ...l2 } = t2, u2 = Y$2(te$2, e2), r = q$2(te$2, e2), [a$1, i2] = reactExports.useState(null), [f2, g2] = reactExports.useState(null), x2 = x$5(o2, (R2) => g2(R2)), N2 = ue$1(e2), b2 = reactExports.useRef(false), y2 = reactExports.useRef(true), { viewport: d2, selectedItem: h2, selectedItemText: S2, focusSelectedItem: m2 } = r, v2 = reactExports.useCallback(() => {
    if (u2.trigger && u2.valueNode && a$1 && f2 && d2 && h2 && S2) {
      const R2 = u2.trigger.getBoundingClientRect(), D2 = f2.getBoundingClientRect(), z2 = u2.valueNode.getBoundingClientRect(), X2 = S2.getBoundingClientRect();
      if (u2.dir !== "rtl") {
        const C2 = X2.left - D2.left, T2 = z2.left - C2, Z2 = R2.left - T2, J2 = R2.width + Z2, ve2 = Math.max(J2, D2.width), ge2 = window.innerWidth - O$2, Se2 = c$3(T2, [
          O$2,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(O$2, ge2 - ve2)
        ]);
        a$1.style.minWidth = J2 + "px", a$1.style.left = Se2 + "px";
      } else {
        const C2 = D2.right - X2.right, T2 = window.innerWidth - z2.right - C2, Z2 = window.innerWidth - R2.right - T2, J2 = R2.width + Z2, ve2 = Math.max(J2, D2.width), ge2 = window.innerWidth - O$2, Se2 = c$3(T2, [
          O$2,
          Math.max(O$2, ge2 - ve2)
        ]);
        a$1.style.minWidth = J2 + "px", a$1.style.right = Se2 + "px";
      }
      const B2 = N2(), V2 = window.innerHeight - O$2 * 2, K2 = d2.scrollHeight, H2 = window.getComputedStyle(f2), U2 = parseInt(H2.borderTopWidth, 10), _2 = parseInt(H2.paddingTop, 10), L2 = parseInt(H2.borderBottomWidth, 10), F2 = parseInt(H2.paddingBottom, 10), $2 = U2 + _2 + K2 + F2 + L2, fe2 = Math.min(h2.offsetHeight * 5, $2), le2 = window.getComputedStyle(d2), me2 = parseInt(le2.paddingTop, 10), he2 = parseInt(le2.paddingBottom, 10), oe2 = R2.top + R2.height / 2 - O$2, ce2 = V2 - oe2, se2 = h2.offsetHeight / 2, p2 = h2.offsetTop + se2, I2 = U2 + _2 + p2, E2 = $2 - I2;
      if (I2 <= oe2) {
        const C2 = B2.length > 0 && h2 === B2[B2.length - 1].ref.current;
        a$1.style.bottom = "0px";
        const T2 = f2.clientHeight - d2.offsetTop - d2.offsetHeight, Z2 = Math.max(
          ce2,
          se2 + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (C2 ? he2 : 0) + T2 + L2
        ), J2 = I2 + Z2;
        a$1.style.height = J2 + "px";
      } else {
        const C2 = B2.length > 0 && h2 === B2[0].ref.current;
        a$1.style.top = "0px";
        const Z2 = Math.max(
          oe2,
          U2 + d2.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (C2 ? me2 : 0) + se2
        ) + E2;
        a$1.style.height = Z2 + "px", d2.scrollTop = I2 - oe2 + d2.offsetTop;
      }
      a$1.style.margin = `${O$2}px 0`, a$1.style.minHeight = fe2 + "px", a$1.style.maxHeight = V2 + "px", c2 == null ? void 0 : c2(), requestAnimationFrame(() => b2.current = true);
    }
  }, [
    N2,
    u2.trigger,
    u2.valueNode,
    a$1,
    f2,
    d2,
    h2,
    S2,
    u2.dir,
    c2
  ]);
  a(() => v2(), [v2]);
  const [W2, A2] = reactExports.useState();
  a(() => {
    f2 && A2(window.getComputedStyle(f2).zIndex);
  }, [f2]);
  const re2 = reactExports.useCallback(
    (R2) => {
      R2 && y2.current === true && (v2(), m2 == null ? void 0 : m2(), y2.current = false);
    },
    [v2, m2]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ht,
    {
      scope: e2,
      contentWrapper: a$1,
      shouldExpandOnScrollRef: b2,
      onScrollButtonChange: re2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: i2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: W2
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            h$3.div,
            {
              ...l2,
              ref: x2,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...l2.style
              }
            }
          )
        }
      )
    }
  );
});
We.displayName = Bt;
var Vt = "SelectPopperPosition", we$1 = reactExports.forwardRef((t2, o2) => {
  const {
    __scopeSelect: e2,
    align: c2 = "start",
    collisionPadding: l2 = O$2,
    ...u2
  } = t2, r = pe$2(e2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    oo$1,
    {
      ...r,
      ...u2,
      ref: o2,
      align: c2,
      collisionPadding: l2,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...u2.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
we$1.displayName = Vt;
var [Ht, Pe$1] = ne$1(te$2, {}), xe$1 = "SelectViewport", ze = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, nonce: c2, ...l2 } = t2, u2 = q$2(xe$1, e2), r = Pe$1(xe$1, e2), a2 = x$5(o2, u2.onViewportChange), i2 = reactExports.useRef(0);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: c2
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(de$1.Slot, { scope: e2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        h$3.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...l2,
          ref: a2,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...l2.style
          },
          onScroll: w$2(l2.onScroll, (f2) => {
            const g2 = f2.currentTarget, { contentWrapper: x2, shouldExpandOnScrollRef: N2 } = r;
            if ((N2 == null ? void 0 : N2.current) && x2) {
              const b2 = Math.abs(i2.current - g2.scrollTop);
              if (b2 > 0) {
                const y2 = window.innerHeight - O$2 * 2, d2 = parseFloat(x2.style.minHeight), h2 = parseFloat(x2.style.height), S2 = Math.max(d2, h2);
                if (S2 < y2) {
                  const m2 = S2 + b2, v2 = Math.min(y2, m2), W2 = m2 - v2;
                  x2.style.height = v2 + "px", x2.style.bottom === "0px" && (g2.scrollTop = W2 > 0 ? W2 : 0, x2.style.justifyContent = "flex-end");
                }
              }
            }
            i2.current = g2.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ze.displayName = xe$1;
var Ke = "SelectGroup", [Ut, Ft] = ne$1(Ke), $e$1 = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, ...c2 } = t2, l2 = c$1();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ut, { scope: e2, id: l2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { role: "group", "aria-labelledby": l2, ...c2, ref: o2 }) });
  }
);
$e$1.displayName = Ke;
var Ge = "SelectLabel", je = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, ...c2 } = t2, l2 = Ft(Ge, e2);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { id: l2.id, ...c2, ref: o2 });
  }
);
je.displayName = Ge;
var ie = "SelectItem", [Wt, Ye] = ne$1(ie), qe = reactExports.forwardRef(
  (t2, o2) => {
    const {
      __scopeSelect: e2,
      value: c2,
      disabled: l2 = false,
      textValue: u2,
      ...r
    } = t2, a2 = Y$2(ie, e2), i2 = q$2(ie, e2), f2 = a2.value === c2, [g2, x2] = reactExports.useState(u2 ?? ""), [N2, b2] = reactExports.useState(false), y2 = x$5(
      o2,
      (m2) => {
        var _a;
        return (_a = i2.itemRefCallback) == null ? void 0 : _a.call(i2, m2, c2, l2);
      }
    ), d2 = c$1(), h2 = reactExports.useRef("touch"), S2 = () => {
      l2 || (a2.onValueChange(c2), a2.onOpenChange(false));
    };
    if (c2 === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Wt,
      {
        scope: e2,
        value: c2,
        disabled: l2,
        textId: d2,
        isSelected: f2,
        onItemTextChange: reactExports.useCallback((m2) => {
          x2((v2) => v2 || ((m2 == null ? void 0 : m2.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          de$1.ItemSlot,
          {
            scope: e2,
            value: c2,
            disabled: l2,
            textValue: g2,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              h$3.div,
              {
                role: "option",
                "aria-labelledby": d2,
                "data-highlighted": N2 ? "" : void 0,
                "aria-selected": f2 && N2,
                "data-state": f2 ? "checked" : "unchecked",
                "aria-disabled": l2 || void 0,
                "data-disabled": l2 ? "" : void 0,
                tabIndex: l2 ? void 0 : -1,
                ...r,
                ref: y2,
                onFocus: w$2(r.onFocus, () => b2(true)),
                onBlur: w$2(r.onBlur, () => b2(false)),
                onClick: w$2(r.onClick, () => {
                  h2.current !== "mouse" && S2();
                }),
                onPointerUp: w$2(r.onPointerUp, () => {
                  h2.current === "mouse" && S2();
                }),
                onPointerDown: w$2(r.onPointerDown, (m2) => {
                  h2.current = m2.pointerType;
                }),
                onPointerMove: w$2(r.onPointerMove, (m2) => {
                  var _a;
                  h2.current = m2.pointerType, l2 ? (_a = i2.onItemLeave) == null ? void 0 : _a.call(i2) : h2.current === "mouse" && m2.currentTarget.focus({ preventScroll: true });
                }),
                onPointerLeave: w$2(r.onPointerLeave, (m2) => {
                  var _a;
                  m2.currentTarget === document.activeElement && ((_a = i2.onItemLeave) == null ? void 0 : _a.call(i2));
                }),
                onKeyDown: w$2(r.onKeyDown, (m2) => {
                  var _a;
                  ((_a = i2.searchRef) == null ? void 0 : _a.current) !== "" && m2.key === " " || (Rt.includes(m2.key) && S2(), m2.key === " " && m2.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
qe.displayName = ie;
var ae$1 = "SelectItemText", Xe = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, className: c2, style: l2, ...u2 } = t2, r = Y$2(ae$1, e2), a$1 = q$2(ae$1, e2), i2 = Ye(ae$1, e2), f2 = At(ae$1, e2), [g2, x2] = reactExports.useState(null), N2 = x$5(
      o2,
      (S2) => x2(S2),
      i2.onItemTextChange,
      (S2) => {
        var _a;
        return (_a = a$1.itemTextRefCallback) == null ? void 0 : _a.call(a$1, S2, i2.value, i2.disabled);
      }
    ), b2 = g2 == null ? void 0 : g2.textContent, y2 = reactExports.useMemo(
      () => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i2.value, disabled: i2.disabled, children: b2 }, i2.value),
      [i2.disabled, i2.value, b2]
    ), { onNativeOptionAdd: d2, onNativeOptionRemove: h2 } = f2;
    return a(() => (d2(y2), () => h2(y2)), [d2, h2, y2]), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.span, { id: i2.textId, ...u2, ref: N2 }),
      i2.isSelected && r.valueNode && !r.valueNodeHasChildren ? reactDomExports.createPortal(u2.children, r.valueNode) : null
    ] });
  }
);
Xe.displayName = ae$1;
var Ze = "SelectItemIndicator", Je = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, ...c2 } = t2;
    return Ye(Ze, e2).isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.span, { "aria-hidden": true, ...c2, ref: o2 }) : null;
  }
);
Je.displayName = Ze;
var Ce$1 = "SelectScrollUpButton", Qe = reactExports.forwardRef((t2, o2) => {
  const e2 = q$2(Ce$1, t2.__scopeSelect), c2 = Pe$1(Ce$1, t2.__scopeSelect), [l2, u2] = reactExports.useState(false), r = x$5(o2, c2.onScrollButtonChange);
  return a(() => {
    if (e2.viewport && e2.isPositioned) {
      let a2 = function() {
        const f2 = i2.scrollTop > 0;
        u2(f2);
      };
      const i2 = e2.viewport;
      return a2(), i2.addEventListener("scroll", a2), () => i2.removeEventListener("scroll", a2);
    }
  }, [e2.viewport, e2.isPositioned]), l2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    tt,
    {
      ...t2,
      ref: r,
      onAutoScroll: () => {
        const { viewport: a2, selectedItem: i2 } = e2;
        a2 && i2 && (a2.scrollTop = a2.scrollTop - i2.offsetHeight);
      }
    }
  ) : null;
});
Qe.displayName = Ce$1;
var ye$1 = "SelectScrollDownButton", et = reactExports.forwardRef((t2, o2) => {
  const e2 = q$2(ye$1, t2.__scopeSelect), c2 = Pe$1(ye$1, t2.__scopeSelect), [l2, u2] = reactExports.useState(false), r = x$5(o2, c2.onScrollButtonChange);
  return a(() => {
    if (e2.viewport && e2.isPositioned) {
      let a2 = function() {
        const f2 = i2.scrollHeight - i2.clientHeight, g2 = Math.ceil(i2.scrollTop) < f2;
        u2(g2);
      };
      const i2 = e2.viewport;
      return a2(), i2.addEventListener("scroll", a2), () => i2.removeEventListener("scroll", a2);
    }
  }, [e2.viewport, e2.isPositioned]), l2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    tt,
    {
      ...t2,
      ref: r,
      onAutoScroll: () => {
        const { viewport: a2, selectedItem: i2 } = e2;
        a2 && i2 && (a2.scrollTop = a2.scrollTop + i2.offsetHeight);
      }
    }
  ) : null;
});
et.displayName = ye$1;
var tt = reactExports.forwardRef((t2, o2) => {
  const { __scopeSelect: e2, onAutoScroll: c2, ...l2 } = t2, u2 = q$2("SelectScrollButton", e2), r = reactExports.useRef(null), a$1 = ue$1(e2), i2 = reactExports.useCallback(() => {
    r.current !== null && (window.clearInterval(r.current), r.current = null);
  }, []);
  return reactExports.useEffect(() => () => i2(), [i2]), a(() => {
    var _a, _b;
    (_b = (_a = a$1().find((g2) => g2.ref.current === document.activeElement)) == null ? void 0 : _a.ref.current) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
  }, [a$1]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    h$3.div,
    {
      "aria-hidden": true,
      ...l2,
      ref: o2,
      style: { flexShrink: 0, ...l2.style },
      onPointerDown: w$2(l2.onPointerDown, () => {
        r.current === null && (r.current = window.setInterval(c2, 50));
      }),
      onPointerMove: w$2(l2.onPointerMove, () => {
        var _a;
        (_a = u2.onItemLeave) == null ? void 0 : _a.call(u2), r.current === null && (r.current = window.setInterval(c2, 50));
      }),
      onPointerLeave: w$2(l2.onPointerLeave, () => {
        i2();
      })
    }
  );
}), zt = "SelectSeparator", ot = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, ...c2 } = t2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(h$3.div, { "aria-hidden": true, ...c2, ref: o2 });
  }
);
ot.displayName = zt;
var Ie$1 = "SelectArrow", Kt = reactExports.forwardRef(
  (t2, o2) => {
    const { __scopeSelect: e2, ...c2 } = t2, l2 = pe$2(e2), u2 = Y$2(Ie$1, e2), r = q$2(Ie$1, e2);
    return u2.open && r.position === "popper" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ro$1, { ...l2, ...c2, ref: o2 }) : null;
  }
);
Kt.displayName = Ie$1;
var $t = "SelectBubbleInput", nt = reactExports.forwardRef(
  ({ __scopeSelect: t$1, value: o2, ...e2 }, c2) => {
    const l2 = reactExports.useRef(null), u2 = x$5(c2, l2), r = t(o2);
    return reactExports.useEffect(() => {
      const a2 = l2.current;
      if (!a2) return;
      const i2 = window.HTMLSelectElement.prototype, g2 = Object.getOwnPropertyDescriptor(
        i2,
        "value"
      ).set;
      if (r !== o2 && g2) {
        const x2 = new Event("change", { bubbles: true });
        g2.call(a2, o2), a2.dispatchEvent(x2);
      }
    }, [r, o2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.select,
      {
        ...e2,
        style: { ...d$1, ...e2.style },
        ref: u2,
        defaultValue: o2
      }
    );
  }
);
nt.displayName = $t;
function rt(t2) {
  return t2 === "" || t2 === void 0;
}
function st(t2) {
  const o2 = c$2(t2), e2 = reactExports.useRef(""), c2 = reactExports.useRef(0), l2 = reactExports.useCallback(
    (r) => {
      const a2 = e2.current + r;
      o2(a2), (function i2(f2) {
        e2.current = f2, window.clearTimeout(c2.current), f2 !== "" && (c2.current = window.setTimeout(() => i2(""), 1e3));
      })(a2);
    },
    [o2]
  ), u2 = reactExports.useCallback(() => {
    e2.current = "", window.clearTimeout(c2.current);
  }, []);
  return reactExports.useEffect(() => () => window.clearTimeout(c2.current), []), [e2, l2, u2];
}
function at(t2, o2, e2) {
  const l2 = o2.length > 1 && Array.from(o2).every((f2) => f2 === o2[0]) ? o2[0] : o2, u2 = e2 ? t2.indexOf(e2) : -1;
  let r = Gt(t2, Math.max(u2, 0));
  l2.length === 1 && (r = r.filter((f2) => f2 !== e2));
  const i2 = r.find(
    (f2) => f2.textValue.toLowerCase().startsWith(l2.toLowerCase())
  );
  return i2 !== e2 ? i2 : void 0;
}
function Gt(t2, o2) {
  return t2.map((e2, c2) => t2[(o2 + c2) % t2.length]);
}
var jt = Ae, Yt = De$1, qt = ke, Xt = Be$1, Zt = Ve, Jt = He, Qt = ze, oo = qe, no = Xe, ro = Je, so = Qe, ao = et;
function Mo({
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jt, { "data-slot": "select", ...t2 });
}
function Oo({
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(qt, { "data-slot": "select-value", ...t2 });
}
function Do({
  className: t2,
  size: o2 = "default",
  children: e2,
  ...c2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Yt,
    {
      "data-slot": "select-trigger",
      "data-size": o2,
      className: We$3(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t2
      ),
      ...c2,
      children: [
        e2,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Xt, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$5, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Lo({
  className: t2,
  children: o2,
  position: e2 = "popper",
  ...c2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Zt, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Jt,
    {
      "data-slot": "select-content",
      className: We$3(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        e2 === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t2
      ),
      position: e2,
      ...c2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(co, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Qt,
          {
            className: We$3(
              "p-1",
              e2 === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: o2
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(io, {})
      ]
    }
  ) });
}
function Bo({
  className: t2,
  children: o$12,
  ...e2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    oo,
    {
      "data-slot": "select-item",
      className: We$3(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t2
      ),
      ...e2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ro, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(o, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(no, { children: o$12 })
      ]
    }
  );
}
function co({
  className: t2,
  ...o2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    so,
    {
      "data-slot": "select-scroll-up-button",
      className: We$3(
        "flex cursor-default items-center justify-center py-1",
        t2
      ),
      ...o2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pt, { className: "size-4" })
    }
  );
}
function io({
  className: t2,
  ...o2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ao,
    {
      "data-slot": "select-scroll-down-button",
      className: We$3(
        "flex cursor-default items-center justify-center py-1",
        t2
      ),
      ...o2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$5, { className: "size-4" })
    }
  );
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h$1 = C$5("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const F$2 = j$5(
  "w-full mx-auto bg-background text-foreground",
  {
    variants: {
      layout: {
        none: "block",
        "sidebar-left": "block md:flex",
        // ✅ FIXED: Always flex for side-by-side
        "sidebar-right": "block md:flex"
        // ✅ FIXED: Always flex for side-by-side
      },
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full"
      },
      position: {
        sticky: "relative",
        fixed: "relative",
        relative: "relative"
      }
    },
    defaultVariants: {
      layout: "none",
      size: "xl",
      position: "relative"
    }
  }
), H$2 = j$5(
  "flex-shrink-0 rounded-lg m-4 max-md:hidden",
  // ✅ OPTIMIZED: Added m-4 for consistent outer margin
  {
    variants: {
      position: {
        left: "order-first",
        right: "order-last"
      },
      size: {
        sm: "w-48",
        // ✅ FIXED: Removed responsive prefixes for consistent width
        md: "w-56",
        lg: "w-64",
        xl: "w-64",
        full: "w-64"
      },
      sidebarPosition: {
        sticky: "sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto",
        // ✅ FIXED: Added self-start
        fixed: "sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto",
        // ✅ FIXED: Added self-start  
        relative: "self-start"
        // ✅ FIXED: Added self-start
      },
      tone: {
        clean: "bg-muted/10 border border-border/60 dark:bg-muted/20 dark:border-border/50",
        subtle: "bg-muted/50 border border-border/20 dark:bg-muted/60 dark:border-border/30",
        brand: "bg-primary/10 border border-primary/15 dark:bg-primary/15 dark:border-primary/20",
        contrast: "bg-muted/70 border border-border/50 dark:bg-muted/80 dark:border-border/60"
      }
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sidebarPosition: "relative",
      tone: "clean"
    }
  }
), J = j$5(
  "flex-1 min-w-0 p-4",
  // ✅ OPTIMIZED: Constant p-4 padding, removed min-w-0 conflict
  {
    variants: {
      size: {
        sm: "",
        // ✅ OPTIMIZED: Removed size-based padding, using constant p-4
        md: "",
        lg: "",
        xl: "",
        full: ""
      },
      hasGap: {
        true: "",
        // ✅ OPTIMIZED: Removed ml-6, using sidebar m-4 instead
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      hasGap: false
    }
  }
), L$3 = (a2 = "md") => {
  const c2 = {
    sm: {
      button: "text-xs py-1.5 px-2 min-h-[28px]",
      icon: "h-3 w-3 mr-2 flex-shrink-0",
      spacing: "space-y-0.5",
      showBadges: false
    },
    md: {
      button: "text-sm py-2 px-3 min-h-[32px]",
      icon: "h-4 w-4 mr-2 flex-shrink-0",
      spacing: "space-y-1",
      showBadges: true
    },
    lg: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true
    },
    xl: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true
    },
    full: {
      button: "text-sm py-2.5 px-4 min-h-[36px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true
    }
  };
  return c2[a2] || c2.md;
};
function Q({
  navigation: a2,
  size: c2 = "md",
  tone: s2,
  currentPath: x2 = "",
  onNavigate: n2
}) {
  const [h2, p2] = reactExports.useState(/* @__PURE__ */ new Set()), m2 = L$3(c2);
  reactExports.useEffect(() => {
    const e2 = /* @__PURE__ */ new Set(), o2 = (w2) => {
      w2.forEach((d2) => {
        d2.items && d2.items.length > 0 && (e2.add(d2.key), o2(d2.items));
      });
    };
    o2(a2), p2(e2);
  }, [a2]);
  const u2 = (e2) => {
    const o2 = new Set(h2);
    o2.has(e2) ? o2.delete(e2) : o2.add(e2), p2(o2);
  }, y2 = (e2) => {
    e2.items && e2.items.length > 0 ? u2(e2.key) : e2.href && n2 ? n2(e2.href, e2) : e2.onClick && e2.onClick();
  }, f2 = (e2, o2 = 0) => {
    const w2 = e2.items && e2.items.length > 0, d2 = h2.has(e2.key), l2 = e2.href ? x2 === e2.href : e2.isActive;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        b$4,
        {
          variant: "ghost",
          className: We$3(
            "w-full justify-start transition-all items-center cursor-pointer",
            m2.button,
            o2 > 0 && "ml-4 w-[calc(100%-1rem)]",
            // Tone-aware styling
            s2 === "clean" && (l2 ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
            s2 === "subtle" && (l2 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60"),
            s2 === "brand" && (l2 ? "bg-primary/10 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"),
            s2 === "contrast" && (l2 ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"),
            e2.className
          ),
          onClick: () => y2(e2),
          children: [
            e2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(e2.icon, { className: m2.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left truncate", children: e2.label }),
            e2.badge && m2.showBadges && /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", className: "text-xs ml-auto", children: e2.badge }),
            w2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              h$1,
              {
                className: We$3(
                  "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
                  d2 && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      w2 && d2 && e2.items && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-1", children: e2.items.map(
        (v2) => f2(v2, o2 + 1)
      ) })
    ] }, e2.key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: We$3("w-full p-3", m2.spacing), children: a2.map((e2) => f2(e2)) });
}
const C$3 = reactExports.forwardRef(({
  content: a2,
  position: c2 = "left",
  size: s2 = "md",
  sidebarPosition: x2 = "relative",
  tone: n2 = "clean",
  currentPath: h2 = "",
  onNavigate: p2,
  className: m2,
  style: u2
}, y2) => {
  if (!a2) return null;
  const f2 = () => Array.isArray(a2) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Q,
    {
      navigation: a2,
      size: s2,
      tone: n2,
      currentPath: h2,
      onNavigate: p2
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children: a2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "aside",
    {
      ref: y2,
      className: We$3(
        H$2({ position: c2, size: s2, sidebarPosition: x2, tone: n2 }),
        m2
      ),
      style: u2,
      children: f2()
    }
  );
});
C$3.displayName = "ContainerSidebar";
const B$3 = reactExports.forwardRef(({
  size: a2 = "md",
  children: c2,
  className: s2,
  style: x2
}, n2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "main",
  {
    ref: n2,
    className: We$3(J({ size: a2 }), s2),
    style: x2,
    children: c2
  }
));
B$3.displayName = "ContainerMain";
const V$1 = reactExports.forwardRef(({
  className: a2,
  style: c2,
  tone: s2 = "clean",
  position: x2 = "relative",
  sidebar: n2 = "none",
  navigation: h2 = [],
  sidebarContent: p2,
  currentPath: m2 = "",
  onNavigate: u2,
  sidebarPosition: y2 = "relative",
  size: f2 = "xl",
  children: e2
}, o2) => {
  var _a;
  const w2 = n2 === "left" ? "sidebar-left" : n2 === "right" ? "sidebar-right" : "none", d2 = n2 !== "none" && (h2.length > 0 || p2), l2 = h2.length > 0 ? h2 : p2, v2 = (g2, N2 = "") => {
    const t2 = [];
    return g2.forEach((i2) => {
      const E2 = N2 ? `${N2} > ${i2.label}` : i2.label;
      (i2.href || i2.onClick) && t2.push({ key: i2.key, label: E2, item: i2 }), i2.items && i2.items.length > 0 && t2.push(...v2(i2.items, E2));
    }), t2;
  }, j2 = (g2) => {
    if (!Array.isArray(l2)) return;
    const t2 = v2(l2).find((i2) => i2.key === g2);
    t2 && u2 && (t2.item.href ? u2(t2.item.href, t2.item) : t2.item.onClick && t2.item.onClick());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: o2,
      className: We$3(F$2({ layout: w2, size: f2, position: x2 }), a2),
      style: c2,
      children: [
        d2 && n2 === "left" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          C$3,
          {
            content: l2,
            position: "left",
            size: f2,
            sidebarPosition: y2,
            tone: s2,
            currentPath: m2,
            onNavigate: u2
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(B$3, { size: f2, children: [
          d2 && Array.isArray(l2) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Mo, { value: (_a = v2(l2).find((g2) => g2.item.href === m2)) == null ? void 0 : _a.key, onValueChange: j2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Do, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Oo, { placeholder: "Navigate to..." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lo, { children: v2(l2).map(({ key: g2, label: N2, item: t2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Bo, { value: g2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                t2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(t2.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: N2 })
              ] }),
              t2.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", className: "text-xs", children: t2.badge })
            ] }) }, g2)) })
          ] }) }),
          e2
        ] }),
        d2 && n2 === "right" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          C$3,
          {
            content: l2,
            position: "right",
            size: f2,
            sidebarPosition: y2,
            tone: s2,
            currentPath: m2,
            onNavigate: u2
          }
        )
      ]
    }
  );
});
V$1.displayName = "Container";
const ee$2 = Object.assign(V$1, {
  Sidebar: C$3,
  Main: B$3
});
function f({ ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function g$2({ className: r, ...e2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: We$3(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        r
      ),
      ...e2
    }
  );
}
function x$2({ className: r, ...e2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: We$3("inline-flex items-center gap-1.5", r),
      ...e2
    }
  );
}
function h({
  asChild: r,
  className: e2,
  ...s2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    r ? I$6 : "a",
    {
      "data-slot": "breadcrumb-link",
      className: We$3("hover:text-foreground transition-colors", e2),
      ...s2
    }
  );
}
function N$3({ className: r, ...e2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: We$3("text-foreground font-normal", r),
      ...e2
    }
  );
}
function B$2({
  children: r,
  className: e2,
  ...s2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: We$3("[&>svg]:size-3.5", e2),
      ...s2,
      children: r ?? /* @__PURE__ */ jsxRuntimeExports.jsx(h$1, {})
    }
  );
}
const N$2 = reactExports.createContext({
  scheme: "default",
  tone: "brand",
  size: "xl"
}), Y$1 = j$5(
  "min-h-screen flex flex-col",
  {
    variants: {
      tone: {
        clean: "bg-background text-foreground",
        subtle: "bg-background text-foreground",
        brand: "bg-background text-foreground",
        contrast: "bg-zinc-900 text-zinc-100"
      }
    },
    defaultVariants: {
      tone: "clean"
    }
  }
), z$2 = reactExports.forwardRef(({
  scheme: o2 = "default",
  tone: n2 = "clean",
  size: i2 = "xl",
  className: s2,
  children: p2
}, m2) => /* @__PURE__ */ jsxRuntimeExports.jsx(N$2.Provider, { value: { scheme: o2, tone: n2, size: i2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref: m2,
    className: We$3(Y$1({ tone: n2 }), s2),
    children: p2
  }
) }));
z$2.displayName = "PageLayout";
const L$2 = reactExports.forwardRef(({
  tone: o2,
  size: n2,
  position: i2 = "sticky",
  navigation: s2 = [],
  currentPath: p2 = "",
  onNavigate: m2,
  logo: t2,
  title: f2,
  actions: l2,
  className: c2
}, d2) => {
  const { tone: u2, size: g2 } = C$2();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    I$5,
    {
      ref: d2,
      tone: o2 || u2,
      size: n2 || g2,
      position: i2,
      className: c2,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(O$4, { children: t2 || f2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold", children: f2 }) }),
        s2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          D$2,
          {
            navigation: s2,
            currentPath: p2,
            onNavigate: m2
          }
        ),
        l2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex items-center gap-2", children: l2 })
      ]
    }
  );
});
L$2.displayName = "PageHeader";
const F$1 = reactExports.forwardRef(({
  tone: o2,
  size: n2,
  sidebar: i2 = "none",
  navigation: s2 = [],
  sidebarContent: p2,
  currentPath: m2 = "",
  onNavigate: t2,
  sidebarPosition: f$12 = "relative",
  breadcrumbs: l2 = [],
  onBreadcrumbNavigate: c2,
  title: d2,
  className: u2,
  children: g2
}, a2) => {
  const { scheme: T2, tone: S2, size: h$12 } = C$2(), k2 = i2 !== "none" ? i2 : T2 === "sidebar" ? "left" : "none", j2 = (r) => {
    c2 ? c2(r) : t2 && t2(r, {
      key: r,
      label: r,
      href: r
    });
  }, w2 = () => l2.length === 0 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(g$2, { children: l2.map((r, P2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(x$2, { children: r.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      h,
      {
        asChild: !!(c2 || t2),
        ...c2 || t2 ? {
          onClick: (B2) => {
            B2.preventDefault(), j2(r.href);
          }
        } : { href: r.href },
        children: c2 || t2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: r.label }) : r.label
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(N$3, { children: r.label }) }),
    P2 < l2.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(B$2, {})
  ] }, P2)) }) }) }), v2 = () => d2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-bold text-foreground mb-4", children: d2 }) : null;
  return k2 === "none" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "main",
    {
      ref: a2,
      className: We$3("flex-1", u2),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: We$3(
        "mx-auto",
        (n2 || h$12) === "sm" && "max-w-2xl px-4 py-6",
        (n2 || h$12) === "md" && "max-w-4xl px-4 sm:px-6 py-8",
        (n2 || h$12) === "lg" && "max-w-6xl px-4 sm:px-6 lg:px-8 py-8",
        (n2 || h$12) === "xl" && "max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
        (n2 || h$12) === "full" && "max-w-full px-4 sm:px-6 lg:px-8 py-8"
      ), children: [
        (d2 || l2.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          w2(),
          v2()
        ] }),
        g2
      ] })
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: a2, className: We$3("flex-1", u2), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ee$2,
    {
      sidebar: k2,
      navigation: s2,
      sidebarContent: p2,
      currentPath: m2,
      onNavigate: t2,
      sidebarPosition: f$12,
      tone: o2 || S2,
      size: n2 || h$12,
      children: [
        (d2 || l2.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          w2(),
          v2()
        ] }),
        g2
      ]
    }
  ) });
});
F$1.displayName = "PageContent";
const H$1 = reactExports.forwardRef(({
  tone: o2,
  size: n2,
  position: i2 = "relative",
  navigation: s2 = [],
  currentPath: p2 = "",
  onNavigate: m2,
  copyright: t2,
  className: f2,
  children: l2
}, c2) => {
  const { tone: d2, size: u2 } = C$2();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    H$6,
    {
      ref: c2,
      tone: o2 || (d2 === "brand" ? "subtle" : d2),
      size: n2 || u2,
      position: i2,
      className: f2,
      children: l2 || /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        s2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6 py-4", children: s2.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              a2.href && m2 ? m2(a2.href, a2) : a2.onClick && a2.onClick();
            },
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: a2.label
          },
          a2.key
        )) }),
        t2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t2 }) })
      ] })
    }
  );
});
H$1.displayName = "PageFooter";
const C$2 = () => {
  const o2 = reactExports.useContext(N$2);
  if (!o2)
    throw new Error("usePage must be used within a PageLayout component");
  return o2;
}, le$1 = Object.assign(z$2, {
  Header: L$2,
  Content: F$1,
  Footer: H$1
});
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
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
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$A = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$A);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$z = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("arrow-down-right", __iconNode$z);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$y = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$y);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$x = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$x);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$w = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$w);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$v = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$v);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$u = [
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" }]
];
const Building = createLucideIcon("building", __iconNode$u);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$t = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$t);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$s = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$s);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$r = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$r);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$q = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$q);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$p = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$p);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$o = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$o);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$n = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$n);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$m = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$m);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$l = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$l);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$k = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
];
const Folder = createLucideIcon("folder", __iconNode$k);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$j = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$j);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$i = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$i);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$h = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$h);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$g = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$g);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$f = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$f);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$e = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$e);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$d = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$d);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$c = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$c);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$b = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$b);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$a = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
];
const PanelsTopLeft = createLucideIcon("panels-top-left", __iconNode$a);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$9);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$8);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$7);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$6);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$5);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$4);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$3);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode$2);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const navigationItems = [
  { key: "home", label: "Home", href: "/", icon: House },
  { key: "components", label: "Components", href: "/components", icon: PanelsTopLeft },
  { key: "themes", label: "Themes", href: "/themes", icon: Palette },
  {
    key: "pages",
    label: "Pages",
    icon: BookOpen,
    items: [
      { key: "login", label: "Login", href: "/login" },
      { key: "dashboard", label: "Dashboard", href: "/dashboard" },
      { key: "error", label: "Error Page", href: "/error" }
    ]
  },
  { key: "about", label: "About", href: "/about", icon: BookOpen },
  { key: "contact", label: "Contact", href: "/contact", icon: Mail }
];
const Logo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-secondary rounded flex items-center justify-center text-primary-foreground font-bold text-sm", children: "UI" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "voila-brand-logo text-xl font-bold", children: "elegant" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-background", children: "Multi-Page Template" })
  ] })
] });
const ThemeActions = () => {
  const { theme, mode, setTheme, availableThemes, toggleMode } = N$5();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        value: theme,
        onChange: (e2) => setTheme(e2.target.value),
        className: " border  border-input rounded px-3 py-2 text-sm focus:outline-none",
        children: availableThemes.map((themeId) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: themeId, children: themeId.charAt(0).toUpperCase() + themeId.slice(1) }, themeId))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { onClick: toggleMode, variant: "secondary", size: "sm", children: [
      mode === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 hidden sm:inline", children: mode === "dark" ? "Light" : "Dark" })
    ] })
  ] });
};
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = (href) => {
    navigate(href);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(I$5, { tone: "brand", size: "xl", position: "sticky", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(O$4, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      D$2,
      {
        navigation: navigationItems,
        currentPath: location.pathname,
        onNavigate: handleNavigation
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeActions, {}) })
  ] });
};
const footerNavigation = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
  { key: "privacy", label: "Privacy", href: "/privacy" },
  { key: "terms", label: "Terms", href: "/terms" }
];
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (href) => {
    navigate(href);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(H$6, { tone: "subtle", size: "xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6", children: footerNavigation.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => item.href && handleNavigation(item.href),
        className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
        children: item.label
      },
      item.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs", children: "UI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "elegant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "© 2025 elegant Multi-Page Template • Built with React Router & Code Splitting" }) })
    ] })
  ] }) });
};
function n({ className: t2, ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: We$3(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-transparent py-6 shadow-sm",
        t2
      ),
      ...r
    }
  );
}
function s({ className: t2, ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: We$3(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        t2
      ),
      ...r
    }
  );
}
function c({ className: t2, ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: We$3("leading-none font-semibold", t2),
      ...r
    }
  );
}
function i({ className: t2, ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-description",
      className: We$3("text-muted-foreground text-sm", t2),
      ...r
    }
  );
}
function u({ className: t2, ...r }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: We$3("px-6", t2),
      ...r
    }
  );
}
const HomePage = () => {
  const { theme } = N$5();
  const themeDescriptions = {
    base: "Clean default configuration showcasing the base system",
    elegant: "Fresh sky blue theme with clean design",
    metro: "Dark teal theme with bright yellow accents",
    studio: "Sophisticated neutral theme with golden accents",
    vivid: "Premium cursive theme with sophisticated typography"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "text-center py-16 bg-gradient-to-b from-background to-muted/20 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "voila-heading text-4xl md:text-6xl mb-6 text-accent", children: "Voilacode Technology" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "voila-subheading text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "Professional React components with file-based routing, showcasing layouts, navigation, and code organization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 backdrop-blur px-6 py-3 rounded-full border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-primary rounded-full animate-pulse" }),
        themeDescriptions[theme]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/components", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "mr-2 h-4 w-4" }),
          "Explore Components"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "secondary", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/themes", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "mr-2 h-4 w-4" }),
          "Browse Themes"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Multi-Page Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Explore different pages showcasing various UIKit features and components" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Components Gallery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Comprehensive showcase of all UIKit components with examples and variations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Buttons & Interactive Elements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Cards & Content Containers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Form Controls & Inputs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Data Display & Charts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/components", children: [
              "View Components",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-6 w-6 text-secondary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Theme System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Interactive theme switching with live preview and color palette showcase" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 5 Beautiful Theme Presets" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• OKLCH Color Science" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Light & Dark Mode Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Real-time Theme Switching" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/themes", children: [
              "Browse Themes",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "About & Documentation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Learn about UIKit's architecture, design principles, and implementation details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• File-based Routing Structure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Layout & Navigation Patterns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Component Organization" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Development Best Practices" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
              "Learn More",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-chart1/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 text-chart1" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Contact & Feedback" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Get in touch, provide feedback, or explore integration options" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Form Validation Examples" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Input Field Variations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Submission Handling" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• User Experience Patterns" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
              "Contact Us",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 rounded-lg p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Multi-Page Template Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "This template demonstrates advanced UIKit usage with proper code organization and routing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/80 border rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "📁 File Organization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "pages/, layouts/, components/" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/80 border rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "🔗 React Router" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Code splitting & lazy loading" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/80 border rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "🎨 UIKit Layout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "PageLayout with navigation" })
        ] })
      ] })
    ] }) })
  ] });
};
var y$1 = "rovingFocusGroup.onEntryFocus", X$2 = { bubbles: false, cancelable: true }, I$2 = "RovingFocusGroup", [P$3, N$1, Z] = b$2(I$2), [$$2, Ie] = w$1(
  I$2,
  [Z]
), [ee$1, oe$1] = $$2(I$2), O$1 = reactExports.forwardRef(
  (e2, r) => /* @__PURE__ */ jsxRuntimeExports.jsx(P$3.Provider, { scope: e2.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(P$3.Slot, { scope: e2.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(te$1, { ...e2, ref: r }) }) })
);
O$1.displayName = I$2;
var te$1 = reactExports.forwardRef((e2, r) => {
  const {
    __scopeRovingFocusGroup: c2,
    orientation: o2,
    loop: T2 = false,
    dir: w2,
    currentTabStopId: v2,
    defaultCurrentTabStopId: C2,
    onCurrentTabStopIdChange: S2,
    onEntryFocus: m2,
    preventScrollOnEntryFocus: a2 = false,
    ...b2
  } = e2, F2 = reactExports.useRef(null), g2 = x$5(r, F2), R2 = j$3(w2), [E2, t2] = S$1({
    prop: v2,
    defaultProp: C2 ?? null,
    onChange: S2,
    caller: I$2
  }), [i2, h2] = reactExports.useState(false), u2 = c$2(m2), l2 = N$1(c2), A2 = reactExports.useRef(false), [L2, D2] = reactExports.useState(0);
  return reactExports.useEffect(() => {
    const n2 = F2.current;
    if (n2)
      return n2.addEventListener(y$1, u2), () => n2.removeEventListener(y$1, u2);
  }, [u2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    ee$1,
    {
      scope: c2,
      orientation: o2,
      dir: R2,
      loop: T2,
      currentTabStopId: E2,
      onItemFocus: reactExports.useCallback(
        (n2) => t2(n2),
        [t2]
      ),
      onItemShiftTab: reactExports.useCallback(() => h2(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => D2((n2) => n2 + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => D2((n2) => n2 - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        h$3.div,
        {
          tabIndex: i2 || L2 === 0 ? -1 : 0,
          "data-orientation": o2,
          ...b2,
          ref: g2,
          style: { outline: "none", ...e2.style },
          onMouseDown: w$2(e2.onMouseDown, () => {
            A2.current = true;
          }),
          onFocus: w$2(e2.onFocus, (n2) => {
            const U2 = !A2.current;
            if (n2.target === n2.currentTarget && U2 && !i2) {
              const x2 = new CustomEvent(y$1, X$2);
              if (n2.currentTarget.dispatchEvent(x2), !x2.defaultPrevented) {
                const _2 = l2().filter((f2) => f2.focusable), B2 = _2.find((f2) => f2.active), Y2 = _2.find((f2) => f2.id === E2), H2 = [B2, Y2, ..._2].filter(
                  Boolean
                ).map((f2) => f2.ref.current);
                k$1(H2, a2);
              }
            }
            A2.current = false;
          }),
          onBlur: w$2(e2.onBlur, () => h2(false))
        }
      )
    }
  );
}), K$1 = "RovingFocusGroupItem", M$1 = reactExports.forwardRef(
  (e2, r) => {
    const {
      __scopeRovingFocusGroup: c2,
      focusable: o2 = true,
      active: T2 = false,
      tabStopId: w2,
      children: v2,
      ...C2
    } = e2, S2 = c$1(), m2 = w2 || S2, a2 = oe$1(K$1, c2), b2 = a2.currentTabStopId === m2, F2 = N$1(c2), { onFocusableItemAdd: g2, onFocusableItemRemove: R2, currentTabStopId: E2 } = a2;
    return reactExports.useEffect(() => {
      if (o2)
        return g2(), () => R2();
    }, [o2, g2, R2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      P$3.ItemSlot,
      {
        scope: c2,
        id: m2,
        focusable: o2,
        active: T2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          h$3.span,
          {
            tabIndex: b2 ? 0 : -1,
            "data-orientation": a2.orientation,
            ...C2,
            ref: r,
            onMouseDown: w$2(e2.onMouseDown, (t2) => {
              o2 ? a2.onItemFocus(m2) : t2.preventDefault();
            }),
            onFocus: w$2(e2.onFocus, () => a2.onItemFocus(m2)),
            onKeyDown: w$2(e2.onKeyDown, (t2) => {
              if (t2.key === "Tab" && t2.shiftKey) {
                a2.onItemShiftTab();
                return;
              }
              if (t2.target !== t2.currentTarget) return;
              const i2 = se(t2, a2.orientation, a2.dir);
              if (i2 !== void 0) {
                if (t2.metaKey || t2.ctrlKey || t2.altKey || t2.shiftKey) return;
                t2.preventDefault();
                let u2 = F2().filter((l2) => l2.focusable).map((l2) => l2.ref.current);
                if (i2 === "last") u2.reverse();
                else if (i2 === "prev" || i2 === "next") {
                  i2 === "prev" && u2.reverse();
                  const l2 = u2.indexOf(t2.currentTarget);
                  u2 = a2.loop ? ce$1(u2, l2 + 1) : u2.slice(l2 + 1);
                }
                setTimeout(() => k$1(u2));
              }
            }),
            children: typeof v2 == "function" ? v2({ isCurrentTabStop: b2, hasTabStop: E2 != null }) : v2
          }
        )
      }
    );
  }
);
M$1.displayName = K$1;
var re = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ne(e2, r) {
  return r !== "rtl" ? e2 : e2 === "ArrowLeft" ? "ArrowRight" : e2 === "ArrowRight" ? "ArrowLeft" : e2;
}
function se(e2, r, c2) {
  const o2 = ne(e2.key, c2);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o2)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o2)))
    return re[o2];
}
function k$1(e2, r = false) {
  const c2 = document.activeElement;
  for (const o2 of e2)
    if (o2 === c2 || (o2.focus({ preventScroll: r }), document.activeElement !== c2)) return;
}
function ce$1(e2, r) {
  return e2.map((c2, o2) => e2[(r + o2) % e2.length]);
}
var be$2 = O$1, Fe = M$1;
function T(n2, e2) {
  return reactExports.useReducer((t2, r) => e2[t2][r] ?? t2, n2);
}
var E = (n2) => {
  const { present: e2, children: t2 } = n2, r = R$3(e2), a2 = typeof t2 == "function" ? t2({ present: r.isPresent }) : reactExports.Children.only(t2), c2 = x$5(r.ref, P$2(a2));
  return typeof t2 == "function" || r.isPresent ? reactExports.cloneElement(a2, { ref: c2 }) : null;
};
E.displayName = "Presence";
function R$3(n2) {
  const [e2, t2] = reactExports.useState(), r = reactExports.useRef(null), a$1 = reactExports.useRef(n2), c2 = reactExports.useRef("none"), p2 = n2 ? "mounted" : "unmounted", [N2, s2] = T(p2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return reactExports.useEffect(() => {
    const o2 = l(r.current);
    c2.current = N2 === "mounted" ? o2 : "none";
  }, [N2]), a(() => {
    const o2 = r.current, m2 = a$1.current;
    if (m2 !== n2) {
      const f2 = c2.current, u2 = l(o2);
      n2 ? s2("MOUNT") : u2 === "none" || (o2 == null ? void 0 : o2.display) === "none" ? s2("UNMOUNT") : s2(m2 && f2 !== u2 ? "ANIMATION_OUT" : "UNMOUNT"), a$1.current = n2;
    }
  }, [n2, s2]), a(() => {
    if (e2) {
      let o2;
      const m2 = e2.ownerDocument.defaultView ?? window, d2 = (u2) => {
        const g2 = l(r.current).includes(CSS.escape(u2.animationName));
        if (u2.target === e2 && g2 && (s2("ANIMATION_END"), !a$1.current)) {
          const O2 = e2.style.animationFillMode;
          e2.style.animationFillMode = "forwards", o2 = m2.setTimeout(() => {
            e2.style.animationFillMode === "forwards" && (e2.style.animationFillMode = O2);
          });
        }
      }, f2 = (u2) => {
        u2.target === e2 && (c2.current = l(r.current));
      };
      return e2.addEventListener("animationstart", f2), e2.addEventListener("animationcancel", d2), e2.addEventListener("animationend", d2), () => {
        m2.clearTimeout(o2), e2.removeEventListener("animationstart", f2), e2.removeEventListener("animationcancel", d2), e2.removeEventListener("animationend", d2);
      };
    } else
      s2("ANIMATION_END");
  }, [e2, s2]), {
    isPresent: ["mounted", "unmountSuspended"].includes(N2),
    ref: reactExports.useCallback((o2) => {
      r.current = o2 ? getComputedStyle(o2) : null, t2(o2);
    }, [])
  };
}
function l(n2) {
  return (n2 == null ? void 0 : n2.animationName) || "none";
}
function P$2(n2) {
  var _a, _b;
  let e2 = (_a = Object.getOwnPropertyDescriptor(n2.props, "ref")) == null ? void 0 : _a.get, t2 = e2 && "isReactWarning" in e2 && e2.isReactWarning;
  return t2 ? n2.ref : (e2 = (_b = Object.getOwnPropertyDescriptor(n2, "ref")) == null ? void 0 : _b.get, t2 = e2 && "isReactWarning" in e2 && e2.isReactWarning, t2 ? n2.props.ref : n2.props.ref || n2.ref);
}
var g$1 = "Tabs", [G, Z] = w$1(g$1, [
  Ie
]), C$1 = Ie(), [L$1, x$1] = G(g$1), I$1 = reactExports.forwardRef(
  (e2, t2) => {
    const {
      __scopeTabs: c2,
      value: a2,
      onValueChange: i2,
      defaultValue: d2,
      orientation: o2 = "horizontal",
      dir: u2,
      activationMode: b2 = "automatic",
      ...v2
    } = e2, s2 = j$3(u2), [n2, l2] = S$1({
      prop: a2,
      onChange: i2,
      defaultProp: d2 ?? "",
      caller: g$1
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      L$1,
      {
        scope: c2,
        baseId: c$1(),
        value: n2,
        onValueChange: l2,
        orientation: o2,
        dir: s2,
        activationMode: b2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          h$3.div,
          {
            dir: s2,
            "data-orientation": o2,
            ...v2,
            ref: t2
          }
        )
      }
    );
  }
);
I$1.displayName = g$1;
var y = "TabsList", _$1 = reactExports.forwardRef(
  (e2, t2) => {
    const { __scopeTabs: c2, loop: a2 = true, ...i2 } = e2, d2 = x$1(y, c2), o2 = C$1(c2);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      be$2,
      {
        asChild: true,
        ...o2,
        orientation: d2.orientation,
        dir: d2.dir,
        loop: a2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          h$3.div,
          {
            role: "tablist",
            "aria-orientation": d2.orientation,
            ...i2,
            ref: t2
          }
        )
      }
    );
  }
);
_$1.displayName = y;
var N = "TabsTrigger", R$2 = reactExports.forwardRef(
  (e2, t2) => {
    const { __scopeTabs: c2, value: a2, disabled: i2 = false, ...d2 } = e2, o2 = x$1(N, c2), u2 = C$1(c2), b2 = P$1(o2.baseId, a2), v2 = S(o2.baseId, a2), s2 = a2 === o2.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Fe,
      {
        asChild: true,
        ...u2,
        focusable: !i2,
        active: s2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          h$3.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": s2,
            "aria-controls": v2,
            "data-state": s2 ? "active" : "inactive",
            "data-disabled": i2 ? "" : void 0,
            disabled: i2,
            id: b2,
            ...d2,
            ref: t2,
            onMouseDown: w$2(e2.onMouseDown, (n2) => {
              !i2 && n2.button === 0 && n2.ctrlKey === false ? o2.onValueChange(a2) : n2.preventDefault();
            }),
            onKeyDown: w$2(e2.onKeyDown, (n2) => {
              [" ", "Enter"].includes(n2.key) && o2.onValueChange(a2);
            }),
            onFocus: w$2(e2.onFocus, () => {
              const n2 = o2.activationMode !== "manual";
              !s2 && !i2 && n2 && o2.onValueChange(a2);
            })
          }
        )
      }
    );
  }
);
R$2.displayName = N;
var w = "TabsContent", A$1 = reactExports.forwardRef(
  (e2, t2) => {
    const { __scopeTabs: c2, value: a2, forceMount: i2, children: d2, ...o2 } = e2, u2 = x$1(w, c2), b2 = P$1(u2.baseId, a2), v2 = S(u2.baseId, a2), s2 = a2 === u2.value, n2 = reactExports.useRef(s2);
    return reactExports.useEffect(() => {
      const l2 = requestAnimationFrame(() => n2.current = false);
      return () => cancelAnimationFrame(l2);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(E, { present: i2 || s2, children: ({ present: l2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.div,
      {
        "data-state": s2 ? "active" : "inactive",
        "data-orientation": u2.orientation,
        role: "tabpanel",
        "aria-labelledby": b2,
        hidden: !l2,
        id: v2,
        tabIndex: 0,
        ...o2,
        ref: t2,
        style: {
          ...e2.style,
          animationDuration: n2.current ? "0s" : void 0
        },
        children: l2 && d2
      }
    ) });
  }
);
A$1.displayName = w;
function P$1(e2, t2) {
  return `${e2}-trigger-${t2}`;
}
function S(e2, t2) {
  return `${e2}-content-${t2}`;
}
var j = I$1, z$1 = _$1, K = R$2, B$1 = A$1;
function ee({
  className: e2,
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    j,
    {
      "data-slot": "tabs",
      className: We$3("flex flex-col gap-2", e2),
      ...t2
    }
  );
}
function te({
  className: e2,
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    z$1,
    {
      "data-slot": "tabs-list",
      className: We$3(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e2
      ),
      ...t2
    }
  );
}
function ae({
  className: e2,
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    K,
    {
      "data-slot": "tabs-trigger",
      className: We$3(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e2
      ),
      ...t2
    }
  );
}
function oe({
  className: e2,
  ...t2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    B$1,
    {
      "data-slot": "tabs-content",
      className: We$3("flex-1 outline-none", e2),
      ...t2
    }
  );
}
const ComponentsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "voila-heading text-4xl", children: "Component Library" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "voila-subheading text-muted-foreground max-w-3xl mx-auto", children: "Comprehensive showcase of UIKit's production-ready React components with examples and variations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ee, { defaultValue: "buttons", className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(te, { className: "grid w-full grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { value: "buttons", children: "Buttons" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { value: "cards", children: "Cards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { value: "forms", children: "Forms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ae, { value: "display", children: "Display" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(oe, { value: "buttons", className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded flex items-center justify-center", children: "🔘" }),
              "Button Variants"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Interactive elements with multiple variants, sizes, and states" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Primary Actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { size: "lg", children: "Primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "secondary", size: "lg", children: "Secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "outline", size: "lg", children: "Outline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "ghost", size: "lg", children: "Ghost" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "destructive", size: "lg", children: "Destructive" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Size Variations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { size: "sm", children: "Small" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { children: "Default" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { size: "lg", children: "Large" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "States & Loading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { children: "Normal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { disabled: true, children: "Disabled" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { className: "opacity-50 cursor-not-allowed", children: "Loading..." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Badges & Labels" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Small status indicators and labels" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { children: "Default" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "destructive", children: "Error" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "outline", children: "Outline" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(oe, { value: "cards", className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-secondary/10 rounded flex items-center justify-center", children: "📋" }),
            "Card Layouts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Flexible containers for displaying content and actions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(c, { className: "text-lg", children: "Simple Card" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Basic card with header and content" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Cards provide a flexible container for content with consistent spacing and styling." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 bg-primary/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(c, { className: "text-lg", children: "Action Card" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Card with interactive elements" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enhanced with buttons and other interactive components." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { size: "sm", className: "w-full", children: "Take Action" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 border-dashed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(c, { className: "text-lg", children: "Custom Styled" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Customizable appearance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Easy to customize with different borders, backgrounds, and layouts." }) })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(oe, { value: "forms", className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-accent/10 rounded flex items-center justify-center", children: "📝" }),
            "Form Controls"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Input fields and form controls with consistent styling" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Text Inputs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Standard Input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Enter your text",
                    className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Email Input" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "your@email.com",
                    className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Selection Controls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Dropdown Select" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose an option" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option 1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option 2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option 3" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Multi-select" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { multiple: true, size: 3, className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option B" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Option C" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Text Areas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  placeholder: "Enter your message here...",
                  rows: 4,
                  className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(oe, { value: "display", className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-chart1/10 rounded flex items-center justify-center", children: "📊" }),
              "Data Display"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Components for presenting structured information" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Chart Colors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-3", children: [1, 2, 3, 4, 5].map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-16 rounded-lg mb-2 bg-chart${i2} shadow-sm` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-medium", children: [
                  "Chart ",
                  i2
                ] })
              ] }, i2)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-muted-foreground", children: "Status Indicators" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-600 rounded-full" }),
                  "Active"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-yellow-600 rounded-full" }),
                  "Pending"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-red-600 rounded-full" }),
                  "Inactive"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                  "Processing"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Typography Scale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Text hierarchy and styling examples" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Heading 1 - Main Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Heading 2 - Section Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Heading 3 - Subsection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold", children: "Heading 4 - Component Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Body text - Lorem ipsum dolor sit amet consectetur adipiscing elit." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Small text for captions, metadata, and secondary information." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-sm bg-muted px-2 py-1 rounded font-mono", children: "Code snippet example" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
const ThemesPage = () => {
  var _a;
  const { theme, mode, setTheme, availableThemes, toggleMode } = N$5();
  const themeDetails = {
    base: {
      description: "Clean default configuration showcasing the base system with Inter typography",
      features: ["Inter font family", "Neutral color palette", "Clean and minimal design", "Perfect for business apps"],
      color: "from-gray-400 to-gray-600"
    },
    elegant: {
      description: "Fresh sky blue theme with clean design and modern aesthetics",
      features: ["Sky blue primary colors", "Elegant typography", "Fresh and modern", "Great for creative projects"],
      color: "from-sky-400 to-blue-600"
    },
    metro: {
      description: "Dark teal theme with bright yellow accents for bold interfaces",
      features: ["Dark teal foundation", "Bright yellow accents", "High contrast design", "Perfect for tech platforms"],
      color: "from-teal-500 to-yellow-500"
    },
    studio: {
      description: "Sophisticated neutral theme with golden accents for premium feel",
      features: ["Warm neutral tones", "Golden accent colors", "Professional appearance", "Ideal for portfolios"],
      color: "from-amber-400 to-orange-600"
    },
    vivid: {
      description: "Premium cursive theme with sophisticated typography for luxury brands",
      features: ["Cursive typography", "Rich color palette", "Luxury brand feeling", "High-end aesthetics"],
      color: "from-purple-500 to-pink-600"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "voila-heading text-4xl", children: "Theme System" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "voila-subheading text-muted-foreground max-w-3xl mx-auto", children: "Interactive theme switching with OKLCH color science and comprehensive design tokens" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center", children: "Available Themes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6", children: availableThemes.map((themeId) => {
        const details = themeDetails[themeId];
        const isActive = theme === themeId;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          n,
          {
            className: `border-2 transition-all duration-200 hover:shadow-lg ${isActive ? "ring-2 ring-primary border-primary/50 shadow-lg" : "hover:border-primary/30"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "text-lg capitalize flex items-center gap-2", children: [
                    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
                    themeId
                  ] }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full", children: "Active" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(i, { className: "text-sm", children: details == null ? void 0 : details.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: ` rounded-lg bg-gradient-to-r ${details == null ? void 0 : details.color} opacity-80` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm space-y-1 text-muted-foreground", children: details == null ? void 0 : details.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  feature
                ] }, index)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  b$4,
                  {
                    onClick: () => setTheme(themeId),
                    variant: isActive ? "default" : "outline",
                    className: "w-full",
                    disabled: isActive,
                    children: isActive ? "Currently Active" : "Apply Theme"
                  }
                )
              ] })
            ]
          },
          themeId
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "border-2 border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5" }),
          "Current Theme: ",
          theme.charAt(0).toUpperCase() + theme.slice(1)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: (_a = themeDetails[theme]) == null ? void 0 : _a.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground p-4 rounded-lg text-center shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "Primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90 mt-1", children: "Brand color" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary text-secondary-foreground p-4 rounded-lg text-center shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "Secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90 mt-1", children: "Supporting" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent text-accent-foreground p-4 rounded-lg text-center shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "Accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90 mt-1", children: "Highlights" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted text-muted-foreground p-4 rounded-lg text-center shadow-lg border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "Muted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90 mt-1", children: "Subtle" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 bg-muted/30 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            mode === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: mode === "dark" ? "Dark Mode" : "Light Mode" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { onClick: toggleMode, variant: "outline", size: "sm", children: [
            mode === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4 mr-2" }),
            "Switch to ",
            mode === "dark" ? "Light" : "Dark"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 rounded-full" }),
          "OKLCH Color Science"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "UIKit uses the OKLCH color space for perceptually uniform colors and better accessibility" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "Perceptual Uniformity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Colors with the same lightness appear equally bright to the human eye" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "Better Accessibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Improved contrast ratios and color differentiation for accessibility" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-2", children: "Future-Proof" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Native browser support in modern browsers with graceful fallbacks" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Chart Color Palette" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-3", children: [1, 2, 3, 4, 5].map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-16 rounded-lg mb-2 bg-chart${i2} shadow-sm` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground font-medium", children: [
              "chart",
              i2
            ] })
          ] }, i2)) })
        ] })
      ] })
    ] })
  ] });
};
const AboutPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "voila-heading text-4xl", children: "About UIKit Multi-Page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "voila-subheading text-muted-foreground max-w-3xl mx-auto", children: "Learn about the architecture, design principles, and implementation details behind this multi-page template" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }),
          "Architecture Overview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "This multi-page template demonstrates advanced UIKit usage with proper code organization" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4" }),
            "File Structure"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-4 rounded-lg font-mono text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "src/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: "├── pages/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   ├── Home.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   ├── Components.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   ├── Themes.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   ├── About.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   └── Contact.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: "├── layouts/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   └── MainLayout.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: "├── components/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: "│   └── Navigation.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: "├── App.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: "└── main.tsx" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4" }),
            "Key Technologies"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "React Router v6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Routing" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "UIKit PageLayout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Layout" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "React Suspense" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Code Splitting" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TypeScript" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Type Safety" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vite" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", children: "Build Tool" })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5" }),
          "Design Principles"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Core principles that guide the UIKit design system and this template" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Accessibility First" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Built with WCAG guidelines in mind, ensuring components work for everyone" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-secondary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Performance Focused" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Optimized for fast loading with code splitting and tree shaking" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-5 w-5 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Mobile Responsive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Designed to work beautifully across all device sizes and orientations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-chart1/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-5 w-5 text-chart1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Developer Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "TypeScript-first with excellent IntelliSense and clear component APIs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-chart2/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "h-5 w-5 text-chart2" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Consistent Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Unified design language with consistent spacing, colors, and typography" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-chart3/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5 text-chart3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Modular Architecture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Composable components that can be easily combined and customized" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
          "Routing Strategy"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "Code Splitting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Each page component is loaded lazily using React.lazy() and Suspense, reducing initial bundle size and improving load times." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "Navigation State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "The PageLayout component automatically manages active navigation states based on the current route, providing visual feedback to users." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "Route Organization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Routes are organized in App.tsx with clear path definitions, making it easy to add new pages and maintain the routing structure." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }),
          "Component Strategy"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "UIKit Integration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Leverages UIKit's PageLayout, navigation components, and theme system for consistent design and behavior across all pages." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "Layout Consistency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "All pages share the same header, navigation, and footer through the PageLayout wrapper, ensuring consistent user experience." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: "Theme Integration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Theme switching works seamlessly across all pages without page refreshes, demonstrating UIKit's powerful theming capabilities." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Getting Started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "How to extend and customize this multi-page template for your needs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Adding New Pages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-2 text-muted-foreground list-decimal list-inside", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Create a new component in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "pages/" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Add the route to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "App.tsx" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Update navigation in the PageLayout header" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Export the component with lazy loading if needed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Customizing Layout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-sm space-y-2 text-muted-foreground list-decimal list-inside", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Modify the PageLayout props in App.tsx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Create custom layout components in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "layouts/" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Override navigation items and actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Customize footer content and styling" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const ContactPage = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const handleInputChange = (e2) => {
    const { name, value } = e2.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    }, 3e3);
  };
  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "support", label: "Technical Support", icon: CircleAlert },
    { value: "business", label: "Business Partnership", icon: Building },
    { value: "feedback", label: "Feedback & Suggestions", icon: CircleCheckBig }
  ];
  if (isSubmitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-10 w-10 text-green-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-green-700", children: "Message Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md mx-auto", children: "Thank you for reaching out. We've received your message and will get back to you within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What's next?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Our team will review your message and respond via email. For urgent matters, please call our support line."
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "voila-heading text-4xl", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "voila-subheading text-muted-foreground max-w-3xl mx-auto", children: "Have questions about UIKit? Need support? Want to provide feedback? We'd love to hear from you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-5 w-5" }),
            "Send us a Message"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Fill out the form below and we'll get back to you as soon as possible" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "What can we help you with?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: inquiryTypes.map((type) => {
              const Icon2 = type.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "radio",
                    name: "inquiryType",
                    value: type.value,
                    checked: formData.inquiryType === type.value,
                    onChange: handleInputChange,
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 border-2 rounded-lg text-center transition-all ${formData.inquiryType === type.value ? "border-primary bg-primary/5 text-primary" : "border-input hover:border-primary/30"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5 mx-auto mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: type.label })
                ] })
              ] }, type.value);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
                "Full Name *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  value: formData.name,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "Enter your full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                "Email Address *"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "your@email.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4 w-4" }),
                "Company"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "company",
                  value: formData.company,
                  onChange: handleInputChange,
                  className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "Your company name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                "Phone Number"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  name: "phone",
                  value: formData.phone,
                  onChange: handleInputChange,
                  className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  placeholder: "(555) 123-4567"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Subject *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                name: "subject",
                value: formData.subject,
                onChange: handleInputChange,
                required: true,
                className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                placeholder: "Brief description of your inquiry"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                name: "message",
                value: formData.message,
                onChange: handleInputChange,
                required: true,
                rows: 5,
                className: "w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none",
                placeholder: "Please provide detailed information about your inquiry..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            b$4,
            {
              type: "submit",
              size: "lg",
              className: "w-full",
              disabled: isSubmitting,
              children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" }),
                "Sending Message..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 mr-2" }),
                "Send Message"
              ] })
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(c, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
            "Other Ways to Reach Us"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-muted-foreground mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Email Support" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "support@voilajsx.com" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", className: "mt-1", children: "24-48h response" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5 text-muted-foreground mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Live Chat" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Available Mon-Fri 9AM-5PM PST" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", className: "mt-1", children: "Instant response" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-5 w-5 text-muted-foreground mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Enterprise Sales" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "For custom solutions & partnerships" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(b$3, { variant: "secondary", className: "mt-1", children: "Same day response" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Frequently Asked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Quick answers to common questions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: "How do I get started with UIKit?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mt-1", children: [
                "Run ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded", children: "npx create-uikit my-app" }),
                " to create a new project."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: "Is UIKit free to use?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Yes, UIKit is open source and free for both personal and commercial use." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: "Can I customize the themes?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Absolutely! Create custom themes using our theming system and OKLCH colors." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: "Do you provide support?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: "Yes, we offer community support via GitHub and premium support for enterprises." })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
const x = j$5(
  "min-h-screen",
  {
    variants: {
      scheme: {
        simple: "bg-background flex items-center justify-center p-4",
        card: "bg-background flex items-center justify-center p-4",
        split: "flex min-h-screen bg-background",
        hero: "min-h-screen relative overflow-hidden"
      },
      tone: {
        clean: "",
        subtle: "bg-muted/10",
        brand: "bg-primary/5",
        contrast: "bg-zinc-900"
      }
    },
    defaultVariants: {
      scheme: "card",
      tone: "clean"
    }
  }
), g = j$5(
  "w-full space-y-6",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-2xl"
      },
      scheme: {
        simple: "",
        card: "p-8 bg-card border border-border rounded-lg shadow-lg",
        split: "mx-auto lg:w-96",
        hero: ""
      }
    },
    defaultVariants: {
      size: "md",
      scheme: "card"
    }
  }
), C = reactExports.forwardRef(({
  scheme: l2 = "card",
  tone: t2 = "clean",
  size: n2 = "md",
  title: r,
  subtitle: c2,
  logo: s2,
  footer: i2,
  className: m2,
  containerProps: h2,
  // Split scheme props
  splitContent: u2,
  // Hero scheme props
  imageUrl: N2,
  imageAlt: y2 = "Authentication background",
  imageOverlay: f2 = "dark",
  // Card scheme props
  cardContent: p2,
  children: v2
}, o2) => {
  const w2 = N2 || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA3MCIgaGVpZ2h0PSIxMzgwIiB2aWV3Qm94PSIwIDAgMjA3MCAxMzgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjA3MCIgaGVpZ2h0PSIxMzgwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGC5bmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM2Y4MWJhIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJkNmM5YyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=", I2 = {
    light: "bg-gradient-to-br from-white/50 via-white/25 to-white/50",
    dark: "bg-gradient-to-br from-black/40 via-black/25 to-black/40",
    none: ""
  };
  return l2 === "simple" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: o2, className: We$3(x({ scheme: l2, tone: t2 }), m2), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ...h2,
      className: We$3(
        g({ size: n2, scheme: l2 }),
        h2 == null ? void 0 : h2.className
      ),
      children: [
        s2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: s2 }),
        (r || c2) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          r && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: r }),
          c2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: v2 }),
        i2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: i2 })
      ]
    }
  ) }) : l2 === "card" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: o2, className: We$3(x({ scheme: l2, tone: t2 }), m2), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ...h2,
      className: We$3(
        g({ size: n2, scheme: l2 }),
        h2 == null ? void 0 : h2.className
      ),
      children: [
        s2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: s2 }),
        (r || c2) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
          r && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: r }),
          c2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: v2 }),
        i2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: i2 })
      ]
    }
  ) }) : l2 === "split" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: o2, className: We$3(x({ scheme: l2, tone: t2 }), m2), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex lg:w-1/2 relative overflow-hidden", children: u2 ? (
      // Custom split content
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex flex-col justify-center p-8 lg:p-12 w-full", children: u2 })
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-full h-full",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 lg:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: We$3(g({ size: n2, scheme: l2 })), children: [
      s2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center lg:justify-start mb-8", children: s2 }),
      (r || c2) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left space-y-2 mb-8", children: [
        r && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground", children: r }),
        c2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c2 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: v2 }),
      i2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center lg:text-left mt-8", children: i2 })
    ] }) }) })
  ] }) : l2 === "hero" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: o2, className: We$3(x({ scheme: l2, tone: t2 }), m2), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: `url('${w2}')`
        },
        role: "img",
        "aria-label": y2,
        children: [
          f2 !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3("absolute inset-0", I2[f2]) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: We$3("w-full", g({ size: n2, scheme: "simple" })), children: [
      s2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: s2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 pt-8 pb-6 text-center", children: [
          r && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-foreground mb-2", children: r }),
          c2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: c2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 pb-8 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: v2 }) })
      ] }),
      p2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: p2 }),
      i2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8 text-sm text-primary-foreground/80", children: i2 })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-10 w-2 h-2 bg-primary-foreground/30 rounded-full animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-1000" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-32 w-4 h-4 bg-primary-foreground/20 rounded-full animate-pulse delay-700" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: o2, className: We$3(x({ scheme: "card", tone: t2 }), m2), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(g({ size: n2, scheme: "card" })), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-destructive", children: [
    "Invalid scheme: ",
    l2
  ] }) }) }) });
});
C.displayName = "AuthLayout";
const LoginPage = () => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const handleSubmit = (e2) => {
    e2.preventDefault();
    console.log("Login attempt:", formData);
  };
  const handleInputChange = (e2) => {
    const { name, value, type, checked } = e2.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    C,
    {
      scheme: "hero",
      tone: "clean",
      size: "md",
      title: "Welcome back",
      subtitle: "Sign in to your account to continue",
      imageUrl: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg",
      imageAlt: "Mountains with clouds and forest fog",
      imageOverlay: "dark",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  placeholder: "Enter your email",
                  value: formData.email,
                  onChange: handleInputChange,
                  className: "w-full pl-10 pr-3 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "password",
                  name: "password",
                  type: showPassword ? "text" : "password",
                  placeholder: "Enter your password",
                  value: formData.password,
                  onChange: handleInputChange,
                  className: "w-full pl-10 pr-10 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                  required: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                b$4,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "absolute right-1 top-1 h-8 w-8 p-0",
                  onClick: () => setShowPassword(!showPassword),
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "rememberMe",
                  name: "rememberMe",
                  type: "checkbox",
                  checked: formData.rememberMe,
                  onChange: handleInputChange,
                  className: "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "rememberMe", className: "text-sm", children: "Remember me" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "link", size: "sm", className: "px-0", children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { type: "submit", className: "w-full", children: [
            "Sign in",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-full border-t" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-2 text-muted-foreground", children: "Or continue with" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { variant: "outline", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "mr-2 h-4 w-4" }),
          "Continue with GitHub"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "font-medium text-primary hover:underline", children: "Sign up" })
        ] }) })
      ]
    }
  );
};
var [O, ze] = w$1("Tooltip", [
  to
]), D = to(), F = "TooltipProvider", le = 700, A = "tooltip.open", [ce, k] = O(F), z = (e2) => {
  const {
    __scopeTooltip: o2,
    delayDuration: t2 = le,
    skipDelayDuration: r = 300,
    disableHoverableContent: n2 = false,
    children: l2
  } = e2, i2 = reactExports.useRef(true), v2 = reactExports.useRef(false), s2 = reactExports.useRef(0);
  return reactExports.useEffect(() => {
    const d2 = s2.current;
    return () => window.clearTimeout(d2);
  }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
    ce,
    {
      scope: o2,
      isOpenDelayedRef: i2,
      delayDuration: t2,
      onOpen: reactExports.useCallback(() => {
        window.clearTimeout(s2.current), i2.current = false;
      }, []),
      onClose: reactExports.useCallback(() => {
        window.clearTimeout(s2.current), s2.current = window.setTimeout(
          () => i2.current = true,
          r
        );
      }, [r]),
      isPointerInTransitRef: v2,
      onPointerInTransitChange: reactExports.useCallback((d2) => {
        v2.current = d2;
      }, []),
      disableHoverableContent: n2,
      children: l2
    }
  );
};
z.displayName = F;
var R$1 = "Tooltip", [ue, _] = O(R$1), $$1 = (e2) => {
  const {
    __scopeTooltip: o2,
    children: t2,
    open: r,
    defaultOpen: n2,
    onOpenChange: l2,
    disableHoverableContent: i2,
    delayDuration: v2
  } = e2, s2 = k(R$1, e2.__scopeTooltip), d2 = D(o2), [c2, f2] = reactExports.useState(null), m2 = c$1(), p2 = reactExports.useRef(0), h2 = i2 ?? s2.disableHoverableContent, g2 = v2 ?? s2.delayDuration, T2 = reactExports.useRef(false), [x2, y2] = S$1({
    prop: r,
    defaultProp: n2 ?? false,
    onChange: (N2) => {
      N2 ? (s2.onOpen(), document.dispatchEvent(new CustomEvent(A))) : s2.onClose(), l2 == null ? void 0 : l2(N2);
    },
    caller: R$1
  }), w2 = reactExports.useMemo(() => x2 ? T2.current ? "delayed-open" : "instant-open" : "closed", [x2]), P2 = reactExports.useCallback(() => {
    window.clearTimeout(p2.current), p2.current = 0, T2.current = false, y2(true);
  }, [y2]), E2 = reactExports.useCallback(() => {
    window.clearTimeout(p2.current), p2.current = 0, y2(false);
  }, [y2]), I2 = reactExports.useCallback(() => {
    window.clearTimeout(p2.current), p2.current = window.setTimeout(() => {
      T2.current = true, y2(true), p2.current = 0;
    }, g2);
  }, [g2, y2]);
  return reactExports.useEffect(() => () => {
    p2.current && (window.clearTimeout(p2.current), p2.current = 0);
  }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(eo, { ...d2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ue,
    {
      scope: o2,
      contentId: m2,
      open: x2,
      stateAttribute: w2,
      trigger: c2,
      onTriggerChange: f2,
      onTriggerEnter: reactExports.useCallback(() => {
        s2.isOpenDelayedRef.current ? I2() : P2();
      }, [s2.isOpenDelayedRef, I2, P2]),
      onTriggerLeave: reactExports.useCallback(() => {
        h2 ? E2() : (window.clearTimeout(p2.current), p2.current = 0);
      }, [E2, h2]),
      onOpen: P2,
      onClose: E2,
      disableHoverableContent: h2,
      children: t2
    }
  ) });
};
$$1.displayName = R$1;
var L = "TooltipTrigger", B = reactExports.forwardRef(
  (e2, o2) => {
    const { __scopeTooltip: t2, ...r } = e2, n2 = _(L, t2), l2 = k(L, t2), i2 = D(t2), v2 = reactExports.useRef(null), s2 = x$5(o2, v2, n2.onTriggerChange), d2 = reactExports.useRef(false), c2 = reactExports.useRef(false), f2 = reactExports.useCallback(() => d2.current = false, []);
    return reactExports.useEffect(() => () => document.removeEventListener("pointerup", f2), [f2]), /* @__PURE__ */ jsxRuntimeExports.jsx(no$1, { asChild: true, ...i2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      h$3.button,
      {
        "aria-describedby": n2.open ? n2.contentId : void 0,
        "data-state": n2.stateAttribute,
        ...r,
        ref: s2,
        onPointerMove: w$2(e2.onPointerMove, (m2) => {
          m2.pointerType !== "touch" && !c2.current && !l2.isPointerInTransitRef.current && (n2.onTriggerEnter(), c2.current = true);
        }),
        onPointerLeave: w$2(e2.onPointerLeave, () => {
          n2.onTriggerLeave(), c2.current = false;
        }),
        onPointerDown: w$2(e2.onPointerDown, () => {
          n2.open && n2.onClose(), d2.current = true, document.addEventListener("pointerup", f2, { once: true });
        }),
        onFocus: w$2(e2.onFocus, () => {
          d2.current || n2.onOpen();
        }),
        onBlur: w$2(e2.onBlur, n2.onClose),
        onClick: w$2(e2.onClick, n2.onClose)
      }
    ) });
  }
);
B.displayName = L;
var M = "TooltipPortal", [pe$1, de] = O(M, {
  forceMount: void 0
}), U = (e2) => {
  const { __scopeTooltip: o2, forceMount: t2, children: r, container: n2 } = e2, l2 = _(M, o2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(pe$1, { scope: o2, forceMount: t2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(E, { present: t2 || l2.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(V$3, { asChild: true, container: n2, children: r }) }) });
};
U.displayName = M;
var b$1 = "TooltipContent", V = reactExports.forwardRef(
  (e2, o2) => {
    const t2 = de(b$1, e2.__scopeTooltip), { forceMount: r = t2.forceMount, side: n2 = "top", ...l2 } = e2, i2 = _(b$1, e2.__scopeTooltip);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(E, { present: r || i2.open, children: i2.disableHoverableContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(Y, { side: n2, ...l2, ref: o2 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(fe, { side: n2, ...l2, ref: o2 }) });
  }
), fe = reactExports.forwardRef((e2, o2) => {
  const t2 = _(b$1, e2.__scopeTooltip), r = k(b$1, e2.__scopeTooltip), n2 = reactExports.useRef(null), l2 = x$5(o2, n2), [i2, v2] = reactExports.useState(null), { trigger: s2, onClose: d2 } = t2, c2 = n2.current, { onPointerInTransitChange: f2 } = r, m2 = reactExports.useCallback(() => {
    v2(null), f2(false);
  }, [f2]), p2 = reactExports.useCallback(
    (h2, g2) => {
      const T2 = h2.currentTarget, x2 = { x: h2.clientX, y: h2.clientY }, y2 = Te(x2, T2.getBoundingClientRect()), w2 = ge(x2, y2), P2 = ye(g2.getBoundingClientRect()), E2 = Ce([...w2, ...P2]);
      v2(E2), f2(true);
    },
    [f2]
  );
  return reactExports.useEffect(() => () => m2(), [m2]), reactExports.useEffect(() => {
    if (s2 && c2) {
      const h2 = (T2) => p2(T2, c2), g2 = (T2) => p2(T2, s2);
      return s2.addEventListener("pointerleave", h2), c2.addEventListener("pointerleave", g2), () => {
        s2.removeEventListener("pointerleave", h2), c2.removeEventListener("pointerleave", g2);
      };
    }
  }, [s2, c2, p2, m2]), reactExports.useEffect(() => {
    if (i2) {
      const h2 = (g2) => {
        const T2 = g2.target, x2 = { x: g2.clientX, y: g2.clientY }, y2 = (s2 == null ? void 0 : s2.contains(T2)) || (c2 == null ? void 0 : c2.contains(T2)), w2 = !xe(x2, i2);
        y2 ? m2() : w2 && (m2(), d2());
      };
      return document.addEventListener("pointermove", h2), () => document.removeEventListener("pointermove", h2);
    }
  }, [s2, c2, i2, d2, m2]), /* @__PURE__ */ jsxRuntimeExports.jsx(Y, { ...e2, ref: l2 });
}), [ve, me] = O(R$1, { isInside: false }), he = /* @__PURE__ */ V$4("TooltipContent"), Y = reactExports.forwardRef(
  (e2, o2) => {
    const {
      __scopeTooltip: t2,
      children: r,
      "aria-label": n2,
      onEscapeKeyDown: l2,
      onPointerDownOutside: i2,
      ...v2
    } = e2, s2 = _(b$1, t2), d2 = D(t2), { onClose: c2 } = s2;
    return reactExports.useEffect(() => (document.addEventListener(A, c2), () => document.removeEventListener(A, c2)), [c2]), reactExports.useEffect(() => {
      if (s2.trigger) {
        const f2 = (m2) => {
          var _a;
          ((_a = m2.target) == null ? void 0 : _a.contains(s2.trigger)) && c2();
        };
        return window.addEventListener("scroll", f2, { capture: true }), () => window.removeEventListener("scroll", f2, { capture: true });
      }
    }, [s2.trigger, c2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      X$5,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown: l2,
        onPointerDownOutside: i2,
        onFocusOutside: (f2) => f2.preventDefault(),
        onDismiss: c2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          oo$1,
          {
            "data-state": s2.stateAttribute,
            ...d2,
            ...v2,
            ref: o2,
            style: {
              ...v2.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(he, { children: r }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ve, { scope: t2, isInside: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$1, { id: s2.contentId, role: "tooltip", children: n2 || r }) })
            ]
          }
        )
      }
    );
  }
);
V.displayName = b$1;
var q$1 = "TooltipArrow", X$1 = reactExports.forwardRef(
  (e2, o2) => {
    const { __scopeTooltip: t2, ...r } = e2, n2 = D(t2);
    return me(
      q$1,
      t2
    ).isInside ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(ro$1, { ...n2, ...r, ref: o2 });
  }
);
X$1.displayName = q$1;
function Te(e2, o2) {
  const t2 = Math.abs(o2.top - e2.y), r = Math.abs(o2.bottom - e2.y), n2 = Math.abs(o2.right - e2.x), l2 = Math.abs(o2.left - e2.x);
  switch (Math.min(t2, r, n2, l2)) {
    case l2:
      return "left";
    case n2:
      return "right";
    case t2:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ge(e2, o2, t2 = 5) {
  const r = [];
  switch (o2) {
    case "top":
      r.push(
        { x: e2.x - t2, y: e2.y + t2 },
        { x: e2.x + t2, y: e2.y + t2 }
      );
      break;
    case "bottom":
      r.push(
        { x: e2.x - t2, y: e2.y - t2 },
        { x: e2.x + t2, y: e2.y - t2 }
      );
      break;
    case "left":
      r.push(
        { x: e2.x + t2, y: e2.y - t2 },
        { x: e2.x + t2, y: e2.y + t2 }
      );
      break;
    case "right":
      r.push(
        { x: e2.x - t2, y: e2.y - t2 },
        { x: e2.x - t2, y: e2.y + t2 }
      );
      break;
  }
  return r;
}
function ye(e2) {
  const { top: o2, right: t2, bottom: r, left: n2 } = e2;
  return [
    { x: n2, y: o2 },
    { x: t2, y: o2 },
    { x: t2, y: r },
    { x: n2, y: r }
  ];
}
function xe(e2, o2) {
  const { x: t2, y: r } = e2;
  let n2 = false;
  for (let l2 = 0, i2 = o2.length - 1; l2 < o2.length; i2 = l2++) {
    const v2 = o2[l2], s2 = o2[i2], d2 = v2.x, c2 = v2.y, f2 = s2.x, m2 = s2.y;
    c2 > r != m2 > r && t2 < (f2 - d2) * (r - c2) / (m2 - c2) + d2 && (n2 = !n2);
  }
  return n2;
}
function Ce(e2) {
  const o2 = e2.slice();
  return o2.sort((t2, r) => t2.x < r.x ? -1 : t2.x > r.x ? 1 : t2.y < r.y ? -1 : t2.y > r.y ? 1 : 0), be$1(o2);
}
function be$1(e2) {
  if (e2.length <= 1) return e2.slice();
  const o2 = [];
  for (let r = 0; r < e2.length; r++) {
    const n2 = e2[r];
    for (; o2.length >= 2; ) {
      const l2 = o2[o2.length - 1], i2 = o2[o2.length - 2];
      if ((l2.x - i2.x) * (n2.y - i2.y) >= (l2.y - i2.y) * (n2.x - i2.x)) o2.pop();
      else break;
    }
    o2.push(n2);
  }
  o2.pop();
  const t2 = [];
  for (let r = e2.length - 1; r >= 0; r--) {
    const n2 = e2[r];
    for (; t2.length >= 2; ) {
      const l2 = t2[t2.length - 1], i2 = t2[t2.length - 2];
      if ((l2.x - i2.x) * (n2.y - i2.y) >= (l2.y - i2.y) * (n2.x - i2.x)) t2.pop();
      else break;
    }
    t2.push(n2);
  }
  return t2.pop(), o2.length === 1 && t2.length === 1 && o2[0].x === t2[0].x && o2[0].y === t2[0].y ? o2 : o2.concat(t2);
}
var we = z, Pe = $$1, Ee = B, Re = U, _e = V, Oe = X$1;
function De({
  delayDuration: e2 = 0,
  ...o2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    we,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e2,
      ...o2
    }
  );
}
function $e({
  ...e2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(De, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pe, { "data-slot": "tooltip", ...e2 }) });
}
function Be({
  ...e2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ee, { "data-slot": "tooltip-trigger", ...e2 });
}
function Ue({
  className: e2,
  sideOffset: o2 = 0,
  children: t2,
  ...r
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Re, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    _e,
    {
      "data-slot": "tooltip-content",
      sideOffset: o2,
      className: We$3(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e2
      ),
      ...r,
      children: [
        t2,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Oe, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
function $() {
  return typeof window > "u" ? false : window.innerWidth < 1024;
}
function be(x2) {
  return typeof window > "u" ? x2 : $() ? false : x2;
}
const X = reactExports.createContext({
  scheme: "sidebar",
  tone: "subtle",
  size: "lg",
  sidebarExpanded: true,
  setSidebarExpanded: () => {
  },
  isMobile: false
}), pe = j$5(
  "min-h-screen flex bg-background",
  {
    variants: {
      tone: {
        clean: "",
        subtle: "",
        brand: "",
        contrast: ""
      }
    },
    defaultVariants: {
      tone: "subtle"
    }
  }
), q = reactExports.forwardRef(({
  scheme: x2 = "sidebar",
  tone: k2 = "subtle",
  size: h2 = "lg",
  position: g2 = "relative",
  defaultSidebarOpen: m2 = true,
  className: v2,
  children: N2
}, M2) => {
  const [d2, n2] = reactExports.useState($), [w2, t2] = reactExports.useState(
    () => be(m2)
  );
  reactExports.useLayoutEffect(() => {
    const l2 = () => {
      const a2 = window.innerWidth < 1024, C2 = d2;
      n2(a2), a2 && !C2 && w2 ? t2(false) : !a2 && C2 && t2(m2);
    };
    return l2(), window.addEventListener("resize", l2), () => window.removeEventListener("resize", l2);
  }, [d2, w2, m2]), reactExports.useEffect(() => (d2 && w2 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
    document.body.style.overflow = "unset";
  }), [d2, w2]);
  const u2 = reactExports.Children.toArray(N2), y2 = u2.find(
    (l2) => reactExports.isValidElement(l2) && l2.type === I
  ), b2 = u2.find(
    (l2) => reactExports.isValidElement(l2) && l2.type === R
  ), T2 = u2.find(
    (l2) => reactExports.isValidElement(l2) && l2.type === H
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(X.Provider, { value: {
    scheme: x2,
    tone: k2,
    size: h2,
    sidebarExpanded: w2,
    setSidebarExpanded: t2,
    isMobile: d2
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: M2,
      className: We$3(pe({ tone: k2 }), v2),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(
          "flex-shrink-0 transition-all duration-200 ease-out overflow-hidden",
          // Desktop: smooth width transition
          !d2 && w2 && (h2 === "sm" ? "w-48" : h2 === "md" ? "w-56" : h2 === "lg" ? "w-64" : h2 === "xl" ? "w-72" : "w-80"),
          !d2 && !w2 && "w-0",
          // Mobile: don't affect layout
          d2 && "w-0",
          g2 === "sticky" && d2 && "top-0 max-h-screen",
          g2 === "sticky" && !d2 && "sticky top-0 max-h-screen"
        ), children: y2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 transition-all duration-200 ease-out", children: [
          b2,
          T2
        ] })
      ]
    }
  ) });
});
q.displayName = "AdminLayout";
const I = reactExports.forwardRef(({
  tone: x2,
  navigation: k2 = [],
  currentPath: h2 = "",
  onNavigate: g2,
  logo: m2,
  position: v2,
  footer: N2,
  className: M2
}, d2) => {
  const { scheme: n2, tone: w2, size: t2, sidebarExpanded: u2, setSidebarExpanded: y2, isMobile: b2 } = P(), [T2, l2] = reactExports.useState(/* @__PURE__ */ new Set()), [a2, C2] = reactExports.useState(false), o2 = x2 || w2, E2 = n2 === "compact", p2 = !E2 || a2, G2 = () => {
    E2 && C2(!a2);
  }, J2 = (r) => {
    const c2 = new Set(T2);
    c2.has(r) ? c2.delete(r) : c2.add(r), l2(c2);
  }, Q2 = (r, c2 = false) => {
    const z2 = c2 ? "w-[92%] flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]" : "w-full flex items-center group text-left font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02]", S2 = c2 ? p2 ? "ml-4 px-3 py-2" : "px-2 py-2" : p2 ? "px-3 py-2.5" : "px-2 py-2.5 justify-center";
    let f2 = "";
    switch (o2) {
      case "clean":
        f2 = r ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
        break;
      case "subtle":
        f2 = r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/60";
        break;
      case "brand":
        f2 = r ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10";
        break;
      case "contrast":
        f2 = r ? "bg-muted/20 dark:bg-muted/20 text-white shadow-sm" : "text-white hover:bg-muted/20";
        break;
      default:
        f2 = r ? "bg-muted/10 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    }
    return We$3(z2, S2, f2);
  }, D2 = ({ item: r, isSubmenu: c2 = false }) => {
    const z2 = !c2 && r.items && r.items.length > 0, S2 = T2.has(r.key), f2 = r.href ? h2 === r.href : !!r.isActive, F2 = /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          if (E2 && !a2) {
            C2(true);
            return;
          }
          z2 ? J2(r.key) : r.href && g2 ? (g2(r.href, r), b2 && y2(false)) : r.onClick && (r.onClick(), b2 && y2(false));
        },
        className: Q2(f2, c2),
        children: [
          !c2 && r.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: We$3(
            "flex-shrink-0",
            p2 ? "h-4 w-4 mr-3" : "h-5 w-5"
          ) }),
          p2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate text-left", children: r.label }),
            r.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
              b$3,
              {
                variant: f2 ? "secondary" : "outline",
                className: We$3(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  o2 === "brand" && !f2 && "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20",
                  o2 === "brand" && f2 && "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30",
                  o2 === "contrast" && !f2 && "bg-zinc-700 text-zinc-300 border-zinc-600",
                  o2 === "contrast" && f2 && "bg-zinc-600 text-zinc-100 border-zinc-500"
                ),
                children: r.badge
              }
            ),
            z2 && /* @__PURE__ */ jsxRuntimeExports.jsx(h$1, { className: We$3(
              "h-4 w-4 flex-shrink-0 transition-transform duration-200",
              S2 && "rotate-90"
            ) })
          ] })
        ]
      }
    );
    return E2 && !a2 && !c2 && r.icon ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(De, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { delayDuration: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Be, { asChild: true, children: F2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            side: "right",
            className: "bg-white text-black border border-gray-200 shadow-md",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: r.label })
          }
        )
      ] }) }),
      z2 && S2 && p2 && r.items && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden transition-all duration-300 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 pb-2", children: r.items.map((A2) => /* @__PURE__ */ jsxRuntimeExports.jsx(D2, { item: A2, isSubmenu: true }, A2.key)) }) })
    ] }, r.key) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      F2,
      z2 && S2 && p2 && r.items && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden transition-all duration-400 ease-out mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 pb-2 animate-in slide-in-from-top-2", children: r.items.map((A2, U2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "transition-all duration-300 ease-out",
          style: { transitionDelay: `${U2 * 75}ms` },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(D2, { item: A2, isSubmenu: true })
        },
        A2.key
      )) }) })
    ] }, r.key);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    b2 && u2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden",
        onClick: () => y2(false),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "aside",
      {
        ref: d2,
        className: We$3(
          "border-r flex flex-col bg-background overflow-hidden",
          // ✅ RESTORED: Original smooth transitions
          "transition-all duration-200 ease-out",
          // ✅ FIXED: Proper z-index layering for mobile
          // Mobile: Higher z-index than header (z-[70] > z-[10])
          b2 ? "fixed left-0 top-0 z-[70] h-full" : "relative h-screen",
          // Mobile: slide animation
          b2 && (u2 ? "translate-x-0" : "-translate-x-full"),
          // Desktop: always visible but container controls width
          !b2 && "translate-x-0",
          // Fixed widths for consistent animation
          n2 === "sidebar" && t2 === "sm" && "w-48",
          n2 === "sidebar" && t2 === "md" && "w-56",
          n2 === "sidebar" && t2 === "lg" && "w-64",
          n2 === "sidebar" && t2 === "xl" && "w-72",
          n2 === "sidebar" && t2 === "full" && "w-80",
          n2 === "compact" && !a2 && t2 === "sm" && "w-12",
          n2 === "compact" && !a2 && t2 === "md" && "w-14",
          n2 === "compact" && !a2 && t2 === "lg" && "w-16",
          n2 === "compact" && !a2 && t2 === "xl" && "w-18",
          n2 === "compact" && !a2 && t2 === "full" && "w-20",
          n2 === "compact" && a2 && t2 === "sm" && "w-48",
          n2 === "compact" && a2 && t2 === "md" && "w-56",
          n2 === "compact" && a2 && t2 === "lg" && "w-64",
          n2 === "compact" && a2 && t2 === "xl" && "w-72",
          n2 === "compact" && a2 && t2 === "full" && "w-80",
          // Tone colors
          o2 === "clean" && "bg-background/90 backdrop-blur-sm border-border/40 text-foreground",
          o2 === "subtle" && "bg-muted/90 backdrop-blur-sm border-border/30 text-foreground",
          o2 === "brand" && "bg-primary border-primary-foreground/20 text-primary-foreground",
          o2 === "contrast" && "bg-zinc-900 border-zinc-700/40 text-zinc-100",
          M2
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(
            "flex items-center shadow-sm flex-shrink-0 border-b transition-all duration-300 ease-out",
            o2 === "clean" && "border-border/40",
            o2 === "subtle" && "border-border/30",
            o2 === "brand" && "border-primary-foreground/20",
            o2 === "contrast" && "border-zinc-700/40",
            p2 ? "justify-between h-16 px-4" : "justify-center h-16 px-2"
          ), children: p2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            m2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(
              "flex-shrink-0",
              o2 === "brand" && "[&_*]:text-primary-foreground",
              o2 === "contrast" && "[&_*]:text-zinc-100"
            ), children: m2 }),
            (b2 || E2 && a2) && /* @__PURE__ */ jsxRuntimeExports.jsx(
              b$4,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  b2 ? y2(false) : E2 && C2(false);
                },
                className: "flex-shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(c$4, { className: "h-4 w-4" })
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            b$4,
            {
              variant: "ghost",
              size: "icon",
              onClick: G2,
              className: "flex-shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$4, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: We$3(
            "space-y-1 transition-all duration-300 ease-out",
            p2 ? "p-4" : "p-2"
          ), children: k2.map((r, c2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: We$3(
                "transition-all duration-300 ease-out",
                p2 ? "opacity-100 translate-x-0" : "opacity-100"
              ),
              style: {
                transitionDelay: p2 ? `${c2 * 50}ms` : "0ms"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(D2, { item: r })
            },
            r.key
          )) }) }),
          N2 && p2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(R$6, { className: We$3(
              o2 === "clean" && "bg-border/40",
              o2 === "subtle" && "bg-border/30",
              o2 === "brand" && "bg-primary-foreground/20",
              o2 === "contrast" && "bg-zinc-700/40"
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-4", children: N2 })
          ] })
        ] })
      }
    )
  ] });
});
I.displayName = "AdminSidebar";
const R = reactExports.forwardRef(({
  tone: x2,
  size: k2,
  title: h$12,
  position: g2 = "sticky",
  breadcrumbs: m2 = [],
  onBreadcrumbNavigate: v2,
  actions: N2,
  className: M2
}, d2) => {
  const { sidebarExpanded: n2, setSidebarExpanded: w2, isMobile: t2 } = P();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      ref: d2,
      className: We$3(
        "w-full shadow-sm bg-background/95 backdrop-blur-md text-foreground flex-shrink-0 border-b border-border/50",
        "transition-all duration-200 ease-out",
        // ✅ FIXED: Sticky on desktop, lower z-index for mobile sidebar layering
        g2 === "sticky" && "sticky top-0",
        g2 === "fixed" && "fixed top-0 left-0 right-0",
        // Always use lower z-index so mobile sidebar appears above
        "z-[10]",
        g2 === "relative" && "relative",
        M2
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 lg:px-6 h-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: We$3(
                "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300 ease-out",
                "transform hover:scale-105 active:scale-95",
                // Always show on mobile
                t2 && "block",
                // Show on desktop for toggle functionality  
                !t2 && "block"
              ),
              onClick: () => w2(!n2),
              "aria-label": n2 ? "Close sidebar" : "Open sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(n$4, { className: We$3(
                "h-5 w-5 transition-transform duration-300 ease-out",
                n2 && !t2 && "rotate-180"
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            h$12 && !m2.length && /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold text-foreground truncate", children: h$12 }),
            m2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(f, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(g$2, { children: m2.map((u2, y2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(x$2, { children: u2.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                h,
                {
                  asChild: !!v2,
                  ...v2 ? {
                    onClick: (b2) => {
                      b2.preventDefault(), v2(u2.href);
                    }
                  } : { href: u2.href },
                  children: v2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", children: u2.label }) : u2.label
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(N$3, { children: u2.label }) }),
              y2 < m2.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(B$2, {})
            ] }, y2)) }) })
          ] })
        ] }),
        N2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: N2 })
      ] })
    }
  );
});
R.displayName = "AdminHeader";
const H = reactExports.forwardRef(({
  tone: x2,
  size: k2,
  className: h2,
  children: g2
}, m2) => {
  const { isMobile: v2 } = P();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "main",
    {
      ref: m2,
      className: We$3(
        "flex-1 min-w-0 overflow-auto",
        h2
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full mx-auto", children: g2 }) })
    }
  );
});
H.displayName = "AdminContent";
const P = () => {
  const x2 = reactExports.useContext(X);
  if (!x2)
    throw new Error("useAdmin must be used within an AdminLayout component");
  return x2;
}, Le = Object.assign(q, {
  Sidebar: I,
  Header: R,
  Content: H
});
const DashboardPage = () => {
  const navigate = useNavigate();
  const adminNavigation = [
    { key: "home", label: "Home", href: "/", icon: House },
    { key: "components", label: "Components", href: "/components", icon: PanelsTopLeft },
    { key: "themes", label: "Themes", href: "/themes", icon: Palette },
    {
      key: "pages",
      label: "Pages",
      icon: BookOpen,
      items: [
        { key: "login", label: "Login", href: "/login" },
        { key: "dashboard", label: "Dashboard", href: "/dashboard" },
        { key: "error", label: "Error Page", href: "/error" }
      ]
    },
    { key: "about", label: "About", href: "/about", icon: BookOpen },
    { key: "contact", label: "Contact", href: "/contact", icon: Mail }
  ];
  const handleNavigation = (href) => {
    navigate(href);
  };
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      trend: "up",
      icon: Users,
      description: "from last month"
    },
    {
      title: "Conversion Rate",
      value: "12.5%",
      change: "+19%",
      trend: "up",
      icon: TrendingUp,
      description: "from last month"
    },
    {
      title: "Bounce Rate",
      value: "24.8%",
      change: "-4.3%",
      trend: "down",
      icon: Activity,
      description: "from last month"
    }
  ];
  const recentActivity = [
    { id: 1, user: "Alice Johnson", action: "Created new project", time: "2 minutes ago", status: "success" },
    { id: 2, user: "Bob Smith", action: "Updated user profile", time: "5 minutes ago", status: "info" },
    { id: 3, user: "Carol Davis", action: "Deleted 3 items", time: "10 minutes ago", status: "warning" },
    { id: 4, user: "David Wilson", action: "Failed login attempt", time: "15 minutes ago", status: "error" }
  ];
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-100";
      case "info":
        return "text-blue-600 bg-blue-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "error":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Le, { scheme: "sidebar", tone: "brand", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Le.Sidebar,
      {
        navigation: adminNavigation,
        currentPath: "/dashboard",
        onNavigate: handleNavigation,
        logo: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "Admin Panel" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Le.Header,
      {
        title: "Dashboard",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-2" }),
            "Export"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 mr-2" }),
            "Filter"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { size: "sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 mr-2" }),
            "View All"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Welcome back! Here's what's happening with your projects." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => {
        const Icon2 = stat.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { className: "text-sm font-medium", children: stat.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1 text-xs text-muted-foreground", children: [
              stat.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-3 w-3 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: stat.trend === "up" ? "text-green-500" : "text-red-500", children: stat.change }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: stat.description })
            ] })
          ] })
        ] }, index);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Revenue Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Monthly revenue for the last 6 months" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[200px] bg-muted/30 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-12 w-12 text-muted-foreground mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Chart Component Placeholder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Integrate with chart libraries like Chart.js or Recharts" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "User Growth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "New user registrations over time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(u, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[200px] bg-muted/30 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-12 w-12 text-muted-foreground mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Growth Chart Placeholder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Shows user acquisition trends" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Recent Activity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Latest user actions and system events" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: recentActivity.map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg bg-muted/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${getStatusColor(activity.status)}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: activity.user }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: activity.action })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: activity.time })
            ] }, activity.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { variant: "outline", size: "sm", children: "View All Activity" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(n, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(s, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c, { children: "Quick Actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(i, { children: "Common dashboard tasks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(u, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { className: "w-full justify-start", variant: "outline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mr-2 h-4 w-4" }),
              "Manage Users"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { className: "w-full justify-start", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/components", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "mr-2 h-4 w-4" }),
              "View Reports"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { className: "w-full justify-start", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/themes", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "mr-2 h-4 w-4" }),
              "System Status"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { className: "w-full justify-start", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "mr-2 h-4 w-4" }),
              "Billing & Plans"
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(n, { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(u, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Dashboard Demo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This dashboard showcases UIKit components in a real-world layout with statistics, charts, and activity feeds." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Responsive grid layout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Interactive statistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Activity tracking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "• Chart placeholders" })
        ] })
      ] }) }) })
    ] }) })
  ] });
};
const p = j$5(
  "",
  {
    variants: {
      scheme: {
        simple: "min-h-screen flex items-center justify-center p-4 flex-col",
        // Simple centered layout
        card: "min-h-screen flex items-center justify-center p-4 flex-col",
        // Card-based layout
        empty: ""
        // No layout styling at all - complete freedom
      },
      tone: {
        clean: "bg-background",
        subtle: "bg-muted/20",
        brand: "bg-primary/5",
        contrast: "bg-zinc-400"
      }
    },
    defaultVariants: {
      scheme: "simple",
      tone: "clean"
    },
    compoundVariants: [
      {
        scheme: "empty",
        class: ""
        // Override any tone styles for empty scheme
      }
    ]
  }
), d = j$5(
  "",
  {
    variants: {
      scheme: {
        simple: "w-full space-y-6 text-center",
        // No container styling
        card: "w-full space-y-6 text-center bg-card border border-border rounded-lg shadow-lg p-8",
        // Card styling
        empty: ""
        // No content container styling
      },
      size: {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-6xl"
      }
    },
    defaultVariants: {
      scheme: "simple",
      size: "lg"
    },
    compoundVariants: [
      {
        scheme: "empty",
        class: ""
        // Override any size styles for empty scheme
      }
    ]
  }
), m = reactExports.forwardRef(({
  scheme: e2 = "simple",
  tone: c2 = "clean",
  size: o2 = "lg",
  className: s2,
  children: n2
}, r) => e2 === "empty" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: r, className: We$3(s2), children: n2 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: r, className: We$3(p({ scheme: e2, tone: c2 }), s2), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: We$3(d({ scheme: e2, size: o2 })), children: n2 }) }));
m.displayName = "BlankLayout";
const b = m;
const ErrorPage = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(b, { scheme: "simple", tone: "subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold text-muted-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(b$4, { onClick: () => navigate(-1), variant: "outline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Go Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(b$4, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mr-2 h-4 w-4" }),
        "Go Home"
      ] }) })
    ] })
  ] }) }) });
};
const routes = [
  { path: "/", component: HomePage },
  { path: "/components", component: ComponentsPage },
  { path: "/themes", component: ThemesPage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/login", component: LoginPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/error", component: ErrorPage }
];
const AppRouter = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
  routes.map(({ path, component: Component }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {}) }, path)),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorPage, {}) })
] });
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading page..." })
] }) });
const LayoutWrapper = () => {
  const location = useLocation();
  if (location.pathname === "/login") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) });
  }
  if (location.pathname === "/dashboard" || location.pathname.startsWith("/dashboard")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) });
  }
  if (location.pathname === "/error" || location.pathname.startsWith("/error")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(le$1, { scheme: "default", tone: "clean", size: "xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(le$1.Content, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(H$8, { theme: "elegant", mode: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutWrapper, {}) }) });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-C6pIKnC0.js.map
