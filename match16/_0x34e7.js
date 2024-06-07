var r, o, a, s;
(_0x34e7 = [
  "AqLWq",
  "0zyxwvutsr",
  "TKgNw",
  "eMnqD",
  "thjIz",
  "btoa",
  "MNPQRSTWXY",
  "oPsqh",
  "niIlq",
  "evetF",
  "LVZVH",
  "fYWEX",
  "kmnprstwxy",
  "aYkvo",
  "tsrqpomnlk",
  "HfLqY",
  "aQCDK",
  "lGBLj",
  "test",
  "3210zyxwvu",
  "QWK2Fi",
  'return /" ',
  "hsJtK",
  "jdwcO",
  "SlFsj",
  "OWUOc",
  "LCaAn",
  "[^ ]+)+)+[",
  "FAVYf",
  "2Fi+987654",
  "floor",
  "join",
  "EuwBW",
  "OXYrZ",
  "charCodeAt",
  "SkkHG",
  "iYuJr",
  "GwoYF",
  "kPdGe",
  "cVCcp",
  "INQRH",
  "INVALID_CH",
  "charAt",
  "push",
  "apply",
  "lalCJ",
  "kTcRS",
  '+ this + "',
  "ykpOn",
  "gLnjm",
  "gmBaq",
  "kukBH",
  "dvEWE",
  "SFKLi",
  "^([^ ]+( +",
  "qpomnlkjih",
  "^ ]}",
  "pHtmC",
  "length",
  "split",
  "ABHICESQWK",
  "FKByN",
  "U987654321",
  "lmHcG",
  "dICfr",
  "Szksx",
  "Bgrij",
  "iwnNJ",
  "jihgfdecba",
  "GfTek",
  "gfdecbaZXY",
  "constructo",
  "QIoXW",
  "jLRMs",
]),
  (a = _0x34e7),
  (s = function (e) {
    for (; --e; ) a.push(a.shift());
  }),
  (o = (r = {
    data: {
      key: "cookie",
      value: "timeout",
    },
    setCookie: function (e, t, n, r) {
      r = r || {};
      for (var i = t + "=" + n, o = 0, a = e.length; o < a; o++) {
        var s = e[o];
        i += "; " + s;
        var l = e[s];
        e.push(l), (a = e.length), !0 !== l && (i += "=" + l);
      }
      r.cookie = i;
    },
    removeCookie: function () {
      return "dev";
    },
    getCookie: function (e, t) {
      var n,
        r = (e =
          e ||
          function (e) {
            return e;
          })(
          new RegExp(
            "(?:^|; )" + t.replace(/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)",
          ),
        );
      return (
        (n = 133),
        s(++n), // 在这里进行了数组顺序改变函数的执行
        r ? decodeURIComponent(r[1]) : void 0
      );
    },
    updateCookie: function () {
      return new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}").test(
        r.removeCookie.toString(),
      );
    },
  }).updateCookie())
    ? o
      ? r.getCookie(null, "counter")
      : r.removeCookie()
    : r.setCookie(["*"], "counter", 1);
console.log(_0x34e7);
