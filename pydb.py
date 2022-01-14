import psycopg2
import os
import random

#connect to the db 
con = psycopg2.connect(
            host = "localhost",
            port = 5050,
            database="pasarin_auth",
            user = "postgres",
            password = " ")
            

#cursor 
cur = con.cursor()

#execute query
cur.execute("select * from auth_user")

rows = cur.fetchall()

for r in rows:
    print (f"email {r[2]}, name {r[1]}, ID {r[0]}")

#commit the transcation 
con.commit()

#close the cursor
cur.close()

#close the connection
con.close()