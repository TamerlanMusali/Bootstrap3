(() => {

  const forms = document.querySelectorAll('.needs-validation')


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



$('.place').on('input', function () {

  if (
$('#inp').val().length >= 1 &&
      $('#check').is(':checked')
  ) {
      $('.btn').attr('disabled', false);
  } else {
      $('.btn').attr('disabled', true);
  }
});




$('#check').click(function () {

  if (
    $('#inp').val().length >= 1 &&
      $('#check').is(':checked')
  ) {
      $('.btn').attr('disabled', false);
  } else {
      $('.btn').attr('disabled', true);
  }
});