SELECT e.title,
COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s
ON e.event_id=s.event_id
GROUP BY e.title
HAVING COUNT(s.session_id)=
(
SELECT MAX(session_total)
FROM
(
SELECT COUNT(*) AS session_total
FROM Sessions
GROUP BY event_id
) x
);