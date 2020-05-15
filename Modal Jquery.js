    // Modal de aviso
    var modal_estilos = 'display: block;'
        + 'width: 700px; max-width: 600px;'
        + 'background: #fff; padding: 15px;'
        + 'border-radius: 5px;'
        + '-webkit-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
        + '-moz-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
        + 'box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75);'
        + 'position: fixed;'
        + 'top: 50%; left: 50%;'
        + 'transform: translate(-50%,-50%);'
        + 'z-index: 99999999; text-align: center';

    var fundo_modal_estilos = 'top: 0; right: 0;'
        + 'bottom: 0; left: 0; position: fixed;'
        + 'background-color: rgba(0, 0, 0, 0.6); z-index: 99999999;'
        + 'display: none;';

    var meu_modal = '<div id="fundo_modal" style="' + fundo_modal_estilos + '">'
        + '<div id="meu_modal" style="' + modal_estilos + '">'
        + '<h4 style="margin: 20px 0;">Olá! Informamos que o módulo de Fundamentos do bootcamp estará disponível dia 14/05, às 20 horas.</h4><span>Equipe IGTI<br></span><br/>'
        + '<button onMouseOver="this.style.background=`#10ccbc`" onMouseOut="this.style.background=`#00afa2`" style="padding: 15px; width: 200px; margin: 0px 0 15px 0; border-radius: 4px; cursor: pointer; outline: none; transition: 0.2s; background: #00afa2; border:none; color: #FFF" id="btnModal">Ok</button>'
        + '</div></div>';

    $("body").append(meu_modal);

    $("#fundo_modal, .close").click(function () { $("#fundo_modal").fadeOut(100); });
    $("#meu_modal").click(function (e) { e.stopPropagation(); });

    $("#btnModal").click(function () {
        $('#fundo_modal').fadeOut(100);
    });

    if (!localStorage.getItem('@IGTI:ModalFundamentos')) {
      cursosComAviso = ['2944', '2945', '2946', '2939', '2940', '2941', '2942', '2934', '2935', '2936', '2937', '2932', '2933', '2938'];

      cursosComAviso.forEach((curso) => {
          if (window.location.href.indexOf(curso) >= 0) {
              ModuleBootcamp = true;
              $("#fundo_modal").fadeIn(50);
              localStorage.setItem('@IGTI:ModalFundamentos', true)
          }
      });
  }

  