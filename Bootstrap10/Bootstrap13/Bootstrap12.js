$('#check').click(function () {

    if (
        $('#check').is(':checked')
    ) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
});