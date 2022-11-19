export const normalizeNumber = (value) => {
    return Number(String(value).replace(/\s/g, ''))
}
