module.exports = function get(app) {
  app.get(`/`, function getHome(req, res) {
    res.render(`index`);
  });
};
