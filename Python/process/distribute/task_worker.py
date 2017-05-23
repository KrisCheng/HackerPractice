import time, sys, queue
from multiprocessing.managers import BaseManager

# 创建QueueManager:
class QueueManager(BaseManager):
    pass

QueueManager.register('get_task_queue')
QueueManager.register('get_result_queue')

# 连接到服务器
server_addr = '127.0.0.1'
print('Connect to server %s...' % server_addr)

# 端口验证码需要保持一致:
m = QueueManager(address=(server_addr, 5000), authkey=b'kris')

# 连接
m.connect()

# 获取Queue对象
task = m.get_task_queue()
result = m.get_result_queue()

# 从task队列取任务，写入result中
for i in range(10):
    try:
        n = task.get(timeout=1)
        print('run task %d * %d...' % (n, n))
        r = '%d * %d = %d' % (n, n, n*n)
        time.sleep(1)
        result.put(r)
    except Queue.Empty:
        print('task queue is emprt.')

# 结束
print('worker exit.')
