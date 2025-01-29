import scrapy
from pathlib import Path

class ScrapeSpider(scrapy.Spider):
    name = "scrape"
    allowed_domains = ["www.gofundme.com"]
    start_urls = ["https://www.gofundme.com/en-gb"]

    def start_requests(self):
        urls = [
            "https://www.gofundme.com/en-gb",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url
        filename = f"quotes-{page}.html"
        Path(filename).write_bytes(response.body)
        self.log(f"Saved file {filename}")
