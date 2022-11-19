export const maskAmount = (value) => {
    const newValue = prepareAmount(value)
    return formatAmount(newValue)
}

const formatAmount = (value) => {
    return String(value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}

const prepareAmount = (string) => {
    let value = String(string)
        .replace(',', '.')
        .replace(/[^\d.]/g, '')
        .split('.')
        .filter(function (item, i) {
            return i <= 1
        })
    value[0] = value[0].replace(/[^\d]/g, '')
    if (value.length > 1) {
        value[1] = value[1].replace(/[^\d]/g, '').substring(0, 2)
    }

    return value.join('.')
}