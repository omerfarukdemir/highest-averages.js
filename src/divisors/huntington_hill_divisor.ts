import { Divisor } from './divisor'

export class HuntingtonHillDivisor implements Divisor {
  next = (iteration: number): number => Math.sqrt(iteration * (iteration + 1))
}
