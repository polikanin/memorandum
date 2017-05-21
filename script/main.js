var catalog = [
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '47 900',
        catalogSale: '10'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '47 000'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '44 900',
        catalogSale: '10'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '49 900'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '41 900',
        catalogSale: '13'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '52 900'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '43 900',
        catalogSale: '15'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '54 900'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '49 900'
    },
    {
        catalogPic: 'image/catalog/1.png',
        catalogName: 'Название венка',
        catalogSize: '120',
        catalogPrice: '46 900'
    },
];

var app = new Vue ({
    el:'#app',
    data:{
        modal: {
            isOpen: false,
            thanks: false,
            number: '',
        },
        myFilter: '',
        catalog: catalog.slice().sort(),
        catalogFilter: 0,
    },
    // filters: {
    //     myFilter: function (val) {
    //         return val
    //     }
    // },
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
        },
        filter: function () {
            var  compareNumeric;
            var result = [];
            switch (this.catalogFilter){
                case '1':
                    compareNumeric = function (a, b) {
                        if (a.catalogPrice > b.catalogPrice) return 1;
                        if (a.catalogPrice < b.catalogPrice) return -1;
                    };
                    this.catalog.sort(compareNumeric);
                    break;
                case '2':
                    compareNumeric = function (a, b) {
                        if (a.catalogPrice < b.catalogPrice) return 1;
                        if (a.catalogPrice > b.catalogPrice) return -1;
                    };
                    this.catalog.sort(compareNumeric);
                    break;
                case '3':
                    compareNumeric = function (a, b) {
                        if (a.catalogSale > b.catalogSale) return 1;
                        if (a.catalogSale < b.catalogSale) return -1;
                    };
                    result = [];
                    this.catalog.forEach(function (item) {
                        if(item.catalogSale){
                            result.unshift(item)
                        }
                        else{
                            result.push(item);
                        }
                    });
                    this.catalog = result.sort(compareNumeric);
                    break;
                case '4':
                    compareNumeric = function (a, b) {
                        if (a.catalogSale < b.catalogSale) return 1;
                        if (a.catalogSale > b.catalogSale) return -1;
                    };
                    result = [];
                    _.forEach(this.catalog, function (item) {
                        if(item.catalogSale){
                            result.unshift(item)
                        }
                        else{
                            result.push(item);
                        }
                    });
                    this.catalog = result.sort(compareNumeric);
                    break;
                default:
                    this.catalog = catalog.slice().sort();
            }
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

$("[data-fancybox]").fancybox({
    // Options will go here
});
