"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/tinycolor2/cjs/tinycolor.js
  var require_tinycolor = __commonJS({
    "node_modules/tinycolor2/cjs/tinycolor.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.tinycolor = factory());
      })(exports, function() {
        "use strict";
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        var trimLeft = /^\s+/;
        var trimRight = /\s+$/;
        function tinycolor(color, opts) {
          color = color ? color : "";
          opts = opts || {};
          if (color instanceof tinycolor) {
            return color;
          }
          if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
          }
          var rgb = inputToRGB(color);
          this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
          this._gradientType = opts.gradientType;
          if (this._r < 1) this._r = Math.round(this._r);
          if (this._g < 1) this._g = Math.round(this._g);
          if (this._b < 1) this._b = Math.round(this._b);
          this._ok = rgb.ok;
        }
        tinycolor.prototype = {
          isDark: function isDark() {
            return this.getBrightness() < 128;
          },
          isLight: function isLight() {
            return !this.isDark();
          },
          isValid: function isValid() {
            return this._ok;
          },
          getOriginalInput: function getOriginalInput() {
            return this._originalInput;
          },
          getFormat: function getFormat() {
            return this._format;
          },
          getAlpha: function getAlpha() {
            return this._a;
          },
          getBrightness: function getBrightness() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
          },
          getLuminance: function getLuminance() {
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B2;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) R = RsRGB / 12.92;
            else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            if (GsRGB <= 0.03928) G = GsRGB / 12.92;
            else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            if (BsRGB <= 0.03928) B2 = BsRGB / 12.92;
            else B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            return 0.2126 * R + 0.7152 * G + 0.0722 * B2;
          },
          setAlpha: function setAlpha(value) {
            this._a = boundAlpha(value);
            this._roundA = Math.round(100 * this._a) / 100;
            return this;
          },
          toHsv: function toHsv() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return {
              h: hsv.h * 360,
              s: hsv.s,
              v: hsv.v,
              a: this._a
            };
          },
          toHsvString: function toHsvString() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v2 + "%)" : "hsva(" + h + ", " + s + "%, " + v2 + "%, " + this._roundA + ")";
          },
          toHsl: function toHsl() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return {
              h: hsl.h * 360,
              s: hsl.s,
              l: hsl.l,
              a: this._a
            };
          },
          toHslString: function toHslString() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
            return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
          },
          toHex: function toHex(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
          },
          toHexString: function toHexString(allow3Char) {
            return "#" + this.toHex(allow3Char);
          },
          toHex8: function toHex8(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
          },
          toHex8String: function toHex8String(allow4Char) {
            return "#" + this.toHex8(allow4Char);
          },
          toRgb: function toRgb() {
            return {
              r: Math.round(this._r),
              g: Math.round(this._g),
              b: Math.round(this._b),
              a: this._a
            };
          },
          toRgbString: function toRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
          },
          toPercentageRgb: function toPercentageRgb() {
            return {
              r: Math.round(bound01(this._r, 255) * 100) + "%",
              g: Math.round(bound01(this._g, 255) * 100) + "%",
              b: Math.round(bound01(this._b, 255) * 100) + "%",
              a: this._a
            };
          },
          toPercentageRgbString: function toPercentageRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
          },
          toName: function toName() {
            if (this._a === 0) {
              return "transparent";
            }
            if (this._a < 1) {
              return false;
            }
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
          },
          toFilter: function toFilter(secondColor) {
            var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
          },
          toString: function toString(format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
              if (format === "name" && this._a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
            }
            if (format === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format === "name") {
              formattedString = this.toName();
            }
            if (format === "hsl") {
              formattedString = this.toHslString();
            }
            if (format === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          },
          clone: function clone() {
            return tinycolor(this.toString());
          },
          _applyModification: function _applyModification(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
          },
          lighten: function lighten() {
            return this._applyModification(_lighten, arguments);
          },
          brighten: function brighten() {
            return this._applyModification(_brighten, arguments);
          },
          darken: function darken() {
            return this._applyModification(_darken, arguments);
          },
          desaturate: function desaturate() {
            return this._applyModification(_desaturate, arguments);
          },
          saturate: function saturate() {
            return this._applyModification(_saturate, arguments);
          },
          greyscale: function greyscale() {
            return this._applyModification(_greyscale, arguments);
          },
          spin: function spin() {
            return this._applyModification(_spin, arguments);
          },
          _applyCombination: function _applyCombination(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
          },
          analogous: function analogous() {
            return this._applyCombination(_analogous, arguments);
          },
          complement: function complement() {
            return this._applyCombination(_complement, arguments);
          },
          monochromatic: function monochromatic() {
            return this._applyCombination(_monochromatic, arguments);
          },
          splitcomplement: function splitcomplement() {
            return this._applyCombination(_splitcomplement, arguments);
          },
          // Disabled until https://github.com/bgrins/TinyColor/issues/254
          // polyad: function (number) {
          //   return this._applyCombination(polyad, [number]);
          // },
          triad: function triad() {
            return this._applyCombination(polyad, [3]);
          },
          tetrad: function tetrad() {
            return this._applyCombination(polyad, [4]);
          }
        };
        tinycolor.fromRatio = function(color, opts) {
          if (_typeof(color) == "object") {
            var newColor = {};
            for (var i in color) {
              if (color.hasOwnProperty(i)) {
                if (i === "a") {
                  newColor[i] = color[i];
                } else {
                  newColor[i] = convertToPercentage(color[i]);
                }
              }
            }
            color = newColor;
          }
          return tinycolor(color, opts);
        };
        function inputToRGB(color) {
          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          var a = 1;
          var s = null;
          var v2 = null;
          var l = null;
          var ok = false;
          var format = false;
          if (typeof color == "string") {
            color = stringInputToObject(color);
          }
          if (_typeof(color) == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v2 = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v2);
              ok = true;
              format = "hsv";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
            }
            if (color.hasOwnProperty("a")) {
              a = color.a;
            }
          }
          a = boundAlpha(a);
          return {
            ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a
          };
        }
        function rgbToRgb(r, g, b) {
          return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
          };
        }
        function rgbToHsl(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, l = (max + min) / 2;
          if (max == min) {
            h = s = 0;
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h,
            s,
            l
          };
        }
        function hslToRgb(h, s, l) {
          var r, g, b;
          h = bound01(h, 360);
          s = bound01(s, 100);
          l = bound01(l, 100);
          function hue2rgb(p2, q2, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
            if (t < 1 / 2) return q2;
            if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
            return p2;
          }
          if (s === 0) {
            r = g = b = l;
          } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        function rgbToHsv(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, v2 = max;
          var d = max - min;
          s = max === 0 ? 0 : d / max;
          if (max == min) {
            h = 0;
          } else {
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h,
            s,
            v: v2
          };
        }
        function hsvToRgb(h, s, v2) {
          h = bound01(h, 360) * 6;
          s = bound01(s, 100);
          v2 = bound01(v2, 100);
          var i = Math.floor(h), f = h - i, p = v2 * (1 - s), q = v2 * (1 - f * s), t = v2 * (1 - (1 - f) * s), mod = i % 6, r = [v2, q, p, p, t, v2][mod], g = [t, v2, v2, q, p, p][mod], b = [p, p, t, v2, v2, q][mod];
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        function rgbToHex(r, g, b, allow3Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
          }
          return hex.join("");
        }
        function rgbaToHex(r, g, b, a, allow4Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
          if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
          }
          return hex.join("");
        }
        function rgbaToArgbHex(r, g, b, a) {
          var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          return hex.join("");
        }
        tinycolor.equals = function(color1, color2) {
          if (!color1 || !color2) return false;
          return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function() {
          return tinycolor.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
          });
        };
        function _desaturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s -= amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _saturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s += amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _greyscale(color) {
          return tinycolor(color).desaturate(100);
        }
        function _lighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l += amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }
        function _brighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var rgb = tinycolor(color).toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return tinycolor(rgb);
        }
        function _darken(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l -= amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }
        function _spin(color, amount) {
          var hsl = tinycolor(color).toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return tinycolor(hsl);
        }
        function _complement(color) {
          var hsl = tinycolor(color).toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return tinycolor(hsl);
        }
        function polyad(color, number) {
          if (isNaN(number) || number <= 0) {
            throw new Error("Argument to polyad must be a positive number");
          }
          var hsl = tinycolor(color).toHsl();
          var result = [tinycolor(color)];
          var step = 360 / number;
          for (var i = 1; i < number; i++) {
            result.push(tinycolor({
              h: (hsl.h + i * step) % 360,
              s: hsl.s,
              l: hsl.l
            }));
          }
          return result;
        }
        function _splitcomplement(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [tinycolor(color), tinycolor({
            h: (h + 72) % 360,
            s: hsl.s,
            l: hsl.l
          }), tinycolor({
            h: (h + 216) % 360,
            s: hsl.s,
            l: hsl.l
          })];
        }
        function _analogous(color, results, slices) {
          results = results || 6;
          slices = slices || 30;
          var hsl = tinycolor(color).toHsl();
          var part = 360 / slices;
          var ret = [tinycolor(color)];
          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
          }
          return ret;
        }
        function _monochromatic(color, results) {
          results = results || 6;
          var hsv = tinycolor(color).toHsv();
          var h = hsv.h, s = hsv.s, v2 = hsv.v;
          var ret = [];
          var modification = 1 / results;
          while (results--) {
            ret.push(tinycolor({
              h,
              s,
              v: v2
            }));
            v2 = (v2 + modification) % 1;
          }
          return ret;
        }
        tinycolor.mix = function(color1, color2, amount) {
          amount = amount === 0 ? 0 : amount || 50;
          var rgb1 = tinycolor(color1).toRgb();
          var rgb2 = tinycolor(color2).toRgb();
          var p = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
          };
          return tinycolor(rgba);
        };
        tinycolor.readability = function(color1, color2) {
          var c1 = tinycolor(color1);
          var c2 = tinycolor(color2);
          return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
        };
        tinycolor.isReadable = function(color1, color2, wcag2) {
          var readability = tinycolor.readability(color1, color2);
          var wcag2Parms, out;
          out = false;
          wcag2Parms = validateWCAG2Parms(wcag2);
          switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
              out = readability >= 4.5;
              break;
            case "AAlarge":
              out = readability >= 3;
              break;
            case "AAAsmall":
              out = readability >= 7;
              break;
          }
          return out;
        };
        tinycolor.mostReadable = function(baseColor, colorList, args) {
          var bestColor = null;
          var bestScore = 0;
          var readability;
          var includeFallbackColors, level, size;
          args = args || {};
          includeFallbackColors = args.includeFallbackColors;
          level = args.level;
          size = args.size;
          for (var i = 0; i < colorList.length; i++) {
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
            }
          }
          if (tinycolor.isReadable(baseColor, bestColor, {
            level,
            size
          }) || !includeFallbackColors) {
            return bestColor;
          } else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
          }
        };
        var names = tinycolor.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        };
        var hexNames = tinycolor.hexNames = flip(names);
        function flip(o) {
          var flipped = {};
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
            }
          }
          return flipped;
        }
        function boundAlpha(a) {
          a = parseFloat(a);
          if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
          }
          return a;
        }
        function bound01(n, max) {
          if (isOnePointZero(n)) n = "100%";
          var processPercent = isPercentage(n);
          n = Math.min(max, Math.max(0, parseFloat(n)));
          if (processPercent) {
            n = parseInt(n * max, 10) / 100;
          }
          if (Math.abs(n - max) < 1e-6) {
            return 1;
          }
          return n % max / parseFloat(max);
        }
        function clamp01(val) {
          return Math.min(1, Math.max(0, val));
        }
        function parseIntFromHex(val) {
          return parseInt(val, 16);
        }
        function isOnePointZero(n) {
          return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
        }
        function isPercentage(n) {
          return typeof n === "string" && n.indexOf("%") != -1;
        }
        function pad2(c) {
          return c.length == 1 ? "0" + c : "" + c;
        }
        function convertToPercentage(n) {
          if (n <= 1) {
            n = n * 100 + "%";
          }
          return n;
        }
        function convertDecimalToHex(d) {
          return Math.round(parseFloat(d) * 255).toString(16);
        }
        function convertHexToDecimal(h) {
          return parseIntFromHex(h) / 255;
        }
        var matchers = function() {
          var CSS_INTEGER = "[-\\+]?\\d+%?";
          var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
          var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
          var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          };
        }();
        function isValidCSSUnit(color) {
          return !!matchers.CSS_UNIT.exec(color);
        }
        function stringInputToObject(color) {
          color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
          var named = false;
          if (names[color]) {
            color = names[color];
            named = true;
          } else if (color == "transparent") {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
          }
          var match;
          if (match = matchers.rgb.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3]
            };
          }
          if (match = matchers.rgba.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsl.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3]
            };
          }
          if (match = matchers.hsla.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsv.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3]
            };
          }
          if (match = matchers.hsva.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hex8.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex6.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
            };
          }
          if (match = matchers.hex4.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              a: convertHexToDecimal(match[4] + "" + match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex3.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              format: named ? "name" : "hex"
            };
          }
          return false;
        }
        function validateWCAG2Parms(parms) {
          var level, size;
          parms = parms || {
            level: "AA",
            size: "small"
          };
          level = (parms.level || "AA").toUpperCase();
          size = (parms.size || "small").toLowerCase();
          if (level !== "AA" && level !== "AAA") {
            level = "AA";
          }
          if (size !== "small" && size !== "large") {
            size = "small";
          }
          return {
            level,
            size
          };
        }
        return tinycolor;
      });
    }
  });

  // node_modules/tinygradient/browser.js
  var require_browser = __commonJS({
    "node_modules/tinygradient/browser.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_tinycolor()) : typeof define === "function" && define.amd ? define(["tinycolor2"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.tinygradient = factory(global.tinycolor));
      })(exports, function(tinycolor2) {
        "use strict";
        function _interopDefaultLegacy(e) {
          return e && typeof e === "object" && "default" in e ? e : { "default": e };
        }
        var tinycolor2__default = /* @__PURE__ */ _interopDefaultLegacy(tinycolor2);
        var RGBA_MAX = {
          r: 256,
          g: 256,
          b: 256,
          a: 1
        };
        var HSVA_MAX = {
          h: 360,
          s: 1,
          v: 1,
          a: 1
        };
        function stepize(start, end, steps) {
          var step = {};
          for (var k in start) {
            if (start.hasOwnProperty(k)) {
              step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
            }
          }
          return step;
        }
        function interpolate(step, start, i, max) {
          var color = {};
          for (var k in start) {
            if (start.hasOwnProperty(k)) {
              color[k] = step[k] * i + start[k];
              color[k] = color[k] < 0 ? color[k] + max[k] : max[k] !== 1 ? color[k] % max[k] : color[k];
            }
          }
          return color;
        }
        function interpolateRgb(stop1, stop2, steps) {
          var start = stop1.color.toRgb();
          var end = stop2.color.toRgb();
          var step = stepize(start, end, steps);
          var gradient = [stop1.color];
          for (var i = 1; i < steps; i++) {
            var color = interpolate(step, start, i, RGBA_MAX);
            gradient.push(tinycolor2__default["default"](color));
          }
          return gradient;
        }
        function interpolateHsv(stop1, stop2, steps, mode) {
          var start = stop1.color.toHsv();
          var end = stop2.color.toHsv();
          if (start.s === 0 || end.s === 0) {
            return interpolateRgb(stop1, stop2, steps);
          }
          var trigonometric;
          if (typeof mode === "boolean") {
            trigonometric = mode;
          } else {
            var trigShortest = start.h < end.h && end.h - start.h < 180 || start.h > end.h && start.h - end.h > 180;
            trigonometric = mode === "long" && trigShortest || mode === "short" && !trigShortest;
          }
          var step = stepize(start, end, steps);
          var gradient = [stop1.color];
          var diff;
          if (start.h <= end.h && !trigonometric || start.h >= end.h && trigonometric) {
            diff = end.h - start.h;
          } else if (trigonometric) {
            diff = 360 - end.h + start.h;
          } else {
            diff = 360 - start.h + end.h;
          }
          step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;
          for (var i = 1; i < steps; i++) {
            var color = interpolate(step, start, i, HSVA_MAX);
            gradient.push(tinycolor2__default["default"](color));
          }
          return gradient;
        }
        function computeSubsteps(stops, steps) {
          var l = stops.length;
          steps = parseInt(steps, 10);
          if (isNaN(steps) || steps < 2) {
            throw new Error("Invalid number of steps (< 2)");
          }
          if (steps < l) {
            throw new Error("Number of steps cannot be inferior to number of stops");
          }
          var substeps = [];
          for (var i = 1; i < l; i++) {
            var step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
            substeps.push(Math.max(1, Math.round(step)));
          }
          var totalSubsteps = 1;
          for (var n = l - 1; n--; ) {
            totalSubsteps += substeps[n];
          }
          while (totalSubsteps !== steps) {
            if (totalSubsteps < steps) {
              var min = Math.min.apply(null, substeps);
              substeps[substeps.indexOf(min)]++;
              totalSubsteps++;
            } else {
              var max = Math.max.apply(null, substeps);
              substeps[substeps.indexOf(max)]--;
              totalSubsteps--;
            }
          }
          return substeps;
        }
        function computeAt(stops, pos, method, max) {
          if (pos < 0 || pos > 1) {
            throw new Error("Position must be between 0 and 1");
          }
          var start, end;
          for (var i = 0, l = stops.length; i < l - 1; i++) {
            if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
              start = stops[i];
              end = stops[i + 1];
              break;
            }
          }
          if (!start) {
            start = end = stops[stops.length - 1];
          }
          var step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
          var color = interpolate(step, start.color[method](), (pos - start.pos) * 100, max);
          return tinycolor2__default["default"](color);
        }
        var TinyGradient = /* @__PURE__ */ function() {
          function TinyGradient2(stops) {
            if (stops.length < 2) {
              throw new Error("Invalid number of stops (< 2)");
            }
            var havingPositions = stops[0].pos !== void 0;
            var l = stops.length;
            var p = -1;
            var lastColorLess = false;
            this.stops = stops.map(function(stop, i) {
              var hasPosition = stop.pos !== void 0;
              if (havingPositions ^ hasPosition) {
                throw new Error("Cannot mix positionned and not posionned color stops");
              }
              if (hasPosition) {
                var hasColor = stop.color !== void 0;
                if (!hasColor && (lastColorLess || i === 0 || i === l - 1)) {
                  throw new Error("Cannot define two consecutive position-only stops");
                }
                lastColorLess = !hasColor;
                stop = {
                  color: hasColor ? tinycolor2__default["default"](stop.color) : null,
                  colorLess: !hasColor,
                  pos: stop.pos
                };
                if (stop.pos < 0 || stop.pos > 1) {
                  throw new Error("Color stops positions must be between 0 and 1");
                } else if (stop.pos < p) {
                  throw new Error("Color stops positions are not ordered");
                }
                p = stop.pos;
              } else {
                stop = {
                  color: tinycolor2__default["default"](stop.color !== void 0 ? stop.color : stop),
                  pos: i / (l - 1)
                };
              }
              return stop;
            });
            if (this.stops[0].pos !== 0) {
              this.stops.unshift({
                color: this.stops[0].color,
                pos: 0
              });
              l++;
            }
            if (this.stops[l - 1].pos !== 1) {
              this.stops.push({
                color: this.stops[l - 1].color,
                pos: 1
              });
            }
          }
          var _proto = TinyGradient2.prototype;
          _proto.reverse = function reverse() {
            var stops = [];
            this.stops.forEach(function(stop) {
              stops.push({
                color: stop.color,
                pos: 1 - stop.pos
              });
            });
            return new TinyGradient2(stops.reverse());
          };
          _proto.loop = function loop() {
            var stops1 = [];
            var stops2 = [];
            this.stops.forEach(function(stop) {
              stops1.push({
                color: stop.color,
                pos: stop.pos / 2
              });
            });
            this.stops.slice(0, -1).forEach(function(stop) {
              stops2.push({
                color: stop.color,
                pos: 1 - stop.pos / 2
              });
            });
            return new TinyGradient2(stops1.concat(stops2.reverse()));
          };
          _proto.rgb = function rgb(steps) {
            var _this = this;
            var substeps = computeSubsteps(this.stops, steps);
            var gradient = [];
            this.stops.forEach(function(stop, i2) {
              if (stop.colorLess) {
                stop.color = interpolateRgb(_this.stops[i2 - 1], _this.stops[i2 + 1], 2)[1];
              }
            });
            for (var i = 0, l = this.stops.length; i < l - 1; i++) {
              var rgb2 = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
              gradient.splice.apply(gradient, [gradient.length, 0].concat(rgb2));
            }
            gradient.push(this.stops[this.stops.length - 1].color);
            return gradient;
          };
          _proto.hsv = function hsv(steps, mode) {
            var _this2 = this;
            var substeps = computeSubsteps(this.stops, steps);
            var gradient = [];
            this.stops.forEach(function(stop, i2) {
              if (stop.colorLess) {
                stop.color = interpolateHsv(_this2.stops[i2 - 1], _this2.stops[i2 + 1], 2, mode)[1];
              }
            });
            for (var i = 0, l = this.stops.length; i < l - 1; i++) {
              var hsv2 = interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], mode);
              gradient.splice.apply(gradient, [gradient.length, 0].concat(hsv2));
            }
            gradient.push(this.stops[this.stops.length - 1].color);
            return gradient;
          };
          _proto.css = function css(mode, direction) {
            mode = mode || "linear";
            direction = direction || (mode === "linear" ? "to right" : "ellipse at center");
            var css2 = mode + "-gradient(" + direction;
            this.stops.forEach(function(stop) {
              css2 += ", " + (stop.colorLess ? "" : stop.color.toRgbString() + " ") + stop.pos * 100 + "%";
            });
            css2 += ")";
            return css2;
          };
          _proto.rgbAt = function rgbAt(pos) {
            return computeAt(this.stops, pos, "toRgb", RGBA_MAX);
          };
          _proto.hsvAt = function hsvAt(pos) {
            return computeAt(this.stops, pos, "toHsv", HSVA_MAX);
          };
          return TinyGradient2;
        }();
        var tinygradient2 = function tinygradient3(stops) {
          if (arguments.length === 1) {
            if (!Array.isArray(arguments[0])) {
              throw new Error('"stops" is not an array');
            }
            stops = arguments[0];
          } else {
            stops = Array.prototype.slice.call(arguments);
          }
          return new TinyGradient(stops);
        };
        return tinygradient2;
      });
    }
  });

  // node_modules/robust-predicates/esm/util.js
  var epsilon = 11102230246251565e-32;
  var splitter = 134217729;
  var resulterrbound = (3 + 8 * epsilon) * epsilon;
  function sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if (fnow > enow === fnow > -enow) {
      Q = enow;
      enow = e[++eindex];
    } else {
      Q = fnow;
      fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = enow + Q;
        hh = Q - (Qnew - enow);
        enow = e[++eindex];
      } else {
        Qnew = fnow + Q;
        hh = Q - (Qnew - fnow);
        fnow = f[++findex];
      }
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
      while (eindex < elen && findex < flen) {
        if (fnow > enow === fnow > -enow) {
          Qnew = Q + enow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (enow - bvirt);
          enow = e[++eindex];
        } else {
          Qnew = Q + fnow;
          bvirt = Qnew - Q;
          hh = Q - (Qnew - bvirt) + (fnow - bvirt);
          fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
          h[hindex++] = hh;
        }
      }
    }
    while (eindex < elen) {
      Qnew = Q + enow;
      bvirt = Qnew - Q;
      hh = Q - (Qnew - bvirt) + (enow - bvirt);
      enow = e[++eindex];
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
    while (findex < flen) {
      Qnew = Q + fnow;
      bvirt = Qnew - Q;
      hh = Q - (Qnew - bvirt) + (fnow - bvirt);
      fnow = f[++findex];
      Q = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
    if (Q !== 0 || hindex === 0) {
      h[hindex++] = Q;
    }
    return hindex;
  }
  function estimate(elen, e) {
    let Q = e[0];
    for (let i = 1; i < elen; i++) Q += e[i];
    return Q;
  }
  function vec(n) {
    return new Float64Array(n);
  }

  // node_modules/robust-predicates/esm/orient2d.js
  var ccwerrboundA = (3 + 16 * epsilon) * epsilon;
  var ccwerrboundB = (2 + 12 * epsilon) * epsilon;
  var ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;
  var B = vec(4);
  var C1 = vec(8);
  var C2 = vec(12);
  var D = vec(16);
  var u = vec(4);
  function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u32;
    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;
    s1 = acx * bcy;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u32 = _j + _i;
    bvirt = u32 - _j;
    B[2] = _j - (u32 - bvirt) + (_i - bvirt);
    B[3] = u32;
    let det = estimate(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
      return det;
    }
    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);
    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
      return det;
    }
    errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
    det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;
    s1 = acxtail * bcy;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const C1len = sum(4, B, 4, u, C1);
    s1 = acx * bcytail;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const C2len = sum(C1len, C1, 4, u, C2);
    s1 = acxtail * bcytail;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const Dlen = sum(C2len, C2, 4, u, D);
    return D[Dlen - 1];
  }
  function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;
    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;
    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
  }

  // node_modules/robust-predicates/esm/orient3d.js
  var o3derrboundA = (7 + 56 * epsilon) * epsilon;
  var o3derrboundB = (3 + 28 * epsilon) * epsilon;
  var o3derrboundC = (26 + 288 * epsilon) * epsilon * epsilon;
  var bc = vec(4);
  var ca = vec(4);
  var ab = vec(4);
  var at_b = vec(4);
  var at_c = vec(4);
  var bt_c = vec(4);
  var bt_a = vec(4);
  var ct_a = vec(4);
  var ct_b = vec(4);
  var bct = vec(8);
  var cat = vec(8);
  var abt = vec(8);
  var u2 = vec(4);
  var _8 = vec(8);
  var _8b = vec(8);
  var _16 = vec(8);
  var _12 = vec(12);
  var fin = vec(192);
  var fin2 = vec(192);

  // node_modules/robust-predicates/esm/incircle.js
  var iccerrboundA = (10 + 96 * epsilon) * epsilon;
  var iccerrboundB = (4 + 48 * epsilon) * epsilon;
  var iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;
  var bc2 = vec(4);
  var ca2 = vec(4);
  var ab2 = vec(4);
  var aa = vec(4);
  var bb = vec(4);
  var cc = vec(4);
  var u3 = vec(4);
  var v = vec(4);
  var axtbc = vec(8);
  var aytbc = vec(8);
  var bxtca = vec(8);
  var bytca = vec(8);
  var cxtab = vec(8);
  var cytab = vec(8);
  var abt2 = vec(8);
  var bct2 = vec(8);
  var cat2 = vec(8);
  var abtt = vec(4);
  var bctt = vec(4);
  var catt = vec(4);
  var _82 = vec(8);
  var _162 = vec(16);
  var _16b = vec(16);
  var _16c = vec(16);
  var _32 = vec(32);
  var _32b = vec(32);
  var _48 = vec(48);
  var _64 = vec(64);
  var fin3 = vec(1152);
  var fin22 = vec(1152);

  // node_modules/robust-predicates/esm/insphere.js
  var isperrboundA = (16 + 224 * epsilon) * epsilon;
  var isperrboundB = (5 + 72 * epsilon) * epsilon;
  var isperrboundC = (71 + 1408 * epsilon) * epsilon * epsilon;
  var ab3 = vec(4);
  var bc3 = vec(4);
  var cd = vec(4);
  var de = vec(4);
  var ea = vec(4);
  var ac = vec(4);
  var bd = vec(4);
  var ce = vec(4);
  var da = vec(4);
  var eb = vec(4);
  var abc = vec(24);
  var bcd = vec(24);
  var cde = vec(24);
  var dea = vec(24);
  var eab = vec(24);
  var abd = vec(24);
  var bce = vec(24);
  var cda = vec(24);
  var deb = vec(24);
  var eac = vec(24);
  var adet = vec(1152);
  var bdet = vec(1152);
  var cdet = vec(1152);
  var ddet = vec(1152);
  var edet = vec(1152);
  var abdet = vec(2304);
  var cddet = vec(2304);
  var cdedet = vec(3456);
  var deter = vec(5760);
  var _83 = vec(8);
  var _8b2 = vec(8);
  var _8c = vec(8);
  var _163 = vec(16);
  var _24 = vec(24);
  var _482 = vec(48);
  var _48b = vec(48);
  var _96 = vec(96);
  var _192 = vec(192);
  var _384x = vec(384);
  var _384y = vec(384);
  var _384z = vec(384);
  var _768 = vec(768);
  var xdet = vec(96);
  var ydet = vec(96);
  var zdet = vec(96);
  var fin4 = vec(1152);

  // node_modules/delaunator/index.js
  var EPSILON = Math.pow(2, -52);
  var EDGE_STACK = new Uint32Array(512);
  var Delaunator = class _Delaunator {
    static from(points, getX = defaultGetX, getY = defaultGetY) {
      const n = points.length;
      const coords = new Float64Array(n * 2);
      for (let i = 0; i < n; i++) {
        const p = points[i];
        coords[2 * i] = getX(p);
        coords[2 * i + 1] = getY(p);
      }
      return new _Delaunator(coords);
    }
    constructor(coords) {
      const n = coords.length >> 1;
      if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
      this.coords = coords;
      const maxTriangles = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(maxTriangles * 3);
      this._halfedges = new Int32Array(maxTriangles * 3);
      this._hashSize = Math.ceil(Math.sqrt(n));
      this._hullPrev = new Uint32Array(n);
      this._hullNext = new Uint32Array(n);
      this._hullTri = new Uint32Array(n);
      this._hullHash = new Int32Array(this._hashSize);
      this._ids = new Uint32Array(n);
      this._dists = new Float64Array(n);
      this.update();
    }
    update() {
      const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
      const n = coords.length >> 1;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (let i = 0; i < n; i++) {
        const x = coords[2 * i];
        const y = coords[2 * i + 1];
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
        this._ids[i] = i;
      }
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      let i0, i1, i2;
      for (let i = 0, minDist = Infinity; i < n; i++) {
        const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist) {
          i0 = i;
          minDist = d;
        }
      }
      const i0x = coords[2 * i0];
      const i0y = coords[2 * i0 + 1];
      for (let i = 0, minDist = Infinity; i < n; i++) {
        if (i === i0) continue;
        const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist && d > 0) {
          i1 = i;
          minDist = d;
        }
      }
      let i1x = coords[2 * i1];
      let i1y = coords[2 * i1 + 1];
      let minRadius = Infinity;
      for (let i = 0; i < n; i++) {
        if (i === i0 || i === i1) continue;
        const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
        if (r < minRadius) {
          i2 = i;
          minRadius = r;
        }
      }
      let i2x = coords[2 * i2];
      let i2y = coords[2 * i2 + 1];
      if (minRadius === Infinity) {
        for (let i = 0; i < n; i++) {
          this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        const hull = new Uint32Array(n);
        let j = 0;
        for (let i = 0, d0 = -Infinity; i < n; i++) {
          const id = this._ids[i];
          const d = this._dists[id];
          if (d > d0) {
            hull[j++] = id;
            d0 = d;
          }
        }
        this.hull = hull.subarray(0, j);
        this.triangles = new Uint32Array(0);
        this.halfedges = new Uint32Array(0);
        return;
      }
      if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
        const i = i1;
        const x = i1x;
        const y = i1y;
        i1 = i2;
        i1x = i2x;
        i1y = i2y;
        i2 = i;
        i2x = x;
        i2y = y;
      }
      const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
      this._cx = center.x;
      this._cy = center.y;
      for (let i = 0; i < n; i++) {
        this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
      }
      quicksort(this._ids, this._dists, 0, n - 1);
      this._hullStart = i0;
      let hullSize = 3;
      hullNext[i0] = hullPrev[i2] = i1;
      hullNext[i1] = hullPrev[i0] = i2;
      hullNext[i2] = hullPrev[i1] = i0;
      hullTri[i0] = 0;
      hullTri[i1] = 1;
      hullTri[i2] = 2;
      hullHash.fill(-1);
      hullHash[this._hashKey(i0x, i0y)] = i0;
      hullHash[this._hashKey(i1x, i1y)] = i1;
      hullHash[this._hashKey(i2x, i2y)] = i2;
      this.trianglesLen = 0;
      this._addTriangle(i0, i1, i2, -1, -1, -1);
      for (let k = 0, xp, yp; k < this._ids.length; k++) {
        const i = this._ids[k];
        const x = coords[2 * i];
        const y = coords[2 * i + 1];
        if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
        xp = x;
        yp = y;
        if (i === i0 || i === i1 || i === i2) continue;
        let start = 0;
        for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
          start = hullHash[(key + j) % this._hashSize];
          if (start !== -1 && start !== hullNext[start]) break;
        }
        start = hullPrev[start];
        let e = start, q;
        while (q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
          e = q;
          if (e === start) {
            e = -1;
            break;
          }
        }
        if (e === -1) continue;
        let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
        hullTri[i] = this._legalize(t + 2);
        hullTri[e] = t;
        hullSize++;
        let n2 = hullNext[e];
        while (q = hullNext[n2], orient2d(x, y, coords[2 * n2], coords[2 * n2 + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
          t = this._addTriangle(n2, i, q, hullTri[i], -1, hullTri[n2]);
          hullTri[i] = this._legalize(t + 2);
          hullNext[n2] = n2;
          hullSize--;
          n2 = q;
        }
        if (e === start) {
          while (q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
            t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
            this._legalize(t + 2);
            hullTri[q] = t;
            hullNext[e] = e;
            hullSize--;
            e = q;
          }
        }
        this._hullStart = hullPrev[i] = e;
        hullNext[e] = hullPrev[n2] = i;
        hullNext[i] = n2;
        hullHash[this._hashKey(x, y)] = i;
        hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
      }
      this.hull = new Uint32Array(hullSize);
      for (let i = 0, e = this._hullStart; i < hullSize; i++) {
        this.hull[i] = e;
        e = hullNext[e];
      }
      this.triangles = this._triangles.subarray(0, this.trianglesLen);
      this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(x, y) {
      return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }
    _legalize(a) {
      const { _triangles: triangles, _halfedges: halfedges, coords } = this;
      let i = 0;
      let ar = 0;
      while (true) {
        const b = halfedges[a];
        const a0 = a - a % 3;
        ar = a0 + (a + 2) % 3;
        if (b === -1) {
          if (i === 0) break;
          a = EDGE_STACK[--i];
          continue;
        }
        const b0 = b - b % 3;
        const al = a0 + (a + 1) % 3;
        const bl = b0 + (b + 2) % 3;
        const p0 = triangles[ar];
        const pr = triangles[a];
        const pl = triangles[al];
        const p1 = triangles[bl];
        const illegal = inCircle(
          coords[2 * p0],
          coords[2 * p0 + 1],
          coords[2 * pr],
          coords[2 * pr + 1],
          coords[2 * pl],
          coords[2 * pl + 1],
          coords[2 * p1],
          coords[2 * p1 + 1]
        );
        if (illegal) {
          triangles[a] = p1;
          triangles[b] = p0;
          const hbl = halfedges[bl];
          if (hbl === -1) {
            let e = this._hullStart;
            do {
              if (this._hullTri[e] === bl) {
                this._hullTri[e] = a;
                break;
              }
              e = this._hullPrev[e];
            } while (e !== this._hullStart);
          }
          this._link(a, hbl);
          this._link(b, halfedges[ar]);
          this._link(ar, bl);
          const br = b0 + (b + 1) % 3;
          if (i < EDGE_STACK.length) {
            EDGE_STACK[i++] = br;
          }
        } else {
          if (i === 0) break;
          a = EDGE_STACK[--i];
        }
      }
      return ar;
    }
    _link(a, b) {
      this._halfedges[a] = b;
      if (b !== -1) this._halfedges[b] = a;
    }
    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
      const t = this.trianglesLen;
      this._triangles[t] = i0;
      this._triangles[t + 1] = i1;
      this._triangles[t + 2] = i2;
      this._link(t, a);
      this._link(t + 1, b);
      this._link(t + 2, c);
      this.trianglesLen += 3;
      return t;
    }
  };
  function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4;
  }
  function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }
  function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
  }
  function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
  }
  function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return { x, y };
  }
  function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
      for (let i = left + 1; i <= right; i++) {
        const temp = ids[i];
        const tempDist = dists[temp];
        let j = i - 1;
        while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
        ids[j + 1] = temp;
      }
    } else {
      const median = left + right >> 1;
      let i = left + 1;
      let j = right;
      swap(ids, median, i);
      if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
      if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
      if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
      const temp = ids[i];
      const tempDist = dists[temp];
      while (true) {
        do
          i++;
        while (dists[ids[i]] < tempDist);
        do
          j--;
        while (dists[ids[j]] > tempDist);
        if (j < i) break;
        swap(ids, i, j);
      }
      ids[left + 1] = ids[j];
      ids[j] = temp;
      if (right - i + 1 >= j - left) {
        quicksort(ids, dists, i, right);
        quicksort(ids, dists, left, j - 1);
      } else {
        quicksort(ids, dists, left, j - 1);
        quicksort(ids, dists, i, right);
      }
    }
  }
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function defaultGetX(p) {
    return p[0];
  }
  function defaultGetY(p) {
    return p[1];
  }

  // workers/BackgroundRender.ts
  var import_tinygradient = __toESM(require_browser(), 1);

  // app/_utils/QuadTree.ts
  var QuadTree = class _QuadTree {
    threshold;
    minw;
    maxw;
    minh;
    maxh;
    points;
    subdivided;
    ul;
    ur;
    bl;
    br;
    ctx;
    constructor(threshold, minw, maxw, minh, maxh, points, ctx) {
      this.threshold = threshold;
      this.minw = minw;
      this.minh = minh;
      this.maxw = maxw;
      this.maxh = maxh;
      this.points = [];
      this.subdivided = false;
      this.ctx = ctx;
      if (points) {
        for (let i = 0; i < points.length / 2; i++) {
          this.addPoint([points[2 * i], points[2 * i + 1]]);
        }
      }
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
    }
    addPoint(point) {
      if (!this.inBounds(point)) return;
      if (this.points.length >= this.threshold * 2) {
        this.subdivide();
      }
      if (this.subdivided) {
        this.ul.addPoint(point);
        this.ur.addPoint(point);
        this.bl.addPoint(point);
        this.br.addPoint(point);
        return;
      }
      this.points.push(...point);
    }
    inBounds(point) {
      if (point[0] < this.minw) return false;
      if (point[0] > this.maxw) return false;
      if (point[1] < this.minh) return false;
      if (point[1] > this.maxh) return false;
      return true;
    }
    subdivide() {
      if (this.subdivided) return;
      this.ul = new _QuadTree(
        this.threshold,
        this.minw,
        (this.maxw - this.minw) / 2 + this.minw,
        this.minh,
        (this.maxh - this.minh) / 2 + this.minh,
        this.points,
        this.ctx
      );
      this.ur = new _QuadTree(
        this.threshold,
        (this.maxw - this.minw) / 2 + this.minw,
        this.maxw,
        this.minh,
        (this.maxh - this.minh) / 2 + this.minh,
        this.points,
        this.ctx
      );
      this.bl = new _QuadTree(
        this.threshold,
        this.minw,
        (this.maxw - this.minw) / 2 + this.minw,
        (this.maxh - this.minh) / 2 + this.minh,
        this.maxh,
        this.points,
        this.ctx
      );
      this.br = new _QuadTree(
        this.threshold,
        (this.maxw - this.minw) / 2 + this.minw,
        this.maxw,
        (this.maxh - this.minh) / 2 + this.minh,
        this.maxh,
        this.points,
        this.ctx
      );
      this.points = [];
      this.subdivided = true;
    }
    intersects(minw, maxw, minh, maxh) {
      const farLeft = this.maxw < minw;
      const farRight = this.minw > maxw;
      const farUp = this.minh > maxh;
      const farDown = this.maxh < minh;
      return !(farLeft || farRight || farUp || farDown);
    }
    findPoints(minw, maxw, minh, maxh) {
      const points = [];
      if (this.intersects(minw, maxw, minh, maxh))
        points.push(...this.points);
      if (this.subdivided) {
        points.push(...this.ul.findPoints(minw, maxw, minh, maxh));
        points.push(...this.ur.findPoints(minw, maxw, minh, maxh));
        points.push(...this.bl.findPoints(minw, maxw, minh, maxh));
        points.push(...this.br.findPoints(minw, maxw, minh, maxh));
      }
      return points;
    }
  };

  // workers/BackgroundRender.ts
  var randomVectors = (numberOfPoints, xMin, xMax, yMin, yMax) => {
    const result = [];
    for (let i = 0; i < numberOfPoints; i++) {
      result.push({
        x: Math.random() * (xMax - xMin) + xMin,
        y: Math.random() * (yMax - yMin) + yMin
      });
    }
    return result;
  };
  var borderPoints = (subdivisions, minX, maxX, minY, maxY) => {
    const result = [];
    for (let i = 0; i < subdivisions + 1; i++) {
      result.push({
        x: minX + (maxX - minX) * i / (subdivisions + 1),
        y: minY
      });
      result.push({
        x: maxX,
        y: minY + (maxY - minY) * i / (subdivisions + 1)
      });
      result.push({
        x: maxX - (maxX - minX) * i / (subdivisions + 1),
        y: maxY
      });
      result.push({
        x: minX,
        y: maxY - (maxY - minY) * i / (subdivisions + 1)
      });
    }
    return result;
  };
  var mousePos = { x: 0, y: 0 };
  var minVelocity = -0.5;
  var maxVelocity = 0.5;
  var repulsiveForceConstant = -2e3;
  self.onmessage = (e) => {
    const canvas = e.data.canvas;
    const ctx = canvas?.getContext("2d");
    const windowInnerWidth = e.data.winWidth;
    const windowInnerHeight = e.data.winHeight;
    if (!ctx || !canvas || !windowInnerWidth || !windowInnerHeight) {
      mousePos = {
        x: e.data.mousePos[0],
        y: e.data.mousePos[1]
      };
      return;
    }
    canvas.width = windowInnerWidth;
    canvas.height = windowInnerHeight;
    const drawWidth = canvas.width;
    const drawHeight = canvas.height;
    const numPoints = Math.floor(drawHeight * drawWidth / 25e3);
    const velocities = randomVectors(
      numPoints,
      minVelocity,
      maxVelocity,
      minVelocity,
      maxVelocity
    );
    const points = randomVectors(numPoints, 0, drawWidth, 0, drawHeight);
    const border = borderPoints(1, 0, drawWidth, 0, drawHeight);
    const delaunay = Delaunator.from(
      [...points, ...border],
      (p) => p.x,
      (p) => p.y
    );
    const drawTriangle = (pointIndexes) => {
      const trianglePoints = pointIndexes.map((index) => [
        delaunay.coords[2 * index],
        delaunay.coords[2 * index + 1]
      ]);
      const normYPos = Math.min(
        Math.max(
          (trianglePoints[0][1] + trianglePoints[1][1] + trianglePoints[2][1]) / 3 / drawHeight,
          0
        ),
        1
      );
      const triangleGradient = (0, import_tinygradient.default)(
        "rgba(0, 255, 255, 0.3)",
        "rgba(0, 0, 255, 0)"
      );
      ctx.beginPath();
      ctx.moveTo(trianglePoints[0][0], trianglePoints[0][1]);
      ctx.lineTo(trianglePoints[1][0], trianglePoints[1][1]);
      ctx.lineTo(trianglePoints[2][0], trianglePoints[2][1]);
      ctx.closePath();
      ctx.fillStyle = triangleGradient.hsvAt(normYPos).toRgbString();
      ctx.strokeStyle = triangleGradient.hsvAt(normYPos).toRgbString();
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.fill();
      for (const point of trianglePoints) {
        const distToMouse = ((point[0] - mousePos.x) ** 2 + (point[1] - mousePos.y) ** 2) ** 0.5;
        if (distToMouse > 400) {
        } else {
          const normDist = (1 - distToMouse / 400) ** 2;
          const brightnessGrad = (0, import_tinygradient.default)(
            triangleGradient.rgbAt(normYPos).toHexString(),
            "rgba(255, 255, 255, 0.2)"
          );
          ctx.fillStyle = brightnessGrad.rgbAt(normDist).toRgbString();
          ctx.beginPath();
          ctx.arc(point[0], point[1], 10 * normDist, 0, 2 * Math.PI);
          ctx.fill();
          ctx.closePath();
        }
      }
    };
    const movePoints = () => {
      const newPoints = [];
      const qtree = new QuadTree(
        2,
        0,
        drawWidth,
        0,
        drawHeight,
        delaunay.coords,
        ctx
      );
      for (let i = 0; i < numPoints; i++) {
        const newX = delaunay.coords[i * 2] + velocities[i].x;
        const newY = delaunay.coords[i * 2 + 1] + velocities[i].y;
        if (newX < 0 || newX > drawWidth) velocities[i].x = -velocities[i].x;
        if (newY < 0 || newY > drawHeight) velocities[i].y = -velocities[i].y;
        newPoints[i * 2] = delaunay.coords[i * 2] + velocities[i].x;
        newPoints[i * 2 + 1] = delaunay.coords[i * 2 + 1] + velocities[i].y;
        const test = {
          minw: delaunay.coords[i * 2] - 150,
          maxw: delaunay.coords[i * 2] + 150,
          minh: delaunay.coords[i * 2 + 1] - 150,
          maxh: delaunay.coords[i * 2 + 1] + 150
        };
        const importantPoints = qtree.findPoints(
          test.minw,
          test.maxw,
          test.minh,
          test.maxh
        );
        let totalForce = [0, 0];
        const x = delaunay.coords[i * 2];
        const y = delaunay.coords[i * 2 + 1];
        for (let j = 0; j < importantPoints.length / 2; j++) {
          const targetx = importantPoints[j * 2];
          const targety = importantPoints[j * 2 + 1];
          const euclidianDist = Math.sqrt(
            (targetx - x) ** 2 + (targety - y) ** 2
          );
          if (!euclidianDist) continue;
          const targetForce = [
            (targetx - x) * repulsiveForceConstant / euclidianDist ** 3,
            (targety - y) * repulsiveForceConstant / euclidianDist ** 3
          ];
          totalForce[0] += targetForce[0];
          totalForce[1] += targetForce[1];
        }
        newPoints[i * 2] += totalForce[0];
        newPoints[i * 2 + 1] += totalForce[1];
        newPoints[i * 2] = Math.max(0, Math.min(drawWidth, newPoints[i * 2]));
        newPoints[i * 2 + 1] = Math.max(
          0,
          Math.min(drawHeight, newPoints[i * 2 + 1])
        );
      }
      delaunay.coords = [...newPoints, ...border.flatMap((p) => [p.x, p.y])];
    };
    const renderPoints = () => {
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      movePoints();
      delaunay.update();
      const triangles = delaunay.triangles.reduce(
        (accum, cur, index) => {
          if (index % 3) accum[accum.length - 1].push(cur);
          else accum.push([cur]);
          return accum;
        },
        []
      );
      for (let i = 0; i < triangles.length; i++) {
        drawTriangle(triangles[i]);
      }
      requestAnimationFrame(renderPoints);
    };
    requestAnimationFrame(renderPoints);
  };
})();
/*! Bundled license information:

tinygradient/browser.js:
  (*!
   * tinygradient (v1.1.5)
   * @copyright 2014-2021 Damien "Mistic" Sorel <contact@git.strangeplanet.fr>
   * @licence MIT
   *)
*/
