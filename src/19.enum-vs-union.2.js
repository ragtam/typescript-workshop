var EnumWithNumbers;
(function (EnumWithNumbers) {
    EnumWithNumbers[EnumWithNumbers["FirstOption"] = 0] = "FirstOption";
    EnumWithNumbers[EnumWithNumbers["SecondOption"] = 1] = "SecondOption";
    EnumWithNumbers[EnumWithNumbers["ThirdOption"] = 2] = "ThirdOption";
})(EnumWithNumbers || (EnumWithNumbers = {}));
console.info(Object.values(EnumWithNumbers));
