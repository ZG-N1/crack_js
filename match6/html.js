window.i = "";
window.url = "/api/match/6";
request = function () {
  t = Date.parse(new Date());
  var list = {
    page: window.page,
    m: r(t, window.o),
    q: (window.i += window.o + "-" + t + "|"),
  };
  window.o += 1;
  $.ajax({
    url: window.url,
    dataType: "json",
    async: false,
    data: list,
    type: "GET",
    beforeSend: function (request) {},
    success: function (data) {
      if (window.page) {
      } else {
        window.page = 1;
      }
      data = data.data;
      let html = "";
      let arg = 1;
      let puq = `<tr data-week="3"><td>date_twice</td><td>2020-10-date_value</td>caipiaohao<td>total_value</td><td>result_value1</td><td>result_value2</td><td>result_value3</td><td>0</td><td></td></tr>`;
      let arr_arg = [1, 8, 7, 3, 5, 7, 10, 2, 9, 4];
      $.each(data, function (index, val) {
        let caipiao = `<td><span class="rq1">arg1</span><span class="rq1">arg2</span><span class="rq1">arg3</span><span class="rq1">arg4</span><span class="rq1">arg5</span><span class="rq1">arg6</span><span class="rq1">arg7</span></td><td><span class="bq1">arg8</span></td>`;
        let arr = [5, 1, 7, 6, 3, 2, 4, 7];
        for (let c = 1; c <= 8; c++) {
          caipiao = caipiao.replace(
            "arg" + c,
            Math.floor((((arr_arg[arg] << 2) / 5 + c) * c) / 3) +
              1 +
              arr[window.page],
          );
        }
        html += puq
          .replace("caipiaohao", caipiao)
          .replace("date_twice", arg * window.page + 2020097)
          .replace("date_value", "0" + window.page)
          .replace("result_value3", val.value)
          .replace("total_value", val.value * 24) //数据算法
          .replace("result_value2", val.value * 8)
          .replace("result_value1", val.value * 15);
        arg += 1;
      });
      $(".resbbp").text("").append(html);
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
