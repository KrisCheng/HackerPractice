# !/usr/bin/env python3
# -*- coding: utf-8 -*-

# 发送邮件
# from email import encoders
# from email.header import Header
# from email.mime.text import MIMEText
# from email.utils import parseaddr, formataddr
# import smtplib
#
# msg = MIMEText("hello, this is a Mail send by Python...", 'plain', 'utf-8')
#
# # 输入邮件的地址口令
# # from_addr = input('From:')
# # password = input('Password:')
#
# # 收件人地址
# # to_addr = input('To:')
#
# # SMTP服务器地址
# # smtp_server = input('SMTP Server:')
#
# server = smtplib.SMTP('smtp.163.com', 25) #默认端口465
# server.set_debuglevel(1)
# server.login('tjupengcheng@163.com', 'Pengcheng00')
# server.sendmail('tjupengcheng@163.com', ['743628145@qq.com'], msg.as_string())
# print('send success!')
# server.quit()
import smtplib
import email.mime.multipart
import email.mime.text

msg=email.mime.multipart.MIMEMultipart()
msg['from']='tjupengcheng@163.com'
msg['to']='743628145@qq.com'
msg['subject']='test'
content='''''
    你好，
            这是一封自动发送的邮件。

        www.ustchacker.com
'''
txt=email.mime.text.MIMEText(content)
msg.attach(txt)

smtp=smtplib
smtp=smtplib.SMTP()
smtp.connect('smtp.163.com','25')
smtp.login('tjupengcheng@163.com','pengcheng00')
smtp.sendmail('tjupengcheng@163.com','743628145@qq.com',str(msg))
smtp.quit()
