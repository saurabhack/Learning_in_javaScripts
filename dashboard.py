#palidrome number or not
num=int(input("enter your number = "))
copy=num
add=0
while(num!=0):
    rev=num%10
    add=add*10+rev
    num=num//10

if(copy==add):
    print("number is palidrome")
else:
    print("number is not palidrome")

    
    