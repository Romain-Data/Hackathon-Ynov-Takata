FROM python:3.12.4-slim
WORKDIR /app
COPY data/ ./data/

COPY data/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Commande de lancement
CMD ["python", "data/envoi_des_données_dans_bdd.py"]