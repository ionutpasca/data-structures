class LLNode<T> {
  public value: T
  public next: LLNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedList<T> {
  private length: number = 0
  private root: LLNode<T> | null = null

  public add(element: T) {
    const node = new LLNode<T>(element)
    this.length += 1

    if (!this.root) {
      this.root = node
      return
    }

    let currentNode = this.root
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
  }

  public remove(element: T) {
    if (!this.root) {
      return
    }

    let currentNode = this.root
    let previousNode = null

    while (currentNode.value !== element) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    previousNode.next = currentNode.next
    this.length -= 1
  }

  public size() {
    return this.length
  }

  public indexOf(element: T) {
    if (!this.root) {
      return -1
    }

    let index = 0
    let currentNode = this.root

    while (currentNode.value !== element) {
      currentNode = currentNode.next
      index += 1
    }

    return index
  }

  public elementAt(position: number) {
    if (!this.root) {
      return -1
    }

    if (position > this.length) {
      return -1
    }

    let index = 0
    let currentNode = this.root

    while (index !== position) {
      currentNode = currentNode.next
      index += 1
    }

    return currentNode.value
  }
}

const linkedList = new LinkedList<string>()
linkedList.add("ana")
linkedList.add("ana1")
linkedList.add("ana2")

// linkedList.remove("ana1")
const index = linkedList.indexOf("ana1")

const elementAt = linkedList.elementAt(1)
console.log(elementAt)

// const size = linkedList.size()
console.log(index)
