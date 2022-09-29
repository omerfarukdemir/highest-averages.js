export class Candidate {
  readonly name: string
  readonly vote: number

  selectable = true

  constructor (name: string, vote: number) {
    this.name = name
    this.vote = vote
  }
}
