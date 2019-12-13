enum TimePeriods  {
    PREHISTORY = "Pré-História",
    ANCIENTHISTORY = "Idade Antiga",
    MIDDLEAGE = "Idade Média",
    MODERNHISTORY = "Idade Moderna",
    CONTEMPORARYHISTORY = "Idade Contemporânea"
}

enum Era {
    AC = "AC",
    DC = "DC"
}

function classifyYearsByTimePeriods(era: Era = Era.DC , year: number) : string {
    if(era === Era.AC && (year >= 100.000 && year > 4000)) {
        return TimePeriods.PREHISTORY
    } else if (era === Era.AC && (year <= 4000) ||era === Era.DC && year < 476) {
        return TimePeriods.ANCIENTHISTORY
    } else if (era === Era.DC && (year >= 476 && year < 1453)) {
        return TimePeriods.MIDDLEAGE
    }else if (era === Era.DC && (year >= 1453 && year < 1789)) {
        return TimePeriods.MODERNHISTORY
    } else if (era === Era.DC && year >= 1789) {
        return TimePeriods.CONTEMPORARYHISTORY
    }
}

console.log(classifyYearsByTimePeriods(Era.DC, 1700));




