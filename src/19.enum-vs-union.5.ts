const allTimesUnion = ['morning', 'evening', 'afternoon', 'night'] as const;
type TimeOfDayUnion = typeof allTimesUnion;

function funWithUnion(v: TimeOfDayUnion): void {
    console.info(allTimesUnion, v);
}

export {};
