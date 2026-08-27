import config from '../config/env.js';

describe('Environment configuration', () => {
    test('should load a valid port number given a string', () => {
        // Set environment variable with mock value
        process.env.PORT = '3000';

        expect(config.port).toBe(3000);
    });
    test('should load a valid port number given a number', () => {
        process.env.PORT = 5000;

        expect(config.port).toBe(5000);
    });
    test('should throw an Error', () => {
        process.env.PORT = 'three thousand';

        expect(() => config.port)
