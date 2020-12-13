#!/bin/bash

pushd Gateway
docker build -t gateway-svc:0.1 .
popd

pushd UI
docker build -t ui-svc:0.1 .
popd

pushd Booking
docker build -t booking-svc:0.1 .
popd

pushd Restaurant
docker build -t restaurant-svc:0.1 .
popd

pushd User
docker build -t user-svc:0.1 .
popd

pushd DB
docker build -t db-svc:0.1 .
popd

