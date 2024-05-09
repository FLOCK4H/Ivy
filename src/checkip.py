import requests
import socket

# Get Public IP
public_ip = requests.get('https://httpbin.org/ip').json()['origin']

# Get Private IP
hostname = socket.gethostname()
private_ip = socket.gethostbyname(hostname)

print("Public IP:", public_ip)
print("Private IP:", private_ip)