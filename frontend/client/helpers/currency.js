
/**
 * [METHOD] format for price
 * @param {double} value
 * @param {string} currency
 */
export const formatPrice = (value, currency = "IDR", removeDecimal = true) => {
    const default_locales = 'en-US';

    /* --- CHANGE TO CURRENT CURRENCY --- */

    const price = new Intl.NumberFormat(default_locales, {
        style: 'currency',
        currency,
    }).format(value);

    const decimalFeature = () => {
        const decimal = price.substr(price.length - 3).substring(1);
        const resultDecimal = parseInt(decimal, 10);
        const resultPrice = price.slice(0, -3);
        if (resultDecimal === 0) {
            return resultPrice;
        }
        return price;
    };

    return removeDecimal === true ? decimalFeature() : price;
};

export default { formatPrice };
