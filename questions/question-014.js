/**
 * This problem was asked by Google.
 * The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
 * Hint: The basic equation of a circle is x^2 + y^2 = r^2.
 *
 * Main inspiration comes from @see {@link https://www.mathsisfun.com/algebra/circle-equations.html}
 * Explanation of Monte Carlo Algorithm @see {@link https://www.youtube.com/watch?v=AyBNnkYrSWY}
 */

const main14 = (iteration) => {
    // Assuming unit square (e.g., square with 1cm width and 1cm height)
    const widthOrHeight = 1;
    let pointsInsideCircle = 0;

    // The higher the iteration count, the higher the precision
    for (let i = 0; i < iteration; i++) {
        /**
         * Given that x^2 + y^2 = r^2 and x and y are both 1, then 1 + 1 = 1,
         * which implies that any x^2 + y^2 combination that is less than 1 is actually
         * within the circle,
         *
         * Since more than x^2 + y^2 > 1 would mean that the point extends over
         * the limit of x^2 + y^2 = r^2 formulae
         */
        const x = Math.pow(Math.random() * 1.0, 2);
        const y = Math.pow(Math.random() * 1.0, 2);
        if (x + y <= 0.9999999999) {
            pointsInsideCircle += 1;
        }
    }

    // We get the ratio of pointsThatFallWithinCircle/Total (which is the whole square)
    const monteCarloRatio = pointsInsideCircle / iteration;
    console.log('monteCarloRatio', monteCarloRatio);

    /**
     * Given πr^2 and width and height = 1 and r = 0.5
     * And π(0.5^2) = monteCarloRatio/TotalAreaOfASquare (TotalAreaOfASquare is 1, by the way)
     * Resulting in π = monteCarloRatio/(0.5 ^ 2)
     */
    console.log('pi', (monteCarloRatio / Math.pow(widthOrHeight / 2, 2)).toFixed(3));
};

main14(10000);
