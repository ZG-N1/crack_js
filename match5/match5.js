// 1.观察请求发现需带m和f参数，以及RM4hZBv0dDon443M的cookie
// 2.通过启动器找到发送请求的位置, 上文中有$_zw对象的赋值，但找不到_$is,
//     request = function() {
//                 var list = {
//                     "page": window.page,
//                     "m": window._$is,
//                     "f": window.$_zw[23]
//                 };
//                 $.ajax({
// 3.那就先定位COOKIE，使用hook技术debugger住，可以追栈到_0x4664b4,获取其所在的JS
// 4.JS是混淆的,尝试OB解混淆https://tool.yuanrenxue.cn/decode_obfuscator,找到了RM4hZBv0dDon443M的位置,_0x4e96b4为window,可知结果和_$ss有关
//     _0x3d0f3f[_$Fe] = "RM4hZBv0dDon443M=" + _0x4e96b4["_$ss"] + "; path=/";
// 5.全局搜索无法定位_$ss,那就再上hook(_$ss)
//     成功定位到_0x4e96b4['_$' + _$UH[0x348][0x1] + _$UH[0x353][0x1]] = _0x29dd83[_$UH[0x1f]]();
//     _$UH[0x1f]这个在控制台输出是toString,
//     _0x29dd83这个是个对象,需要追定义或赋值的地方
//      _$Ww = _$Tk['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']()),
//      _0x29dd83 = _$Tk['AES']['encrypt'](_$Ww, _0x4e96b4['_$qF'], {
//               'mode': _$Tk['mode']['ECB'],
//               'padding': _$Tk['pad'][Pkcs7]
//      }),
//     定位_$TK发现它是个加密库 _$Tk = CryptoJS;
//     查找_0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8']['parse'](_0x4e96b4['btoa'](_0x4e96b4['_$is'])['slice'](0, 16));
//     查找_0x4e96b4['_$is']:看第二条这个就是参数中的m刚好
//     try {
//             _$yw = _0x2d5f5b()['toString']();
//             _0x3d0f3f[_$Fe] = 'm=' + _0x474032(_$yw) + ';\x20path=/';
//             _0x4e96b4['_$is'] = _$yw;
//             _0x4e96b4['_$pr']['push'](_0x474032(_$yw));
//         } catch (_0x3c2e99) {}
//     继续追_0x2d5f5b
//         function _0x2d5f5b() {
//           return new _0x35bb1d()['valueOf']();
//         }
//     _0x35bb1d,其name属性为Date
//     _0x4e96b4['_$pr'] = new _0x4d2d2c(); //new Array()
// 6.查找_$pr,对7处都打上断点进行网页调试
// 7.监控_0x4e96b4['_$6_'],_0x4e96b4['_$tT'],_0x4e96b4['_$Jy']的值在5次push时的变化，第5次的值是不变的

const Cryptojs = require("crypto-js");

var window = {};
var _0x4e96b4 = window;
var history = {
  pushState: function () {},
};
var cookie_RM4 = "";
var key = "";
var _0x29dd83 = {};
var pr = [];
var _$UH = {
  31: "toString",
  108: "length",
  15: "charCodeAt",
  276: "fromCharCode",
};
var _0x1171c8 = 1732584193;
var _0x4dae05 = -271733879;
var _0x183a1d = -1732584194;
var _0xcfa373 = 271733878;
var _0x30bc70 = String;

function _0x4b459d(
  _0x8d8f2a,
  _0x406d34,
  _0x53e7d7,
  _0x26c827,
  _0xec41ea,
  _0x52dead,
  _0x3f66e7,
) {
  return _0xaaef84(
    _0x53e7d7 ^ (_0x406d34 | ~_0x26c827),
    _0x8d8f2a,
    _0x406d34,
    _0xec41ea,
    _0x52dead,
    _0x3f66e7,
  );
}

