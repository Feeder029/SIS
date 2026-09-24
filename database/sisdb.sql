CREATE DATABASE sisdb;
GO

USE sisdb;
GO

CREATE TABLE accounts (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
)
GO

CREATE TABLE products (
    id INT iDENTITY(1,1) PRIMARY KEY,
    p_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
)
GO