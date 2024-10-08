run:
	@echo "[+] Watching Server On Port 8080"
	@ python manage.py runserver 8080


migrate:
	@echo "[+] Running Migrations"
	@python manage.py makemigrations
	@python manage.py migrate
	@python manage.py makemigrations
	@echo "[+] Done!"

killport:
	@echo "[+] Shutting down the port"
	@fuser -k 8080/tcp
	

createuser:
	@echo "[+] Creating a super user"
	@python manage.py createsuperuser
	@echo "[+] User Created!"


install-python-dependencies:
	@echo "[+] Installing python dependencies"
	@pip install -r requirements.txt


install-tailwind-dependencies:
	@echo "[+] Installig tailwind css dependencies"
	@npm install

watch:
	@echo "[+] Watching and Building Tailwind source files"
	@npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch



freeze:
	@echo "[+] Freezing Python Packages"
	@pip freeze > requirements.txt
	@echo "[+] DONE!"