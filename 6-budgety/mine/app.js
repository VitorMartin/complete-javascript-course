var BudgetCtrl = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }


    return {
        addItem: function (type, description, value) {
            console.log('addItem() called');

            var newItem, id;

            // [1 2 3 4] --> next ID = 5
            // [1 3 4 8] --> next ID = 9
            // ID = lastID = 1

            // Create new ID
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            type === 'exp' ? newItem = new Expense(id, description, value) :
                newItem = new Income(id, description, value);
            
            // Push it into our 'data' structure
            data.allItems[type].push(newItem);

            return newItem;
        },

        showData: function () {
            console.log('data :', data);
        }
    }
})();

////////////////////

var UIController = (function () {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }


    return {
        getDOMStrings: function () {
            return DOMStrings;
        },

        getInput: function () {
            var input = {
                type: document.querySelector(DOMStrings.inputType).value, // inc or exp (+ and -)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
            console.log('input :', input);
            return input;
        },

        addListItem: function (newItem, type) {
            console.log('addListItem() called:');
            console.log('newItem :', newItem);

            var html, newHtml, element;

            // Create HTML string with placeholder text
            // ***deixar + e -?***
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type ==='exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', newItem.id);
            newHtml = newHtml.replace('%description%', newItem.description);
            newHtml = newHtml.replace('%value%', newItem.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function () {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = '';
            });

            fieldsArr[0].focus();
        }
    }
})();

////////////////////

var Controller = (function (budgetCtrl, uiController) {
    var setupEventListeners = function () {
        var DOM = uiController.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', function() {
            newEvent();
            console.log("add__btn clicked");
    
            ctrlAddItem();
        });
    
        document.addEventListener('keypress', function (event) {
            console.log('Event: ' + event);
    
            if (event.key === 'Enter') {
                newEvent();
                console.log('Key: ' + event.key);
                ctrlAddItem();
            }
        })    
    }

    var ctrlAddItem = function () {
        console.log('ctrlAddItem() called');
        /*
        1. Get the field input data
        2. Add the item to the budget controller
        3. Add the item to the UI
        4. Clear input fields
        5. Calculate the budget
        6. Display the budget on the UI
        */
        var input, newItem;


        // 1.
        input = uiController.getInput();

        // 2.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.showData();

        // 3.
        uiController.addListItem(newItem, input.type);

        // 4.
        uiController.clearFields();
    };

    var newEvent = function() {
        console.log('\n--------------------');
    };


    return {
        init: function () {
            newEvent();
            console.log('init() called');
            setupEventListeners();
        }
    }
})(BudgetCtrl, UIController);


Controller.init();
