var app = new Vue ({
    el:'#app',
    data:{
        modal: {
            isOpen: false,
            thanks: false,
            number: '',
        },
    },
    methods:{
        modalToggle: function (n) {
            this.modal.number = n;
            this.modal.isOpen = !this.modal.isOpen;
            this.modal.thanks = false;
        },
        toggleActive: function (e) {
            e.target.classList.toggle('active');
        },
        submit: function (e) {
            var self = this;
            var form = $(e.target);
            var requared = true;
            var inputs = form.find('[data-required]');

            for(var i = 0; i < inputs.length; i++){
                if(inputs.eq(i).val() == '') {
                    requared = false;
                }
            }

            if(requared){
                var type = form.attr('method');
                var url = form.attr('action');
                var data = form.serialize();
                $.ajax({type: type, url: url, data: data,
                    success : function(){
                        console.log('success');
                        e.target.reset();
                        self.modal.number = '';
                        self.modal.thanks = true;
                    }
                });
            }
            else{
                for(var i = 0; i < inputs.length; i++){
                    if(inputs.eq(i).val() == '') {
                        inputs.eq(i).addClass('input_error');
                        setTimeout(function () {
                            inputs.removeClass('input_error');
                        }, 2000);
                    }
                }
            }
        },
        scrollTo: function (e) {
            var path = $(e.target).attr('href');
            $('body, html').animate({
                scrollTop: $(path).offset().top
            },600);
        }
    }
});


var requared = $('input[data-required]');
requared.blur(function() {var self = $(this);if($(this).val().length == "") {self.addClass('input_error');setTimeout(function () {self.removeClass('input_error')}, 2000)}});
requared.focus(function() {$(this).removeClass('input_error');});

$('.first-screen__slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
});

