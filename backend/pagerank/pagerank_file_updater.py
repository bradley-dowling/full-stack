import json
import os

# get the page_dict
page_ranks = None
with open("pageranks.json", "r") as f:
    page_ranks = json.load(f)

# open all the files in the file_dir
FILE_DIR = "files"
file_list = os.listdir(FILE_DIR)

# for each file, get the page rank value, add it to the file and overwrite
for filename in file_list:
    page_data = None
    with open(f"files/{filename}", "r") as f:
        page_data = json.load(f)
    
    try:
        page_data.update({"page_rank": page_ranks.get(page_data["Page URL"])["rank"]})
        print(page_ranks.get(page_data["Page URL"])["rank"])
    except TypeError:
        page_data.update({"page_rank": 0})

    with open(f"files/{filename}", "w") as f:
        json.dump(page_data, f, indent=4)
