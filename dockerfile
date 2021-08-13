FROM node:14
WORKDIR /app
RUN npm install -g create-react-app
RUN cd /app && create-react-app . && npm install
# RUN apt-get update && apt-get install -y openssh-server
# RUN echo 'root:password' | chpasswd
# RUN sed -i 's/#PasswordAuthentication yes/PermitRootLogin yes/' /etc/ssh/sshd_config && \
#  sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# RUN mkdir -p /run/sshd


