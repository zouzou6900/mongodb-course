FROM mongo:5

WORKDIR /workspace
COPY dataset /dataset

EXPOSE 27017
