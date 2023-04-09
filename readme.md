make sure you have node, python and pip installed in your computer

1) Project download :
create a new folder in your desktop and open cmd in it
enter the following commands in cmd
***
git init
git remote add origin https://github.com/Shiva-sai-krishna/thyrocare.git
git pull origin main
***

2) install the client dependencies :
go to the client folder in cmd 
install the client dependencies by entering the following commands in cmd
***
npm i
***

3) install the server dependencies : 
go to the server folder in cmd
install the server dependencies by entering the following commands in cmd 
***
pip install -r requirement.txt
***

4) run the application :
open two terminals 
enter the client directory in terminal one
enter the server directory in terminal two
enter the following command in terminal one 
***
npm run start
***
enter the following command in terminal two
***
python server.py
***
