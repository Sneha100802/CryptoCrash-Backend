const { v4: uuidv4 } = require("uuid");
const mockTxHash = () => uuidv4().replace(/-/g, "").substring(0, 32);
module.exports = { mockTxHash };
