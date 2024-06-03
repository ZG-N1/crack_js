import requests
import re

session = requests.session()
cookies = {
    'sessionid': '23y0qf6d65vb22m01e7bkk6l6cqnk8ue'
}

response = session.get('https://match.yuanrenxue.cn/match/13', cookies=cookies)
cookie_y = re.findall(r'\(\'(.*?)\'\)', response.text)
cookie_y = ''.join(cookie_y)
cookie_y_key, cookie_y_value = cookie_y.split('=')
session.cookies.update({cookie_y_key: cookie_y_value})
sum = 0
for page in range(1, 6):
    params = {
        'page': page,
    }
    result = session.get('https://match.yuanrenxue.cn/api/match/13', params=params)
    numbers = result.json().get('data')
    for num in numbers:
        sum += num['value']
print(sum)
