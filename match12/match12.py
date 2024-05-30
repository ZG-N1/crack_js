import requests
import base64

cookies = {
    'sessionid': 'zqws64kp36np4pl7xyb2mszb04b8y3ve',
}

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1717036612; no-alert3=true; tk=2239229102857579115; sessionid=zqws64kp36np4pl7xyb2mszb04b8y3ve; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1717036624; RM4hZBv0dDon443M=; m=62069b2dd6821e4ab33b03b960b078f2; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1717056740; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1717056747',
    'dnt': '1',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://match.yuanrenxue.cn/match/12',
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
for page in range(1, 6):
    string = 'yuanrenxue' + str(page)
    m  = base64.b64encode(string.encode('ascii'))
    params = {
        'page': page,
        'm': m,
    }

    response = requests.get('https://match.yuanrenxue.cn/api/match/12', params=params, cookies=cookies, headers=headers)
    data = response.json().get('data')
    for val in data:
        sum += val['value']
print('结果是: ', sum)
