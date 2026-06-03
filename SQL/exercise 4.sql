SELECT e.title,
COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s ON e.event_id=s.event_id
WHERE HOUR(s.start_time) BETWEEN 10 AND 12
GROUP BY e.title;