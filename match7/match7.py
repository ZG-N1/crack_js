import base64
import json
import requests
from fontTools.ttLib import TTFont
from bs4 import BeautifulSoup


def create_mapping(file_name):
    with open(file_name, 'r') as f:
        soup = BeautifulSoup(f, 'xml')
    TTGlyph = soup.find_all('TTGlyph')
    num_mapping = {}
    for items in TTGlyph:
        name = items['name'].replace('uni', '&#x')
        contour = items.find_all('contour')
        pt = contour[0].find_all('pt')
        length = len(pt)
        match length:
            case 13:
                num_mapping[name] = 0
            case 10:
                num_mapping[name] = 1
            case 30:
                num_mapping[name] = 2
            case 44:
                num_mapping[name] = 3
            case 11:
                num_mapping[name] = 4
            case 37:
                num_mapping[name] = 5
            case 28:
                num_mapping[name] = 6
            case 7:
                num_mapping[name] = 7
            case 32:
                num_mapping[name] = 8
            case 29:
                num_mapping[name] = 9
    return num_mapping

def ttf2xml(ttf, file_name):
    with open('./temp.ttf', 'wb') as fi:
        fi.write(base64.b64decode(ttf))
    font = TTFont('temp.ttf')
    font.saveXML(file_name)

def main():
    headers = {
        'User-Agent': 'yuanrenxue.project',
    }
    cookies = {
        'sessionid':'tmytx0vifskdx168dj9l01bs6ydkvt32'
    }
    numbers_all = []
    numbers_all_dic = {}
    name = ['极镀ギ紬荕', '爷灬霸气傀儡', '梦战苍穹', '傲世哥', 'мaη肆風聲', '一刀メ隔世', '横刀メ绝杀', 'Q不死你R死你', '魔帝殤邪', '封刀不再战', '倾城孤狼', '戎马江湖', '狂得像风', '影之哀伤', '謸氕づ独尊', '傲视狂杀', '追风之梦', '枭雄在世', '傲视之巅', '黑夜刺客', '占你心为王', '爷来取你狗命', '御风踏血', '凫矢暮城', '孤影メ残刀', '野区霸王', '噬血啸月', '风逝无迹', '帅的睡不着', '血色杀戮者', '冷视天下', '帅出新高度', '風狆瑬蒗', '灵魂禁锢', 'ヤ地狱篮枫ゞ', '溅血メ破天', '剑尊メ杀戮', '塞外う飛龍', '哥‘K纯帅', '逆風祈雨', '恣意踏江山', '望断、天涯路', '地獄惡灵', '疯狂メ孽杀', '寂月灭影', '骚年霸称帝王', '狂杀メ无赦', '死灵的哀伤', '撩妹界扛把子', '霸刀☆藐视天下', '潇洒又能打', '狂卩龙灬巅丷峰', '羁旅天涯.', '南宫沐风', '风恋绝尘', '剑下孤魂', '一蓑烟雨', '领域★倾战', '威龙丶断魂神狙', '辉煌战绩', '屎来运赚', '伱、Bu够档次', '九音引魂箫', '骨子里的傲气', '霸海断长空', '没枪也很狂', '死魂★之灵']
    for page in range(1, 6):
        params = {
            'page':page,
        }
        response = requests.get('https://match.yuanrenxue.cn/api/match/7', headers=headers, params=params, cookies=cookies)
        ttf = response.json().get('woff')
        data = response.json().get('data')

        ttf2xml(ttf, 'font.xml')
        num_mapping = create_mapping('font.xml')
        for items in data:
            num_represent = items['value'].strip().split(' ')
            one_num = []
            for i in num_represent:
                one_num.append(num_mapping[i])
            oneNum = ''.join(map(str, one_num))
            numbers_all.append(int(oneNum))
    for index, number in enumerate(numbers_all):
        numbers_all_dic[name[index+1]] = number
    
    print(max(numbers_all_dic, key=numbers_all_dic.get))
# let yyq =1
# let name = ['极镀ギ紬荕', '爷灬霸气傀儡', '梦战苍穹', '傲世哥', 'мaη肆風聲', '一刀メ隔世', '横刀メ绝杀', 'Q不死你R死你', '魔帝殤邪', '封刀不再战', '倾城孤狼', '戎马江湖', '狂得像风', '影之哀伤', '謸氕づ独尊', '傲视狂杀', '追风之梦', '枭雄在世', '傲视之巅', '黑夜刺客', '占你心为王', '爷来取你狗命', '御风踏血', '凫矢暮城', '孤影メ残刀', '野区霸王', '噬血啸月', '风逝无迹', '帅的睡不着', '血色杀戮者', '冷视天下', '帅出新高度', '風狆瑬蒗', '灵魂禁锢', 'ヤ地狱篮枫ゞ', '溅血メ破天', '剑尊メ杀戮', '塞外う飛龍', '哥‘K纯帅', '逆風祈雨', '恣意踏江山', '望断、天涯路', '地獄惡灵', '疯狂メ孽杀', '寂月灭影', '骚年霸称帝王', '狂杀メ无赦', '死灵的哀伤', '撩妹界扛把子', '霸刀☆藐视天下', '潇洒又能打', '狂卩龙灬巅丷峰', '羁旅天涯.', '南宫沐风', '风恋绝尘', '剑下孤魂', '一蓑烟雨', '领域★倾战', '威龙丶断魂神狙', '辉煌战绩', '屎来运赚', '伱、Bu够档次', '九音引魂箫', '骨子里的傲气', '霸海断长空', '没枪也很狂', '死魂★之灵'];
# html += ppo.replace('九不想乖', name[yyq + (window.page - 1) * 10]).replace('win_number', imgnum_arr[yyq] * level_arr[window.page] * 88 + '场').replace(/win_rank/g, imgnum_arr[yyq] + 60 + level_arr[window.page] + '%').replace('random_level', imgnum_arr[yyq] * level_arr[window.page] + 100 * level_arr[window.page]).replace('img_number', yyq * window.page).replace('random_rank_number', val.value.replace(/ /g, '') + 'LP');
# yyq += 1;
if __name__ == "__main__":
    main()
