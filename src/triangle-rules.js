const triangle_rules = {
    isValid: (a, b, c) =>
        a > 0 &&
        b > 0 &&
        c > 0 &&
        !(a + b <= c || a + c <= b || b + c <= a),

    area: (b, h) => ((b * h) / 2),

    perimeter: (a, b, c) => parseInt(a) + parseInt(b) + parseInt(c)
}

module.exports = triangle_rules;