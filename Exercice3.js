/**
 * @property {Number} capacite
 */
class LRUCache {
    constructor(capacite) {
        this.capacite = capacite;
        this.cache = new Map();
    }

    init(capacite) {
        if (!this.capacite) {
            this.capacite = capacite;
        }
        return null;
    }

    get(cle) {
        let item = this.cache.get(cle);
        if (item !== undefined) {
            // Rafraichir la cle
            this.cache.delete(cle);
            this.cache.set(cle, item);
        }
        return item ?? -1;
    }

    put(cle, valeur) {
        // Rafraichir la cle
        if (this.cache.has(cle)) this.cache.delete(cle);
        else if (this.cache.size === this.capacite) this.cache.delete(this.first());
        this.cache.set(cle, valeur);
        return null;
    }

    first() {
        return this.cache.keys().next().value;
    }

    free() {
        this.cache.clear();
    }
}

const cache2 = new LRUCache(2);
console.log(cache2.init(2));
console.log(cache2.put(1, 1));
console.log(cache2.put(2, 2));

console.log(cache2.get(1))
console.log(cache2.put(3, 3))

console.log(cache2.get(2))
console.log(cache2.put(4, 4))

console.log(cache2.get(1))
console.log(cache2.get(3))
console.log(cache2.get(4))

console.log(cache2);
