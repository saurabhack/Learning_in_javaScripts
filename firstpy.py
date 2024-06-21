def searchingAlgo(num,size,key):
    counter=0
    index=0
    for i in range(size):
        if(num[i]==key):
            counter=1
            index=i
            break
    return counter
size=int(input("enter your size = "))
num=[]
nums=0
for i in range(size):
    nums=int(input())
    num.append(nums)
key=int(input("enter your key to searching"))
ans=searchingAlgo(num,size,key)
if(ans==0):
    print("key does not exist")
else:
    print("key always exist")

    
