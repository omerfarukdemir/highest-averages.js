import { PoliticalParty } from '../../src/models/political_party'
import { SanMarino2019 } from '../../src/elections/san_marino'
import { InvalidVotes } from '../../src/models/invalid_votes'
import { CandidateResult } from '../../src/models/candidate_result'
import { Candidate } from '../../src/models/candidate'

describe('san marino', () => {
  it('2019', () => {
    // https://en.wikipedia.org/wiki/2019_San_Marino_general_election

    const pdcs = new PoliticalParty('PDCS', 5993)
    const tomorrowInMotion = new PoliticalParty('Tomorrow in Motion', 4445)
    const libera = new PoliticalParty('Libera', 2964)
    const nplr = new PoliticalParty('NplR', 2359)
    const rf = new PoliticalParty('RF', 1850)
    const elego = new PoliticalParty('elego', 361)
    const invalid = new InvalidVotes(1262)

    const results = new SanMarino2019().apply([pdcs, tomorrowInMotion, libera, nplr, rf, elego, invalid])

    const candidateResult = (candidate: Candidate): CandidateResult => results
      .filter(candidateResult => candidateResult.name() === candidate.name)[0]

    expect(candidateResult(pdcs).seat).toBe(21)
    expect(candidateResult(tomorrowInMotion).seat).toBe(15)
    expect(candidateResult(libera).seat).toBe(10)
    expect(candidateResult(nplr).seat).toBe(8)
    expect(candidateResult(rf).seat).toBe(6)
    expect(candidateResult(elego).seat).toBe(0)
  })
})
