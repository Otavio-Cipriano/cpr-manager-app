import app from "./server"

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is starting on ${PORT}`))