class link:
    def __init__(self,data):
        self.data=data
        self.next=None
class LinkedLists:
    def __init__(self):
        self.header=None
    def push(self,data):
        newNode=link(data)
        if(self.header==None):
            self.header=newNode
            return
        newNode.data=data
        newNode.next=self.header
        self.header=newNode
        return 
    def display(self):
        counter=self.header
        while counter:
            print(counter.data, end="->")
            counter=counter.next
        print("null")
    def delete(self):
        self.header.next=self.header.next.next
        return
t1=LinkedLists()
t1.push(1)
t1.push(2)
t1.push(3)
t1.push(4)
t1.display()
t1.delete()
t1.display()
t1.delete()
t1.display()