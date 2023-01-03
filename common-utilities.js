const $_tv = (function () {

    'use strict';
    //constructor
    let $_tv = function () {
        this.res = null
    };

    //error handle

    $_tv.handleError = function (a, t, op) {

        let res = null;

        switch (t) {

            case "ucFirst":

                if (typeof (op.x) === "number") {

                    $_tv.tError('Can not aply ucFirst on Number');

                }
                if (typeof (op.x) === "string") {

                    res = getContext("err_ucFirst", a, op.x);

                }

                if (typeof (op.x) === "object") {

                    op.x.map((v) => {

                        res = getContext("err_ucFirst", a, op.x);
                    })

                }
                break;

            case "comma_number":

                res = getContext("err_comma_number", a, op.x);

                break;

            case "in_words":

                res = getContext("err_in_words", a, op.x);

                break;


            default:
                break;
        }

        return res;

    };

    $_tv.tError = (a) => {

        throw new Error(a);
    };

    //methods and protos
    //1.
    $_tv.prototype.ucFirst = function (x) {


        let er = $_tv.handleError(arguments, "ucFirst", {
            x: (x === undefined) ? this.res : x
        });
        if (er.context) {

            this.res = fac_ucFirst(this, this.res);

        } else {

            this.res = fac_ucFirst(this, x);
        }

        return this;
    };
    //2.
    $_tv.prototype.ucWords = function (x) {

        let er = $_tv.handleError(arguments, "ucFirst", {
            x: (x === undefined) ? this.res : x
        });

        if (er.context) {

            this.res = fac_ucWords(this, this.res);

        } else {

            this.res = fac_ucWords(this, x);
        }

        return this;
    };

    //3
    $_tv.prototype.mt_rand = function (min, max) {

        const argc = arguments.length;

        if (argc === 0) {

            min = 0;
            max = 9;

        } else if (argc > 2 || argc < 2) {

            $_tv.tError('Warning: mt_rand() expects exactly 2 parameters, ' + arguments.length + ' given')

        } else {

            min = parseInt(min, 10);
            max = parseInt(max, 10);
        }
        this.res = Math.floor(Math.random() * (max - min + 1)) + min;

        return this;
    }
    //4
    $_tv.prototype.comma_number = function (x) {

        let er = $_tv.handleError(arguments, "comma_number", {
            x: (x === undefined) ? this.res : x
        });

        if (er.context) {

            this.res = fac_comma_number(this, this.res);

        } else {

            this.res = fac_comma_number(this, x);
        }

        return this;
    }

    //5
    $_tv.prototype.in_words = function (x) {

        let er = $_tv.handleError(arguments, "in_words", {
            x: (x === undefined) ? this.res : x
        });

        if (er.context) {

            this.res = fac_in_words(this, this.res);

        } else {

            this.res = fac_in_words(this, x);
        }

        return this;
    }

    //factories
    //1.
    function fac_ucFirst(self, x) {

        let res = null;

        switch (typeof (x)) {

            case "object":

                res = x.map((a) => {

                    return $_tv.makeFirstUpperCase(a);
                });

                break;

            default:
                res = $_tv.makeFirstUpperCase(x);
                break;
        }


        return res;

    }

    //2.
    function fac_ucWords(self, x) {

        let res = null;

        switch (typeof (x)) {

            case "object":

                res = x.map((a) => {

                    return $_tv.makeWordsUpperCase(a);
                });

                break;

            default:
                res = $_tv.makeWordsUpperCase(x);
                break;
        }


        return res;

    }
    //4
    function fac_comma_number(self, x) {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }

    function fac_in_words(self, x) {

        let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if ((x = x.toString()).length > 9) return this.tError('Number overflow detected');
        let n = ('000000000' + x).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        let str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }

    //generotors
    $_tv.makeFirstUpperCase = (a) => {

        return a.trim().charAt(0).toString().toUpperCase() + a.trim().substr(1, a.trim().length - 1);
    }


    $_tv.getTypeUcFirst = (a) => {

        return a.charAt(0).toUpperCase() + a.substr(1, a.length - 1);
    }

    $_tv.makeWordsUpperCase = (a) => {

        let str = a.trim().toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });

        return str;
    }


    //error helpers

    function getContext(t, a, v) {

        let context = null;

        if (a.length !== 0) {

            switch (t) {

                case "err_ucFirst":
                    err_ucFirst(a, v);
                    break;
                case "err_comma_number":
                    err_comma_number(a, v);
                    break;
                case "err_in_words":
                    err_in_words(a, v);
                    break;
                default:
                    break;
            }

            context = false;

        } else {

            context = true;
        }
        return {

            context: context
        };
    }

    function err_ucFirst(a, v) {

        if (a.length > 1) {

            $_tv.tError('ucFrist expected only one String or Array as parameter, given ' + a.length);
        }
    }

    function err_comma_number(a, v) {

        if (a.length != 1) {

            $_tv.tError("comman_number expects only one parameter, given " + a.length);
        }

        if (isNaN(v)) {

            $_tv.tError('Argument 1 must be positive integer ');
        }

    }

    function err_in_words(a, v) {

        if (a.length != 1) {

            $_tv.tError("comman_number expects only one parameter, given " + a.length);
        }

        if (isNaN(v)) {

            $_tv.tError('Argument 1 must be positive integer ');
        }
    }
    //self invocations
    let ref = function () {
        return new $_tv();
    };

    return new ref;

})();