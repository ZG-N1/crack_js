import requests
import execjs 

# python调用js的用法还不熟需要多练习
# 要注意编码格式
with open("match2.js", 'r', encoding='utf-8') as file:
    js_code = file.read()
ctx = execjs.compile(js_code)
m = ctx.call('get_m')

cookies = {
'm': m,
}

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1716567157; qpfccr=true; no-alert3=true; tk=2239229102857579115; sessionid=55ab0y5seek0hipvwlv3vx211ax9khdo; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1716567452; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1716568117; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1716568118; m=472376b64a0c9be9af51f4d6a8a83426|1716568131000',
    'dnt': '1',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://match.yuanrenxue.cn/match/2',
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
for page in range(1,6):
    response = requests.get(f'https://match.yuanrenxue.cn/api/match/2?page={page}', cookies=cookies, headers=headers)
    res =response.json().get("data")
    for i in res:
        sum += i.get("value")
print(sum)
