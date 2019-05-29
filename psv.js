var psv設定={};
        //https://syncer.jp/jquery-modal-window 一応参考にしたもの
        window.onload = function () {//modalクラス全体の処理
            document.getElementById('ueberlagerung').addEventListener("click", function () {
                var modi = document.getElementsByClassName("modal-werden");//modalが形式のとかそういう形容詞なら名詞の複数形はこのようになるのか。modalにsをつけて複数形というのは安直で気に入らない。
                Object.keys(modi).forEach(function (modos) {
                    document.getElementById(modos).classList.remove("modal-werden");
                    this.blur();
                    var satz=document.getElementById('satz').value
                    if(satz!=""){
                        textlesen(satz) 
                        document.getElementById('satz').value=""
                    }
                });
            });
        }
        function 下見(){
                var bom = document.getElementById('BOM').value==1 ? new Uint8Array([0xEF, 0xBB, 0xBF]) : '' ;
                var blob = new Blob([ bom, handsontable2psv.string(hot) ], { "type" : "text/plain" });
                if (window.navigator && window.navigator.msSaveOrOpenBlob) { 
                window.navigator.msSaveOrOpenBlob(blob); 
                } else { 
                var objectUrl = URL.createObjectURL(blob); 
                window.open(objectUrl); 
                } 
        }
        function 口寄せ(鈕){
            var 口寄せ動物=document.getElementById(鈕);
            document.getElementById("ueberlagerung").classList.add("modal-werden");
            口寄せ動物.classList.add("modal-werden");
            this.blur();
            口寄せ動物.style.animation = "fadeIn 0.5s ease 0s 1 normal";
        }
        function changeTab(tabclass) {
            document.getElementById('tabbody').className = tabclass
            if(tabclass=='共通')return
            if(!psv設定[tabclass])return
            function id(id){return document.getElementById(id)}
            id('改行コード').value=psv設定[tabclass].改行コード
            id('符号化方式').value=psv設定[tabclass].符号化方式
            id('BOM').checked=psv設定[tabclass].BOM == 1 ? true :false 
            id('区切り文字').value=psv設定[tabclass].区切り文字
            id('出力確認').checked=psv設定[tabclass].出力確認 == 1 ? true :false 
            id('頭確認').checked=psv設定[tabclass].頭確認 == 1 ? true :false 
            id('間隔数').value=psv設定[tabclass].間隔数
            id('タブの大きさ').value=psv設定[tabclass].タブの大きさ
        }
        function 非共通(要素){
        if(document.getElementById('tabbody').className!='共通')要素.classList.add("leicht");
        else 要素.classList.remove("leicht");
        }
            var satz=document.getElementById('satz')
        satz.addEventListener('dragover', function (ev){
            ev.preventDefault()
            ev.stopPropagation()
            ev.dataTransfer.dropEffect = 'copy';
        });
        satz.addEventListener('drop', function (ev){
            ev.preventDefault()
            ev.stopPropagation()
            dateiveraenderung(ev.dataTransfer.files[0])
            document.getElementById('modal-werden').click()
        });
