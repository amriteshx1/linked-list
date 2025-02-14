
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(value){

        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    size(){
        return this.length;
    }

    getHead(){
        return this.head;
    }

    tail(){
        let current = this.head;
        if(!current)return null;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    at(i){
        if(i < 0 || i >= this.length)return null;
        let current = this.head;
        for(let j = 0; j <i; j++){
            current = current.next;
        }
        return current;
    }

    pop(){
        if(!this.head)return null;
        if(this.length === 1){
            this.head = null;
            this.length = 0;
            return;
        }
        let current = this.head;
        let previous = null;
        while(current.next){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.length--;
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value)return true;
            current = current.next;
        }
        return false;
    }

    find(value){
        let current = this.head;
        let i = 0;
        while(current){
            if(current.value === value)return i;
            current = current.next;
            i++;
        }
        return null;
    }

    toString(){
        let result = '';
        let current = this.head;
        while(current){
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        return result + 'null';
    }

};


const list = new Linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
