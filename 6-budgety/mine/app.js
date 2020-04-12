var BudgetCtrl = (function () {


    return {
        
    }
})();

////////////////////

var UIController = (function () {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            var input = {
                type: document.querySelector(DOMStrings.inputType).value, // inc or exp (+ and -)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
            console.log('input :', input);
            return input;
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    }
})();

////////////////////

var Controller = (function (budgetCtrl, uiController) {
    function newEvent() {
        console.log('\n--------------------');
    };

    var DOM = uiController.getDOMStrings();

    var ctrlAddItem = function () {
        console.log('ctrlAddItem called');
        /*
        1. Get the field input data
        2. Add the item to the budget controller
        3. Add the item to the UI
        4. Calculate the budget
        5. Display the budget on the UI
        */
        
        var input = uiController.getInput();
    };

    document.querySelector(DOM.inputBtn).addEventListener('click', function() {
        newEvent();
        console.log("add__btn clicked");

        ctrlAddItem();
    });

    document.addEventListener('keypress', function (event) {
        newEvent();
        console.log('Event: ' + event);

        if (event.key === 'Enter') {
            newEvent();
            console.log('Key: ' + event.key);
            ctrlAddItem();
        }
    })




    return {

    }
})(BudgetCtrl, UIController);