function _0x32032f(
  _0x520fdf,
  _0x13921d,
  _0x1af9d5,
  _0x4a2311,
  _0xb6d40a,
  _0x1d58da,
  _0x361df0,
) {
  return _0xaaef84(
    _0x13921d ^ _0x1af9d5 ^ _0x4a2311,
    _0x520fdf,
    _0x13921d,
    _0xb6d40a,
    _0x1d58da,
    _0x361df0,
  );
}

function _0x3180ec(
  _0x401705,
  _0x240e6a,
  _0x56b131,
  _0x5a5c20,
  _0x1f2a72,
  _0x2bfc1,
  _0x19741a,
) {
  return _0xaaef84(
    (_0x240e6a & _0x5a5c20) | (_0x56b131 & ~_0x5a5c20),
    _0x401705,
    _0x240e6a,
    _0x1f2a72,
    _0x2bfc1,
    _0x19741a,
  );
}

function _0x3634fc(_0x5803ba, _0x1ce5b2) {
  return (_0x5803ba << _0x1ce5b2) | (_0x5803ba >>> (32 - _0x1ce5b2));
}

function _0x12e4a8(_0x7542c8, _0x5eada0) {
  var _0x41f81f = (65535 & _0x7542c8) + (65535 & _0x5eada0);

  return (
    (((_0x7542c8 >> 16) + (_0x5eada0 >> 16) + (_0x41f81f >> 16)) << 16) |
    (65535 & _0x41f81f)
  );
}

function _0xaaef84(
  _0xaf3112,
  _0x2a165a,
  _0x532fb4,
  _0x10aa40,
  _0x41c4e7,
  _0x1cb4da,
) {
  return _0x12e4a8(
    _0x3634fc(
      _0x12e4a8(
        _0x12e4a8(_0x2a165a, _0xaf3112),
        _0x12e4a8(_0x10aa40, _0x1cb4da),
      ),
      _0x41c4e7,
    ),
    _0x532fb4,
  );
}

function _0x48d200(
  _0x4b706e,
  _0x3c3a85,
  _0x111154,
  _0x311f9f,
  _0x5439cf,
  _0x38cac7,
  _0x26bd2e,
) {
  return _0xaaef84(
    (_0x3c3a85 & _0x111154) | (~_0x3c3a85 & _0x311f9f),
    _0x4b706e,
    _0x3c3a85,
    _0x5439cf,
    _0x38cac7,
    _0x26bd2e,
  );
}

function _0x2d5f5b() {
  return new Date().valueOf();
}

function _0x35f5f2(_0x243853) {
  var _0x139b8b,
    _0xa791a1 = [];

  for (
    _0xa791a1[(_0x243853[_$UH[108]] >> 2) - 1] = undefined, _0x139b8b = 0;
    _0x139b8b < _0xa791a1[_$UH[108]];
    _0x139b8b += 1
  )
    _0xa791a1[_0x139b8b] = 0;

  var _0x41a533 = 8 * _0x243853[_$UH[108]];

  for (_0x139b8b = 0; _0x139b8b < _0x41a533; _0x139b8b += 8)
    _0xa791a1[_0x139b8b >> 5] |=
      (255 & _0x243853[_$UH[15]](_0x139b8b / 8)) << _0x139b8b % 32;

  return _0xa791a1;
}

