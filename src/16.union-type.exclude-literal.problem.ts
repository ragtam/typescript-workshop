// 1. Define PositiveFeedback ( 'ok' | 'not ok' ) type without repeating string literals

// Option 1: use utility type
// Option 2: write your own utility type
// Option 3: extend option 2 with type check, so that only keys defined in source type were allowed

type UserComment = 'ok' | 'not ok' | 'great';
type PositiveFeedback = any; // implementation goes here

function sendFeedback(comment: PositiveFeedback): void {
    console.info(comment);
}

const ok = sendFeedback('ok');
const great = sendFeedback('great');

// @ts-expect-error
const notOk = sendFeedback('not ok');

export {};
