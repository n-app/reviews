DROP DATABASE IF EXISTS airbnbreviews;

CREATE DATABASE airbnbreviews;

USE airbnbreviews;

SET GLOBAL max_allowed_packet=16777216;

DROP TABLE IF EXISTS reviews;
		
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  text VARCHAR(1000) NULL,
  date DATE NOT NULL,
  accuracy DECIMAL,
  communication DECIMAL,
  cleanliness DECIMAL,
  location DECIMAL,
  checkIn DECIMAL,
  value DECIMAL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(100),
  icon VARCHAR(100),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;
		
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName VARCHAR(100),
  totalNumberReviews INT NOT NULL,
  accuracy DECIMAL NOT NULL,
  communication DECIMAL NOT NULL,
  cleanliness DECIMAL NOT NULL,
  location DECIMAL NOT NULL,
  checkIn DECIMAL NOT NULL,
  value DECIMAL NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE reviews ADD FOREIGN KEY (room_id) REFERENCES rooms (id);