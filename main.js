const express = require('express')
const app = express();

const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
    return res.json({message: "This is nodejs in a container "});
});

app.listen(PORT, () => console.log(`server started on the following PORT${PORT}`))
