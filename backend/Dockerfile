FROM ruby:3.1

# Instalação das dependências necessárias
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    yarn

# Definindo o diretório de trabalho
WORKDIR /app

# Copiar o Gemfile e Gemfile.lock para dentro do container
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# Instalar as dependências do Bundler
RUN gem install bundler
RUN bundle install

# Copiar o restante dos arquivos do projeto
COPY . /app

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar o Rails
CMD ["rails", "server", "-b", "0.0.0.0"]
