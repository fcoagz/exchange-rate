# exchange-rate
Utiliza la API de [pyDolarVenezuela](https://github.com/fcoagz/api-pydolarvenezuela) para brindar información informativa sobre los datos del dólar en varios monitores de Venezuela.

## Uso
Descarga las dependencias:
```sh
pip install -r requirements.txt
```
Antes de poder ejecutar el script, agregue el siguiente comando `app.run()` en el archivo `app.py`, esto hace que el servidor de desarrollo se inicie y escuche las solicitudes entrantes.
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
```
Ejecute el siguiente comando:
```sh
python app.py
```