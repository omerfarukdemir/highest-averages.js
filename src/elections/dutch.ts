import { Candidate } from '../models/candidate'
import { CandidateResult } from '../models/candidate_result'
import { InvalidVotes } from '../models/invalid_votes'
import { DHondt } from '../dhondt'

// https://en.wikipedia.org/wiki/2017_Dutch_general_election
export class Dutch2017 {
  private readonly dhondt = (new DHondt)
  private readonly seat = 150

  apply (candidates: Candidate[]): CandidateResult[] {
    const totalValidVote = candidates
      .filter(candidate => !(candidate instanceof InvalidVotes))
      .sumOf(candidate => candidate.vote)

    candidates.forEach(candidate => candidate.selectable = candidate.vote / totalValidVote >= 1 / this.seat)

    return this.dhondt.withSeat(this.seat).withCandidates(candidates).apply()
  }
}

// https://en.wikipedia.org/wiki/2021_Dutch_general_election
export class Dutch2021 extends Dutch2017 {}
