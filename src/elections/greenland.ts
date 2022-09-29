import { Candidate } from '../models/candidate'
import { CandidateResult } from '../models/candidate_result'
import { DHondt } from '../dhondt'

// https://en.wikipedia.org/wiki/2018_Greenlandic_general_election
export class Greenland2018 {
  private readonly dhondt = (new DHondt)
  private readonly seat = 31

  apply (candidates: Candidate[]): CandidateResult[] {
    return this.dhondt
      .withSeat(this.seat)
      .withCandidates(candidates)
      .apply()
  }
}

// https://en.wikipedia.org/wiki/2021_Greenlandic_general_election
export class Greenland2021 extends Greenland2018 {}
