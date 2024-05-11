import csv
import os

def json_to_csv(json, field):

    if not os.path.exists('./data'):
        os.makedirs('./data')

    fieldFile = open(f'./data/{field}.csv', 'w')
    data = json[f"{field}"]
    csv_writer = csv.writer(fieldFile)

    count = 0

    for i in data:
        if count == 0:
            header = i.keys()
            csv_writer.writerow(header)
            count += 1

        csv_writer.writerow(i.values())

    fieldFile.close()