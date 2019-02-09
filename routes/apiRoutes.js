module.exports = function getApiRoutes(app, axios, cheerio) {
  app.get(`/scrape`, function getResults(req, res) {
    console.log(`running scrape`);
    axios.get(`https://www.nytimes.com/section/technology`).then(function axiosResponse(response) {
      console.log(`This worked`);
      const $ = cheerio.load(response.data);

      $(`div.css-4jyr1y`).each(function getScrapedData(i, element) {
        const result = {};
        result.Headline = $(this)
          .find(`h2`)
          .text();
        result.URL = `https://www.nytimes.com${$(this)
          .children(`a`)
          .attr(`href`)}`;
        result.Summary = $(this)
          .find(`p.css-1echdzn`)
          .text();
        result.Image = $(this)
          .find(`figure`)
          .attr(`itemid`);
        result.Author = $(this)
          .find(`span.css-1n7hynb`)
          .text();

        console.log(result);
      });
    });
  });
};
