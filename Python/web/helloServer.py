#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from wsgiref.simple_server import make_server
from hello import application

# 创建一个服务器
httpd = make_server('', 8000, application)
print('Serving HTTP on Port 8000...')

# 监听
httpd.serve_forever()
