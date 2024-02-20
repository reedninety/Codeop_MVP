--
-- Drop Tables
--

DROP TABLE if exists events;
DROP TABLE if exists user_faves;
DROP TABLE if exists hobbies;
DROP TABLE if exists users;

--
-- Create Tables
--

CREATE TABLE events(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `event_name` VARCHAR(40) NOT NULL,
    `event_price` INT NOT NULL,
    `event_location` VARCHAR(40) NOT NULL,
    `event_description` LONGTEXT NOT NULL,
    `event_schedule` DATETIME NOT NULL,
    `hobby_id` BIGINT UNSIGNED NOT NULL,
    `event_enviro` TINYINT NOT NULL,
    `event_crowd` BIGINT NOT NULL,
    `skill_level` VARCHAR(40) NOT NULL,
    `equip_needed` TINYINT(1) NOT NULL
);
CREATE TABLE users(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(40) NOT NULL
);
CREATE TABLE hobbies(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hobby_name` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `hobby_category` TEXT NOT NULL
);
CREATE TABLE user_faves(
    `user_id` BIGINT UNSIGNED NOT NULL,
    `event_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `user_faves` ADD INDEX `user_faves_user_id_index`(`user_id`) ON DELETE CASCADE;
ALTER TABLE
    `user_faves` ADD INDEX `user_faves_event_id_index`(`event_id`) ON DELETE CASCADE;
ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;
ALTER TABLE
    `events` ADD CONSTRAINT `events_hobby_id_foreign` FOREIGN KEY(`hobby_id`) REFERENCES `hobbies`(`id`); ON DELETE SET NULL;
ALTER TABLE
    `user_faves` ADD CONSTRAINT `user_faves_event_id_foreign` FOREIGN KEY(`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE;

