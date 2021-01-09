function ColorChange () {
  // Class「item」を持つ、すべての要素を配列で取得する。
  var items = document.getElementsByClassName ('item');
  // カラーピッカーの値を取得する。
  var color = document.getElementById ('color');

  // 取得した要素を1つずつ取り出し、背景色の変更を行う。
  for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = color.value;
  }
}
