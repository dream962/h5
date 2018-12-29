var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL = Laya.WebGL;

    (function () {
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";

        showApe();
    })();

    function showApe() {
        var ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.loadImage("res/ape/test.jpg");

        Laya.loader.load("res/ape/test.jpg", Laya.Handler.create(this, function () {
            var monkey2 = Laya.loader.getRes("res/ape/test.jpg");
            var ape2 = new Laya.Sprite();
            Laya.stage.addChild(ape2);
            ape2.graphics.drawTexture(monkey2, 100, 0);
        }));
    }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2g1L0xheWFBaXJJREVfYmV0YS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQSxDQUFDLFlBQVk7QUFDVCxRQUFJLFNBQVMsS0FBSyxNQUFsQjtBQUNBLFFBQUksUUFBUSxLQUFLLEtBQWpCO0FBQ0EsUUFBSSxVQUFVLEtBQUssT0FBbkI7QUFDQSxRQUFJLFVBQVUsS0FBSyxPQUFuQjtBQUNBLFFBQUksVUFBVSxLQUFLLE9BQW5CO0FBQ0EsUUFBSSxRQUFRLEtBQUssS0FBakI7O0FBRUEsS0FBQyxZQUFZO0FBQ1QsYUFBSyxJQUFMLENBQVUsUUFBUSxXQUFsQixFQUErQixRQUFRLFlBQXZDLEVBQXFELEtBQXJEO0FBQ0EsYUFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixNQUFNLFlBQTFCO0FBQ0EsYUFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixNQUFNLFlBQTFCOztBQUVBLGFBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsU0FBdkI7QUFDQSxhQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLFNBQXJCOztBQUVBO0FBQ0gsS0FURDs7QUFXQSxhQUFTLE9BQVQsR0FBbUI7QUFDZixZQUFJLE1BQU0sSUFBSSxNQUFKLEVBQVY7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCO0FBQ0EsWUFBSSxTQUFKLENBQWMsa0JBQWQ7O0FBRU4sYUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixrQkFBakIsRUFBcUMsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixJQUFwQixFQUEwQixZQUFXO0FBQ3pFLGdCQUFJLFVBQVUsS0FBSyxNQUFMLENBQVksTUFBWixDQUFtQixrQkFBbkIsQ0FBZDtBQUNBLGdCQUFJLE9BQU8sSUFBSSxLQUFLLE1BQVQsRUFBWDtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCO0FBQ0EsaUJBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsT0FBMUIsRUFBbUMsR0FBbkMsRUFBd0MsQ0FBeEM7QUFDQSxTQUxvQyxDQUFyQztBQU1HO0FBQ0osQ0EvQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcclxuICAgIHZhciBTdGFnZSA9IExheWEuU3RhZ2U7XHJcbiAgICB2YXIgVGV4dHVyZSA9IExheWEuVGV4dHVyZTtcclxuICAgIHZhciBCcm93c2VyID0gTGF5YS5Ccm93c2VyO1xyXG4gICAgdmFyIEhhbmRsZXIgPSBMYXlhLkhhbmRsZXI7XHJcbiAgICB2YXIgV2ViR0wgPSBMYXlhLldlYkdMO1xyXG5cclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgTGF5YS5pbml0KEJyb3dzZXIuY2xpZW50V2lkdGgsIEJyb3dzZXIuY2xpZW50SGVpZ2h0LCBXZWJHTCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBTdGFnZS5BTElHTl9NSURETEU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBTdGFnZS5BTElHTl9DRU5URVI7XHJcblxyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gXCJzaG93YWxsXCI7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5iZ0NvbG9yID0gXCIjMjMyNjI4XCI7XHJcblxyXG4gICAgICAgIHNob3dBcGUoKTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0FwZSgpIHtcclxuICAgICAgICB2YXIgYXBlID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoYXBlKTtcclxuICAgICAgICBhcGUubG9hZEltYWdlKFwicmVzL2FwZS90ZXN0LmpwZ1wiKVxyXG5cclxuXHRcdExheWEubG9hZGVyLmxvYWQoXCJyZXMvYXBlL3Rlc3QuanBnXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBtb25rZXkyID0gTGF5YS5sb2FkZXIuZ2V0UmVzKFwicmVzL2FwZS90ZXN0LmpwZ1wiKTtcclxuXHRcdFx0bGV0IGFwZTIgPSBuZXcgTGF5YS5TcHJpdGUoKTtcclxuXHRcdFx0TGF5YS5zdGFnZS5hZGRDaGlsZChhcGUyKTtcclxuXHRcdFx0YXBlMi5ncmFwaGljcy5kcmF3VGV4dHVyZShtb25rZXkyLCAxMDAsIDApO1xyXG5cdFx0fSkpO1xyXG4gICAgfVxyXG59KSgpOyJdfQ==
