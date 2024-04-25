const { name } = require('ejs')
const express = require('express')



const app = express()

require("./model/index")

app.set('view engine', 'ejs')


const { multer, storage } = require('./middleware/multerConfig')
const upload = multer({ storage: storage })
// Yo sab ma chainxa hai ta
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("<h1>Hello We have Done it</h1>")
})
app.get("/blog", (req, res) => {
    res.send("<h1>Hello We have Done it</h1>")
})
app.get("/createblog", (req, res) => {
    res.send("<h1>Namaste</h1>")
})

app.post('/blog', upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // const title=req.body.title
    // const subtitle=req.body.subtitle
    // const description=req.body.description
    const { name, school, address } = req.body
    await blogs.create({
        name: name,
        school: school,
        address: address,
        imageUrl: req.file.filename
    })
    res.redirect("/")
})




app.listen(4000, () => {
    console.log("Server has started at port 3000");
})
