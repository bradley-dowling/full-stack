# Full Stack Search Engine
By Bradley Dowling and Ramiz Tanous
### Setup:
- after cloning, cd into `backend`
- install the virtual python environment with `python -m venv env` (NOTE: you may need to install venv as well)
- activate the virtual environment with `env/Scripts/activate` (NOTE: this will be different if you have a mac/linux machine)
- install flask with `pip install flask`
- install python-dotenv with `pip install python-dotenv`
- install whoosh with `pip install Whoosh`
- cd back into main directory and run `npm install` to install react dependencies (NOTE: you may need to install Node.js before this)
- run `npm start` to start up the front-end
- open a new terminal (in the same directory) and run `npm run start-backend` to start up the back-end
- if the react app doesn't appear automatically, open a browser and navigate to `localhost:3000`
- start searching!

### Additional Notes:
The code for our crawler and PageRank algorithm is included, but the raw data collected by the crawler and used by PageRank is not. Page rankings are stored within each document that whoosh is indexed over. The whoosh index files are included here: `backend/whoosh_fs/index/`.
