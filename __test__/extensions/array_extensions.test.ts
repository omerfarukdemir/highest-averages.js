import "../../src/extensions/array_extensions"

describe("groupBy", () => {
    it("should return empty map", () => {
        let items: number[] = []
        let result = items.groupBy(i => i)

        expect(result.size).toBe(0)
    })

    it("should return items grouped by % 3", () => {
        let items: number[] = [0, 1, 2, 3, 4, 5, 6]
        let result = items.groupBy(i => i % 3)

        expect(result.size).toBe(3)
        expect(result.getOrElse(0, []).length).toBe(3)
        expect(result.get(0)).toEqual(expect.arrayContaining([0, 3, 6]))
        expect(result.getOrElse(1, []).length).toBe(2)
        expect(result.get(1)).toEqual(expect.arrayContaining([1, 4]))
        expect(result.getOrElse(2, []).length).toBe(2)
        expect(result.get(2)).toEqual(expect.arrayContaining([2, 5]))
    })
})

describe("sum", () => {
    it("should return 0", () => {
        let items: number[] = []
        let result = items.sum()

        expect(result).toBe(0)
    })

    it("should return 5", () => {
        let items = [0, 1, 1, 3]
        let result = items.sum()

        expect(result).toBe(5)
    })
})

describe("sumOf", () => {
    it("should return 0", () => {
        let items: number[] = []
        let result = items.sumOf(i => i)

        expect(result).toBe(0)
    })

    it("should return 0", () => {
        let items = [1, 5, 13]
        let result = items.sumOf(i => i % 5)

        expect(result).toBe(4)
    })
})

describe("flatten", () => {
    it("should return empty array", () => {
        let items: number[][] = []
        let result = items.flatten()

        expect(result.length).toBe(0)
    })

    it("should return all items", () => {
        let items: number[][] = [[1], [2, 3], [4, 5, 6]]
        let result = items.flatten()

        expect(result.length).toBe(6)
        expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]))
    })
})

describe("clean", () => {
    it("should work", () => {
        let items: number[] = [1, 2, 3]

        items.clear()

        expect(items.length).toBe(0)
    })
})
