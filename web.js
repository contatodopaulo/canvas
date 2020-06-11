//IGTI - Custom javascript
//HTML escrito a partir deste JS, como "appends" de texto em elementos, devem conter códigos para letras acentuadas. Motivo: formatação UTF-8 inclusas após o carregamento da página, não é processada pelo Canvas. Problema desconhecido.
$(document).ready(function () {

    //CURSOS
    const bootcamps = ['2944', '2945', '2946', '2939', '2940', '2941', '2942', '2934', '2935', '2936', '2937', '2932', '2933', '2938'];
    const parceiros = ['2950', '2977', '2978'];

    //Variáveis globais
    const isLoginScreen = window.location.href.indexOf('/login/canvas');
    const isCourse = window.location.href.indexOf('/courses/');
    const url = window.location.href;

    //Chamadas
    if (isLoginScreen == -1) {
        renderizarZendesk(tipoDeCursoAtual());
        renderizarModais();
    };

    if (url == 'https://igti.instructure.com/?login_success=1' || url == 'https://igti.instructure.com/') {
        impossibilitarAlunoDeRejeitarDisciplina();
    }

    if (isCourse > 0) {
        modificarElementosCurso();
        addBarraProgresso();
    }

    //Funções
    function tipoDeCursoAtual() {
        //Caso o usuário esteja na página de inicio.  
        var tipo;

        parceiros && parceiros.forEach(curso => {
            if (url.indexOf(curso) > 0) {
                tipo = 'parceiros';
            } else if (ENV.STUDENT_PLANNER_COURSES) {
                ENV.STUDENT_PLANNER_COURSES.forEach(cursoEnv => {
                    if (cursoEnv.id == curso) tipo = 'parceiros'
                });
            }
        });

        if (!tipo) {
            bootcamps && bootcamps.forEach(curso => {
                if (url.indexOf(curso) > 0) {
                    tipo = 'bootcamp'
                } else if (ENV.STUDENT_PLANNER_COURSES) {
                    ENV.STUDENT_PLANNER_COURSES.forEach(cursoEnv => {
                        if (cursoEnv.id == curso) tipo = 'bootcamp'
                    })
                }
            })
        }

        if (!tipo) tipo = 'pos';

        return tipo; //parceiros | bootcamp | pos
    }

    function renderizarZendesk(tipoDeCurso) {
        if (tipoDeCurso == 'parceiros') {
            window.zEmbed || function (e, t) {
                var n, o, d, i, s, a = [],
                    r = document.createElement("iframe");
                window.zEmbed = function () {
                    a.push(arguments)
                }, window.zE = window.zE || window.zEmbed, r.src = "javascript:false", r.title = "Paulooooo", r.role = "presentation", (r.frameElement || r).style.cssText = "display: none", d = document.getElementsByTagName("script"), d = d[d.length - 1], d.parentNode.insertBefore(r, d), i = r.contentWindow, s = i.document;
                try {
                    o = s
                } catch (e) {
                    n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);', o = s
                }
                o.open()._l = function () {
                    var e = this.createElement("script");
                    n && (this.domain = n), e.id = "js-iframe-async", e.src = "https://assets.zendesk.com/embeddable_framework/main.js", this.t = +new Date, this.zendeskHost = "igti.zendesk.com", this.zEQueue = a, this.body.appendChild(e)
                }, o.write('<body onload="document._l();">'), o.close()
                window.zESettings = {
                    webWidget: {
                        helpCenter: {
                            suppress: false,
                            filter: {
                                section: '360009058131-Seleção-da-oferta-para-divulgação, 360008969172-Divulgação-da-oferta, 360009100671-Analise-de-desempenho, 360007958792-Atendimento-ao-parceiro'
                            },
                        },

                        chat: {
                            departments: {
                                enabled: ['Parceiros'],
                                select: 'Parceiros'
                            },
                            title: {
                                '*': 'Atendimento ao Parceiro'

                            }

                        },

                        launcher: {
                            chatLabel: {
                                '*': 'Atendimento'
                            }
                        },

                        contactForm: {
                            title: {
                                '*': 'Atendimento ao Parceiro'
                            }
                        },

                    }
                }
            }();
        }

        if (tipoDeCurso == 'bootcamp') {
            window.zEmbed || function (e, t) {
                var n, o, d, i, s, a = [],
                    r = document.createElement("iframe");
                window.zEmbed = function () {
                    a.push(arguments)
                }, window.zE = window.zE || window.zEmbed, r.src = "javascript:false", r.title = "Paulooooo", r.role = "presentation", (r.frameElement || r).style.cssText = "display: none", d = document.getElementsByTagName("script"), d = d[d.length - 1], d.parentNode.insertBefore(r, d), i = r.contentWindow, s = i.document;
                try {
                    o = s
                } catch (e) {
                    n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);', o = s
                }
                o.open()._l = function () {
                    var e = this.createElement("script");
                    n && (this.domain = n), e.id = "js-iframe-async", e.src = "https://assets.zendesk.com/embeddable_framework/main.js", this.t = +new Date, this.zendeskHost = "igti.zendesk.com", this.zEQueue = a, this.body.appendChild(e)
                }, o.write('<body onload="document._l();">'), o.close()
                window.zESettings = {
                    webWidget: {
                        helpCenter: {
                            suppress: false,
                            filter: {
                                section: '360008642151-Matrícula, 360008628431-Pontuação-e-Notas, 360008618711-Aulas'
                            },
                        },
                    }
                }
            }();
        }

        if (tipoDeCurso == 'pos') {

            window.zEmbed || function (e, t) {
                var n, o, d, i, s, a = [],
                    r = document.createElement("iframe");
                window.zEmbed = function () {
                    a.push(arguments)
                }, window.zE = window.zE || window.zEmbed, r.src = "javascript:false", r.title = "", r.role = "presentation", (r.frameElement || r).style.cssText = "display: none", d = document.getElementsByTagName("script"), d = d[d.length - 1], d.parentNode.insertBefore(r, d), i = r.contentWindow, s = i.document;
                try {
                    o = s
                } catch (e) {
                    n = document.domain, r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);', o = s
                }
                o.open()._l = function () {
                    var e = this.createElement("script");
                    n && (this.domain = n), e.id = "js-iframe-async", e.src = "https://assets.zendesk.com/embeddable_framework/main.js", this.t = +new Date, this.zendeskHost = "igti.zendesk.com", this.zEQueue = a, this.body.appendChild(e)
                }, o.write('<body onload="document._l();">'), o.close()
            }();
        }
    }

    function renderizarModais() {
        // Modal de aviso
        var modal_estilos = 'display: block; max-width: 700px; padding: 25px; background: #fff; border-radius: 5px; -webkit-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75); -moz-box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75); box-shadow: 0px 6px 14px -2px rgba(0,0,0,0.75); position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 99999999;';
        var fundo_modal_estilos = 'top: 0; right: 0; bottom: 0; left: 0; position: fixed; background-color: rgba(0, 0, 0, 0.6); z-index: 99999999; display: none;';

        $(".fundo_modal, .close").click(function () { $(".fundo_modal").fadeOut(100); });
        $(".modalStop").click(function (e) { e.stopPropagation(); });

        //Ao passar o mes para dataExpiracao, subtrair 1. 

        const modals = [
            {
                name: "inscricoesBootcamp",
                dataExpiracao: new Date(2020, 5, 29, 22),
                chamada: () => {
                    if (!localStorage.getItem('@IGTI:ModalBootcamp04Jun2020') && new Date() < new Date(2020, 6, 29, 22)) {
                        var modal_inscricoesBootcamp = '<div id="modal_inscricoesBootcamp" class="fundo_modal" style="' + fundo_modal_estilos + '">'
                            + '<div class="modalStop" style="' + modal_estilos + '">'
                            + '<h1 style="margin-bottom: 25px;">Programa de Bolsas para Bootcamps</h1>'
                            + '<p style="margin-bottom: 20px; text-align: justify; text-justify: inter-word;" >Está aberto até 30 de junho, o processo seletivo de bolsas para bootcamps do IGTI. São 13 bootcamps subsidiados pelo programa, nas áreas de Software Development, Inteligência Artificial, Data Science, Cybersecurity, Cloud Computing e UX.</p>'
                            + '<p style="margin-bottom: 35px;">Para inscrever-se no processo seletivo acesse <a target="_blank" href="https://bit.ly/3eNmT4F">aqui</a></p>'
                            + '<div style="display: flex; align-items: center;"><button onMouseOver="this.style.background=`#10ccbc`" onMouseOut="this.style.background=`#00afa2`" style="padding: 15px;margin-bottom: 25px; width: 200px; margin: 0 auto; border-radius: 4px; cursor: pointer; outline: none; transition: 0.2s; background: #00afa2; border:none; color: #FFF" id="btnModal_inscricoesBootcamp">Ok</button></div>'
                            + '</div></div>';

                        $("body").append(modal_inscricoesBootcamp);
                        $("#modal_inscricoesBootcamp").fadeIn(200);

                        localStorage.setItem('@IGTI:ModalBootcamp04Jun2020', true);

                        $("#btnModal_inscricoesBootcamp").click(function () {
                            $('#modal_inscricoesBootcamp').fadeOut(100);
                        });

                        return true;
                    }

                    return false;
                }
            },
            {
                name: "avisoTemporario",
                dataExpiracao: new Date(2020, 5, 11, 23),
                chamada: () => {
                    function isUrl() {
                        const urls = ['2944', '2945', '2946', '2939', '2940', '2941', '2942', '2934', '2935', '2936', '2937', '2932', '2933', '2938'];
                        const response = urls.find(c => window.location.href.indexOf(c) > 0);
                        if (response) return true;
                        else return false;
                    }

                    if (isUrl() && !localStorage.getItem('@IGTI:Modal:11Jun2020')) {
                        var modal_avisoTemporario = '<div id="modal_avisoTemporario" class="fundo_modal" style="' + fundo_modal_estilos + '">'
                            + '<div class="modalStop" style="' + modal_estilos + '">'
                            + '<p style="margin-bottom: 20px; text-align: center;" >Devido ao feriado religioso do dia 11/06, o restante do material deste módulo será liberado até às 22h do dia 12/06.</p>'
                            + '<div style="display: flex; align-items: center;"><button onMouseOver="this.style.background=`#10ccbc`" onMouseOut="this.style.background=`#00afa2`" style="padding: 15px;margin-bottom: 25px; width: 200px; margin: 0 auto; border-radius: 4px; cursor: pointer; outline: none; transition: 0.2s; background: #00afa2; border:none; color: #FFF" id="btnmodal_avisoTemporario">Ok</button></div>'
                            + '</div></div>';

                        $("body").append(modal_avisoTemporario);
                        $("#modal_avisoTemporario").fadeIn(200);

                        localStorage.setItem('@IGTI:Modal:11Jun2020', true);

                        $("#btnmodal_avisoTemporario").click(function () {
                            $('#modal_avisoTemporario').fadeOut(100);
                        });
                        return true;
                    }
                    return false;
                }
            }
        ]

        if (modals.length > 0) {
            var UmModalPorChamada = false;

            modals.forEach(modal => {
                if (new Date() < modal.dataExpiracao && UmModalPorChamada == false) {
                    if (modal.chamada()) UmModalPorChamada = true;
                }
            })
        }
    }

    function impossibilitarAlunoDeRejeitarDisciplina() {
        var btn = $('button[name="reject"]');
        btn.on('click', function () {
            var texto_aviso_rejeitar = '<div id="alerta_div_rejeitar" class="alert alert-danger animated pulse" style="padding: 15px 25px; margin-bottom: 50px;"><strong>Voc&ecirc; j&aacute; est&aacute; matriculado nesta disciplina!</strong><br>Para informa&ccedil;&otilde;es sobre trancamento, utilize o bot&atilde;o "Ajuda" abaixo.</div>';
            btn.attr("disabled", true);
            $("#content").prepend(texto_aviso_rejeitar);
        });
    }

    function modificarElementosCurso() {
        var renderizandoModificacoes = setInterval(() => {
            //Mudando icon de check
            $(".module-item-status-icon [title='Completo']").addClass("icon-Solid icon-publish");

            //Removendo elementos no cabeçalho dos blocos
            $('.requirements_message').hide();
            $('.ig-header-admin').hide();
        }, 150);

        setTimeout(() => {
            clearInterval(renderizandoModificacoes)
        }, 4000)
    }

    function addBarraProgresso() {
        setTimeout(() => {
            var tituloBarraDeProgresso = 'Progresso da disciplina';
            var quant_itens_unchecked = $(".icon-mark-as-read");
            var quant_itens_checked = $(".module-item-status-icon [title='Completo']");
            var quant_itens_unchecked = quant_itens_unchecked.length;
            var quant_itens_checked = quant_itens_checked.length;
            var quant_itens_curso = quant_itens_checked + quant_itens_unchecked;
            var percentual_concluido = parseInt((100 * quant_itens_checked) / quant_itens_curso);

            if (tipoDeCursoAtual() == 'bootcamp') {
                tituloBarraDeProgresso = tituloBarraDeProgresso.replace('da disciplina', 'do bootcamp');
            }

            if (percentual_concluido > 0) {
                console.log("Barra de progresso carregada");
                $("#right-side-wrapper").prepend(`<div class="progress_bar animated fadeInDown"><div style="padding: 0px 5px;">${tituloBarraDeProgresso} <span style="float: right;">${percentual_concluido}%<span></div><div class="pro-bar" style="margin-top: 7px; border-radius: 50px;"><div class="pro-bg"></div><div class="progress-bar-inner" style="border-radius: 50px; width: ${percentual_concluido}%; background: #00afa2;"></div></div></div>`);
            }
        }, 2000);
    }

    //Imagem no curso 2948
    if (url.indexOf('/courses/2948') > 0) {
        $('#context_module_item_193043 div.ig-row').html('<img src="https://igti.instructure.com/courses/2948/files/194266/preview" alt="PSBtc.png" data-api-endpoint="https://igti.instructure.com/api/v1/courses/2948/files/194266" data-api-returntype="File">')
    }

    //  Semana da educação 4.0 
    //  - Trazendo video para dentro dos itens para serem exibidos antes do click de acesso)
    //  - Link do curso: https://igti.instructure.com/courses/2888

    if (window.location.href === "https://igti.instructure.com/courses/2888") {
        $('#context_module_item_186732 div.ig-row').html('<div style="width: 100%; margin-left: auto; margin-right: auto; overflow: hidden;"><h1 align="center"><iframe src="https://player.vimeo.com/video/408980040?title=0&amp;byline=0&amp;portrait=0" position: "relative" overflow:"hidden" width="100%" height="400px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe></h1></div>')
    }

    //IMPLEMENTAÇÕES ANTIGAS

    //Retira o overlay de cor dos boxs de cursos no dashboard:
    var cursos = document.getElementsByClassName('ic-DashboardCard__header_hero');
    for (var i = 0; i < cursos.length; i++) {
        cursos[i].style.opacity = '0'
    }

    //retira a opção de colocar apelidos no cursos se não for administrador
    if ($.inArray("admin", ENV.current_user_roles) == -1) {
        var apelidoUI = $('.ColorPicker__Container > .ic-Form-control')
        //retira opção de mudar a cor do curso.
        $(".ic-DashboardCard__header-button").remove();
        //var apelidoUI = document.getElementsByClassName('.ColorPicker__Container.ic-Form-control');
        for (var i = 0; i < apelidoUI.length; i++) {
            apelidoUI[i].style.display = 'none'
            //$(".ic-DashboardCard__header-button").hide();
        }
    }
    /*
      //esconde o link de download do arquivo
      if(window.location.pathname.indexOf('/files/') >= 0){
        $("#content div:first").remove();
        //$("h2").hide();
      }*/

    //se estiver na página inicial do grupo:,



    if (window.location.pathname.indexOf('/quizzes/') >= 0) {
        $('a#preview_quiz_button').click(function () {
            setTimeout(setQuizzesWarnings, 100);
        });
    }

    function setQuizzesWarnings() {
        $('#ui-id-1').text('Atenção!');
        $('#js-sequential-warning-dialogue').text('Assim que enviar sua resposta, não será possível mudá-la posteriormente. Você não conseguirá ver a questão anterior.');
        $('.ui-dialog .btn:contains("Begin")').text('Iniciar!');
    }

    //CLick no preview do arquivo
    if (window.location.pathname.indexOf('/wiki') >= 0) {
        setTimeout(loadPreviewer, 130);
    }
    if (window.location.pathname.indexOf('/pages') >= 0) {
        setTimeout(loadPreviewer, 130);
    }

    function loadPreviewer() {
        $('a.file_preview_link').trigger('click');
    }

    //traduzir True or false
    if (window.location.pathname.indexOf('/quizzes') >= 0) {
        var searchTtrue = 'True';
        var searchFalse = 'False';

        $('.answer_label label').filter(function () {
            return $(this).text() === searchTtrue;
        }).text('Verdadeiro');

        $('.answer_label label').filter(function () {
            return $(this).text() === searchFalse;
        }).text('Falso');

        if ($(".lock_explanation").length) {
            $('.lock_explanation').html($('.lock_explanation').html().replace('travado', 'indisponível'));
        }
    }


    $('.ui-tabs-anchor:contains("Perguntas")').click(function () {
        setTimeout(translateQuizesTexts, 500);
    });

    function translateQuizesTexts() {
        var searchTtrue = 'True';
        var searchFalse = 'False';

        console.log('teste!!!');
        $('.answer_text').filter(function () {
            return $(this).text() === searchTtrue;
        }).text('Verdadeiro');

        $('.answer_text').filter(function () {
            return $(this).text() === searchFalse;
        }).text('Falso');

        if ($(".question_name").length) {
            $(".question_name").each(function (index) {
                $(this).html($('this').html().replace('Question', 'Pergunta'));
            });
        }
    }

    //tradução to-do-list

    if ($(".todo-details__title").length) {
        $(".todo-details__title").each(function (index) {
            $(this).html($(this).html().replace('Pegar', 'Fazer'));
        });
    }



    //traduzir Imported assignments
    if (window.location.pathname.indexOf('/assignments') >= 0) {
        //$('.element_toggler:contains("Imported Assignments")').text('Tarefas Importadas');
    }
    if (window.location.pathname.indexOf('/grades') >= 0) {
        //$('.student_assignment .title:contains("Imported Assignments")').text("Tarefas Importadas");
    }

    //TELA DE LOGIN
    if (window.location.pathname.indexOf('/login/canvas') >= 0) {
        //esconde log da instructure
        $('.ic-Login-footer__logo-link').hide();
        //muda links do Twitter e Facebook
        $("a[href='http://twitter.com/instructure']").attr('href', 'https://twitter.com/InstitutoGTI'); //Twitter
        $("a[href='http://facebook.com/instructure']").attr('href', 'https://www.facebook.com/institutogti'); //facebook
        //mudar texto de esqueceu a senha
        $('#login_forgot_password').text('Cadastrar ou recuperar senha');

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').css("background-color", "#00afa2");
            $('body').css("background-image", "none");
        }
    }

    $('html').css("background-color", "#fff");
    $('html').css("background-image", "none");

    //Mudanças no menu Global = Painel e Disciplinas
    $('#global_nav_dashboard_link .menu-item__text').text('Painel');
    $('#global_nav_courses_link .menu-item__text').text('Disciplinas');
    $('.ic-Dashboard-header__title').text('Painel')

    $('.header-bar:contains("Todos os Cursos")').html('<h2>Todas as Disciplinas</h2>');
    $('thead .course-list-course-title-column:contains("Curso")').text('Disciplinas');

    $('#global_nav_courses_link').click(function () {
        setTimeout(setCoursesToDisciplinas, 100);
    });

    function setCoursesToDisciplinas() {
        $('.ic-NavMenu__headline').text('Disciplinas');
        $('.ic-NavMenu-list-item__link:contains("Todos os Cursos")').text('Todas as Disciplinas');
        $('.ic-NavMenu__secondary-content').text('Bem-vindo as suas Disciplinas! Para personalizar a lista de disciplinas, clique no link "Todas as Disciplinas" e coloque uma estrela nas disciplinas para serem exibidas.');
    }

    //esconde rodapé da Instructure
    $(".ic-app-footer").hide();
    $("#footer").hide();

    //grupos dos cursos no hangout
    if (window.location.pathname.indexOf('/conferences') >= 0) {

        $(window).load(function () {
            $('img').each(function () {
                if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                    // image was broken, replace with your new image
                    this.src = 'https://instructure-uploads.s3.amazonaws.com/account_96230000000000001/attachments/9/panda-cycle-loader.gif?AWSAccessKeyId=AKIAJFNFXH2V2O7RPCAA&Expires=1947934279&Signature=CcaVDMUa5by1evBxpB9pFQBOoig%3D&response-cache-control=Cache-Control%3Amax-age%3D473364000.0%2C%20public&response-expires=473364000.0';
                }
            });
        });

        if ($.inArray('admin', ENV['current_user_roles']) > -1 || $.inArray('teacher', ENV['current_user_roles']) > -1) {

            //this might go somewhere else... inside the .jsonGroups.lenght if
            var $hangoutContentDiv = $("<div>", {
                id: "hangoutDivs",
                "class": "item-group-container item-box"
            });
            $('#content-wrapper').append('<div id="hangoutMain" class="ic-Layout-contentMain"></div>');
            $("#hangoutMain").append($hangoutContentDiv);

            var currentCourseID;
            var currentCourseName;
            var groupsIDs;
            var inviteList = "";
            var mailList = "";
            var currentMailList = "";

            document.addEventListener('copy', function (e) {
                e.preventDefault();
                e.clipboardData.setData("text/plain", currentMailList);
            })

            //pega o ID do curso atual com base na URL
            sTemp = window.location.pathname.match(/\/courses\/(\d+)/);
            currentCourseID = sTemp[1];
            //console.log("ID do Curso: " + currentCourseID);

            //opcional: busca via API o nome do Curso atual
            $.getJSON('/api/v1/courses/' + currentCourseID, function (jsonCourse) {
                currentCourseName = jsonCourse.name
                //console.log("Nome do Curso: " + currentCourseName);
            });

            //busca todos os grupos do curso atual via API
            $.getJSON("/api/v1/courses/" + currentCourseID + "/groups?per_page=9999", function (jsonGroups) {
                //se existirem grupos:
                if (jsonGroups.length != 0) {
                    //lista cada item do JSON retornado pelo call a API
                    $('#hangoutDivs').append('<div class="item-group-condensed"><div class="ig-header"><h2 class="ig-header-title"><a class="element_toggler accessible-toggler" href="#" aria-label="Conferências Hangout">Conferências Hangout</a></h2>');
                    $.each(jsonGroups, function (index, value) {
                        var currentGroup = index;
                        //busca os usuários de cada grupos
                        $.getJSON('/api/v1/groups/' + value.id + '/users?include[]=avatar_url&per_page=9999', function (json) {

                            //add o box principal da listagem de grupos
                            //adiciona o nome do grupo
                            $('#hangoutDivs').append('</div><div class="item-group-condensed"><div class="item-group-expandable"><div style="padding:10px" id="hangout-conference-list' + currentGroup + '"></div></div></div>');
                            $('#hangout-conference-list' + currentGroup + '').append('<div style="font-size:20px;" class="ig-header-title"><b>Grupo: ' + value.name + '</b></br></br></div>')
                            //console.log("GRUPO: " + value.name);
                            $.each(json, function (index, value) {

                                //adiciona os usuários
                                $currentUserID = value.id
                                $currentUserAvatarURL = value.avatar_url
                                $currentUserName = value.name
                                $currentUserEmail = value.login_id
                                //$currentUserAvatar = '<img src="' + $currentUserAvatarURL + '" width="64px" height="64px" onerror="imgError(this);">'
                                //$currentUserAvatar = '<div style="width:80px; height:80px; background-image: url(' + $currentUserAvatarURL + ');"></div>'
                                $userInfoCard = '<div style="align:middle; border-radius: 3px; box-shadow: 0px 0px 10px #ccc; margin: 5px; padding: 5px;"><div class="grid-row"><div class="col-xs-12 col-lg-6"><div class="ic-image-text-combo"><div class="ic-avatar"><img src="' + $currentUserAvatarURL + '" alt="' + $currentUserName + '" /></div><div class="ic-image-text-combo__text"><a href="/users/' + $currentUserID + '"><b>' + $currentUserName + '</b></a></br><i class="icon-email"></i> ' + $currentUserEmail + '</div></div></div></div>'
                                //$userInfoCard='<div style="align:middle; border-radius: 3px; box-shadow: 0px 0px 10px #ccc; margin: 5px; padding: 5px;">'+$currentUserAvatar+'<a href="users/'+$currentUserID+'"> '+$currentUserName+' </a></td><td>    '+$currentUserEmail+'</div>'

                                //$('#userInfoTable' + currentGroup + '').append($userInfoCard);

                                $('#hangout-conference-list' + currentGroup + '').append($userInfoCard);
                                //$('#hangout-conference-list' + currentGroup + '').append('<ul>' + $currentUserAvatar + value.name + ' - ' + value.login_id + '</ul>');
                                if (index != json.length - 1) {
                                    mailList += value.login_id + ', ';
                                    inviteList += '{ id : \'' + value.login_id + '\', invite_type : \'EMAIL\' },';
                                } else {
                                    //quando for o último iten do array
                                    inviteList += '{ id : \'' + value.login_id + '\', invite_type : \'EMAIL\' }';
                                    mailList += value.login_id;

                                    function copyToClipboard(element) {
                                        alert(element);
                                        var $temp = $("<input>");
                                        $("body").append($temp);
                                        $temp.val(element).select();
                                        document.execCommand("copy");
                                        $temp.remove();
                                    };

                                    //console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_");
                                    //console.log(inviteList)
                                    //$('#hangout-conference-list' + currentGroup + '').append('<p><g:hangout render="createhangout" invites="[' + inviteList + ']"></g:hangout></p>');
                                    $('#hangout-conference-list' + currentGroup + '').append('<button class="btn" id="btn_copyMailList_' + currentGroup + '"><i class="icon-email"></i>Copiar Email dos Participantes</button>');
                                    $('#hangout-conference-list' + currentGroup + '').append('<div id="maiiList' + currentGroup + '"></div>');

                                    //copia a lista de emails do grupo para a área de transferência
                                    $('#maiiList' + currentGroup + '').hide();
                                    $('#maiiList' + currentGroup + '').text(mailList);
                                    $('#btn_copyMailList_' + currentGroup + '').click(function () {
                                        var $temp = $("<input>");
                                        $("body").append($temp);
                                        currentMailList = $('#maiiList' + currentGroup + '').text();
                                        //console.log($('#maiiList' + currentGroup + '').html());
                                        $temp.val($('#maiiList' + currentGroup + '').text()).select();
                                        document.execCommand("copy");
                                        $temp.remove();
                                        //copyToClipboard(mailList);
                                        //alert(currentMailList);
                                    });
                                    inviteList = '';
                                    //console.log('Quantidade de usuários no Grupo:' +json.length);
                                    mailList = "";
                                }
                            });
                        });
                    });

                    //var hangoutJS = document.createElement("script");
                    //hangoutJS.type = "text/javascript";
                    //hangoutJS.src = "https://apis.google.com/js/platform.js";
                    //$("head").append(hangoutJS);

                    //se não existirem grupos no curso atual:
                } else {
                    //console.log("no groups for the " + currentCourseName + "course");
                }
            });
        }
    }
});
