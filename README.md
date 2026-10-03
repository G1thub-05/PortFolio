from pathlib import Path

readme_path = Path("/mnt/data/README_Portfolio_Styled.md")
text = readme_path.read_text(encoding="utf-8")

old = '''<!-- Header -->
<a href="https://github.com/G1thub-05#gh-light-mode-only">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:00c6ff,50:0072ff,100:8e2de2&height=260&section=header&text=𝙳𝚒𝚐𝚎𝚜𝚑𝚠𝚊𝚛&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=𝐽𝑎𝑣𝑎%20𝐹𝑢𝑙𝑙%20𝑆𝑡𝑎𝑐𝑘%20𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟&descAlignY=58&descSize=18"/>
</a>

<a href="https://github.com/G1thub-05#gh-dark-mode-only">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:ff512f,50:dd2476,100:ff0000&height=260&section=header&text=𝙳𝚒𝚐𝚎𝚜𝚑𝚠𝚊𝚛&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=𝐽𝑎𝑣𝑎%20𝐹𝑢𝑙𝑙%20𝑆𝑡𝑎𝑐𝑘%20𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟&descAlignY=58&descSize=18"/>
</a>'''

new = '''<!-- Header -->
<a href="https://github.com/G1thub-05">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1E2B46,50:273A5C,100:36527C&height=260&section=header&text=Hey%2C%20I%E2%80%99m%20Digeshwar.&fontSize=52&fontColor=FFFFFF&fontAlign=left&fontAlignX=7&fontAlignY=48&desc=JAVA%20FULL%20STACK%20DEVELOPER%20%7C%20Building%20scalable%20systems%20%26%20thoughtful%20web%20experiences.&descAlign=left&descAlignX=7&descAlignY=68&descSize=17&descColor=BFD3F5"/>
</a>'''

if old not in text:
    raise ValueError("Expected header block was not found.")

text = text.replace(old, new)

# Replace the typing block with a more subdued navy/blue version.
text = text.replace(
'''<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=24&duration=2500&pause=1000&color=00C6FF&center=true&vCenter=true&width=1000&lines=Welcome+to+my+Portfolio;Java+Full+Stack+Developer;Building+Clean+and+Responsive+Web+Experiences;HTML+%7C+CSS+%7C+JavaScript;Learn+%7C+Build+%7C+Improve+%7C+Repeat" alt="Typing SVG"/>''',
'''<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=22&duration=2500&pause=1000&color=8FB7F0&center=true&vCenter=true&width=1000&lines=Java+Full+Stack+Developer;Building+Scalable+Systems;Thoughtful+Web+Experiences;HTML+%7C+CSS+%7C+JavaScript;Learn+%7C+Build+%7C+Improve+%7C+Repeat" alt="Typing SVG"/>'''
)

readme_path.write_text(text, encoding="utf-8")
print(readme_path)
