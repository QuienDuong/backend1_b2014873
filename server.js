const app = require("./app");
const config = require("./app/config");
const { constrainedMemory } = require("process");
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
