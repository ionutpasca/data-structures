class BSTNode<T> {
  public value: T
  public left: BSTNode<T> | null
  public right: BSTNode<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST<T> {
  private root: BSTNode<T> | null = null

  public add(value: T) {
    const node = new BSTNode<T>(value)
    if (!this.root) {
      this.root = node
    }

    this.addNodeRecoursive(this.root, value)
  }

  public parseInOrder() {
    if (!this.root) {
      return null
    }

    const result = []

    function parseInOrder(node: BSTNode<T>) {
      node.left && parseInOrder(node.left)
      result.push(node.value)
      node.right && parseInOrder(node.right)
    }

    parseInOrder(this.root)

    return result
  }

  public parsePreOrder() {
    if (!this.root) {
      return null
    }

    const result = []

    function parseInPreOrder(node: BSTNode<T>) {
      result.push(node.value)
      node.left && parseInPreOrder(node.left)
      node.right && parseInPreOrder(node.right)
    }

    parseInPreOrder(this.root)
    return result
  }

  public parsePostOrder() {
    if (!this.root) {
      return null
    }

    const result = []

    function parseInPostOrder(node: BSTNode<T>) {
      node.left && parseInPostOrder(node.left)
      node.right && parseInPostOrder(node.right)
      result.push(node.value)
    }

    parseInPostOrder(this.root)
    return result
  }

  public remove(value: T) {
    if (!this.root) {
      return null
    }

    this.root = this.removeNodeRec(this.root, value)
  }

  private removeNodeRec(parentNode: BSTNode<T>, value: T) {
    if (!parentNode) {
      return
    }

    if (value === parentNode.value) {
      if (!parentNode.left && !parentNode.right) {
        return null
      }

      if (!parentNode.left) {
        return parentNode.right
      }

      if (!parentNode.right) {
        return parentNode.left
      }

      let rightPart = parentNode.right

      while (rightPart.left) {
        rightPart = rightPart.left
      }

      parentNode.value = rightPart.value
      parentNode.right = this.removeNodeRec(parentNode.right, rightPart.value)
    }

    if (value < parentNode.value) {
      parentNode.left = this.removeNodeRec(parentNode.left, value)
    }
    if (value > parentNode.value) {
      parentNode.right = this.removeNodeRec(parentNode.right, value)
    }

    return parentNode
  }

  private addNodeRecoursive(parentNode: BSTNode<T>, valueToInsert: T) {
    if (valueToInsert < parentNode.value) {
      if (!parentNode.left) {
        parentNode.left = new BSTNode<T>(valueToInsert)
        return
      }

      return this.addNodeRecoursive(parentNode.left, valueToInsert)
    }

    if (valueToInsert > parentNode.value) {
      if (!parentNode.right) {
        parentNode.right = new BSTNode<T>(valueToInsert)
        return
      }
      return this.addNodeRecoursive(parentNode.right, valueToInsert)
    }

    return null
  }
}

const bst = new BST<number>()
bst.add(12)
bst.add(7)
bst.add(11)
bst.add(20)
bst.add(9)
bst.add(6)
bst.add(14)
bst.add(4)

bst.remove(12)

const result = bst.parsePostOrder()
console.log(result)
