CREATE TABLE drivers (
  id             SERIAL PRIMARY KEY,
  driver_number  INTEGER    NOT NULL UNIQUE,
  driver_name    VARCHAR(100) NOT NULL,
  car_weight     INTEGER    NOT NULL,
  weather_temp   INTEGER    NOT NULL,
  weather_code   INTEGER    NOT NULL
);
