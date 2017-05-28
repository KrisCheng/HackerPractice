# !/usr/bin/env python3
# -*- coding: utf-8 -*-

#请结合本目录下udp_server.py一起使用
import socket

# 创建Socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

for data in [b'Kris', b'Chan', b'Hello']:
    # 发送数据
    s.sendto(data,('127.0.0.1', 9999))
    # 接收数据
    print(s.recv(1024).decode('utf-8'))
s.close()
