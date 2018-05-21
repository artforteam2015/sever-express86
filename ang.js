var myApp=angular.module('perevozchik74App', ['ngAnimate','ngRoute']);

myApp.controller('controller', ["$scope", "$http" , function($scope,$http) {

    var messageMass = ['Отлаженная схема работы', 'Большой опыт работы с переездами', 'Индивидуальный подбор машины'];
    $scope.message = messageMass[0];
    $scope.mess = []
    $scope.mess.length = 0;
    var endTime = 5000;
    for (var letter in $scope.message) {
        $scope.mess[letter] = {letter: $scope.message[letter], class: 'textLettersEnterComplete'};
    }
    var count = 300;
    endTime = 300 + (($scope.mess.length/2) * 100) + 5250;
    setTimeout(function () {
        for (var value in $scope.mess) {
            if ($scope.mess.length/2+1>value) {
                setTimeout(function (val) {
                    if ( $scope.mess[val] !==undefined)
                    $scope.mess[val].class = 'textLettersLeave';
                    if ( $scope.mess[$scope.mess.length - val] !==undefined)
                    $scope.mess[$scope.mess.length - val].class = 'textLettersLeave';
                    $scope.$apply()
                }, count, value);
                count += 100;
            }
        }
    }, 5000);

    var timeout = setTimeout(function tick() {
        switch ($scope.message) {
            case messageMass[0]:
                $scope.message = messageMass[1];
                break;
            case messageMass[1]:
                $scope.message = messageMass[2];
                break;
            case messageMass[2]:
                $scope.message = messageMass[0];
                break;

        }
        $scope.mess = [];
        $scope.$apply();



        setTimeout(function () {


            for (var letter in $scope.message) {
                $scope.mess[letter] = {letter: $scope.message[letter], class: 'textLettersEnter'};
            }
            $scope.$apply();
            var count = 300;
            endTime = 300 + (($scope.mess.length/2+1) * 100) + 5250;
            setTimeout(function () {
                for (var value in $scope.mess) {
                    if ($scope.mess.length/2>value) {
                        setTimeout(function (val) {
                            if ( $scope.mess[val] !==undefined)
                            $scope.mess[val].class = 'textLettersLeave';
                            if ( $scope.mess[$scope.mess.length - val] !==undefined)
                            $scope.mess[$scope.mess.length - val].class = 'textLettersLeave';
                            $scope.$apply()
                        }, count, value);
                        count += 100;
                    }
                }
            }, 5000);

            timeout = setTimeout(tick, endTime);

        }, 1000)
    }, endTime)


    $scope.usls = [
    {
        title:'Квартирные переезды',
        description:'Упаковка и аккуратный перевоз мебели и других вещей. Многолетний опыт переездов.'+
                    '\nПомощь в разборке и сборке мебели, в подключении техники.'+
                    '\nСовременный автотранспорт, чистые специально оборудованные грузовики.',
        picname:'img/types/usl-1.jpg',
        picnamedark:"img/types/usl-1_dark.png",
        hover:"usl1-box-hoverrow",
        hoverScale:"usl-2",
        horevScale2:""
    },
    {
        title:'Офисные переезды',
        description:'Бережное отношение к компьютерной технике,'+
                    ' тщательная упаковка и помощь в распаковке, подключении.'+
                    '\nВыезд в оптимальное для заказчика время.',
        picname:'img/types/usl-2.jpg',
        picnamedark:"img/types/usl-2_dark.png",
        hover:"usl1-box-hovercol",
        hoverScale:"usl-2-col",
        hoverScale2:"usl-2-col-scale"
    },
    {
        title:'Международные грузоперевозки.',
        description:'Доставка в Казахстан, Туркменистан, Белоруссию, другие страны СНГ,'+
                    ' страны Азии (Китай и другие), Ближнего Востока (Азербайджан, Армения, Турция) и Европы'+
                    ' (Бельгия, Германия, Италия, Нидерланды, Словакия, Словения, Чехия и другие), и,'+
                    ' соответственно, перевозку грузов из этих стран в Россию.'+
                    '\nБыстрое таможенное оформление.',
        picname:'img/types/usl-3.jpg',
        picnamedark:"img/types/usl-3_dark.png",
        hover:"usl1-box-hoverrev",
        hoverScale:"usl-2",
        horevScale2:""
    },
        {
        title:'Перевоз грузов 200',
        description:'Аккуратная погрузка и перевоз грузов до точки назначения.'+
                    '\nПодготовка транспорта по желанию клиента.',
        picname:'img/types/usl-4.jpg',
        picnamedark:"img/types/usl-4_dark.png",
        hover:"usl1-box-hoverrow",
        hoverScale:"usl-2",
        horevScale2:""
    },
        {
        title:'Скоропортящиеся грузы',
        description:'Перевоз продуктов в специально оборудованных рефрижераторах и контейнерах.'+
                    '\nМы перевозим мясо, рыбу, фрукты, молочные продукты, консервы, напитки и т.д.'+
                    '\nПеревозка снабжается санитарным паспортом.'+
                    '\nГарантия сохранения вкусовых качеств продуктов.',
        picname:'img/types/usl-5.jpg',
        picnamedark:"img/types/usl-5_dark.png",
        hover:"usl1-box-hovercolrev",
        hoverScale:"usl-2-rev",
        hoverScale2:"usl-2-col-scale"
    },
        {
        title:'Экспедирование грузов',
        description:'Поиск подходящей спецтехники.'+
                    '\nПланирование оптимального маршрута'+
                    '\nОформление пакета необходимых документов.'+
                    '\nМониторинг работ по подготовке и перевозке груза, соблюдение условий транспортировки,'+
                    ' контроль над получением груза клиентом.',
        picname:'img/types/usl-6.jpg',
        picnamedark:"img/types/usl-6_dark.png",
        hover:"usl1-box-hoverrev",
        hoverScale:"usl-2",
        horevScale2:""
    }
    ]

    $scope.abouts=[
    {
        title:'О КОМПАНИИ',
        description:'Транспортная компания «СЕВЕР ЭКСПРЕСС» профессионально занимается'
                    +' перевозкой грузов. \nМы используем передовые системы'
                    +' автоматизации перевозок.'
                    +' Наши машины оперативно перевезут Ваш груз \nв Ханты-Мансийский Автономный округ или любую другую точку России. \nЗаранее'
                    +' разработанный маршрут позволит сделать это в короткие сроки. Мы ценим время и'
                    +' деньги наших клиентов.'
                    +' \nМы стремимся к тому, чтобы издержки клиента на транспортные расходы были как'
                    +' можно меньше. \nПонимая, что если наше сотрудничество будет Вам экономически'
                    +' выгодно, то выиграем, в конечном счете, мы сами. \nПоэтому четкость нашей работы'
                    +' – главное требование к нашим сотрудникам.'
    },
    {
        title:'О КОМПАНИИ',
        description:'Наша компания специализируется на грузоперевозках по всей России.'+
                    ' Мы работаем по любым направлениям и оперативно оформляем заказы.'+
                    '\nМы предлагаем оптимальные сроки доставки грузов, высокий уровень сервиса,'+
                    ' быстрое оформление и бережное отношение к грузу.'+
                    '\nНаши грузчики - профессионалы своего дела с большим опытом переездов и укладки'+
                    ' вещей для транспортировки.'+
                    '\nОформите заказ и мы подберем машину под ваши нужды.'
    }
    ]

    $scope.sendMessage = function() {
        var ClientName = document.getElementById("inputName").value;
	document.getElementById("inputName").value = '';
        var ClientSvyaz = document.getElementById("inputSvyaz").value;
	document.getElementById("inputSvyaz").value = '';
        var ClientDetail = document.getElementById("inputDetail").value;
	document.getElementById("inputDetail").value = '';
        var data = {name: ClientName, svyaz: ClientSvyaz, detail: ClientDetail};
    $http.post("/sendmessage", data)
    }

}]);
