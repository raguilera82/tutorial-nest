## Start application in development mode

Edit /etc/hosts to add "mysql" domain link to 127.0.0.1

```bash
$> docker-compose up -d mysql
$> npm run start:watch
```

Go to [http://localhost:3000](http://localhost:3000)

## Start application in production mode

```bash
$> docker-compose up --build -d
```

Go to [http://localhost:3002](http://localhost:3002)