function _0x11a7a2(_0x193f00, _0x1cfe89) {
  (_0x193f00[_0x1cfe89 >> 5] |= 128 << _0x1cfe89 % 32),
    (_0x193f00[14 + (((_0x1cfe89 + 64) >>> 9) << 4)] = _0x1cfe89);

  try {
    var _0x42fb36 = 16; //_0x4e96b4[_$UH[608]][_$UH[8]]["DONE"] * 4;
  } catch (_0x1b1b35) {
    var _0x42fb36 = 1;
  }

  try {
    _0x4e96b4["$_z2"][0] = "Q";
  } catch (_0x4c574d) {
    try {
      op = 27; //_0x4e96b4["$_zw"][_$UH[108]];
    } catch (_0x58af26) {
      var _0x3b7935 = 0;

      for (var _0x1badc3 = 0; _0x1badc3 < 1000000; _0x1badc3++) {
        _0x3b7935 = _0x3b7935 + _0x1badc3[_$UH[31]]();
        history["pushState"](0, 0, _0x3b7935);
      }
    }

    if (op > 20) {
      eval("b64pad = 1"); //_0x4e96b4['$_zw'][9]['length']
    } else {
      if (op < 10) {
        _0x4e96b4["$_zw"] = [1, 8, 2, 4, 23, 45, 8, 15, 81, 68, 13, 72, 70];
      }
    }
  }

  var _0x1badc3,
    _0x38ca59,
    _0x431764,
    _0x43f1b4,
    _0x5722c0,
    _0x3e0c38 = _0x1171c8,
    _0xdb4d2c = _0x4dae05,
    _0x1724c5 = _0x183a1d,
    _0x257ec6 = _0xcfa373;

  window["_$6_"] = -389564586;
  window["_$tT"] = -660478335;
  window["_$Jy"] = -405537848;
  try {
    if (_0x4e96b4["_$6_"]) {
    } else {
      _0x4e96b4["_$6_"] = 8821003647;
    }
  } catch (_0x15bf3f) {
    _0x4e96b4["_$6_"] = 37885443;
  }

  for (_0x1badc3 = 0; _0x1badc3 < _0x193f00[_$UH[108]]; _0x1badc3 += _0x42fb36)
    (_0x38ca59 = _0x3e0c38),
      (_0x431764 = _0xdb4d2c),
      (_0x43f1b4 = _0x1724c5),
      (_0x5722c0 = _0x257ec6),
      (_0x3e0c38 = _0x48d200(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3],
        7,
        513548,
      )),
      (_0x257ec6 = _0x48d200(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 1],
        12,
        _0x4e96b4["_$6_"],
      )),
      (_0x1724c5 = _0x48d200(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 2],
        17,
        606105819,
      )),
      (_0xdb4d2c = _0x48d200(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 3],
        22,
        -1044525330,
      )),
      (_0x3e0c38 = _0x48d200(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 4],
        7,
        -176418897,
      )),
      (_0x257ec6 = _0x48d200(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 5],
        12,
        1200080426,
      )),
      (_0x1724c5 = _0x48d200(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 6],
        17,
        -1473231341,
      )),
      (_0xdb4d2c = _0x48d200(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 7],
        22,
        -45705983,
      )),
      (_0x3e0c38 = _0x48d200(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 8],
        7,
        1770035416,
      )),
      (_0x257ec6 = _0x48d200(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 9],
        12,
        -1958414417,
      )),
      (_0x1724c5 = _0x48d200(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 10],
        17,
        -42063,
      )),
      (_0xdb4d2c = _0x48d200(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 11],
        22,
        -1990404162,
      )),
      (_0x3e0c38 = _0x48d200(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 12],
        7,
        1804603682,
      )),
      (_0x257ec6 = _0x48d200(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 13],
        12,
        -40341101,
      )),
      (_0x1724c5 = _0x48d200(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 14],
        17,
        -1502002290,
      )),
      (_0xdb4d2c = _0x48d200(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 15],
        22,
        1236535329,
      )),
      (_0x3e0c38 = _0x3180ec(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 1],
        5,
        -165796510,
      )),
      (_0x257ec6 = _0x3180ec(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 6],
        9,
        -1069501632,
      )),
      (_0x1724c5 = _0x3180ec(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 11],
        14,
        643717713,
      )),
      (_0xdb4d2c = _0x3180ec(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3],
        20,
        -373897302,
      )),
      (_0x3e0c38 = _0x3180ec(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 5],
        5,
        -701558691,
      )),
      (_0x257ec6 = _0x3180ec(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 10],
        9,
        38016083,
      )),
      (_0x1724c5 = _0x3180ec(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 15],
        14,
        _0x4e96b4["_$tT"],
      )),
      (_0xdb4d2c = _0x3180ec(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 4],
        20,
        _0x4e96b4["_$Jy"],
      )),
      (_0x3e0c38 = _0x3180ec(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 9],
        5,
        568446438,
      )),
      (_0x257ec6 = _0x3180ec(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 14],
        9,
        -1019783690,
      )),
      (_0x1724c5 = _0x3180ec(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 3],
        14,
        -187363961,
      )),
      (_0xdb4d2c = _0x3180ec(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 8],
        20,
        1163531501,
      )),
      (_0x3e0c38 = _0x3180ec(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 13],
        5,
        -1554681467,
      )),
      (_0x257ec6 = _0x3180ec(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 2],
        9,
        -51403784,
      )),
      (_0x1724c5 = _0x3180ec(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 7],
        14,
        1735328473,
      )),
      (_0xdb4d2c = _0x3180ec(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 12],
        20,
        -1926607734,
      )),
      (_0x3e0c38 = _0x32032f(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 5],
        4,
        -37824558,
      )),
      (_0x257ec6 = _0x32032f(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 8],
        11,
        -2022574463,
      )),
      (_0x1724c5 = _0x32032f(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 11],
        16,
        1839030562,
      )),
      (_0xdb4d2c = _0x32032f(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 14],
        23,
        -35309556,
      )),
      (_0x3e0c38 = _0x32032f(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 1],
        4,
        -1530992060 * b64pad,
      )),
      (_0x257ec6 = _0x32032f(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 4],
        11,
        1272893353,
      )),
      (_0x1724c5 = _0x32032f(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 7],
        16,
        -155497632,
      )),
      (_0xdb4d2c = _0x32032f(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 10],
        23,
        -1094730640,
      )),
      (_0x3e0c38 = _0x32032f(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 13],
        4,
        681279174,
      )),
      (_0x257ec6 = _0x32032f(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3],
        11,
        -358537222,
      )),
      (_0x1724c5 = _0x32032f(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 3],
        16,
        -722521979,
      )),
      (_0xdb4d2c = _0x32032f(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 6],
        23,
        760291289,
      )),
      (_0x3e0c38 = _0x32032f(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 9],
        4,
        -64036887,
      )),
      (_0x257ec6 = _0x32032f(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 12],
        11,
        -421815835,
      )),
      (_0x1724c5 = _0x32032f(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 15],
        16,
        530742520,
      )),
      (_0xdb4d2c = _0x32032f(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 2],
        23,
        -995338651,
      )),
      (_0x3e0c38 = _0x4b459d(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3],
        6,
        -198630844,
      )),
      (_0x257ec6 = _0x4b459d(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 7],
        10,
        1126891415,
      )),
      (_0x1724c5 = _0x4b459d(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 14],
        15,
        -1416354905,
      )),
      (_0xdb4d2c = _0x4b459d(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 5],
        21,
        -57434055,
      )),
      (_0x3e0c38 = _0x4b459d(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 12],
        6,
        1700485571,
      )),
      (_0x257ec6 = _0x4b459d(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 3],
        10,
        -1894746606,
      )),
      (_0x1724c5 = _0x4b459d(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 10],
        15,
        -105181523,
      )),
      (_0xdb4d2c = _0x4b459d(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 1],
        21,
        -2054922799,
      )),
      (_0x3e0c38 = _0x4b459d(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 8],
        6,
        1873313359,
      )),
      (_0x257ec6 = _0x4b459d(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 15],
        10,
        -30611744,
      )),
      (_0x1724c5 = _0x4b459d(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 6],
        15,
        -1560198380,
      )),
      (_0xdb4d2c = _0x4b459d(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 13],
        21,
        1309151649,
      )),
      (_0x3e0c38 = _0x4b459d(
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x193f00[_0x1badc3 + 4],
        6,
        -145523070,
      )),
      (_0x257ec6 = _0x4b459d(
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x1724c5,
        _0x193f00[_0x1badc3 + 11],
        10,
        -1120211379,
      )),
      (_0x1724c5 = _0x4b459d(
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0xdb4d2c,
        _0x193f00[_0x1badc3 + 2],
        15,
        718787259,
      )),
      (_0xdb4d2c = _0x4b459d(
        _0xdb4d2c,
        _0x1724c5,
        _0x257ec6,
        _0x3e0c38,
        _0x193f00[_0x1badc3 + 9],
        21,
        -343485441,
      )),
      (_0x3e0c38 = _0x12e4a8(_0x3e0c38, _0x38ca59)),
      (_0xdb4d2c = _0x12e4a8(_0xdb4d2c, _0x431764)),
      (_0x1724c5 = _0x12e4a8(_0x1724c5, _0x43f1b4)),
      (_0x257ec6 = _0x12e4a8(_0x257ec6, _0x5722c0));

  return [_0x3e0c38, _0xdb4d2c, _0x1724c5, _0x257ec6];
}

