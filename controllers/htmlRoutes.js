module.exports = function(app, db) {
  app.get(`/`, function(req, res) {
    res.render(`index`);
  });

  app.get(`/articles`, function(req, res) {
    db.Scrape.find({})
      .sort({ _id: -1 })
      .then(function(dbScrape) {
        res.render(`allArticles`, {
          scrapedArticles: dbScrape,
        });
      });
  });

  app.get(`/articles/:id`, function(req, res) {
    db.Scrape.find({ _id: req.params.id })
      .populate(`note`)
      .then(function(dbScrape) {
        res.render(`singleArticle`, {
          scrapedArticles: dbScrape,
        });
      });
  });

  app.get(`/articles/:id/comment`, function(req, res) {
    db.Scrape.find({ _id: req.params.id }).then(function(dbScrape) {
      res.render(`singleArticleComment`, {
        scrapedArticles: dbScrape,
      });
    });
  });

  app.get(`*`, function(req, res) {
    res.redirect(`/articles`);
  });
};
