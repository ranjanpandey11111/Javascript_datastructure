class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
    insert(){

    }
}

//Inserting the node at the begining of the link list
// const list = {
//     head: {
//         value: 12
//         next: {
//             value: 99
//             next: {
//                 value: 37
//                 next: null
//             }
//         }
//     }
// };
class singleLinkList{
    constructor(head=null){
        //initiaally head will be empty
        this.head=head
    }
    add(data){
        let newNode =new Node(data)
        //check if the list is empty
        let currentNode =this.head
        if(!currentNode){
            this.head=newNode;
            return newNode;
        }
        //In case list is not empty , check each element and go to inner deapth
        
        while(currentNode.next){
            currentNode=currentNode.next;
        }
        currentNode.next=newNode;
        return this
    }
}
let sll=new singleLinkList();
sll.add(3)
sll.add(5)
console.log(JSON.stringify(sll.add(8)))