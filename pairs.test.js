const { findProductPairs } = require('./pairs');

test('finds all pairs of products', () => {
    expect(findProductPairs(["Shoes", "Shirt", "Hat", "Bag"])).toEqual(['Shoes and Shirt',
        'Shoes and Hat',
        'Shoes and Bag',
        'Shirt and Hat',
        'Shirt and Bag',
        'Hat and Bag']);
});