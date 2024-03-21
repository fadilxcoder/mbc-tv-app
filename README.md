# Notes

* Install `npm install -g mkcert` - https://www.npmjs.com/package/mkcert

* `mkcert create-ca && mkcert create-cert`  - Create a Certificate Authority & Create a Certificate

```
CA Private Key: ca.key
CA Certificate: ca.crt
Private Key: cert.key
Certificate: cert.crt
```

* `http-server --cert cert.crt --key cert.key --tls` - https://192.168.100.50:8080/