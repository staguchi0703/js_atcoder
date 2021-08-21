FROM node
COPY . /src
RUN python3 /src/get-pip.py
RUN pip install online-judge-tools