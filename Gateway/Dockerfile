FROM nginx:latest
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY ./start-gateway.sh /start-gateway.sh
EXPOSE 8080
CMD ["sh", "/start-gateway.sh"]
