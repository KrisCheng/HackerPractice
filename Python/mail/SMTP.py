# !/usr/bin/env python3
# -*- coding: utf-8 -*-

# SMTP发送邮件
from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr
import smtplib

# 格式化工具
def _format_addr(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))

from_addr = input('From: ')
password = input('Password: ')
to_addr = input('To: ')
smtp_server = input('SMTP server: ')

# 邮件主题及内容
msg = MIMEText('hello, send by Python...', 'plain', 'utf-8')
msg['from'] = _format_addr('Python发送邮件 <%s>' % from_addr)
msg['to'] = _format_addr('管理员 <%s>' % to_addr)
msg['subject'] = '这是来自SMTP的问候...'

# content='''
#     你好，
#             这是来自SMTP的问候。
# '''
# txt=email.mime.text.MIMEText(content)
# msg.attach(txt)

smtp=smtplib
smtp=smtplib.SMTP()
smtp.connect(smtp_server,'25') #默认端口为25
smtp.login(from_addr, password)
smtp.sendmail(from_addr, to_addr, str(msg))
smtp.quit()
