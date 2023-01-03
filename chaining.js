const $_tv = function (s) {

    let tv = {};
    tv.selector = s;
    tv.element = document.querySelector(tv.selector);
    tv.html = () => {

        return (tv.element == null) ? new Error('No element found named ' + s) : tv.element;

    }

    tv.tError = (a) => {

        throw new Error(a);
    };

    tv.getTypeUcFirst = (a) => {


        return a.charAt(0).toUpperCase() + a.substr(1, a.length - 1);
    }

    tv.makeFirstUpperCase = (a) => {

        return a.trim().charAt(0).toString().toUpperCase() + a.trim().substr(1, a.trim().length - 1);
    }

    tv.makeWordsUpperCase = (a) => {

        let str = a.trim().toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });

        return str;
    }

    tv.run = function (a, b) {

        return b(a);
    };

    tv.ucFirstArray = (x) => {

        return x.map((a) => {

            try {

                if (typeof (a) !== "string") {

                    tv.tError(a + "  must be String given " + tv.getTypeUcFirst(typeof (a)));

                }

            } catch (e) {

                console.error(e.message);

            } finally {

                return tv.run(a, tv.makeFirstUpperCase);
            }

        })
    };
    tv.ucFirstString = (a) => {

        try {

            if (typeof (a) !== "string") {

                let t = typeof (a);
                throw new Error(a + "  must be String given " + t.charAt(0).toUpperCase() + t.substr(1, t.length - 1));
            }

        } catch (e) {

            console.error(e.message);

        } finally {

            return tv.run(a, tv.makeFirstUpperCase);
        }
    };
    tv.ucWordsArray = (x) => {

        return x.map((a) => {

            try {

                if (typeof (a) !== "string") {

                    let t = typeof (a);
                    tv.tError(a + "  must be String given " + t.charAt(0).toUpperCase() + t.substr(1, t.length - 1));
                }

            } catch (e) {

                console.error(e.message);

            } finally {

                return tv.run(a, tv.makeWordsUpperCase);
            }

        })
    };
    tv.ucWordsString = (a) => {

        try {

            if (typeof (a) !== "string") {

                let t = typeof (a);
                tv.tError(a + "  must be String given " + t.charAt(0).toUpperCase() + t.substr(1, t.length - 1));
            }

        } catch (e) {

            console.error(e.message);

        } finally {

            return tv.run(a, tv.makeWordsUpperCase);
        }
    };

    tv.ucFirst = function (x) {

        if (arguments.length == 0 || arguments.length > 1) {

            tv.tError('ucFirst expected only one parameter which must be Array or String');
        }

        let t = typeof (x);

        switch (t) {

            case "object":
                return tv.ucFirstArray(x);
                break;
            case "string":
                return tv.ucFirstString(x);
                break;
            default:
                console.log('Only string and array alowed in ucFirst function')
                break;
        }
    };
    tv.ucWords = function (x) {

        if (arguments.length == 0 || arguments.length > 1) {

            tv.tError('ucWords expected only one parameter which must be Array or String');
        }

        let t = typeof (x);

        switch (t) {

            case "object":
                return tv.ucWordsArray(x);
                break;
            case "string":
                return tv.ucWordsString(x);
                break;
            default:
                console.log('Only string and array alowed in ucFirst function')
                break;
        }


    };

    tv.mt_rand = function (min, max) {


        const argc = arguments.length;

        if (argc === 0) {

            min = 0;
            max = 9;

        } else if (argc > 2 || argc < 2) {

            throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');

        } else {

            min = parseInt(min, 10);
            max = parseInt(max, 10);
        }
        return Math.floor(Math.random() * (max - min + 1)) + min

    }
    tv.comma_number = function (x) {


        if (arguments.length != 1) {

            tv.tError("comman_number expects only one parameter, given " + arguments.length);
        }

        if (isNaN(x)) {

            tv.tError('Argument 1 must be positive inteer ');
        }

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    tv.in_words = function (x) {

        if (arguments.length != 1) {

            tv.tError("in_words expects only one parameter, given " + arguments.length);
        }

        if (isNaN(x)) {

            tv.tError("Parameter 1 must be a number, given " + tv.getTypeUcFirst(typeof (x)));


        }
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

    tv.a = function(){

        return tv;
    }
    tv.b = function(){

        return tv;
    }
    return tv;
}