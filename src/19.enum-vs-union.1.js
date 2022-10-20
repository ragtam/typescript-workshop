var EnumWithStrings;
(function (EnumWithStrings) {
    EnumWithStrings['FirstOption'] = 'First One';
    EnumWithStrings['SecondOption'] = 'Second One';
    EnumWithStrings['ThirdOption'] = 'Third One';
})(EnumWithStrings || (EnumWithStrings = {}));
console.info(Object.values(EnumWithStrings));
