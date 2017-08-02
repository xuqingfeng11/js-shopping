/**
 * Created by true on 2017/4/30.
 */


    function $(id) {
        return document.getElementById(id)
    }

    var checkBoxn = document.getElementsByName("checkboxh");

    function clickAll() {
        for (var i = 0; i < checkBoxn.length; i++) {
            checkBoxn[i].checked = $("allClick").checked
        }
    }

    function selectFirst() {
        var k = 0;
        for (var i = 0; i < checkBoxn.length; i++) {
            if (checkBoxn[i].checked == false) {
                k = 1;
                break;
            }
        }
        if (k == 0) {
            $("allClick").checked = true;
        }
        if (k == 1) {
            $("allClick").checked = false;
        }
    }

    function Mincount(numbId, flag) {//numbId为文本框,flag表示加或者减法
        var count = $(numbId).value;
        if (flag == "mins") {
            if (count <= 1) {
                alert("商品不能小于0")

            } else {
                count = parseInt(count) - 1;
                $(numbId).value = count;
                tomTon();
            }
        } else {
            count = parseInt(count) + 1;
            $(numbId).value = count;
            tomTon();
        }
    }
 function tomTon() {
    var content = $("content");
    var trNum = content.getElementsByTagName("tr");
     var total = 0;
     var integra = 0;
    for (i = 1; i < trNum.length; i++) {

        if (trNum[i].getElementsByTagName("td").length > 2) {
            var point = trNum[i].getElementsByTagName("td")[3].innerHTML;
            var price = trNum[i].getElementsByTagName("td")[4].innerHTML;
            var numB = trNum[i].getElementsByTagName("td")[5].getElementsByTagName("input")[0].value;
            trNum[i].getElementsByTagName("td")[6].innerHTML = price * numB;
            integra += point * numB;
            total += price * numB;
        }
    }
    $("total").innerHTML = total;
    $("integral").innerHTML = integra;

}
function delRow(rowId){
    var index=$(rowId).rowIndex;
    $("shopping").deleteRow(index);
    $("shopping").deleteRow(index-1);
    tomTon();
}

function delAllRow(){
    var checkBoxn = document.getElementsByName("checkboxh");

    for (var i = checkBoxn.length-1;i>=0; i--) {
       if(checkBoxn[i].checked == true){
           var index=$(checkBoxn[i].value).rowIndex;
           $("shopping").deleteRow(index);
           $("shopping").deleteRow(index-1);
       }
    }
    tomTon();
}
window.onload=tomTon;