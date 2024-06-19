import requests

cookies = {
    # 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1717384100',
    # 'qpfccr': 'true',
    # 'no-alert3': 'true',
    # 'tk': '2239229102857579115',
    'sessionid': 'lrc1d8uv4plsey5vusglszbe48nwtzn2',
    # 'Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3': '1717416084',
    # 'Hm_lpvt_434c501fe98c1a8ec74b813751d4e3e3': '1717416084',
    # 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1717384101',
    # 'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1717416460',
    # 'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1717416482',
}

headers = {
    # 'Accept': 'application/json, text/javascript, */*; q=0.01',
    # 'Accept-Language': 'zh-CN,zh;q=0.9',
    # 'Cache-Control': 'no-cache',
    # 'Connection': 'keep-alive',
    # # 'Cookie': 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1717384100; qpfccr=true; no-alert3=true; tk=2239229102857579115; sessionid=lrc1d8uv4plsey5vusglszbe48nwtzn2; Hm_lvt_434c501fe98c1a8ec74b813751d4e3e3=1717416084; Hm_lpvt_434c501fe98c1a8ec74b813751d4e3e3=1717416084; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1717384101; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1717416460; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1717416482',
    # 'DNT': '1',
    # 'Pragma': 'no-cache',
    # 'Referer': 'https://match.yuanrenxue.cn/match/19',
    # 'Sec-Fetch-Dest': 'empty',
    # 'Sec-Fetch-Mode': 'cors',
    # 'Sec-Fetch-Site': 'same-origin',
    # 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    # 'X-Requested-With': 'XMLHttpRequest',
    # 'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    # 'sec-ch-ua-mobile': '?0',
    # 'sec-ch-ua-platform': '"Windows"',
}

sum = 0
for page in range(1, 6):
    params = {
        'page': page,
    }

    response = requests.get('https://match.yuanrenxue.cn/api/match/19', params=params, cookies=cookies, headers=headers)
    numbers = response.json().get('data')
    for num in numbers:
        sum += num['value']

print(sum)
