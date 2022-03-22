/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('has ports', () => {
        const itinerary = new Itinerary('Wigan Pier');

        expect(itinerary.ports).toBe('Wigan Pier');
    })
});