function _0x12b47d(_0x149183) {
  var _0xabbcb3,
    _0x1145c3 = "",
    _0x4fce58 = 32 * _0x149183[_$UH[108]];

  for (_0xabbcb3 = 0; _0xabbcb3 < _0x4fce58; _0xabbcb3 += 8)
    _0x1145c3 += _0x30bc70[_$UH[276]](
      (_0x149183[_0xabbcb3 >> 5] >>> _0xabbcb3 % 32) & 255,
    );

  return _0x1145c3;
}

function _0x2b8a17(_0x36f847) {
  return unescape(encodeURIComponent(_0x36f847));
}

function _0x1ee7ec(_0x206333) {
  return _0x12b47d(_0x11a7a2(_0x35f5f2(_0x206333), 8 * _0x206333[_$UH[108]]));
}

function _0x499969(_0x82fe7e) {
  var _0x5bdda4,
    _0x322a73,
    _0xd0b5cd = "0123456789abcdef",
    _0x21f411 = "";

  for (_0x322a73 = 0; _0x322a73 < _0x82fe7e[_$UH[108]]; _0x322a73 += 1)
    (_0x5bdda4 = _0x82fe7e[_$UH[15]](_0x322a73)),
      (_0x21f411 +=
        _0xd0b5cd["charAt"]((_0x5bdda4 >>> 4) & 15) +
        _0xd0b5cd["charAt"](15 & _0x5bdda4));

  return _0x21f411;
}

