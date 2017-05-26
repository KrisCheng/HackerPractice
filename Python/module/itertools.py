#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import itertools

cs = itertools.cycle('ABC')
for c in cs:
    print(c)  #无限重复
