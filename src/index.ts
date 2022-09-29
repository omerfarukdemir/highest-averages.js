import { HighestAverage } from './highest_average'
import { Divisor } from './divisors/divisor'
import { Candidate } from './models/candidate'

const a = new Candidate('A', 200)
const b = new Candidate('B', 140)
const c = new Candidate('C', 70)

const divisor: Divisor = new class implements Divisor {
  next (iteration: number): number {
    return iteration + 2
  }
}

const highestAverage = new HighestAverage(divisor)

const result = highestAverage
  .withSeat(5)
  .withCandidates([a, b, c])
  .apply()

result.forEach(candidate => console.log(`${candidate.name()}:${candidate.seat}`))

// A:2
// B:1
// C:1
