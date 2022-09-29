# highest-averages
This is set of highest averages methods for allocating seats in a parliament.

### Pure Example
- Define the candidates with their vote
```typescript
const a = new Candidate('A', 200)
const b = new Candidate('B', 140)
const c = new Candidate('C', 70)
```
- Implement divisor function
```typescript
const divisor: Divisor = new class implements Divisor {
  next (iteration: number): number {
    return iteration + 2
  }
}
```
- Define the highest averages method
```typescript
const highestAverage = new HighestAverage(divisor)
```
- Get the results for 5 seats
```typescript
const result = highestAverage
  .withSeat(5)
  .withCandidates([a, b, c])
  .apply()

result.forEach(candidate => console.log(`${candidate.name()}:${candidate.seat}`))
```
- Result
```
A:3
B:2
C:0
```
- Selection table of example

|   | 1    | 2     | 3      | 4     | 5      | Result |
|---|------|-------|--------|-------|--------|--------|
| A | 100* | 66.66 | 66.66* | 50*   | 40     | 3      |
| B | 70   | 70*   | 46.66  | 46.66 | 46.66* | 2      |
| C | 35   | 35    | 35     | 35    | 35     | 0      |
### Predefined Highest Averages Methods
- D'Hondt
```typescript
const result = new DHondt()
  .withSeat(5)
  .withCandidates([])
  .apply()
```
- Sainte-Laguë
```typescript
const result = new SainteLague()
  .withSeat(5)
  .withCandidates([])
  .apply()
  ```
- Imperiali
```typescript
const result = new Imperiali()
  .withSeat(5)
  .withCandidates([])
  .apply()
  ```
- Huntington–Hill
```typescript
const result = new HuntingtonHill()
  .withSeat(5)
  .withCandidates([])
  .apply()
  ```
- Danish
```typescript
const result = new Danish()
  .withSeat(5)
  .withCandidates([])
  .apply()
  ```
### Election Implementations ([examples](https://github.com/omerfarukdemir/highest-averages/tree/master/__test__/elections))
- Greenland general election (Inatsisartut) (2018, 2021)
- Dutch general election (Tweede Kamer der Staten-Generaal) (2017, 2021)
- San Marino general election (Consiglio Grande e Generale) (2019)
