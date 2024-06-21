def sort(s):
    for i in range(s.length):
        if(s[i]>s[i+1]):
            s[i],s[i+1]=s[i+1],s[i]


def grid(g):
    d=""
    for i in g:
        d+=i
        #d.sort()

g=["ebacd","fghij","olmkn","trpqs"]
grid(g)

d=""
d+=g[0]
print(d)
