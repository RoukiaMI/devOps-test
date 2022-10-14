# devOps-test

# Launch docker image
 $ docker build -t tasks . 

# Create minikube cluster
$ minikube start 

# Deploy app in the minikube cluster 
$ kubectl apply -f dep.yaml

# App is now available throw port 8090

# Dockerize Prometheus and Grafana
$ docker-compose up -d prometheus grafana

# Launch pipeline


I've tried to configure the prom.config but it seem like i went wrong because when i go to the localhost:3000/dashboard 
we have no data but when visualize the metrics we have some logs