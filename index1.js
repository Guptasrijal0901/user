const express = require("express");
const app = express();

const { connectDatabase } = require("./connection");
const USER_MODEL = require("./models/user");
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
        const userData = await USER_MODEL.find();
    } catch (error) {
        console.log(error)
        return res.json({ success: false, data: userData });
    }
})
connectDatabase();
const PORT = 8000;
//second bottom
app.listen(PORT, async () => {
    //bottom most line
    console.log(`Server is running at port ${PORT}`);
});