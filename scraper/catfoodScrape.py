import requests
from bs4 import BeautifulSoup
from lxml import html, etree
from time import sleep
from random import randint
import json

baseUrl = "https://www.amazon.com/"

headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36 OPR/58.0.3135.127'
}

params = {
    'k': 'cat+food',
    'rh' : 'n:2619533011,n:2975265011'
}

searchUrl = baseUrl + 's'

searchResponse = requests.get(searchUrl, params=params, headers=headers)
searchHtml = html.fromstring(searchResponse.content)

sresult = searchHtml.xpath('//span[@data-component-type="s-search-results"]')
asins = searchHtml.xpath('//span[@data-component-type="s-search-results"]//@data-asin')

products = []
for asin in asins:
    sleep(randint(1, 3))

    productUrl = baseUrl + 'dp/' + asin
    productResponse = requests.get(productUrl, headers=headers)
    productHtml = html.fromstring(productResponse.content)

    retailer = productHtml.xpath('//a[@id="bylineInfo"]/text()')[:1] or ['']
    imageBlob = productHtml.xpath('//div[@id="imgTagWrapperId"]/img/@src')[:1] or ['']
    titleElements = productHtml.xpath('//h1[@id="title"]//text()')
    price = productHtml.xpath('//span[@id="priceblock_ourprice"]//text()')[:1] or ['']

    if not price[0]:
        price = productHtml.xpath('//span[@id="priceblock_dealprice"]/text()')[:1] or ['']

    descriptionElements = productHtml.xpath('//div[@id="featurebullets_feature_div"]')
    if (len(descriptionElements)):
        description = etree.tostring(descriptionElements[0], pretty_print=True)
    else:
        description = ''

    products.append({
        'url': productUrl,
        'title': ''.join(titleElements).strip(),
        'price': price[0].strip(),
        'image': imageBlob[0].strip(),
        'retailer': retailer.strip(),
        'description': description.decode("utf-8").strip()
    })

    print(str(len(products)) + ' out of ' + str(len(asins)) + 'products scraped')

with open('../src/catfood.json', 'w') as outfile:
    json.dump(products, outfile)

print('Finished scraping ' + str(len(products)) + ' products')
