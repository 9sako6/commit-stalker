export class LRUCache<Key, Value> {
  private cache = new Map<Key, Value>();

  constructor(public capacity: number) {
    if (capacity <= 0) throw new Error(`Invalid capacity: ${capacity}`);
  }

  get(key: Key): Value | undefined {
    if (!this.cache.has(key)) return undefined;

    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key: Key, value: Value): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.capacity === this.cache.size) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  has(key: Key): boolean {
    return this.cache.has(key);
  }
}
