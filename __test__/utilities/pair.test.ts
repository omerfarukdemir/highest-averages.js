import { Pair } from '../../src'

describe("values", () => {
    it("should return same", () => {
        let pair = new Pair(1, 2)

        expect(pair.first).toBe(1)
        expect(pair.second).toBe(2)
    })
})
