const { logBuildStep, logInfo } = require("./commands");
const { BUILD_TYPES } = require("../constants");
const { BUILD_TYPE } = process.env;

switch (BUILD_TYPE) {
    case BUILD_TYPES.start:
        logBuildStep("start", "watch mode and run mock server");
        break;
    case BUILD_TYPES.dev:
        logBuildStep("development", "unminified code with source maps");
        break;
    case BUILD_TYPES.prod:
        logBuildStep("production", "minified version of js and css");
        break;
    default:
        logInfo("looks like you run npm command without BUILD_TYPE, please check the README.md", "yellow");
        break;
}
