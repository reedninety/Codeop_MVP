
-- Drop Tables
--
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE if exists events;
DROP TABLE if exists user_faves;
DROP TABLE if exists hobbies;
DROP TABLE if exists users;
SET FOREIGN_KEY_CHECKS=1; 

--
-- Create Tables
--

CREATE TABLE events(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `event_name` VARCHAR(40) NOT NULL,
    `event_price` INT,
    `event_location` VARCHAR(40),
    `event_description` LONGTEXT,
    `event_time` TIME,
    `event_date` DATE,
    `hobby_id` BIGINT UNSIGNED,
    `event_enviro` TINYINT,
    `event_crowd` VARCHAR(255),
    `skill_level` VARCHAR(40),
    `equip_needed` TINYINT(1)
);
CREATE TABLE users(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(40) NOT NULL
);
CREATE TABLE hobbies(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hobby_category` VARCHAR(255) NOT NULL,
    `description` LONGTEXT
);
CREATE TABLE user_faves(
    `user_id` BIGINT UNSIGNED NOT NULL,
    `event_id` BIGINT UNSIGNED NOT NULL
);
    CREATE INDEX `user_faves_user_id_index` ON `user_faves` (`user_id`);

    CREATE INDEX `user_faves_event_id_index` ON `user_faves` (`event_id`);

ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `events` ADD CONSTRAINT `events_hobby_id_foreign` FOREIGN KEY(`hobby_id`) REFERENCES `hobbies`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE;

INSERT INTO hobbies (hobby_category, description) VALUES ('Outdoor sports', 'Physical events - can be done solo or in a group. great way to take some time away from a screen and meet new people, while getting some exercise to keep those endorphins running');

INSERT INTO hobbies (hobby_category, description) VALUES ('Indoor sports', 'Physical events regardles of the weather - can be done solo or in a group. great way to take some time away from a screen and meet new people, while getting some exercise to keep those endorphins running');

INSERT INTO events (event_name, event_price, event_location, event_description, event_date, event_time, hobby_id, event_enviro, event_crowd, skill_level, equip_needed) VALUES ('Football Game', '5', 'Madrid', 'Relaxed football game - all abilities welcome', '2024-03-07', '21:00:00', '1', '1', 'group activity', 'all-levels', '-1');

INSERT INTO events (event_name, event_price, event_location, event_description, event_date, event_time, hobby_id, event_enviro, event_crowd, skill_level, equip_needed) VALUES ('Running club', '0', 'Retiro park, Madrid', 'running club', '2024-03-10', '18:00:00', '1', '1', 'group activity', 'intermediate', '1');

INSERT INTO events (event_name, event_price, event_location, event_description, event_date, event_time, hobby_id, event_enviro, event_crowd, skill_level, equip_needed) VALUES ('Bouldering group', '10', 'Climbing centre, Madrid', 'relaxed climbing group that meets up weekly - can work on problems together or go solo', '2024-02-28', '21:00:00', '2', '-1', 'group activity', 'all-levels', '-1');

INSERT INTO users (username) VALUES ('testUser');
