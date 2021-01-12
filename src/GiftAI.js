const giftDict = {
    "aaa": "Cool T-Shirt",
    "baa": "Cool Hoody",
    "caa": "Warm Socks",
    "aba": "Star Wars figure",
    "bba": "Marvel T-Shirt",
    "cba": "Smart Home Component",
    "aca": "Coloring Book",
    "bca": "Screwdriver",
    "cca": "Knitting Kit",
    "aab": "Fashionable Clothing",
    "bab": "Branded Jewellry",
    "cab": "Nice Hat",
    "abb": "Something from Teknikmagasinet",
    "bbb": "Something from Webhallen",
    "cbb": "Something from Mediamarkt",
    "acb": "Something from Panduro",
    "bcb": "Something from a store located in Södermalm",
    "ccb": "Crafts Table",
    "aac": "Something from Glitter",
    "bac": "Something from Rituals",
    "cac": "Something from Guldfynd",
    "abc": "RC Car",
    "bbc": "Smart Home Sockets",
    "cbc": "Wifi Lamps",
    "acc": "Get started with Molding Kit",
    "bcc": "Sewing Kit",
    "ccc": "A bag of cement"
}
export const GiftAI = {
    calculate: (code) => {
        return giftDict[code]
    }
}