import json
from jinja2 import Environment, FileSystemLoader

template_dir = "templates"
env = Environment(loader=FileSystemLoader(template_dir))

with open("./details.json", encoding="utf-8") as f:
    details = json.loads(f.read())

template = env.get_template('portfolio.html')
html_output = template.render(details)

with open('index.html', 'w', encoding="utf-8") as f:
    f.write(html_output)