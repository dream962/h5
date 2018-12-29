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

        this.byte = new Laya.Byte();
    })();

    function showApe() {
        var ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.loadImage("res/ape/test.jpg")

		Laya.loader.load("res/ape/test.jpg", Laya.Handler.create(this, function() {
			let monkey2 = Laya.loader.getRes("res/ape/test.jpg");
			let ape2 = new Laya.Sprite();
			Laya.stage.addChild(ape2);
			ape2.graphics.drawTexture(monkey2, 100, 0);
		}));
    }
})();