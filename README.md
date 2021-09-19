# site-simulation

POC with MVP

# How to Install and run :

- Please clone this repo on your local WS/Folder.
- Run NPM install.
- Once Installation is done Please run the following code - 'npm run both'.
- If you want individual server and client to run then run - 'npm run dev' and 'npm run server'.
- All server files are located in the API folder.
- All Simulation code is inside the src folder.
- Entry component for Simulation is APP.js (we can use any name for now used APP).
- Currently, PORT is hardcoded, we can read from the .dotEnv file as well.
- Currently, PROXY is not set inside API call (simulation) - using hardcoded links 'http://locatlho4500/api/v1' - which is not correct but for the time being, using this.
- Simulation app is using PORT http://localhost:9000/.
- Once the app starts it will automatically launch the simulation main page (where the upload screen will visible first)

# Open issues:

- Whenever the user opens localhost:9000 - will always open the UPLOAD page (which is annoying for now, we handle this as well).
- For now, all files type are allowed to upload - but the only sitemap.txt is reading for API return.
- NO unit test covered yet (will ad later).
- Once the user uploads sitemap.txt then the screen will show file name and 100% status, then users need to take action to close this screen.
- For now, behind overlay is visible (Simulation screen is visible not hidden), we can do that as well based on coding if the upload is complete then only it should visible.
- Simulation flow - Added basic check but still, there are few corner cases that are not covered.
- If the user refresh then only he will fetch new data from the sitemap and some for directions flow if the count is more than two if the type field is empty still allowing the user to create a new row.

#images
![plot](Screen Shot 2021-09-06 at 5.51.20 pm)
