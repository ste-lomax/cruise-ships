/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can have ports', () => {
        const wiganPier = new Port('Wigan Pier');
        const southport = new Port('Southport');

        const itinerary = new Itinerary([wiganPier, southport]);

        expect(itinerary.ports).toEqual([wiganPier, southport]);
    })
});