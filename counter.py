def counter(num):
    counter=0
    while num!=0:
        rev=num%10
        counter=counter+1
        num=num//10
    return counter
num=int(input("enter your number ="))
ans=counter(num)
print(ans)