import { Divisor } from './divisors/divisor'
import { Candidate } from './models/candidate'
import { CandidateResult } from './models/candidate_result'
import './extensions/array_extensions'

export class HighestAverage {
  private readonly divisor: Divisor
  private readonly candidates: Candidate[] = []

  private seat = 0

  constructor (divisor: Divisor) {
    this.divisor = divisor
  }

  withSeat (seat: number): HighestAverage {
    this.seat = seat
    return this
  }

  withCandidates (candidates: Candidate[]): HighestAverage {
    this.candidates.clear()
    candidates.forEach(candidate => this.candidates.push(candidate))
    return this
  }

  apply (): CandidateResult[] {
    const totalVote = this.candidates.sumOf(candidate => candidate.vote)

    const candidateResults = this.candidates.map(candidate => new CandidateResult(candidate, totalVote))

    const dividedVote = (candidateResult: CandidateResult): number =>
      candidateResult.candidate.vote / this.divisor.next(candidateResult.seat)

    let selected = 0

    while (this.seat !== selected) {
      const selectableCandidates = candidateResults
        .filter(candidateResult => candidateResult.selectable())

      if (selectableCandidates.length > 1) {
        selectableCandidates
          .reduce((x, y) => dividedVote(x) > dividedVote(y) ? x : y)
          .select()
        selected++
      } else if (selectableCandidates.length === 1) {
        selectableCandidates[0].select()
        selected++
      } else {
        break
      }
    }

    return candidateResults
  }
}
