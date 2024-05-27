import requests
from collections import OrderedDict

# 创建一个有序字典来存放请求头
headers = OrderedDict({
    'Accept': '*/*',
    'User-agent': '',
    'Referer': 'https://match.yuanrenxue.cn/match/3',
    'Accept-encoding': '',
    'Accept-language': 'zh-CN,zh;q=0.9',
    'Cookie': 'sessionid=812lu6mrcge7dkx4kpvzds7gdptkxvhv'
})

def send_ordered_request(url, headers):
    request = requests.Request('POST', url)
    prepared_request = request.prepare()
    prepared_request.headers = headers
    # 使用会话对象发送请求
    session = requests.Session()
    # 增加fd代理用于抓包比较
    # proxies = {
    #     'http': 'http://127.0.0.1:8888',
    #     'https': 'http://127.0.0.1:8888'
    # }
    # session.proxies.update(proxies)
    response = session.send(prepared_request, verify=False)
    
    return response
counts = {}
all_dic = []
for page in range(1, 6):
    url = 'https://match.yuanrenxue.cn/jssm'
    res = send_ordered_request(url, headers)
    url2 = f'https://match.yuanrenxue.cn/api/match/3?page={page}'
    res2 = send_ordered_request(url2, headers).json().get("data")
    all_dic += res2
    # print(all)
for item in all_dic:
    key = item.get("value")
    if not counts.get(key):
        counts[key] = 1
    else: 
        counts[key] = counts[key] + 1
print(counts)    
print(max(counts, key=counts.get))
