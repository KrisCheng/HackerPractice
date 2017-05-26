#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image

im = Image.open('test.jpeg')

# 将图片尺寸缩小一倍并保存
w, h = im.size

print('Original image size: %s*%s' % (w, h))

im.thumbnail((w//2, h//2))
print('Resize image to: %s*%s' % (w//2, h//2))

im.save('thumbnail.jpg','jpeg')
