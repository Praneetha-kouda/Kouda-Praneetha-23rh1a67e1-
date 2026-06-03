SELECT u.full_name,
COUNT(f.feedback_id) AS total_feedback
FROM Users u
JOIN Feedback f
ON u.user_id=f.user_id
GROUP BY u.full_name
ORDER BY total_feedback DESC
LIMIT 5;