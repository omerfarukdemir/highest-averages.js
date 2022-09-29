import "../../src/extensions/map_extensions"
import { Pair } from "../../src/utilities/pair"

describe("getOrElse", () => {
    it("should return item in map", () => {
        let map = new Map()

        map.set(1, 2)

        let item = map.getOrElse(1, 3)

        expect(item).toBe(2)
    })

    it("should return alternative item", () => {
        let map = new Map()

        map.set(1, 2)

        let item = map.getOrElse(2, 3)

        expect(item).toBe(3)
    })
})

describe("mappableKeys", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mappableKeys()

        expect(result.length).toBe(0)
    })

    it("should return keys", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mappableKeys()

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([1, 3]))
    })
})

describe("mappableValues", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mappableValues()

        expect(result.length).toBe(0)
    })

    it("should return values", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mappableValues()

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([2, 4]))
    })
})

describe("mappableEntries", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mappableEntries()

        expect(result.length).toBe(0)
    })

    it("should return entries", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mappableEntries()

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([new Pair(1, 2), new Pair(3, 4)]))
    })
})

describe("mapKeys", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mapKeys(x => x + 1)

        expect(result.length).toBe(0)
    })

    it("should return mapped keys", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mapKeys(x => x + 1)

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([2, 4]))
    })
})

describe("mapValues", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mapValues(x => x + 1)

        expect(result.length).toBe(0)
    })

    it("should return mapped values", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mapValues(x => x + 1)

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([3, 5]))
    })
})

describe("mapEntries", () => {
    it("should return empty array", () => {
        let map = new Map()
        let result = map.mapEntries(x => x.first + x.second)

        expect(result.length).toBe(0)
    })

    it("should return mapped entries", () => {
        let map = new Map()

        map.set(1, 2)
        map.set(3, 4)

        let result = map.mapEntries(x => x.first + x.second)

        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([3, 7]))
    })
})
