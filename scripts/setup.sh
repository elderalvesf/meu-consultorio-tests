#!/bin/bash
# Install dependencies and Appium drivers
npm install
npx appium driver install uiautomator2
echo "Setup complete. Run 'npm run appium' to start the Appium server."
