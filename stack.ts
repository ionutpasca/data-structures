interface IStack<T> {
  push: (element: T) => void
  pop: () => T
  size: () => number
  peek: () => T
}

class Stack<T> implements IStack<T> {
  private data: T[] = []

  public push(element: T) {
    this.data.push(element)
  }

  public pop() {
    return this.data.pop()
  }

  public size() {
    return this.data.length
  }

  public peek() {
    return this.data[this.data.length - 1]
  }
}

class MyStack {
  private data = {}
  private length: number = 0

  public push(element: unknown) {
    this.data[this.length] = element
    this.length++
  }

  public pop() {
    this.length--
    const result = this.data[this.length]
    delete this.data[this.length]
    return result
  }
}

const myStack1 = new Stack()
myStack1.push(443)
myStack1.push("dsadsadsa")

const myStack = new Stack<number>()
myStack.push(10)
myStack.push(11)
myStack.push(12)

console.log(myStack.size())

const lastElementAdded = myStack.pop()
console.log("lastElementAdded", lastElementAdded)
