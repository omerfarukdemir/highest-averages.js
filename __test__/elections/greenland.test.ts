import { PoliticalParty } from '../../src/models/political_party'
import { InvalidVotes } from '../../src/models/invalid_votes'
import { Candidate } from '../../src/models/candidate'
import { CandidateResult } from '../../src/models/candidate_result'
import { IndependentPolitician } from '../../src/models/independent_politician'
import { Greenland2018, Greenland2021 } from '../../src/elections/greenland'

describe('greenland', () => {
  it('2018', () => {
    // https://en.wikipedia.org/wiki/2018_Greenlandic_general_election

    const siumut = new PoliticalParty('Siumut', 7959)
    const ia = new PoliticalParty('IA', 7478)
    const demokraatit = new PoliticalParty('D', 5712)
    const naleraq = new PoliticalParty('Naleraq', 3931)
    const a = new PoliticalParty('A', 1730)
    const suleqatigiissitsisut = new PoliticalParty('Suleqatigiissitsisut', 1193)
    const nunattaQitornai = new IndependentPolitician("Nunatta Qitornai", 1002)
    const invalid = new InvalidVotes(291	)

    const results = new Greenland2018()
      .apply([siumut, ia, demokraatit, naleraq, a, suleqatigiissitsisut, nunattaQitornai, invalid])

    const candidateResult = (candidate: Candidate): CandidateResult => results
      .filter(candidateResult => candidateResult.name() === candidate.name)[0]

    expect(candidateResult(siumut).seat).toBe(9)
    expect(candidateResult(ia).seat).toBe(8)
    expect(candidateResult(demokraatit).seat).toBe(6)
    expect(candidateResult(naleraq).seat).toBe(4)
    expect(candidateResult(a).seat).toBe(2)
    expect(candidateResult(suleqatigiissitsisut).seat).toBe(1)
    expect(candidateResult(nunattaQitornai).seat).toBe(1)
  })

  it('2021', () => {
    // https://en.wikipedia.org/wiki/2021_Greenlandic_general_election

    const ia = new PoliticalParty('IA', 9933)
    const siumut = new PoliticalParty('Siumut', 7986)
    const naleraq = new PoliticalParty('Naleraq', 3252)
    const demokraatit = new PoliticalParty('D', 2454)
    const a = new PoliticalParty('A', 1878)
    const suleqatigiissitsisut = new PoliticalParty('Suleqatigiissitsisut', 639)
    const independents = new IndependentPolitician("Independents", 10)
    const invalid = new InvalidVotes(581	)

    const results = new Greenland2021()
      .apply([ia, siumut, naleraq, demokraatit, a, suleqatigiissitsisut, independents, invalid])

    const candidateResult = (candidate: Candidate): CandidateResult => results
      .filter(candidateResult => candidateResult.name() === candidate.name)[0]

    expect(candidateResult(ia).seat).toBe(12)
    expect(candidateResult(siumut).seat).toBe(10)
    expect(candidateResult(naleraq).seat).toBe(4)
    expect(candidateResult(demokraatit).seat).toBe(3)
    expect(candidateResult(a).seat).toBe(2)
    expect(candidateResult(suleqatigiissitsisut).seat).toBe(0)
    expect(candidateResult(independents).seat).toBe(0)
  })
})