document.onload =     (()=>{        //初期化処理
    //OSごとの処理。http://www9.plala.or.jp/oyoyon/html/script/platform.html
    var os, ua = navigator.userAgent;
    if (ua.match(/Windows Phone/)) {
        document.getElementById('開く').type = "tel";
        os = "Windows Phone";                // Windows Phone (Windows 10 Mobile) 
    }
    else if (ua.match(/iPhone|iPad/)) {
        document.getElementById('開く').type = "tel";
        os = "iOS";                    // iOS (iPhone, iPod touch, iPad) 
    }
    else if (ua.match(/Android ([\.\d]+)/)) {
        document.getElementById('開く').type = "tel";
        os = "Android " + RegExp.$1;            // Android 
    }
            for(var p of document.getElementsByTagName("p") ){
        p.addEventListener("mouseover",(ev)=>{
        if(ev.target.getElementsByClassName('説明')[0])ev.target.getElementsByClassName('説明')[0].style.display='inline-block'
        })
        p.addEventListener("mouseout",(ev)=>{
        if(ev.target.getElementsByClassName('説明')[0])ev.target.getElementsByClassName('説明')[0].style.display='none'
        })
        p.addEventListener("change",(ev)=>{
        非共通(ev.target.parentNode)
        })
        };
var 設定={ //初期化
        改行コード:document.getElementById('改行コード').value,
        符号化方式:document.getElementById('符号化方式').value,
        BOM:document.getElementById('BOM').value,
        区切り文字:document.getElementById('区切り文字').value,
        出力確認:document.getElementById('出力確認').value,
        頭確認:document.getElementById('頭確認').value,
        間隔数:document.getElementById('間隔数').value,
        タブの大きさ:document.getElementById('タブの大きさ').value
    }
        psv設定.入力=設定
        psv設定.出力=設定
        function Altcontextmenu(){
    var dickey=Handsontable.languages.dictionaryKeys
    dickey.CONTEXTMENU_ITEMS_TRANSPOSE= "ContextMenu:items.transpose"
    dickey.CONTEXTMENU_ITEMS_TRANSPOSE_ALERT= "ContextMenu:items.transpose.alert"
    dickey.CONTEXTMENU_ITEMS_TRANSLATE= "ContextMenu:items.translate"
    var dic=Handsontable.languages.getLanguageDictionary('en-US')
    dic['ContextMenu:items.transpose']= "transpose"
    dic['ContextMenu:items.transpose.alert']= "'transpose' does not support multiple selection"
    dic['ContextMenu:items.translate']= "language"
    Handsontable.languages.registerLanguageDictionary('en-US',dic)
    dic=Handsontable.languages.getLanguageDictionary('ja-JP')
    dic['ContextMenu:items.transpose']= "転置"
    dic['ContextMenu:items.transpose.alert']= "「転置」は複数セルを扱えません"
    dic['ContextMenu:items.translate']= "言語"
    Handsontable.languages.registerLanguageDictionary('ja-JP',dic)
    var obj={}
    for(var i=0;i<Handsontable.plugins.ContextMenu.DEFAULT_ITEMS.length;i++)obj[Handsontable.plugins.ContextMenu.DEFAULT_ITEMS[i]]={}
    obj['transpose']= {
        key: 'transpose',
        name() {
        return this.getTranslatedPhrase(Handsontable.languages.dictionaryKeys.CONTEXTMENU_ITEMS_TRANSPOSE);
        },
        callback: function(key, selection, clickEvent) {
            if(selection[1]){
                alert(this.getTranslatedPhrase(Handsontable.languages.dictionaryKeys.CONTEXTMENU_ITEMS_TRANSPOSE_ALERT))
                return
            }
            var src=hot.getData(selection[0].start.row,selection[0].start.col,selection[0].end.row,selection[0].end.col)
            var cols=src.length
            var rows=src[0].length
            var tra=new Array(rows)
            for (var row = 0; row < rows; row++)    {
                tra[row]=new Array(cols)
                for (var col = 0; col < cols; col++)        {
                    tra[row][col] = src[col][row];
                }
            }
            hot.populateFromArray(selection[0].start.row,selection[0].start.col,tra)
        }
        },
        obj["translate"]= { 
            translate(inst,lang){inst.updateSettings({ language: lang  });},
        key: 'translate',
                          name() {
                              return this.getTranslatedPhrase(Handsontable.languages.dictionaryKeys.CONTEXTMENU_ITEMS_TRANSLATE);
                          },
        submenu: {
            items: [
              {
                  key: 'translate:ja-JP',
                  name: '日本語',
                  callback: function(key, selection, clickEvent) {
                      obj["translate"].translate(this,key.split(':')[1])
                  }
              },
              {
                  key: 'translate:en-US',
                  name: 'English',
                  callback: function(key, selection, clickEvent) {
                      obj["translate"].translate(this,key.split(':')[1])
                  }
              }
            ]
        }
    }
    var items={}
    items.items=obj
    return items
}
    var container = document.getElementById('handsontable');
var data;
hot = new Handsontable(container, {
    data: Handsontable.helper.createSpreadsheetData(20, 20),
    contextMenu: new Altcontextmenu,
    language: 'ja-JP',
    CopyPaste: true,
    Filters: true,
    UndoRedo: true,
    licenseKey: 'non-commercial-and-evaluation',
    minSpareRows: 1,
    colHeaders: true

    
})
})()

