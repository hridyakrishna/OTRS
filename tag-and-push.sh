#!/bin/bash


docker tag gateway-svc:0.1 asia.gcr.io/otrs-1-298421/gateway-svc:latest
docker tag ui-svc:0.1 asia.gcr.io/otrs-1-298421/ui-svc:latest
docker tag booking-svc:0.1 asia.gcr.io/otrs-1-298421/booking-svc:latest
docker tag restaurant-svc:0.1 asia.gcr.io/otrs-1-298421/restaurant-svc:latest
docker tag user-svc:0.1 asia.gcr.io/otrs-1-298421/user-svc:latest
docker tag db-svc:0.1 asia.gcr.io/otrs-1-298421/db-svc:latest



docker push asia.gcr.io/otrs-1-298421/gateway-svc:latest
docker push asia.gcr.io/otrs-1-298421/ui-svc:latest
docker push asia.gcr.io/otrs-1-298421/booking-svc:latest
docker push asia.gcr.io/otrs-1-298421/restaurant-svc:latest
docker push asia.gcr.io/otrs-1-298421/user-svc:latest
docker push asia.gcr.io/otrs-1-298421/db-svc:latest


