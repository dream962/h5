Laya.init(640,800,Laya.WebGL);
Laya.stage.bgColor = "#efefef";

Text_InputSingleLine();
Text_InputMultiLine();

function Text_InputSingleLine(){
    var textInput=new Laya.TextInput("单行输入");
    textInput.wordWrap=true;
    textInput.fontSize=30;
    textInput.x=0;
    textInput.y=0;
    textInput.width=300;
    textInput.height=200;
    textInput.bgColor = "#aabbcc";

    Laya.stage.addChild(textInput);
}

function Text_InputMultiLine(){
    var textInput=new Laya.TextInput("多行输入");
    textInput.wordWrap=true;
    textInput.fontSize=30;
    textInput.multiline=true;
    textInput.x=0;
    textInput.y=300;
    textInput.width=300;
    textInput.height=200;
    textInput.bgColor = "#aabbcc";

    Laya.stage.addChild(textInput);
}