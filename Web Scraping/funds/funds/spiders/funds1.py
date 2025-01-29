import scrapy
from pathlib import Path

class Funds1Spider(scrapy.Spider):
    name = "funds1"
    allowed_domains = ["ketto.org"]
    start_urls = ["https://www.ketto.org/"]

    def start_requests(self):
        urls = [
            "https://milaap.org/",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)


    def parse(self, response):
        page = response.url
        filename = f"quotes-{page}.html"
        Path(filename).write_bytes(response.body)
        self.log(f"Saved file {filename}")
