
import requests
import csv

url = 'https://api.bukalapak.com/multistrategy-products'
key = input('masukan Keyword :')
write = csv.writer(open('hasil/{}.csv'.format(key), 'w', newline=''))
header= ['no', 'nama', 'price', 'condition']
write.writerow(header)


count = 0
for halaman in range(1,11):
    parameter = { 
    'keywords' : key,
    'limit' : '50',
    'offset' : 50,
    'facet' : True,
    'page' : halaman,
    'shouldUseSeoMultistrategy' : False,
    'show_search_contexts' : True,
    'access_token' : 'RShffFD8oDMyVRtUWZ5FNMvY3szKITJ0qAd3Lk-Gyt8B0Q'
    }

    r = requests.get(url, params=parameter).json()

    products = r['data']
    for p in products:
        nama = p['name']
        price = p['price']
        condition = p['condition']
        count+=1
        print('no :',count, 'name :',nama, 'harga :', price, 'condition :', condition)
        write = csv.writer(open('hasil/{}.csv'.format(key), 'a', newline=''))
        data= [count, nama, price, condition]
        write.writerow(data)