function トグる(stoikheion) {//stoikheion：ギリシャ語の要素
    stoikheion.value=stoikheion.checked ? 1 :-1
}
function einstellungveraenderung(classname){ //設定変化
    function id(id){return document.getElementById(id)}
    var 設定={
        改行コード:id('改行コード').value,
        符号化方式:id('符号化方式').value,
        BOM:id('BOM').checked ? 1 : -1,  //id('BOM').valueにしたかったがonclickイベントとonchangeイベントではonchangeイベントのほうが早く発火し、change処理を完了しないとclick処理をしない？ので
        区切り文字:id('区切り文字').value,
        出力確認:id('出力確認').checked ? 1 : -1,
        頭確認:id('頭確認').checked ? 1 : -1,
        間隔数:id('間隔数').value,
        タブの大きさ:id('タブの大きさ').value
    }
    if(classname=='共通'){
        psv設定.入力=設定
        psv設定.出力=設定
    }else psv設定[classname]=設定
}
function E29886(tun){
    var con=`
    この機能はご使用のデバイス (コンピューター、モバイル デバイス、またはタブレット) にクッキーが保存されます。
    "クッキー"は、閲覧した Web サイトがご使用のデバイスに保存する小さなテキストファイルです。
    ブラウザーの設定変更によってクッキーをすべて無効化にできます。
    クッキーの詳細については、 http://www.aboutcookies.org をご覧ください。
    この機能を使うにはOKを押してください。
    `
    switch (tun){
        case '保存':
    if(!confirm(con))return
                        document.cookie='psv設定入力='+encodeURIComponent(JSON.stringify(psv設定.入力))+';max-age='+(60*60*24*30)
    document.cookie='psv設定出力='+encodeURIComponent(JSON.stringify(psv設定.出力))+';max-age='+(60*60*24*30)
    break;
        case '復元':
                    if(document.cookie=='')break;
            if(!confirm(con))return
                    var cookies=decodeURIComponent(document.cookie).split(";")
                    cookies.forEach(( crackie )=> { //つまらないダジャレ
                    var ind=crackie.indexOf('psv設定')
                        if(ind>0){
                            switch(crackie.substr(ind+5,2)){
                            case '入力':
                            psv設定.入力=JSON.parse(crackie.substring(ind+8))
                            break;
                            case '出力':
                            psv設定.出力=JSON.parse(crackie.substring(ind+8))
                            break;
}
}
})
function id(id){return document.getElementById(id)}
var 設定=['改行コード','符号化方式','BOM','区切り文字','出力確認','頭確認','間隔数','タブの大きさ']
設定.forEach((要素)=>{
    id(要素).value=psv設定.入力[要素]
    if(psv設定.入力[要素]!=psv設定.出力[要素])id(要素).classList.add("leicht");
})
break; 
                case '削除':
document.cookie='psv設定入力="";max-age=0'
document.cookie='psv設定出力="";max-age=0'
break;
}
}
function textlesen(result,改行コード) {//テキスト読み込み
    if(改行コード=== undefined)改行コード=/\r\n|\n/
    var 頭確認 = document.getElementById('頭確認').value
    var 間隔数 = parseInt(document.getElementById('間隔数').value)

    var 行列 = [];
    var 列 = [];
    var 区切り文字 = String.fromCharCode(document.getElementById('区切り文字').value);
    if (document.getElementById('区切り文字').value == "P" || document.getElementById('区切り文字').value == "AUTO") {   //psvのインポート。だれかいいアルゴリズムあったら
        var reg = new RegExp((" ").repeat(間隔数),"g");
        var str = result.replace(reg, String.fromCharCode(6174)); //不安だけど仮にカプレカ数を区切り文字
        var 行 = str.split(改行コード);
        var 列数 = [];
        区切り文字 = String.fromCharCode(6174);
        for (var j = 0; j < 行.length; j++) {
            列 = [];
            for (var k = 0; k < 行[j].split(区切り文字).length; k++) {
                列.push(行[j].split(区切り文字)[k]);
            }
            列数.push(列.length);
            行列.push(列);
        }
        for (var j = 0; j < 行.length; j++) {//a  	bになるのでをa	bにする処理
            for (var k = 0; k < 行[j].split(区切り文字).length; k++) {
                行列[j][k] = 行列[j][k].replace(/^ +$/g, '');
            }
        }
    
        var 最大列数=列数.reduce((a,b)=>a>b?a:b)
        var 最小列数=列数.reduce((a,b)=>b<a?b==1?a:b:a)
        var maxcol = [0];  // 列のバイト数
        for (var k = 0; k < 最大列数; k++) { //最大幅を求める
            for (var j = 0; j < 行.length; j++) {
                if (行列[j][k]) if (maxcol[k] < getByteLength(行列[j][k])) maxcol[k] = getByteLength(行列[j][k])+1;
            }
            maxcol.push(0)
        }
        行列 = [];
        行=result.split(改行コード);
        var l=0
        for (var j = 0; j < 行.length; j++) {//a 			bになるのでをa	bにする処理
            列 = [];
            for (var k = 0; k < 最小列数; k++) {
                列.push(行[j].substr(l,maxcol[k]))
                l+=maxcol[k];
            }l=0;
                    
            行列.push(列);
        }
        for (var j = 0; j < 行.length; j++) {//a  	bになるのでをa	bにする処理
            for (var k = 0; k < 行[j].split(区切り文字).length; k++) {
                行列[j][k] = 行列[j][k].replace(/^ +$/g, '');
            }
        }

    } else {
        var str = result;
        var 行 = str.split(改行コード);
        for (var j = 0; j < 行.length; j++) {
            列 = [];
            for (var k = 0; k < 行[j].split(区切り文字).length; k++) {
                列.push(行[j].split(区切り文字)[k]);
            }
            行列.push(列);
        }
    }
    var headers = true
    if (頭確認 == 1){headers = 行列[0];行列.shift();}
    data = 行列
    hot.updateSettings({
        colHeaders: headers
    });           
    hot.loadData(data);
    document.getElementById("satz").value="";
}
function dateiveraenderung(e) {//ファイル変化
    var 改行コード = document.getElementById('改行コード').value
    var 符号化方式 = document.getElementById('符号化方式').value
    function dateilesen() {      //ファイル読み込み
        leser.readAsText(datei, 符号化方式);
        改行コード = 改行コード ? '\r\n' : (改行コード == "CR") ? '\r' : '\n';   //デフォルトではLFで開く
        if (document.getElementById('区切り文字').value == "AUTO") {      //この4種類以外はPSVとして認識
            switch (dateiname.match(/[^\.]+$/)[0]) {
                case 'psv': document.getElementById('区切り文字').value = "P"; break;
                case 'csv': document.getElementById('区切り文字').value = "0x2C"; break;
                case 'tsv': document.getElementById('区切り文字').value = "0x09"; break;
                case 'ssv': document.getElementById('区切り文字').value = "0x20"; break;
                default: document.getElementById('区切り文字').value = "P"; break;
            }
        }
        
        leser.onload = ()=>textlesen(leser.result,改行コード)
    }
    var datei = e;
    dateiname=datei.name
    document.getElementById('ファイルの名前').value=datei.name 
    document.getElementById('ファイルの更新時刻').innerHTML=datei.lastModifiedDate
    document.getElementById('ファイルのパス').innerHTML=datei.webkitRelativePath
    document.getElementById('ファイルのサイズ').innerHTML=datei.size
    document.getElementById('ファイルのタイプ').innerHTML=datei.type
    var leser = new FileReader();
    if (改行コード == 'AUTO' || 符号化方式 == 'AUTO') {// 符号化方式と改行コードのどちらかがAUTOになっている場合はいったんファイルをバイナリで読み込んでから再読み込み
        leser.readAsArrayBuffer(datei);
        leser.onload = function (ev) {
            var array = new Uint8Array(leser.result);
            if (改行コード == "AUTO") {
                if (array.indexOf(13)) {
                    document.getElementById('改行コード').value = "LF";
                    if (array[array.indexOf(13) + 1] == 10) document.getElementById('改行コード').value = "CRLF";
                } else {
                    if (array.indexOf(10)) document.getElementById('改行コード').value = "CR";
                }
            }
            if (符号化方式 == "AUTO") {
                document.getElementById('符号化方式').value = encordcharsetico[Encoding.detect(array)];
            }
            改行コード = document.getElementById('改行コード').value;  //プリミティブ型は参照渡しではないため
            符号化方式 = document.getElementById('符号化方式').value;
            dateilesen();
            document.getElementById("ueberlagerung").click();
        }
    } else {
        dateilesen();
        document.getElementById("ueberlagerung").click();
    }
}
var encordcharsetico = {
    SJIS: 'Shift_JIS',
    JIS: 'JIS',
    EUCJP: 'EUC-JP',
    UTF16: 'UTF-16',
    UTF16BE: 'UTF-16BE',
    UTF16LE: 'UTF-16',
    UNICODE: 'ISO-8859-1',    //encording.jsでは(JavaScript Unicode Array)となりunicodeのなかのなにかということだが、ISO-8859-1はサクラエディタのLatin1でencording.jsではこれを直接サポートしていない。そもそも滅多に使われるものではないのでくっつけた。
    UTF8: 'UTF-8',
    BINARY: 'UTF-7',        // 同様
    UTF32: 'AUTO',
    ASCII: 'AUTO'
};
var charsetencordico = {//charsetencordicoとencordcharseticoの２つの変換辞書があるのは不可逆でUTF32''BINARY''ASCII'は検知しかできないから。
    'Shift_JIS': 'SJIS',
    'JIS': 'JIS',
    'EUC-JP': 'EUCJP',
    'UTF-16': 'UTF16',
    'UTF-16BE': 'UTF16BE',
    'ISO-8859-1': 'UNICODE',
    'UTF-8': 'UTF8',
    'UTF-7': 'UNICODE',
    'AUTO': 'UNICODE'
}
function getByteLength(str) {
    str = (!str) ? "" : str;
    if (document.getElementById('出力確認').value == 1) return Encoding.convert(Encoding.urlDecode(encodeURIComponent(str)), charsetencordico[document.getElementById('符号化方式').value], 'AUTO').length;
    return encodeURI(str).replace(/%../g, "*").length;
}

