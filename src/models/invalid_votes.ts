import { Candidate } from './candidate'

export class InvalidVotes extends Candidate {
  selectable = false

  constructor (vote: number) {
    super('INVALID', vote)
  }
}
