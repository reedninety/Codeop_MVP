
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

INSERT INTO hobbies (hobby_category) VALUES ('Outdoor sports');
INSERT INTO hobbies (hobby_category) VALUES ('Indoor sports');
INSERT INTO hobbies (hobby_category) VALUES ('Food and Drink');
INSERT INTO hobbies (hobby_category) VALUES ('Music');
INSERT INTO hobbies (hobby_category) VALUES ('Games');
INSERT INTO hobbies (hobby_category) VALUES ('Art and Creativity');
INSERT INTO hobbies (hobby_category) VALUES ('Volunteering and Community');
INSERT INTO hobbies (hobby_category) VALUES ('TV and Film');
INSERT INTO hobbies (hobby_category) VALUES ('Dance and Theatre');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Football Game',
 '5', 
 'Madrid', 
 'Relaxed football game - all abilities welcome', 
 '2024-03-07', 
 '21:00:00', 
 '1', 
 'all-levels', 
 '0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Running club', 
'0', 
'Retiro park, Madrid', 
'A group that gets together to train for upcoming races', 
'2024-03-10', 
'18:00:00', 
'1', 
'intermediate', 
'1');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Bouldering group', 
'10', 
'Climbing centre, Madrid', 
'relaxed weekly climbing session - can work on problems together or go solo. Shoes and Chalk provided', 
'2024-02-28', 
'21:00:00', 
'2', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Wine Tasting', 
'20', 
'Barcelona', 
'Regional wine-tastings organised by academy-certified sommeliers. Over 18s only', 
'2024-04-01', 
'21:00:00', 
'3', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Wine Tasting', 
'20', 
'Barcelona', 
'Regional wine-tastings organised by academy-certified sommeliers. Over 18s only', 
'2024-04-01', 
'21:00:00', 
'3', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Guitar Lessons', 
'12', 
'London', 
'Guitar lessons for total beginners - group lessons that take place weekly', 
'2024-03-15', 
'17:00:00', 
'4', 
'beginners', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Chess club', 
'0', 
'Berlin', 
'Open sessions at the local chess club that happen on week-nights, come to play and meet new people', 
'2024-02-29', 
'19:00:00', 
'5', 
'all-levels', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('D&D Campaign', 
'0', 
'Cardiff', 
'New Dungeons and Dragons campaign hosted by the Cardiff D&D society', 
'2024-03-02', 
'20:00:00', 
'5', 
'intermediate', 
'0');

INSERT INTO events (event_name, 
event_price, 
event_location, 
event_description, 
event_date, 
event_time, 
hobby_id, 
skill_level, 
equip_needed) 
VALUES ('Knitting and Cake', 
'3', 
'Madrid', 
'Come and join this knitting group at the Green cafe - 3 euro to eat as much cake as possible while working on your own projects and chatting', 
'2024-02-29', 
'14:00:00', 
'6', 
'all-levels', 
'1');


INSERT INTO users (username) VALUES ('testUser');
