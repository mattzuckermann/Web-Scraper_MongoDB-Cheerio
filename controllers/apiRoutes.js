/* eslint-disable func-names */

module.exports = function(app, axios, cheerio, db) {
  app.get(`/scrape`, function(req, res) {
    axios.get(`https://www.nytimes.com/section/technology`).then(function(response) {
      const $ = cheerio.load(response.data);
      const results = [];
      $(`div.css-4jyr1y`).each(function(i, element) {
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

        // Create a new Scrape using the `result` object built from scraping
        db.Scrape.create(result)
          .then(function(dbScrape) {
            // If saved successfully, send the the new User document to the client
            console.log(dbScrape);
          })
          .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
          });

        // Push result object to results array in order to send res.json(results) below
        results.push(result);
      });
      // Send a message to the client
      console.log(`Scrape Complete`);
      res.json(results);
    });
  });
};
