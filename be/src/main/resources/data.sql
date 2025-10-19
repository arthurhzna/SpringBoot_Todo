-- Development only - plain text password dengan {noop}
INSERT INTO users (username, password, role) 
VALUES ('arthur', 'dummy', 'USER')
ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, role) 
VALUES ('admin', 'admin123', 'ADMIN')
ON CONFLICT (username) DO NOTHING;

-- Insert sample todos
INSERT INTO todo (id, description, done, target_date, username)
VALUES (10001, 'Learn AWS', false, CURRENT_DATE, 'arthur')
ON CONFLICT (id) DO NOTHING;

INSERT INTO todo (id, description, done, target_date, username)
VALUES (10002, 'Get AWS Certified', false, CURRENT_DATE, 'arthur')
ON CONFLICT (id) DO NOTHING;

INSERT INTO todo (id, description, done, target_date, username)
VALUES (10003, 'Learn DevOps', false, CURRENT_DATE, 'arthur')
ON CONFLICT (id) DO NOTHING;