import './map_extensions'

export {}

declare global {
  export interface Array<T> {
    groupBy<A> (selector: (item: T) => A): Map<A, T[]>

    sum (this: number[]): number

    sumOf (selector: (item: T) => number): number

    flatten (this: T[]): T

    clear (): void
  }
}

Array.prototype.groupBy = function groupBy<K, T> (selector: (item: T) => K): Map<K, T[]> {
  return this.reduce((map: Map<K, T[]>, value: T): Map<K, T[]> => {
    return map.set(selector(value), map.getOrElse(selector(value), []).concat(value))
  }, (new Map<K, T[]>))
}

Array.prototype.sum = function sum (this: number[]): number {
  return this.reduce((x, y) => x + y, 0)
}

Array.prototype.sumOf = function sumOf<T> (selector: (item: T) => number): number {
  return this.map(selector).sum()
}

Array.prototype.flatten = function flatten<T> (this: T[][]): T[] {
  return this.reduce((x, y) => x.concat(y), [])
}

Array.prototype.clear = function clear (): void {
  this.splice(0)
}
