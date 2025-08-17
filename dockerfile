# Use uma imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento Vite
CMD ["npm", "run", "dev", "--", "--host"]