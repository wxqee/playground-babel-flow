//@flow
import { square } from './lib';

export const run = () => {
    const re = square(3); // Error!
    console.log('[other] square(3) => %d', re);
}
