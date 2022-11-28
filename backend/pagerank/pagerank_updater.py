import json

page_ranks = None
with open("pageranks.json", "r") as f:
    page_ranks = json.load(f)

page_keys = list(page_ranks.keys())

for page in page_ranks:
    new_rank = 0
    for incoming_link_index in page_ranks[page]["incoming_links"]:
        incoming_link = page_keys[incoming_link_index]
        new_rank += page_ranks[incoming_link]["prev_rank"] / len(page_ranks[incoming_link]["outgoing_links"])
    page_ranks[page]["rank"] = new_rank

total_rank = 0
for page in page_ranks:
    page_ranks[page]["prev_rank"] = page_ranks[page]["rank"]
    total_rank += page_ranks[page]["rank"]

print(total_rank)  # this should be 1, otherwise we messed up somewhere...

with open("pageranks.json", "w") as f:
    json.dump(page_ranks, f, indent=4)