// //SQL (query) — mySQL
const connection = require('../config/db');

//GET
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM enrollment_bills', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};


//POST
exports.createUser=(req,res)=>{
    const {studId, name, course, units, amount}=req.body;  
    connection.query('INSERT INTO enrollment_bills (student_id, student_name, course_program, units_enrolled, tuition_total) VALUES (?,?,?,?,?)',[studId, name, course, units, amount],(err,result)=>{
        if(err) throw err;
        res.json({message:'Enrollment assessment created successfully',id:result.insertId});
    });
};

//DELETE
exports.deleteUser=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM enrollment_bills WHERE id=?', [id], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'Enrollment record deleted successfully'});
        else
            res.status(404).json({message: 'Enrollment record not found'});
    });

};
