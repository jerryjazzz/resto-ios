restaurant.directive('emailError', function () {
    return {
        template : "<p class='padding' style='color: red'>Введён некоректный Email адрес!</p>"
    };
});

restaurant.directive('phoneError', function () {
    return {
        template : "<p class='padding' style='color: red'>Введён некоректный номер телефона!</p>"
    };
});