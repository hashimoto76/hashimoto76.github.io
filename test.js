// ボタンの要素を取得
var button = document.getElementById("button");

// ボタンをクリックした時の処理
button.addEventListener("click", function (e) {

    e.preventDefault();

    // 2つの入力フォームの値を取得
    var textForm1 = document.getElementById("textForm1").value;
    var textForm2 = document.getElementById("textForm2").value;

    // 2つの数値を足す
    var sum = parseInt(textForm1, 10) + parseInt(textForm2, 10);

    // 足し算の結果を別の入力フォームに表示
    var resultForm = document.getElementById("resultForm");
    resultForm.value = sum;
});