function _0x41873d(_0x5a6962) {
  return _0x1ee7ec(_0x2b8a17(_0x5a6962));
}

function _0x37614a(_0x32e7c1) {
  return _0x499969(_0x41873d(_0x32e7c1));
}

function _0x474032(_0x233f82, _0xe2ed33, _0x3229f9) {
  return _0x37614a(_0x233f82);
  // _0xe2ed33
  //   ? _0x3229f9
  //     ? v(_0xe2ed33, _0x233f82)
  //     : y(_0xe2ed33, _0x233f82)
  //   : _0x3229f9
  //     ? _0x41873d(_0x233f82)
  //     : _0x37614a(_0x233f82);
}

function _0x12eaf3() {
  return Date.parse(new Date());
}

function jiami() {
  for (let i = 0; i < 4; i++) {
    _$Wa = _0x12eaf3();
    pr.push(_0x474032(_$Wa)); //需4次
  }

  _$yw = _0x2d5f5b().toString();
  let is = _$yw;
  let m = _0x474032(_$yw);
  pr.push(m); //pr 经过1次

  key = Cryptojs.enc.Utf8.parse(
    Buffer.from(_$yw).toString("base64").slice(0, 16),
  );
  Ww = Cryptojs.enc.Utf8.parse(pr.toString());

  _0x29dd83 = Cryptojs.AES.encrypt(Ww, key, {
    mode: Cryptojs.mode.ECB,
    padding: Cryptojs.pad.Pkcs7,
  });
  cookie_RM4 = _0x29dd83.toString();
  return {
    cookie_m: m,
    cookie_RM4: cookie_RM4,
    param_m: is,
    param_f: Date.parse(new Date()).toString(),
  };
}
// jiami();
