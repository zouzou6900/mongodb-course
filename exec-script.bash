#!/bin/bash
docker exec -it mongo-db /bin/bash -c "mongosh --nodb --file script.js"