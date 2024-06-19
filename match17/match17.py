import httpx
client = httpx.Client(http2=True)
cookies = {
    'tk': '2239229102857579115',
    'sessionid': 'lrc1d8uv4plsey5vusglszbe48nwtzn2',
    # 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1717384100',
    # 'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1717417102',
    # 'qpfccr': 'true',
    # 'no-alert3': 'true',
}
sum = 0
for page in range(1, 6):
    params = {
        'page': page,
    }
    response = client.get('https://match.yuanrenxue.cn/api/match/17', cookies=cookies, params=params)
    numbers = response.json().get('data')
    for num in numbers:
        sum += num['value']
print(sum)

#
# headers = {
#     'accept': 'application/json, text/javascript, */*; q=0.01',
#     'accept-language': 'zh-CN,zh;q=0.9',
#     'cache-control': 'no-cache',
#     'dnt': '1',
#     'pragma': 'no-cache',
#     'priority': 'u=0, i',
#     'referer': 'https://match.yuanrenxue.cn/match/17',
#     'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
#     'sec-ch-ua-mobile': '?0',
#     'sec-ch-ua-platform': '"Windows"',
#     'sec-fetch-dest': 'empty',
#     'sec-fetch-mode': 'cors',
#     'sec-fetch-site': 'same-origin',
#     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
#     'x-requested-with': 'XMLHttpRequest',
# }
#
#
# response = requests.get('https://match.yuanrenxue.cn/api/match/17', params=params, cookies=cookies, headers=headers)
# print(response.status_code)
