FROM swaggerapi/swagger-ui:latest
COPY api.json /api.json
EXPOSE 8080
ENV SWAGGER_JSON=/api.json
CMD ["sh", "/usr/share/nginx/run.sh"]
