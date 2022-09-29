import { Candidate } from '../models/candidate'
import { CandidateResult } from '../models/candidate_result'
import { DHondt } from '../dhondt'
import { PoliticalParty } from '../models/political_party'

// TODO: second round conditions

// https://en.wikipedia.org/wiki/2019_San_Marino_general_election
export class SanMarino2019 {
  private readonly dhondt = (new DHondt)
  private readonly seat = 60

  apply (candidates: Candidate[]): CandidateResult[] {
    const partyCount = candidates.filter(candidate => candidate instanceof PoliticalParty).length
    const totalVote = candidates.sumOf(candidate => candidate.vote)

    candidates.forEach(
      candidate => candidate.selectable = candidate.vote / totalVote >= Math.max(partyCount * 0.4, 3.5) / 100
    )

    return this.dhondt.withSeat(this.seat).withCandidates(candidates).apply()
  }
}
