import requests
import execjs

with open('match6.js', 'r', encoding='utf8') as fi:
    js_code = fi.read()

ctx = execjs.compile(js_code)
param = ctx.call('jiami')

cookies = {
    'sessionid': 'c7152burcyagebwqyublle1939dx26i6',
}

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
}

all_numbers = []
for x in param:
    params = {
        'page': x['page'],
        'm': x['m'],
        'q': x['q'],
    }

    response = requests.get(
        'https://match.yuanrenxue.cn/api/match/6',
        params=params,
        cookies=cookies, headers=headers)
    numbers = response.json()['data']
    for num in numbers:
        all_numbers.append(num['value'])
print(sum(all_numbers)*24)
