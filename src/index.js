module.exports = function toReadable(number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let mas = number.toString().split('');
    let result = '';
    let fl = false
    if (mas.length === 3) {
        fl = true;
        result += numbers[mas[0]] + ' hundred';
        if (mas[1] == 0) {
            if (mas[2] == 0)
                return result;
            return result += ` ${numbers[mas[2]]}`;
        }
        return doubleDigits();
    }
    if (mas.length === 2) {
        return doubleDigits();
    }
    return numbers[mas[0]];

    function doubleDigits() {
        let i = 0;
        if (fl) {
            result += ' ';
            i++;
        }
        if (mas[i] == 1) {
            if (mas[i + 1] == 0) {
                result += 'ten';
                return result;
            }
            i + 1
            if (mas[i + 1] == 1) {
                return result += 'eleven';
            }
            if (mas[i + 1] == 2) {
                return result += 'twelve';
            }
            if (mas[i + 1] == 3) {
                return result += 'thirteen'
            }
            if (mas[i + 1] == 5) {
                return result += 'fifteen'
            }
            if (mas[i + 1] == 8) {
                return result += 'eighteen'
            }
            if (mas[i + 1] == 4 || mas[i + 1] < 8 || mas[i + 1] == 9) {
                return result += `${numbers[mas[i+1]]}teen`
            }
        }
        if (mas[i] == 2) {
            if (mas[i + 1] == 0) {
                return result += `twenty`
            }
            return result += `twenty ${numbers[mas[i+1]]}`
        }
        if (mas[i] == 3) {
            if (mas[i + 1] == 0) {
                return result += `thirty`
            }
            return result += `thirty ${numbers[mas[i+1]]}`
        }
        if (mas[i] == 4) {
            if (mas[i + 1] == 0) {
                return result += `forty`
            }
            return result += `forty ${numbers[mas[i+1]]}`
        }
        if (mas[i] == 5) {
            if (mas[i + 1] == 0) {
                return result += `fifty`
            }
            return result += `fifty ${numbers[mas[i+1]]}`
        }
        if (mas[i] == 6 || mas[i] == 7 || mas[i] == 9) {

            if (mas[i + 1] == 0) {
                return result += `${numbers[mas[i]]}ty`
            }
            return result += `${numbers[mas[i]]}ty ${numbers[mas[i+1]]}`
        }

        if (mas[i] == 8) {
            if (mas[i + 1] == 0) {
                return result += `${numbers[mas[i]].slice(0, -1)}ty`
            }
            return result += `${numbers[mas[i]].slice(0, -1)}ty ${numbers[mas[i+1]]}`
        }
    }
}
