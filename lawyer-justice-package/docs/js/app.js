 $(document).ready(function () {
      $('#contact-form').submit(function (e) {
        e.preventDefault();

        var $form = $(this);
        var $msg = $('#msg-status');
        $msg.css('color', 'green').text('⏳ Enviando...').fadeIn();

        $.ajax({
          url: $form.attr('action'),
          method: 'POST',
          data: $form.serialize(),
          success: function () {
            $msg.text('✅ Mensagem enviada com sucesso!');
            $form[0].reset();
            setTimeout(() => $msg.fadeOut(), 4000);
          },
          error: function () {
            $msg.css('color', 'red').text('❌ Erro ao enviar. Tente novamente.');
          }
        });
      });
    });