var hot
var handsontable2psv = {
    //https://github.com/juantascon/jquery-handsontable-csv/blob/master/jquery.handsontable.csv.js
    string: function (instance) {
        var 間隔数 = parseInt(document.getElementById('間隔数').value);
        var 改行コード = (document.getElementById('改行コード').value == "CR") ? '\r' : (document.getElementById('改行コード').value == "LF") ? '\n' : '\r\n';
        if (document.getElementById('区切り文字').value == "P" || document.getElementById('区切り文字').value == "AUTO") {
            var maxcolumns = [];
            for (var k = 0; k < instance.countRows() ; k++) {
                maxcolumns.push(0);
                if (document.getElementById('頭確認').value == 1) {
                    if (instance.getColHeader(k)) if (maxcolumns[k] < getByteLength(instance.getColHeader(k))) maxcolumns[k] = getByteLength(instance.getColHeader(k))
                }
                for (var j = 0; j < instance.countCols() ; j++) {
                    if (instance.getDataAtCell(j, k)) if (maxcolumns[k] < getByteLength(instance.getDataAtCell(j, k))) maxcolumns[k] = getByteLength(instance.getDataAtCell(j, k))
                }
            }
            var psv = '';
            if (document.getElementById('頭確認').value == 1) {
                for (var k = 0; k < instance.countCols() ; k++) {
                    if (instance.getColHeader(k) == null || instance.getColHeader(k) == undefined) { //0o%
                        psv += (" ").repeat(maxcolumns[k] + 間隔数);
                    } else {
                        psv += instance.getColHeader(k) + (" ").repeat(maxcolumns[k] + 間隔数 - getByteLength(instance.getColHeader(k).toString()));
                    }
                }
                psv += 改行コード;
            }
            for (var j = 0; j < instance.countRows() ; j++) {
                for (var k = 0; k < instance.countCols() ; k++) {
                    if (instance.getDataAtCell(j, k) == null || instance.getDataAtCell(j, k) == undefined) { //0o%
                        psv += (" ").repeat(maxcolumns[k] + 間隔数);
                    } else {
                        psv += instance.getDataAtCell(j, k) + (" ").repeat(maxcolumns[k] + 間隔数 - getByteLength(instance.getDataAtCell(j, k).toString()));
                    }
                }
                psv += 改行コード;
            }
            return psv;
        } else {
            var 区切り文字 = String.fromCharCode(document.getElementById('区切り文字').value);
            regexp = new RegExp(区切り文字 + '$');
            var variousv = '';
            if (document.getElementById('頭確認').value == 1) {
                for (var k = 0; k < instance.countCols() ; k++) {
                    if (instance.getColHeader(k) != null && instance.getColHeader(k) != undefined) variousv += instance.getColHeader(k) + 区切り文字;
                }
                variousv = variousv.replace(RegExp, '');
                variousv += 改行コード;
            }
            for (var j = 0; j < instance.countRows() ; j++) {
                for (var k = 0; k < instance.countCols() ; k++) {
                    if (instance.getDataAtCell(j, k) != null && instance.getDataAtCell(j, k) != undefined) variousv += instance.getDataAtCell(j, k) + 区切り文字;
                }
                variousv = variousv.replace(RegExp, '');
                variousv += 改行コード;
            }
            return variousv;
        }
    },
    download: function (instance) {
        //さんきゅーhttps://kuroeveryday.blogspot.com/2016/05/file-download-from-browser.html
        var psv = handsontable2psv.string(instance)
        var mimeType = 'text/plain';
        var name = document.getElementById('ファイルの名前').value;
        var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
        var blob = new Blob([bom, psv], { type: mimeType });
        var a = document.createElement('a');
        a.download = name;
        a.target = '_blank';
        if (window.navigator.msSaveBlob) {
            // for IE
            window.navigator.msSaveBlob(blob, name)
        }
        else if (window.UR行列 && window.URL.createObjectURL) {
            // for Firefox
            a.href = window.URL.createObjectURL(blob);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        else if (window.webkitUR行列 && window.webkitURL.createObject) {
            // for Chrome
            a.href = window.webkitURL.createObjectURL(blob);
            a.click();
        }
        else {
            // for Safari
            window.open('data:' + mimeType + ';base64,' + window.Base64.encode(psv), '_blank');
        }
    }
}



