$(`#scrapeButton`).on(`click`, function getData() {
  $.ajax({
    method: `GET`,
    url: `/scrape`,
  }).then(function returnResponse(response) {
    const bodyDiv = $(`#bodyDiv`);
    response.forEach(function loopResponse(dataEntry) {
      const result = $(`<div class="dataEntry">`);
      result.append($(`<p>`).text(dataEntry.Headline));
      result.append(
        $(`<a>`)
          .attr(`href`, dataEntry.URL)
          .text(dataEntry.URL)
      );
      result.append($(`<p>`).text(`Summary: ${dataEntry.Summary}`));
      result.append($(`<img>`).attr(`src`, dataEntry.Image));
      result.append($(`<p>`).text(`By: ${dataEntry.Author}`));
      $(`#bodyDiv`).append(result);
    });
  });
});
