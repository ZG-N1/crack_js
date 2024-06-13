import requests
import execjs

headers = {
    'user-agent': "yuanrenxue,project"
}
with open('match5.js', 'r', encoding='utf-8') as fi:
    js_code = fi.read()
ctx = execjs.compile(js_code)
jiami = ctx.call('jiami')
cookies = {
    'RM4hZBv0dDon443M': jiami['cookie_RM4'],
    'sessionid': '4c3xvmbxb13beayuclpxizrz079pugih',
    # 'm': jiami['cookie_m'],
}

top_list = []

for page in range(1, 6):
    params = {
        'page': page,
        'm': jiami['param_m'],
        'f': jiami['param_f'],
    }
    response = requests.get('https://match.yuanrenxue.cn/api/match/5', params=params, cookies=cookies, headers=headers)
    if not response:
        break
    print(params)
    numbers = response.json().get("data")
    for num in numbers:
        top_list.append(num["value"])
top_list.sort(reverse=True)
print(sum(top_list[0:5]))
