import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.post('/message', async (req, res) => {

    try {
        const result = await axios.get("https://api.api-ninjas.com/v1/quotes?category=birthday", {
            headers: {
                'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'
            }
        })

        // const result = await axios.get(API_URL + "/secrets/" + searchId, config);
        console.log(result.data[0].quote);
        res.render("index.ejs", { content: result.data[0].quote });

    } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }

    //   res.json({ message: 'Post request received successfully!' });

});

app.post("/clear", async(req, res) => {
    
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    // try {
    //     const result = await axios.get("https://api.api-ninjas.com/v1/quotes?category=birthday", {
    //         headers: {
    //             'X-Api-Key': 'nIXqkxGINBkbIv3o1N3fiQ==97fIZV1vlr0dQ3yJ'
    //         }
    //     })

    //     // const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    //     console.log(result.data[0].quote);
    //     res.render("index.ejs", { content: result.data[0].quote });

    // } catch (error) {
    //     res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    // }