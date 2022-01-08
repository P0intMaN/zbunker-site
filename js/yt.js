const _0x4c8a0a = _0x4960;
function _0x4960(_0x3c4b48, _0x513a71) {
  const _0x4f0c2a = _0x4f0c();
  return (
    (_0x4960 = function (_0x49607f, _0x8e74b8) {
      _0x49607f = _0x49607f - 0x167;
      let _0x37cc87 = _0x4f0c2a[_0x49607f];
      return _0x37cc87;
    }),
    _0x4960(_0x3c4b48, _0x513a71)
  );
}
(function (_0x36046d, _0x1ab6f5) {
  const _0x3bbbcb = _0x4960,
    _0x196a1b = _0x36046d();
  while (!![]) {
    try {
      const _0x1b45a8 =
        (parseInt(_0x3bbbcb(0x16a)) / 0x1) *
          (-parseInt(_0x3bbbcb(0x173)) / 0x2) +
        (-parseInt(_0x3bbbcb(0x17e)) / 0x3) *
          (parseInt(_0x3bbbcb(0x171)) / 0x4) +
        (parseInt(_0x3bbbcb(0x167)) / 0x5) *
          (-parseInt(_0x3bbbcb(0x17c)) / 0x6) +
        (-parseInt(_0x3bbbcb(0x174)) / 0x7) *
          (parseInt(_0x3bbbcb(0x179)) / 0x8) +
        parseInt(_0x3bbbcb(0x176)) / 0x9 +
        (-parseInt(_0x3bbbcb(0x16c)) / 0xa) *
          (-parseInt(_0x3bbbcb(0x170)) / 0xb) +
        parseInt(_0x3bbbcb(0x178)) / 0xc;
      if (_0x1b45a8 === _0x1ab6f5) break;
      else _0x196a1b["push"](_0x196a1b["shift"]());
    } catch (_0x2aa23c) {
      _0x196a1b["push"](_0x196a1b["shift"]());
    }
  }
})(_0x4f0c, 0xea89d);
const APIKey = _0x4c8a0a(0x16e),
  Userid = _0x4c8a0a(0x16f),
  subscriberCount = document[_0x4c8a0a(0x16b)]("subscriberCount"),
  viewCount = document[_0x4c8a0a(0x16b)](_0x4c8a0a(0x169));
let getdata = () => {
  const _0x4bd1d1 = _0x4c8a0a;
  fetch(_0x4bd1d1(0x177) + Userid + _0x4bd1d1(0x16d) + APIKey)
    [_0x4bd1d1(0x168)]((_0x252ffd) => {
      const _0x1a2ade = _0x4bd1d1;
      return _0x252ffd[_0x1a2ade(0x175)]();
    })
    ["then"]((_0x25dbce) => {
      const _0x579170 = _0x4bd1d1;
      console["log"](_0x25dbce),
        (subscriberCount[_0x579170(0x17b)] =
          _0x25dbce[_0x579170(0x172)][0x0][_0x579170(0x17d)][_0x579170(0x17a)]),
        (viewCount[_0x579170(0x17b)] =
          _0x25dbce[_0x579170(0x172)][0x0][_0x579170(0x17d)][_0x579170(0x169)]);
    });
};
getdata();
function _0x4f0c() {
  const _0x5671fa = [
    "then",
    "viewCount",
    "172787bibutK",
    "getElementById",
    "3570lbjYRc",
    "&key=",
    "AIzaSyASEOXyGpBqn1f10X5PEYl9o_Bp4EiArPU",
    "UC1QZPervOHLiC4xpVnzbDFg",
    "12408EuhjHy",
    "2499208nzMmXY",
    "items",
    "4hMvWkK",
    "651YachWs",
    "json",
    "9237663ZMDvUF",
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=",
    "35342928husIfg",
    "68952QLZrQI",
    "subscriberCount",
    "innerHTML",
    "54rZODqY",
    "statistics",
    "3FopUGb",
    "912075RKtdrn",
  ];
  _0x4f0c = function () {
    return _0x5671fa;
  };
  return _0x4f0c();
}
