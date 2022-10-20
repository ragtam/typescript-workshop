var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay['Morning'] = 'morning';
    TimeOfDay['Evening'] = 'evening';
    TimeOfDay['Afternoon'] = 'afternoon';
    TimeOfDay['Night'] = 'night';
})(TimeOfDay || (TimeOfDay = {}));
var allTimes = [TimeOfDay.Morning, TimeOfDay.Evening, TimeOfDay.Afternoon, TimeOfDay.Night];
function funWithEnum(v) {
    console.info(allTimes, v);
}
var allTimesUnion = ['morning', 'evening', 'afternoon', 'night'];
function funWithUnion(v) {
    console.info(allTimesUnion, v);
}
