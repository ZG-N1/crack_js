import requests
import execjs

cookies = {
    'sessionid': 'zsfbnknoeftitcus63q3hfh805bkehcd',
}

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://match.yuanrenxue.cn/match/16',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'yuanrenxue.project',
    'x-requested-with': 'XMLHttpRequest',
}
SUM = 0
with open('match16.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)

for page in range(1, 6):
    param = ctx.call('get_param', page)
    params = {
        'page': page,
        'm': param.get('m'),
        't': int(param.get('t')),
    }
    response = requests.get('https://match.yuanrenxue.cn/api/match/16', params=params, cookies=cookies, headers=headers)
    numbers = response.json().get('data')
    if numbers:
        for num in numbers:
            SUM += num['value']
    print(" 未获取到结果的原因：", response.json().get('error'), '\n', params)
print(" result: ", SUM)
