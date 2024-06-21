def reverse_words_order_and_swap_cases(sentence):
    temp=" "
    for i in sentence:
        if i.isupper():
            temp+=i.lower()
        else:
            temp+=i.upper()
    arr=list(temp.split(" "))
    second=[]
    for i in range(len(arr)):
        second.append(arr.pop())
    last=" "
    return last.join(second)

s="SaUrAbH KaMaNe"

ans=reverse_words_order_and_swap_cases(s)
print(ans)