import csv

lastsixdrop = []
with open("lab_11_data.csv") as csvfile:
    reader = csv.DictReader(csvfile)
    a = reader.fieldnames
    # print(a)

    # First part - Drop last 6 columns, List of lists showing values of first 6 columns
    fieldnames = a[:-6]

    fin = csv.DictReader(csvfile, fieldnames=fieldnames)
    for row in fin:
        lastsixdrop.append([row[x] for x in fieldnames])
    
    # Uncomment below line to see result of first part
    # print(*lastsixdrop, sep='\n')

    # print("")

    # Second part - Drop rows
    seconddrop = []

    seconddrop = list(filter(lambda x: float(x[6])>-3, lastsixdrop))

    # Uncomment below line to see result of second part
    # print(*seconddrop, sep='\n')

    # print("")

    # 3rd question - Calculate average open, high, low
    for row in seconddrop:
        row[1] = row[1].replace(",", "")
        row[2] = row[2].replace(",", "")
        row[3] = row[3].replace(",", "")

    avgopen = sum(list(map(lambda d: float(d[1])/len(seconddrop), seconddrop)))
    avghigh = sum(list(map(lambda d: float(d[2])/len(seconddrop), seconddrop)))
    avglow = sum(list(map(lambda d: float(d[3])/len(seconddrop), seconddrop)))


with open("avg_output.txt", "w", newline='') as avgfile:
    # avgwriter = csv.writer(avgfile)
    # avgwriter.writerow("open", )
    avgfile.write("open "+str(avgopen)+"\n")
    avgfile.write("high "+str(avghigh)+"\n")
    avgfile.write("low "+str(avglow)+"\n")

# Uncomment below lines to see result 
# print(avgopen)
# print(avghigh)
# print(avglow)


# 4th question & 5th question - Retrieve rows according to input phrase
inp = input("Enter char(s): ")

with open("stock_output.txt", "w", newline='') as myfile:
    writer = csv.writer(myfile)
    for row in seconddrop:
        if row[0].startswith(inp):
            for elemt in row:
                myfile.write(elemt+" ")
            myfile.write("\n")

       

