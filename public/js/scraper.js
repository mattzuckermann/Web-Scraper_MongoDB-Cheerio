$(`#scrapeButton`).on(`click`, function getData() {
  $.ajax({
    method: `GET`,
    url: `/scrape`,
  }).then(function returnResponse(response) {
    response.forEach(function loopResponse(dataEntry) {
      //   let result = $(`<div>`);
      console.log(dataEntry.Headline);
      //   $(`<p>`).text(dataEntry.Headline);
      console.log(dataEntry.URL);
      //   $(`<p>`).attr(`href`, dataEntry.URL);
      console.log(dataEntry.Summary);
      //   $(`<p>`).text(dataEntry.Summary);
      console.log(dataEntry.Image);
      //   $(`<img>`).attr(`href`, dataEntry.Image);
      console.log(dataEntry.Author);
      //   $(`<p>`).text(dataEntry.Author);
      console.log(dataEntry.Date);
      //   $(`<p>`).text(dataEntry.Date);
    });
  });
});
