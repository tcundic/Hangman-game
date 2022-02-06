import { getNewQuote, getUniqueLetters } from "../utils/utilMethods";
import axios from "axios";

test('should get set of unique letters back', () => {
    const uniqueLetters = getUniqueLetters('New quote');

    expect(uniqueLetters.size).toBe(7);
});

jest.mock('axios');
