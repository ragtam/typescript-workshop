enum TimeOfDay {
    Morning = 'morning',
    Evening = 'evening',
    Afternoon = 'afternoon',
    Night = 'night',
}

const allTimes = [TimeOfDay.Morning, TimeOfDay.Evening, TimeOfDay.Afternoon, TimeOfDay.Night];

function funWithEnum(v: TimeOfDay): void {
    console.info(allTimes, v);
}

const allTimesUnion = ['morning', 'evening', 'afternoon', 'night'] as const;
type TimeOfDayUnion = typeof allTimesUnion;

function funWithUnion(v: TimeOfDayUnion): void {
    console.info(allTimesUnion, v);
}
