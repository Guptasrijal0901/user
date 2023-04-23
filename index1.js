const express = require("express");
const app = express();

const { connectDatabase } = require("./connection");
const USER_MODEL = require("./models/user");
// const USER_DATA = require("./models/data1")
app.use(express.json());
app.post("/api/connectData", async (req, res) => {
    try {
        console.log(req.body)
        const newobject = {
            name: req.body.username,
            rollNo: req.body.userrollNo,
            branch: req.body.userBranch,
            age: req.body.userAge,
            isFresher: req.body.fresher,
        };
        console.log(newobject);


        const userData = new USER_MODEL(newobject);

        await userData.save();

        return res.json({ success: true, message: "data connected" })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ sucess: false, error: error.message });
    }
});
app.get("/api/getuser", async (req, res) => {
    try {
        const userData = await USER_MODEL.find().sort({ userrollNo: -1 });
        return res.json({ success: true, data: userData })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, data: userData });
    }
});
// app.post("/api/connectData", async (req, res) => {
//     try {
//         console.log(req.body)
//         const newobject1 = {
//             tittle: req.body.lastname,
//             caste: req.body.caste_name,
//             dob: req.body.birth_day
//         }
//         console.log(newobject1);
//         const Data = new USER_DATA(newobject1);
//         await Data.save();
//         return res.json({ success: true, message: "DATA connected" })
//     } catch (error) {
//         console.log(error);
//         return res.json({ success: false, data: userData });
//     }
// })
// app.post("/api/getuser1", async (req, res) => {
//     try {
//         const Data = await USER_DATA.find();
//     } catch (error) {
//         console.log(error)
//         return res.json({ success: false, data: Data });
//     }
// })
connectDatabase();
const PORT = 8000;
//second bottom
app.listen(PORT, async () => {
    //bottom most line
    console.log(`Server is running at port ${PORT}`);
});