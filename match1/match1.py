import execjs
import requests


with open("match1.js", "r", encoding="utf-8") as file:
    js_code = file.read()

ctx = execjs.compile(js_code)
m = ctx.call("get_m")
headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'dnt': '1',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://match.yuanrenxue.cn/match/1',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}
sum = 0
count = 0
for page in range(1,6):
    params = {
        'page': page,
        'm': m,
    }

    response = requests.get('https://match.yuanrenxue.cn/api/match/1', params=params, headers=headers)
    res = response.json().get("data")
    for item in res:
        count += 1
        sum += item.get("value")
print(sum/count)
