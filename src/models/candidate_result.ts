import { IndependentPolitician } from './independent_politician'
import { PoliticalParty } from './political_party'
import { Candidate } from './candidate'
import { InvalidVotes } from './invalid_votes'

export class CandidateResult {
  readonly candidate: Candidate
  readonly percentage: number

  seat: number

  constructor (candidate: Candidate, totalVote: number) {
    this.candidate = candidate
    this.percentage = (candidate.vote / totalVote) * 100
    this.seat = 0
  }

  name (): string {
    return this.candidate.name
  }

  vote (): number {
    return this.candidate.vote
  }

  select (): void {
    if (!this.selectable()) {
      throw new Error('Candidate is not selectable')
    }

    this.seat++
  }

  selectable (): boolean {
    if (!this.candidate.selectable) {
      return false
    }

    if (this.candidate instanceof PoliticalParty) {
      return true
    } else if (this.candidate instanceof IndependentPolitician) {
      return this.seat === 0
    } else if (this.candidate instanceof InvalidVotes) {
      return false
    } else {
      return true
    }
  }
}
