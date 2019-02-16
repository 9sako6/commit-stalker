var sum  = function(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
};

// (function () {
//   // 「戻る」ボタン押下時に呼び出されます。
//   var btnBack_onclick = function (event) {
//     var $form = $("#hoge");
//     $form.attr("action", "/commits");
//     $form.submit();
//   };
  //
  // // 「登録」ボタン押下時に呼び出されます。
  // var btnRegist_onclick = function (event) {
  //   var $form = $("#form");
  //   $form.attr("action", "/shop/regist/complete");
  //   $form.submit();
  // };
  //
  // // ドキュメント読み込み完了時に呼び出されます。
  // var document_onready = function (event) {
  //   $("#btn-back").on("click", btnBack_onclick);
  //   $("#btn-regist").on("click", btnRegist_onclick).focus();
  // };
  // $(document).ready(function() {
  //   (function () {
  //   var btnBack_onclick = function (event) {
  //     var $form = $("#hoge");
  //     $form.attr("action", "/commits");
  //     $form.submit();
  //   };
  //   });
  // });
