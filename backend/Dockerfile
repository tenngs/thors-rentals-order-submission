FROM openjdk:17
VOLUME /tmp
ADD   /target/thorsrentalsbackend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-Xmx750m", "-jar","/app.jar"]