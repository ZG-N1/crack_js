//这个js是通过第二个请求跟栈定位到的（3文件名）
var window = this;
window.url = "/api/match/3";
request = function () {
  var list = {
    page: window.page,
  };
  $.ajax({
    url: window.url,
    dataType: "json",
    async: false,
    data: list,
    type: "GET",
    beforeSend: function (request) {
      (function () {
        var httpRequest = new XMLHttpRequest();
        var url = "/jssm"; // 通过这个拦截器可以发现在正式请求前还发送了一个名为jssm的请求
        //并且请求方式是非异步（false）,即同步请求，需要等这个请求完成后才进行正式请求。
        //所以加密数据就在jssm这个请求中
        httpRequest.open("POST", url, false);
        httpRequest.send();
      })();
    },
    success: function (data) {
      let name = []; //这里删除了原始数组
      let com_name = []; //这里删除了原始数组
      data = data.data;
      let html = ` < table class = "table" > <tr > <th > 申请 / 注册号 < /th><th>申请日期</th > <th > 商标申请人 < /th><th>申请公司名</th > </tr>`;
      let a = `<tr><td class="lwtd0">3472509</td > <td class = "lwtd0" > ~申请~ < /td><td class="lwtd0">马梦启</td > <td class = "lwtd0" > 东莞市协和粘胶有限公司 < /td></tr > `;
      if (window.page) {
      } else {
        window.page = 1;
      }
      let op = 1;
      $.each(data, function (index, val) {
        let dat_year = 2000 + window.page;
        let dat_mou = window.page * 2;
        let dat_day = window.page * 5 + op;
        let dat_result = dat_year + "年" + dat_mou + "月" + dat_day + "日";
        let b = a
          .replace("3472509", val.value)
          .replace("~申请~", dat_result)
          .replace("马梦启", name[op * window.page])
          .replace(
            "东莞市协和粘胶有限公司",
            com_name[op * window.page] + "科技发展公司",
          );
        html += b;
        op += 1;
      });
      $(".buwyqrs")
        .text("")
        .append(html + "</table>");
    },
    complete: function () {},
    error: function () {
      alert(
        "数据加载失败，您的网络环境可能不太支持这道题目。请您关闭所有抓包工具后重试。如果还不行请加群反馈问题。您可以在此期间可进行其他题目的尝试",
      );
      alert(
        "您可以扫描二维码加入交流群反馈问题。相遇只为更好~，期待与您的见面",
      );
      $(".page-message").eq(0).addClass("active");
      $(".page-message").removeClass("active");
      window.location.href = "http://match.yuanrenxue.com/list";
    },
  });
};
request();
