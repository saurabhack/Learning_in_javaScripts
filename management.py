def calculator(operator,num1,num2):
    add=0
    if(operator=="+"):
        add=num1+num2
    elif(operator=="-"):
        add=num1-num2
    elif(operator=="*"):
        add=num1*num2
    elif(operator=="/"):
        add=num1//num2
    elif(operator=="%"):
    
        add=num1%num2
    return add

num=int(input("enter your number="))
operator=str(input("enter your operator="))
num2=int(input("enter your second number="))
ans=calculator(operator,num,num2)
print(ans)
