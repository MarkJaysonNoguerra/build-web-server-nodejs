# HTTP By Example

### Run the netcat command: // if you do not have netcat you need to install it first.

```
nc example.com 80
```

The nc (netcat) command creates a TCP connection to he destination host and port, and then attaches the connection to stdin and stdout. We can now start typing in the terminal and the data will be transmitted.

```
GET / HTTP/1.0
Host: example.com

```

(Note the extra empty line at the end).

We will get the following response:

Date: Sun, 11 May 2025 17:00:26 GMT \
Expires: -1 \
Cache-Control: private, max-age=0 \
Content-Type: text/html; charset=ISO-8859-1 \
Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self' script-src 'nonce-bJtT1BBpcqfUwK6lt6KtfQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp

