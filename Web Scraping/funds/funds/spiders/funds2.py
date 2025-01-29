import scrapy


class Funds2Spider(scrapy.Spider):
    name = "funds2"
    allowed_domains = ["www.ketto.org"]
    start_urls = ["https://www.ketto.org/"]

    def parse(self, response):
        pass
