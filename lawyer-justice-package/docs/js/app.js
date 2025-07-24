
  $(document).ready(function () {
    $('#contact-form').submit(function (e) {
      e.preventDefault();

      var $form = $(this);
      var $msg = $('#msg-status');
      $msg.css('color', 'green').text('⏳ Enviando...').fadeIn();

      // Coleta os dados do formulário
      var fname = $form.find('[name="fname"]').val();
      var lname = $form.find('[name="lname"]').val();
      var phone = $form.find('[name="phone"]').val();
      var subject = $form.find('[name="subject"]').val();
      var message = $form.find('[name="Message"]').val();

      $.ajax({
        url: $form.attr('action'),
        method: 'POST',
        data: $form.serialize(),
        success: function () {
          $msg.text('✅ Mensagem enviada com sucesso!');
          $form[0].reset();
          setTimeout(() => $msg.fadeOut(), 4000);

          // Agora redireciona para o WhatsApp com a mensagem formatada
          var numeroWhatsApp = "5531995992507"; // coloque aqui o número do cliente (ex: 55 + DDD + número)
          var texto = `Olá! Me chamo ${fname} ${lname}.%0ATelefone: ${phone}%0AAssunto: ${subject}%0AMensagem: ${message}`;
          var link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

          window.open(link, '_blank'); // abre em nova aba
        },
        error: function () {
          $msg.css('color', 'red').text('❌ Erro ao enviar. Tente novamente.');
        }
      });
    });

  });

