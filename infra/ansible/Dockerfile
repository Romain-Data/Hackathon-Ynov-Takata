# Dockerfile
FROM python:3.11-slim

# Installer Ansible et utilitaires nécessaires
RUN apt-get update && apt-get install -y \
    sshpass \
    openssh-client \
    git \
    && pip install --no-cache-dir ansible \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Répertoire de travail
WORKDIR /ansible

# Copier les playbooks dans l'image
COPY playbooks/ /ansible/playbooks/

# Définir le répertoire par défaut
WORKDIR /ansible/playbooks

# Commande par défaut : exécuter le playbook principal
ENTRYPOINT ["bash", "-c", "ansible-playbook -i inventory.ini playbook.yml"]
