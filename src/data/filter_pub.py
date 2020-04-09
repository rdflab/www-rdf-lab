#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar  3 13:45:43 2020

@author: antony
"""

import json
import time
import urllib.request
import collections
import subprocess
import re

pubs = json.load(open('all_publications.json', 'r'))

keep = []

for pub in pubs:
    if 'dalla' in pub['groups'][0]:
        keep.append(pub)
    
json.dump(keep, open('publications.json', 'w'), indent=2)