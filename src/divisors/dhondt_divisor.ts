import { Divisor } from './divisor'

export class DHondtDivisor implements Divisor {
  next = (iteration: number): number => iteration + 1
}
