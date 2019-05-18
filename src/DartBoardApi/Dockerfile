FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["DartBoardApi/DartBoardApi.csproj", "DartBoardApi/"]
RUN dotnet restore "DartBoardApi/DartBoardApi.csproj"
COPY . .
WORKDIR "/src/DartBoardApi"
RUN dotnet build "DartBoardApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "DartBoardApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "DartBoardApi.dll"]