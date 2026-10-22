## Lab Objective

Investigate the network boundary between a local Wi-Fi network (WLAN) and an external network by testing HTTP server accessibility from devices in different network locations.

## Test Environment

- **Server:** Laptop running a Node.js HTTP server.
- **Local client:** Mobile phone connected to the same WLAN as the laptop.
- **Remote client:** VPS used to test HTTP connectivity from outside the local network.

## Test Scenarios

1. Verify that the web server responds to requests from the laptop itself.
2. Access the server from a mobile phone on the same WLAN using the laptop's private IP address. You can also try access from other devices as long as the devices are on the same WLAN/LAN.
3. Attempt to access the server from a remote VPS to investigate the limits of private IP addressing and inbound connectivity across the internet. You can also try accessing the server from external network, not within the LAN/WLAN.
4. Compare the observed results and identify the roles of routing, NAT, firewall rules, and port forwarding.

## Learning Outcomes

Understand the difference between local and remote network reachability, private and public IP addressing, listening ports, HTTP request-response behavior, and the effect of network boundaries on server accessibility.
