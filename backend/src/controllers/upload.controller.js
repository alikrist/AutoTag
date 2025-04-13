import pool from "../../config/database";
export const uploadFile = (req, res) => {
    if (!req.file) {
        //if not file is uploaded,respond with error
        return res.status(400).json({ error: "No file uploaded" });
    }
    res.json({ message: "File uploaded successfully", file: req.file });
};

// fields from the request body
const { title, userid } = req.body;
const filepath = req.file.path;
const duration = '00:50:00'; // // Placeholder. Replace with actual logic later

try {
    //insert into video table and return generated videoid
    const result = await pool.query(
      `INSERT INTO video (userid, title, description, filepath, duration)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING videoid`,
      [userid, title, description, filepath, duration]
    );
// send back file info and new videoid
    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
      videoid: result.rows[0].videoid
    });
  } catch (err) {
    console.error("DB Insert Error:", err);
    res.status(500).json({ error: "Database insert failed" });
};
