class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, nodeValue) {
    if (nodeValue === this.head.value) {
      this.head = new _Node(item, this.head);
    }
    else {
      let currNode = this.head;
      while (nodeValue !== currNode.next.value) {
        if (currNode.next === null) {
          return null;
        }
        else {
          currNode = currNode.next;
        }
      }
      let tempNode = currNode.next
      currNode.next = new _Node(item, tempNode)
    }
  }

  insertAfter(item, nodeValue) {
    let currNode = this.head;
    while (nodeValue !== currNode.value) {
      if (currNode === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    let tempNode = currNode.next
    currNode.next = new _Node(item, tempNode)
  }

  insertAt(item, position) {

    if (position === 1) {
      this.insertFirst(item)
    }
    else {
      let currNode = this.head;
      for (let i = 1; i < position - 1; i++) {
        if (currNode === null) {
          return null;
        }
        currNode = currNode.next
      }
      let tempNode = currNode.next
      currNode.next = new _Node(item, tempNode)
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.remove('Husker');
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')
  display(SLL)
  console.log(middle(SLL))
}

function display(list) {
  let currentNode = list.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let size = 0;
  while (currNode !== null) {
    size++;
    currNode = currNode.next;
  }
  return size;
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  }
  return false;
}

function findPrevious(list, item) {
  let currNode = list.head;
  if (currNode === item) {
    return null;
  }
  while (currNode.next.value !== item) {
    if (currNode.next === null) {
      return null;
    }
    currNode = currNode.next;
  }
  return currNode;
}

function findLast(list) {
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

//Mystery program - It looks for duplicate nodes and removes them

function reverseList(list) {
  let currNode = list.head
  let prevNode = null;
  let tempNode = currNode;
  while (currNode) {
    tempNode = currNode.next
    currNode.next = prevNode
    prevNode = currNode
    currNode = tempNode
  }
  list.head = prevNode;
}

function thirdFromEnd(list) {
  if (size(list) < 3) {
    return null;
  }
  let position = size(list) - 3
  let currNode = list.head;
  for (let i = 0; i < position; i++) {
    if (currNode === null) {
      return null;
    }
    currNode = currNode.next
  }
  return currNode;
}

function middle(list) {
  if (size(list) % 2 !== 1) {
    return null;
  }
  let position = (size(list) - 1) / 2
  let currNode = list.head;
  for (let i = 0; i < position; i++) {
    if (currNode === null) {
      return null;
    }
    currNode = currNode.next
  }
  return currNode;
}

function cycle(list) {
  let firstNode = list.head;
  let secondNode = list.head;
  while (firstNode.next && firstNode) {
    firstNode = firstNode.next;
    secondNode = secondNode.next.next;
    if (firstNode === secondNode) {
      return true;
    }
    return false;
  }
}

function sort(list) {
 //
}

main();