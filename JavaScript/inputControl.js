function onlyNum(obj) {
    if(event.keyCode<48 || event.keyCode>57) 
        try {
            event.preventDefault(); //이벤트 취소
        } catch(e) {
            event.returnValue=false; //낮은 IE
        }
}

function onlyAlp(obj) {
    if(event.keyCode<65 || event.keyCode>90 && event.keyCode>122 && event.keyCode<97 ) {
        try {
            event.preventDefault();
        } catch (e) {
            event.returnValue=false;
        }
    }
}

function onlyKorean(obj) {
    if(event.keyCode<12592 || event.keyCode>12687) {
        try {
            event.preventDefault();
        } catch (e) {
            event.returnValue=false;
        }
    }
}

function noKorean(obj) {
    if(event.keyCode==8 || event.keyCode ==9 || event.keyCode ==37 || event.keyCode ==39 ||event.keyCode==47){
        return;
    }

    obj.value = obj.value.replace(/[\ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,"");
}