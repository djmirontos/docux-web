content = open('C:/Users/bridge/docux-web/write_page_content.txt', encoding='utf-8').read()
open('C:/Users/bridge/docux-web/src/app/page.tsx', 'w', encoding='utf-8').write(content)
print('done')
