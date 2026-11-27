import re, base64, sys

html = open('mirror/index.html', encoding='utf-8', errors='ignore').read()
m = re.search(r'src="data:image/png;base64,([^"]+)"', html)
if m:
    buf = base64.b64decode(m.group(1))
    open('mirror/logo-original.png', 'wb').write(buf)
    print('Logo extracted:', len(buf), 'bytes')
else:
    print('No logo found')
    sys.exit(1)
