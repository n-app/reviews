DROP DATABASE IF EXISTS airbnbreviews;

CREATE DATABASE airbnbreviews;

USE airbnbreviews;

DROP TABLE IF EXISTS reviews;
		
CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  text VARCHAR(500) NULL,
  date DATE NOT NULL,
  accuracy DECIMAL(10, 2),
  communication DECIMAL(10, 2),
  cleanliness DECIMAL(10, 2),
  location DECIMAL(10, 2),
  checkin DECIMAL(10, 2),
  value DECIMAL(10, 2),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100),
  icon VARCHAR(100),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;
		
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(100),
  totalNumberReviews INT NOT NULL,
  accuracy DECIMAL(10, 2) NOT NULL,
  communication DECIMAL(10, 2) NOT NULL,
  cleanliness DECIMAL(10, 2) NOT NULL,
  location DECIMAL(10, 2) NOT NULL,
  checkin DECIMAL(10, 2) NOT NULL,
  value DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE reviews AUTO_INCREMENT=0;
ALTER TABLE users AUTO_INCREMENT=0;
ALTER TABLE rooms AUTO_INCREMENT=0;

ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE reviews ADD FOREIGN KEY (room_id) REFERENCES rooms (id);