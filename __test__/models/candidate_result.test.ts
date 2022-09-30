import { CandidateResult, Candidate, IndependentPolitician, PoliticalParty, InvalidVotes } from '../../src'

describe("constructor", () => {
    it("should calculate percentage", () => {
        let candidate = new Candidate("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.percentage).toBe(10)
    })

    it("should set 0 to seat", () => {
        let candidate = new Candidate("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.seat).toBe(0)
    })
})

describe("name", () => {
    it("should return candidate.name", () => {
        let candidate = new Candidate("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.name()).toBe(candidate.name)
    })
})

describe("vote", () => {
    it("should return candidate.vote", () => {
        let candidate = new Candidate("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.vote()).toBe(candidate.vote)
    })
})

describe("selectable", () => {
    it("should return false if candidate is not selectable", () => {
        let candidate = new IndependentPolitician("name", 10)

        candidate.selectable = false

        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.selectable()).toBe(false)
    })

    it("should return true for 0 seat IndependentPolitician", () => {
        let candidate = new IndependentPolitician("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.selectable()).toBe(true)
    })

    it("should return false for already selected IndependentPolitician", () => {
        let candidate = new IndependentPolitician("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)
        candidateResult.seat = 1

        expect(candidateResult.selectable()).toBe(false)
    })

    it("should return true for PoliticalParty", () => {
        let candidate = new PoliticalParty("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.selectable()).toBe(true)
    })

    it("should return false for InvalidVotes", () => {
        let candidate = new InvalidVotes(10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.selectable()).toBe(false)
    })

    it("should return false for Candidate", () => {
        let candidate = new Candidate("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.selectable()).toBe(true)
    })
})

describe("select", () => {
    it("should increase seat", () => {
        let candidate = new IndependentPolitician("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        expect(candidateResult.seat).toBe(0)

        candidateResult.select()

        expect(candidateResult.seat).toBe(1)
    })

    it("should throw error if candidate is not selectable", () => {
        let candidate = new IndependentPolitician("name", 10)
        let candidateResult = new CandidateResult(candidate, 100)

        candidateResult.select()

        expect(() => candidateResult.select()).toThrow(Error)
    })
})
