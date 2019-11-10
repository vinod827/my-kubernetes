FROM ubuntu:latest

LABEL MAINTAINER=vinod827@gmail.com

#run patches
RUN apt-get update; apt-get clean
RUN apt-get install -y nodejs npm; apt-get clean


#Copy file
COPY . /src

#Run command
RUN cd /src
RUN npm install

#Container Port
EXPOSE 8080

#Execute the command when the container starts
CMD cd /src && npm start