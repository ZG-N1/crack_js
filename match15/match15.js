const axios = require("axios");

//第一步 获取单页信息 需要page 和 m 参数
async function fetchData(page, m) {
  const params = {
    page: page,
    m: m,
  };

  const cookies = ["sessionid=u691q6t18ob3npklf4ojjevbbs135xh1"];

  try {
    const response = await axios.get(
      "https://match.yuanrenxue.cn/api/match/15",
      {
        params: params,
        headers: { Cookie: cookies.join(";") },
      },
    );

    let sum = 0;

    if (response.data) {
      response.data.data.forEach((item) => {
        sum += item.value;
      });
    } else {
      console.error("response.data not avaliable");
    }
    return sum;
  } catch (error) {
    console.log("Error:", error);
  }
}

//第二步 生成m值 每请求一页需要生成新的m， 所以参数需要page
async function fetchOnePage(page) {
  try {
    const response = await fetch(
      "https://match.yuanrenxue.cn/static/match/match15/main.wasm",
    );
    const bytes = await response.arrayBuffer();
    const wasm = await WebAssembly.instantiate(bytes);
    const instance = wasm.instance;
    const q = instance.exports.encode;
    const t1 = parseInt(Date.parse(new Date()) / 1000 / 2);
    const t2 = parseInt(
      Date.parse(new Date()) / 1000 / 2 - Math.floor(Math.random() * 50 + 1),
    );
    const m = q(t1, t2).toString() + "|" + t1 + "|" + t2;
    return fetchData(page, m);
  } catch (error) {
    console.log(error);
  }
}

async function fetchPages() {
  let totalSum = 0;
  for (let page = 1; page < 6; page++) {
    const sum = await fetchOnePage(page);
    totalSum += sum;
  }
  console.log(totalSum);
}

fetchPages();
