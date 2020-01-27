interface IQueue<T> {
  enqueue: (element: T) => void
  dequeue: () => T
  size: () => number
  peek: () => T
}

class Queue<T> implements IQueue<T> {
  private data: T[] = []

  enqueue(element: T) {
    this.data.push(element)
  }

  dequeue() {
    return this.data.shift()
  }

  size() {
    return this.data.length
  }

  peek() {
    if (!this.data.length) {
      return null
    }
    return this.data[0]
  }
}

interface User {
  username: string
  age: number
}

const queue = new Queue<User>()
queue.enqueue({ username: "first", age: 5 })
queue.enqueue({ username: "second", age: 15 })

const firstInserted = queue.dequeue()
console.log(firstInserted)
