(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-order="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;

    var $ = window.jQuery;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        var $modal = $('[id="gratitude"]');

        var $p = $('<p></p>');

        var message = `Thank you for your payment, ${data.title} ${data.username}!`;

        console.log(message);
        $p.append(message);

        $modal.append($p);
        $modal.show();
    });

})(window);