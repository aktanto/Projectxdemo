import random
nump = random.randint(1000,9999)
print (nump)

masuk = 'masukkan 4 angka:'
print (masuk)
n = int(input())

while n!=10 :
    num = nump
    cor = 0
    while num%10 :
        numc= num%10
        nc = n%10
        num=num//10
        n=n//10
        if numc==nc:
            cor = cor+1
    if cor==4:
        print ("Congrat! you gesed it right")
        break

    else :
        print ("%d digit were guesed right" %cor)
        print (masuk)
        n = int(input())
        
else :
    print ("you quit the game")

