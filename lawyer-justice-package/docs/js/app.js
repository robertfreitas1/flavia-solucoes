  $(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      var $msg = $('#msg-status');
      $msg.css('color', 'green').text('⏳ Enviando...');

      $.ajax({
        url: $(this).attr('action'),
        method: 'POST',
        data: $(this).serialize(),
        success: function() {
          $msg.text('✅ Mensagem enviada com sucesso!');
          $('#contact-form')[0].reset();
        },
        error: function() {
          $msg.css('color', 'red').text('❌ Erro ao enviar. Tente novamente.');
        }
      });
    });
  });