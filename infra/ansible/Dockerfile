FROM python:3.11-slim

RUN apt-get update && apt-get install -y \
    sshpass \
    openssh-client \
    git \
    && pip install --no-cache-dir ansible \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /ansible

COPY playbooks/ /ansible/playbooks/

WORKDIR /ansible/playbooks

ENTRYPOINT ["bash", "-c", "ansible-playbook -i inventory.ini playbook.yml"]
