interface IPriorityQueue<T> {
  enqueue: (element: T, priority: number) => void
  dequeue: () => T
  size: () => number
  peek: () => T
}

class PriorityQueue<T> implements IPriorityQueue<T> {
  private data: { data: T; priority: number }[] = []

  enqueue(element: T, priority: number = 0) {
    if (!this.data.length) {
      this.data.push({ data: element, priority })
      return
    }

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].priority < priority) {
        this.data.splice(i, 0, { data: element, priority })
        return
      }
    }
  }

  dequeue() {
    const firstElem = this.data.shift()
    return firstElem.data
  }

  size() {
    return this.data.length
  }

  peek() {
    return this.data.length ? this.data[0].data : null
  }
}

const queue1 = new PriorityQueue<number>()
queue1.enqueue(10)
queue1.enqueue(15, 1)

const popped = queue1.dequeue()
console.log(popped)
