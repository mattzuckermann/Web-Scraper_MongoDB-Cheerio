$(`#saveNote`).on(`click`, function() {
  const id = $(this).attr(`data-id`);
  $.ajax({
    method: `POST`,
    url: `/saveComment/${id}`,
    data: {
      subject: $(`#subjectForm`)
        .val()
        .trim(),
      author: $(`#authorForm`)
        .val()
        .trim(),
      body: $(`#bodyForm`)
        .val()
        .trim(),
    },
  })
    // Return json with updated note to scraped article
    .then(function(dataScrape) {
      console.log(dataScrape);
      $(`#notesDiv`).empty();
    });

  $(`#subjectForm`).val(``);
  $(`#authorForm`).val(``);
  $(`#bodyForm`).val(``);
});
