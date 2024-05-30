request = function () {
  //    点击换页后的操作，先得到翻到了几页
  if (window.page) {
  } else {
    window.page = 1;
  }
  var list = {
    page: window.page,
    m: btoa("yuanrenxue" + window.page),
  };
  $.ajax({
    url: window.url,
    dataType: "json",
    async: false,
    data: list,
    type: "GET",
    beforeSend: function (request) {},
    success: function (data) {
      data = data.data;
      let html = "";
      $.each(data, function (index, val) {
        html += "<td>" + val.value + "</td>";
      });
      $(".number").text("").append(html);
    },
    complete: function () {},
    error: function () {
      alert("因未知原因，数据拉取失败。可能是触发了风控系统");
      alert("生而为虫，我很抱歉");
      $(".page-message").eq(0).addClass("active");
      $(".page-message").removeClass("active");
    },
  });
};
request();
