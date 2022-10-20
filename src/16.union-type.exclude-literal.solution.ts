// 1. Define PositiveFeedback type without repeating string literals

type UserComment = 'ok' | 'not ok' | 'great';
// Option 1
type PositiveFeedback = Exclude<UserComment, 'not ok'>

// Option 2
// type MyExclude<TSourceType, KLiteralToExclude> = TSourceType extends KLiteralToExclude ? never : TSourceType
// type PositiveFeedback = MyExclude<UserComment, 'not ok'>

// Option 3
// type MyExclude<TSourceType, KLiteralToExclude extends TSourceType> = TSourceType extends KLiteralToExclude ? never : TSourceType
// type PositiveFeedback = MyExclude<UserComment, 'not ok'>

function sendFeedback(comment: PositiveFeedback): void {
    console.info(comment);
}

const ok = sendFeedback('ok');
const great = sendFeedback('great');

// @ts-expect-error
const notOk = sendFeedback('not ok');

export {}
