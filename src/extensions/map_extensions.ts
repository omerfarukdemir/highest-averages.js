import { Pair } from '../utilities/pair'

export {}

declare global {
  export interface Map<K, V> {
    getOrElse (key: K, item: V): V

    mappableKeys (): K[]

    mappableValues (): V[]

    mappableEntries (): Array<Pair<K, V>>

    mapKeys<R> (f: (key: K) => R): R[]

    mapValues<R> (f: (value: V) => R): R[]

    mapEntries<R> (f: (pair: Pair<K, V>) => R): R[]
  }
}

Map.prototype.getOrElse = function getOrElse<K, V> (key: K, item: V): V {
  return this.get(key) ?? item
}

Map.prototype.mappableKeys = function mappableKeys<K> (): K[] {
  return Array.from(this.keys())
}

Map.prototype.mappableValues = function mappableValues<V> (): V[] {
  return Array.from(this.values())
}

Map.prototype.mappableEntries = function mappableEntries<K, V> (): Array<Pair<K, V>> {
  return Array.from(this.entries()).map(entry => new Pair(entry[0], entry[1]))
}

Map.prototype.mapKeys = function mapKeys<K, R> (f: (key: K) => R): R[] {
  return this.mappableKeys().map(f)
}

Map.prototype.mapValues = function mapValues<V> (f: (key: V) => V): V[] {
  return this.mappableValues().map(f)
}

Map.prototype.mapEntries = function mapEntries<K, V, R> (f: (pair: Pair<K, V>) => R): R[] {
  return this.mappableEntries().map(f)
}
