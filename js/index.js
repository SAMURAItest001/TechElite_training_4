$(function() {
    $(".flexbox_item").click(function() {
      let id = $(this).attr("id");
      $(".flexbox_item").removeClass("active");
      $(this).addClass("active");
      $(".description_text").removeClass("active");
      $("#"+id+"_text").addClass("active");
    });

// 【09月17日　課題三で追加】https://125naroom.com/web/2899　参照　サービスを押したら要素まで飛ぶ
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


// 【09月23日　課題四で追加】都道府県を選択したら市区町村が出てくるところ
// 参考：https://yutori-shine.com/tech/archives/12
// 各地域ごとの都道府県の配列を設定
var hokkaido = {
      1:'札幌市',
      2:'函館市',
      3:'小樽市',
      4:'旭川市',
      5:'室蘭市',
      6:'釧路市',
      7:'帯広市',
      8:'北見市',
      9:'夕張市',
      10:'岩見沢市',
      11:'網走市',
      12:'留萌市',
      13:'苫小牧市',
      14:'稚内市',
      15:'美唄市',
      16:'芦別市',
      17:'江別市',
      18:'赤平市',
      19:'紋別市',
      20:'士別市',
      21:'名寄市',
      22:'三笠市',
      23:'根室市',
      24:'千歳市',
      25:'滝川市',
      26:'砂川市',
      27:'歌志内市',
      28:'深川市',
      29:'富良野市',
      30:'登別市',
      31:'恵庭市',
      32:'伊達市',
      33:'北広島市',
      34:'石狩市',
      35:'北斗市',
};

var akita = {
      36:'青森市',
      37:'弘前市',
      38:'八戸市',
      39:'黒石市',
      40:'五所川原市',
      41:'十和田市',
      42:'三沢市',
      43:'むつ市',
      44:'つがる市',
      45:'平川市',
};
var iwate = {
      46:'盛岡市',
      47:'宮古市',
      48:'大船渡市',
      49:'花巻市',
      50:'北上市',
      51:'久慈市',
      52:'遠野市',
      53:'一関市',
      54:'陸前高田市',
      55:'釜石市',
      56:'二戸市',
      57:'八幡平市',
      58:'奥州市',
      59:'滝沢市',
};

    // 各地域を配列にまとめる
    var areaArray = [hokkaido, akita, iwate];

  // 地域選択用セレクトボックスが切り替わったら発動
  $('#pref').change(function() {
    // 一旦、都道府県選択用セレクトボックスのoptionを消去
    $('#city > option').remove();
    //　地域選択用セレクトボックスの値を取得
    var val = $(this).val();
    // 選択したvalue値を変数に格納
    var selectedArea = areaArray[val];
    // 選択した地域の都道府県をセレクトボックスのoptionに追加
    $.each(selectedArea, function(index, value){
      $('#city').append($('<option>').html(value).val(index));
    })
  });

// ハンバーガーメニューのぬるぬる動くところ
/* 【09月24日　課題四で追加】ハンバーガーメニュー
  参考URL：https://rilaks.jp/blog/hamburgermenu-jquery/ */
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });

// ↑ここまでは問題なく機能する

// 【09月24日　課題四で追加】抜けていたため記載 
$('form').submit(function() {
  let pref = $('select[name="pref"]').val();
  var validation_flg = false;
    if(pref == "") {
      $(".pref_validation").css("display","block");
      validation_flg = true
    } else
    {
  //エラーじゃないのにメッセージがあったら
  $(".pref_validation").remove();
    }

  let city = $('select[name="city"]').val();
    if(city == "") {
      $(".city_validation").css("display","block");
      validation_flg = true
    } else
    {
  //エラーじゃないのにメッセージがあったら
  $(".city_validation").remove();
    }

  let tel = $('input[type="tel"]').val(); // 【09月26日　課題四で追加】半角スペースを消しました。
    if(tel){
      const regex = /^0\d{9,10}$/
       if(!regex.test(tel)) {
         $(".tel_validation").css("display","block");
         validation_flg = true
  }
       return false;
    }
    // if(validation_flg) {
    //   return false;
   });

});
