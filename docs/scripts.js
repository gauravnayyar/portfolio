"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof2 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
};!function (e) {
  if ("object" === ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).GitHubCalendar = e();
  }
}(function () {
  return function o(s, u, i) {
    function c(t, e) {
      if (!u[t]) {
        if (!s[t]) {
          var r = "function" == typeof require && require;if (!e && r) return r(t, !0);if (l) return l(t, !0);var n = new Error("Cannot find module '" + t + "'");throw n.code = "MODULE_NOT_FOUND", n;
        }var a = u[t] = { exports: {} };s[t][0].call(a.exports, function (e) {
          return c(s[t][1][e] || e);
        }, a, a.exports, o, s, u, i);
      }return u[t].exports;
    }for (var l = "function" == typeof require && require, e = 0; e < i.length; e++) {
      c(i[e]);
    }return c;
  }({ 1: [function (e, t, r) {
      var h = e("github-calendar-parser"),
          y = e("elly"),
          v = e("add-subtract-date"),
          M = e("formatoid"),
          x = "MMM D, YYYY",
          _ = "MMMM D",
          S = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];function k(e) {
        return e + " " + (1 === e ? "day" : "days");
      }t.exports = function (b, e, m) {
        b = y(b), (m = m || {}).summary_text = m.summary_text || 'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/' + e + '" target="blank">@' + e + "</a>", m.cache = 1e3 * (m.cache || 86400), !1 === m.global_stats && (b.style.minHeight = "175px");var r = { content: "gh_calendar_content." + e, expire_at: "gh_calendar_expire." + e };m.proxy = m.proxy || function (e) {
          return fetch("https://api.bloggify.net/gh-calendar/?username=" + e).then(function (e) {
            return e.text();
          });
        }, m.getCalendar = m.getCalendar || function (e) {
          if (m.cache && Date.now() < +localStorage.getItem(r.expire_at)) {
            var t = localStorage.getItem(r.content);if (t) return Promise.resolve(t);
          }return m.proxy(e).then(function (e) {
            return m.cache && (localStorage.setItem(r.content, e), localStorage.setItem(r.expire_at, Date.now() + m.cache)), e;
          });
        };return function g() {
          return m.getCalendar(e).then(function (e) {
            var t = document.createElement("div");t.innerHTML = e;var r,
                u,
                n = t.querySelector(".js-yearly-contributions");if (y(".position-relative h2", n).remove(), n.querySelector("include-fragment")) setTimeout(g, 500);else {
              if (!0 === m.responsive) {
                var a = n.querySelector("svg.js-calendar-graph-svg"),
                    o = a.getAttribute("width"),
                    s = a.getAttribute("height");a.removeAttribute("height"), a.setAttribute("width", "100%"), a.setAttribute("viewBox", "0 0 " + o + " " + s);
              }if (!1 !== m.global_stats) {
                var i = h(y("svg", n).outerHTML),
                    c = i.current_streak ? M(i.current_streak_range[0], _) + " &ndash; " + M(i.current_streak_range[1], _) : i.last_contributed ? "Last contributed in " + M(i.last_contributed, _) + "." : "Rock - Hard Place",
                    l = i.longest_streak ? M(i.longest_streak_range[0], _) + " &ndash; " + M(i.longest_streak_range[1], _) : i.last_contributed ? "Last contributed in " + M(i.last_contributed, _) + "." : "Rock - Hard Place",
                    d = y("<div>", { class: "contrib-column contrib-column-first table-column", html: '<span class="text-muted">Contributions in the last year</span>\n                               <span class="contrib-number">' + i.last_year + ' total</span>\n                               <span class="text-muted">' + M(v.add(v.subtract(new Date(), 1, "year"), 1, "day"), x) + " &ndash; " + M(new Date(), x) + "</span>" }),
                    f = y("<div>", { class: "contrib-column table-column", html: '<span class="text-muted">Longest streak</span>\n                               <span class="contrib-number">' + k(i.longest_streak) + '</span>\n                               <span class="text-muted">' + l + "</span>" }),
                    p = y("<div>", { class: "contrib-column table-column", html: '<span class="text-muted">Current streak</span>\n                               <span class="contrib-number">' + k(i.current_streak) + '</span>\n                               <span class="text-muted">' + c + "</span>" });n.appendChild(d), n.appendChild(f), n.appendChild(p);
              }b.innerHTML = n.innerHTML, !0 === m.tooltips && (r = b, (u = document.createElement("div")).classList.add("day-tooltip"), r.appendChild(u), r.querySelectorAll("rect.day").forEach(function (e) {
                e.addEventListener("mouseenter", function (e) {
                  var t = e.target.getAttribute("data-count");"0" === t ? t = "No contributions" : "1" === t ? t = "1 contribution" : t += " contributions";var r = new Date(e.target.getAttribute("data-date")),
                      n = S[r.getUTCMonth()] + " " + r.getUTCDate() + ", " + r.getUTCFullYear();u.innerHTML = "<strong>" + t + "</strong> on " + n, u.classList.add("is-visible");var a = e.target.getBoundingClientRect(),
                      o = a.left + window.pageXOffset - u.offsetWidth / 2 + a.width / 2,
                      s = a.bottom + window.pageYOffset - u.offsetHeight - 2 * a.height;u.style.top = s + "px", u.style.left = o + "px";
                }), e.addEventListener("mouseleave", function () {
                  u.classList.remove("is-visible");
                });
              }));
            }
          }).catch(function (e) {
            return console.error(e);
          });
        }();
      };
    }, { "add-subtract-date": 2, elly: 4, formatoid: 6, "github-calendar-parser": 8 }], 2: [function (e, t, r) {
      function n(a) {
        return function e(t, r, n) {
          switch (r *= a, n) {case "years":case "year":
              t.setFullYear(t.getFullYear() + r);break;case "months":case "month":
              t.setMonth(t.getMonth() + r);break;case "weeks":case "week":
              return e(t, 7 * r, "days");case "days":case "day":
              t.setDate(t.getDate() + r);break;case "hours":case "hour":
              t.setHours(t.getHours() + r);break;case "minutes":case "minute":
              t.setMinutes(t.getMinutes() + r);break;case "seconds":case "second":
              t.setSeconds(t.getSeconds() + r);break;case "milliseconds":case "millisecond":
              t.setMilliseconds(t.getMilliseconds() + r);break;default:
              throw new Error("Invalid range: " + n);}return t;
        };
      }t.exports = { add: n(1), subtract: n(-1) };
    }, {}], 3: [function (e, t, r) {
      t.exports.en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], t.exports.en.abbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], t.exports.en.short = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], t.exports.fr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], t.exports.fr.abbr = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"], t.exports.fr.short = ["di", "lu", "ma", "me", "je", "ve", "sa"], t.exports.es = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"], t.exports.es.abbr = ["dom", "lun", "mar", "mir", "jue", "vie", "sab"], t.exports.es.short = ["do", "lu", "ma", "mi", "ju", "vi", "sa"], t.exports.it = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"], t.exports.it.abbr = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], t.exports.it.short = ["D", "L", "Ma", "Me", "G", "V", "S"], t.exports = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], t.exports.abbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], t.exports.short = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    }, {}], 4: [function (e, t, r) {
      var n = e("iterate-object"),
          a = e("sliced");function o(r, e) {
        return "string" == typeof r ? "<" === r.charAt(0) ? (r = document.createElement(r.slice(1, -1)), n(e || {}, function (e, t) {
          switch (t) {case "text":
              return void (r.textContent = e);case "html":
              return void (r.innerHTML = e);}r.setAttribute(t, e);
        }), r) : (e = e || document).querySelector(r) : r;
      }o.$$ = function (e, t) {
        return "string" == typeof e ? (t = t || document, a(t.querySelectorAll(e))) : [e];
      }, t.exports = o;
    }, { "iterate-object": 9, sliced: 13 }], 5: [function (e, t, r) {
      t.exports = function (e, t, r) {
        r = r || "0";var n = (t = t || 2) - (e = e.toString()).length;return (n <= 0 ? "" : r.repeat(n)) + e;
      };
    }, {}], 6: [function (e, t, r) {
      var n = e("months"),
          a = e("days"),
          o = e("fillo"),
          s = e("parse-it").Parser,
          u = { YYYY: function YYYY(e, t) {
          return t ? e.getUTCFullYear() : e.getFullYear();
        }, YY: function YY(e, t) {
          return u.YYYY(e, t) % 100;
        }, MMMM: function MMMM(e, t) {
          return t ? n[e.getUTCMonth()] : n[e.getMonth()];
        }, MMM: function MMM(e, t) {
          return t ? n.abbr[e.getUTCMonth()] : n.abbr[e.getMonth()];
        }, MM: function MM(e, t) {
          return o(t ? e.getUTCMonth() + 1 : e.getMonth() + 1);
        }, M: function M(e, t) {
          return t ? e.getUTCMonth() + 1 : e.getMonth() + 1;
        }, dddd: function dddd(e, t) {
          return a[u.d(e, t)];
        }, ddd: function ddd(e, t) {
          return a.abbr[u.d(e, t)];
        }, dd: function dd(e, t) {
          return a.short[u.d(e, t)];
        }, d: function d(e, t) {
          return t ? e.getUTCDay() : e.getDay();
        }, DD: function DD(e, t) {
          return o(u.D(e, t));
        }, D: function D(e, t) {
          return t ? e.getUTCDate() : e.getDate();
        }, A: function A(e, t) {
          return u.a(e, t).toUpperCase();
        }, a: function a(e, t) {
          return 12 <= u.H(e, t) ? "pm" : "am";
        }, hh: function hh(e, t) {
          return o(u.h(e, t));
        }, h: function h(e, t) {
          return u.H(e, t) % 12 || 12;
        }, HH: function HH(e, t) {
          return o(u.H(e, t));
        }, H: function H(e, t) {
          return t ? e.getUTCHours() : e.getHours();
        }, mm: function mm(e, t) {
          return o(u.m(e, t));
        }, m: function m(e, t) {
          return t ? e.getUTCMinutes() : e.getMinutes();
        }, ss: function ss(e, t) {
          return o(u.s(e, t));
        }, s: function s(e, t) {
          return t ? e.getUTCSeconds() : e.getSeconds();
        }, S: function S(e, t) {
          return Math.round(u.s(e, t) / 60 * 10);
        }, SS: function SS(e, t) {
          return o(u.s(e, t) / 60 * 100);
        }, SSS: function SSS(e, t) {
          return o(u.s(e, t) / 60 * 1e3, 3);
        }, Z: function Z(e) {
          var t = -e.getTimezoneOffset();return (0 <= t ? "+" : "-") + o(parseInt(t / 60)) + ":" + o(t % 60);
        }, ZZ: function ZZ(e) {
          var t = -e.getTimezoneOffset();return (0 <= t ? "+" : "-") + o(parseInt(t / 60)) + o(t % 60);
        } },
          i = new s(u);t.exports = function (e, t) {
        return i.run(t, [e, e._useUTC]);
      };
    }, { days: 3, fillo: 5, months: 10, "parse-it": 11 }], 7: [function (e, t, r) {
      t.exports = ["#eee", "#d6e685", "#8cc665", "#44a340", "#1e6823"];
    }, {}], 8: [function (e, t, r) {
      var i = e("github-calendar-legend");t.exports = function (e) {
        function o() {
          s.current_streak > s.longest_streak && (s.longest_streak = s.current_streak, s.longest_streak_range[0] = s.current_streak_range[0], s.longest_streak_range[1] = s.current_streak_range[1]);
        }var s = { last_year: 0, longest_streak: -1, longest_streak_range: [], current_streak: 0, current_streak_range: [], weeks: [], days: [], last_contributed: null },
            u = [];return e.split("\n").slice(2).map(function (e) {
          return e.trim();
        }).forEach(function (e) {
          if (e.startsWith("<g transform")) return u.length && s.weeks.push(u) && (u = []);var t = e.match(/data-level="([0-9\-]+)"/i),
              r = e.match(/data-date="([0-9\-]+)"/),
              n = e.match(/data-count="([0-9]+)"/);if (t = t && t[1], r = r && r[1], n = n && +n[1], t) {
            var a = { fill: i[t], date: new Date(r), count: n, level: t };0 === s.current_streak && (s.current_streak_range[0] = a.date), a.count ? (++s.current_streak, s.last_year += a.count, s.last_contributed = a.date, s.current_streak_range[1] = a.date) : (o(), s.current_streak = 0), u.push(a), s.days.push(a);
          }
        }), o(), s;
      };
    }, { "github-calendar-legend": 7 }], 9: [function (e, t, r) {
      var a = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof2(e);
      };t.exports = function (e, t) {
        var r = 0,
            n = [];if (Array.isArray(e)) for (; r < e.length && !1 !== t(e[r], r, e); ++r) {} else if ("object" === (void 0 === e ? "undefined" : a(e)) && null !== e) for (n = Object.keys(e); r < n.length && !1 !== t(e[n[r]], n[r], e); ++r) {}
      };
    }, {}], 10: [function (e, t, r) {
      t.exports = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], t.exports.abbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], t.exports.it = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], t.exports.abbr.it = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], t.exports.de = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], t.exports.abbr.de = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    }, {}], 11: [function (e, t, r) {
      var n = function n(e, t, r) {
        return t && a(e.prototype, t), r && a(e, r), e;
      };function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }var o = e("regex-escape"),
          s = (n(u, [{ key: "run", value: function value(e, t) {
          var r = "";t = t || [];do {
            var n = e.match(this.re),
                a = n && n[1],
                o = a || e.charAt(0);if (a) {
              var s = this.obj[a];"function" == typeof s && (s = s.apply(this, t)), r += s;
            } else r += o;e = e.substring(o.length);
          } while (e);return r;
        } }]), u);function u(e) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, u), this.obj = e || {}, this.re = new RegExp("^(" + Object.keys(e).map(o).join("|") + ")");
      }function i(e, t, r) {
        return new s(t).run(e, r);
      }i.Parser = s, t.exports = i;
    }, { "regex-escape": 12 }], 12: [function (e, t, r) {
      function n(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }n.proto = function () {
        return RegExp.escape = n;
      }, t.exports = n;
    }, {}], 13: [function (e, t, r) {
      t.exports = function (e, t, r) {
        var n = [],
            a = e.length;if (0 === a) return n;var o = t < 0 ? Math.max(0, t + a) : t || 0;for (void 0 !== r && (a = r < 0 ? r + a : r); a-- > o;) {
          n[a - o] = e[a];
        }return n;
      };
    }, {}] }, {}, [1])(1);
});
;
//# sourceMappingURL=scripts.js.map