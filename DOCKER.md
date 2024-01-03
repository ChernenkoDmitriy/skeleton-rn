Run docker 
```
sudo docker compose up -d 
```
Show logs
```
sudo docker logs <container name>
```
Explore containers 
```
sudo  docker exec -it <container name> bash
```
Show containers list
```
sudo docker container ls
```
Remove folder with files
```
sudo rm -r <folder name>
```
Stop container
```
sudo docker stop <container name>
```
Remove container
```
sudo docker rm <container name>
```
Update docker build
```
sudo docker build -t
sudo docker compose up -d --no-deps --build
```